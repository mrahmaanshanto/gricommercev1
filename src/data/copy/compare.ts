/**
 * GridCommerce compared with Shopify and WordPress + WooCommerce, for a seller
 * in Bangladesh. Competitor facts were checked in October 2026 against
 * shopify.com/pricing and published WooCommerce cost guides; they change, so
 * the page says when they were checked. Keep each cell to what can be shown:
 * "through apps / plugins" where a third party fills the gap.
 */
import { loc, type Localized } from "@/i18n/types";

export type Cell = { mark: "yes" | "part" | "no"; note: Localized };
export type Row = { label: Localized; gc: Cell; shopify: Cell; woo: Cell };

const yes = (en: string, bn: string): Cell => ({ mark: "yes", note: loc(en, bn) });
const part = (en: string, bn: string): Cell => ({ mark: "part", note: loc(en, bn) });
const no = (en: string, bn: string): Cell => ({ mark: "no", note: loc(en, bn) });

export const COMPARE = {
  eyebrow: loc("Compare", "তুলনা"),
  title: loc("GridCommerce vs Shopify vs WordPress.", "GridCommerce বনাম Shopify বনাম WordPress।"),
  body: loc(
    "Shopify and WordPress are built for the whole world. GridCommerce is built for selling in Bangladesh: COD, couriers, bKash and the courier history of a phone number are part of the product, not extra apps.",
    "Shopify আর WordPress পুরো দুনিয়ার জন্য তৈরি। GridCommerce তৈরি বাংলাদেশে বিক্রির জন্য: COD, কুরিয়ার, bKash আর ফোন নম্বরের কুরিয়ার ইতিহাস প্রোডাক্টের ভেতরেই, আলাদা অ্যাপ লাগে না।",
  ),
  columns: {
    gc: loc("GridCommerce", "GridCommerce"),
    shopify: loc("Shopify", "Shopify"),
    woo: loc("WordPress + WooCommerce", "WordPress + WooCommerce"),
  },
  feature: loc("What you need", "আপনার যা দরকার"),
  /* The cost at a glance. */
  cost: {
    title: loc("What you really pay", "আসলে কত খরচ"),
    gc: {
      price: loc("From ৳1,000 a month", "মাসে ৳১,০০০ থেকে"),
      lines: [
        loc("Paid in taka", "টাকায় পেমেন্ট"),
        loc("No commission on your sales", "বিক্রিতে কোনো কমিশন নেই"),
        loc("Courier, COD and the courier history check included", "কুরিয়ার, COD আর কুরিয়ার ইতিহাস যাচাই সাথেই"),
      ],
    },
    shopify: {
      price: loc("From about $19–$39 a month", "মাসে প্রায় $১৯–$৩৯ থেকে"),
      lines: [
        loc("Paid in US dollars by card", "কার্ডে মার্কিন ডলারে পেমেন্ট"),
        loc("Up to 2% extra on each sale with local gateways", "লোকাল গেটওয়েতে প্রতি বিক্রিতে ২% পর্যন্ত বাড়তি"),
        loc("Paid apps for courier, COD and fraud check", "কুরিয়ার, COD আর ফ্রড চেকে পেইড অ্যাপ"),
      ],
    },
    woo: {
      price: loc("Free plugin, many other costs", "প্লাগইন ফ্রি, বাকি খরচ অনেক"),
      lines: [
        loc("Hosting, domain and theme to buy", "হোস্টিং, ডোমেইন আর থিম কিনতে হয়"),
        loc("Paid plugins, often in dollars", "পেইড প্লাগইন, প্রায়ই ডলারে"),
        loc("A developer for updates and fixes", "আপডেট আর সমস্যার জন্য ডেভেলপার"),
      ],
    },
  },
  /* Every mark carries a word (shown and read aloud), then the legend says what the word means. */
  words: { yes: loc("Yes", "হ্যাঁ"), part: loc("Partly", "আংশিক"), no: loc("No", "না") },
  legend: {
    yes: loc("Yes: part of the product", "হ্যাঁ: প্রোডাক্টের ভেতরেই"),
    part: loc("Partly: needs an add-on, app or plugin (the note says which)", "আংশিক: অ্যাড-অন, অ্যাপ বা প্লাগইন লাগে (নোটে বলা আছে)"),
    no: loc("No: not part of the product", "না: প্রোডাক্টে নেই"),
  },
  rows: [
    {
      label: loc("Risky COD orders checked before shipping", "শিপের আগে ঝুঁকিপূর্ণ COD অর্ডার যাচাই"),
      gc: yes("Courier delivery history for the phone number; you decide what to do", "ফোন নম্বরের কুরিয়ার ডেলিভারি ইতিহাস; কী করবেন আপনি ঠিক করেন"),
      shopify: part("Card fraud only; COD checks need an app", "শুধু কার্ড ফ্রড; COD চেকে অ্যাপ লাগে"),
      woo: part("Needs a plugin", "প্লাগইন লাগে"),
    },
    {
      label: loc("Pathao, Steadfast and RedX booking", "Pathao, Steadfast ও RedX বুকিং"),
      gc: yes("Book from the order; tracking ID comes back", "অর্ডার থেকেই বুক; ট্র্যাকিং আইডি ফিরে আসে"),
      shopify: part("Through third-party apps", "থার্ড-পার্টি অ্যাপ দিয়ে"),
      woo: part("Through plugins", "প্লাগইন দিয়ে"),
    },
    {
      label: loc("COD money tracking and payout matching", "COD টাকা ট্র্যাকিং ও পেআউট মেলানো"),
      gc: yes("Each courier payout matched to its orders", "প্রতিটি কুরিয়ার পেআউট তার অর্ডারের সাথে মেলানো"),
      shopify: no("Not built in", "ভেতরে নেই"),
      woo: no("Not built in", "ভেতরে নেই"),
    },
    {
      label: loc("Order confirmation calls", "অর্ডার কনফার্মেশন কল"),
      gc: yes("A call step on every order: AI or a person; the answer is saved", "প্রতিটি অর্ডারে কলের ধাপ: AI বা মানুষ; উত্তর সেভ থাকে"),
      shopify: no("Not available", "নেই"),
      woo: no("Not available", "নেই"),
    },
    {
      label: loc("bKash, Nagad and SSLCommerz checkout", "bKash, Nagad ও SSLCommerz চেকআউট"),
      gc: yes("Connect your own gateway accounts", "আপনার নিজের গেটওয়ে অ্যাকাউন্ট যুক্ত করুন"),
      shopify: part("Through apps, with an extra fee per sale", "অ্যাপ দিয়ে, প্রতি বিক্রিতে বাড়তি ফি"),
      woo: part("Through plugins", "প্লাগইন দিয়ে"),
    },
    {
      label: loc("Facebook, WhatsApp and Instagram inbox", "Facebook, WhatsApp ও Instagram ইনবক্স"),
      gc: part("Inbox add-on; create the order from the chat", "ইনবক্স অ্যাড-অন; চ্যাট থেকেই অর্ডার তৈরি"),
      shopify: part("Through apps", "অ্যাপ দিয়ে"),
      woo: part("Through plugins", "প্লাগইন দিয়ে"),
    },
    {
      label: loc("Server-side tracking for Meta, TikTok and Google", "Meta, TikTok ও Google-এর সার্ভার-সাইড ট্র্যাকিং"),
      gc: yes("One Pixels & events page; you connect your ad accounts", "একটি Pixels ও events পেজ; অ্যাড অ্যাকাউন্ট আপনি যুক্ত করেন"),
      shopify: part("One app per platform", "প্রতি প্ল্যাটফর্মে আলাদা অ্যাপ"),
      woo: part("Through plugins", "প্লাগইন দিয়ে"),
    },
    {
      label: loc("Real profit after courier, returns and ads", "কুরিয়ার, রিটার্ন ও বিজ্ঞাপন বাদে আসল লাভ"),
      gc: yes("In the reports, from your own cost prices", "রিপোর্টে, আপনার দেওয়া কেনা দাম থেকে"),
      shopify: part("Needs apps", "অ্যাপ লাগে"),
      woo: part("Needs plugins", "প্লাগইন লাগে"),
    },
    {
      label: loc("Shop counter POS with the same stock", "একই স্টকে দোকানের POS"),
      gc: yes("In the Retail and Retail + Online systems", "Retail আর Retail + Online সিস্টেমে"),
      shopify: part("Yes; POS Pro costs extra", "আছে; POS Pro-তে বাড়তি খরচ"),
      woo: part("Through plugins", "প্লাগইন দিয়ে"),
    },
    {
      label: loc("Bring your old store", "পুরনো স্টোর নিয়ে আসা"),
      gc: yes("Products, customers and past orders from an export file, checked before import", "এক্সপোর্ট ফাইল থেকে প্রোডাক্ট, কাস্টমার আর আগের অর্ডার, ইমপোর্টের আগে যাচাই"),
      shopify: part("Import tools and apps", "ইমপোর্ট টুল আর অ্যাপ"),
      woo: part("Import plugins", "ইমপোর্ট প্লাগইন"),
    },
    {
      label: loc("Updates, hosting and security", "আপডেট, হোস্টিং আর সিকিউরিটি"),
      gc: yes("Handled for you", "আমরাই সামলাই"),
      shopify: yes("Handled by Shopify", "Shopify সামলায়"),
      woo: no("You or your developer", "আপনি বা আপনার ডেভেলপার"),
    },
    {
      label: loc("Support from a local team", "লোকাল টিমের সাপোর্ট"),
      gc: yes("Bangladeshi team, Bangla and English", "বাংলাদেশি টিম, বাংলা ও ইংরেজি"),
      shopify: no("Global support", "গ্লোবাল সাপোর্ট"),
      woo: no("Forums or your developer", "ফোরাম বা আপনার ডেভেলপার"),
    },
  ] as Row[],
  checked: loc(
    "Shopify and WooCommerce details checked in October 2026 from their public pricing pages and cost guides. Prices vary by country and change over time; check their websites for the latest.",
    "Shopify ও WooCommerce-এর তথ্য ২০২৬ সালের অক্টোবরে তাদের পাবলিক প্রাইসিং পেজ ও খরচের গাইড থেকে যাচাই করা। দেশভেদে দাম আলাদা ও সময়ের সাথে বদলায়; সর্বশেষ তথ্য তাদের ওয়েবসাইটে দেখুন।",
  ),
  more: loc("See the full comparison", "পুরো তুলনা দেখুন"),
  pageTitle: loc("GridCommerce vs Shopify vs WordPress", "GridCommerce বনাম Shopify বনাম WordPress"),
  pageBody: loc(
    "Thinking about Shopify or a WordPress store? Here is what each one costs and what you get for selling in Bangladesh.",
    "Shopify বা WordPress স্টোরের কথা ভাবছেন? বাংলাদেশে বিক্রির জন্য কোনটায় কত খরচ আর কী পাবেন, দেখে নিন।",
  ),
};

export const PRICING_HOME = {
  eyebrow: loc("Pricing", "প্রাইসিং"),
  title: loc("Simple plans in taka. No commission on sales.", "টাকায় সহজ প্ল্যান। বিক্রিতে কোনো কমিশন নেই।"),
  body: loc(
    "Start with a 15-day free trial. Move up when your orders grow.",
    "১৫ দিনের ফ্রি ট্রায়াল দিয়ে শুরু করুন। অর্ডার বাড়লে বড় প্ল্যানে যান।",
  ),
  popular: loc("Most popular", "সবচেয়ে জনপ্রিয়"),
  start: loc("Start free trial", "ফ্রি ট্রায়াল শুরু করুন"),
  all: loc("See all plans and add-ons", "সব প্ল্যান ও অ্যাড-অন দেখুন"),
  orders: loc("orders a month", "অর্ডার প্রতি মাসে"),
  /* What the price does and does not cover. Figures come from pricing.ts only. */
  notesTitle: loc("Good to know", "জেনে রাখুন"),
  notes: [
    {
      icon: "CalendarClock",
      text: loc(
        "The trial is 15 days of the plan you pick, with your own products and orders. Nothing is charged until you choose to continue.",
        "ট্রায়াল মানে আপনার বাছা প্ল্যান ১৫ দিন, নিজের প্রোডাক্ট আর অর্ডার দিয়ে। আপনি চালিয়ে যেতে চাইলে তবেই টাকা নেওয়া হয়।",
      ),
    },
    {
      icon: "Coins",
      text: loc(
        "SMS, WhatsApp, email and AI are paid by use, from a separate prepaid credits balance. Your plan includes some AI credits and SMS; the rest is topped up when you need it.",
        "SMS, WhatsApp, ইমেইল আর AI-এর খরচ ব্যবহার অনুযায়ী, আলাদা প্রিপেইড ক্রেডিট ব্যালেন্স থেকে। প্ল্যানের সাথে কিছু AI ক্রেডিট আর SMS থাকে; বাকিটা দরকার হলে টপ-আপ করেন।",
      ),
    },
    {
      icon: "Percent",
      text: loc(
        "No commission on your sales, on COD or on bKash and Nagad payments. The plan price is the price.",
        "বিক্রি, COD বা bKash-Nagad পেমেন্টে কোনো কমিশন নেই। প্ল্যানের দামই দাম।",
      ),
    },
    {
      icon: "Receipt",
      text: loc(
        "Prices are in taka. VAT is added to the bill where it applies.",
        "দাম টাকায়। যেখানে প্রযোজ্য, বিলে VAT যোগ হয়।",
      ),
    },
  ],
};

