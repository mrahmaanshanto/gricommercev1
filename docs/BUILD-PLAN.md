# Build plan

Phases 1–6 are complete and verified (`tsc --noEmit`, `eslint` and
`next build` pass; 70 pages prerender). Phases 7–8 remain.

**This build is populated with invented content — read `SAMPLE-DATA.md`.**

## Done

- **Phase 1** — stack chosen, spec read, logo processed, screenshots integrated.
- **Phase 2** — design tokens, typography scale, spacing, motion system, layout
  primitives, navbar, mega menus, mobile drawer, footer.
- **Phase 3** — all 20 homepage sections (table below).
- **Route tree** — every route carries real metadata, breadcrumbs and a
  conversion action. No route renders a placeholder shell any more.
- **Supporting** — robots.txt, sitemap.xml (auto-walks the app directory),
  404 page, JSON-LD organisation and software schemas.

## Homepage sections — complete

All 20 specified sections are built. Order and components:

| # | Section | Component |
|---|---------|-----------|
| 1 | Hero | `marketing/Hero` |
| 2 | Trust / market position | `home/TrustBar` |
| 3 | Fragmentation scroll story | `marketing/Fragmentation` |
| 4 | Capability tabs | `home/CapabilityTabs` |
| 5, 6, 8, 9, 14 | Product showcases | `marketing/ProductShowcase` (data-driven) |
| 7 | Order detail, cinematic | `home/OrderDetail` |
| 10 | Courier + COD lifecycle | `home/CourierLifecycle` |
| 11 | Marketing analytics | `home/Attribution` |
| 12 | Cart recovery | `home/FlowSection` |
| 13 | AI product creation | `home/FlowSection` (human steps flagged) |
| 15 | Solutions | `home/Solutions` |
| 16 | Integrations | `home/Integrations` |
| 17 | Migration | `home/Migration` |
| 18 | Security / trust | `home/Security` |
| 19 | Customer stories | `home/MerchantStories` |
| 31 | Signature scroll story | `home/ScrollStory` |

Two sections carried blockers, handled rather than skipped:

- **Section 7** was blocked on a missing order-detail capture. It is built with
  the orders workspace capture and annotation cards placed *around* the frame
  rather than pinned to pixels, because false pin positions would misrepresent
  a UI that has not been captured. The page says so.
- **Section 19** was blocked on real merchant stories. It is built with sample
  stories and generated photography, labelled sample in the data layer and on
  the page itself.

## Phases 4–6 — complete

- **Phase 4** — `/features` plus all 19 feature pages, driven by the registry
  in `data/sample/features.ts` through one `FeaturePage` template. A route file
  is a slug and its metadata. A slug with no registry entry throws at render
  rather than producing an empty page.
- **Phase 5** — three solution pages (one `SolutionPage` template), `/pricing`
  with a billing toggle and both commercial models represented, `/themes`,
  `/migration`, `/customers`.
- **Phase 6** — `/blog` with six prerendered posts, `/help` with six categories
  and sixteen prerendered articles, `/about`, `/contact` (topic routing via
  `?topic=`), `/login`, `/signup` (three steps with async subdomain check),
  `/status`, and four legal documents.

`PageShell` has been deleted — no route needed it any more.

**Every page is populated with invented content. Read `SAMPLE-DATA.md`.**

## Phases 7–8

- **Phase 7** — the service interfaces in `src/services/` are unchanged and
  still mock-only. `/contact`, `/signup` and `/login` now call them for real,
  so the UI contracts are exercised end to end. Each still carries its
  `TODO(backend)` comment.
- **Phase 8** — QA at 360 / 390 / 430 / 768 / 1024 / 1280 / 1440 / 1920, both
  languages, reduced motion, keyboard navigation, Lighthouse. Not done.

## Brand guidelines design — the site's only design

The whole site is built in the design defined by *GridCommerce Brand
Guidelines* (the 53-page brand PDF). It was reviewed as a second homepage at
`/v2`, then promoted: `/` renders `<BrandHome />`, `/v2` permanently
redirects to `/`, and the earlier monday.com-style design — its components,
accent system, tokens and Poppins font — has been deleted.

- **Copy and logic unchanged.** Every inner page was rebuilt in place (same
  file, same export, same route file); its `COPY` constants, form handlers
  and service calls were carried over verbatim. Homepage copy lives in
  `src/data/copy/home.ts`.
- **Shared building blocks.** `components/brand/primitives.tsx` (BrandLogo,
  Eyebrow, SectionHead, PatternCorner, Panel, IconTile, FloatCard) and
  `marketing/pages/PageHero.tsx` (breadcrumb, eyebrow, H1, lead, optional
  `aside` visual). Every page ends on `BrandCTA` except the auth and legal
  pages.
- **Tokens** are namespaced `gc-` in `globals.css`; `cn()` knows the `gc-`
  type scale.
- **Photography on inner pages** reuses the generated library: solution pages
  (their solution photo plus a floating product capture), customers (collage),
  about, migration, and every blog article (`ARTICLE_PHOTO` in `Blog.tsx`).
- **Favicon** is the brand mark (`public/brand/v2/icon.png`, and a
  white-ground `apple-icon.png` for iOS).

Design decisions:

- Palette only — RoyalBlue `#0A5BCF`, DeepSkyBlue `#18A7F5`, Dark `#111827`
  and their tints (p.21–22). No per-section accent hues; state is carried by
  fill weight instead of extra colours. Functional green/amber/red appear only
  for form feedback and service status.
- Product captures sit on a tinted brand stage: rounded corners, no browser
  chrome, a long blue-tinted shadow, a floating label. Pixels are never altered.
- The isometric pattern (p.32) appears only faded out of a single corner, as
  the guidelines reserve it for design corners.
- Panels clip with `overflow: clip`, not `hidden` — `hidden` creates a scroll
  container and silently breaks the sticky columns inside Security and the
  scroll story.

## Architectural decisions worth knowing

- **Language switching is client-side**, not locale-routed. The brief specifies
  routes like `/pricing`, not `/en/pricing`. Preference persists in
  `localStorage` and sets `<html lang>`. If Bangla pages need to rank
  independently in search, this must become locale routing — a deliberate
  trade-off, not an oversight.
- **Copy lives beside structure.** UI chrome strings are in `src/i18n/
  dictionaries`; marketing copy is `Localized<T>` in `src/data/*`. Both resolve
  through the same provider. This keeps a section's English and Bangla wording
  in one place instead of two distant files.
- **Fonts are self-hosted**, not fetched from Google. Bengali is
  `preload: false` so it only downloads when a visitor switches language.
- **`/help/[category]/[slug]`** rather than the brief's `/help/[slug]` — two
  dynamic segments cannot coexist at the same level in the App Router.

## Browser verification (headless Chromium, this build)

Rendered and inspected at 1440px and 390px. Four real defects were found and fixed:

1. **`cn()` was deleting type-scale classes.** tailwind-merge could not classify
   custom utilities like `text-h2`, so it treated them as text *colour* and
   dropped them when a colour class followed. Every showcase heading was
   rendering at body size. Fixed by teaching `extendTailwindMerge` the
   `font-size` group in `src/lib/cn.ts`.
2. **Scroll story collapsed into a pile.** Motion `x`/`y` percentages resolve
   against the *element's* box, not the container, so all ten tool chips sat on
   top of each other. Now animates container-relative `left`/`top`.
3. **Logo tagline was an unreadable smudge** in the navbar and footer at 26–30px
   lockup height. Added a `wordmark` variant (mark + wordmark, no tagline) as the
   default for UI chrome; the tagline is set in live type in the footer instead.
4. **Mobile screenshots were illegible** — a 2400px admin capture scaled to
   350px. Each screen now has an art-directed crop served through `<picture>`
   below the `md` breakpoint.

### Known polish items, not yet addressed

- Products mega menu wraps some two-word labels onto a second line at 1440px.
  Narrowing the feature rail or widening the columns would fix it.
- The fragmentation section reserves more vertical space than the converged
  state needs; the box could tighten once the animation is final.
- Hero floating cards still overlap the left edge of the orders capture. This is
  deliberate depth, but worth a second opinion.
