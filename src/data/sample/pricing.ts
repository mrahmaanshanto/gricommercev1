/** SAMPLE DATA — invented prices. See ./index.ts
 *
 *  `docs/OPEN-ITEMS.md` records that two conflicting commercial models exist
 *  internally and that the real page cannot be written until one is chosen.
 *  Both shapes are represented here so the layout can be reviewed either way:
 *  three plans, plus the add-on modules the other model would sell separately.
 */
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
    id: "starter",
    name: loc("Starter", "স্টার্টার"),
    tagline: loc("Selling from a page and a phone.", "একটা পেজ আর ফোন দিয়ে বিক্রি।"),
    monthly: 1200, yearly: 12000, accent: "green",
    bestFor: loc("New and single-person businesses", "নতুন আর একজনের ব্যবসা"),
    features: [
      loc("Storefront and landing pages", "স্টোরফ্রন্ট আর ল্যান্ডিং পেজ"),
      loc("Orders from every channel", "সব চ্যানেলের অর্ডার"),
      loc("Courier booking and COD tracking", "কুরিয়ার বুকিং আর ক্যাশ ট্র্যাকিং"),
      loc("Two staff accounts", "দুইজন স্টাফ"),
    ],
    limits: [
      { label: loc("Orders per month", "মাসে অর্ডার"), value: loc("500", "৫০০") },
      { label: loc("Products", "পণ্য"), value: loc("1,000", "১,০০০") },
      { label: loc("Warehouses", "গুদাম"), value: loc("1", "১") },
    ],
  },
  {
    id: "growth",
    name: loc("Growth", "গ্রোথ"),
    tagline: loc("A counter, a website and a team.", "কাউন্টার, ওয়েবসাইট আর একটা টিম।"),
    monthly: 3400, yearly: 34000, accent: "brand", featured: true,
    bestFor: loc("Shops selling online and at a counter", "অনলাইন আর কাউন্টার দুটোতেই বিক্রি"),
    features: [
      loc("Everything in Starter", "স্টার্টারের সবকিছু"),
      loc("Point of sale with barcode", "বারকোডসহ পিওএস"),
      loc("Omnichannel inbox", "সব মেসেজ এক ইনবক্সে"),
      loc("Cart recovery and offers", "কার্ট রিকভারি আর অফার"),
      loc("Profit after courier and returns", "কুরিয়ার আর রিটার্নের পর লাভ"),
      loc("Eight staff accounts", "আটজন স্টাফ"),
    ],
    limits: [
      { label: loc("Orders per month", "মাসে অর্ডার"), value: loc("5,000", "৫,০০০") },
      { label: loc("Products", "পণ্য"), value: loc("20,000", "২০,০০০") },
      { label: loc("Warehouses", "গুদাম"), value: loc("4", "৪") },
    ],
  },
  {
    id: "scale",
    name: loc("Scale", "স্কেল"),
    tagline: loc("Multiple counters, wholesale and volume.", "একাধিক কাউন্টার, পাইকারি আর বেশি বিক্রি।"),
    monthly: 8900, yearly: 89000, accent: "violet",
    bestFor: loc("Multi-branch retail and wholesale", "একাধিক শাখা আর পাইকারি"),
    features: [
      loc("Everything in Growth", "গ্রোথের সবকিছু"),
      loc("Wholesale price tiers and credit", "পাইকারি দামের স্তর আর বাকি"),
      loc("Unlimited warehouses and counters", "যত খুশি গুদাম আর কাউন্টার"),
      loc("Staff permissions and action history", "স্টাফ পারমিশন আর কাজের ইতিহাস"),
      loc("Priority support", "অগ্রাধিকার সাপোর্ট"),
    ],
    limits: [
      { label: loc("Orders per month", "মাসে অর্ডার"), value: loc("25,000", "২৫,০০০") },
      { label: loc("Products", "পণ্য"), value: loc("100,000", "১,০০,০০০") },
      { label: loc("Warehouses", "গুদাম"), value: loc("Unlimited", "সীমাহীন") },
    ],
  },
];

/** The other commercial model: modules bought on top of a base. */
export const MODULES: { icon: string; label: Localized; price: string; detail: Localized }[] = [
  { icon: "ScanBarcode", label: loc("Point of sale", "পিওএস"), price: "৳ 900",
    detail: loc("Per counter, per month.", "প্রতি কাউন্টার, প্রতি মাসে।") },
  { icon: "Warehouse", label: loc("Extra warehouse", "অতিরিক্ত গুদাম"), price: "৳ 600",
    detail: loc("Per location, per month.", "প্রতি লোকেশন, প্রতি মাসে।") },
  { icon: "Sparkles", label: loc("AI product creation", "এআই দিয়ে পণ্য তৈরি"), price: "৳ 750",
    detail: loc("Per month, with human approval always required.", "প্রতি মাসে, অনুমোদন সবসময় মানুষের।") },
  { icon: "Handshake", label: loc("Wholesale", "হোলসেল"), price: "৳ 1,400",
    detail: loc("Price tiers, credit terms and due tracking.", "দামের স্তর, বাকির শর্ত আর পাওনার হিসাব।") },
];

export const PRICING_FAQ: { q: Localized; a: Localized }[] = [
  { q: loc("Is there a free trial?", "ফ্রি ট্রায়াল আছে?"),
    a: loc("Sample content. Trial terms are not decided and no duration is claimed anywhere on the real site.", "নমুনা বিষয়বস্তু। ট্রায়ালের শর্ত এখনো ঠিক হয়নি, আসল সাইটে কোনো মেয়াদ দাবি করা হয় না।") },
  { q: loc("Can I change plan later?", "পরে প্ল্যান বদলানো যাবে?"),
    a: loc("Yes. Moving up takes effect immediately and moving down applies at the next cycle.", "হ্যাঁ। উপরে ওঠা সাথে সাথে কার্যকর, নামা পরের সাইকেল থেকে।") },
  { q: loc("What happens if I pass my order limit?", "অর্ডারের সীমা পেরিয়ে গেলে কী হয়?"),
    a: loc("Nothing stops. You are told, and the overage is billed at the next cycle.", "কিছুই বন্ধ হয় না। আপনাকে জানানো হয়, বাড়তি অংশ পরের বিলে যোগ হয়।") },
  { q: loc("Do you take a cut of my sales?", "বিক্রির কোনো ভাগ নেন?"),
    a: loc("No. The subscription is the price; GridCommerce takes no commission on orders.", "না। সাবস্ক্রিপশনই দাম; অর্ডারের উপর কোনো কমিশন নেওয়া হয় না।") },
];

export const PRICING_COPY = {
  title: loc("Pricing", "প্রাইসিং"),
  subtitle: loc(
    "Plans and modules for online, retail, wholesale and mixed businesses.",
    "অনলাইন, রিটেইল, পাইকারি আর মিশ্র ব্যবসার জন্য প্ল্যান ও মডিউল।",
  ),
  monthly: loc("Monthly", "মাসিক"),
  yearly: loc("Yearly", "বার্ষিক"),
  yearlyNote: loc("Two months free", "দুই মাস ফ্রি"),
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
    "Sample pricing for structural review only. Real prices are not decided — see docs/OPEN-ITEMS.md.",
    "শুধু কাঠামো দেখার জন্য নমুনা দাম। আসল দাম এখনো ঠিক হয়নি।",
  ),
};
