# Open items — real data required before production

> **Status: this build is populated with invented sample content so the
> structure can be reviewed.** Items below marked *filled with sample data* now
> render invented values instead of a "to be confirmed" state. The requirement
> is unchanged — real values are still needed before launch. See
> `SAMPLE-DATA.md` for exactly what was fabricated and how to strip it.

Outside of that sample layer, nothing in this repository invents company facts.

## Blocking for launch

| # | Item | Where it is used | Current state |
|---|------|------------------|---------------|
| 1 | **Pricing model and final prices** | `/pricing` | *Filled with sample data.* Built showing **both** models — three plans plus add-on modules — so either can be reviewed. The commercial choice is still unmade and every price is invented. |
| 2 | **Sales email, support email, phone, WhatsApp number** | Footer, `/contact`, WhatsApp CTAs | *Filled with sample data.* The `PENDING` mechanism is intact — restore any field to `PENDING` and its "to be confirmed" state returns. |
| 3 | **Registered address** | Footer, `/contact` | *Filled with sample data.* |
| 4 | **Social accounts** | Footer | *Filled with sample data.* An empty `SOCIAL` array still renders no social row. |
| 5 | **Legal copy** | `/terms`, `/privacy`, `/refund-policy`, `/data-policy` | Built as structure only — headings and a table of contents. Every clause body states in both languages that the wording is a placeholder with no legal effect. Copy must still come from counsel. |
| 6 | **Vector logo (SVG)** | Everywhere | Current variants are derived from the supplied raster lockup. See `ASSETS.md`. |

## Content still to be supplied

- **Customer stories** — *filled with sample data.* `/customers` and homepage
  section 19 carry four invented merchants, labelled sample in the data layer
  and visibly on the page. No real merchant is named and no figure is
  evidenced. Still blocked for launch.
- **Theme demo URLs** — `/themes` is built with six sample theme families and
  still needs live preview links. The page says preview links are unavailable.
- **Blog and help articles** — *filled with sample data.* Six posts and sixteen
  help articles, all invented, prerendered from `data/sample/articles.ts`.
- **Merchant photography** — *filled with sample data.* Six generated
  documentary-style photographs are in `public/merchants/`. They depict no
  real, identifiable person.
- **Integration confirmation** — the integrations section will only list
  providers confirmed against the build specification and a live contract.

## Claims deliberately not made anywhere on the site

Uptime percentage · number of merchants · revenue processed · ROAS figures ·
security certifications · trial duration · discount amounts · "best", "number
one", "guaranteed", "100% secure", "unlimited".

## Brand guidelines

- **Century Gothic web font licence.** The guidelines set headings in Century
  Gothic, a commercial Monotype face. The site references it by name and never
  bundles it. Anyone without it installed as a system font — which includes
  macOS machines where it only ships inside Microsoft Office's private font
  folder — sees Montserrat Bold, the brand's own secondary typeface. Buying a
  web licence and adding the `.woff2` via `next/font/local` makes headings
  render as specified for every visitor.
- **Vector logo.** The new lockup exists only inside the guidelines PDF; see
  `ASSETS.md`.

- **Integration partner approval.** The homepage shows the real marks of couriers,
  payment providers, channels and ad platforms. A logo implies a supported
  integration; each partner's approval and current brand rules must be
  confirmed before publishing (`INTEGRATION-LOGO-SOURCES.txt`).
