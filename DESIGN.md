# Dianne's digital abode: workspace edition

## 1. Atmosphere & Identity

The user's latest instruction resolves the earlier clarification: make it look like Digital Meadow. This supersedes the warm editorial visual direction. The portfolio becomes a quiet dark, monospace workspace: a left-hand archive, small text, open canvas, restrained mint selection, and original ASCII signal artwork. All portfolio content and React/Vite routing remain. No Digital Meadow artwork, flowers, copy, brand assets, exact font or trophy system is copied.

Runtime reference inspected at https://digitalmeadow.studio/ on 2026-10-04: charcoal #1c2225 body, approximately #232b2f main region, cream #f8f9e8 text, sage #adc9bc links, mint #cbe3b3 selection, lavender #d2bdf3 identity, 14px/19px Iosevka Term NF and a ~252px left explorer. These concrete spatial/color observations guide the new system; Dianne's navigation and artwork remain original.

## 2. Color

--bg #232b2f (main), --bg-secondary #1c2225 (explorer), --bg-tertiary #2c383c (media/hover), --fg #eef1df (text), --fg-secondary #b7cbc2 (supporting text), --fg-tertiary #a0b4b3 (metadata), --border #3b4b50, --accent #cbe3b3 (selection), --accent-soft #34483e, --rust #d2bdf3 (identity). Foreground on selected mint is --bg-secondary. Decorative ASCII is muted, never essential information.

## 3. Typography

Self-hosted IBM Plex Mono 400/500, not the reference's Iosevka. One family across all roles. Body .875rem/1.75; small .8125rem; caption .75rem. Homepage name clamp(1.1rem,2vw,1.5rem); detail h1 clamp(1.4rem,3vw,2.25rem). Section titles clamp(1.1rem,2vw,1.5rem); project titles 1.125rem. No serif, oversized editorial display, or italic type. Prose max65ch. Modest type hierarchy uses weight, spacing and semantic headings.

## 4. Spacing & Layout

4px base, space tokens .5/1/1.5/2/3/5rem. Section gap clamp(3rem,6vw,5rem). Fixed left explorer --sidebar-width 15.75rem; main margin equals sidebar, readable article max64rem; main padding clamp(1.25rem,4vw,4rem). Desktop top path strip and bottom status strip. Document owns native scrolling, explorer owns only its bounded overflow. No scroll hijack. At767px and below explorer collapses to a fixed top header with a disclosure menu; main margin zero and normal reading flow. Hero occupies the first viewport as a compact centered introduction in an open ASCII field. Artwork avoids the center reading area. A decorative line-number gutter appears only on desktop hero.

Spatial pattern: fixed navigation beside document-scrolled content, adapted from StyleGallery main-with-rail and layout-skill containment rules. min-width:0 on grid children; long names wrap rather than clipping.

## 5. Components

- Navbar: compact identity, file-like entry points, native folder disclosures for projects and competition collections, permanent external links. Current section has mint background. Mobile toggle retains Escape/focus return. Minimum44px targets; semantic navigation, not an ARIA tree requiring special keyboard behavior.
- Workspace bar: current route text and availability. Noninteractive labels are not buttons.
- Hero: small h1, specific backend description, visible work/contact links. Original ASCII field has named redraw/pause controls, decorative canvas aria-hidden, and a stable reserved center.
- ProjectEntry: retained reusable article and responsive preview, configurable h2/h3 for archive/home hierarchy. Permanent source and detail links, no hover-only content.
- PageLayout: shared archive frame, back link, route-specific h1, figure and prose. Existing descriptions retained without fabricated case-study claims.
- Native details: experience, tools, credentials and contact form; keyboard accessible with clear disclosure signs.
- Footer: compact status strip with explicit 2026 edition, avoiding prerender/hydration clock mismatches.

## 6. Motion & Interaction

Tokens fast220ms, medium550ms, slow900ms; easing cubic-bezier(.16,1,.3,1). Text links shift2px; selected entries change color. Native scrolling. Existing group reveals remain minimal. Canvas signal pattern uses bounded glyphs, pointer influence, ResizeObserver and DPR awareness. Pause preserves the composition; redraw changes seed. Pauses offscreen/hidden; all RAF/observers/listeners clean up. Reduced motion freezes time and pointer effects; all text and controls remain accessible. No flower/meadow/rain animation reproduction and no copied trophies.

## 7. Depth & Surface

Tonal charcoal layers, one-pixel structural rules, mint selection and lavender identity. Zero glass, gradients, rounded card scaffolding or shadows. Interface screenshots retain their original colors, framed by dark media mats. The visual atmosphere comes from the open dark canvas and sparse glyphs, not loud effects.

## 8. Accessibility & Verification

AA contrast, full keyboard navigation, visible focus, natural accessible names, skip link, 44px controls, no hover-only information, no overflow320px+. Four full-route capture sizes375x812,768x1024,1440x900,1920x1080; extra320/430/1024 checks. Browser QA intercepts email, never sends real mail. Existing content inconsistencies and Router advisories are unchanged and documented in AUDIT.md/QA.md. Earlier warm screenshots/scores are not evidence for this new build; regenerate before sign-off.
