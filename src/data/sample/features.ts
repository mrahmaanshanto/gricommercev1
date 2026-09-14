/** SAMPLE DATA — invented supporting copy. See ./index.ts
 *
 *  One registry drives all 19 feature pages. Hero titles and descriptions
 *  match the metadata already written for each route; the benefit points and
 *  accents are new. Adding a feature here is the whole job — the route file
 *  is four lines.
 */
import { loc, type Localized } from "@/i18n/types";
import { SCREENS, type ProductScreen } from "@/data/screenshots";
import type { Accent } from "@/lib/accents";

export type FeaturePoint = { icon: string; label: Localized; body: Localized };

export type FeatureGroup = "sell" | "manage" | "deliver" | "grow" | "understand";

export type FeatureEntry = {
  slug: string;
  group: FeatureGroup;
  accent: Accent;
  icon: string;
  /** Short name used in nav, cards and breadcrumbs. */
  name: Localized;
  title: Localized;
  body: Localized;
  points: FeaturePoint[];
  screen?: ProductScreen;
};

export const FEATURE_GROUPS: { id: FeatureGroup; label: Localized; body: Localized; accent: Accent }[] = [
  { id: "sell", accent: "brand", label: loc("Sell", "বিক্রি"),
    body: loc("Storefront, pages, catalogue and the counter.", "স্টোরফ্রন্ট, পেজ, ক্যাটালগ আর কাউন্টার।") },
  { id: "manage", accent: "violet", label: loc("Manage", "ম্যানেজ"),
    body: loc("Orders, stock, locations and the people who touch them.", "অর্ডার, স্টক, লোকেশন আর যারা এগুলো সামলায়।") },
  { id: "deliver", accent: "orange", label: loc("Deliver", "ডেলিভারি"),
    body: loc("Courier, cash on delivery and payments.", "কুরিয়ার, ক্যাশ অন ডেলিভারি আর পেমেন্ট।") },
  { id: "grow", accent: "red", label: loc("Grow", "গ্রোথ"),
    body: loc("Conversations, campaigns, recovery and reviews.", "কথোপকথন, ক্যাম্পেইন, রিকভারি আর রিভিউ।") },
  { id: "understand", accent: "green", label: loc("Understand", "বুঝুন"),
    body: loc("Reports, profit, cash and customers.", "রিপোর্ট, লাভ, ক্যাশ আর কাস্টমার।") },
];

export const FEATURES: FeatureEntry[] = [
  /* ── Sell ─────────────────────────────────────────────────────────── */
  {
    slug: "storefront", group: "sell", accent: "brand", icon: "Store",
    name: loc("Online store", "অনলাইন স্টোর"),
    title: loc("A storefront on your own domain.", "নিজের ডোমেইনে একটা স্টোরফ্রন্ট।"),
    body: loc("Themes built for how Bangladesh shops — fast on a mobile network, readable in Bangla, and honest about delivery.", "বাংলাদেশ যেভাবে কেনে সেভাবেই তৈরি থিম — মোবাইল নেটওয়ার্কে দ্রুত, বাংলায় পড়ার মতো, আর ডেলিভারি নিয়ে সৎ।"),
    points: [
      { icon: "Palette", label: loc("Themes that load fast", "দ্রুত লোড হওয়া থিম"), body: loc("Built for 3G and mid-range phones, not desktop demos.", "থ্রিজি আর সাধারণ ফোনের জন্য তৈরি, ডেস্কটপ ডেমোর জন্য নয়।") },
      { icon: "Languages", label: loc("Bangla and English", "বাংলা আর ইংরেজি"), body: loc("Both are first-class, not a translation layer.", "দুটোই সমান, কোনোটা অনুবাদ নয়।") },
      { icon: "Globe", label: loc("Your own domain", "নিজের ডোমেইন"), body: loc("Point a domain and the store answers on it.", "ডোমেইন যুক্ত করলেই স্টোর সেখানে চলে।") },
      { icon: "ShoppingCart", label: loc("Checkout that expects COD", "ক্যাশ অন ডেলিভারির চেকআউট"), body: loc("Cash on delivery is the default path, not a fallback.", "ক্যাশ অন ডেলিভারিই স্বাভাবিক পথ, বিকল্প নয়।") },
    ],
    screen: SCREENS.landingPages,
  },
  {
    slug: "landing-pages", group: "sell", accent: "orange", icon: "LayoutTemplate",
    name: loc("Landing pages", "ল্যান্ডিং পেজ"),
    title: loc("Build pages for ad traffic without a developer.", "বিজ্ঞাপনের ট্রাফিকের জন্য পেজ বানান, ডেভেলপার ছাড়াই।"),
    body: loc("Drag the parts you need, set the offer, and publish before the campaign goes live.", "যে অংশগুলো দরকার সাজিয়ে নিন, অফার ঠিক করুন, ক্যাম্পেইন শুরুর আগেই প্রকাশ করুন।"),
    points: [
      { icon: "MousePointerClick", label: loc("Drag and drop parts", "টেনে এনে সাজান"), body: loc("Hero, offer, reviews, form — arranged in minutes.", "হিরো, অফার, রিভিউ, ফর্ম — কয়েক মিনিটে সাজানো।") },
      { icon: "Smartphone", label: loc("Mobile preview first", "আগে মোবাইল প্রিভিউ"), body: loc("Most ad traffic is on a phone, so that is the default view.", "বেশিরভাগ ট্রাফিক ফোনে আসে, তাই সেটাই মূল ভিউ।") },
      { icon: "Tag", label: loc("Offer and price settings", "অফার আর দামের সেটিং"), body: loc("Bundles and discounts set on the page itself.", "বান্ডল আর ডিসকাউন্ট পেজেই ঠিক করা যায়।") },
      { icon: "ClipboardList", label: loc("Orders land in one list", "অর্ডার এক লিস্টে"), body: loc("Page orders join the same workflow as everything else.", "পেজের অর্ডারও বাকি সবার মতো একই ওয়ার্কফ্লোতে আসে।") },
    ],
    screen: SCREENS.landingPages,
  },
  {
    slug: "products", group: "sell", accent: "violet", icon: "Package",
    name: loc("Products", "প্রোডাক্ট"),
    title: loc("A catalogue that stays tidy as it grows.", "ক্যাটালগ বড় হলেও গোছানো থাকে।"),
    body: loc("Variants, pricing, media and categories that hold their shape at ten products and at ten thousand.", "ভ্যারিয়েন্ট, দাম, ছবি আর ক্যাটাগরি — দশটা পণ্যেও গোছানো, দশ হাজারেও।"),
    points: [
      { icon: "Layers", label: loc("Variants without duplicates", "ডুপ্লিকেট ছাড়া ভ্যারিয়েন্ট"), body: loc("Size and colour are one product, not four listings.", "সাইজ আর রঙ একটাই পণ্য, চারটা আলাদা লিস্টিং নয়।") },
      { icon: "Image", label: loc("Media per variant", "ভ্যারিয়েন্ট অনুযায়ী ছবি"), body: loc("The right photo shows for the option chosen.", "যে অপশন বাছা হয়, তারই ছবি দেখা যায়।") },
      { icon: "Percent", label: loc("Cost and margin held", "কেনা দাম আর মার্জিন রাখা"), body: loc("Buying price is stored so profit can be reported.", "কেনা দাম রাখা হয়, যেন লাভ হিসাব করা যায়।") },
      { icon: "Search", label: loc("Findable at scale", "অনেক পণ্যেও খুঁজে পাওয়া"), body: loc("Search and filters that still work at ten thousand.", "দশ হাজার পণ্যেও সার্চ আর ফিল্টার কাজ করে।") },
    ],
  },
  {
    slug: "pos", group: "sell", accent: "green", icon: "ScanBarcode",
    name: loc("Point of sale", "পিওএস"),
    title: loc("Your counter and your store share one stock number.", "কাউন্টার আর স্টোরের স্টক একটাই।"),
    body: loc("Scan, sell and take payment at the counter against the same catalogue, customers and reports as everything online.", "কাউন্টারে স্ক্যান করে বিক্রি করুন — একই ক্যাটালগ, একই কাস্টমার, একই রিপোর্ট।"),
    points: [
      { icon: "ScanBarcode", label: loc("Barcode first", "বারকোড আগে"), body: loc("The scanner field refocuses after every sale.", "প্রতিটি বিক্রির পর স্ক্যানার ঘরটা আবার ফোকাস নেয়।") },
      { icon: "Warehouse", label: loc("Stock at that counter", "সেই কাউন্টারের স্টক"), body: loc("What is shown is what is behind that counter.", "যা দেখাচ্ছে, তা ওই কাউন্টারেই আছে।") },
      { icon: "Clock", label: loc("Hold and resume", "হোল্ড আর রিজিউম"), body: loc("Park a sale for a customer who steps away.", "কাস্টমার সরে গেলে বিক্রিটা আটকে রাখুন।") },
      { icon: "RotateCcw", label: loc("Exchange at the counter", "কাউন্টারেই এক্সচেঞ্জ"), body: loc("Returns adjust stock and cash together.", "ফেরত এলে স্টক আর ক্যাশ একসাথে বদলায়।") },
    ],
    screen: SCREENS.pos,
  },
  /* ── Manage ───────────────────────────────────────────────────────── */
  {
    slug: "orders", group: "manage", accent: "brand", icon: "ClipboardList",
    name: loc("Orders", "অর্ডার"),
    title: loc("Every order. Every channel. One workflow.", "সব অর্ডার। সব চ্যানেল। একটাই ওয়ার্কফ্লো।"),
    body: loc("Website, landing page, Facebook, WhatsApp, phone and counter feed one list, then move through the same states.", "ওয়েবসাইট, ল্যান্ডিং পেজ, ফেসবুক, হোয়াটসঅ্যাপ, ফোন আর কাউন্টার — সব এক লিস্টে, একই ধাপে এগোয়।"),
    points: [
      { icon: "Filter", label: loc("Work the queue", "কাজের সারি ধরে এগোন"), body: loc("Awaiting action, in courier hands and cash to collect first.", "আগে দেখুন — কাজ বাকি, কুরিয়ারে আছে, টাকা আদায় বাকি।") },
      { icon: "Truck", label: loc("Courier on the order", "অর্ডারেই কুরিয়ার"), body: loc("Booked to delivered without a courier panel.", "বুকিং থেকে ডেলিভারি, কুরিয়ার প্যানেল ছাড়াই।") },
      { icon: "Banknote", label: loc("COD tracked", "ক্যাশ ট্র্যাক"), body: loc("Collected, pending and reconciled are distinct states.", "আদায়, বাকি আর মিলানো — আলাদা অবস্থা।") },
      { icon: "RotateCcw", label: loc("Returns in the flow", "রিটার্নও প্রবাহেই"), body: loc("A failed delivery reverses stock, cash and record together.", "ব্যর্থ ডেলিভারিতে স্টক, ক্যাশ আর রেকর্ড একসাথে ফেরে।") },
    ],
    screen: SCREENS.orders,
  },
  {
    slug: "inventory", group: "manage", accent: "violet", icon: "Boxes",
    name: loc("Inventory", "ইনভেন্টরি"),
    title: loc("Know how much stock you have — and why it changed.", "কত স্টক আছে জানুন — আর কেন বদলাল তাও।"),
    body: loc("Every movement has a reason attached, so a number that looks wrong can be traced instead of guessed at.", "প্রতিটি নড়াচড়ার একটা কারণ থাকে, তাই ভুল মনে হওয়া সংখ্যা আন্দাজ নয় — খুঁজে বের করা যায়।"),
    points: [
      { icon: "History", label: loc("Every movement logged", "প্রতিটি নড়াচড়ার হিসাব"), body: loc("Sale, return, transfer, count or correction.", "বিক্রি, ফেরত, ট্রান্সফার, গণনা বা সংশোধন।") },
      { icon: "Bell", label: loc("Low stock warnings", "স্টক কমার সতর্কতা"), body: loc("Set per product, not one blanket number.", "প্রতিটি পণ্যের জন্য আলাদা, একটাই সংখ্যা নয়।") },
      { icon: "ArrowRightLeft", label: loc("Transfers between locations", "লোকেশনের মধ্যে ট্রান্সফার"), body: loc("Stock in transit is visible, not missing.", "পথে থাকা স্টক দেখা যায়, হারিয়ে যায় না।") },
      { icon: "ClipboardList", label: loc("Counts that reconcile", "মিলে যাওয়া গণনা"), body: loc("A physical count produces an explained difference.", "সরাসরি গণনার পার্থক্যেরও ব্যাখ্যা থাকে।") },
    ],
    screen: SCREENS.pos,
  },
  {
    slug: "warehouse", group: "manage", accent: "turquoise", icon: "Warehouse",
    name: loc("Warehouse", "গুদাম"),
    title: loc("Multiple locations that agree with the books.", "একাধিক লোকেশন, হিসাবের সাথে মিলে যায়।"),
    body: loc("Each location holds its own stock, and every transfer between them leaves a record on both sides.", "প্রতিটি লোকেশনের নিজের স্টক থাকে, আর প্রতিটি ট্রান্সফারের রেকর্ড দুই দিকেই থাকে।"),
    points: [
      { icon: "MapPin", label: loc("Stock per location", "লোকেশন অনুযায়ী স্টক"), body: loc("Not one company-wide number pretending to be precise.", "পুরো কোম্পানির একটা আন্দাজি সংখ্যা নয়।") },
      { icon: "ArrowRightLeft", label: loc("Transfers with a trail", "রেকর্ডসহ ট্রান্সফার"), body: loc("Sent, in transit and received are separate steps.", "পাঠানো, পথে আর পৌঁছানো — আলাদা ধাপ।") },
      { icon: "Store", label: loc("Counters draw locally", "কাউন্টার স্থানীয় স্টক নেয়"), body: loc("A counter sells the stock actually behind it.", "কাউন্টার যা সত্যিই আছে তাই বিক্রি করে।") },
      { icon: "FileChartColumn", label: loc("Valued per location", "লোকেশন অনুযায়ী মূল্য"), body: loc("Know what each location is holding, in money.", "কোন লোকেশনে কত টাকার মাল আছে জানুন।") },
    ],
  },
  {
    slug: "staff-permissions", group: "manage", accent: "red", icon: "Users",
    name: loc("Staff and permissions", "স্টাফ আর পারমিশন"),
    title: loc("Exactly the access they need. Nothing more.", "যতটুকু দরকার ততটুকুই অ্যাক্সেস। বেশি নয়।"),
    body: loc("Decide who can see cost prices, issue a refund or export customers — and keep a record of what changed.", "কে কেনা দাম দেখবে, রিফান্ড দেবে বা কাস্টমার এক্সপোর্ট করবে ঠিক করুন — আর কী বদলাল তার রেকর্ড রাখুন।"),
    points: [
      { icon: "Lock", label: loc("Roles, not individual toggles", "ভূমিকা, আলাদা সুইচ নয়"), body: loc("Set a role once and assign it to anyone.", "একবার ভূমিকা ঠিক করুন, যাকে খুশি দিন।") },
      { icon: "Eye", label: loc("Cost prices can be hidden", "কেনা দাম লুকানো যায়"), body: loc("Counter staff need not see your margins.", "কাউন্টারের স্টাফের মার্জিন দেখার দরকার নেই।") },
      { icon: "History", label: loc("Action history", "কাজের ইতিহাস"), body: loc("Who changed a price or cancelled an order, and when.", "কে দাম বদলাল বা অর্ডার বাতিল করল, কখন।") },
      { icon: "Building2", label: loc("Scoped to a location", "লোকেশন অনুযায়ী সীমা"), body: loc("A branch manager sees their branch.", "শাখার ম্যানেজার নিজের শাখাই দেখেন।") },
    ],
  },
  {
    slug: "wholesale", group: "manage", accent: "orange", icon: "Handshake",
    name: loc("Wholesale", "হোলসেল"),
    title: loc("Dealer pricing and credit, in the same system.", "ডিলারের দাম আর বাকি, একই সিস্টেমে।"),
    body: loc("Quotations, tiered pricing, credit limits and receivables sit beside your retail orders rather than in a separate ledger.", "কোটেশন, স্তরভিত্তিক দাম, বাকির সীমা আর পাওনা — আলাদা খাতায় নয়, খুচরা অর্ডারের পাশেই।"),
    points: [
      { icon: "Percent", label: loc("Price tiers per buyer", "ক্রেতা অনুযায়ী দামের স্তর"), body: loc("A dealer sees their price, not the retail one.", "ডিলার নিজের দাম দেখেন, খুচরা দাম নয়।") },
      { icon: "FileText", label: loc("Quotation to order", "কোটেশন থেকে অর্ডার"), body: loc("An accepted quote becomes an order unchanged.", "গৃহীত কোটেশন অপরিবর্তিত থেকেই অর্ডার হয়।") },
      { icon: "CreditCard", label: loc("Credit limits", "বাকির সীমা"), body: loc("A limit per buyer, checked before confirming.", "প্রতিটি ক্রেতার সীমা, কনফার্ম করার আগেই দেখা হয়।") },
      { icon: "Receipt", label: loc("Receivables tracked", "পাওনার হিসাব"), body: loc("What is owed, by whom, for how long.", "কার কাছে কত পাওনা, কতদিন ধরে।") },
    ],
  },

  /* ── Deliver ──────────────────────────────────────────────────────── */
  {
    slug: "courier", group: "deliver", accent: "orange", icon: "Truck",
    name: loc("Courier and COD", "কুরিয়ার আর ক্যাশ"),
    title: loc("Know where the parcel is — and where your money is.", "পার্সেল কোথায় জানুন — আর টাকাটাও।"),
    body: loc("Book to multiple couriers from the order, follow the consignment, and reconcile settlements against the orders they paid for.", "অর্ডার থেকেই একাধিক কুরিয়ারে বুক করুন, কনসাইনমেন্ট দেখুন, আর সেটেলমেন্ট মিলিয়ে নিন।"),
    points: [
      { icon: "Send", label: loc("Book without leaving", "অর্ডার ছেড়ে না গিয়েই বুকিং"), body: loc("Consignment raised from the order itself.", "অর্ডার থেকেই কনসাইনমেন্ট তৈরি হয়।") },
      { icon: "MapPin", label: loc("Status mirrored", "স্ট্যাটাস দেখা যায়"), body: loc("Picked up, in transit and delivered on the order.", "পিকআপ, পথে আর ডেলিভারড — অর্ডারেই।") },
      { icon: "Banknote", label: loc("Settlements matched", "সেটেলমেন্ট মিলানো"), body: loc("A payout is tied to the orders it covers.", "কোন কোন অর্ডারের টাকা, তা মিলিয়ে দেওয়া হয়।") },
      { icon: "AlertCircle", label: loc("Failures handled", "ব্যর্থতাও সামলানো"), body: loc("A return reverses stock, cash and the record.", "ফেরত এলে স্টক, ক্যাশ আর রেকর্ড ফিরে যায়।") },
    ],
    screen: SCREENS.orders,
  },
  {
    slug: "payments", group: "deliver", accent: "green", icon: "CreditCard",
    name: loc("Payments", "পেমেন্ট"),
    title: loc("Online, wallet and cash — recorded the same way.", "অনলাইন, ওয়ালেট আর ক্যাশ — একইভাবে রেকর্ড।"),
    body: loc("However the customer paid, the order carries the same payment record, so reporting does not depend on the method.", "কাস্টমার যেভাবেই দিক, অর্ডারে একই পেমেন্ট রেকর্ড থাকে — রিপোর্ট পদ্ধতির উপর নির্ভর করে না।"),
    points: [
      { icon: "Smartphone", label: loc("Mobile wallets", "মোবাইল ওয়ালেট"), body: loc("bKash, Nagad and Rocket recorded as payments.", "বিকাশ, নগদ আর রকেট — পেমেন্ট হিসেবেই রেকর্ড।") },
      { icon: "CreditCard", label: loc("Card and gateway", "কার্ড আর গেটওয়ে"), body: loc("Gateway settlements matched to orders.", "গেটওয়ের টাকা অর্ডারের সাথে মিলানো।") },
      { icon: "Banknote", label: loc("Cash at the door", "দরজায় নগদ"), body: loc("COD is a payment state, not an absence of one.", "ক্যাশ অন ডেলিভারিও একটা পেমেন্ট অবস্থা।") },
      { icon: "Wallet", label: loc("Partial and advance", "আংশিক আর অগ্রিম"), body: loc("Part now, rest on delivery — both recorded.", "কিছু এখন, বাকি ডেলিভারিতে — দুটোই রেকর্ড।") },
    ],
  },

  /* ── Grow ─────────────────────────────────────────────────────────── */
  {
    slug: "omnichannel", group: "grow", accent: "violet", icon: "MessagesSquare",
    name: loc("Omnichannel inbox", "সব মেসেজ এক ইনবক্সে"),
    title: loc("Every customer conversation. One inbox.", "কাস্টমারের সব কথা। একটাই ইনবক্স।"),
    body: loc("Messenger, WhatsApp, Instagram, store chat, SMS and email arrive together, with the customer's orders beside the thread.", "মেসেঞ্জার, হোয়াটসঅ্যাপ, ইনস্টাগ্রাম, স্টোর চ্যাট, এসএমএস আর ইমেইল একসাথে আসে, পাশেই থাকে কাস্টমারের অর্ডার।"),
    points: [
      { icon: "MessagesSquare", label: loc("Six channels, one thread", "ছয় চ্যানেল, একটাই থ্রেড"), body: loc("A comment that moves to DM stays one conversation.", "কমেন্ট থেকে ডিএম-এ গেলেও কথা একটাই থাকে।") },
      { icon: "Users", label: loc("Assign and resolve", "অ্যাসাইন আর রিজলভ"), body: loc("Open, pending and resolved per staff member.", "প্রতিটি স্টাফের জন্য খোলা, বাকি আর সমাধান।") },
      { icon: "ClipboardList", label: loc("Message to order", "মেসেজ থেকে অর্ডার"), body: loc("Details carry over without retyping.", "তথ্য নিজেই চলে আসে, লিখতে হয় না।") },
      { icon: "Clock", label: loc("Session windows handled", "সেশন উইন্ডো সামলানো"), body: loc("It knows when a free reply is still allowed.", "কখন বিনামূল্যে উত্তর দেওয়া যাবে, তা জানে।") },
    ],
    screen: SCREENS.omnichannel,
  },
  {
    slug: "cart-recovery", group: "grow", accent: "turquoise", icon: "ShoppingCart",
    name: loc("Cart recovery", "কার্ট রিকভারি"),
    title: loc("Turn abandoned carts back into orders.", "ফেলে যাওয়া কার্ট আবার অর্ডারে ফেরান।"),
    body: loc("The cart keeps its contents and its thread, so the follow-up continues a conversation instead of starting a cold one.", "কার্টে জিনিস আর কথোপকথন দুটোই থেকে যায়, তাই পরের মেসেজটা আগের কথারই ধারাবাহিকতা।"),
    points: [
      { icon: "Clock", label: loc("A quiet window", "একটু অপেক্ষা"), body: loc("A delay you set, so nobody is chased instantly.", "আপনার ঠিক করা বিরতি, যেন সাথে সাথে তাড়া না লাগে।") },
      { icon: "Send", label: loc("On their channel", "তাদের চ্যানেলেই"), body: loc("Sent where that customer already was.", "কাস্টমার যেখানে ছিল, সেখানেই পাঠানো হয়।") },
      { icon: "RotateCcw", label: loc("Cart restored", "কার্ট ফিরে আসে"), body: loc("The same cart reopens, nothing retyped.", "একই কার্ট আবার খোলে, নতুন করে কিছু লাগে না।") },
      { icon: "ChartColumn", label: loc("Credited correctly", "সঠিক হিসাব"), body: loc("Recorded against the message that recovered it.", "যে মেসেজ ফিরিয়ে এনেছে তার হিসাবেই যায়।") },
    ],
  },
  {
    slug: "reviews", group: "grow", accent: "orange", icon: "Star",
    name: loc("Reviews", "রিভিউ"),
    title: loc("Collect reviews and choose what publishes.", "রিভিউ নিন, কোনটা প্রকাশ হবে ঠিক করুন।"),
    body: loc("Ask after delivery rather than after checkout, and decide what appears on the product page.", "চেকআউটের পর নয়, ডেলিভারির পর জিজ্ঞেস করুন — আর ঠিক করুন পাতায় কী দেখাবে।"),
    points: [
      { icon: "Send", label: loc("Asked after delivery", "ডেলিভারির পর জিজ্ঞাসা"), body: loc("The request waits until the parcel arrives.", "পার্সেল পৌঁছানো পর্যন্ত অনুরোধ অপেক্ষা করে।") },
      { icon: "Eye", label: loc("You approve each one", "প্রতিটি আপনি অনুমোদন করেন"), body: loc("Nothing publishes without a person deciding.", "কেউ না বললে কিছুই প্রকাশ হয় না।") },
      { icon: "Star", label: loc("Shown on the product", "পণ্যের পাতায় দেখা যায়"), body: loc("Approved reviews appear where they help.", "অনুমোদিত রিভিউ যেখানে দরকার সেখানেই।") },
      { icon: "MessageCircle", label: loc("Reply in public", "প্রকাশ্যে উত্তর"), body: loc("Your reply sits under the review it answers.", "উত্তরটা সেই রিভিউর নিচেই থাকে।") },
    ],
  },
  {
    slug: "ai-product-creation", group: "grow", accent: "violet", icon: "Sparkles",
    name: loc("AI product creation", "এআই দিয়ে পণ্য তৈরি"),
    title: loc("It writes the draft. You decide what ships.", "খসড়া লেখে এআই। কী প্রকাশ হবে ঠিক করেন আপনি।"),
    body: loc("Upload a photo and a few words; the draft title, description, category and tags come back for you to edit and approve.", "একটা ছবি আর কয়েকটা শব্দ দিন; নাম, বিবরণ, ক্যাটাগরি আর ট্যাগের খসড়া আসে — আপনি এডিট করে অনুমোদন দেন।"),
    points: [
      { icon: "Image", label: loc("Start from a photo", "ছবি থেকে শুরু"), body: loc("A product photo and whatever you already know.", "পণ্যের একটা ছবি আর আপনার জানা তথ্য।") },
      { icon: "Languages", label: loc("Bangla or English", "বাংলা বা ইংরেজি"), body: loc("Drafted in the language your customers read.", "কাস্টমার যে ভাষায় পড়ে, সেই ভাষাতেই খসড়া।") },
      { icon: "Eye", label: loc("Every field editable", "প্রতিটি ঘর বদলানো যায়"), body: loc("Nothing is fixed and nothing is published yet.", "কিছুই চূড়ান্ত নয়, কিছুই প্রকাশ হয়নি।") },
      { icon: "Check", label: loc("Approval is a human step", "অনুমোদন মানুষের কাজ"), body: loc("Publishing only happens when a person says so.", "একজন মানুষ বললেই কেবল প্রকাশ হয়।") },
    ],
  },
  {
    slug: "analytics", group: "grow", accent: "red", icon: "ChartNoAxesCombined",
    name: loc("Marketing analytics", "মার্কেটিং অ্যানালিটিক্স"),
    title: loc("Two numbers, kept apart on purpose.", "দুটো সংখ্যা, ইচ্ছে করেই আলাদা।"),
    body: loc("What the ad platform reports and what GridCommerce recorded are shown as separate columns, never averaged into one claim.", "বিজ্ঞাপন প্ল্যাটফর্মের হিসাব আর গ্রিডকমার্সের রেকর্ড আলাদা কলামে দেখানো হয়, কখনো এক করে ফেলা হয় না।"),
    points: [
      { icon: "ChartColumn", label: loc("Spend beside orders", "খরচের পাশে অর্ডার"), body: loc("Campaign cost next to the orders recorded.", "ক্যাম্পেইনের খরচ আর রেকর্ড হওয়া অর্ডার পাশাপাশি।") },
      { icon: "Filter", label: loc("Per campaign and channel", "ক্যাম্পেইন আর চ্যানেল অনুযায়ী"), body: loc("Broken down the way you actually buy media.", "আপনি যেভাবে বিজ্ঞাপন কেনেন সেভাবেই ভাগ করা।") },
      { icon: "Percent", label: loc("Cost per delivered order", "ডেলিভার হওয়া অর্ডারের খরচ"), body: loc("Measured after returns, not at checkout.", "চেকআউটে নয়, রিটার্নের পর হিসাব।") },
      { icon: "AlertCircle", label: loc("No blended claim", "মিলিয়ে ফেলা দাবি নেই"), body: loc("The two measurements are never merged.", "দুটো মাপ কখনো এক করা হয় না।") },
    ],
    screen: SCREENS.dashboard,
  },

  /* ── Understand ───────────────────────────────────────────────────── */
  {
    slug: "customers", group: "understand", accent: "turquoise", icon: "Users",
    name: loc("Customers", "কাস্টমার"),
    title: loc("Know the customer behind every order.", "প্রতিটি অর্ডারের পেছনের কাস্টমারকে চিনুন।"),
    body: loc("Orders, conversations, cash on delivery history and returns collected on one record, across every channel they used.", "অর্ডার, কথোপকথন, ক্যাশ অন ডেলিভারির ইতিহাস আর রিটার্ন — সব এক রেকর্ডে, সব চ্যানেল মিলিয়ে।"),
    points: [
      { icon: "History", label: loc("One record per person", "একজনের একটাই রেকর্ড"), body: loc("The same customer across six channels is one person.", "ছয় চ্যানেলের একই কাস্টমার একজনই।") },
      { icon: "Filter", label: loc("Segments that mean something", "অর্থপূর্ণ সেগমেন্ট"), body: loc("Repeat, VIP, at risk and cash-only.", "রিপিট, ভিআইপি, ঝুঁকিতে আর শুধু ক্যাশ।") },
      { icon: "AlertCircle", label: loc("Delivery risk visible", "ডেলিভারির ঝুঁকি দেখা যায়"), body: loc("Past refusals show before you confirm again.", "আগের প্রত্যাখ্যান কনফার্ম করার আগেই দেখা যায়।") },
      { icon: "TrendingUp", label: loc("Lifetime value", "মোট মূল্য"), body: loc("What they have actually paid, after returns.", "রিটার্নের পর তারা আসলে কত দিয়েছেন।") },
    ],
    screen: SCREENS.customers,
  },
  {
    slug: "reports", group: "understand", accent: "green", icon: "FileChartColumn",
    name: loc("Reports", "রিপোর্ট"),
    title: loc("Read the same way every time.", "প্রতিবার একইভাবে পড়া যায়।"),
    body: loc("Sales, stock, cash and profit reported on fixed definitions, so last month and this month can actually be compared.", "বিক্রি, স্টক, ক্যাশ আর লাভ — নির্দিষ্ট সংজ্ঞায় রিপোর্ট, তাই গত মাস আর এই মাস সত্যিই মেলানো যায়।"),
    points: [
      { icon: "ChartPie", label: loc("Profit after everything", "সব বাদ দিয়ে লাভ"), body: loc("After courier charge, returns and product cost.", "কুরিয়ার চার্জ, রিটার্ন আর পণ্যের দাম বাদে।") },
      { icon: "Package", label: loc("Per product and order", "পণ্য আর অর্ডার অনুযায়ী"), body: loc("Find what is selling and what is only moving.", "কোনটা লাভ দিচ্ছে আর কোনটা শুধু নড়ছে জানুন।") },
      { icon: "RotateCcw", label: loc("Return rates", "রিটার্নের হার"), body: loc("By product, area and courier.", "পণ্য, এলাকা আর কুরিয়ার অনুযায়ী।") },
      { icon: "ExternalLink", label: loc("Exportable", "এক্সপোর্ট করা যায়"), body: loc("Take any report out as a file.", "যেকোনো রিপোর্ট ফাইল আকারে নিন।") },
    ],
    screen: SCREENS.dashboard,
  },
  {
    slug: "cash-and-expenses", group: "understand", accent: "brand", icon: "Wallet",
    name: loc("Cash and expenses", "ক্যাশ আর খরচ"),
    title: loc("What came in, what went out, what is outstanding.", "কী এলো, কী গেল, কী বাকি।"),
    body: loc("Cash on delivery owed by couriers, supplier bills and daily expenses in one position rather than three notebooks.", "কুরিয়ারের কাছে পাওনা, সাপ্লায়ারের বিল আর দৈনিক খরচ — তিনটে খাতা নয়, একটাই হিসাব।"),
    points: [
      { icon: "Banknote", label: loc("COD outstanding", "বাকি ক্যাশ"), body: loc("What couriers still owe you, by courier.", "কোন কুরিয়ারের কাছে কত পাওনা।") },
      { icon: "Receipt", label: loc("Expenses recorded", "খরচের হিসাব"), body: loc("Rent, salary, packaging and ad spend.", "ভাড়া, বেতন, প্যাকেজিং আর বিজ্ঞাপন।") },
      { icon: "Building2", label: loc("Supplier dues", "সাপ্লায়ারের পাওনা"), body: loc("What you owe, and since when.", "আপনি কত দেবেন, কবে থেকে।") },
      { icon: "Activity", label: loc("Daily position", "দৈনিক অবস্থা"), body: loc("Where the business stands today.", "আজ ব্যবসা কোথায় দাঁড়িয়ে।") },
    ],
  },
];

/** Duplicate slug guard — the registry drives routing, so a collision would
 *  silently shadow a page. */
export const FEATURE_BY_SLUG = new Map(FEATURES.map((f) => [f.slug, f]));
