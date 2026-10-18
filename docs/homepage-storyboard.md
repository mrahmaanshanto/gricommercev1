# Homepage storyboard — animations that explain the product

Date: 18 Oct 2026. Scope: `src/components/brand/home/**`, copy in `src/data/copy/{homepage,scenes}.ts`.
Reference brief: "Improve the GridCommerce homepage so its animations explain the product directly to a business owner."

## Findings confirmed on the live page (18 Oct 2026, desktop 1280 and phone 375)

| Review finding | Confirmed | Where |
|---|---|---|
| Animations look like separate floating interface cards | Yes | Hero: two columns of 14 widget cards in a tilted marquee (`HomeHero.tsx`, `HeroGallery.tsx`); every scene is a 560×440 canvas of `Widget`s placed with `At` |
| Module relationships not visible | Yes | Scenes share no order; the hero widgets are unrelated to each other |
| Hero shows many small features before the central workflow | Yes | Hero gallery before `OrderStory` |
| Some panels initially appear empty | Yes | `lazyScene` shows an empty `ScenePlaceholder` until the chunk loads; `InboxScene` and `MoneyScene` canvases start with blank areas |
| Important labels and numbers too small on mobile | Yes | The 560-wide canvas scales to ~0.6 on a 375 phone: 10.5px labels become ~6px |
| Sections repeat benefits without advancing the story | Yes | `Connections` bento repeats tracking, bKash/Nagad, alerts; `SharedStock` adds a cash summary beside the stock scene; the hero gallery previews every later section |
| Several simultaneous actions | Yes | `OrderScene` runs an AI call, courier, payout and bank in one loop; `SocialScene` schedules, publishes and answers comments; `StoreScene` writes copy, connects pixels, copies a link and takes an order |
| Copy promises more than the demo proves | Partly | "Orders, stock and money stay in sync" under a logo marquee; "Stop fake orders" with an automatic "COD off" rule and "Fake order stopped" toast; "Bring everything with you" for migration |
| No replay / step control | Yes | `useTimeline` loops on a clock; no controls anywhere |
| Delivery, payment received and profit need separation | Yes | `OrderScene` shows one status strip; `MoneyScene` mixes a to-do board, a payout and a profit breakdown |
| App-store badges point to `#` | Yes | `APP_LINKS` in `homepage.ts`, used by `layout/Footer.tsx` |

## One demonstration world

| Item | Value |
|---|---|
| Business | Dazzle Shop, an online shop in Dhaka (example) |
| Product | Earbuds Pro |
| Customer | Nusrat Jahan, Mirpur 10, Dhaka |
| Primary order | GC-1042 · 1 × Earbuds Pro · ৳2,450 · cash on delivery |
| Product cost | ৳680 |
| Courier charge | ৳120 (Pathao) |
| Advertising cost | ৳300 |
| Courier payout | ৳2,450 − ৳120 = ৳2,330 |
| Illustrative profit | ৳2,450 − ৳680 − ৳120 − ৳300 = ৳1,350 |
| Separate examples | Risky order GC-1051 (Sabbir Khan, ৳3,800, COD); abandoned cart (Mitu Das, ৳3,200) |

Every figure is labelled "Example" in the scene. GC-1042 appears in the hero, the inbox (where it is created), the order walkthrough, the dashboard (its payout), the landing page (where it was ordered from), the ad-tracking scene and the final CTA visual, always with the same customer, product and amounts.

## Verified product behaviour the scenes may show

Verified in the merchant app (`gricommercevfinal`, front-end logic; AGENTS.md):

- Order from a chat: Inbox › Create order from the conversation; GridAI Copilot drafts a reply and **a person sends it** (`components/inbox/Copilot.jsx`: "Accepting sends it as you; nothing is sent by the card itself"). Autopilot exists but must be switched on.
- Order verification call (auto or manual), approve, "take advance + approve" (`lib/orderFlow.js`); stock is **held** on approval (`lib/stockHolds.js`); courier booking with tracking ID and COD locked; courier webhooks for delivered / failed / return; courier payout queued in a Holding account and matched (`lib/settlements.js`, `courierStatement.js`).
- Courier history per phone number (`orderLinks.js › courierHistory`), customer restrictions: no COD, prepaid above an amount, blocked (`lib/restrictions.js`, each needs a reason and, for blocking, a manager). Nothing blocks automatically.
- Stock: on hand / held / available per place (`lib/stock.js`).
- Abandoned carts with reminder steps and quiet hours (`lib/recovery.js`, `recoveryPolicy.js`); reminders stop at purchase.
- Social posts to connected platforms with per-platform state (`lib/socialPosts.js`); comments handled in the Inbox separately.
- Tracking events: one event shape, `order_placed` and `delivered` are different events, de-duplicated by id (`lib/events.js`); Pixels & events page per platform.
- Import from a CSV/spreadsheet with a dry run and row errors (`lib/productImport.js`); customers, suppliers and opening balances likewise. A Shopify / WooCommerce *store connection* exists only as sales-channel sync, so "migration" is shown as an export-file import with a checked sample.
- Landing pages: pick a product, AI writes a draft, **you review and publish**, the page takes COD orders that appear in Orders with the page as source (`lib/landingPages.js`).
- GridAI merchant questions answer from the books and link to the pages; risk-4 actions wait for approval (`lib/gridai/engine.js`, `aiApprovals.js`).
- Themes: presets with brand colours and fonts; a live preview page exists in the app (`/store?preview=1&preset=`), the website has `/themes`.
- Mobile: an installable web app (`/app`), no store listing. Badges must not link to stores.

## Storyboard matrix

| # | Section | Current problem | Intended understanding | Animation sequence (captions) | Final state | Mobile version |
|---|---|---|---|---|---|---|
| A | Header | Lists areas, no route to the walkthrough | "I know where to explore and get help" | No motion. Add "How it works" to the primary nav (anchor to the walkthrough); keep Book a Demo and the EN/বাংলা toggle | — | Same links in the drawer |
| B | Hero | Marquee of 14 unrelated widgets | "GridCommerce keeps the work around each order connected" | 1 Message arrives (Nusrat asks for Earbuds Pro) · 2 "Order received" GC-1042 ৳2,450 · 3 "Stock updated" 12→11 · 4 "Courier booked" Pathao attaches to the same card · 5 "Payment tracked": Delivered, COD payout due | The connected order card with its four completed steps | One card, full width; captions under it; step controls |
| C | Order to money | Delivery and payment are one strip; bank and AI call compete | "A delivered parcel is not money received; GridCommerce shows both" | 1 New order ৳2,450 · 2 Confirmed by call · 3 Stock reserved · 4 Courier booked PT-88213 · 5 Delivered, payment pending · 6 COD outstanding ৳2,450 · 7 Payout arrives · 8 ৳2,450 − ৳120 = ৳2,330 · 9 Matched to GC-1042 | Order card + deduction + matched payout, two status labels (Delivery / Payment) | Cards stack; two status pills always visible |
| D | Integrations | Logo marquee, no information | "I can see what connects and what moves" | Four tabs: Sales channels / Couriers / Payments / Marketing around GridCommerce; selecting one animates one exchange with its label (order in; booking out, tracking back; payment record ↔ order; sales event out) | Selected category with its exchange | Tabs as chips; diagram stacks vertically |
| E | Fraud check | Return rate shown as proof; automatic "COD off" rule; "fake order stopped" | "I get evidence before paying for delivery, and I choose" | 1 COD order GC-1051 arrives · 2 Phone number checked · 3 Courier history appears · 4 One signal highlighted (3 of 13 parcels delivered) · 5 Options: ask advance / call first / ship anyway · 6 "Ask ৳200 advance" selected | Flag reason + chosen action (bKash link sent) | Order → history → options stacked |
| F | Inbox | Four conversations, AI sends | "I can answer and take the order without copying" | 1 Nusrat asks on Messenger · 2 Stock shown: Earbuds Pro, 12 available · 3 AI draft → person approves and sends · 4 Nusrat confirms · 5 Create order · 6 GC-1042 with customer and product linked | Conversation left, linked order right | Conversation, then the order card |
| G | Daily dashboard | Board + payout + profit at once | "I know what to do next and see when it is done" | 1 Three priorities (to confirm 7 · COD outstanding ৳28,640 · low stock 2) · 2 COD item highlighted · 3 Open GC-1042 payout · 4 Match ৳2,330 · 5 Back: COD outstanding ৳26,310 | Resolved item + remaining two | One priority card at a time |
| H | Landing page builder | Writes, pixels, link, order together | "The page is connected to my operations" | 1 Choose Earbuds Pro · 2 AI draft (credits) · 3 Preview on phone · 4 Review & publish · 5 Customer orders · 6 GC-1042 appears in Orders, source: page | Published page + linked order | Phone preview, then the order |
| I | Ad tracking | Server log and hashes first | "My ad tools receive sales information" | 1 Order placed GC-1042 · 2 Recorded · 3 Sent to connected platforms (Meta ✓, Google ✓, TikTok not connected) · 4 Later: Delivered event, separate | Event, source order, destination statuses | Stacked |
| J | Social posts | Long headline; publish + comments | "I can organise publishing from one place" | 1 Write · 2 Pick channels (per-platform note) · 3 Date & time · 4 On the calendar · 5 Scheduled | Readable calendar entry with destinations | Composer then calendar |
| K | Cart recovery | Immediate reminder | "Customers get a reminder; buyers are not chased again" | 1 Mitu leaves ৳3,200 cart · 2 Reminder due in 1 hour (visible delay) · 3 WhatsApp with cart link sent · 4 Returns · 5 Orders · 6 Remaining reminders: Cancelled — customer ordered | Recovered order + stopped follow-ups | Stacked |
| L | Comparison | Labels "Needs apps or extra cost" | "I can compare setup and cost" | No new motion; legend: Included / Add-on or integration required / Not native | — | Cards (existing) |
| M | Migration | "Bring everything" | "I can see what moves and check it" | 1 Choose source (Shopify / WooCommerce export, spreadsheet) · 2 Choose products, customers, orders · 3 Sample import · 4 2 rows need review · 5 Confirm · 6 Counts match | Imported counts | Stacked |
| N | GridAI | Bento repeats other features | "The assistant helps me understand and act" | 1 Ask "Which courier payments are still outstanding?" · 2 Records highlighted · 3 Answer · 4 Open the orders · 5 Suggested action, approval needed | Answer + records | Stacked |
| O | Themes | Continuous columns | "I can see how my store will look" | Selectable gallery: theme · desktop/phone · brand colour · result · open preview | Chosen theme | Same |
| P | POS & inventory | Stock + cash summary | "My channels work from one stock" | 1 Available 12 · 2 Counter sale · 3 On hand 11 · 4 Online order · 5 Reserved 1 · 6 Available 10 on the website | On hand / Reserved / Available consistent | Stacked |
| Q | Business types | Late relevance | "This fits the way I sell" | Audience selector with one static situation each | — | Chips |
| R | Pricing | Credits and limits unclear | "I know what I get and pay" | Still prices; billing toggle only; add trial, credits, at-limit lines | — | Same |
| S | Onboarding | General steps | "I can picture how I start" | 4 steps with a small illustration each, clickable | — | Same |
| T | FAQ | Vague answers | "My concerns have concrete answers" | Accordion; answers aligned to verified behaviour | — | Same |
| U | Final CTA | Generic | "I know what the demo covers" | Static completed-order visual | — | Same |
| V | Footer app badges | Point to `#` | "I can work from my phone" | Badges show "Coming soon"; one phone task card | — | Same |

## Motion rules applied

Scenes run through one player (`scenes/player.tsx`): autoplay while on screen, captions beside the action in reading order, Prev / Play-Pause / Next / Replay, autoplay pauses after any manual step, the result is held before looping, reduced motion shows the final state and the stepper still works, nothing moves off screen. On phones a scene lays its cards out in a single column at full size instead of scaling the desktop canvas.

## Built (18 Oct 2026, not deployed)

| # | What changed | Where |
|---|---|---|
| A | "How it works" first in the primary nav (desktop + drawer) → `#how-it-works` on the order story | `data/navigation.ts` |
| B | Hero marquee → `HeroScene` (5 beats, one order card); proof row without a customer count; no "one click" / "fake orders stopped" | `hero/HomeHero.tsx`, `scenes/HeroScene.tsx`, `copy/homepage.ts › HERO, HERO_VARIANTS` |
| C | `OrderScene` 8 beats: Delivery and Payment as two statuses, COD-with-courier strip, payout 2,450 − 120 = 2,330 matched | `scenes/OrderScene.tsx`, `copy/scenes.ts › ORDER_SCENE` |
| D | Logo marquee → selectable diagram (24 apps from the panel's `connections.js › APPS`, six groups, what is sent / what comes back, one sentence per app; auto-cycle stops on first touch, none under reduced motion) | `sections/Integrations.tsx`, `copy/homepage.ts › CONNECT.integrations` |
| E | `FraudScene` GC-1051: number checked → courier history → one signal (3 of 13 delivered) → three options → ৳200 advance asked. Copy says "risky orders reviewed", never "fraud stopped" or an automatic block | `scenes/FraudScene.tsx`, `FEATURES.fraud` |
| F | `InboxScene`: stock beside the chat, GridAI draft, person approves, order GC-1042 created from the chat | `scenes/InboxScene.tsx`, `FEATURES.inbox` |
| G | `MoneyScene`: three priorities, the COD record opened, payout matched, COD outstanding 28,640 → 26,190 | `scenes/MoneyScene.tsx`, `CONTROL` |
| H | `StoreScene`: product → GridAI draft (credits) → phone preview → publish + link → Sumaiya orders → GC-1063 in Orders with its source. No per-page pixel (the panel's tracking is store-wide) | `scenes/StoreScene.tsx`, `FEATURES.store` |
| I | `TrackingScene`: ad click → order_placed once (pixel + server deduped) → Meta ✓ Google ✓ TikTok not connected → delivered as its own event → the order's figures (illustrative) | `scenes/TrackingScene.tsx`, `FEATURES.tracking` |
| J | `SocialScene`: write once → platforms with their rule → time → calendar → published per platform → comment lands in the Inbox | `scenes/SocialScene.tsx`, `FEATURES.social` |
| K | `RecoveryScene`: cart left → 1 h wait → consent + quiet-hours check → WhatsApp with cart link → order GC-1047 → later reminders cancelled | `scenes/RecoveryScene.tsx`, `FEATURES.recovery` |
| L | Compare marks carry words (Yes / Partly / No) and a legend; GridCommerce claims softened to what the panel does | `sections/CompareSection.tsx`, `copy/compare.ts` |
| M | `MigrateScene`: export files → choose → map columns → 20-row sample, 2 to fix → confirm → counts match, customers matched by phone | `scenes/MigrateScene.tsx`, `MIGRATION` |
| N | Bento → one GridAI job (`GridAiScene`): Banglish question → live stock/price/delivery → draft; Autopilot on this chat sends; a discount over the limit waits for approval; declined in the morning. Risk levels 1–4 shown | `sections/Connections.tsx`, `scenes/GridAiScene.tsx`, `CONNECT.gridai` |
| O | Theme marquee → selectable gallery (Signal, Nokshi, Counter, Rupkotha; computer / phone; brand colour) | `sections/Themes.tsx`, `THEMES` |
| P | `StockScene`: 13 on hand → counter sale 12 → GC-1042 reserves 1 → available 11 → website 11; the cash summary left the section | `scenes/StockScene.tsx`, `sections/SharedStock.tsx` |
| Q | Audience selector (Online seller · Shop · Shop + online · Wholesale), one day each in the demo world | `BrandSolutions.tsx`, `FIT` |
| R | Pricing "Good to know": trial, usage credits, no commission, VAT where it applies | `sections/PricingSection.tsx`, `copy/compare.ts › PRICING_HOME` |
| S | Three real steps: sign in + system, add products (import with a checked sample), connect courier + payments | `sections/StartSteps.tsx`, `START` |
| T | FAQ aligned (AI drafts / person approves, payout matched after the courier pays, courier history, import with sample) | `FAQ` |
| U | Final CTA: Book a demo + Start free trial | `BrandCTA.tsx`, `FINAL_CTA` |
| V | App badges "Coming soon" (`aria-disabled`, not clickable until `APP_LINKS` has URLs) + one phone task | `layout/Footer.tsx`, `copy/footer.ts` |

Engine: `scenes/kit.tsx` (`Scene`, `At order`, `Show`, compact phone column) and `scenes/player.tsx` (clock, captions, controls, reduced motion). Verified: `tsc`, `eslint`, `next build`; desktop 1280, tablet 764 and phone 375 in the browser; EN and BN; no console errors.

### One demo world, as built

Nusrat Jahan asks on Messenger → GC-1042 Earbuds Pro ৳2,450 COD, Mirpur 10 (hero, inbox, order, stock, dashboard, tracking, GridAI). GC-1051 Sabbir Khan ৳3,800 is the risky COD order (fraud). GC-1063 Sumaiya Akter is the landing-page order. GC-1047 Mitu Das ৳3,200 is the recovered cart.

### Product facts and assets still needed

1. **Customer count.** "Trusted by 100+" was removed everywhere until there is a number to cite.
2. **VAT.** The panel bills subscriptions at 15 % (`lib/platform/billing.js › vatRate`); `pricing.ts` says nothing. Confirm 15 % and whether listed prices are ex-VAT; the note now reads "VAT is added where it applies".
3. **Trial.** Day 16 (pause or downgrade) and whether a card is needed to start; copy only says nothing is charged until you continue.
4. **Credit prices.** Per-unit SMS / WhatsApp / email / AI prices; only the ৳600 / 10,000 SMS pack and 100 / 500 AI credits per plan exist in the data.
5. **Inbox packaging.** `pricing.ts` lists "Inbox and automation" as a ৳1,200 add-on, so the compare table marks Inbox "Partly"; the package planner treats messaging as its own module. One answer is needed.
6. **Per-order profit after ads.** The panel reports profit by channel and cost per delivered order by campaign, not per order; the tracking scene's ৳300 / ৳1,350 are labelled illustrative.
7. **GridAI example figures.** Dhaka delivery ৳60 and the ৳100 discount limit come from shop settings; the scene is stamped Example.
8. **App stores.** Release date / URLs for Google Play and the App Store (badges stay "Coming soon").
9. **Logos.** Pinterest, Google Merchant Center and WooCommerce (drawn with the WordPress mark) have no asset under `public/integrations/`.
10. **Themes.** Rupkotha is a pack theme modelled on a reference store; say whether marketing shows only the three core presets.
11. **Reduced motion and phone** were checked in code and in the browser at 375 px; the headless QA report in the scratchpad lists anything left.
