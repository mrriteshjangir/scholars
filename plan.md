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
- Configured GitHub Pages project-path compatibility in Next config (`/scholars` basePath + assetPrefix).
- Added GitHub Actions workflow for automatic deploy to GitHub Pages on push to `main`.
- Documented GitHub Pages deployment setup in `README.md`.
- Fixed Hindi-mode localization quality gap by replacing remaining English UI labels/headings/content with Hindi copy across visible sections.
- Added original project-owned illustration assets for science, activity, and games in `public/images`.
- Replaced external placeholder visuals with local copyright-safe illustrations across hero/innovation/gallery/activity sections.
- Added Gen-Alpha style motion enhancements (kinetic hero accent, tilt cards, pulse cards, animated showcase interactions).
- Verified successful static production build after animation and visual upgrade changes.
- Removed old English hero SVG from UI and deleted legacy `public/images/self-growth-activities.svg`.
- Fixed broken image placeholders by correcting SVG validity issues in newly added illustration assets.
- Replaced custom SVG-style visuals with real photo-based visuals for hero, innovation, activity showcase, and gallery sections.
- Removed generated custom SVG files and shifted to real-world image presentation style.
- Fixed missing first innovation card image by adding stable local fallback asset `public/images/ai-classroom.jpg`.
- Reworked image system to use a broader local photo set with non-repeated placements across hero, services, innovation, and gallery.
- Switched from mixed remote image URLs to stable local assets under `public/images` for reliable static hosting.
- Removed outdated fallback image `public/images/ai-classroom.jpg` after full image remapping.
- Replaced hero image with a cleaner classroom-style visual aligned for class 5 to 10 audience positioning.
- Normalized innovation card media dimensions so both top cards keep equal visual size.
- Replaced mic-only innovation visual with a student-focused school image and refreshed classroom card source.
- Realigned website service copy with banner content: class range set to 1-10 and missing services (SenseXR, yoga/healthy diet, social/scientific input, IELTS/military focus) added in bilingual content.
- Added client-provided speech/debate visual (`speech-debate-final.png`) and mapped it to the speech card for exact fit with requested reference style.
- Converted testimonials into single-slide full-width carousel with auto-play, prev/next controls, and bottom indicators.
- Refined testimonial carousel UX to modern animated slider style with side navigation arrows, smooth sliding transitions, and animated bottom indicators.
- Replaced portrait/adult-like visuals with school-age focused group images (classroom, teacher+students, science activity, yoga activity) across activity, innovation, and gallery sections.
- Replaced yoga visual with client-requested local image asset (`public/images/yoga-preschoolers.jpg`) and mapped it in both Hindi and English sections.
- Downloaded two client-provided gallery images locally (`gallery-preprimary-1.jpg`, `gallery-preprimary-2.jpg`) and updated only gallery first three slots without removing existing shared assets.
- Updated testimonials UX so prev/next controls are placed below the card (no text overlap) and autoplay pauses on hover/focus for better readability.
- Reduced global inter-section spacing by tightening `.section` paddings across desktop/mobile breakpoints and lowering section header bottom gap.
- Further compressed visible gaps between consecutive sections by adding `main > .section + .section` top-padding overrides across desktop/mobile.
- Final deployment hardening: switched GitHub Pages project path config to `/scholers` and added base-path-safe image URL handling to prevent image 404 after hosting.

## Notes
- Legacy static reference files have been cleaned up after migration completion.
- New Next.js app will live in root with `app/` router.
- Next improvement: move translation copy object into separate locale files and add persistent language memory (`localStorage`).
- In GitHub repo settings, Pages source must be set to `GitHub Actions`.
- Product rule: when Hindi mode is active, visible UI text should remain fully Hindi for local-town audience.
- Visual policy: use project-owned or clearly reusable assets only (no uncertain copyright sources).
