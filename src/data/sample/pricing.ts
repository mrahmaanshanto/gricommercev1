/** Plans and add-ons, taken from the merchant platform's plan catalogue
 *  (online ladder, current version): Growth ৳1,000, Business ৳2,500,
 *  Enterprise ৳5,000 a month, 15-day trial. Confirm with the owner before
 *  each price change goes live. */
import { loc, type Localized } from "@/i18n/types";

export type Plan = {
  id: string;
  name: Localized;
  tagline: Localized;
  monthly: number;
  yearly: number;
  accent: "brand" | "violet" | "green";
  featured?: boolean;
  bestFor: Localized;
  features: Localized[];
  limits: { label: Localized; value: Localized }[];
};

export const PLANS: Plan[] = [
  {
    id: "growth",
    name: loc("Growth", "গ্রোথ"),
    tagline: loc("Start selling online with everything you need every day.", "প্রতিদিনের দরকারি সব নিয়ে অনলাইনে বিক্রি শুরু করুন।"),
    monthly: 1000, yearly: 10000, accent: "green",
    bestFor: loc("New and small online sellers", "নতুন ও ছোট অনলাইন সেলার"),
    features: [
      loc("Online store, checkout and landing pages", "অনলাইন স্টোর, চেকআউট আর ল্যান্ডিং পেজ"),
      loc("Orders, stock, customers and returns", "অর্ডার, স্টক, কাস্টমার আর রিটার্ন"),
      loc("Courier booking and COD tracking", "কুরিয়ার বুকিং আর COD ট্র্যাকিং"),
      loc("Fraud check before you ship", "শিপের আগে ফ্রড চেক"),
      loc("Payments and daily reports", "পেমেন্ট আর দৈনিক রিপোর্ট"),
    ],
    limits: [
      { label: loc("Orders a month", "মাসে অর্ডার"), value: loc("500", "৫০০") },
      { label: loc("Products", "প্রোডাক্ট"), value: loc("200", "২০০") },
      { label: loc("Staff", "স্টাফ"), value: loc("2", "২") },
      { label: loc("Courier connections", "কুরিয়ার কানেকশন"), value: loc("1", "১") },
      { label: loc("Landing pages", "ল্যান্ডিং পেজ"), value: loc("2", "২") },
      { label: loc("SMS a month", "মাসে SMS"), value: loc("500", "৫০০") },
    ],
  },
  {
    id: "business",
    name: loc("Business", "বিজনেস"),
    tagline: loc("Grow sales with offers, cart recovery and profit reports.", "অফার, কার্ট রিকভারি আর লাভের রিপোর্ট দিয়ে বিক্রি বাড়ান।"),
    monthly: 2500, yearly: 27000, accent: "brand", featured: true,
    bestFor: loc("Growing online brands", "বাড়তে থাকা অনলাইন ব্র্যান্ড"),
    features: [
      loc("Everything in Growth", "গ্রোথের সবকিছু"),
      loc("Offers, coupons and loyalty points", "অফার, কুপন আর লয়্যালটি পয়েন্ট"),
      loc("Abandoned cart recovery", "ফেলে যাওয়া কার্ট ফিরিয়ে আনা"),
      loc("Profit and ad reports", "লাভ আর বিজ্ঞাপনের রিপোর্ট"),
      loc("100 AI credits a month", "মাসে ১০০ AI ক্রেডিট"),
    ],
    limits: [
      { label: loc("Orders a month", "মাসে অর্ডার"), value: loc("2,500", "২,৫০০") },
      { label: loc("Products", "প্রোডাক্ট"), value: loc("2,000", "২,০০০") },
      { label: loc("Staff", "স্টাফ"), value: loc("5", "৫") },
      { label: loc("Courier connections", "কুরিয়ার কানেকশন"), value: loc("3", "৩") },
      { label: loc("Landing pages", "ল্যান্ডিং পেজ"), value: loc("10", "১০") },
      { label: loc("SMS a month", "মাসে SMS"), value: loc("1,000", "১,০০০") },
    ],
  },
  {
    id: "enterprise",
    name: loc("Enterprise", "এন্টারপ্রাইজ"),
    tagline: loc("For big teams with many locations and high order volume.", "অনেক লোকেশন আর বেশি অর্ডারের বড় টিমের জন্য।"),
    monthly: 5000, yearly: 50000, accent: "violet",
    bestFor: loc("High-volume sellers and multi-branch businesses", "বেশি অর্ডার আর একাধিক ব্রাঞ্চের ব্যবসা"),
    features: [
      loc("Everything in Business", "বিজনেসের সবকিছু"),
      loc("Warehouses and branches", "ওয়্যারহাউস আর ব্রাঞ্চ"),
      loc("Staff, attendance and payroll", "স্টাফ, হাজিরা আর বেতন"),
      loc("All couriers connected", "সব কুরিয়ার কানেক্টেড"),
      loc("500 AI credits a month", "মাসে ৫০০ AI ক্রেডিট"),
    ],
    limits: [
      { label: loc("Orders a month", "মাসে অর্ডার"), value: loc("10,000", "১০,০০০") },
      { label: loc("Products", "প্রোডাক্ট"), value: loc("Unlimited", "আনলিমিটেড") },
      { label: loc("Staff", "স্টাফ"), value: loc("15", "১৫") },
      { label: loc("Courier connections", "কুরিয়ার কানেকশন"), value: loc("Unlimited", "আনলিমিটেড") },
      { label: loc("Landing pages", "ল্যান্ডিং পেজ"), value: loc("50", "৫০") },
      { label: loc("SMS a month", "মাসে SMS"), value: loc("5,000", "৫,০০০") },
    ],
  },
];

/** Add-ons billed on top of a plan. */
export const MODULES: { icon: string; label: Localized; price: string; detail: Localized }[] = [
  { icon: "MessagesSquare", label: loc("Inbox and automation", "ইনবক্স আর অটোমেশন"), price: "৳ 1,200",
    detail: loc("Every chat in one inbox, plus automatic follow-ups. Per month.", "সব চ্যাট এক ইনবক্সে, সাথে অটো ফলোআপ। প্রতি মাসে।") },
  { icon: "Sparkles", label: loc("AI product writing", "AI দিয়ে প্রোডাক্ট লেখা"), price: "৳ 800",
    detail: loc("AI writes product details; you approve. Per month.", "AI প্রোডাক্টের বিবরণ লেখে, আপনি অনুমোদন দেন। প্রতি মাসে।") },
  { icon: "Warehouse", label: loc("Warehouse", "ওয়্যারহাউস"), price: "৳ 1,000",
    detail: loc("Stock across more locations. Per month.", "আরও লোকেশনে স্টক। প্রতি মাসে।") },
  { icon: "MessageCircle", label: loc("SMS pack", "SMS প্যাক"), price: "৳ 600",
    detail: loc("10,000 SMS.", "১০,০০০ SMS।") },
  { icon: "ArrowRightLeft", label: loc("Assisted migration", "অ্যাসিস্টেড মাইগ্রেশন"), price: "৳ 5,000",
    detail: loc("Our team moves your store for you. One time.", "আমাদের টিম আপনার স্টোর সরিয়ে আনবে। এককালীন।") },
];

export const PRICING_FAQ: { q: Localized; a: Localized }[] = [
  { q: loc("Is there a free trial?", "ফ্রি ট্রায়াল আছে?"),
    a: loc("Yes. Every plan starts with a 15-day free trial.", "হ্যাঁ। প্রতিটি প্ল্যান ১৫ দিনের ফ্রি ট্রায়াল দিয়ে শুরু হয়।") },
  { q: loc("Can I change plan later?", "পরে প্ল্যান বদলানো যাবে?"),
    a: loc("Yes. Moving up takes effect immediately and moving down applies at the next cycle.", "হ্যাঁ। উপরে ওঠা সাথে সাথে কার্যকর, নামা পরের সাইকেল থেকে।") },
  { q: loc("What happens if I pass my order limit?", "অর্ডারের সীমা পেরিয়ে গেলে কী হয়?"),
    a: loc("We tell you at 80% of your limit. Add a top-up or move to the next plan to keep going.", "সীমার ৮০%-এ পৌঁছালেই জানিয়ে দিই। চালিয়ে যেতে টপ-আপ নিন বা পরের প্ল্যানে যান।") },
  { q: loc("Do you take a cut of my sales?", "বিক্রির কোনো ভাগ নেন?"),
    a: loc("No. The subscription is the price; GridCommerce takes no commission on orders.", "না। সাবস্ক্রিপশনই দাম; অর্ডারের উপর কোনো কমিশন নেওয়া হয় না।") },
];

export const PRICING_COPY = {
  title: loc("Pricing", "প্রাইসিং"),
  subtitle: loc(
    "Simple monthly plans in taka. No commission on your sales.",
    "টাকায় সহজ মাসিক প্ল্যান। আপনার বিক্রিতে কোনো কমিশন নেই।",
  ),
  monthly: loc("Monthly", "মাসিক"),
  yearly: loc("Yearly", "বার্ষিক"),
  yearlyNote: loc("Save up to 2 months", "২ মাস পর্যন্ত সাশ্রয়"),
  perMonth: loc("/month", "/মাস"),
  billedYearly: loc("billed yearly", "বার্ষিক বিল"),
  bestFor: loc("Best for", "যাদের জন্য"),
  modulesTitle: loc("Add a module when you need it", "দরকার হলে মডিউল যোগ করুন"),
  modulesBody: loc(
    "Anything you do not need yet stays off, and can be switched on later without a migration.",
    "যেটা এখনো দরকার নেই সেটা বন্ধ থাকে, পরে মাইগ্রেশন ছাড়াই চালু করা যায়।",
  ),
  faqTitle: loc("Questions", "প্রশ্ন"),
  disclaimer: loc(
    "Prices are in Bangladeshi taka. Every plan has a 15-day free trial. SMS, WhatsApp and AI use credits.",
    "দাম বাংলাদেশি টাকায়। প্রতিটি প্ল্যানে ১৫ দিনের ফ্রি ট্রায়াল। SMS, WhatsApp আর AI-তে ক্রেডিট লাগে।",
  ),
};
