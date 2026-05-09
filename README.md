# scholars

Next.js (CSR-focused) version of Scholars Space with static export support.

## Run locally

```bash
npm install
npm run dev
```

## Build static files

```bash
npm run build
```

Static output is generated in `out/` and can be uploaded to:
- S3 static website hosting
- GitHub Pages
- Any static hosting platform

## GitHub Pages (Automatic Deploy via Actions)

This repo is configured for project-site hosting at `/scholars`.

1. Push code to `main`
2. GitHub Action builds and deploys automatically
3. Open: `https://<your-username>.github.io/scholars/`

Required GitHub setting:
- Repository `Settings` -> `Pages` -> `Source`: `GitHub Actions`

## Language support

- Default language: Hindi
- Navbar switch: Hindi/English toggle
