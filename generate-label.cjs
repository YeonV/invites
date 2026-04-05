const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateLabel() {
  // Read SVG and change white fills/strokes to black
  let svg = fs.readFileSync(path.join(__dirname, 'public', 'logo-full.svg'), 'utf8');
  svg = svg.replace(/#FFFFFF/g, '#000000');

  // Render SVG to PNG at high resolution
  const logoBuffer = await sharp(Buffer.from(svg))
    .png()
    .toBuffer();

  const logoMeta = await sharp(logoBuffer).metadata();

  // Trim whitespace from logo
  const logoTrimmed = await sharp(logoBuffer).trim().toBuffer();
  const logoTrimmedMeta = await sharp(logoTrimmed).metadata();

  // Load QR code and trim white space
  const qrPath = path.join(__dirname, 'qrcodes', 'TEST.png');
  const qrTrimmed = await sharp(qrPath).trim().toBuffer();
  const qrTrimmedMeta = await sharp(qrTrimmed).metadata();

  // Use trimmed logo height as the target
  const targetHeight = logoTrimmedMeta.height;

  const logoResized = logoTrimmed;
  const logoResizedMeta = logoTrimmedMeta;

  const qrResized = await sharp(qrTrimmed)
    .resize({ height: targetHeight })
    .toBuffer();
  const qrResizedMeta = await sharp(qrResized).metadata();

  const gap = 40;
  const totalWidth = logoResizedMeta.width + gap + qrResizedMeta.width;

  // Composite side by side on white background
  const output = await sharp({
    create: {
      width: totalWidth,
      height: targetHeight,
      channels: 4,
      background: '#ffffff'
    }
  })
    .composite([
      { input: logoResized, left: 0, top: 0 },
      { input: qrResized, left: logoResizedMeta.width + gap, top: 0 }
    ])
    .png()
    .toFile(path.join(__dirname, 'label-TEST.png'));

  console.log(`Label saved: label-TEST.png (${totalWidth}x${targetHeight})`);
}

generateLabel().catch(console.error);
