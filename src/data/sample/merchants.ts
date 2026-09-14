/** SAMPLE DATA — invented merchants, quotes and figures. See ./index.ts */
import { loc, type Localized } from "@/i18n/types";

export type MerchantStory = {
  id: string;
  /** Invented business name — no real company is referenced. */
  business: string;
  person: string;
  role: Localized;
  city: Localized;
  category: Localized;
  quote: Localized;
  /** Generated photograph. Not a real, identifiable person. */
  photo: string;
  photoAlt: string;
  metrics: { value: string; label: Localized }[];
  accent: "brand" | "violet" | "green" | "orange" | "turquoise" | "red";
};

export const MERCHANT_STORIES: MerchantStory[] = [
  {
    id: "nokshi-threads",
    business: "Nokshi Threads",
    person: "Sharmin A.",
    role: loc("Founder", "প্রতিষ্ঠাতা"),
    city: loc("Dhanmondi, Dhaka", "ধানমন্ডি, ঢাকা"),
    category: loc("Clothing", "পোশাক"),
    quote: loc(
      "Messenger and the order sheet used to be two different jobs. Now a question becomes an order without anyone retyping a phone number.",
      "মেসেঞ্জার আর অর্ডার শিট আগে ছিল দুটো আলাদা কাজ। এখন একটা প্রশ্ন থেকেই অর্ডার হয়ে যায়, কারও ফোন নম্বর আবার টাইপ করতে হয় না।",
    ),
    photo: "/merchants/merchant-boutique.webp",
    photoAlt: "Shop owner folding a printed kurta into a parcel bag in a small Dhaka clothing boutique",
    metrics: [
      { value: "6 → 1", label: loc("Tabs open per order", "অর্ডারপ্রতি খোলা ট্যাব") },
      { value: "38%", label: loc("Repeat customers", "রিপিট কাস্টমার") },
    ],
    accent: "violet",
  },
  {
    id: "padma-electronics",
    business: "Padma Electronics",
    person: "Rakib H.",
    role: loc("Owner", "মালিক"),
    city: loc("Mirpur, Dhaka", "মিরপুর, ঢাকা"),
    category: loc("Electronics", "ইলেকট্রনিকস"),
    quote: loc(
      "The counter and the website finally show the same stock. We stopped selling the same handset twice in one afternoon.",
      "কাউন্টার আর ওয়েবসাইট এখন একই স্টক দেখায়। এক বিকেলে একই হ্যান্ডসেট দুবার বিক্রি করা বন্ধ হয়েছে।",
    ),
    photo: "/merchants/merchant-electronics.webp",
    photoAlt: "Shopkeeper scanning a boxed accessory behind the counter of a small mobile and electronics shop",
    metrics: [
      { value: "0", label: loc("Oversold units this quarter", "এই কোয়ার্টারে ওভারসোল্ড") },
      { value: "2", label: loc("Counters on one catalogue", "একই ক্যাটালগে কাউন্টার") },
    ],
    accent: "brand",
  },
  {
    id: "tuli-organics",
    business: "Tuli Organics",
    person: "Nabila R.",
    role: loc("Founder", "প্রতিষ্ঠাতা"),
    city: loc("Uttara, Dhaka", "উত্তরা, ঢাকা"),
    category: loc("Home and beauty", "হোম ও বিউটি"),
    quote: loc(
      "I run this from my dining table. Knowing what cash the courier still owes me is the part that changed.",
      "আমি এটা চালাই খাবার টেবিল থেকে। কুরিয়ারের কাছে আমার কত টাকা বাকি — এটা জানতে পারাই আসল পরিবর্তন।",
    ),
    photo: "/merchants/merchant-home-business.webp",
    photoAlt: "Small business owner writing a delivery label at a table stacked with parcel boxes and fabric",
    metrics: [
      { value: "৳ 42k", label: loc("COD tracked weekly", "সাপ্তাহিক ক্যাশ ট্র্যাক") },
      { value: "4 days", label: loc("Faster reconciliation", "দ্রুত হিসাব মেলানো") },
    ],
    accent: "green",
  },
  {
    id: "shefali-beauty",
    business: "Shefali Beauty",
    person: "Tanjila K.",
    role: loc("Co-founder", "সহ-প্রতিষ্ঠাতা"),
    city: loc("Chattogram", "চট্টগ্রাম"),
    category: loc("Cosmetics", "কসমেটিকস"),
    quote: loc(
      "Ad spend on one screen and the orders we actually recorded on the next. We finally argue about the right number.",
      "এক পাশে বিজ্ঞাপনের খরচ, আরেক পাশে আসল অর্ডার। এখন অন্তত ঠিক সংখ্যা নিয়ে তর্ক হয়।",
    ),
    photo: "/merchants/merchant-cosmetics.webp",
    photoAlt: "Shop owner checking an order on a phone beside a shelf of skincare products",
    metrics: [
      { value: "2", label: loc("Reported columns, kept apart", "আলাদা রাখা রিপোর্ট কলাম") },
      { value: "19%", label: loc("Carts recovered", "ফেরানো কার্ট") },
    ],
    accent: "red",
  },
];
