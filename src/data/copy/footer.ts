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
      "Take orders, reply to customers, check stock and see today’s cash from your phone. For Android and iPhone.",
      "ফোন থেকেই অর্ডার নিন, কাস্টমারকে উত্তর দিন, স্টক দেখুন আর আজকের ক্যাশ জানুন। Android ও iPhone-এর জন্য।",
    ),
    scan: loc("Scan to open GridCommerce", "স্ক্যান করে GridCommerce খুলুন"),
  },
  modules: loc("Modules", "মডিউল"),
  explore: loc("Explore", "আরও দেখুন"),
  exploreLinks: [
    { label: loc("About us", "আমাদের কথা"), href: "/about" },
    { label: loc("Pricing", "প্রাইসিং"), href: "/pricing" },
    { label: loc("Compare", "তুলনা"), href: "/compare" },
    { label: loc("Migration", "মাইগ্রেশন"), href: "/migration" },
    { label: loc("Blog", "ব্লগ"), href: "/blog" },
    { label: loc("Careers", "ক্যারিয়ার"), href: "/about#careers" },
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
