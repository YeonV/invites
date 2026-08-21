const { PDFDocument, rgb, StandardFonts, degrees } = require('pdf-lib');
const QRCode = require('qrcode');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'public', 'data');
const OUT_DIR = path.join(__dirname, 'cards4');
const LOGO_PATH = path.join(__dirname, 'public', 'logo.svg');
const BASE_URL = 'https://yeonv.github.io/invites/';

// Credit card portrait: 54mm × 85.6mm → points (1mm = 2.835pt)
const CARD_W = 54 * 2.835;   // ~153pt
const CARD_H = 85.6 * 2.835; // ~243pt
const BG = rgb(0, 0, 0); // #000000

async function main() {
  const lookupPath = path.join(DATA_DIR, 'lookup.json');
  if (!fs.existsSync(lookupPath)) {
    console.error('No lookup.json found. Run "npm run generate-invites" first.');
    process.exit(1);
  }

  const lookup = JSON.parse(fs.readFileSync(lookupPath, 'utf8'));
  const logoBytes = await sharp(LOGO_PATH).png().toBuffer();

  fs.mkdirSync(OUT_DIR, { recursive: true });

  // ── One PDF per player (2 pages: side A + side B) ────────────────
  for (const entry of lookup) {
    const pdf = await PDFDocument.create();
    const logo = await pdf.embedPng(logoBytes);
    const font = await pdf.embedFont(StandardFonts.CourierBold);

    // ── Side A: Logo ─────────────────────────────────────────────
    const pageA = pdf.addPage([CARD_W, CARD_H]);
    pageA.drawRectangle({ x: 0, y: 0, width: CARD_W, height: CARD_H, color: BG });

    // Scale logo to ~28% of card height, rotated 90° CCW
    // After CCW rotation: visible width = logoH, visible height = logoW
    const logoScale = (CARD_H * 0.28) / logo.height;
    const logoW = logo.width * logoScale;
    const logoH = logo.height * logoScale;
    // Anchor (bottom-left) shifts after 90° CCW: x = cx + logoH/2, y = cy - logoW/2
    pageA.drawImage(logo, {
      x: (CARD_W + logoH) / 2,
      y: (CARD_H - logoW) / 2,
      width: logoW,
      height: logoH,
      rotate: degrees(90),
    });

    // ── Side B: QR + password ────────────────────────────────────
    const pageB = pdf.addPage([CARD_W, CARD_H]);
    pageB.drawRectangle({ x: 0, y: 0, width: CARD_W, height: CARD_H, color: BG });

    // Generate QR as PNG buffer
    const url = `${BASE_URL}?id=${entry.code}`;
    const qrBuffer = await QRCode.toBuffer(url, {
      width: 600,
      margin: 1,
      color: { dark: '#000000', light: '#3d3d47' },
      errorCorrectionLevel: 'M',
    });
    const qrImage = await pdf.embedPng(qrBuffer);

    // QR centered, ~70% of card width
    const qrSize = CARD_W * 0.7;
    const qrX = (CARD_W - qrSize) / 2;
    const sideGap = qrX; // gap on left/right sides
    const qrY = CARD_H - sideGap - qrSize; // top gap matches side gaps
    pageB.drawImage(qrImage, { x: qrX, y: qrY, width: qrSize, height: qrSize });

    // "Xeon2026" at the bottom
    const text = 'Xeon2026';
    const fontSize = 10;
    const textW = font.widthOfTextAtSize(text, fontSize);
    pageB.drawText(text, {
      x: (CARD_W - textW) / 2,
      y: 10,
      size: fontSize,
      font,
      color: rgb(1, 1, 1),
      opacity: 0.2,
    });

    const pdfBytes = await pdf.save();
    const filename = `${entry.name}.pdf`;
    fs.writeFileSync(path.join(OUT_DIR, filename), pdfBytes);
    console.log(`${entry.name.padEnd(10)} → ${filename}`);
  }

  // ── Also generate one combined PDF (all cards) ─────────────────
  const combined = await PDFDocument.create();
  for (const entry of lookup) {
    const singlePdf = await PDFDocument.load(fs.readFileSync(path.join(OUT_DIR, `${entry.name}.pdf`)));
    const pages = await combined.copyPages(singlePdf, [0, 1]);
    pages.forEach(p => combined.addPage(p));
  }
  const combinedBytes = await combined.save();
  fs.writeFileSync(path.join(OUT_DIR, '_all-cards.pdf'), combinedBytes);

  console.log(`\n✅ ${lookup.length} card PDFs + _all-cards.pdf saved to ${OUT_DIR}`);
}

main();
