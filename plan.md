# Project Plan

## Goal
- Move current dummy web to Next.js project.
- Keep it CSR-focused and static-export friendly so build output can be hosted on S3, GitHub Pages, or other static hosts.
- Add bilingual UI with default Hindi and navbar switch to English.

## Tasks
- [x] Create and maintain `plan.md` for goals and progress tracking.
- [x] Set up Next.js app structure with static export config.
- [x] Port current UI into Next.js client component.
- [x] Add Hindi (default) and English language switch in navbar.
- [x] Build and verify static export output.
- [x] Port nearly all original `index.html` sections to Next.js structure.
- [x] Expand bilingual labels/content across full page sections.

## Done
- Added this planning file to track work continuously.
- Added Next.js app structure in root with `app/` router.
- Configured static export via `next.config.mjs` (`output: "export"`).
- Added CSR page using client component and state-based interactions.
- Added default Hindi content and navbar language toggle to English.
- Copied local SVG asset to `public/images` for static export compatibility.
- Verified production build and static generation successfully.
- Expanded bilingual coverage for additional sections: trust, testimonials, gallery, announcements, contact labels, register/app blocks.
- Re-verified successful Next.js static build after bilingual expansion.
- Completed near 1:1 content parity with original static page structure in `app/page.js`.
- Aligned Next.js global styles with original `styles.css` for visual parity.
- Re-validated clean build after parity migration.
- Removed legacy static reference files: `index.html`, `styles.css`, `script.js`, and old `assets/` folder.

## Notes
- Legacy static reference files have been cleaned up after migration completion.
- New Next.js app will live in root with `app/` router.
- Next improvement: move translation copy object into separate locale files and add persistent language memory (`localStorage`).
