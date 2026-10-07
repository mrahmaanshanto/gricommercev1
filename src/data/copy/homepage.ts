/**
 * Homepage copy — the October 2026 homepage brief (eleven sections, in order).
 *
 * Homepage only: other routes keep their own copy in `home.ts`, `modules.ts`
 * and `data/sample/`. English and Bangla are written side by side; the Bangla
 * follows the brief's terminology (বিক্রি, পাওনা টাকা, পাওয়া টাকা, মিলিয়ে দেখা
 * পেআউট, নথিভুক্ত খরচ বাদে অবদান) and needs a native writer's final read.
 *
 * Claims are kept to what the owner's module copy documents. Where the brief
 * offered a fallback for an unverified feature, the fallback is used (see the
 * handoff notes): staff confirmation rather than AI calls, AI product-content
 * drafting rather than full-page generation, cart recovery rather than social
 * scheduling, setup review rather than two-way store sync, no app promotion.
 *
 * Every figure inside a demonstration is illustrative and the page labels it
 * "Demo data".
 */
import { loc, type Localized } from "@/i18n/types";

/* ------------------------------------------------------------------ */
/* 1 · Hero                                                            */
/* ------------------------------------------------------------------ */

export const HERO = {
  eyebrow: loc("Commerce software for Bangladeshi businesses", "বাংলাদেশি ব্যবসার জন্য কমার্স সফটওয়্যার"),
  line1: loc("Run your sales.", "বিক্রি সামলান।"),
  line2: loc("Know where your money stands.", "টাকার হিসাব রাখুন।"),
  body: loc(
    "Manage online, counter and wholesale sales with connected stock and customer records. See what customers and couriers owe you, and what each sale leaves after recorded costs.",
    "অনলাইন, দোকানের কাউন্টার ও পাইকারি বিক্রি সামলান একই স্টক ও কাস্টমার তথ্যের সঙ্গে। কাস্টমার ও কুরিয়ারের কাছে কত টাকা বাকি, আর নথিভুক্ত খরচ বাদে প্রতিটি বিক্রিতে কত থাকে—দেখুন এক জায়গায়।",
  ),
  microcopy: loc(
    "Tell us how you sell. We’ll walk through the workflows that fit your business.",
    "আপনি কীভাবে বিক্রি করেন জানান। আপনার ব্যবসার উপযোগী কাজের ধাপগুলো আমরা দেখিয়ে দেব।",
  ),
  fit: [loc("Online sellers", "অনলাইন ব্যবসা"), loc("Retail shops", "রিটেইল দোকান"), loc("Wholesalers", "পাইকারি ব্যবসা")],
  fitLabel: loc("Built for", "যাদের জন্য"),
  tourLabel: loc("Product preview", "প্রোডাক্ট প্রিভিউ"),
  tabs: {
    sales: loc("Sales & collections", "বিক্রি ও আদায়"),
    stock: loc("Shared stock", "একই স্টক"),
    customer: loc("Customer history", "কাস্টমারের ইতিহাস"),
  },
};

/* ------------------------------------------------------------------ */
/* 3 · Business fit                                                    */
/* ------------------------------------------------------------------ */

export const FIT = {
  title: loc("Built for the way you sell.", "আপনার বিক্রির ধরনের জন্য তৈরি।"),
  intro: loc(
    "Start with your daily workflow. Connect more parts of the business as you need them.",
    "প্রতিদিনের কাজ দিয়ে শুরু করুন। প্রয়োজন অনুযায়ী ব্যবসার আরও অংশ যুক্ত করুন।",
  ),
  types: [
    {
      id: "online",
      icon: "Globe",
      href: "/solutions/online-commerce",
      title: loc("Online businesses", "অনলাইন ব্যবসা"),
      body: loc(
        "Bring website, phone and message orders into connected confirmation, dispatch and COD collection workflows.",
        "ওয়েবসাইট, ফোন ও মেসেজের অর্ডার আনুন সংযুক্ত কনফার্মেশন, ডিসপ্যাচ ও COD আদায়ের ধাপে।",
      ),
      link: loc("Explore online commerce", "অনলাইন কমার্স দেখুন"),
    },
    {
      id: "retail",
      icon: "Store",
      href: "/solutions/retail-commerce",
      title: loc("Retail businesses", "রিটেইল ব্যবসা"),
      body: loc(
        "Connect counter sales, branch stock and expenses, then compare expected cash with the closing count.",
        "কাউন্টার বিক্রি, ব্রাঞ্চের স্টক ও খরচ যুক্ত করুন, তারপর প্রত্যাশিত ক্যাশ মিলিয়ে নিন দিনশেষের গণনার সঙ্গে।",
      ),
      link: loc("Explore retail commerce", "রিটেইল কমার্স দেখুন"),
    },
    {
      id: "wholesale",
      icon: "Handshake",
      href: "/solutions/wholesale-commerce",
      title: loc("Wholesale businesses", "পাইকারি ব্যবসা"),
      body: loc(
        "Manage dealer prices, credit sales, partial payments and customer balances in one connected workflow.",
        "ডিলার প্রাইস, বাকিতে বিক্রি, আংশিক পেমেন্ট ও কাস্টমারের ব্যালেন্স এক সংযুক্ত প্রক্রিয়ায় সামলান।",
      ),
      link: loc("Explore wholesale commerce", "পাইকারি কমার্স দেখুন"),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4 · Daily control and reporting                                     */
/* ------------------------------------------------------------------ */

export const STORY = {
  eyebrow: loc("See the connection", "সংযোগটা দেখুন"),
  title: loc("One order. Follow the stock and the money.", "একটি অর্ডার। স্টক আর টাকার পথ দেখুন।"),
  body: loc(
    "See how a sale moves through confirmation, dispatch and collection—with stock, courier dues and recorded costs connected along the way.",
    "একটি বিক্রি কীভাবে কনফার্মেশন, ডিসপ্যাচ ও আদায়ের ধাপ পার হয়—স্টক, কুরিয়ারের পাওনা ও নথিভুক্ত খরচসহ—দেখুন।",
  ),
  link: loc("Explore orders", "অর্ডার মডিউল দেখুন"),
};

export const CONTROL = {
  title: loc("Know what needs your attention today.", "আজ কোন কাজে নজর দরকার, জানুন।"),
  body: loc(
    "See the orders waiting on your team, money still due and sales that leave a contribution after recorded costs.",
    "দেখুন কোন অর্ডার টিমের অপেক্ষায়, কোন টাকা এখনো পাওনা, আর নথিভুক্ত খরচ বাদে কোন বিক্রি অবদান রাখছে।",
  ),
  cards: [
    {
      icon: "ClipboardList",
      title: loc("Orders waiting for action", "কাজের অপেক্ষায় থাকা অর্ডার"),
      body: loc(
        "See what needs confirmation, packing or dispatch—and how long it has waited.",
        "কোনটি কনফার্মেশন, প্যাকিং বা ডিসপ্যাচের অপেক্ষায়—আর কতক্ষণ ধরে—দেখুন।",
      ),
      links: [{ href: "/features/orders", label: loc("Explore order management", "অর্ডার ম্যানেজমেন্ট দেখুন") }],
    },
    {
      icon: "Banknote",
      title: loc("Money still outstanding", "এখনো পাওনা টাকা"),
      body: loc(
        "Keep courier payouts and customer dues visible until the payment is recorded and matched.",
        "পেমেন্ট নথিভুক্ত ও মিলানো না হওয়া পর্যন্ত কুরিয়ার পেআউট ও কাস্টমারের বাকি চোখের সামনে রাখুন।",
      ),
      links: [
        { href: "/features/courier", label: loc("Courier dues", "কুরিয়ারের পাওনা") },
        { href: "/features/wholesale", label: loc("Wholesale collections", "পাইকারি আদায়") },
      ],
    },
    {
      icon: "ChartPie",
      title: loc("What each sale leaves", "প্রতিটি বিক্রিতে কী থাকে"),
      body: loc(
        "Review sales against product, delivery, return and other recorded costs.",
        "পণ্য, ডেলিভারি, রিটার্ন ও অন্যান্য নথিভুক্ত খরচের সঙ্গে বিক্রি মিলিয়ে দেখুন।",
      ),
      links: [{ href: "/features/analytics", label: loc("Explore profit reports", "প্রফিট রিপোর্ট দেখুন") }],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 5 · Shared stock and cash clarity                                   */
/* ------------------------------------------------------------------ */

export const SHARED = {
  title: loc("Your counter and online store share the stock picture.", "দোকানের কাউন্টার আর অনলাইন স্টোর—স্টকের হিসাব একটাই।"),
  body: loc(
    "Connect sales to the location fulfilling them, with shared product and customer records. See available stock change as orders are reserved and sales are completed.",
    "যে লোকেশন থেকে বিক্রি হচ্ছে তার সঙ্গে বিক্রি যুক্ত করুন, একই পণ্য ও কাস্টমার তথ্যসহ। অর্ডার রিজার্ভ হলে ও বিক্রি সম্পন্ন হলে উপলব্ধ স্টক কীভাবে বদলায় দেখুন।",
  ),
  link: loc("Explore POS & daily cash", "POS ও দৈনিক ক্যাশ দেখুন"),
  replay: loc("Replay", "আবার দেখুন"),
};

export const SHARED_DEMO = {
  product: loc("Anker 20W Charger", "অ্যাঙ্কার ২০W চার্জার"),
  location: loc("Mirpur shop · counter and online orders", "মিরপুর শপ · কাউন্টার ও অনলাইন অর্ডার"),
  onHand: loc("On hand", "হাতে আছে"),
  reserved: loc("Reserved", "রিজার্ভড"),
  available: loc("Available", "উপলব্ধ"),
  historyTitle: loc("Stock history · this product", "স্টকের ইতিহাস · এই পণ্য"),
  counterEvent: loc("Counter sale completed · R-2291", "কাউন্টার বিক্রি সম্পন্ন · R-2291"),
  counterDetail: loc("On hand 12 → 11 · available 12 → 11", "হাতে ১২ → ১১ · উপলব্ধ ১২ → ১১"),
  onlineEvent: loc("Online order reserved · #GC-10518", "অনলাইন অর্ডার রিজার্ভড · #GC-10518"),
  onlineDetail: loc("Reserved 0 → 1 · available 11 → 10 · on hand stays 11 until dispatch", "রিজার্ভ ০ → ১ · উপলব্ধ ১১ → ১০ · ডিসপ্যাচ পর্যন্ত হাতে ১১"),
  waiting: loc("No movement yet today", "আজ এখনো কোনো পরিবর্তন নেই"),
  counterFeed: loc("Counter", "কাউন্টার"),
  onlineFeed: loc("Online store", "অনলাইন স্টোর"),
  ruleNote: loc("This example store reserves stock when an online order is confirmed.", "এই উদাহরণের স্টোরে অনলাইন অর্ডার কনফার্ম হলে স্টক রিজার্ভ হয়।"),
  customerTitle: loc("Same customer record", "একই কাস্টমার প্রোফাইল"),
  customerName: loc("Nusrat Jahan", "নুসরাত জাহান"),
  customerCounter: loc("Bought at the Mirpur counter", "মিরপুর কাউন্টারে কিনেছেন"),
  customerOnline: loc("Ordered from the online store", "অনলাইন স্টোরে অর্ডার করেছেন"),
  customerNote: loc("Linked by phone number when staff record the sale.", "বিক্রি নথিভুক্ত করার সময় ফোন নম্বর দিয়ে যুক্ত হয়।"),
  cashTitle: loc("Today’s sales and money", "আজকের বিক্রি ও টাকা"),
  salesValue: loc("Sales value", "বিক্রির মূল্য"),
  salesNote: loc("Counter and online sales recorded today", "আজ নথিভুক্ত কাউন্টার ও অনলাইন বিক্রি"),
  counterCash: loc("Counter cash received", "কাউন্টারে পাওয়া ক্যাশ"),
  onlinePaid: loc("Online payments received", "অনলাইনে পাওয়া পেমেন্ট"),
  receivedTotal: loc("Received so far", "এ পর্যন্ত পাওয়া টাকা"),
  codDue: loc("COD awaiting payout", "পেআউটের অপেক্ষায় COD"),
  codNote: loc("Still with couriers — not cash in hand", "এখনো কুরিয়ারের কাছে — হাতে আসা ক্যাশ নয়"),
  cashNote: loc(
    "Simplified example: opening balance, cash expenses and adjustments are not shown.",
    "সরল উদাহরণ: ওপেনিং ব্যালেন্স, ক্যাশ খরচ ও সমন্বয় এখানে দেখানো হয়নি।",
  ),
};

/* ------------------------------------------------------------------ */
/* 6 · Connected growth tools                                          */
/* ------------------------------------------------------------------ */

/* Dedicated feature sections — each sits beside its own animated product scene. */
export const FEATURES = {
  inbox: {
    eyebrow: loc("Omnichannel inbox", "অমনিচ্যানেল ইনবক্স"),
    title: loc("Every chat in one inbox. Every order from the chat.", "সব চ্যাট এক ইনবক্সে। চ্যাট থেকেই অর্ডার।"),
    body: loc(
      "See orders and returns beside each conversation. Let AI draft the reply, send it, and turn a “yes” into an order without leaving the chat.",
      "প্রতিটি কথোপকথনের পাশে অর্ডার ও রিটার্ন দেখুন। AI উত্তরের খসড়া করুক, পাঠান, আর কাস্টমারের “হ্যাঁ” চ্যাট থেকেই অর্ডারে পরিণত করুন।",
    ),
    points: [
      loc("Messenger, WhatsApp, Instagram and TikTok together", "Messenger, WhatsApp, Instagram ও TikTok একসাথে"),
      loc("AI suggests replies in Bangla or English", "AI বাংলা বা ইংরেজিতে উত্তর সাজেস্ট করে"),
      loc("Customer history beside every chat", "প্রতিটি চ্যাটের পাশে কাস্টমারের ইতিহাস"),
    ],
    small: loc("Supported channels and message rules apply. Usage charges may apply.", "সমর্থিত চ্যানেল ও মেসেজের নিয়ম প্রযোজ্য। ব্যবহার অনুযায়ী চার্জ প্রযোজ্য হতে পারে।"),
    link: loc("Explore the inbox", "ইনবক্স দেখুন"),
    href: "/features/omnichannel",
  },
  store: {
    eyebrow: loc("Store & campaign pages", "স্টোর ও ক্যাম্পেইন পেজ"),
    title: loc("Create the offer. Keep the order connected.", "অফার তৈরি করুন। অর্ডার থাকুক সংযুক্ত।"),
    body: loc(
      "Pick a product and AI drafts the campaign page in Bangla or English. Connect your pixels, share the link, and every order lands in your confirmation queue.",
      "প্রোডাক্ট বাছুন, AI বাংলা বা ইংরেজিতে ক্যাম্পেইন পেজের খসড়া করবে। পিক্সেল যুক্ত করুন, লিংক শেয়ার করুন, আর প্রতিটি অর্ডার আসবে আপনার কনফার্মেশনের তালিকায়।",
    ),
    points: [
      loc("AI drafts, you edit and approve", "AI খসড়া করে, আপনি সম্পাদনা ও অনুমোদন করেন"),
      loc("Pixel and CAPI connected before you share", "শেয়ারের আগেই Pixel ও CAPI যুক্ত"),
      loc("Mobile checkout with COD", "COD-সহ মোবাইল চেকআউট"),
    ],
    small: loc("AI drafting uses metered credits.", "AI খসড়ায় ব্যবহার অনুযায়ী ক্রেডিট লাগে।"),
    link: loc("Explore stores & landing pages", "স্টোর ও ল্যান্ডিং পেজ দেখুন"),
    href: "/features/storefront",
  },
  tracking: {
    eyebrow: loc("Server-side tracking", "সার্ভার-সাইড ট্র্যাকিং"),
    title: loc("Send every sale to your ad platforms.", "প্রতিটি বিক্রি পৌঁছে দিন অ্যাড প্ল্যাটফর্মে।"),
    body: loc(
      "Purchase events go from our server to Meta, TikTok and Google, with customer details hashed first, so your campaigns learn from real orders, not lost browser pixels.",
      "পারচেজ ইভেন্ট আমাদের সার্ভার থেকে Meta, TikTok আর Google-এ যায়, কাস্টমারের তথ্য আগে হ্যাশ করে। তাই ক্যাম্পেইন শেখে আসল অর্ডার থেকে, হারিয়ে যাওয়া ব্রাউজার পিক্সেল থেকে নয়।",
    ),
    points: [
      loc("Meta, TikTok and Google from one setup", "এক সেটআপে Meta, TikTok ও Google"),
      loc("Customer details hashed before they leave", "পাঠানোর আগে কাস্টমারের তথ্য হ্যাশ"),
      loc("Delivery events sent when COD orders land", "COD ডেলিভারি হলে ডেলিভারি ইভেন্ট পাঠানো"),
    ],
    small: loc("You connect your own ad accounts. Supported platforms only.", "নিজের অ্যাড অ্যাকাউন্ট যুক্ত করবেন। শুধু সমর্থিত প্ল্যাটফর্ম।"),
    link: loc("Explore analytics & tracking", "অ্যানালিটিক্স ও ট্র্যাকিং দেখুন"),
    href: "/features/analytics",
  },
  social: {
    eyebrow: loc("Social posts", "সোশ্যাল পোস্ট"),
    title: loc("Plan posts once. Publish on time, everywhere.", "একবার পরিকল্পনা করুন। সময়মতো সব জায়গায় পোস্ট।"),
    body: loc(
      "Write a post, pick Facebook, Instagram or TikTok, drop it on the calendar and answer the comments from the same inbox.",
      "পোস্ট লিখুন, Facebook, Instagram বা TikTok বাছুন, ক্যালেন্ডারে বসিয়ে দিন আর একই ইনবক্স থেকে কমেন্টের উত্তর দিন।",
    ),
    points: [
      loc("One post, every channel", "এক পোস্ট, সব চ্যানেল"),
      loc("A calendar with the best times to post", "পোস্টের সেরা সময়সহ ক্যালেন্ডার"),
      loc("Comments answered from the inbox", "ইনবক্স থেকেই কমেন্টের উত্তর"),
    ],
    small: loc("Supported channels and their posting rules apply.", "সমর্থিত চ্যানেল ও তাদের পোস্টিং নিয়ম প্রযোজ্য।"),
    link: loc("Explore inbox & social", "ইনবক্স ও সোশ্যাল দেখুন"),
    href: "/features/omnichannel",
  },
  recovery: {
    eyebrow: loc("Cart recovery", "কার্ট রিকভারি"),
    title: loc("Give unfinished checkouts a clear way back.", "অসম্পূর্ণ চেকআউটকে ফেরার সহজ পথ দিন।"),
    body: loc(
      "A reminder goes out with a link that restores the cart. When the customer orders, the rest of the sequence stops on its own.",
      "কার্ট ফিরিয়ে আনার লিংকসহ রিমাইন্ডার যায়। কাস্টমার অর্ডার করলে বাকি রিমাইন্ডার নিজে থেকেই বন্ধ হয়।",
    ),
    points: [
      loc("WhatsApp, SMS or email reminders", "WhatsApp, SMS বা ইমেইল রিমাইন্ডার"),
      loc("One tap restores the cart", "এক ট্যাপে কার্ট ফিরে আসে"),
      loc("Opt-outs respected", "অপ্ট-আউট মানা হয়"),
    ],
    small: loc("SMS, WhatsApp and email use metered credits.", "SMS, WhatsApp ও ইমেইলে ব্যবহার অনুযায়ী ক্রেডিট লাগে।"),
    link: loc("Explore cart recovery", "কার্ট রিকভারি দেখুন"),
    href: "/features/cart-recovery",
  },
};

/* ------------------------------------------------------------------ */
/* 7 · Existing setup                                                  */
/* ------------------------------------------------------------------ */

export const SETUP = {
  title: loc("Already selling? Start with the setup you have.", "আগে থেকেই বিক্রি করছেন? আপনার বর্তমান সেটআপ দিয়েই শুরু করুন।"),
  body: loc(
    "Bring your current store or spreadsheets to the demo. We’ll review supported connections, the data you can import and the workflows you want to keep.",
    "ডেমোতে আপনার বর্তমান স্টোর বা স্প্রেডশিট নিয়ে আসুন। সমর্থিত কানেকশন, কোন ডেটা ইমপোর্ট করা যায় আর কোন কাজের ধারা রাখতে চান—আমরা একসঙ্গে দেখব।",
  ),
  items: [
    {
      icon: "Globe",
      title: loc("Existing store", "বর্তমান স্টোর"),
      body: loc("Review the connection and data flow available for your platform.", "আপনার প্ল্যাটফর্মের জন্য কোন কানেকশন ও ডেটা আদান-প্রদান সম্ভব, যাচাই করুন।"),
    },
    {
      icon: "Table",
      title: loc("Spreadsheets", "স্প্রেডশিট"),
      body: loc("Map your products and customer data, then check a test import.", "পণ্য ও কাস্টমারের ডেটা মিলিয়ে নিন, তারপর একটি টেস্ট ইমপোর্ট দেখুন।"),
    },
    {
      icon: "Users",
      title: loc("Your team", "আপনার টিম"),
      body: loc("Plan stock, permissions and day-to-day work before switching.", "বদলানোর আগে স্টক, পারমিশন ও প্রতিদিনের কাজ পরিকল্পনা করুন।"),
    },
  ],
  cta: loc("Discuss my setup", "আমার সেটআপ নিয়ে কথা বলুন"),
  migration: loc("See migration options", "মাইগ্রেশনের উপায় দেখুন"),
};

export const SETUP_DEMO = {
  title: loc("Setup review", "সেটআপ পর্যালোচনা"),
  sub: loc("Prepared with you during the demo", "ডেমোর সময় আপনার সঙ্গে তৈরি"),
  rows: [
    {
      icon: "Globe",
      title: loc("WooCommerce store", "WooCommerce স্টোর"),
      detail: loc("Products, customers and past orders · pre-scan before import", "পণ্য, কাস্টমার ও পুরনো অর্ডার · ইমপোর্টের আগে প্রি-স্ক্যান"),
      state: loc("Pre-scan reviewed", "প্রি-স্ক্যান দেখা হয়েছে"),
    },
    {
      icon: "Table",
      title: loc("Product spreadsheet", "পণ্যের স্প্রেডশিট"),
      detail: loc("Columns mapped: name, SKU, price, cost, stock", "কলাম মেলানো: নাম, SKU, দাম, খরচ, স্টক"),
      state: loc("Test import checked", "টেস্ট ইমপোর্ট দেখা হয়েছে"),
    },
    {
      icon: "Users",
      title: loc("Team and locations", "টিম ও লোকেশন"),
      detail: loc("4 staff · 2 locations · cost prices limited to owners", "৪ জন স্টাফ · ২টি লোকেশন · খরচের দাম শুধু মালিক দেখবেন"),
      state: loc("Permissions planned", "পারমিশন পরিকল্পিত"),
    },
  ],
  next: loc("First workflow: online orders and courier dues", "প্রথম কাজ: অনলাইন অর্ডার ও কুরিয়ারের পাওনা"),
  riders: [loc("Past orders", "পুরনো অর্ডার"), loc("Products", "পণ্য"), loc("Staff & roles", "স্টাফ ও দায়িত্ব")],
  hub: loc("Your GridCommerce workspace", "আপনার GridCommerce ওয়ার্কস্পেস"),
};

/* ------------------------------------------------------------------ */
/* 9 · Setup and plan guidance                                         */
/* ------------------------------------------------------------------ */

export const START = {
  title: loc("Start with the workflow you need first.", "যে কাজটি আগে দরকার, সেটি দিয়ে শুরু করুন।"),
  body: loc(
    "Choose the setup around how you sell, the people using it and the locations holding your stock.",
    "আপনি কীভাবে বিক্রি করেন, কারা ব্যবহার করবেন আর কোন লোকেশনে স্টক থাকে—সেই অনুযায়ী সেটআপ বেছে নিন।",
  ),
  steps: [
    { title: loc("Show us how you work", "আপনার কাজের ধরন দেখান"), body: loc("Walk through your sales channels, stock locations and collection process.", "বিক্রির চ্যানেল, স্টকের লোকেশন ও আদায়ের প্রক্রিয়া আমাদের দেখান।") },
    { title: loc("Review your setup", "সেটআপ যাচাই করুন"), body: loc("Check the modules, limits, supported connections and usage charges that apply.", "প্রযোজ্য মডিউল, সীমা, সমর্থিত কানেকশন ও ব্যবহারের চার্জ দেখে নিন।") },
    { title: loc("Plan your start", "শুরুর পরিকল্পনা করুন"), body: loc("Review the data to bring over and the first workflow your team will use.", "কোন ডেটা আনবেন আর টিম প্রথমে কোন কাজটি ব্যবহার করবে, ঠিক করুন।") },
  ],
};

/* ------------------------------------------------------------------ */
/* 10 · FAQ                                                            */
/* ------------------------------------------------------------------ */

export const FAQ: { title: Localized; items: { id: string; q: Localized; a: Localized }[] } = {
  title: loc("Before you choose your setup.", "সেটআপ বেছে নেওয়ার আগে।"),
  items: [
    {
      id: "online-only",
      q: loc("Is GridCommerce only for online sellers?", "GridCommerce কি শুধু অনলাইন বিক্রেতাদের জন্য?"),
      a: loc(
        "GridCommerce covers online, retail and wholesale workflows. Your setup depends on how you sell and which modules are enabled.",
        "GridCommerce অনলাইন, রিটেইল ও পাইকারি—তিন ধরনের কাজই সামলায়। আপনি কীভাবে বিক্রি করেন আর কোন মডিউল চালু, তার ওপর সেটআপ নির্ভর করে।",
      ),
    },
    {
      id: "modules",
      q: loc("Do I need every module?", "সব মডিউল কি লাগবে?"),
      a: loc(
        "No. Available modules and limits depend on your plan. Review the parts you need for online, retail, wholesale or a combination.",
        "না। কোন মডিউল ও কত সীমা পাবেন, তা প্ল্যানের ওপর নির্ভর করে। অনলাইন, রিটেইল, পাইকারি বা মিলিয়ে—যা দরকার সেই অংশগুলো দেখে নিন।",
      ),
    },
    {
      id: "store",
      q: loc("Can I keep my existing store?", "বর্তমান স্টোর কি রাখতে পারব?"),
      a: loc(
        "We’ll review your platform and the supported connection options in the demo, including what can sync and what needs importing.",
        "ডেমোতে আমরা আপনার প্ল্যাটফর্ম ও সমর্থিত কানেকশন দেখব—কোনটা সিঙ্ক হতে পারে আর কোনটা ইমপোর্ট করতে হবে।",
      ),
    },
    {
      id: "data",
      q: loc("Can I bring my existing business data?", "পুরনো ব্যবসার ডেটা কি আনা যাবে?"),
      a: loc(
        "Review spreadsheet imports for products, customers, suppliers and opening balances. Check the field mapping and a test import before transferring the full dataset.",
        "পণ্য, কাস্টমার, সাপ্লায়ার ও ওপেনিং ব্যালেন্সের স্প্রেডশিট ইমপোর্ট দেখে নিন। পুরো ডেটা আনার আগে ফিল্ড মেলানো ও একটি টেস্ট ইমপোর্ট যাচাই করুন।",
      ),
    },
    {
      id: "delivered",
      q: loc("Does a delivered order mean the money is in my account?", "অর্ডার ডেলিভারড মানেই কি টাকা আমার অ্যাকাউন্টে?"),
      a: loc(
        "No. Delivery and payout are separate steps. Courier amounts remain outstanding until the payment is recorded and matched.",
        "না। ডেলিভারি আর পেআউট আলাদা ধাপ। পেমেন্ট নথিভুক্ত ও মিলানো না হওয়া পর্যন্ত কুরিয়ারের টাকা পাওনা হিসেবেই থাকে।",
      ),
    },
    {
      id: "access",
      q: loc("Will every staff member see everything?", "সব স্টাফ কি সব কিছু দেখবেন?"),
      a: loc(
        "Use role-based access and approvals to control who can see cost prices or make sensitive changes, subject to your enabled modules.",
        "দায়িত্বভিত্তিক অ্যাক্সেস ও অনুমোদন দিয়ে ঠিক করুন কে খরচের দাম দেখবেন বা গুরুত্বপূর্ণ পরিবর্তন করবেন—চালু মডিউল অনুযায়ী।",
      ),
    },
    {
      id: "credits",
      q: loc("Do messages and AI usage cost extra?", "মেসেজ ও AI ব্যবহারে কি আলাদা খরচ আছে?"),
      a: loc(
        "SMS, WhatsApp, email and AI generation use metered credits. Review module access and usage charges when choosing your setup.",
        "SMS, WhatsApp, ইমেইল ও AI জেনারেশনে ব্যবহার অনুযায়ী ক্রেডিট লাগে। সেটআপ বেছে নেওয়ার সময় মডিউল অ্যাক্সেস ও ব্যবহারের চার্জ দেখে নিন।",
      ),
    },
    {
      id: "demo",
      q: loc("What will I see in the demo?", "ডেমোতে কী দেখব?"),
      a: loc(
        "Tell us how you take orders, manage stock and collect payments. We’ll focus on the workflows relevant to your business.",
        "আপনি কীভাবে অর্ডার নেন, স্টক সামলান ও পেমেন্ট আদায় করেন জানান। আমরা আপনার ব্যবসার প্রাসঙ্গিক কাজগুলোতেই মনোযোগ দেব।",
      ),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 11 · Final conversion                                               */
/* ------------------------------------------------------------------ */

export const FINAL_CTA = {
  title: loc("See your sales, stock and collections working together.", "বিক্রি, স্টক ও আদায়—একসঙ্গে কাজ করতে দেখুন।"),
  body: loc(
    "Show us how your business works today. We’ll walk through the GridCommerce workflows that fit your orders, stock and payments.",
    "আজ আপনার ব্যবসা কীভাবে চলে দেখান। আপনার অর্ডার, স্টক ও পেমেন্টের উপযোগী GridCommerce-এর কাজগুলো আমরা দেখিয়ে দেব।",
  ),
  support: loc("Online, retail, wholesale—or a combination.", "অনলাইন, রিটেইল, পাইকারি—বা মিলিয়ে।"),
};

/* ------------------------------------------------------------------ */
/* Migration assistant (Shopify / WordPress)                           */
/* ------------------------------------------------------------------ */

export const MIGRATION = {
  eyebrow: loc("Migration assistant", "মাইগ্রেশন অ্যাসিস্ট্যান্ট"),
  title: loc("Moving from Shopify or WordPress? Bring everything in a few clicks.", "শপিফাই বা ওয়ার্ডপ্রেস থেকে আসছেন? কয়েক ক্লিকেই সব নিয়ে আসুন।"),
  body: loc(
    "Connect your old store and the migration assistant brings your customers, past orders and products into GridCommerce, so you start with your history, not an empty shop.",
    "পুরনো স্টোর কানেক্ট করুন—মাইগ্রেশন অ্যাসিস্ট্যান্ট আপনার কাস্টমার, পুরনো অর্ডার ও পণ্য GridCommerce-এ নিয়ে আসবে। শুরু করবেন আপনার ইতিহাস নিয়েই, খালি দোকান থেকে নয়।",
  ),
  steps: [
    { title: loc("Connect your store", "স্টোর কানেক্ট করুন"), body: loc("Pick Shopify or WordPress (WooCommerce) and connect it with your store keys.", "শপিফাই বা ওয়ার্ডপ্রেস (WooCommerce) বেছে নিন, স্টোরের কি দিয়ে কানেক্ট করুন।") },
    { title: loc("Choose what to bring", "কী আনবেন বেছে নিন"), body: loc("Customers, past orders, products with stock and prices, pages and blog posts.", "কাস্টমার, পুরনো অর্ডার, স্টক ও দামসহ পণ্য, পেজ ও ব্লগ পোস্ট।") },
    { title: loc("Check a test import", "টেস্ট ইমপোর্ট দেখুন"), body: loc("See what came across and fix anything that needs attention before going live.", "কী এলো দেখে নিন, লাইভে যাওয়ার আগে দরকারি জিনিস ঠিক করুন।") },
    { title: loc("Go live", "লাইভে যান"), body: loc("Start selling with your old customers and order history already in place.", "পুরনো কাস্টমার ও অর্ডারের ইতিহাস হাতে নিয়েই বিক্রি শুরু করুন।") },
  ],
  cta: loc("Start my migration", "মাইগ্রেশন শুরু করুন"),
  link: loc("See migration options", "মাইগ্রেশনের উপায় দেখুন"),
  note: loc("Prefer a hand? Our team can run the move for you as an assisted migration.", "সাহায্য চান? আমাদের টিম অ্যাসিস্টেড মাইগ্রেশন হিসেবে পুরো কাজটি করে দিতে পারে।"),
};

/* Storefront themes — the ready Next.js themes, scrolling in columns. */
export const THEMES = {
  eyebrow: loc("Storefront themes", "স্টোরফ্রন্ট থিম"),
  title: loc("Launch a store that looks the part", "দেখতে দারুণ একটা স্টোর চালু করুন"),
  body: loc(
    "Pick a ready Next.js theme, add your products and go live. Every theme runs on the same orders, stock and tracking as the rest of GridCommerce.",
    "একটি রেডি Next.js থিম বাছুন, প্রোডাক্ট যোগ করুন আর লাইভ করুন। প্রতিটি থিম GridCommerce-এর একই অর্ডার, স্টক আর ট্র্যাকিংয়ে চলে।",
  ),
  points: [
    loc("Fast, mobile-first pages", "দ্রুত, মোবাইল-ফার্স্ট পেজ"),
    loc("Your brand colours and fonts", "আপনার ব্র্যান্ডের রং ও ফন্ট"),
    loc("Checkout, COD and tracking built in", "চেকআউট, COD ও ট্র্যাকিং বিল্ট-ইন"),
  ],
  link: loc("See the online store", "অনলাইন স্টোর দেখুন"),
  alt: loc("Storefront theme preview", "স্টোরফ্রন্ট থিমের প্রিভিউ"),
};

/* Connections bento — the online tools in one grid, after the migration section. */
export const CONNECT = {
  lead: {
    title: loc("Sell online without the guesswork", "আন্দাজ ছাড়াই অনলাইনে বিক্রি করুন"),
    body: loc(
      "Orders, stock, couriers, messages and money in one place, with every step recorded so you always know what happened.",
      "অর্ডার, স্টক, কুরিয়ার, মেসেজ আর টাকা এক জায়গায়। প্রতিটি ধাপ রেকর্ড থাকে, তাই কী হয়েছে সবসময় জানবেন।",
    ),
  },
  insights: {
    title: loc("Business insights with GridAI", "GridAI দিয়ে ব্যবসার ইনসাইট"),
    body: loc(
      "Ask in Bangla or English. GridAI reads your orders, stock and money, then suggests the next step for you to approve.",
      "বাংলা বা ইংরেজিতে জিজ্ঞেস করুন। GridAI আপনার অর্ডার, স্টক আর টাকার হিসাব দেখে পরের ধাপ সাজেস্ট করে, আপনি অনুমোদন দিলেই হয়।",
    ),
    tagReport: loc("Weekly report", "সাপ্তাহিক রিপোর্ট"),
    tagWeek: loc("This week", "এই সপ্তাহ"),
    cardTitle: loc("A strong week!", "দারুণ একটা সপ্তাহ!"),
    cardBody: loc("Delivered orders are up. Two products need restocking soon.", "ডেলিভারড অর্ডার বেড়েছে। দুটি প্রোডাক্ট শিগগির রিস্টক করতে হবে।"),
    topSellers: loc("Top sellers", "সেরা বিক্রি"),
    delivered: loc("Delivered rate", "ডেলিভারি রেট"),
    action: loc("Restock 2 products", "২টি প্রোডাক্ট রিস্টক করুন"),
  },
  trusted: {
    title: loc("Trusted by 100+ ecommerce businesses", "১০০+ ই-কমার্স ব্যবসার আস্থা"),
  },
  integrations: {
    title: loc("Works with the apps you already use", "আপনার চেনা অ্যাপগুলোর সাথেই চলে"),
    label: loc("Integrations", "ইন্টিগ্রেশন"),
  },
  tracking: {
    title: loc("Track every sale, server-side", "প্রতিটি বিক্রি ট্র্যাক করুন, সার্ভার থেকে"),
    body: loc(
      "Purchase events go to Meta, TikTok and Google from our server, with customer data hashed first, so ad results stay accurate.",
      "পারচেজ ইভেন্ট আমাদের সার্ভার থেকে Meta, TikTok আর Google-এ যায়, কাস্টমারের তথ্য আগে হ্যাশ করে। তাই বিজ্ঞাপনের ফল থাকে সঠিক।",
    ),
    cta: loc("See analytics", "অ্যানালিটিক্স দেখুন"),
  },
  payments: {
    title: loc("bKash and Nagad, recorded", "bKash আর Nagad, রেকর্ডসহ"),
    body: loc("Mobile payments sit against the order they paid for.", "মোবাইল পেমেন্ট যে অর্ডারের, সেই অর্ডারের সাথেই থাকে।"),
    received: loc("Received", "পাওয়া গেছে"),
  },
  alerts: {
    title: loc("Instant alerts", "সাথে সাথে অ্যালার্ট"),
    body: loc("New orders, messages and courier payouts, as they happen.", "নতুন অর্ডার, মেসেজ আর কুরিয়ার পেআউট, ঘটার সাথে সাথে।"),
  },
};

/* ------------------------------------------------------------------ */
/* Hero gallery: one small widget per online tool (demo data)         */
/* ------------------------------------------------------------------ */

export const HERO_WIDGETS = {
  // card titles
  inventory: loc("Inventory", "ইনভেন্টরি"),
  analytics: loc("Analytics", "অ্যানালিটিক্স"),
  tracking: loc("Server-side tracking", "সার্ভার-সাইড ট্র্যাকিং"),
  inbox: loc("Omnichannel inbox", "অমনিচ্যানেল ইনবক্স"),
  courier: loc("One-click courier", "এক ক্লিকে কুরিয়ার"),
  returns: loc("Returns", "রিটার্ন"),
  warranty: loc("Warranty", "ওয়ারেন্টি"),
  social: loc("Social posts", "সোশ্যাল পোস্ট"),
  calendar: loc("Post calendar", "পোস্ট ক্যালেন্ডার"),
  comments: loc("Comments", "কমেন্ট"),
  reviews: loc("Reviews", "রিভিউ"),
  landing: loc("Landing page", "ল্যান্ডিং পেজ"),
  gridAi: loc("GridAI", "GridAI"),
  finance: loc("Finance", "ফাইন্যান্স"),
  // card content
  available: loc("available", "উপলব্ধ"),
  lowStock: loc("Reorder soon", "শিগগির রিঅর্ডার"),
  deliveredRevenue: loc("Delivered revenue", "ডেলিভারড আয়"),
  thisWeek: loc("this week", "এই সপ্তাহে"),
  purchaseEvent: loc("Purchase event", "পারচেজ ইভেন্ট"),
  sent: loc("Sent", "পাঠানো"),
  hashed: loc("Customer data hashed on our server", "কাস্টমারের তথ্য আমাদের সার্ভারে হ্যাশ করা"),
  inboxMsg: loc("Earbuds ta stock e ache?", "Earbuds ta stock e ache?"),
  inboxReply: loc("Ji ache! Order kore dibo?", "Ji ache! Order kore dibo?"),
  readyOrders: loc("6 orders ready to ship", "৬টি অর্ডার শিপের জন্য তৈরি"),
  bookCourier: loc("Book with Pathao", "Pathao-তে বুক করুন"),
  booked: loc("6 parcels booked", "৬টি পার্সেল বুকড"),
  returnItem: loc("Earbuds Pro · RTN-1042", "Earbuds Pro · RTN-1042"),
  sellAgain: loc("Can be sold again", "আবার বিক্রি করা যাবে"),
  backToStock: loc("Back to stock +1", "স্টকে ফেরত +১"),
  warrantyItem: loc("Laptop 14 · IMEI 3567…21", "Laptop 14 · IMEI 3567…21"),
  warrantyLeft: loc("8 months left", "আর ৮ মাস বাকি"),
  claimOpen: loc("Claim opened", "ক্লেইম খোলা হয়েছে"),
  postText: loc("Battery at 1%? Not this Puja. PUJA10 gets you 10% off.", "Battery at 1%? Not this Puja. PUJA10 e 10% off."),
  scheduledFor: loc("Scheduled · Fri 8:00 PM", "শিডিউলড · শুক্র রাত ৮টা"),
  week: loc("This week", "এই সপ্তাহ"),
  days: [loc("S", "শ"), loc("S", "র"), loc("M", "সো"), loc("T", "ম"), loc("W", "বু"), loc("T", "বৃ"), loc("F", "শু")],
  postsPlanned: loc("9 posts planned", "৯টি পোস্ট পরিকল্পিত"),
  commentText: loc("Price koto?", "Price koto?"),
  commentReply: loc("Inbox e details dilam 😊", "Inbox e details dilam 😊"),
  replied: loc("Replied", "উত্তর দেওয়া হয়েছে"),
  reviewText: loc("Fast delivery, original product.", "দ্রুত ডেলিভারি, অরিজিনাল প্রোডাক্ট।"),
  aiReply: loc("AI suggested reply", "AI-এর সাজেস্ট করা উত্তর"),
  orderNow: loc("Order now", "এখনই অর্ডার"),
  liveLink: loc("Live · link ready", "লাইভ · লিংক তৈরি"),
  askAi: loc("Book 6 ready orders with Pathao", "রেডি ৬টি অর্ডার Pathao-তে বুক করো"),
  needsOk: loc("Needs your OK", "আপনার অনুমতি দরকার"),
  received: loc("Received", "পাওয়া"),
  codAwaiting: loc("COD awaiting", "COD বাকি"),
};

/* The GridCommerce app for Android and iPhone. Store links are placeholders until the listings are live. */
export const MOBILE_APPS = {
  lead: loc("Your shop,", "আপনার দোকান,"),
  tail: loc("in your pocket.", "আপনার পকেটে।"),
  body: loc(
    "Take orders, answer chats, check stock and see today's cash from the GridCommerce app for Android and iPhone.",
    "অ্যান্ড্রয়েড ও আইফোনের গ্রিডকমার্স অ্যাপ থেকে অর্ডার নিন, চ্যাটের উত্তর দিন, স্টক দেখুন আর আজকের ক্যাশ জানুন।",
  ),
  features: [
    { icon: "BellRing", text: loc("New-order alerts", "নতুন অর্ডারের নোটিফিকেশন") },
    { icon: "ScanBarcode", text: loc("Scan a barcode to sell", "বারকোড স্ক্যান করে বিক্রি") },
    { icon: "MessageCircle", text: loc("Inbox on the go", "চলতে চলতে ইনবক্স") },
    { icon: "Wallet", text: loc("Today's cash at a glance", "এক নজরে আজকের ক্যাশ") },
  ],
  googlePlay: loc("Get it on Google Play", "গুগল প্লে থেকে নিন"),
  appStore: loc("Download on the App Store", "অ্যাপ স্টোর থেকে ডাউনলোড করুন"),
};

export const APP_LINKS = {
  googlePlay: "#",
  appStore: "#",
};
