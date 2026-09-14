/** SAMPLE DATA — invented articles, authors and dates. See ./index.ts */
import { loc, type Localized } from "@/i18n/types";

export type Article = {
  slug: string;
  title: Localized;
  excerpt: Localized;
  category: Localized;
  categorySlug: string;
  author: string;
  role: Localized;
  date: string;
  readMinutes: number;
  accent: "brand" | "violet" | "green" | "orange" | "turquoise" | "red";
  /** Paragraphs. Sample prose — not published guidance. */
  body: Localized[];
};

export const ARTICLES: Article[] = [
  {
    slug: "cash-on-delivery-without-losing-track",
    categorySlug: "operations",
    category: loc("Operations", "অপারেশনস"),
    title: loc("Cash on delivery, without losing track of the cash", "ক্যাশ অন ডেলিভারি, টাকার হিসাব না হারিয়ে"),
    excerpt: loc(
      "Most of what a Bangladeshi merchant is owed sits inside a courier settlement cycle. Here is how to see it.",
      "বাংলাদেশে একজন মার্চেন্টের বেশিরভাগ পাওনা আটকে থাকে কুরিয়ারের সেটেলমেন্টে। কীভাবে দেখবেন।",
    ),
    author: "Farhana Islam", role: loc("Operations", "অপারেশনস"),
    date: "2026-08-14", readMinutes: 6, accent: "orange",
    body: [
      loc("A delivered order is not a paid order. Between the two sits a courier settlement cycle, and that gap is where most reconciliation errors live.", "ডেলিভার হওয়া অর্ডার মানেই টাকা পাওয়া নয়। দুটোর মাঝে থাকে কুরিয়ারের সেটেলমেন্ট, আর এই ফাঁকেই বেশিরভাগ হিসাবের ভুল হয়।"),
      loc("The practical fix is to treat the parcel and the money as one object with two states, rather than as a delivery record and a separate cash note.", "ব্যবহারিক সমাধান হলো পার্সেল আর টাকাকে একই জিনিসের দুটো অবস্থা ধরা, আলাদা ডেলিভারি রেকর্ড আর আলাদা ক্যাশ খাতা নয়।"),
      loc("This is sample article text written to exercise the layout. It is not published guidance.", "এটি লেআউট পরীক্ষার জন্য লেখা নমুনা লেখা। এটি প্রকাশিত পরামর্শ নয়।"),
    ],
  },
  {
    slug: "one-inbox-six-channels",
    categorySlug: "selling",
    category: loc("Selling", "বিক্রি"),
    title: loc("Six channels, one thread", "ছয় চ্যানেল, একটাই থ্রেড"),
    excerpt: loc(
      "A comment that becomes a DM that becomes an order should still be one conversation.",
      "কমেন্ট থেকে ডিএম, ডিএম থেকে অর্ডার — সবই একটাই কথোপকথন হওয়া উচিত।",
    ),
    author: "Imran Chowdhury", role: loc("Product", "প্রোডাক্ট"),
    date: "2026-07-29", readMinutes: 5, accent: "violet",
    body: [
      loc("Customers do not think in channels. They think in conversations, and they expect you to remember the last one.", "কাস্টমাররা চ্যানেল অনুযায়ী ভাবেন না। তারা ভাবেন কথোপকথন অনুযায়ী, আর আশা করেন আপনি আগেরটা মনে রেখেছেন।"),
      loc("Sample article text for structural review.", "কাঠামো পরীক্ষার জন্য নমুনা লেখা।"),
    ],
  },
  {
    slug: "counter-and-website-same-stock",
    categorySlug: "retail",
    category: loc("Retail", "রিটেইল"),
    title: loc("Why your counter and your website disagree about stock", "কাউন্টার আর ওয়েবসাইটের স্টক কেন মেলে না"),
    excerpt: loc(
      "Two systems counting the same shelf will always drift. The fix is not a better spreadsheet.",
      "একই তাক দুটো সিস্টেম গুনলে হিসাব মিলবে না। সমাধান আরও ভালো স্প্রেডশিট নয়।",
    ),
    author: "Sadia Rahman", role: loc("Retail", "রিটেইল"),
    date: "2026-07-11", readMinutes: 7, accent: "green",
    body: [
      loc("If the counter and the storefront hold separate stock numbers, the question is not whether they will drift but how fast.", "কাউন্টার আর স্টোরফ্রন্ট আলাদা স্টক রাখলে প্রশ্নটা মিলবে কি না নয় — কত দ্রুত মিলবে না, সেটাই।"),
      loc("Sample article text for structural review.", "কাঠামো পরীক্ষার জন্য নমুনা লেখা।"),
    ],
  },
  {
    slug: "returns-are-part-of-the-flow",
    categorySlug: "operations",
    category: loc("Operations", "অপারেশনস"),
    title: loc("A return is not an exception", "রিটার্ন কোনো ব্যতিক্রম নয়"),
    excerpt: loc(
      "Failed deliveries are normal here. Treating them as a special case is what makes them expensive.",
      "এখানে ব্যর্থ ডেলিভারি স্বাভাবিক। একে বিশেষ ঘটনা ভাবাই খরচ বাড়ায়।",
    ),
    author: "Farhana Islam", role: loc("Operations", "অপারেশনস"),
    date: "2026-06-22", readMinutes: 4, accent: "red",
    body: [
      loc("A returned parcel touches stock, cash and the customer record at once. Handling it in three places by hand is where the cost hides.", "ফেরত আসা পার্সেল একসাথে স্টক, ক্যাশ আর কাস্টমার রেকর্ডে প্রভাব ফেলে। তিন জায়গায় হাতে সামলানোতেই খরচ লুকিয়ে থাকে।"),
      loc("Sample article text for structural review.", "কাঠামো পরীক্ষার জন্য নমুনা লেখা।"),
    ],
  },
  {
    slug: "reading-ad-numbers-honestly",
    categorySlug: "marketing",
    category: loc("Marketing", "মার্কেটিং"),
    title: loc("Reading ad numbers honestly", "বিজ্ঞাপনের সংখ্যা সৎভাবে পড়া"),
    excerpt: loc(
      "The platform's conversion count and your order list are different measurements. Keep them apart.",
      "প্ল্যাটফর্মের কনভার্শন আর আপনার অর্ডার লিস্ট আলাদা মাপ। আলাদাই রাখুন।",
    ),
    author: "Imran Chowdhury", role: loc("Product", "প্রোডাক্ট"),
    date: "2026-06-03", readMinutes: 8, accent: "brand",
    body: [
      loc("An ad platform reports what it believes it caused. Your order list reports what happened. Averaging the two produces a number that describes neither.", "বিজ্ঞাপন প্ল্যাটফর্ম বলে সে কী ঘটিয়েছে বলে মনে করে। অর্ডার লিস্ট বলে কী ঘটেছে। দুটোর গড় এমন সংখ্যা দেয় যা কোনোটাই নয়।"),
      loc("Sample article text for structural review.", "কাঠামো পরীক্ষার জন্য নমুনা লেখা।"),
    ],
  },
  {
    slug: "starting-from-a-facebook-page",
    categorySlug: "selling",
    category: loc("Selling", "বিক্রি"),
    title: loc("Starting from a Facebook page", "ফেসবুক পেজ থেকে শুরু"),
    excerpt: loc(
      "You do not need a catalogue before you have customers. You need one before you have a hundred.",
      "কাস্টমার আসার আগে ক্যাটালগ লাগে না। একশো কাস্টমার হওয়ার আগে লাগে।",
    ),
    author: "Sadia Rahman", role: loc("Retail", "রিটেইল"),
    date: "2026-05-19", readMinutes: 5, accent: "turquoise",
    body: [
      loc("Most businesses here start on a page and a phone number. That is a legitimate starting point, not a problem to be corrected.", "এখানে বেশিরভাগ ব্যবসা শুরু হয় একটা পেজ আর একটা ফোন নম্বর দিয়ে। এটা ভুল নয়, শুরু করার একটা বৈধ জায়গা।"),
      loc("Sample article text for structural review.", "কাঠামো পরীক্ষার জন্য নমুনা লেখা।"),
    ],
  },
];

export const BLOG_CATEGORIES = [
  { slug: "all", label: loc("All", "সব") },
  { slug: "selling", label: loc("Selling", "বিক্রি") },
  { slug: "operations", label: loc("Operations", "অপারেশনস") },
  { slug: "retail", label: loc("Retail", "রিটেইল") },
  { slug: "marketing", label: loc("Marketing", "মার্কেটিং") },
];

/* ── Help centre ─────────────────────────────────────────────────────── */

export type HelpArticle = { slug: string; title: Localized; body: Localized[] };
export type HelpCategory = {
  slug: string; icon: string; accent: "brand" | "violet" | "green" | "orange" | "turquoise" | "red";
  label: Localized; description: Localized; articles: HelpArticle[];
};

const filler = (en: string, bn: string): Localized[] => [
  loc(en, bn),
  loc("Sample help content written to exercise the article layout. Real instructions are not yet written.", "আর্টিকেল লেআউট পরীক্ষার জন্য নমুনা লেখা। আসল নির্দেশনা এখনো লেখা হয়নি।"),
];

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    slug: "getting-started", icon: "Play", accent: "brand",
    label: loc("Getting started", "শুরু করা"),
    description: loc("Open an account, add products and take your first order.", "অ্যাকাউন্ট খোলা, পণ্য যোগ করা আর প্রথম অর্ডার নেওয়া।"),
    articles: [
      { slug: "create-your-account", title: loc("Create your account", "অ্যাকাউন্ট তৈরি করুন"),
        body: filler("Opening an account takes an email address and a business name.", "অ্যাকাউন্ট খুলতে একটা ইমেইল আর ব্যবসার নাম লাগে।") },
      { slug: "add-your-first-product", title: loc("Add your first product", "প্রথম পণ্য যোগ করুন"),
        body: filler("A product needs a name, a price and a stock number to be sellable.", "বিক্রির জন্য পণ্যের নাম, দাম আর স্টক সংখ্যা দরকার।") },
      { slug: "take-your-first-order", title: loc("Take your first order", "প্রথম অর্ডার নিন"),
        body: filler("Orders can be created from a message, the storefront or the counter.", "মেসেজ, স্টোরফ্রন্ট বা কাউন্টার — যেকোনো জায়গা থেকে অর্ডার তৈরি করা যায়।") },
    ],
  },
  {
    slug: "orders-and-courier", icon: "Truck", accent: "orange",
    label: loc("Orders and courier", "অর্ডার আর কুরিয়ার"),
    description: loc("Confirmation, booking, tracking, returns and cash reconciliation.", "কনফার্ম, বুকিং, ট্র্যাকিং, রিটার্ন আর ক্যাশ মেলানো।"),
    articles: [
      { slug: "book-a-courier", title: loc("Book a courier from an order", "অর্ডার থেকে কুরিয়ার বুক করুন"),
        body: filler("A consignment is raised from the order without opening a courier panel.", "কুরিয়ার প্যানেল না খুলেই অর্ডার থেকে কনসাইনমেন্ট তৈরি হয়।") },
      { slug: "reconcile-cod", title: loc("Reconcile cash on delivery", "ক্যাশ অন ডেলিভারি মেলান"),
        body: filler("Settlements are matched against the orders they paid for.", "সেটেলমেন্ট কোন অর্ডারের, তা মিলিয়ে দেওয়া হয়।") },
      { slug: "handle-a-return", title: loc("Handle a failed delivery", "ব্যর্থ ডেলিভারি সামলান"),
        body: filler("A reversal updates stock, cash and the customer record together.", "ফেরত এলে স্টক, ক্যাশ আর কাস্টমার রেকর্ড একসাথে বদলায়।") },
    ],
  },
  {
    slug: "point-of-sale", icon: "ScanBarcode", accent: "green",
    label: loc("Point of sale", "পিওএস"),
    description: loc("Counter sales, barcodes, holds and exchanges.", "কাউন্টার সেল, বারকোড, হোল্ড আর এক্সচেঞ্জ।"),
    articles: [
      { slug: "set-up-a-counter", title: loc("Set up a counter", "কাউন্টার সেট করুন"),
        body: filler("A counter is tied to the warehouse whose stock it sells.", "কাউন্টার যে গুদামের স্টক বিক্রি করে, তার সাথেই যুক্ত থাকে।") },
      { slug: "use-a-barcode-scanner", title: loc("Use a barcode scanner", "বারকোড স্ক্যানার ব্যবহার করুন"),
        body: filler("The scanner field refocuses after every sale so the gun keeps working.", "প্রতিটি বিক্রির পর স্ক্যানার ঘরটা আবার ফোকাস নেয়, তাই স্ক্যানার চলতেই থাকে।") },
    ],
  },
  {
    slug: "inbox-and-customers", icon: "MessagesSquare", accent: "violet",
    label: loc("Inbox and customers", "ইনবক্স আর কাস্টমার"),
    description: loc("Channels, assignment, session windows and customer records.", "চ্যানেল, অ্যাসাইনমেন্ট, সেশন উইন্ডো আর কাস্টমার রেকর্ড।"),
    articles: [
      { slug: "connect-a-channel", title: loc("Connect a channel", "চ্যানেল যুক্ত করুন"),
        body: filler("Each channel is connected once and then shares the same inbox.", "প্রতিটি চ্যানেল একবার যুক্ত করলেই একই ইনবক্স ব্যবহার করে।") },
      { slug: "message-to-order", title: loc("Turn a message into an order", "মেসেজ থেকে অর্ডার করুন"),
        body: filler("Customer details carry over from the thread without retyping.", "থ্রেড থেকেই কাস্টমারের তথ্য চলে আসে, আবার লিখতে হয় না।") },
    ],
  },
  {
    slug: "billing", icon: "CreditCard", accent: "turquoise",
    label: loc("Billing and account", "বিলিং আর অ্যাকাউন্ট"),
    description: loc("Plans, invoices, staff accounts and permissions.", "প্ল্যান, ইনভয়েস, স্টাফ অ্যাকাউন্ট আর পারমিশন।"),
    articles: [
      { slug: "change-your-plan", title: loc("Change your plan", "প্ল্যান বদলান"),
        body: filler("Moving up takes effect immediately; moving down applies next cycle.", "উপরে ওঠা সাথে সাথে কার্যকর; নামা পরের সাইকেল থেকে।") },
      { slug: "add-a-staff-member", title: loc("Add a staff member", "স্টাফ যোগ করুন"),
        body: filler("Roles decide who can see cost prices or issue refunds.", "ভূমিকা ঠিক করে কে কেনা দাম দেখবে বা রিফান্ড দেবে।") },
    ],
  },
  {
    slug: "migration", icon: "ArrowRightLeft", accent: "red",
    label: loc("Migration", "মাইগ্রেশন"),
    description: loc("Bringing products, customers and history from elsewhere.", "অন্য জায়গা থেকে পণ্য, কাস্টমার আর ইতিহাস আনা।"),
    articles: [
      { slug: "import-from-a-spreadsheet", title: loc("Import from a spreadsheet", "স্প্রেডশিট থেকে ইমপোর্ট করুন"),
        body: filler("Map your columns once and the importer remembers the shape.", "একবার কলাম মিলিয়ে দিন, ইমপোর্টার গঠনটা মনে রাখে।") },
      { slug: "move-from-woocommerce", title: loc("Move from WooCommerce", "উকমার্স থেকে আসুন"),
        body: filler("Products, customers and past orders come across with their history.", "পণ্য, কাস্টমার আর পুরনো অর্ডার ইতিহাসসহ আসে।") },
    ],
  },
];

/* ── About and status ────────────────────────────────────────────────── */

export const ABOUT_VALUES = [
  { icon: "MapPin", label: loc("Built here, for here", "এখানেই তৈরি, এখানকার জন্য"),
    detail: loc("Cash on delivery, courier returns and Facebook-first selling are the default case, not an afterthought.", "ক্যাশ অন ডেলিভারি, কুরিয়ার রিটার্ন আর ফেসবুক থেকে বিক্রি — এগুলোই স্বাভাবিক, পরে জোড়া দেওয়া কিছু নয়।") },
  { icon: "Eye", label: loc("Say what is true", "যা সত্যি, তাই বলা"),
    detail: loc("No invented figures, no borrowed certifications, no superlatives we cannot evidence.", "বানানো সংখ্যা নয়, ধার করা সার্টিফিকেট নয়, প্রমাণহীন বড় দাবি নয়।") },
  { icon: "Languages", label: loc("Bangla is not a translation", "বাংলা কোনো অনুবাদ নয়"),
    detail: loc("Both languages are written as first drafts, not machine-passed from English.", "দুটো ভাষাতেই মূল লেখা হয়, ইংরেজি থেকে যন্ত্রে অনুবাদ নয়।") },
  { icon: "Users", label: loc("One system, not ten tools", "একটাই সিস্টেম, দশটা টুল নয়"),
    detail: loc("Every feature earns its place by removing a tab, not by adding a badge.", "প্রতিটি ফিচার একটা ট্যাব কমিয়ে নিজের জায়গা করে নেয়, নতুন ব্যাজ যোগ করে নয়।") },
];

export const STATUS_SERVICES = [
  { label: loc("Storefront and landing pages", "স্টোরফ্রন্ট আর ল্যান্ডিং পেজ"), state: "operational" as const },
  { label: loc("Admin and orders", "অ্যাডমিন আর অর্ডার"), state: "operational" as const },
  { label: loc("Omnichannel inbox", "সব মেসেজ এক ইনবক্সে"), state: "operational" as const },
  { label: loc("Point of sale", "পিওএস"), state: "operational" as const },
  { label: loc("Courier integrations", "কুরিয়ার ইন্টিগ্রেশন"), state: "degraded" as const },
  { label: loc("Payments", "পেমেন্ট"), state: "operational" as const },
];
