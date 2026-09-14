/** SAMPLE DATA — invented. See ./index.ts */
import { loc, type Localized } from "@/i18n/types";
import type { Accent } from "@/lib/accents";

/* ── Themes ──────────────────────────────────────────────────────────── */

export type Theme = {
  id: string;
  name: string;
  tagline: Localized;
  category: Localized;
  accent: Accent;
  features: Localized[];
};

export const THEMES: Theme[] = [
  { id: "nokshi", name: "Nokshi", accent: "violet",
    category: loc("Clothing and fashion", "পোশাক ও ফ্যাশন"),
    tagline: loc("Large imagery for products people want to look at.", "যেসব পণ্য দেখতে ইচ্ছে করে, তার জন্য বড় ছবি।"),
    features: [loc("Lookbook grid", "লুকবুক গ্রিড"), loc("Size guide block", "সাইজ গাইড"), loc("Fast on 3G", "থ্রিজিতে দ্রুত")] },
  { id: "counter", name: "Counter", accent: "green",
    category: loc("Retail and grocery", "রিটেইল ও মুদি"),
    tagline: loc("Dense catalogue browsing for shops with a lot of lines.", "অনেক পণ্যের দোকানের জন্য ঘন ক্যাটালগ।"),
    features: [loc("Category-first layout", "ক্যাটাগরি আগে"), loc("Stock badges", "স্টক ব্যাজ"), loc("Counter pickup option", "কাউন্টার থেকে নেওয়ার সুযোগ")] },
  { id: "signal", name: "Signal", accent: "brand",
    category: loc("Electronics", "ইলেকট্রনিকস"),
    tagline: loc("Specification tables that stay readable on a phone.", "ফোনেও পড়া যায় এমন স্পেসিফিকেশন টেবিল।"),
    features: [loc("Spec comparison", "স্পেসিফিকেশন তুলনা"), loc("Warranty block", "ওয়ারেন্টি"), loc("EMI display", "কিস্তির হিসাব")] },
  { id: "tuli", name: "Tuli", accent: "orange",
    category: loc("Beauty and home", "বিউটি ও হোম"),
    tagline: loc("Warm, editorial pages for small-batch brands.", "ছোট ব্র্যান্ডের জন্য উষ্ণ, ম্যাগাজিনের মতো পাতা।"),
    features: [loc("Ingredient block", "উপাদানের তালিকা"), loc("Review-led product page", "রিভিউ-নির্ভর পাতা"), loc("Bundle builder", "বান্ডল তৈরি")] },
  { id: "padma", name: "Padma", accent: "turquoise",
    category: loc("Wholesale", "পাইকারি"),
    tagline: loc("Built for buyers ordering by the carton, not the piece.", "যারা পিস নয়, কার্টন ধরে কেনেন তাদের জন্য।"),
    features: [loc("Tier price table", "স্তরভিত্তিক দাম"), loc("Minimum order rules", "সর্বনিম্ন অর্ডার"), loc("Quick reorder", "দ্রুত আবার অর্ডার")] },
  { id: "rickshaw", name: "Rickshaw", accent: "red",
    category: loc("Food and quick commerce", "খাবার ও কুইক কমার্স"),
    tagline: loc("Short menus, fast checkout, delivery windows up front.", "ছোট মেনু, দ্রুত চেকআউট, ডেলিভারির সময় আগেই।"),
    features: [loc("Menu sections", "মেনুর ভাগ"), loc("Delivery window picker", "ডেলিভারির সময় বাছাই"), loc("Repeat last order", "আগের অর্ডার আবার")] },
];

export const THEMES_COPY = {
  crumb: loc("Themes", "থিম"),
  eyebrow: loc("Storefront themes", "স্টোরফ্রন্ট থিম"),
  title: loc("Themes built for how Bangladesh shops.", "বাংলাদেশ যেভাবে কেনে, সেভাবে তৈরি থিম।"),
  body: loc(
    "Each one is fast on a mobile network, readable in Bangla, and honest about delivery time and charges.",
    "প্রতিটিই মোবাইল নেটওয়ার্কে দ্রুত, বাংলায় পড়ার মতো, আর ডেলিভারির সময় ও খরচ নিয়ে সৎ।",
  ),
  preview: loc("Live preview", "লাইভ প্রিভিউ"),
  previewPending: loc(
    "Live preview links are not available in this build — see docs/OPEN-ITEMS.md.",
    "এই বিল্ডে লাইভ প্রিভিউ লিংক নেই।",
  ),
};

/* ── About ───────────────────────────────────────────────────────────── */

export const ABOUT_COPY = {
  crumb: loc("About", "আমাদের সম্পর্কে"),
  eyebrow: loc("About GridCommerce", "গ্রিডকমার্স সম্পর্কে"),
  title: loc("One system, because the business is one business.", "একটাই সিস্টেম, কারণ ব্যবসাটাও একটাই।"),
  body: loc(
    "A merchant in Dhaka does not run an online business and a shop and a courier operation. They run one business, in ten tabs. GridCommerce exists to close the tabs.",
    "ঢাকার একজন মার্চেন্ট আলাদা করে অনলাইন ব্যবসা, দোকান আর কুরিয়ার চালান না। তারা একটাই ব্যবসা চালান — দশটা ট্যাবে। গ্রিডকমার্স সেই ট্যাবগুলো বন্ধ করতে এসেছে।",
  ),
  valuesTitle: loc("How we work", "আমরা যেভাবে কাজ করি"),
};

/* ── Status ──────────────────────────────────────────────────────────── */

export const STATUS_COPY = {
  crumb: loc("Status", "স্ট্যাটাস"),
  eyebrow: loc("System status", "সিস্টেম স্ট্যাটাস"),
  title: loc("Current platform status.", "প্ল্যাটফর্মের বর্তমান অবস্থা।"),
  body: loc(
    "Live service states. No uptime percentage is published, because none has been measured over a meaningful period yet.",
    "সেবার বর্তমান অবস্থা। কোনো আপটাইম শতাংশ প্রকাশ করা হয়নি, কারণ যথেষ্ট সময় ধরে তা মাপা হয়নি।",
  ),
  operational: loc("Operational", "স্বাভাবিক"),
  degraded: loc("Degraded", "ধীর"),
  down: loc("Down", "বন্ধ"),
  sample: loc(
    "Sample states for layout review. This page is not connected to monitoring.",
    "লেআউট দেখার জন্য নমুনা অবস্থা। এই পাতা কোনো মনিটরিংয়ের সাথে যুক্ত নয়।",
  ),
};

/* ── Legal ───────────────────────────────────────────────────────────── */

export type LegalDoc = {
  slug: string;
  title: Localized;
  intro: Localized;
  sections: { heading: Localized; body: Localized }[];
};

/** Placeholder headings only. `docs/OPEN-ITEMS.md` requires the body of every
 *  legal document to come from counsel, so the prose here is explicitly a
 *  structural stand-in and says so on the page. */
const clause = (en: string, bn: string) => ({
  heading: loc(en, bn),
  body: loc(
    "Placeholder text. The wording of this clause must be supplied by counsel before publication and is not legal language.",
    "স্থানধারক লেখা। প্রকাশের আগে এই ধারার ভাষা আইনজীবীর কাছ থেকে আসতে হবে; এটি আইনি ভাষা নয়।",
  ),
});

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "terms",
    title: loc("Terms of service", "সেবার শর্তাবলি"),
    intro: loc("The agreement between your business and GridCommerce.", "আপনার ব্যবসা আর গ্রিডকমার্সের মধ্যে চুক্তি।"),
    sections: [
      clause("Who this agreement is with", "এই চুক্তি কার সাথে"),
      clause("Your account and staff access", "আপনার অ্যাকাউন্ট আর স্টাফ অ্যাক্সেস"),
      clause("Subscription, billing and limits", "সাবস্ক্রিপশন, বিলিং আর সীমা"),
      clause("Acceptable use", "গ্রহণযোগ্য ব্যবহার"),
      clause("Your content and your data", "আপনার কনটেন্ট আর ডেটা"),
      clause("Suspension and termination", "স্থগিত ও সমাপ্তি"),
      clause("Liability", "দায়"),
      clause("Governing law", "প্রযোজ্য আইন"),
    ],
  },
  {
    slug: "privacy",
    title: loc("Privacy policy", "গোপনীয়তা নীতি"),
    intro: loc("What we collect, why, and what you can ask us to delete.", "আমরা কী সংগ্রহ করি, কেন, আর কী মুছে দিতে বলতে পারেন।"),
    sections: [
      clause("Information we collect", "যে তথ্য সংগ্রহ করি"),
      clause("How it is used", "কীভাবে ব্যবহার করা হয়"),
      clause("Your customers' data", "আপনার কাস্টমারের ডেটা"),
      clause("Sharing with service providers", "সেবা প্রদানকারীর সাথে ভাগাভাগি"),
      clause("Retention", "কতদিন রাখা হয়"),
      clause("Your rights and requests", "আপনার অধিকার ও অনুরোধ"),
      clause("Contacting us", "যোগাযোগ"),
    ],
  },
  {
    slug: "refund-policy",
    title: loc("Refund policy", "রিফান্ড নীতি"),
    intro: loc("How subscription refunds are handled.", "সাবস্ক্রিপশনের রিফান্ড কীভাবে হয়।"),
    sections: [
      clause("Scope of this policy", "এই নীতির পরিধি"),
      clause("Subscription refunds", "সাবস্ক্রিপশন রিফান্ড"),
      clause("Module and add-on charges", "মডিউল আর অ্যাড-অনের চার্জ"),
      clause("How to request a refund", "রিফান্ড কীভাবে চাইবেন"),
      clause("What is not refundable", "যা ফেরতযোগ্য নয়"),
    ],
  },
  {
    slug: "data-policy",
    title: loc("Data policy", "ডেটা নীতি"),
    intro: loc("Where your business data lives and how you get it out.", "আপনার ব্যবসার ডেটা কোথায় থাকে আর কীভাবে নিয়ে যাবেন।"),
    sections: [
      clause("Data you own", "যে ডেটা আপনার"),
      clause("Export and portability", "এক্সপোর্ট আর স্থানান্তর"),
      clause("Backups", "ব্যাকআপ"),
      clause("Deletion on account closure", "অ্যাকাউন্ট বন্ধ হলে মুছে ফেলা"),
      clause("Sub-processors", "সাব-প্রসেসর"),
    ],
  },
];

export const LEGAL_COPY = {
  crumb: loc("Legal", "আইনি"),
  notice: loc(
    "This document is a structural placeholder. Its wording has not been written or reviewed by counsel and carries no legal effect.",
    "এই নথিটি শুধু কাঠামোগত স্থানধারক। এর ভাষা কোনো আইনজীবী লেখেননি বা দেখেননি, এবং এর কোনো আইনি কার্যকারিতা নেই।",
  ),
  lastUpdated: loc("Structure last changed", "কাঠামো সর্বশেষ বদলেছে"),
  contents: loc("Contents", "সূচিপত্র"),
};
