/**
 * Footer copy (laid out after sharetrip.net's footer): the app block that
 * opens it, the link columns, the "customers can pay with" grid, contact,
 * help, newsletter, the "connects with" logo groups and the bottom bar.
 */
import { loc } from "@/i18n/types";

export const FOOTER = {
  app: {
    title: loc("Your shop, in your pocket.", "আপনার দোকান, আপনার পকেটে।"),
    body: loc(
      "Take orders, reply to customers, check stock and see today’s cash from your phone. The panel opens in your phone’s browser today; the store apps are on their way.",
      "ফোন থেকেই অর্ডার নিন, কাস্টমারকে উত্তর দিন, স্টক দেখুন আর আজকের ক্যাশ জানুন। আজ প্যানেল খোলে ফোনের ব্রাউজারে; স্টোরের অ্যাপ আসছে।",
    ),
    scan: loc("Scan to open GridCommerce", "স্ক্যান করে GridCommerce খুলুন"),
    /* The store badges are shown, not linked, until the listings are live. */
    comingSoon: loc("Coming soon", "শিগগিরই আসছে"),
    appStoreSoon: loc("App Store: coming soon", "App Store: শিগগিরই আসছে"),
    googlePlaySoon: loc("Google Play: coming soon", "Google Play: শিগগিরই আসছে"),
    /* One task from the phone app (Orders: list, detail with the full order flow). */
    taskLabel: loc("From your phone", "ফোন থেকেই"),
    task: loc("Confirm an order and book the courier", "অর্ডার কনফার্ম করে কুরিয়ার বুক করুন"),
    taskBody: loc("Open the order, see the customer and stock, approve it and send it to Pathao, Steadfast or RedX.", "অর্ডার খুলুন, কাস্টমার আর স্টক দেখুন, অনুমোদন দিন আর Pathao, Steadfast বা RedX-এ পাঠান।"),
  },
  modules: loc("Modules", "মডিউল"),
  explore: loc("Explore", "আরও দেখুন"),
  exploreLinks: [
    { label: loc("About us", "আমাদের কথা"), href: "/about" },
    { label: loc("Pricing", "প্রাইসিং"), href: "/pricing" },
    { label: loc("Compare", "তুলনা"), href: "/compare" },
    { label: loc("Migration", "মাইগ্রেশন"), href: "/migration" },
    { label: loc("Blog", "ব্লগ"), href: "/blog" },
    { label: loc("Careers", "ক্যারিয়ার"), href: "/careers" },
  ],
  payWith: loc("Your customers can pay with", "আপনার কাস্টমার পেমেন্ট করতে পারেন"),
  contact: loc("Contact us", "যোগাযোগ"),
  sales: loc("Sales", "সেলস"),
  support: loc("Support", "সাপোর্ট"),
  partners: loc("Partners", "পার্টনার"),
  help: loc("Help & support", "সাহায্য ও সাপোর্ট"),
  helpLinks: [
    { label: loc("Help centre", "হেল্প সেন্টার"), href: "/help" },
    { label: loc("Guides", "গাইড"), href: "/help/guides" },
    { label: loc("Platform status", "প্ল্যাটফর্ম স্ট্যাটাস"), href: "/status" },
    { label: loc("Book a demo", "ডেমো বুক করুন"), href: "/contact?topic=demo" },
  ],
  legal: [
    { label: loc("Terms", "শর্তাবলি"), href: "/terms" },
    { label: loc("Privacy", "প্রাইভেসি"), href: "/privacy" },
    { label: loc("Refund policy", "রিফান্ড নীতি"), href: "/refund-policy" },
    { label: loc("Data policy", "ডেটা নীতি"), href: "/data-policy" },
  ],
  rights: loc("All rights reserved.", "সর্বস্বত্ব সংরক্ষিত।"),
};
