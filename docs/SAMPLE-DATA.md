# Sample data

This build is populated with **invented content** so its structure, layout,
motion and information architecture can be reviewed before real content exists.

**None of it is real. It must be removed or replaced before production.**

This deliberately suspends the rule in `OPEN-ITEMS.md` that no company fact is
ever invented. That rule still governs the production site.

## Where it lives

Everything fabricated is confined to `src/data/sample/`, so one search finds
every call site:

```bash
grep -rn "data/sample" src
```

| File | Contains |
|------|----------|
| `trust.ts` | Merchant counts, order value, district and courier figures; eight invented business names |
| `capabilities.ts` | The six capability tabs |
| `merchants.ts` | Four merchant stories — names, quotes, metrics, photo references |
| `lifecycle.ts` | Courier/COD stages, attribution table rows, cart-recovery and AI steps, scroll-story beats |
| `integrations.ts` | Solutions, integration provider lists, migration sources, security capabilities |
| `pricing.ts` | Three plans, four add-on modules, pricing FAQ |
| `articles.ts` | Six blog posts, six help categories with articles, about values, status states |
| `features.ts` | Supporting copy for all 19 feature pages |
| `pages.ts` | Themes, about, status and legal document structures |

## Outside that directory

Two exceptions, both marked in place:

- **`src/data/site.ts`** — `CONTACT` and `SOCIAL` were `PENDING` / empty. They
  now hold invented emails, a phone number, an address and social handles so
  the footer contact row, the WhatsApp CTA and `/contact` render. The `PENDING`
  mechanism is untouched: restore any field to `PENDING` and its
  "to be confirmed" state returns.
- **`public/merchants/*.webp`** — six generated photographs (see below).

## Photography

`public/merchants/` holds six generated documentary-style photographs of urban
Bangladeshi small-business life — a boutique, an electronics counter, a
home-run business, a grocery shop, a cosmetics shop and a delivery rider.

They are **generated images and depict no real, identifiable person**, which
satisfies the constraint in `OPEN-ITEMS.md` that merchant photography "must not
imitate identifiable people". Each is 1400px wide WebP, 84–143 KB.

## Visible marking

`SampleBadge` renders a corner chip reading "Sample data — not real content" in
every non-production build, so a review deployment cannot be mistaken for a
real one. It compiles out of production builds.

Several sections also carry an in-page note: customer stories, the attribution
table, integrations, themes, status and every legal document.

## Claims still not made

The prohibited-claims list in `OPEN-ITEMS.md` is still honoured. Nothing on the
site claims an uptime percentage, a security certification, a trial duration,
or uses "best", "number one", "guaranteed", "100% secure" or "unlimited" as a
marketing claim. The pricing page's featured plan carries no "most popular"
badge for this reason.

Legal documents render headings and a table of contents only; every clause body
says in both languages that the wording is a placeholder and carries no legal
effect.

## Brand-design additions

- **Eight more generated photographs** in `public/merchants/` — a stockroom,
  a courier hub, a cash-on-delivery handover, order packing, a shop counter,
  a wholesale market, product photography and a rider loading parcels. Listed
  in `ASSETS.md`. Like the first six, they depict no real person.
- **Five more integration names** in `data/sample/integrations.ts` (CarryBee,
  Upay, Dutch-Bangla Bank, Visa, Mastercard), added because the logo pack
  supplies their marks.
