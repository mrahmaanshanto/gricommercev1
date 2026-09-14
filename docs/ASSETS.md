# Assets

## Brand

The site uses only the brand-guidelines assets in `public/brand/v2/` (below).

The files directly in `public/brand/` (`gridcommerce-logo.jpeg` and the PNGs
derived from it) belong to the retired first design and are **no longer
referenced anywhere**. They are kept only as the originally supplied artwork
and can be deleted.

## Product screenshots

`public/product-screens/` — real captures of the GridCommerce admin, converted
to WebP, capped at 2400px wide, each under 175 KB.

| Key | File | Used on |
|-----|------|---------|
| `orders` | `orders.webp` | Homepage hero, orders showcase, `/features/orders` |
| `omnichannel` | `omnichannel.webp` | Omnichannel showcase, `/features/omnichannel` |
| `pos` | `pos.webp` | POS showcase, `/features/pos` |
| `landingPages` | `landing-pages.webp` | Landing page showcase, `/features/landing-pages` |
| `dashboard` | `dashboard.webp` | Reserved for the capability tabs section |
| `customers` | `customers.webp` | Customers showcase, `/features/customers` |

Registered in `src/data/screenshots.ts` with alt text. Add new captures there
once and every showcase can reference them by key.

**Rule: screenshots are never altered, recreated as fake UI, or cropped to
imply behaviour the product does not have.**

## Merchant photography

`public/merchants/` — six **generated** documentary-style photographs of urban
Bangladeshi small-business life. They depict no real, identifiable person and
are sample content; see `SAMPLE-DATA.md`.

| File | Used on |
|------|---------|
| `merchant-boutique.webp` | Merchant stories — clothing |
| `merchant-electronics.webp` | Merchant stories — electronics |
| `merchant-home-business.webp` | Merchant stories — home business |
| `merchant-cosmetics.webp` | Merchant stories — cosmetics |
| `merchant-grocery.webp` | Migration section and `/migration` |
| `merchant-rider.webp` | Courier and COD lifecycle section |

Each is 1400px wide WebP, 84–143 KB, served through `next/image`.

### Still needed

- **Order detail page** — homepage section 7 is specified as a cinematic
  treatment of this screen with animated annotations. Not yet supplied.
- **Courier / COD reconciliation screen** — section 10.
- **Marketing analytics screen** — section 11.

## Brand guidelines assets

`public/brand/v2/` — rendered from *GridCommerce Brand Guidelines* (vector
Illustrator PDF) at 5x into a transparent canvas, then trimmed.

| File | Source | Use |
|------|--------|-----|
| `gridcommerce-logo.png` | p.10 primary logo | Header, light grounds |
| `gridcommerce-logo-reverse.png` | p.10, wordmark set white | Footer and Dark grounds — the reverse version approved on p.11 |
| `gridcommerce-mark.png` | p.10 secondary mark | Compact header, sign-up / log-in, 404 |
| `gridcommerce-pattern.webp` | p.32 organic pattern, white keyed to alpha | Panel corners only |
| `icon.png` | the mark centred on a transparent 512px square | Favicon |
| `apple-icon.png` | the mark on white, 180px | iOS home-screen icon |

The logo is rendered exactly as supplied — never recoloured, outlined,
shadowed or re-spaced (p.14). These are high-resolution rasters of vector
artwork; **an SVG export from the Illustrator source is still the right
final asset.**

## Integration logos

`public/integrations/` — 31 third-party marks from the GridCommerce logo pack,
downsized for the web (wordmarks to 480px wide, symbols to 256px). Sources,
per-file provenance and the pack's terms are in `INTEGRATION-LOGO-SOURCES.txt`.
Registered in `src/data/integrationLogos.ts`, which records whether each mark
is a symbol (shown with its name) or a wordmark, and which marks exist only as
white-on-dark artwork (`carrybee-dark-background.png`). `pathao-white.png` and
`ecourier-white.png` are the owners' own reverse versions, kept for dark
grounds.

**Every mark is its owner's trademark.** Per the pack: identify supported
services only, never recolour, distort or crop, and confirm partner approval
before publishing. Used by the homepage integrations section.

## Additional generated photography

Eight more generated documentary photographs in `public/merchants/`, 1600px
wide WebP. None depicts a real, identifiable person.

| File | Used on |
|------|---------|
| `hero-businessman-stockroom.webp` | Homepage hero |
| `courier-sorting-hub.webp` | Courier and COD; blog article on returns |
| `courier-cod-handover.webp` | Courier and COD; blog article on COD |
| `merchant-packing-orders.webp` | Solutions — online (homepage and `/solutions/online-commerce`); `/customers` |
| `retail-counter-pos-v2.webp` | Solutions — retail; `/customers`; blog |
| `wholesale-market-cartons.webp` | Solutions — wholesale; `/customers`; `/migration` |
| `merchant-product-photography-v2.webp` | AI product creation; `/customers`; blog |
| `rider-loading-parcels.webp` | Final call to action (background, every page) |

The first six are also reused on inner pages: `merchant-home-business.webp`
on `/about` and a blog article, `merchant-cosmetics.webp` on a blog article.
