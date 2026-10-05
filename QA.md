# Portfolio redesign verification

## Current result

The latest explicit request to look like Digital Meadow resolved the direction: the dark monospace workspace redesign is implemented. It replaces the warm editorial version with a charcoal canvas, left archive navigation, mint selection, compact IBM Plex Mono typography, and an original animated ASCII signal field. Existing content, routes and optimized assets are preserved. No direction clarification remains open.

## Build and source checks

- `npm run build`: passed; 14 route-specific pages are prerendered, with unique metadata and a generated sitemap.
- `npm run typecheck`: passed.
- `npm run lint`: zero errors; two existing warnings remain in the unmounted `src/components/3d/HeroAnimation.tsx` and `src/context/ThemeContext.tsx`.
- React Doctor changed-source scan: zero findings on its last run before the final accessibility-label and deterministic-footer corrections.
- Original central portfolio data and assets remain. Useful legacy biography, education, certificates, experiments and source/demo links are presented through supplemental data.
- No new animation library. Contact SDK loads on submission; development inspection tools do not enter the production import path.

## Browser evidence

Production build served through Vite preview at `http://127.0.0.1:4173` and driven with Playwright through full Chromium on CDP port 9222. Installed Google Chrome could not launch because of a Windows side-by-side configuration error, so measurements use bundled full Chromium, not Chrome Stable or headless-shell.

All 14 routes were captured at 375×812, 768×1024, 1440×900 and 1920×1080, totaling 56 route/viewport checks. Homepage overflow checks additionally passed at 320, 430 and 1024px.

- No horizontal overflow, broken images, route console errors or hydration errors.
- One h1 per route.
- Full axe ruleset: zero violations on all routes at 375px and 1440px. Automated checks do not replace a human screen-reader evaluation.
- Skip link and keyboard focus: passed.
- Mobile menu opening, Escape dismissal and focus return: passed.
- Keyboard experience disclosures, tools and four credentials: passed.
- Canvas redraw, stable pause, reduced motion and offscreen pause: passed. Code review confirms RAF, listener and observer cleanup and visibility handling.
- Contact validation, simulated successful delivery, simulated failed delivery, input preservation and enabled retry: passed. EmailJS requests were intercepted; no real messages were sent.
- Project detail content remains available with JavaScript disabled.
- RuleBox F1 and AMBAG Render demo URLs both returned HTTP 200; full external application functionality was not audited.

Raw captures and reports are local-only in `.qa-results/`, excluded from version control. Reproduce with `node scripts/qa-browser.mjs` after starting the production preview and a Chromium CDP endpoint at port 9222. `QA_INTERACTIONS_ONLY=1` limits the runner to interaction checks.

## Lighthouse

Three production-browser Node API runs per device profile on the final dark build. Scores below are medians. Mobile performance runs were 99, 100 and 99; every other category scored 100 in every run.

| Profile | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Mobile | 99 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

These exceed the original requested 90/95/95/95 thresholds. Mobile performance is not 100 and is not reported as such. Critical fonts are preloaded, production CSS is inlined, and the measured homepage CLS is zero. Reports are in `.qa-results/lighthouse-*.json`; run `node scripts/qa-lighthouse.mjs` to reproduce. Scores are local laboratory measurements, not deployed-origin or field Core Web Vitals.

## Independent review

- Visual reviewer: PASS for the dark composition across all 56 captures, including independently verified current-route highlighting corrections.
- Integrity reviewer: PASS for the dark navigation, canvas lifecycle, motion preferences, responsive sizing and preserved data.
- Final simplification: no discovery counter, trophy system, theme toggle, duplicate footer CTA, icon grid or decorative stock portrait. The original ASCII signal field is the only continuous decorative motion.

## Deployment requirement

Vercel must run the project's own `build` script, not Vite's bare default. `vercel.json` now sets `buildCommand: npm run build` and `outputDirectory: dist`, which is what generates `public/media/*.webp`, `public/social-preview.png`, the 14 prerendered pages and `sitemap.xml`.

A deployment that ran only `vite build` shipped successfully but 404'd on every `/media/*.webp` response, so all project imagery failed while the original PNG/JPG files still resolved. `<picture>` does not fall back to the `<img>` source when the selected WebP 404s. Confirmed against `https://gittydia.vercel.app/`: `/media/rulebox-landing-960.webp` returned `404 X-Vercel-Error: NOT_FOUND`, `/rulebox-landing.png` returned `200`, and `/sitemap.xml` returned the root HTML document instead of XML. After the configuration change, the local production build serves `/media/*.webp` as `200 image/webp` and `/sitemap.xml` as `200 text/xml`.

Redeploy to publish the fix; the live site still shows the old build until then.

## Remaining boundaries

- Nothing was committed, pushed or deployed. Vercel configuration is present, but production routing/CDN behavior needs verification after an actual deployment.
- Real EmailJS delivery and automatic receipts remain unverified; local browser QA used intercepted responses.
- `npm audit --omit=dev` reports three existing high-severity React Router dependency advisories. This redesign did not upgrade the framework or silently alter dependency majors. The full development dependency tree also has outstanding advisories.
- Some original screenshots are low-resolution. WebP conversion reduces payload but cannot invent missing source detail.
- Calendar Commander's date is not recorded, and source material does not establish individual roles for every project. The UI does not fabricate them.
- The latest dark theme supersedes the earlier warm design; no Digital Meadow artwork, branding, exact typeface, copy or trophy system is used.
