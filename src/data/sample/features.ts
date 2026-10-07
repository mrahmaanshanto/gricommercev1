/** SAMPLE DATA — invented supporting copy. See ./index.ts
 *
 *  The supporting feature pages. Each one sits inside a primary module from
 *  `data/copy/modules.ts`, which names the page's eyebrow and breadcrumb and
 *  leads its related links. The primary modules themselves are not in this
 *  registry: their pages render from the module copy.
 *
 *  Revised Oct 2026 against the merchant app's screens: copy describes only
 *  what the app offers. Adding a feature here is the whole job — the route file
 *  is a slug and its metadata, and the menu and /features index read this list.
 */
import { loc, type Localized } from "@/i18n/types";
import type { ModuleSlug } from "@/data/copy/modules";
import { SCREENS, type ProductScreen } from "@/data/screenshots";
import type { Accent } from "@/lib/accents";

export type FeaturePoint = { icon: string; label: Localized; body: Localized };

export type FeatureEntry = {
  slug: string;
  /** The primary module this page belongs to. */
  module: ModuleSlug;
  accent: Accent;
  icon: string;
  /** Short name used in nav, cards and breadcrumbs. */
  name: Localized;
  title: Localized;
  body: Localized;
  points: FeaturePoint[];
  screen?: ProductScreen;
};

/** Menu and index order. */
export const FEATURES: FeatureEntry[] = [
  {
    slug: "landing-pages", module: "storefront", accent: "orange", icon: "LayoutTemplate",
    name: loc("Landing Pages", "ল্যান্ডিং পেজ"),
    title: loc("Build pages for ad traffic without a developer.", "ডেভেলপার ছাড়াই বিজ্ঞাপনের জন্য পেজ তৈরি করুন।"),
    body: loc(
      "Start from a template, add the sections you need, set the offer and publish a single-product page before the campaign goes live.",
      "টেমপ্লেট থেকে শুরু করুন, প্রয়োজনীয় সেকশন যোগ করুন, অফার ঠিক করুন, আর ক্যাম্পেইন শুরুর আগেই সিঙ্গেল-প্রোডাক্ট পেজ প্রকাশ করুন।",
    ),
    points: [
      { icon: "LayoutTemplate", label: loc("Templates to start from", "শুরু করার টেমপ্লেট"),
        body: loc("COD single product, long-form offer, video first or a blank page.", "COD সিঙ্গেল প্রোডাক্ট, লং-ফর্ম অফার, ভিডিও-ফার্স্ট বা ফাঁকা পেজ।") },
      { icon: "MousePointerClick", label: loc("A section library", "সেকশন লাইব্রেরি"),
        body: loc("Gallery, benefits, FAQ, countdown, upsell, WhatsApp button and the order form.", "গ্যালারি, সুবিধা, FAQ, কাউন্টডাউন, আপসেল, WhatsApp বাটন ও অর্ডার ফর্ম।") },
      { icon: "Smartphone", label: loc("Mobile and desktop preview", "মোবাইল ও ডেস্কটপ প্রিভিউ"),
        body: loc("Check the page the way most ad traffic will see it.", "বেশিরভাগ বিজ্ঞাপনের ভিজিটর যেভাবে দেখবেন, সেভাবে যাচাই করুন।") },
      { icon: "Tag", label: loc("Bundles and quantity discounts", "বান্ডেল ও পরিমাণভিত্তিক ডিসকাউন্ট"),
        body: loc("Set the offer on the page itself, with a publish checklist before it goes live.", "পেজেই অফার ঠিক করুন, প্রকাশের আগে চেকলিস্ট মিলিয়ে নিন।") },
    ],
    screen: SCREENS.landingPages,
  },
  {
    slug: "cart-recovery", module: "storefront", accent: "turquoise", icon: "ShoppingCart",
    name: loc("Cart Recovery", "কার্ট রিকভারি"),
    title: loc("Turn abandoned carts back into orders.", "ফেলে যাওয়া কার্ট আবার অর্ডারে ফেরান।"),
    body: loc(
      "See every cart left behind and why it stalled, then follow up by SMS, WhatsApp, email or a call, within the limits you set.",
      "ফেলে যাওয়া প্রতিটি কার্ট ও থেমে যাওয়ার কারণ দেখুন, তারপর আপনার ঠিক করা সীমার মধ্যে SMS, WhatsApp, ইমেইল বা কলে ফলোআপ করুন।",
    ),
    points: [
      { icon: "Filter", label: loc("Every cart has a state", "প্রতিটি কার্টের অবস্থা"),
        body: loc("Waiting, contactable, payment issue, stock blocked, recovered or expired.", "অপেক্ষমাণ, যোগাযোগযোগ্য, পেমেন্ট সমস্যা, স্টক নেই, ফিরে এসেছে বা মেয়াদোত্তীর্ণ।") },
      { icon: "Clock", label: loc("Timed reminders", "নির্ধারিত সময়ে রিমাইন্ডার"),
        body: loc("Up to three reminders, with an optional one-time coupon.", "সর্বোচ্চ তিনটি রিমাইন্ডার, চাইলে এককালীন কুপনসহ।") },
      { icon: "ShieldCheck", label: loc("Checks before contact", "যোগাযোগের আগে যাচাই"),
        body: loc("Consent, quiet hours, message limits, stock and payment are checked first.", "আগে সম্মতি, নীরব সময়, মেসেজ সীমা, স্টক ও পেমেন্ট যাচাই হয়।") },
      { icon: "Phone", label: loc("A person can call", "দরকারে ফোন কল"),
        body: loc("Queue a call for your team when a message is not enough.", "মেসেজে কাজ না হলে টিমের জন্য কল কিউ করুন।") },
    ],
  },
  {
    slug: "products", module: "inventory", accent: "violet", icon: "Package",
    name: loc("Products", "প্রোডাক্ট"),
    title: loc("A catalogue that stays tidy as it grows.", "ক্যাটালগ বড় হলেও গোছানো থাকে।"),
    body: loc(
      "Variants, categories, brands and bulk edits that keep their shape at ten products and at ten thousand.",
      "ভ্যারিয়েন্ট, ক্যাটাগরি, ব্র্যান্ড ও বাল্ক এডিট—দশটা পণ্যেও গোছানো, দশ হাজারেও।",
    ),
    points: [
      { icon: "Layers", label: loc("Variants without duplicates", "ডুপ্লিকেট ছাড়া ভ্যারিয়েন্ট"),
        body: loc("Each variant has its own SKU, price and image under one product.", "এক প্রোডাক্টের অধীনে প্রতিটি ভ্যারিয়েন্টের আলাদা SKU, দাম ও ছবি।") },
      { icon: "Table", label: loc("Bulk edit with a preview", "প্রিভিউসহ বাল্ক এডিট"),
        body: loc("Edit in a spreadsheet view, see before and after, and roll back.", "স্প্রেডশিট ভিউতে এডিট করুন, আগে-পরে দেখুন, দরকারে ফেরান।") },
      { icon: "FileText", label: loc("Import from CSV", "CSV থেকে ইমপোর্ট"),
        body: loc("Match the columns and run a check before anything is imported.", "কলাম মিলিয়ে নিন, ইমপোর্টের আগে একবার যাচাই চালান।") },
      { icon: "ScanBarcode", label: loc("Tracked the way you sell", "যেভাবে বিক্রি করেন সেভাবে ট্র্যাক"),
        body: loc("By quantity, serial, IMEI, batch or weight.", "পরিমাণ, সিরিয়াল, IMEI, ব্যাচ বা ওজন অনুযায়ী।") },
    ],
  },
  {
    slug: "ai-product-creation", module: "inventory", accent: "violet", icon: "Sparkles",
    name: loc("AI Product Writing", "AI প্রোডাক্ট রাইটিং"),
    title: loc("It writes the draft. You decide what is saved.", "খসড়া লেখে AI। কী সেভ হবে ঠিক করেন আপনি।"),
    body: loc(
      "While adding a product, ask AI to draft the descriptions, SEO text, tags, FAQ and photo alt text, in English or Bangla, then edit before you save.",
      "প্রোডাক্ট যোগ করার সময় AI দিয়ে বর্ণনা, SEO টেক্সট, ট্যাগ, FAQ ও ছবির alt টেক্সটের খসড়া—ইংরেজি বা বাংলায়—তৈরি করুন, তারপর এডিট করে সেভ করুন।",
    ),
    points: [
      { icon: "FileText", label: loc("Short and long descriptions", "ছোট ও বিস্তারিত বর্ণনা"),
        body: loc("A starting point for the product page, not the final word.", "প্রোডাক্ট পেজের শুরু, চূড়ান্ত লেখা নয়।") },
      { icon: "Languages", label: loc("English or Bangla", "ইংরেজি বা বাংলা"),
        body: loc("Drafted in the language your customers read.", "কাস্টমার যে ভাষায় পড়েন, সেই ভাষাতেই খসড়া।") },
      { icon: "Search", label: loc("SEO, tags and FAQ", "SEO, ট্যাগ ও FAQ"),
        body: loc("The supporting text a listing needs, drafted together.", "লিস্টিংয়ের দরকারি সহায়ক লেখা একসঙ্গে।") },
      { icon: "Check", label: loc("You approve every field", "প্রতিটি ঘর আপনার অনুমোদনে"),
        body: loc("Nothing is saved until a person edits and saves it.", "একজন মানুষ এডিট করে সেভ না করা পর্যন্ত কিছুই সেভ হয় না।") },
    ],
  },
  {
    slug: "payments", module: "cash-and-expenses", accent: "green", icon: "CreditCard",
    name: loc("Payments", "পেমেন্ট"),
    title: loc("Online, wallet and cash — recorded the same way.", "অনলাইন, ওয়ালেট আর ক্যাশ—একইভাবে রেকর্ড।"),
    body: loc(
      "Set up the ways customers pay, review manual payments and refunds, and see each payment land in the account that received it.",
      "কাস্টমার কীভাবে পেমেন্ট করবেন ঠিক করুন, ম্যানুয়াল পেমেন্ট ও রিফান্ড যাচাই করুন, আর প্রতিটি পেমেন্ট কোন অ্যাকাউন্টে গেল দেখুন।",
    ),
    points: [
      { icon: "Smartphone", label: loc("Gateways and wallets", "গেটওয়ে ও ওয়ালেট"),
        body: loc("bKash, Nagad and SSLCommerz, plus cash on delivery and bank transfer.", "bKash, Nagad ও SSLCommerz, সঙ্গে ক্যাশ অন ডেলিভারি ও ব্যাংক ট্রান্সফার।") },
      { icon: "Wallet", label: loc("Advance and payment rules", "অগ্রিম ও পেমেন্টের নিয়ম"),
        body: loc("Ask for an advance or full payment by area, customer type or category.", "এলাকা, কাস্টমারের ধরন বা ক্যাটাগরি অনুযায়ী অগ্রিম বা সম্পূর্ণ পেমেন্ট চান।") },
      { icon: "Search", label: loc("Manual payments checked", "ম্যানুয়াল পেমেন্ট যাচাই"),
        body: loc("Review reported payments, with a warning for a reference used twice.", "জানানো পেমেন্ট যাচাই করুন; একই রেফারেন্স দুবার এলে সতর্কতা।") },
      { icon: "RotateCcw", label: loc("Refunds and payment links", "রিফান্ড ও পেমেন্ট লিংক"),
        body: loc("Follow refunds from request to done, and send one-time or reusable payment links.", "অনুরোধ থেকে সম্পন্ন পর্যন্ত রিফান্ড ট্র্যাক করুন, এককালীন বা বারবার ব্যবহারযোগ্য পেমেন্ট লিংক পাঠান।") },
    ],
  },
  {
    slug: "reports", module: "analytics", accent: "green", icon: "FileChartColumn",
    name: loc("Reports", "রিপোর্ট"),
    title: loc("Read the same way every time.", "প্রতিবার একইভাবে পড়া যায়।"),
    body: loc(
      "Sales, stock, purchases, finance, POS, staff and marketing reports in one report centre, ready to filter, download or schedule.",
      "বিক্রি, স্টক, পারচেজ, ফাইন্যান্স, POS, স্টাফ ও মার্কেটিং রিপোর্ট এক রিপোর্ট সেন্টারে—ফিল্টার, ডাউনলোড বা শিডিউলের জন্য প্রস্তুত।",
    ),
    points: [
      { icon: "Search", label: loc("One report centre", "এক রিপোর্ট সেন্টার"),
        body: loc("Search every report, grouped by area, with recently viewed to hand.", "এলাকা অনুযায়ী সাজানো সব রিপোর্ট সার্চ করুন, সাম্প্রতিক দেখা রিপোর্ট হাতের কাছে।") },
      { icon: "Sun", label: loc("A daily summary", "দৈনিক সারাংশ"),
        body: loc("One day’s sales, cash, payouts, low stock, dues and expenses.", "এক দিনের বিক্রি, ক্যাশ, পেআউট, কম স্টক, বকেয়া ও খরচ।") },
      { icon: "CalendarClock", label: loc("Scheduled delivery", "নির্ধারিত সময়ে পাঠানো"),
        body: loc("Daily, weekly or monthly, by WhatsApp or email.", "দৈনিক, সাপ্তাহিক বা মাসিক—WhatsApp বা ইমেইলে।") },
      { icon: "ExternalLink", label: loc("CSV or PDF", "CSV বা PDF"),
        body: loc("Download any report, with your letterhead on the PDF.", "যেকোনো রিপোর্ট ডাউনলোড করুন, PDF-এ আপনার লেটারহেডসহ।") },
    ],
    screen: SCREENS.dashboard,
  },
  {
    slug: "reviews", module: "sales-channels", accent: "orange", icon: "Star",
    name: loc("Google Reviews", "Google রিভিউ"),
    title: loc("Answer your Google reviews from one place.", "Google রিভিউর উত্তর দিন এক জায়গা থেকে।"),
    body: loc(
      "Once your Google Business Profile is connected, its reviews appear beside your other conversations, ready for a reply you have checked.",
      "Google Business Profile যুক্ত করলে এর রিভিউগুলো অন্যান্য কথোপকথনের পাশেই দেখা যায়, আপনার যাচাই করা উত্তরের জন্য প্রস্তুত।",
    ),
    points: [
      { icon: "MessagesSquare", label: loc("In the shared inbox", "শেয়ার্ড ইনবক্সে"),
        body: loc("A Reviews tab sits next to chats, comments and mentions.", "চ্যাট, কমেন্ট ও মেনশনের পাশেই Reviews ট্যাব।") },
      { icon: "Sparkles", label: loc("AI drafts, never auto-posted", "AI ড্রাফট, নিজে থেকে পোস্ট হয় না"),
        body: loc("A suggested reply waits for a person to check it.", "প্রস্তাবিত উত্তর একজন মানুষের যাচাইয়ের অপেক্ষায় থাকে।") },
      { icon: "MapPin", label: loc("Per location", "লোকেশন অনুযায়ী"),
        body: loc("Reviews, hours and posts for each business location.", "প্রতিটি ব্যবসায়িক লোকেশনের রিভিউ, সময়সূচি ও পোস্ট।") },
      { icon: "MessageCircle", label: loc("Reply in public", "প্রকাশ্যে উত্তর"),
        body: loc("Your reply appears under the review it answers.", "উত্তরটি সংশ্লিষ্ট রিভিউর নিচেই দেখা যায়।") },
    ],
  },
];

/** Duplicate slug guard — the registry drives routing, so a collision would
 *  silently shadow a page. */
export const FEATURE_BY_SLUG = new Map(FEATURES.map((f) => [f.slug, f]));
