/** SAMPLE DATA — invented. See ./index.ts */
import { loc, type Localized } from "@/i18n/types";
import { SCREENS, type ProductScreen } from "@/data/screenshots";

export type Capability = {
  id: string;
  label: Localized;
  icon: string;
  title: Localized;
  body: Localized;
  bullets: Localized[];
  screen: ProductScreen;
  accent: "brand" | "violet" | "green" | "orange" | "turquoise" | "red";
};

/** Section 4 — the six things the platform does, as tabs. */
export const CAPABILITIES: Capability[] = [
  {
    id: "sell",
    label: loc("Sell", "বিক্রি"),
    icon: "Store",
    accent: "brand",
    title: loc("Sell wherever the customer already is.", "কাস্টমার যেখানে আছে, সেখানেই বিক্রি করুন।"),
    body: loc(
      "One catalogue behind a storefront, landing pages, social channels and the counter — priced and stocked the same way everywhere.",
      "একটাই ক্যাটালগ — স্টোরফ্রন্ট, ল্যান্ডিং পেজ, সোশ্যাল চ্যানেল আর কাউন্টার সব জায়গায় একই দাম আর একই স্টক।",
    ),
    bullets: [
      loc("Storefront with Bangla and English", "বাংলা ও ইংরেজিতে স্টোরফ্রন্ট"),
      loc("Landing pages built in minutes", "কয়েক মিনিটে ল্যান্ডিং পেজ"),
      loc("Counter sales on the same catalogue", "একই ক্যাটালগে কাউন্টার সেল"),
    ],
    screen: SCREENS.landingPages,
  },
  {
    id: "manage",
    label: loc("Manage", "ম্যানেজ"),
    icon: "Boxes",
    accent: "violet",
    title: loc("One stock number everybody trusts.", "একটাই স্টক সংখ্যা, সবাই বিশ্বাস করে।"),
    body: loc(
      "Warehouses, counters and channels draw from the same inventory, so a counter sale and an online order can never oversell the same unit.",
      "গুদাম, কাউন্টার আর চ্যানেল — সবাই একই স্টক থেকে নেয়, তাই একই জিনিস দুবার বিক্রি হয় না।",
    ),
    bullets: [
      loc("Stock per warehouse and counter", "গুদাম ও কাউন্টার অনুযায়ী স্টক"),
      loc("Purchase orders and supplier costs", "পারচেজ অর্ডার আর সাপ্লায়ার খরচ"),
      loc("Low stock alerts before it bites", "স্টক শেষ হওয়ার আগেই সতর্কতা"),
    ],
    screen: SCREENS.pos,
  },
  {
    id: "deliver",
    label: loc("Deliver", "ডেলিভারি"),
    icon: "Truck",
    accent: "orange",
    title: loc("Courier and cash, tracked on the order.", "কুরিয়ার আর ক্যাশ — অর্ডারেই দেখা যায়।"),
    body: loc(
      "Book a courier, follow the parcel and reconcile collected cash without opening a separate courier panel.",
      "কুরিয়ার বুক করুন, পার্সেল ট্র্যাক করুন আর ক্যাশ মেলান — আলাদা কুরিয়ার প্যানেল খুলতে হবে না।",
    ),
    bullets: [
      loc("Book to multiple couriers", "একাধিক কুরিয়ারে বুকিং"),
      loc("Status on the order itself", "অর্ডারেই ডেলিভারি স্ট্যাটাস"),
      loc("COD collected, pending, reconciled", "ক্যাশ — আদায়, বাকি, মিলানো"),
    ],
    screen: SCREENS.orders,
  },
  {
    id: "talk",
    label: loc("Talk", "কথা"),
    icon: "MessagesSquare",
    accent: "turquoise",
    title: loc("Every conversation beside every order.", "প্রতিটি কথা, প্রতিটি অর্ডারের পাশে।"),
    body: loc(
      "Messenger, WhatsApp, Instagram, store chat, SMS and email land in one inbox with the customer's history attached.",
      "মেসেঞ্জার, হোয়াটসঅ্যাপ, ইনস্টাগ্রাম, স্টোর চ্যাট, এসএমএস আর ইমেইল — এক ইনবক্সে, সাথে কাস্টমারের পুরো ইতিহাস।",
    ),
    bullets: [
      loc("Six channels, one thread", "ছয় চ্যানেল, একটাই থ্রেড"),
      loc("Turn a message into an order", "মেসেজ থেকেই অর্ডার"),
      loc("Assign, snooze and resolve", "অ্যাসাইন, স্নুজ, রিজলভ"),
    ],
    screen: SCREENS.omnichannel,
  },
  {
    id: "grow",
    label: loc("Grow", "গ্রোথ"),
    icon: "TrendingUp",
    accent: "red",
    title: loc("Spend against orders, not against dashboards.", "খরচ মেলান অর্ডারের সাথে, ড্যাশবোর্ডের সাথে নয়।"),
    body: loc(
      "Campaign spend sits next to the orders GridCommerce actually recorded, so the two numbers stay separate and comparable.",
      "ক্যাম্পেইনের খরচ থাকে গ্রিডকমার্সে আসল অর্ডারের পাশে — দুটো সংখ্যা আলাদা থাকে, মেলানো যায়।",
    ),
    bullets: [
      loc("Recover abandoned carts", "ফেলে যাওয়া কার্ট ফিরিয়ে আনুন"),
      loc("Discounts, bundles and offers", "ডিসকাউন্ট, বান্ডল আর অফার"),
      loc("Repeat and at-risk segments", "রিপিট আর ঝুঁকিতে থাকা কাস্টমার"),
    ],
    screen: SCREENS.customers,
  },
  {
    id: "understand",
    label: loc("Understand", "বুঝুন"),
    icon: "ChartColumn",
    accent: "green",
    title: loc("Profit after courier, returns and cost.", "কুরিয়ার, রিটার্ন আর খরচ বাদ দিয়ে লাভ।"),
    body: loc(
      "Revenue is easy. GridCommerce reports what is left once delivery charges, returns and product cost are taken out.",
      "বিক্রি বোঝা সহজ। গ্রিডকমার্স দেখায় ডেলিভারি চার্জ, রিটার্ন আর পণ্যের দাম বাদ দিয়ে হাতে কী থাকল।",
    ),
    bullets: [
      loc("Profit per product and per order", "পণ্য ও অর্ডার অনুযায়ী লাভ"),
      loc("Return and failed delivery rates", "রিটার্ন আর ব্যর্থ ডেলিভারির হার"),
      loc("Daily cash and expense position", "প্রতিদিনের ক্যাশ আর খরচের হিসাব"),
    ],
    screen: SCREENS.dashboard,
  },
];
