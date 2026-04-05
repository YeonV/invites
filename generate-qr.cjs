const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

const url = process.argv[2];

if (!url) {
  console.error('Usage: npm run generate-qr <url>');
  process.exit(1);
}

const OUT_DIR = path.join(__dirname, 'qrcodes');
fs.mkdirSync(OUT_DIR, { recursive: true });

// Derive a safe filename from the URL
const safeName = url.replace(/^https?:\/\//, '').replace(/[^a-zA-Z0-9_-]/g, '_');
const filepath = path.join(OUT_DIR, `${safeName}.png`);

QRCode.toFile(filepath, url, {
  width: 800,
  margin: 2,
  color: { dark: '#0e0e1a', light: '#ffffff' },
}).then(() => {
  console.log(`✅ QR code saved to ${filepath}`);
}).catch(err => {
  console.error('Failed to generate QR code:', err.message);
  process.exit(1);
});
