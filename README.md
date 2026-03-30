# Invites

Password-gated invite system with QR codes. Each guest gets a unique link that reveals their name, avatar, and event details after entering the correct password.

## How it works

1. Place avatar PNGs in `src/assets/avatars/` (filename = guest name, e.g. `Alice.png`)
2. Run `npm run generate-invites` to create hashed invite files in `public/data/`
3. Each guest gets a QR code linking to `?id={hash}` — only they can see their invite

## Setup

```bash
npm install
npm run generate-invites
npm run dev
```

## Privacy

Avatar filenames contain real names, so they're encrypted via [git-crypt](https://github.com/AGWA/git-crypt). The generated invite data (`public/data/`) is gitignored and built in CI.

```bash
# First-time repo setup
git-crypt init
git-crypt export-key ./git-crypt-key   # back this up!

# CI needs the key as a base64-encoded secret
cat ./git-crypt-key | base64           # store as GIT_CRYPT_KEY repo secret
```

## Scripts

| Script | Description |
|---|---|
| `npm run generate-invites` | Generate hashed JSON + avatar files from `src/assets/avatars/` |
| `npm run generate-cards` | Generate printable QR code cards (PDF) |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |

## Customization

To use for your own event, replace:

- `src/assets/avatars/*.png` with your guest avatars
- `PASSWORD` and `WHATSAPP` in `src/App.jsx`
- Briefing content in the `Briefing` component
- `SECRET` and salt in `generate-invites.cjs`
