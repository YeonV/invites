const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const SECRET = 'You should have known better';
const DATA_DIR = path.join(__dirname, 'public', 'data');
const AVATAR_DIR = path.join(__dirname, 'src', 'assets', 'avatars');

const players = fs.readdirSync(AVATAR_DIR)
  .filter(f => f.endsWith('.png'))
  .sort()
  .map(f => f.replace('.png', ''));

// Map display names to the salt name used when their code was originally generated
const saltAliases = { 'Yannick': 'Yanick' };
function salt(name) { return `${SECRET}::${saltAliases[name] || name}::xeon2026`; }

const encoders = [
  // 1. UUID v4 style (random, formatted as UUID)
  (name) => {
    const hash = crypto.createHash('md5').update(salt(name)).digest('hex');
    return `${hash.slice(0,8)}-${hash.slice(8,12)}-4${hash.slice(13,16)}-a${hash.slice(17,20)}-${hash.slice(20,32)}`;
  },
  // 2. SHA-256 hex
  (name) => crypto.createHash('sha256').update(salt(name)).digest('hex'),
  // 3. SHA-512 hex (extra long)
  (name) => crypto.createHash('sha512').update(salt(name)).digest('hex'),
  // 4. Base64url
  (name) => Buffer.from(salt(name)).toString('base64url'),
  // 5. AES-256-CBC encrypted (looks like real crypto)
  (name) => {
    const key = crypto.scryptSync('xeon-gameshow', 'salt', 32);
    const iv = crypto.createHash('md5').update(name).digest();
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    return Buffer.concat([cipher.update(salt(name)), cipher.final()]).toString('hex');
  },
  // 6. HMAC-SHA256
  (name) => crypto.createHmac('sha256', 'xeon-secret-key').update(salt(name)).digest('hex'),
  // 7. SHA-384 hex
  (name) => crypto.createHash('sha384').update(salt(name)).digest('hex'),
  // 8. Double SHA-256 (bitcoin style)
  (name) => {
    const first = crypto.createHash('sha256').update(salt(name)).digest();
    return crypto.createHash('sha256').update(first).digest('hex');
  },
  // 9. MD5 + SHA1 concat (frankenstein)
  (name) => {
    const md5 = crypto.createHash('md5').update(salt(name)).digest('hex');
    const sha1 = crypto.createHash('sha1').update(salt(name)).digest('hex');
    return md5 + sha1;
  },
  // 10. Base64url of SHA-256 binary
  (name) => crypto.createHash('sha256').update(salt(name)).digest('base64url'),
  // 11. RIPEMD-160 (old-school crypto vibes)
  (name) => {
    try { return crypto.createHash('ripemd160').update(salt(name)).digest('hex'); }
    catch { return crypto.createHash('sha1').update(salt(name)).digest('hex'); }
  },
  // 12. Hex-encoded AES-256-GCM (with auth tag appended)
  (name) => {
    const key = crypto.scryptSync('xeon2026', 'pepper', 32);
    const iv = crypto.createHash('sha256').update(name).digest().subarray(0, 12);
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    const enc = Buffer.concat([cipher.update(salt(name)), cipher.final()]);
    const tag = cipher.getAuthTag();
    return Buffer.concat([iv, enc, tag]).toString('hex');
  },
  // 13. SHA-256 in base32-hex style (uppercase hex)
  (name) => crypto.createHash('sha256').update(salt(name)).digest('hex').toUpperCase(),
  // 14. HMAC-SHA512 truncated to 48 chars
  (name) => crypto.createHmac('sha512', 'final-round').update(salt(name)).digest('hex').slice(0, 96),
  // 15. Whirlpool-ish: triple hash chain
  (name) => {
    let h = salt(name);
    for (let i = 0; i < 3; i++) h = crypto.createHash('sha256').update(h).digest('hex');
    return h;
  },
  // 16. Base64url of HMAC-SHA384
  (name) => crypto.createHmac('sha384', 'xeon-finale').update(salt(name)).digest('base64url'),
  // 17. Simple MD5
  (name) => crypto.createHash('md5').update(salt(name)).digest('hex'),
  // 18. SHA1
  (name) => crypto.createHash('sha1').update(salt(name)).digest('hex'),
];

// Clean data dir
fs.mkdirSync(DATA_DIR, { recursive: true });
for (const f of fs.readdirSync(DATA_DIR)) {
  if (f.endsWith('.json') && f !== 'lookup.json') fs.unlinkSync(path.join(DATA_DIR, f));
}

const lookup = [];

players.forEach((name, i) => {
  const code = encoders[i](name);
  const file = `${code}.json`;
  fs.writeFileSync(path.join(DATA_DIR, file), JSON.stringify({ name }, null, 2));

  // Copy avatar with the same hashed name
  const avatarSrc = path.join(AVATAR_DIR, `${name}.png`);
  if (fs.existsSync(avatarSrc)) {
    fs.copyFileSync(avatarSrc, path.join(DATA_DIR, `${code}.png`));
  }

  lookup.push({ name, code, style: encoders[i].name || `encoder_${i + 1}` });
});

// Save lookup table locally only (gitignored)
fs.writeFileSync(path.join(DATA_DIR, 'lookup.json'), JSON.stringify(lookup, null, 2));
console.log(`✅ Generated ${lookup.length} invites`);
