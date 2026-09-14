# GridCommerce — marketing website

Frontend for **gridcommerce.com.bd**. *All together. More commerce.*

**Frontend only.** There is no backend, database, authentication, payment
processing, merchant provisioning or third-party API connection in this
repository, and none should be added here. Every data need routes through a
mock service in `src/services/` with a `TODO(backend)` comment naming its
future endpoint.

**This build is populated with invented sample content** so its structure can
be reviewed before real content exists. Everything fabricated is confined to
`src/data/sample/`, plus `CONTACT`/`SOCIAL` in `src/data/site.ts` and the
photographs in `public/merchants/`. A corner chip marks every non-production
build. Read `docs/SAMPLE-DATA.md` before publishing anything.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Node 20+. Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 ·
Motion · Lucide.

## Structure

```
src/
  app/          routes, metadata, robots, sitemap
  components/
    brand/      BrandNavbar, BrandFooter, BrandScreen, primitives
                (BrandLogo, Eyebrow, SectionHead, Panel, IconTile, …)
    brand/home/ every homepage section (BrandHero … BrandCTA)
    layout/     MegaMenu, MobileNav, Footer, LanguageToggle
    ui/         Button, Field, Icon
    marketing/  FeaturePage, FeaturesIndex, SampleBadge,
                pages/ (PageHero + every inner page)
    motion/     Reveal, Stagger, Floating, Parallax, ScrollProgress
  data/         site, navigation, screenshots, homeShowcases, copy/home
  services/     mock transport + lead / contact / auth / signup services
  data/sample/  INVENTED placeholder content — see docs/SAMPLE-DATA.md
  i18n/         provider + en/bn dictionaries + Localized<T>
  lib/          cn, analytics, motion tokens, seo helpers
scripts/
  gen-routes.mjs  regenerates missing route files
docs/
  BUILD-PLAN.md   what is done and what remains
  OPEN-ITEMS.md   real company data still required
  SAMPLE-DATA.md  what is invented, and how to strip it
  ASSETS.md       logo and screenshot inventory
```

## Design language

Every route follows the *GridCommerce Brand Guidelines*: RoyalBlue `#0A5BCF`,
DeepSkyBlue `#18A7F5` and Dark `#111827` with their tints; bold headings in
Century Gothic (falling back to Montserrat, the brand's secondary face) over
Montserrat body copy; rounded white panels floating on a pale canvas;
product captures on tinted stages with rounded corners; and the isometric
pattern faded out of a single panel corner. Pages are built from the
primitives in `src/components/brand/primitives.tsx` and the shared
`PageHero` — reach for those before writing new layout.

## Design tokens

All colour, type, elevation and motion tokens live in `src/app/globals.css`
under `@theme`, namespaced `gc-`. Do not hardcode values in components.

DeepSkyBlue is **not** a text colour on white (contrast too low) — it is for
fills, icons and text on Dark. The `gc-success` / `gc-warning` / `gc-danger`
tokens are functional (form feedback, service status), never decoration.

`/v2`, where this design was first reviewed, permanently redirects to `/`.

## Analytics

`trackEvent()` in `src/lib/analytics.ts` is a no-op that logs in development.
No tracking IDs exist. Wire GA4 / Meta / TikTok inside `dispatch()` — no call
site changes.

## Before production

Read `docs/OPEN-ITEMS.md`. Several real company facts are still missing and are
deliberately rendered as "to be confirmed" rather than invented.
