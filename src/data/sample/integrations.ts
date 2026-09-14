/** SAMPLE DATA — invented. See ./index.ts */
import { loc, type Localized } from "@/i18n/types";

/* ── Section 15 · Solutions ──────────────────────────────────────────── */

export const SOLUTIONS = [
  {
    id: "online",
    href: "/solutions/online-commerce",
    icon: "Globe",
    accent: "brand" as const,
    label: loc("Online commerce", "অনলাইন কমার্স"),
    title: loc("You sell from a page and a phone.", "আপনি বিক্রি করেন একটা পেজ আর একটা ফোন দিয়ে।"),
    body: loc(
      "Storefront, landing pages and social channels feeding one order list, with cash on delivery handled properly.",
      "স্টোরফ্রন্ট, ল্যান্ডিং পেজ আর সোশ্যাল চ্যানেল — সব এক অর্ডার লিস্টে, ক্যাশ অন ডেলিভারি ঠিকভাবে সামলানো।",
    ),
    points: [
      loc("Facebook and WhatsApp orders", "ফেসবুক আর হোয়াটসঅ্যাপের অর্ডার"),
      loc("Courier booking and COD", "কুরিয়ার বুকিং আর ক্যাশ অন ডেলিভারি"),
      loc("Cart recovery", "কার্ট রিকভারি"),
    ],
  },
  {
    id: "retail",
    href: "/solutions/retail-commerce",
    icon: "Store",
    accent: "green" as const,
    label: loc("Retail commerce", "রিটেইল কমার্স"),
    title: loc("You have a counter and a website.", "আপনার একটা কাউন্টার আছে, একটা ওয়েবসাইটও।"),
    body: loc(
      "Point of sale and online sharing one catalogue, one stock number and one customer record.",
      "পিওএস আর অনলাইন — একই ক্যাটালগ, একই স্টক, একই কাস্টমার রেকর্ড।",
    ),
    points: [
      loc("Barcode-first counter sales", "বারকোড দিয়ে কাউন্টার সেল"),
      loc("Stock per warehouse and counter", "গুদাম ও কাউন্টার অনুযায়ী স্টক"),
      loc("Hold, resume and exchange", "হোল্ড, রিজিউম আর এক্সচেঞ্জ"),
    ],
  },
  {
    id: "wholesale",
    href: "/solutions/wholesale-commerce",
    icon: "Warehouse",
    accent: "violet" as const,
    label: loc("Wholesale commerce", "হোলসেল কমার্স"),
    title: loc("You sell to businesses, not walk-ins.", "আপনি বিক্রি করেন ব্যবসার কাছে, খুচরা ক্রেতার কাছে নয়।"),
    body: loc(
      "Tiered pricing, credit terms and repeat bulk orders on the same platform as everything else.",
      "স্তরভিত্তিক দাম, বাকির শর্ত আর নিয়মিত পাইকারি অর্ডার — একই প্ল্যাটফর্মে।",
    ),
    points: [
      loc("Price tiers per buyer", "ক্রেতা অনুযায়ী দামের স্তর"),
      loc("Credit and due tracking", "বাকি আর পাওনার হিসাব"),
      loc("Repeat order templates", "নিয়মিত অর্ডারের টেমপ্লেট"),
    ],
  },
];

export const SOLUTIONS_COPY = {
  eyebrow: loc("Solutions", "সল্যুশন"),
  title: loc("Start from the way you already sell.", "আপনি যেভাবে বিক্রি করেন, সেখান থেকেই শুরু।"),
  body: loc(
    "The platform is the same underneath. What changes is which part you switch on first.",
    "ভিতরের প্ল্যাটফর্ম একই। শুধু বদলায় আপনি প্রথমে কোন অংশটা চালু করছেন।",
  ),
};

/* ── Section 16 · Integrations ───────────────────────────────────────── */

/** Marketing visuals only. No OAuth, no live connection state. */
export const INTEGRATION_GROUPS = [
  {
    id: "channels", label: loc("Channels", "চ্যানেল"), icon: "MessagesSquare", accent: "violet" as const,
    items: ["Facebook Page", "Messenger", "WhatsApp Business", "Instagram", "TikTok Shop", "Website chat"],
  },
  {
    id: "courier", label: loc("Courier", "কুরিয়ার"), icon: "Truck", accent: "orange" as const,
    items: ["Steadfast", "Pathao Courier", "RedX", "eCourier", "Paperfly", "SA Paribahan", "CarryBee"],
  },
  {
    id: "payments", label: loc("Payments", "পেমেন্ট"), icon: "CreditCard", accent: "green" as const,
    items: ["bKash", "Nagad", "Rocket", "Upay", "SSLCommerz", "aamarPay", "Visa", "Mastercard", "Dutch-Bangla Bank", "Bank transfer"],
  },
  {
    id: "marketing", label: loc("Marketing", "মার্কেটিং"), icon: "TrendingUp", accent: "red" as const,
    items: ["Meta Ads", "Google Ads", "TikTok Ads", "SMS gateways", "Email", "Google Analytics"],
  },
];

export const INTEGRATIONS_COPY = {
  eyebrow: loc("Integrations", "ইন্টিগ্রেশন"),
  title: loc("Connected to what you already pay for.", "আপনি যেগুলোর জন্য এখনই টাকা দেন, তার সাথেই যুক্ত।"),
  body: loc(
    "Couriers, payment gateways, ad platforms and messaging channels that Bangladeshi merchants actually use.",
    "কুরিয়ার, পেমেন্ট গেটওয়ে, বিজ্ঞাপন প্ল্যাটফর্ম আর মেসেজিং চ্যানেল — যেগুলো বাংলাদেশি মার্চেন্টরা সত্যিই ব্যবহার করেন।",
  ),
  note: loc(
    "Sample list for layout review. The live site lists only providers confirmed against a signed contract.",
    "লেআউট দেখার জন্য নমুনা তালিকা। আসল সাইটে শুধু চুক্তিবদ্ধ প্রোভাইডারই থাকবে।",
  ),
};

/* ── Section 17 · Migration ──────────────────────────────────────────── */

export const MIGRATION_SOURCES = [
  { id: "woo", icon: "Globe", accent: "violet" as const,
    label: loc("WooCommerce or WordPress", "উকমার্স বা ওয়ার্ডপ্রেস"),
    detail: loc("Products, customers and past orders come across with their history.", "পণ্য, কাস্টমার আর পুরনো অর্ডার — ইতিহাসসহ চলে আসে।") },
  { id: "sheets", icon: "Table", accent: "green" as const,
    label: loc("Spreadsheets", "স্প্রেডশিট"),
    detail: loc("Map your columns once; the importer remembers the shape.", "একবার কলাম মিলিয়ে দিন; ইমপোর্টার গঠনটা মনে রাখে।") },
  { id: "facebook", icon: "MessageCircle", accent: "brand" as const,
    label: loc("Facebook-first operations", "ফেসবুক-নির্ভর ব্যবসা"),
    detail: loc("No catalogue yet? Start from your page and build it as you sell.", "ক্যাটালগ নেই? পেজ থেকেই শুরু করুন, বিক্রি করতে করতে গড়ে উঠবে।") },
];

export const MIGRATION_COPY = {
  eyebrow: loc("Migration", "মাইগ্রেশন"),
  title: loc("Bring what you have. Keep selling while you move.", "যা আছে নিয়ে আসুন। সরানোর সময়ও বিক্রি চলবে।"),
  body: loc(
    "Nothing is switched off during a move. The old setup keeps running until the new one is carrying real orders.",
    "সরানোর সময় কিছুই বন্ধ হয় না। নতুনটা আসল অর্ডার সামলানো শুরু না করা পর্যন্ত পুরনোটা চলতে থাকে।",
  ),
};

/* ── Section 18 · Security and trust ─────────────────────────────────── */

/** Capabilities only. No certification is claimed anywhere. */
export const SECURITY_ITEMS: { icon: string; label: Localized; detail: Localized }[] = [
  { icon: "Lock", label: loc("Role-based staff access", "স্টাফের ভূমিকা অনুযায়ী অ্যাক্সেস"),
    detail: loc("Decide who can see cost prices, issue refunds or export customers.", "কে কেনা দাম দেখবে, রিফান্ড দেবে বা কাস্টমার এক্সপোর্ট করবে — আপনি ঠিক করেন।") },
  { icon: "History", label: loc("Action history", "কাজের ইতিহাস"),
    detail: loc("Who changed a price, cancelled an order or edited stock, and when.", "কে দাম বদলাল, অর্ডার বাতিল করল বা স্টক এডিট করল, আর কখন।") },
  { icon: "Database", label: loc("Your data stays exportable", "আপনার ডেটা এক্সপোর্ট করা যায়"),
    detail: loc("Products, orders and customers can be taken out at any time.", "পণ্য, অর্ডার আর কাস্টমার — যেকোনো সময় নিয়ে যেতে পারবেন।") },
  { icon: "ShieldCheck", label: loc("Encrypted in transit", "ট্রান্সমিশনে এনক্রিপ্টেড"),
    detail: loc("Traffic between your browser and GridCommerce is encrypted.", "আপনার ব্রাউজার আর গ্রিডকমার্সের মধ্যে যোগাযোগ এনক্রিপ্টেড।") },
];

export const SECURITY_COPY = {
  eyebrow: loc("Security and control", "নিরাপত্তা আর নিয়ন্ত্রণ"),
  title: loc("Staff get what they need. Nothing else.", "স্টাফ যতটুকু দরকার ততটুকুই পায়। বাকিটা নয়।"),
  body: loc(
    "These are capabilities the platform has, described plainly. No certification, audit or uptime figure is claimed.",
    "এগুলো প্ল্যাটফর্মের সত্যিকারের সক্ষমতা, সোজা ভাষায় বলা। কোনো সার্টিফিকেশন, অডিট বা আপটাইমের দাবি করা হচ্ছে না।",
  ),
};
