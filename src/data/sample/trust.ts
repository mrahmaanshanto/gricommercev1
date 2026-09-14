/** SAMPLE DATA — invented. See ./index.ts */
import { loc } from "@/i18n/types";

/** Section 2 — market position. Figures are placeholders. */
export const TRUST_STATS = [
  { value: "4,280+", label: loc("Merchants selling", "বিক্রি করছেন এমন মার্চেন্ট") },
  { value: "৳ 190cr", label: loc("Order value processed", "প্রসেস হওয়া অর্ডারের মূল্য") },
  { value: "63", label: loc("Districts delivered to", "যত জেলায় ডেলিভারি") },
  { value: "11", label: loc("Courier partners", "কুরিয়ার পার্টনার") },
];

/** Invented merchant names — no real business is referenced. */
export const TRUST_LOGOS = [
  "Nokshi Threads", "Padma Electronics", "Rongdhonu Kids", "Bengal Leather",
  "Shefali Beauty", "Dhaka Denim Co", "Ilish Home", "Tuli Organics",
];

export const TRUST_COPY = {
  eyebrow: loc("Where GridCommerce sits", "গ্রিডকমার্স কোথায় দাঁড়ায়"),
  title: loc(
    "Built for how Bangladesh actually sells.",
    "বাংলাদেশ যেভাবে বিক্রি করে, সেভাবেই তৈরি।",
  ),
  body: loc(
    "Cash on delivery, Facebook-first discovery, courier returns and counter sales are the default here — not edge cases bolted onto an imported platform.",
    "ক্যাশ অন ডেলিভারি, ফেসবুক থেকে বিক্রি, কুরিয়ার রিটার্ন আর কাউন্টার সেল — এখানে এগুলোই স্বাভাবিক, বিদেশি প্ল্যাটফর্মে জোড়াতালি দেওয়া কিছু নয়।",
  ),
  logosLabel: loc("Selling on GridCommerce today", "আজ গ্রিডকমার্সে বিক্রি করছেন"),
};
