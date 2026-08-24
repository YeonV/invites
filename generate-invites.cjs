const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const SECRET = 'You should have known better';
const DATA_DIR = path.join(__dirname, 'public', 'data');
const AVATAR_DIR = path.join(__dirname, 'src', 'assets', 'avatars');

// Canonical player order — DO NOT reorder existing names, only append new ones.
// Each player's encoder is determined by their index here, so reordering would
// invalidate already-distributed invite codes/QRs.
const PLAYER_ORDER = [
  'Andreas', 'Bastian', 'Blade', 'Fabio', 'Frank', 'Jan', 'Johanna',
  'Leon', 'Lorain', 'Pepe', 'Saida', 'Sinja', 'Susi', 'Tom',
  'Tristan', 'Xeon', 'Yannick', 'Zoe',
  'Pablo', 'Berit',
  'Kumar', 'Janina G', 'Rabea', 'Janina D', 'Melis', 'Alex', 'Fabian', 'Max'
];
// 'Jan' sits in the player block above but plays as an analyst; he keeps his
// original index (and therefore his already-printed code) either way.
const ANALYST_NAMES = new Set([
  'Berit', 'Janina G', 'Rabea', 'Janina D', 'Melis', 'Alex', 'Fabian', 'Max',
  'Jan', 'Ricarda', 'Phil'
]);
// Dropouts whose already-printed card was handed to somebody else. The slot keeps
// its position and keeps deriving its code from the ORIGINAL name, so the QR on the
// printed card stays byte-identical — only the invite it serves changes.
// Never delete a replaced name from PLAYER_ORDER: its index is what pins the code.
const REPLACEMENTS = {
  'Xeon': 'Ricarda',
  'Berit': 'Phil',
};
function displayName(name) { return REPLACEMENTS[name] || name; }

const players = PLAYER_ORDER.filter(name =>
  fs.existsSync(path.join(AVATAR_DIR, `${displayName(name)}.png`))
);

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
  // 19. SHA3-512 hex
  (name) => crypto.createHash('sha3-512').update(salt(name)).digest('hex'),
  // 20. SHA3-256 hex
  (name) => crypto.createHash('sha3-256').update(salt(name)).digest('hex'),
  // 21. SHA-224 hex
  (name) => crypto.createHash('sha224').update(salt(name)).digest('hex'),
  // 22. HMAC-SHA1 hex
  (name) => crypto.createHmac('sha1', 'xeon-extension').update(salt(name)).digest('hex'),
  // 23. SHA-512 base64url (longer than #10, distinct algo)
  (name) => crypto.createHash('sha512').update(salt(name)).digest('base64url'),
  // 24. AES-192-CTR hex
  (name) => {
    const key = crypto.scryptSync('analyst-key', 'salt2', 24);
    const iv = crypto.createHash('md5').update(`ctr-${name}`).digest();
    const cipher = crypto.createCipheriv('aes-192-ctr', key, iv);
    return Buffer.concat([cipher.update(salt(name)), cipher.final()]).toString('hex');
  },
  // 25. SHA3-384 hex
  (name) => crypto.createHash('sha3-384').update(salt(name)).digest('hex'),
  // 26. HMAC-SHA3-256 base64url
  (name) => crypto.createHmac('sha3-256', 'xeon-2026-final').update(salt(name)).digest('base64url'),
  // 27. PBKDF2 (sha256, 1000 iters, 32 bytes) hex
  (name) => crypto.pbkdf2Sync(salt(name), 'xeon-pepper', 1000, 32, 'sha256').toString('hex'),
  // 28. Quintuple SHA-512 chain
  (name) => {
    let h = salt(name);
    for (let i = 0; i < 5; i++) h = crypto.createHash('sha512').update(h).digest('hex');
    return h;
  },
  // 29. scrypt KDF (48 bytes) base64url — spare; next free slot for a new guest
  (name) => crypto.scryptSync(salt(name), 'xeon-lastcall', 48).toString('base64url'),
];

// Clean data dir
fs.mkdirSync(DATA_DIR, { recursive: true });
for (const f of fs.readdirSync(DATA_DIR)) {
  if (f === 'lookup.json') continue;
  if (f.endsWith('.json') || f.endsWith('.png')) fs.unlinkSync(path.join(DATA_DIR, f));
}

const lookup = [];

players.forEach((name) => {
  const i = PLAYER_ORDER.indexOf(name);
  const code = encoders[i](name); // roster name, never the display name
  const shown = displayName(name);
  const role = ANALYST_NAMES.has(shown) ? 'analyst' : 'player';
  const file = `${code}.json`;
  fs.writeFileSync(path.join(DATA_DIR, file), JSON.stringify({ name: shown, role }, null, 2));

  // Copy avatar with the same hashed name
  const avatarSrc = path.join(AVATAR_DIR, `${shown}.png`);
  if (fs.existsSync(avatarSrc)) {
    fs.copyFileSync(avatarSrc, path.join(DATA_DIR, `${code}.png`));
  }

  lookup.push({ name: shown, code, role, style: encoders[i].name || `encoder_${i + 1}` });
});

// Save lookup table locally only (gitignored)
fs.writeFileSync(path.join(DATA_DIR, 'lookup.json'), JSON.stringify(lookup, null, 2));
console.log(`✅ Generated ${lookup.length} invites`);
