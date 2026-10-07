/**
 * Homepage copy.
 *
 * From the owner's "Website Copy & Claude Handoff · Revised" (14 Sept 2026),
 * sections H02–H08. English and Bangla are separately authored versions: edit
 * them together, and never regenerate one from the other. The eight module
 * cards (H04) live in `data/copy/modules.ts`.
 */
import { loc, type Localized } from "@/i18n/types";

type FaqItem = {
  id: string;
  question: Localized;
  answer: Localized;
  /** An existing deeper page the answer points to. */
  link?: string;
};

/** H02 */
export const HERO_COPY = {
  eyebrow: loc(
    "Commerce software for Bangladeshi businesses",
    "বাংলাদেশের অনলাইন, রিটেইল ও হোলসেল ব্যবসার সমন্বিত ই-কমার্স সলিউশন",
  ),
  /* The headline breaks into a plain clause and an accent clause — the
     colour, not a heavier weight, is what carries the emphasis. */
  headline: loc("Sales, stock, dues and profit.", "সেলস, স্টক, বকেয়া ও মুনাফা।"),
  headlineAccent: loc("Connected.", "ব্যবসার নিয়ন্ত্রণ এক প্ল্যাটফর্মে।"),
  sub: loc(
    "Manage your online store, phone orders and counter sales with connected stock and customer records. Keep courier dues, daily cash and business costs in view, so you know what needs attention.",
    "অনলাইন স্টোর, ফোনে আসা অর্ডার ও রিটেইল কাউন্টারের সেলস পরিচালনা করুন লাইভ স্টক ও কাস্টমার ডেটার সমন্বয়ে। কুরিয়ার পেমেন্ট, দৈনিক ক্যাশ ফ্লো ও ব্যবসায়িক ব্যয়ের হিসাব একসঙ্গে পর্যালোচনা করে সময়মতো সিদ্ধান্ত নিন।",
  ),
  exploreModules: loc("Explore the Modules", "মডিউলসমূহ দেখুন"),
  microcopy: loc(
    "Tell us how you sell. See the workflow that fits your business.",
    "আপনার ব্যবসার মডেল আমাদের জানান। প্রয়োজনীয় মডিউল ও কাজের প্রক্রিয়া ডেমোতে দেখুন।",
  ),
};

/** H03 */
export const PROBLEM_COPY = {
  title: loc("Know where your business needs attention.", "ব্যবসার অগ্রাধিকার নির্ধারণ করুন, প্রয়োজনীয় পদক্ষেপ নিন।"),
  body: loc(
    "Start with the questions your team answers every day.",
    "প্রতিদিনের অর্ডার, পেমেন্ট ও মুনাফার চিত্র একসঙ্গে পর্যালোচনা করুন।",
  ),
  prompts: [
    { icon: "ClipboardList", text: loc("Which orders still need confirmation?", "কোন অর্ডারগুলো দ্রুত কনফার্ম করা প্রয়োজন?") },
    { icon: "Truck", text: loc("How much cash is still with the courier?", "কুরিয়ার পার্টনারের কাছে কত পেমেন্ট বকেয়া রয়েছে?") },
    { icon: "ChartPie", text: loc("Which products leave a margin after costs?", "আনুষঙ্গিক খরচ বাদে কোন প্রোডাক্টে কত মুনাফা হচ্ছে?") },
  ],
};

/** H04 heading. The cards are `MODULES` in data/copy/modules.ts. */
export const MODULES_COPY = {
  title: loc(
    "Choose the part of your business you want to organise first.",
    "আপনার ব্যবসার প্রয়োজন অনুযায়ী মডিউল নির্বাচন করুন।",
  ),
  body: loc(
    "Connected modules for the work you do every day, sharing one set of products, stock, customers and money records.",
    "দৈনন্দিন কাজের জন্য পরস্পরের সঙ্গে সংযুক্ত মডিউল—সবগুলো একই প্রোডাক্ট, স্টক, কাস্টমার ও টাকার হিসাব ব্যবহার করে।",
  ),
};

/** H05 */
export const PROOF_COPY = {
  title: loc("From an online order to stock, cash and margin.", "অনলাইন অর্ডার থেকে মুনাফা, প্রতিটি ধাপের সমন্বিত হিসাব।"),
  body: loc(
    "Follow one COD order through the business. Its stock, courier charges and settlement records help explain the result of the sale.",
    "একটি COD অর্ডার প্রসেসিংয়ের প্রতিটি ধাপ পর্যবেক্ষণ করুন। স্টক রিজার্ভেশন, কুরিয়ার চার্জ ও পেমেন্ট সেটেলমেন্টের তথ্য মিলিয়ে সেলস পারফরম্যান্স মূল্যায়ন করুন।",
  ),
  steps: [
    loc("Confirm the order", "অর্ডার কনফার্মেশন"),
    loc("Reserve and dispatch stock", "স্টোরের নিয়ম অনুযায়ী স্টক রিজার্ভেশন ও ডিসপ্যাচ"),
    loc("Record delivery and courier dues", "ডেলিভারি ও কুরিয়ারের কাছে পাওনা রেকর্ড"),
    loc("Match payment and review recorded costs", "পেমেন্ট রিকনসিলিয়েশন ও খরচ পর্যালোচনা"),
  ],
  caption: loc("Follow an order in the demo.", "ডেমোতে একটি অর্ডারের সম্পূর্ণ প্রক্রিয়া পর্যবেক্ষণ করুন।"),
};

/** H06 — replaces the Solutions cards; links keep the existing solution routes. */
export const BUSINESS_TYPES_COPY = {
  title: loc("Start with the way your business sells.", "আপনার ব্যবসার মডেল অনুযায়ী সমাধান।"),
  types: [
    {
      id: "online",
      icon: "Globe",
      href: "/solutions/online-commerce",
      title: loc("Online businesses", "অনলাইন ব্যবসা"),
      body: loc(
        "Bring your store, campaign pages, order confirmation, courier dues and customer follow-up into connected workflows.",
        "স্টোর, ক্যাম্পেইন পেজ, অর্ডার কনফার্মেশন, কুরিয়ার সেটেলমেন্ট ও কাস্টমার ফলোআপ সমন্বিতভাবে পরিচালনা করুন।",
      ),
    },
    {
      id: "retail",
      icon: "Store",
      href: "/solutions/retail-commerce",
      title: loc("Retail businesses", "রিটেইল ব্যবসা"),
      body: loc(
        "Run counter sales with branch stock, purchasing, expenses and a clear daily cash close.",
        "কাউন্টার সেলসের সঙ্গে ব্রাঞ্চভিত্তিক স্টক, পারচেজ, দৈনিক খরচ ও ক্যাশ ক্লোজিংয়ের হিসাব সমন্বয় করুন।",
      ),
    },
    {
      id: "wholesale",
      icon: "Handshake",
      href: "/solutions/wholesale-commerce",
      title: loc("Wholesale businesses", "হোলসেল ব্যবসা"),
      body: loc(
        "Manage dealer prices, credit sales, customer dues, collections and supplier balances.",
        "ডিলার প্রাইসিং, ক্রেডিট সেলস, কাস্টমারের বকেয়া, পেমেন্ট কালেকশন ও সাপ্লায়ারের পাওনা এক সিস্টেমে পরিচালনা করুন।",
      ),
    },
  ],
};

/** H07 */
export const FAQ_COPY = {
  title: loc("Before you choose your setup", "সেটআপ ও সাবস্ক্রিপশন সম্পর্কে প্রয়োজনীয় তথ্য"),
  items: [
    {
      id: "modules",
      question: loc("Do I need every module?", "সব মডিউল কি একসঙ্গে সাবস্ক্রাইব করতে হবে?"),
      answer: loc(
        "No. Available modules and limits depend on your plan. Review what you need for online, retail, wholesale or a combination.",
        "না। আপনার সাবস্ক্রিপশন প্ল্যান অনুযায়ী মডিউল ও ব্যবহারের সীমা নির্ধারিত হয়। অনলাইন, রিটেইল, হোলসেল বা একাধিক ব্যবসার ধরন অনুযায়ী প্রয়োজনীয় ফিচারসহ সেটআপ নির্বাচন করুন।",
      ),
      link: "/pricing",
    },
    {
      id: "data",
      question: loc("Can I bring my existing business data?", "পূর্ববর্তী সিস্টেমের ডেটা কি ইমপোর্ট করা সম্ভব?"),
      answer: loc(
        "Import products, customers, suppliers and opening balances from spreadsheets. For an existing WooCommerce store, review the migration pre-scan and test import before transferring the full store.",
        "হ্যাঁ। স্প্রেডশিট থেকে প্রোডাক্ট, কাস্টমার, সাপ্লায়ার ও ওপেনিং ব্যালেন্স ইমপোর্ট করা যায়। বিদ্যমান WooCommerce স্টোরের সম্পূর্ণ মাইগ্রেশনের আগে প্রি-স্ক্যান ও টেস্ট ইমপোর্টের মাধ্যমে ডেটা যাচাই করা যায়।",
      ),
      link: "/migration",
    },
    {
      id: "access",
      question: loc("Will every staff member see everything?", "টিমের ডেটা অ্যাক্সেস কি নিয়ন্ত্রণ করা যায়?"),
      answer: loc(
        "Assign role-based access and approvals, including who may see cost prices or approve sensitive changes.",
        "হ্যাঁ। দায়িত্ব অনুযায়ী ডেটা অ্যাক্সেস ও অনুমোদনের ক্ষমতা নির্ধারণ করা যায়। কে পারচেজ প্রাইস দেখতে পারবেন বা গুরুত্বপূর্ণ পরিবর্তন অনুমোদন করবেন, তা অ্যাডমিন নির্ধারণ করতে পারবেন।",
      ),
    },
    {
      id: "credits",
      question: loc("Do messages and AI usage cost extra?", "মেসেজিং ও AI ব্যবহারের জন্য কি অতিরিক্ত চার্জ প্রযোজ্য?"),
      answer: loc(
        "SMS, WhatsApp, email and AI generation use metered credits. Check module access and usage charges when choosing your plan.",
        "SMS, WhatsApp, ইমেইল ও AI generation-এ ব্যবহার অনুযায়ী ক্রেডিট প্রয়োজন হয়। সাবস্ক্রিপশন প্ল্যান নির্বাচনের সময় মডিউল অ্যাক্সেস ও ব্যবহারের চার্জ পর্যালোচনা করুন।",
      ),
      link: "/pricing",
    },
  ] as FaqItem[],
};

/** H08 */
export const CTA_COPY = {
  title: loc("See how GridCommerce fits your daily business.", "আপনার ব্যবসার কার্যক্রম আরও সুসংগঠিত করুন।"),
  body: loc(
    "Show us how you take orders, manage stock and collect payments. Explore the relevant workflows in a demo.",
    "অর্ডার প্রসেসিং, ইনভেন্টরি ও পেমেন্ট কালেকশনে আপনার প্রয়োজন আমাদের জানান। GridCommerce-এর প্রাসঙ্গিক মডিউলগুলো সরাসরি দেখতে ডেমো সেশন বুক করুন।",
  ),
};

/** Footer short brand description. */
export const FOOTER_DESCRIPTION = loc(
  "Connected sales, stock, collections and business reports for online, retail and wholesale businesses in Bangladesh.",
  "বাংলাদেশের অনলাইন, রিটেইল ও হোলসেল ব্যবসার জন্য সমন্বিত ই-কমার্স ও ব্যবসা পরিচালনার সলিউশন। সেলস, ইনভেন্টরি, বকেয়া আদায় ও মুনাফার রিপোর্ট এক প্ল্যাটফর্মে।",
);
