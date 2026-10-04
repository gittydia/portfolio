# Portfolio audit

- Stack: React 18.3, Vite 5.4, TypeScript 5.5, React Router 6.26, Tailwind 3.4, Lucide; EmailJS contact. Three.js is installed but its two hero components are unmounted. Native RAF rain and timeout typewriter run on the current homepage.
- Routes: `/`, `/projects`, `/projects/:id`, `/competitions`, `/competitions/:id`, `/talks/:id`, `/blog`, `/blog/:id` and redirect fallback.
- Content: `src/data/portfolio.ts` has profile, three projects, three competitions, one talk, five timeline entries, 27 tools, eight methodology items, four social links, three article excerpts. All retained.
- Legacy useful content: `components/sections` has Small Projects Python collection; RuleBox/PDFHero/AMBAG source URLs and available live URLs; personal interests; BSIT at RTU (2023 ongoing), GWA 1.50, academic achiever and coursework; four certificates with verification links; Angono location and phone; August 2026 resume.
- Assets: six project/event previews, talk photo, four certificate images, five resume PDFs. No actual portrait; Unsplash avatar is a stock placeholder and will not represent Dianne. Existing assets retained.
- Styling issues: identical rounded cards, skill icon network failures, rainbow hover borders, duplicated contact CTA, variable names missing on detail pages, no reduced-motion policy, hero typewriter and full-page canvas competing with content.
- SEO: title exists; description wrongly calls this a demo; missing canonical/social cards/robots/sitemap; favicon points to missing vite.svg; no per-route metadata.
- Accessibility: clickable timeline articles lack keyboard activation; modal lacks focus trapping and name; no skip link; contact status is not live; long sections can fail IntersectionObserver threshold; mobile menu lacks focus return and Escape handling.
- Baseline TypeScript fails: missing Three.js types in two dormant components; unused imports in Blog/Contact; incomplete Timeline category record. No existing test suite.
- Browser: installed Chrome fails with Windows side-by-side error; Playwright connects successfully to bundled full Chromium on CDP 9222. Existing live site has icon network failures. Digital Meadow was inspected in that browser and via public content for philosophy only.
- Framework/routing/content remain; reuse section boundaries and central data. No new animation library or heavy scene. No deployment performed without explicit request.
