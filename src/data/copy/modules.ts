/**
 * The eight primary module groups: homepage grid (H04) and module pages (D01–D06).
 *
 * Copy is from the owner's "Website Copy & Claude Handoff · Revised" (14 Sept 2026),
 * English and Bangla as separately authored versions. Marketing groups only: they
 * do not change module architecture or plan entitlements.
 */
import { loc, type Localized } from "@/i18n/types";

export type ModuleSlug =
  | "courier" | "orders" | "storefront" | "omnichannel"
  | "inventory" | "pos" | "wholesale" | "analytics";

export type ModuleEntry = {
  slug: ModuleSlug;
  /** lucide-react icon name, resolved by components/ui/Icon */
  icon: string;
  /** H04 card name; also the module page eyebrow and breadcrumb. */
  name: Localized;
  /** H04 hook line. */
  hook: Localized;
  /** H04 description. */
  description: Localized;
  /** D01 */
  hero: { title: Localized; body: Localized };
  /** D02 — exactly three. */
  benefits: { icon: string; title: Localized; body: Localized }[];
  /** D03 */
  workflow: Localized[];
  workflowNote?: Localized;
  /** D04 */
  faq: { question: Localized; answer: Localized };
  /** D05 */
  related: ModuleSlug[];
  /** D06 closing heading */
  close: Localized;
};

/** Homepage order, 01–08. */
export const MODULES: ModuleEntry[] = [
  // 01
  {
    slug: "courier",
    icon: "Truck",
    name: loc("Courier & COD Control", "কুরিয়ার ও COD ম্যানেজমেন্ট"),
    hook: loc("Delivered. But has the money reached you?", "COD পেমেন্ট ও কুরিয়ার চার্জের সমন্বিত হিসাব।"),
    description: loc(
      "Track courier dues, match payouts to orders and spot delivery charges that changed after booking.",
      "কুরিয়ার পার্টনারের কাছে বকেয়া, প্রাপ্ত পেমেন্ট এবং ডেলিভারি চার্জের তারতম্য অর্ডারভিত্তিক ট্র্যাক করুন।",
    ),
    hero: {
      title: loc(
        "Keep every COD payment and courier charge in view.",
        "COD পেমেন্ট ও কুরিয়ার চার্জের হিসাব রাখুন একসঙ্গে।",
      ),
      body: loc(
        "A delivered parcel does not mean the payment is in your account. GridCommerce connects delivery status, courier charges and remittances, so you can follow up on the money still due to your business.",
        "পার্সেল ডেলিভারি হলেও COD পেমেন্ট তাৎক্ষণিকভাবে আপনার অ্যাকাউন্টে জমা হয় না। GridCommerce-এ ডেলিভারি স্ট্যাটাস, কুরিয়ার চার্জ ও প্রাপ্ত পেমেন্ট সংশ্লিষ্ট অর্ডারের সঙ্গে মিলিয়ে দেখুন। বকেয়া পেমেন্ট শনাক্ত করে সময়মতো ফলোআপ করুন।",
      ),
    },
    benefits: [
      {
        icon: "ArrowRightLeft",
        title: loc("Spot charges that changed", "চার্জের তারতম্য শনাক্ত করুন"),
        body: loc(
          "Compare the charge quoted at checkout, the charge booked at dispatch and the courier’s final charge. Set a variance threshold to flag differences that need attention.",
          "চেকআউটে প্রদর্শিত চার্জ, বুকিং চার্জ ও কুরিয়ারের চূড়ান্ত চার্জ তুলনা করুন। নির্ধারিত সীমার বেশি পার্থক্য হলে স্বয়ংক্রিয় নোটিফিকেশন পান।",
        ),
      },
      {
        icon: "Banknote",
        title: loc("Know which payments need follow-up", "বকেয়া পেমেন্টের ফলোআপ পরিচালনা করুন"),
        body: loc(
          "Match courier remittances against orders. Keep outstanding, overdue and unmatched amounts visible, with disputed deductions recorded separately.",
          "কুরিয়ার থেকে প্রাপ্ত পেমেন্ট সংশ্লিষ্ট অর্ডারের সঙ্গে রিকনসিলিয়েশন করুন। বকেয়া, বিলম্বিত ও হিসাব না-মেলা পেমেন্ট পৃথকভাবে ট্র্যাক করুন এবং বিতর্কিত চার্জের রেকর্ড রাখুন।",
        ),
      },
      {
        icon: "RotateCcw",
        title: loc("Handle returns with the right stock and cost", "রিটার্ন স্টক ও খরচ সমন্বয় করুন"),
        body: loc(
          "Record delivery and return charges separately. Returned items go back into saleable stock according to their received condition.",
          "ডেলিভারি চার্জ ও রিটার্ন চার্জ আলাদাভাবে রেকর্ড করুন। ফেরত পণ্যের অবস্থা যাচাই করে বিক্রয়যোগ্য পণ্য স্টকে যুক্ত করুন; ক্ষতিগ্রস্ত পণ্যের হিসাব পৃথক রাখুন।",
        ),
      },
    ],
    workflow: [
      loc("Confirm parcel details", "পার্সেলের তথ্য যাচাই"),
      loc("Book with a connected courier", "কুরিয়ার বুকিং"),
      loc("Follow delivery", "ডেলিভারি ট্র্যাকিং"),
      loc("Match remittance", "পেমেন্ট রিকনসিলিয়েশন"),
      loc("Review differences", "চার্জের তারতম্য পর্যালোচনা"),
    ],
    faq: {
      question: loc(
        "What if a courier payment does not match?",
        "কুরিয়ার পেমেন্টের সঙ্গে অর্ডারের হিসাব না মিললে কী হবে?",
      ),
      answer: loc(
        "The difference stays in an unmatched queue for review. Import a settlement spreadsheet when provider data is incomplete.",
        "অমিল পেমেন্টগুলো যাচাইয়ের জন্য পৃথক তালিকায় থাকবে। প্রোভাইডারের তথ্য অসম্পূর্ণ হলে সেটেলমেন্টের স্প্রেডশিট ইমপোর্ট করে রিকনসিলিয়েশন করা যাবে।",
      ),
    },
    related: ["orders", "analytics"],
    close: loc(
      "See how your courier dues are tracked.",
      "আপনার ব্যবসার COD ও কুরিয়ার সেটেলমেন্ট প্রক্রিয়া ডেমোতে দেখুন।",
    ),
  },
  // 02
  {
    slug: "orders",
    icon: "ClipboardList",
    name: loc("Orders & Sales Entry", "অর্ডার ও সেলস এন্ট্রি"),
    hook: loc(
      "Know which orders need your team’s attention.",
      "পেন্ডিং অর্ডারের অগ্রাধিকার নির্ধারণ করুন।",
    ),
    description: loc(
      "Work through online confirmations and dispatches, and enter phone or message orders with customer history in view.",
      "অনলাইন অর্ডারের কনফার্মেশন ও ডিসপ্যাচ পরিচালনা করুন। কাস্টমার হিস্ট্রি ও লাইভ স্টক যাচাই করে ফোন বা মেসেজের অর্ডার গ্রহণ করুন।",
    ),
    hero: {
      title: loc(
        "Give every order a clear next step.",
        "প্রতিটি অর্ডারের পরবর্তী পদক্ষেপ সুনির্দিষ্ট করুন।",
      ),
      body: loc(
        "Keep online orders moving through confirmation and dispatch. Use a dedicated sales screen for orders taken by phone, Messenger or WhatsApp, with product availability, customer history and payment details ready when your team needs them.",
        "অনলাইন অর্ডারের কনফার্মেশন থেকে ডিসপ্যাচ পর্যন্ত প্রতিটি ধাপ ট্র্যাক করুন। ফোন, Messenger বা WhatsApp-এ আসা অর্ডারের জন্য ব্যবহার করুন আলাদা Sales Entry স্ক্রিন। লাইভ স্টক, কাস্টমার হিস্ট্রি ও পেমেন্টের তথ্য যাচাই করে অর্ডার গ্রহণ করুন।",
      ),
    },
    benefits: [
      {
        icon: "CircleCheck",
        title: loc("Start with the confirmation queue", "পেন্ডিং অর্ডারের অগ্রাধিকার নির্ধারণ"),
        body: loc(
          "See which online orders are waiting and how long they have waited. Record the confirmation outcome before dispatch.",
          "কনফার্মেশনের অপেক্ষায় থাকা অর্ডার ও অপেক্ষার সময় দেখুন। ডিসপ্যাচের আগে কনফার্মেশনের ফল রেকর্ড করে পরবর্তী পদক্ষেপ নির্ধারণ করুন।",
        ),
      },
      {
        icon: "Phone",
        title: loc("Take manual orders with the details ready", "কাস্টমার ডেটাভিত্তিক সেলস এন্ট্রি"),
        body: loc(
          "Find a customer by phone number, review their order and return history, and add products with live totals for delivery charge, advance and balance due.",
          "ফোন নম্বর দিয়ে কাস্টমার প্রোফাইল, পূর্ববর্তী অর্ডার ও রিটার্ন হিস্ট্রি যাচাই করুন। প্রোডাক্ট যুক্ত করার সঙ্গে সঙ্গে ডেলিভারি চার্জ, অগ্রিম পেমেন্ট ও বকেয়ার হিসাব দেখুন।",
        ),
      },
      {
        icon: "History",
        title: loc("Keep changes accountable", "অর্ডার ট্র্যাকিং ও জবাবদিহি"),
        body: loc(
          "Review duplicate warnings, reserve stock by your store’s rule, and trace edits in the order timeline. Print invoices and dispatch labels in bulk.",
          "ডুপ্লিকেট অর্ডারের সতর্কতা যাচাই করুন এবং স্টোরের নিয়ম অনুযায়ী স্টক রিজার্ভ করুন। প্রতিটি পরিবর্তন অর্ডার টাইমলাইনে সংরক্ষিত থাকবে। একসঙ্গে ইনভয়েস ও ডিসপ্যাচ লেবেল প্রিন্ট করুন।",
        ),
      },
    ],
    workflow: [
      loc("Online checkout", "অনলাইন চেকআউট"),
      loc("Confirmation queue", "কনফার্মেশন"),
      loc("Stock reservation under store rules", "স্টোরের নিয়ম অনুযায়ী স্টক রিজার্ভেশন"),
      loc("Picking and packing", "পিকিং ও প্যাকিং"),
      loc("Courier dispatch", "ডিসপ্যাচ"),
    ],
    workflowNote: loc(
      "Phone and message orders start in Sales Entry.",
      "ফোন ও মেসেজের অর্ডার গ্রহণ হবে Sales Entry থেকে।",
    ),
    faq: {
      question: loc(
        "Are counter sales mixed into the online order list?",
        "অনলাইন অর্ডার, ম্যানুয়াল অর্ডার ও POS কি একই তালিকায় থাকবে?",
      ),
      answer: loc(
        "No. Online Orders, Sales Entry and POS have separate workspaces, connected through shared product, stock and customer records.",
        "Online Orders, Sales Entry ও POS-এর জন্য আলাদা ওয়ার্কস্পেস রয়েছে। প্রোডাক্ট, স্টক ও কাস্টমার রেকর্ডের মাধ্যমে এই মডিউলগুলো পরস্পরের সঙ্গে সংযুক্ত।",
      ),
    },
    related: ["courier", "omnichannel"],
    close: loc(
      "See your daily order workflow in a demo.",
      "আপনার টিমের অর্ডার প্রসেসিং ও সেলস এন্ট্রি কার্যক্রম ডেমোতে দেখুন।",
    ),
  },
  // 03
  {
    slug: "storefront",
    icon: "Store",
    name: loc("Online Store & Landing Pages", "অনলাইন স্টোর ও ল্যান্ডিং পেজ"),
    hook: loc("Give every campaign a clear path to checkout.", "ক্যাম্পেইন থেকে অর্ডারের পথ সহজ করুন।"),
    description: loc(
      "Build your branded store and campaign pages with mobile order forms, clear delivery charges and flexible payment choices.",
      "ব্র্যান্ডের নিজস্ব স্টোর ও ক্যাম্পেইন পেজ তৈরি করুন। মোবাইল উপযোগী অর্ডার ফর্ম, স্পষ্ট ডেলিভারি চার্জ ও প্রয়োজনীয় পেমেন্ট অপশন যুক্ত করুন।",
    ),
    hero: {
      title: loc(
        "Build the page. Present the offer. Take the order.",
        "ব্র্যান্ডেড অনলাইন স্টোর ও ক্যাম্পেইন ল্যান্ডিং পেজ তৈরি করুন।",
      ),
      body: loc(
        "Create a store on your own domain and dedicated landing pages for the products you advertise. Arrange sections, preview the mobile experience and let buyers order with their phone number, name and address.",
        "নিজস্ব ডোমেইনে প্রফেশনাল ই-কমার্স স্টোর সেটআপ করুন। নির্দিষ্ট মার্কেটিং ক্যাম্পেইনের জন্য আলাদা ল্যান্ডিং পেজ তৈরি করুন। মোবাইল উপযোগী লেআউট, প্রয়োজন অনুযায়ী সাজানো অর্ডার ফর্ম ও স্পষ্ট পেমেন্টের শর্ত দিয়ে ক্রেতার অর্ডার প্রক্রিয়া সহজ করুন।",
      ),
    },
    benefits: [
      {
        icon: "Palette",
        title: loc("Present your brand and offer clearly", "প্রফেশনাল ব্র্যান্ড প্রেজেন্টেশন"),
        body: loc(
          "Choose a theme, arrange sections and create single-product or longer campaign pages. Show product details, bundles, delivery information and the order form together.",
          "পছন্দের থিম নির্বাচন করে সিঙ্গেল প্রোডাক্ট অফার বা বিস্তারিত ক্যাম্পেইন পেজ প্রস্তুত করুন। প্রোডাক্টের তথ্য, বান্ডেল অফার, ডেলিভারি পলিসি ও অর্ডার ফর্ম একটি সমন্বিত লেআউটে প্রদর্শন করুন।",
        ),
      },
      {
        icon: "ShoppingCart",
        title: loc("Make checkout practical for your buyers", "সহজ ও স্পষ্ট চেকআউট"),
        body: loc(
          "Offer guest checkout without an account or email address. Show delivery charges before the final step, with COD, partial advance or prepaid options.",
          "অ্যাকাউন্ট বা ইমেইল ছাড়াই গেস্ট চেকআউটের সুবিধা দিন। অর্ডার চূড়ান্ত করার আগে ডেলিভারি চার্জ দেখান। COD, আংশিক অগ্রিম বা সম্পূর্ণ অগ্রিম পেমেন্টের অপশন রাখুন।",
        ),
      },
      {
        icon: "Sparkles",
        title: loc("Prepare listings and measure page results", "AI কনটেন্ট ও পারফরম্যান্স ট্র্যাকিং"),
        body: loc(
          "Use AI to draft Bangla and English product content, then review before publishing. Track page views, form starts, orders and delivered revenue.",
          "AI দিয়ে বাংলা ও ইংরেজিতে প্রোডাক্ট কনটেন্টের ড্রাফট তৈরি করুন এবং যাচাই করে প্রকাশ করুন। পেজ ভিউ, ফর্ম শুরু, অর্ডার ও ডেলিভারি হওয়া অর্ডারের রেভিনিউ পর্যালোচনা করুন।",
        ),
      },
    ],
    workflow: [
      loc("Choose a theme or page layout", "লেআউট নির্বাচন"),
      loc("Add product and offer", "প্রোডাক্ট ও অফার সেটআপ"),
      loc("Preview on mobile", "মোবাইল প্রিভিউ"),
      loc("Publish", "পেজ প্রকাশ"),
      loc("Review orders and page performance", "পারফরম্যান্স বিশ্লেষণ"),
    ],
    faq: {
      question: loc(
        "Do customers have to create an account?",
        "অর্ডারের জন্য কাস্টমার অ্যাকাউন্ট বা OTP কি বাধ্যতামূলক?",
      ),
      answer: loc(
        "Guest checkout does not require one. Optional OTP verification is a separately entitled feature, and message usage is metered.",
        "গেস্ট চেকআউটে অ্যাকাউন্ট প্রয়োজন হয় না। OTP verification আলাদা সুবিধা হিসেবে চালু করা যায়; এর জন্য প্রযোজ্য মডিউল অ্যাক্সেস ও মেসেজ ক্রেডিট প্রয়োজন।",
      ),
    },
    related: ["orders", "analytics"],
    close: loc(
      "See a store and campaign page built around your products.",
      "আপনার ব্র্যান্ডের অনলাইন স্টোর ও ক্যাম্পেইন পেজের ডেমো দেখুন।",
    ),
  },
  // 04
  {
    slug: "omnichannel",
    icon: "MessagesSquare",
    name: loc("Customer Inbox & Follow-up", "কাস্টমার ইনবক্স ও ফলোআপ"),
    hook: loc(
      "Your next sale may already be in the inbox.",
      "কাস্টমার কমিউনিকেশন ও ফলোআপে ধারাবাহিকতা রাখুন।",
    ),
    description: loc(
      "Reply with customer history beside you, create orders from conversations and follow up on unfinished checkouts.",
      "কাস্টমারের পূর্ববর্তী তথ্য দেখে রিপ্লাই দিন। চ্যাট থেকে অর্ডার তৈরি করুন এবং অসম্পূর্ণ চেকআউটের জন্য নির্ধারিত সময়ে ফলোআপ করুন।",
    ),
    hero: {
      title: loc(
        "Reply with context. Follow up with a purpose.",
        "কাস্টমার ডেটার ভিত্তিতে রিপ্লাই দিন, সময়মতো ফলোআপ করুন।",
      ),
      body: loc(
        "Bring supported customer channels into a shared inbox. See the customer’s history beside the conversation, give the right staff member responsibility and follow up when an interested buyer leaves without ordering.",
        "Messenger, WhatsApp, Instagram, স্টোর চ্যাট, SMS রিপ্লাই ও ইমেইল একটি সেন্ট্রাল ইনবক্সে পরিচালনা করুন। পূর্ববর্তী কাস্টমার রেকর্ড দেখে রিপ্লাই দিন, নির্দিষ্ট টিম মেম্বারকে দায়িত্ব দিন এবং অসম্পূর্ণ চেকআউটের জন্য ফলোআপ নির্ধারণ করুন।",
      ),
    },
    benefits: [
      {
        icon: "Users",
        title: loc("Know who you are replying to", "কাস্টমার হিস্ট্রিসহ কমিউনিকেশন"),
        body: loc(
          "Review orders, returns and cart context alongside the conversation. Assign the conversation, use saved replies and keep internal notes for your team.",
          "চ্যাটের পাশেই কাস্টমারের অর্ডার, রিটার্ন ও কার্টের তথ্য দেখুন। সংশ্লিষ্ট টিম মেম্বারকে কথোপকথনের দায়িত্ব দিন, সেভ করা রিপ্লাই ব্যবহার করুন এবং টিমের জন্য ইন্টারনাল নোট সংরক্ষণ করুন।",
        ),
      },
      {
        icon: "PackageCheck",
        title: loc("Turn a conversation into a prepared order", "চ্যাট থেকে সেলস এন্ট্রি"),
        body: loc(
          "Open Sales Entry with the customer already loaded. Your staff can confirm the products, delivery and payment details before saving the order.",
          "ইনবক্স থেকেই কাস্টমার প্রোফাইলসহ Sales Entry স্ক্রিন খুলুন। প্রোডাক্ট, ডেলিভারি ও পেমেন্টের তথ্য নিশ্চিত করে অর্ডার তৈরি করুন।",
        ),
      },
      {
        icon: "RotateCcw",
        title: loc("Recover unfinished checkouts thoughtfully", "পরিকল্পিত কার্ট রিকভারি"),
        body: loc(
          "Set recovery sequences and cart-restoring links. Stop the sequence when an order is placed, apply frequency caps and respect opt-outs.",
          "অসম্পূর্ণ চেকআউটের জন্য ফলোআপের সময় ও ধাপ নির্ধারণ করুন। আগের কার্টে ফেরার লিংক পাঠান। অর্ডার সম্পন্ন হলে রিকভারি মেসেজ বন্ধ হবে; মেসেজের সীমা ও কাস্টমারের অপ্ট-আউট বজায় থাকবে।",
        ),
      },
    ],
    workflow: [
      loc("Message arrives", "মেসেজ গ্রহণ"),
      loc("Review customer history", "কাস্টমার হিস্ট্রি যাচাই"),
      loc("Assign and reply", "দায়িত্ব নির্ধারণ ও রিপ্লাই"),
      loc("Create an order or schedule follow-up", "অর্ডার তৈরি বা ফলোআপ"),
      loc("Track the outcome", "ফলাফল পর্যালোচনা"),
    ],
    faq: {
      question: loc(
        "Are campaign messages unlimited?",
        "ক্যাম্পেইন মেসেজিংয়ের জন্য কি আলাদা ক্রেডিট প্রয়োজন?",
      ),
      answer: loc(
        "SMS, WhatsApp and email use purchased credits. Review estimated audience and cost before sending; supported channel and template rules apply.",
        "হ্যাঁ। SMS, WhatsApp ও ইমেইলের জন্য ক্রয় করা ক্রেডিট ব্যবহৃত হয়। পাঠানোর আগে সম্ভাব্য অডিয়েন্স ও খরচ দেখা যায়। সংশ্লিষ্ট চ্যানেল ও টেমপ্লেটের নিয়ম প্রযোজ্য।",
      ),
    },
    related: ["orders", "storefront"],
    close: loc(
      "See how your team can handle replies and follow-ups.",
      "আপনার টিমের কাস্টমার কমিউনিকেশন ও ফলোআপ প্রক্রিয়া ডেমোতে দেখুন।",
    ),
  },
  // 05
  {
    slug: "inventory",
    icon: "Boxes",
    name: loc("Stock, Warehouse & Purchasing", "স্টক, Warehouse ও পারচেজ"),
    hook: loc(
      "Know what is in stock, where it is and what it cost.",
      "ইনভেন্টরি ও প্রোডাক্ট কস্টিংয়ের সমন্বিত হিসাব।",
    ),
    description: loc(
      "Connect purchases, stock movements and location balances, with supplier dues and product costs kept in view.",
      "পারচেজ, স্টক মুভমেন্ট ও লোকেশনভিত্তিক ইনভেন্টরি ট্র্যাক করুন। প্রোডাক্টের কেনা খরচ ও সাপ্লায়ারের বকেয়া একই সিস্টেমে দেখুন।",
    ),
    hero: {
      title: loc(
        "Trace your stock from purchase to sale.",
        "পারচেজ থেকে সেলস, ইনভেন্টরির প্রতিটি মুভমেন্ট ট্র্যাক করুন।",
      ),
      body: loc(
        "Record what you buy, what you receive and what moves between locations. GridCommerce keeps a stock history alongside purchasing costs and supplier balances, so your team can check the reason behind a quantity.",
        "পারচেজ, পণ্য গ্রহণ ও একাধিক লোকেশনে স্টক ট্রান্সফারের রেকর্ড রাখুন। ইনভেন্টরি লেজারের সঙ্গে প্রোডাক্ট কস্টিং ও সাপ্লায়ারের বকেয়া সমন্বয় করে দেখুন। স্টকের পরিমাণ, অবস্থান ও পরিবর্তনের কারণ সম্পর্কে স্পষ্ট ধারণা পান।",
      ),
    },
    benefits: [
      {
        icon: "FileText",
        title: loc("Every stock change has a reference", "ইনভেন্টরি মুভমেন্টের অডিট ট্রেইল"),
        body: loc(
          "Trace sales, receipts, returns, transfers and adjustments in the stock ledger. Reserve available stock for orders and set low-stock alerts.",
          "সেলস, পণ্য গ্রহণ, রিটার্ন, ট্রান্সফার ও অ্যাডজাস্টমেন্ট স্টক লেজারে সংরক্ষণ করুন। অর্ডারের জন্য স্টক রিজার্ভ করুন এবং প্রোডাক্টভিত্তিক লো-স্টক অ্যালার্ট সেট করুন।",
        ),
      },
      {
        icon: "Warehouse",
        title: loc("Follow stock across branches and warehouses", "মাল্টি-লোকেশন ও অ্যাডভান্সড ট্র্যাকিং"),
        body: loc(
          "Track transfers through dispatch and receipt. Use rack locations, batch and expiry records or serial and IMEI tracking when your business needs the advanced warehouse module.",
          "ট্রান্সফার পাঠানো থেকে গ্রহণ পর্যন্ত ব্রাঞ্চ ও Warehouse-এর স্ট্যাটাস দেখুন। অ্যাডভান্সড Warehouse মডিউলে র‍্যাক লোকেশন, ব্যাচ, মেয়াদ, সিরিয়াল নম্বর ও IMEI ট্র্যাক করুন।",
        ),
      },
      {
        icon: "Receipt",
        title: loc("Know the cost and the supplier balance", "প্রোডাক্ট কস্টিং ও সাপ্লায়ার পেমেন্ট"),
        body: loc(
          "Record direct purchases or purchase orders, receive partial deliveries and allocate landed costs. See supplier invoices, payments and the balance still due.",
          "ডাইরেক্ট পারচেজ বা Purchase Order রেকর্ড করুন এবং আংশিক পণ্য গ্রহণের হিসাব রাখুন। পরিবহনসহ প্রযোজ্য খরচ যুক্ত করে Landed Cost নির্ধারণ করুন। সাপ্লায়ারের ইনভয়েস, পেমেন্ট ও বকেয়া পর্যালোচনা করুন।",
        ),
      },
    ],
    workflow: [
      loc("Record purchase", "পারচেজ এন্ট্রি"),
      loc("Receive goods", "পণ্য গ্রহণ"),
      loc("Update stock and cost", "ইনভেন্টরি ও কস্ট আপডেট"),
      loc("Sell or transfer", "সেলস বা ট্রান্সফার"),
      loc("Review movement and supplier due", "স্টক মুভমেন্ট ও সাপ্লায়ার বকেয়া পর্যালোচনা"),
    ],
    faq: {
      question: loc(
        "Can I buy in cartons and sell in pieces?",
        "পারচেজ ও সেলসের জন্য আলাদা ইউনিট ব্যবহার করা যাবে?",
      ),
      answer: loc(
        "Define each product’s unit conversion. Purchases and sales use their own units while the stock ledger keeps the base-unit quantity.",
        "হ্যাঁ। প্রোডাক্টভিত্তিক ইউনিট কনভার্শন সেট করে কার্টনে কেনা ও পিস হিসেবে বিক্রি করা যায়। ইনভেন্টরি লেজারে মূল ইউনিট অনুযায়ী স্টকের পরিমাণ হিসাব থাকবে।",
      ),
    },
    related: ["pos", "wholesale"],
    close: loc(
      "See your stock, purchases and warehouse flow together.",
      "আপনার ইনভেন্টরি, Warehouse ও পারচেজ ব্যবস্থাপনার ডেমো দেখুন।",
    ),
  },
  // 06
  {
    slug: "pos",
    icon: "ScanBarcode",
    name: loc("POS & Daily Cash", "POS ও দৈনিক ক্যাশ হিসাব"),
    hook: loc(
      "Close the day knowing where the cash went.",
      "কাউন্টার সেলস থেকে ক্যাশ ক্লোজিং, প্রতিটি হিসাব স্পষ্ট।",
    ),
    description: loc(
      "Run counter sales, record expenses and compare expected cash with the amount counted at shift close.",
      "রিটেইল সেলস, পেমেন্ট ও দৈনিক খরচ রেকর্ড করুন। শিফট শেষে সিস্টেমের হিসাবের সঙ্গে হাতে থাকা ক্যাশের পার্থক্য যাচাই করুন।",
    ),
    hero: {
      title: loc(
        "From the first counter sale to the closing cash count.",
        "রিটেইল সেলস থেকে দৈনিক ক্যাশ ক্লোজিং, এক সিস্টেমে পরিচালনা করুন।",
      ),
      body: loc(
        "Scan products, take payments and adjust stock at the correct branch. Record expenses and cash movements, then compare what the system expects with what your cashier counts at closing.",
        "বারকোড স্ক্যানিং, একাধিক পেমেন্ট মেথড ও সংশ্লিষ্ট ব্রাঞ্চের স্টক আপডেটের মাধ্যমে কাউন্টার সেলস পরিচালনা করুন। দৈনিক খরচ ও ক্যাশ লেনদেন রেকর্ড করুন। শিফট শেষে সিস্টেমের প্রত্যাশিত ব্যালেন্সের সঙ্গে হাতে থাকা ক্যাশ মিলিয়ে নিন।",
      ),
    },
    benefits: [
      {
        icon: "ScanBarcode",
        title: loc("Keep counter work moving", "সহজ কাউন্টার বিলিং"),
        body: loc(
          "Scan barcodes, hold and resume bills, accept split payments and print thermal receipts. Process exchanges and returns at the counter.",
          "বারকোড স্ক্যান করে বিল তৈরি করুন, প্রয়োজনে হোল্ড ও রিজিউম করুন। স্প্লিট পেমেন্ট গ্রহণ ও থার্মাল রিসিট প্রিন্ট করুন। কাউন্টার থেকেই প্রোডাক্ট এক্সচেঞ্জ ও রিটার্ন পরিচালনা করুন।",
        ),
      },
      {
        icon: "Wallet",
        title: loc("Know what should be in the drawer", "ক্যাশ মুভমেন্ট ও ব্যালেন্স ট্র্যাকিং"),
        body: loc(
          "Record the opening balance, sales, expenses, pickups and drops. Keep cash, mobile money and bank balances separate.",
          "ওপেনিং ব্যালেন্স, সেলস, খরচ এবং ক্যাশ নেওয়া বা জমা দেওয়ার প্রতিটি লেনদেন রেকর্ড করুন। নগদ, মোবাইল পেমেন্ট ও ব্যাংকের ব্যালেন্স পৃথক রাখুন।",
        ),
      },
      {
        icon: "Eye",
        title: loc("Make shift differences visible", "শিফট রিকনসিলিয়েশন ও জবাবদিহি"),
        body: loc(
          "Close with a cash count, see the short-or-over amount and record a reason. Review cashier sales, discounts and logged approvals.",
          "শিফট শেষে ক্যাশ কাউন্ট করে ঘাটতি বা অতিরিক্ত টাকার পরিমাণ শনাক্ত করুন। পার্থক্যের কারণ রেকর্ড করুন এবং ক্যাশিয়ারভিত্তিক সেলস, ডিসকাউন্ট ও অনুমোদনের তথ্য পর্যালোচনা করুন।",
        ),
      },
    ],
    workflow: [
      loc("Open shift", "শিফট ওপেনিং"),
      loc("Scan and sell", "স্ক্যানিং ও সেলস"),
      loc("Record payments and expenses", "পেমেন্ট ও খরচ রেকর্ড"),
      loc("Count cash", "ক্যাশ কাউন্ট"),
      loc("Review and close", "রিকনসিলিয়েশন ও শিফট ক্লোজিং"),
    ],
    faq: {
      question: loc("Can I use POS for a physical shop?", "শুধু রিটেইল আউটলেটের জন্য POS ব্যবহার করা যাবে?"),
      answer: loc(
        "POS is an independently entitled module. Counter sales have their own workspace, while stock and customer records connect to your other enabled modules.",
        "হ্যাঁ। POS আলাদা মডিউল হিসেবে নেওয়া যায়। কাউন্টার সেলসের নিজস্ব ওয়ার্কস্পেস থাকবে এবং চালু থাকা অন্যান্য মডিউলের সঙ্গে স্টক ও কাস্টমার রেকর্ড সংযুক্ত থাকবে।",
      ),
    },
    related: ["inventory", "analytics"],
    close: loc(
      "See a counter sale and a complete shift close.",
      "আপনার আউটলেটের POS ও দৈনিক ক্যাশ রিকনসিলিয়েশন ডেমোতে দেখুন।",
    ),
  },
  // 07
  {
    slug: "wholesale",
    icon: "Handshake",
    name: loc("Wholesale & Collections", "হোলসেল ও বকেয়া আদায়"),
    hook: loc(
      "Who owes you, how much and since when?",
      "ডিলার প্রাইসিং, ক্রেডিট ও বকেয়া আদায়ে নিয়ন্ত্রণ রাখুন।",
    ),
    description: loc(
      "Manage dealer prices, credit limits and partial collections, with customer statements and overdue balances ready to review.",
      "কাস্টমারভিত্তিক দাম, ক্রেডিট লিমিট ও আংশিক পেমেন্ট পরিচালনা করুন। মেয়াদ পেরোনো বকেয়া ও কালেকশন হিস্ট্রি দেখে ফলোআপ নির্ধারণ করুন।",
    ),
    hero: {
      title: loc(
        "Keep credit sales connected to collection.",
        "ক্রেডিট সেলস ও পেমেন্ট কালেকশনের সমন্বিত ব্যবস্থাপনা।",
      ),
      body: loc(
        "Carry a quotation through to order, invoice and payment. GridCommerce shows each customer’s due, credit terms and collection history, so your team knows which accounts need follow-up.",
        "কোটেশন থেকে সেলস অর্ডার, ইনভয়েস ও পেমেন্ট কালেকশন পর্যন্ত প্রতিটি ধাপ ট্র্যাক করুন। কাস্টমারভিত্তিক বকেয়া, ক্রেডিটের শর্ত ও কালেকশন হিস্ট্রি একসঙ্গে দেখুন। প্রাপ্য পেমেন্টের অগ্রাধিকার নির্ধারণ করে ফলোআপ পরিচালনা করুন।",
      ),
    },
    benefits: [
      {
        icon: "Tag",
        title: loc("Set the right price for each buyer", "কাস্টমারভিত্তিক B2B প্রাইসিং"),
        body: loc(
          "Use dealer groups, quantity-based prices and customer-specific rates. Convert an accepted quotation into a sales order without entering the details again.",
          "ডিলার গ্রুপ, অর্ডারের পরিমাণ ও নির্দিষ্ট কাস্টমার অনুযায়ী দাম নির্ধারণ করুন। কোটেশন গৃহীত হলে পুনরায় ডেটা এন্ট্রি ছাড়াই সেলস অর্ডারে রূপান্তর করুন।",
        ),
      },
      {
        icon: "ShieldCheck",
        title: loc("Check credit before extending it", "ক্রেডিট রিস্ক ম্যানেজমেন্ট"),
        body: loc(
          "Set a credit limit and payment period per customer. Review overdue balances and limit warnings before approving further credit sales.",
          "প্রতি কাস্টমারের ক্রেডিট লিমিট ও পেমেন্টের সময়সীমা নির্ধারণ করুন। নতুন ক্রেডিট সেল অনুমোদনের আগে ওভারডিউ ব্যালেন্স ও ক্রেডিট লিমিটের সতর্কতা যাচাই করুন।",
        ),
      },
      {
        icon: "Banknote",
        title: loc("Record every collection against what is owed", "কালেকশন ট্র্যাকিং ও এজিং রিপোর্ট"),
        body: loc(
          "Apply partial payments to invoices, view a customer ledger and review balances by age, area or salesperson. Schedule due reminders through supported channels.",
          "আংশিক পেমেন্ট সংশ্লিষ্ট ইনভয়েসে সমন্বয় করুন। কাস্টমার লেজার থেকে বকেয়ার সময়কাল, এলাকা ও সেলসপারসন অনুযায়ী রিপোর্ট দেখুন। নির্ধারিত সময়ে পেমেন্ট রিমাইন্ডার পাঠান।",
        ),
      },
    ],
    workflow: [
      loc("Quotation", "কোটেশন"),
      loc("Sales order", "সেলস অর্ডার"),
      loc("Fulfilment and invoice", "পণ্য সরবরাহ ও ইনভয়েস"),
      loc("Partial or full collection", "পেমেন্ট কালেকশন"),
      loc("Updated customer due", "কাস্টমারের বকেয়া আপডেট"),
    ],
    faq: {
      question: loc(
        "Can one customer pay an invoice in several instalments?",
        "এক ইনভয়েসের বিপরীতে একাধিক পেমেন্ট রেকর্ড করা যাবে?",
      ),
      answer: loc(
        "Yes. Record multiple payments against one invoice, or allocate one payment across several invoices, with the remaining due visible.",
        "হ্যাঁ। একটি ইনভয়েসে একাধিক আংশিক পেমেন্ট যুক্ত করা যায়। একই পেমেন্ট একাধিক ইনভয়েসেও সমন্বয় করা যায়। অবশিষ্ট বকেয়া কাস্টমার লেজারে দেখা যাবে।",
      ),
    },
    related: ["inventory", "analytics"],
    close: loc(
      "See dealer pricing and collection tracking for your business.",
      "আপনার হোলসেল প্রাইসিং, ক্রেডিট ও কালেকশন প্রক্রিয়া ডেমোতে দেখুন।",
    ),
  },
  // 08
  {
    slug: "analytics",
    icon: "ChartNoAxesCombined",
    name: loc("Profit & Marketing Reports", "মুনাফা ও মার্কেটিং রিপোর্ট"),
    hook: loc(
      "Orders are coming in. Which sales leave a margin?",
      "ব্যবসার মুনাফা ও মার্কেটিংয়ের ফলাফল বিশ্লেষণ করুন।",
    ),
    description: loc(
      "Review delivered sales against product, delivery, return and ad costs to see which products and campaigns contribute to profit.",
      "ডেলিভারি হওয়া অর্ডারের বিপরীতে প্রোডাক্ট কস্ট, কুরিয়ার, রিটার্ন ও মার্কেটিং ব্যয় সমন্বয় করে পণ্য ও ক্যাম্পেইনের লাভজনকতা মূল্যায়ন করুন।",
    ),
    hero: {
      title: loc(
        "See what your sales leave after the costs.",
        "ব্যবসার মুনাফা ও মার্কেটিং পারফরম্যান্স বিশ্লেষণ করুন।",
      ),
      body: loc(
        "Look beyond the order total. Bring sales and recorded costs into one reporting view, with online performance measured on delivered orders and a separate view of what the ad platforms report.",
        "সেলস রেভিনিউয়ের সঙ্গে ব্যবসার রেকর্ড করা খরচ সমন্বয় করে মুনাফা মূল্যায়ন করুন। অনলাইন সেলসের ক্ষেত্রে ডেলিভারি হওয়া অর্ডারের বিপরীতে প্রোডাক্ট কস্ট, কুরিয়ার, রিটার্ন ও বিজ্ঞাপনের খরচ দেখুন। অ্যাড প্ল্যাটফর্মের রিপোর্ট আলাদাভাবে তুলনা করুন।",
      ),
    },
    benefits: [
      {
        icon: "ChartPie",
        title: loc("Understand what each sale contributes", "অপারেশনাল মুনাফা বিশ্লেষণ"),
        body: loc(
          "Use the recorded product cost, courier charge, return cost, packaging, gateway fee and applicable expense allocation to review operational profitability.",
          "প্রোডাক্টের কেনা খরচ, কুরিয়ার চার্জ, রিটার্ন, প্যাকেজিং, পেমেন্ট গেটওয়ে ফি ও প্রযোজ্য অন্যান্য খরচ সমন্বয় করুন। অর্ডার, প্রোডাক্ট ও ক্যাম্পেইনভিত্তিক লাভজনকতা পর্যালোচনা করুন।",
        ),
      },
      {
        icon: "TrendingUp",
        title: loc("See which campaigns produce delivered orders", "মার্কেটিং পারফরম্যান্স মূল্যায়ন"),
        body: loc(
          "Compare ad spend with confirmed and delivered orders. Review cost per delivered order and campaign return rates alongside each platform’s reported results.",
          "বিজ্ঞাপনের ব্যয়ের সঙ্গে কনফার্ম ও ডেলিভারি হওয়া অর্ডার তুলনা করুন। প্রতি ডেলিভারি অর্ডারের খরচ ও ক্যাম্পেইনভিত্তিক রিটার্নের হার দেখুন। অ্যাড প্ল্যাটফর্মের দাবি ও GridCommerce-এর রেকর্ড পৃথক থাকবে।",
        ),
      },
      {
        icon: "Layers",
        title: loc("Use the right view for your business", "ব্যবসার মডেল অনুযায়ী রিপোর্টিং"),
        body: loc(
          "Review delivered revenue for online sales, completed sales for retail, and invoiced value with a separate collected view for wholesale. Tracking tools connect supported order events to ad platforms.",
          "অনলাইনে ডেলিভারি হওয়া সেলস, রিটেইলে সম্পন্ন সেলস এবং হোলসেলে ইনভয়েস ও কালেকশনের পৃথক রিপোর্ট দেখুন। ট্র্যাকিং টুল দিয়ে সাপোর্টেড অর্ডার ইভেন্ট সংশ্লিষ্ট অ্যাড প্ল্যাটফর্মে পাঠান।",
        ),
      },
    ],
    workflow: [
      loc("Record sales and costs", "সেলস ও খরচ রেকর্ড"),
      loc("Connect supported ad accounts", "সাপোর্টেড অ্যাড অ্যাকাউন্ট সংযুক্তি"),
      loc("Compare confirmed and delivered results", "কনফার্ম ও ডেলিভারি ফলাফল তুলনা"),
      loc("Review product and campaign contribution", "প্রোডাক্ট ও ক্যাম্পেইনের মুনাফা বিশ্লেষণ"),
    ],
    faq: {
      question: loc(
        "Is the reported profit a final accounting figure?",
        "এই রিপোর্ট কি অডিট করা আর্থিক বিবরণী হিসেবে ব্যবহারযোগ্য?",
      ),
      answer: loc(
        "These are operational reports based on recorded costs and the chosen allocation method. Ad attribution has limits; the figures are not audited financial statements.",
        "এটি রেকর্ড করা খরচ ও নির্ধারিত খরচ বণ্টনের ভিত্তিতে প্রস্তুত অপারেশনাল রিপোর্ট। অ্যাড অ্যাট্রিবিউশনের সীমাবদ্ধতাও প্রযোজ্য। এটি অডিট করা আর্থিক বিবরণীর বিকল্প নয়।",
      ),
    },
    related: ["courier", "wholesale"],
    close: loc(
      "See which sales and campaigns contribute to your margin.",
      "আপনার ব্যবসার মুনাফা ও মার্কেটিং রিপোর্টের ডেমো দেখুন।",
    ),
  },
];

export const MODULE_BY_SLUG = new Map(MODULES.map((m) => [m.slug, m]));

export const MODULE_UI = {
  explore: loc("Explore module", "বিস্তারিত দেখুন"),
  seeHow: loc("See How It Works", "যেভাবে কাজ করে"),
  related: loc("Works with", "সংশ্লিষ্ট মডিউল"),
};
