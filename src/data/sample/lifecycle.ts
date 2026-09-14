/** SAMPLE DATA — invented figures and states. See ./index.ts */
import { loc, type Localized } from "@/i18n/types";

/* ── Section 10 · Courier and cash-on-delivery lifecycle ─────────────── */

export type LifecycleStage = {
  id: string;
  label: Localized;
  icon: string;
  detail: Localized;
  /** What the merchant's cash position is at this stage. */
  cash: Localized;
  tone: "neutral" | "active" | "warn" | "done";
};

export const COURIER_LIFECYCLE: LifecycleStage[] = [
  { id: "confirmed", label: loc("Confirmed", "কনফার্মড"), icon: "CircleCheck", tone: "neutral",
    detail: loc("Customer confirmed on the thread. Stock is reserved.", "কাস্টমার থ্রেডেই কনফার্ম করেছে। স্টক রিজার্ভ হয়ে গেছে।"),
    cash: loc("Nothing collected yet", "এখনো কিছু আদায় হয়নি") },
  { id: "booked", label: loc("Booked", "বুকড"), icon: "Package", tone: "neutral",
    detail: loc("Consignment created with the courier from the order itself.", "অর্ডার থেকেই কুরিয়ারে কনসাইনমেন্ট তৈরি হয়েছে।"),
    cash: loc("Nothing collected yet", "এখনো কিছু আদায় হয়নি") },
  { id: "picked", label: loc("Picked up", "পিকআপ হয়েছে"), icon: "Truck", tone: "active",
    detail: loc("Rider collected the parcel. Tracking id attached to the order.", "রাইডার পার্সেল নিয়েছে। ট্র্যাকিং আইডি অর্ডারে যুক্ত।"),
    cash: loc("In courier hands", "কুরিয়ারের হাতে") },
  { id: "transit", label: loc("In transit", "পথে আছে"), icon: "MapPin", tone: "active",
    detail: loc("Moving between hubs. Status mirrors onto the order list.", "হাব থেকে হাবে যাচ্ছে। স্ট্যাটাস অর্ডার লিস্টে দেখা যায়।"),
    cash: loc("In courier hands", "কুরিয়ারের হাতে") },
  { id: "delivered", label: loc("Delivered", "ডেলিভারড"), icon: "PackageCheck", tone: "done",
    detail: loc("Handed over and cash taken from the customer at the door.", "কাস্টমারের হাতে পৌঁছেছে, দরজাতেই টাকা নেওয়া হয়েছে।"),
    cash: loc("Collected by courier", "কুরিয়ার আদায় করেছে") },
  { id: "cod-pending", label: loc("COD pending", "ক্যাশ বাকি"), icon: "Clock", tone: "warn",
    detail: loc("Courier holds the cash until the settlement cycle runs.", "সেটেলমেন্ট না হওয়া পর্যন্ত টাকা কুরিয়ারের কাছে থাকে।"),
    cash: loc("Owed to you", "আপনার পাওনা") },
  { id: "reconciled", label: loc("Reconciled", "মিলে গেছে"), icon: "Banknote", tone: "done",
    detail: loc("Settlement matched against the orders it actually paid for.", "সেটেলমেন্ট কোন কোন অর্ডারের, তা মিলিয়ে দেওয়া হয়েছে।"),
    cash: loc("In your account", "আপনার হিসাবে") },
];

export const COURIER_COPY = {
  eyebrow: loc("Courier and cash on delivery", "কুরিয়ার আর ক্যাশ অন ডেলিভারি"),
  title: loc("Follow the parcel and the money.", "পার্সেল আর টাকা — দুটোই দেখুন।"),
  body: loc(
    "Most of what a Bangladeshi merchant is owed sits inside a courier's settlement cycle. GridCommerce tracks the parcel and the cash as the same object.",
    "বাংলাদেশে একজন মার্চেন্টের বেশিরভাগ পাওনা আটকে থাকে কুরিয়ারের সেটেলমেন্টে। গ্রিডকমার্স পার্সেল আর টাকাকে একই জিনিস হিসেবে ট্র্যাক করে।",
  ),
  failNote: loc(
    "A failed delivery reverses stock, cash and the customer record together — it is part of the flow, not an exception you fix by hand.",
    "ডেলিভারি ব্যর্থ হলে স্টক, ক্যাশ আর কাস্টমার রেকর্ড একসাথে ফিরে যায় — এটা হাতে ঠিক করার ব্যতিক্রম নয়, প্রবাহেরই অংশ।",
  ),
};

/* ── Section 11 · Marketing analytics ────────────────────────────────── */

/**
 * The two columns are never merged. An ad platform's self-reported conversion
 * count and the orders GridCommerce actually recorded are different
 * measurements, and presenting them as one number is the specific thing this
 * section exists to refuse.
 */
export const ATTRIBUTION_ROWS = [
  { campaign: "Eid Collection — Video", platformValue: "412", gridValue: "268", spend: "৳ 38,400" },
  { campaign: "Winter Bundle — Carousel", platformValue: "306", gridValue: "241", spend: "৳ 26,900" },
  { campaign: "Retargeting — Cart viewers", platformValue: "198", gridValue: "173", spend: "৳ 11,250" },
  { campaign: "Lookalike — Dhaka 3%", platformValue: "154", gridValue: "77", spend: "৳ 19,600" },
];

export const ATTRIBUTION_COPY = {
  eyebrow: loc("Marketing analytics", "মার্কেটিং অ্যানালিটিক্স"),
  title: loc("Two numbers. Kept apart on purpose.", "দুটো সংখ্যা। ইচ্ছে করেই আলাদা রাখা।"),
  body: loc(
    "An ad platform reports what it believes it caused. GridCommerce reports the orders it actually recorded. Both are useful; averaging them is not.",
    "বিজ্ঞাপন প্ল্যাটফর্ম বলে সে কী ঘটিয়েছে বলে মনে করে। গ্রিডকমার্স বলে আসলে কতগুলো অর্ডার হয়েছে। দুটোই দরকারি; কিন্তু গড় করা ঠিক নয়।",
  ),
  platformLabel: loc("Reported by the ad platform", "বিজ্ঞাপন প্ল্যাটফর্মের হিসাব"),
  gridLabel: loc("Recorded in GridCommerce", "গ্রিডকমার্সে রেকর্ড হওয়া"),
  spendLabel: loc("Spend", "খরচ"),
  campaignLabel: loc("Campaign", "ক্যাম্পেইন"),
  note: loc(
    "Sample figures. GridCommerce never reconciles the two columns into a single claimed number.",
    "নমুনা সংখ্যা। গ্রিডকমার্স কখনো দুটো কলাম মিলিয়ে একটাই সংখ্যা দাবি করে না।",
  ),
};

/* ── Section 12 · Cart recovery ──────────────────────────────────────── */

export const RECOVERY_STEPS = [
  { id: "abandon", icon: "ShoppingCart", label: loc("Cart left behind", "কার্ট ফেলে গেছে"),
    detail: loc("Checkout started, never finished.", "চেকআউট শুরু হয়েছিল, শেষ হয়নি।") },
  { id: "wait", icon: "Clock", label: loc("Quiet window", "অপেক্ষার সময়"),
    detail: loc("A delay you set, so nobody is chased instantly.", "আপনার ঠিক করা বিরতি, যেন সাথে সাথে তাড়া না দেওয়া হয়।") },
  { id: "reach", icon: "Send", label: loc("One reminder", "একটাই রিমাইন্ডার"),
    detail: loc("Sent on the channel that customer already used.", "কাস্টমার যে চ্যানেলে ছিল, সেখানেই পাঠানো হয়।") },
  { id: "return", icon: "RotateCcw", label: loc("Cart restored", "কার্ট ফিরে এসেছে"),
    detail: loc("The same cart reopens — nothing retyped.", "একই কার্ট আবার খোলে — নতুন করে কিছু লিখতে হয় না।") },
  { id: "order", icon: "CircleCheck", label: loc("Order placed", "অর্ডার হয়েছে"),
    detail: loc("Recorded against the campaign that recovered it.", "যে ক্যাম্পেইন ফিরিয়ে এনেছে তার হিসাবেই যায়।") },
];

export const RECOVERY_COPY = {
  eyebrow: loc("Cart recovery", "কার্ট রিকভারি"),
  title: loc("The cart is still there. So is the conversation.", "কার্টটা রয়ে গেছে। কথাটাও।"),
  body: loc(
    "A cart left behind keeps its contents and its thread, so the follow-up is a continuation rather than a cold message.",
    "ফেলে যাওয়া কার্টে জিনিস আর কথোপকথন দুটোই থেকে যায়, তাই পরের মেসেজটা নতুন করে শুরু নয় — আগের কথারই ধারাবাহিকতা।",
  ),
};

/* ── Section 13 · AI product creation ────────────────────────────────── */

export const AI_STEPS = [
  { id: "input", icon: "Image", label: loc("Photo and a few words", "ছবি আর কয়েকটা শব্দ"),
    detail: loc("A product photo and whatever detail you already have.", "একটা পণ্যের ছবি আর আপনার কাছে যা তথ্য আছে।"),
    human: false },
  { id: "draft", icon: "Sparkles", label: loc("Draft generated", "খসড়া তৈরি"),
    detail: loc("Title, description, category and tags — in Bangla or English.", "নাম, বিবরণ, ক্যাটাগরি আর ট্যাগ — বাংলা বা ইংরেজিতে।"),
    human: false },
  { id: "review", icon: "Eye", label: loc("You review it", "আপনি দেখে নেন"),
    detail: loc("Every field is editable and nothing is published yet.", "প্রতিটি ঘর বদলানো যায়, এখনো কিছুই প্রকাশ হয়নি।"),
    human: true },
  { id: "approve", icon: "Check", label: loc("You approve it", "আপনি অনুমোদন দেন"),
    detail: loc("Publishing is an explicit action a person takes.", "প্রকাশ করা একজন মানুষের নেওয়া স্পষ্ট সিদ্ধান্ত।"),
    human: true },
  { id: "live", icon: "Store", label: loc("Live in the catalogue", "ক্যাটালগে যুক্ত"),
    detail: loc("Available to every channel at once.", "একসাথে সব চ্যানেলে পাওয়া যায়।"),
    human: false },
];

export const AI_COPY = {
  eyebrow: loc("AI product creation", "এআই দিয়ে পণ্য তৈরি"),
  title: loc("It writes the draft. You decide what ships.", "খসড়া লিখে দেয় এআই। কী প্রকাশ হবে, ঠিক করেন আপনি।"),
  body: loc(
    "Listing a hundred products is typing work, so the draft is automated. The approval is not — nothing reaches your catalogue without a person saying so.",
    "একশো পণ্য তোলা মানে অনেক টাইপ করা, তাই খসড়াটা স্বয়ংক্রিয়। অনুমোদন নয় — কেউ না বললে কিছুই ক্যাটালগে যায় না।",
  ),
  humanLabel: loc("Human step", "মানুষের ধাপ"),
};

/* ── Section 31 · Signature scroll story ─────────────────────────────── */

export const STORY_BEATS = [
  { id: "channel", icon: "MessagesSquare", label: loc("A message arrives", "একটা মেসেজ এলো"),
    detail: loc("Messenger, WhatsApp, the storefront or the counter.", "মেসেঞ্জার, হোয়াটসঅ্যাপ, স্টোরফ্রন্ট বা কাউন্টার।") },
  { id: "order", icon: "ClipboardList", label: loc("It becomes an order", "সেটা অর্ডার হলো"),
    detail: loc("Customer details carry over from the thread.", "থ্রেড থেকেই কাস্টমারের তথ্য চলে আসে।") },
  { id: "stock", icon: "Boxes", label: loc("Stock moves", "স্টক কমলো"),
    detail: loc("Reserved from the warehouse that will ship it.", "যে গুদাম থেকে যাবে, সেখান থেকেই রিজার্ভ।") },
  { id: "courier", icon: "Truck", label: loc("Courier is booked", "কুরিয়ার বুক হলো"),
    detail: loc("Consignment raised without leaving the order.", "অর্ডার ছেড়ে না গিয়েই কনসাইনমেন্ট।") },
  { id: "payment", icon: "Wallet", label: loc("Cash is expected", "টাকা আসার কথা"),
    detail: loc("The amount is now owed by the courier, not the customer.", "এখন টাকাটা কাস্টমারের নয়, কুরিয়ারের কাছে পাওনা।") },
  { id: "delivered", icon: "PackageCheck", label: loc("Delivered", "ডেলিভারড"),
    detail: loc("Or returned — and the reversal is handled too.", "অথবা ফেরত — সেটাও সামলানো হয়।") },
  { id: "analytics", icon: "ChartColumn", label: loc("Profit is known", "লাভ জানা গেল"),
    detail: loc("After courier charge, return risk and product cost.", "কুরিয়ার চার্জ, রিটার্নের ঝুঁকি আর পণ্যের দাম বাদ দিয়ে।") },
  { id: "customer", icon: "Users", label: loc("The customer is remembered", "কাস্টমার মনে থাকে"),
    detail: loc("Next time, the whole history is already on the thread.", "পরের বার থ্রেডেই পুরো ইতিহাস থাকে।") },
];

export const STORY_COPY = {
  eyebrow: loc("One order, end to end", "একটা অর্ডার, শুরু থেকে শেষ"),
  title: loc("This is one system doing one job.", "এটা একটাই সিস্টেম, একটাই কাজ করছে।"),
  body: loc(
    "Follow a single order from the first message to the customer record it leaves behind.",
    "প্রথম মেসেজ থেকে শুরু করে কাস্টমার রেকর্ড পর্যন্ত একটা অর্ডারের পুরো পথ।",
  ),
};
