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
  secondary: loc("See How It Works", "যেভাবে কাজ করে দেখুন"),
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

/* Labels inside the hero's product preview. */
export const HERO_DEMO = {
  order: loc("Order", "অর্ডার"),
  stock: loc("Stock", "স্টক"),
  collection: loc("Collection", "আদায়"),
  contribution: loc("Contribution", "অবদান"),
  confirmed: loc("Confirmed by staff", "স্টাফ কনফার্ম করেছেন"),
  dispatched: loc("1 unit dispatched · 11 available", "১টি ডিসপ্যাচ · ১১টি উপলব্ধ"),
  payoutMatched: loc("Payout ৳2,400 received and matched", "৳২,৪০০ পেআউট পাওয়া ও মিলানো হয়েছে"),
  afterCosts: loc("৳540 after recorded costs", "নথিভুক্ত খরচ বাদে ৳৫৪০"),
  cod: loc("Cash on delivery", "ক্যাশ অন ডেলিভারি"),
  item: loc("Wireless earbuds × 1", "ওয়্যারলেস ইয়ারবাড × ১"),
  customerName: loc("Nusrat Jahan · Mirpur, Dhaka", "নুসরাত জাহান · মিরপুর, ঢাকা"),
  completed: loc("Completed", "সম্পন্ন"),
  location: loc("Mirpur shop", "মিরপুর শপ"),
  onHand: loc("On hand", "হাতে আছে"),
  reserved: loc("Reserved", "রিজার্ভড"),
  available: loc("Available", "উপলব্ধ"),
  history: loc("Stock history", "স্টকের ইতিহাস"),
  counterSale: loc("Counter sale · receipt R-2291", "কাউন্টার বিক্রি · রসিদ R-2291"),
  onlineReserve: loc("Online order #GC-10518 reserved", "অনলাইন অর্ডার #GC-10518 রিজার্ভড"),
  purchase: loc("Purchase received · PO-118", "পারচেজ গ্রহণ · PO-118"),
  customerSince: loc("Customer since March 2026", "মার্চ ২০২৬ থেকে কাস্টমার"),
  orders: loc("Orders", "অর্ডার"),
  lifetime: loc("Total spent", "মোট কেনাকাটা"),
  due: loc("Due now", "এখন বাকি"),
  returns: loc("Returns", "রিটার্ন"),
  recent: loc("Recent activity", "সাম্প্রতিক কার্যক্রম"),
  act1: loc("Order #GC-10512 delivered", "অর্ডার #GC-10512 ডেলিভারড"),
  act2: loc("Bought at the Mirpur counter", "মিরপুর কাউন্টারে কিনেছেন"),
  act3: loc("Messaged about delivery time", "ডেলিভারির সময় নিয়ে মেসেজ"),
  act4: loc("Returned a phone case · refunded ৳650", "ফোন কেস রিটার্ন · ৳৬৫০ ফেরত"),
  spend: loc("Spend by month", "মাসভিত্তিক কেনাকাটা"),
  reachedOn: loc("Talks to you on", "যেসব চ্যানেলে কথা বলেন"),
  oneProfile: loc("One profile, every channel", "সব চ্যানেলে একটাই প্রোফাইল"),
  moneyTrail: loc("Money trail", "টাকার হিসাব"),
  saleRecorded: loc("Sale recorded", "বিক্রি নথিভুক্ত"),
  courierCharge: loc("Courier charge", "কুরিয়ার চার্জ"),
};

/* ------------------------------------------------------------------ */
/* 2 · How it works — follow one order                                 */
/* ------------------------------------------------------------------ */

export const STORY = {
  eyebrow: loc("See the connection", "সংযোগটা দেখুন"),
  title: loc("One order. Follow the stock and the money.", "একটি অর্ডার। স্টক আর টাকার পথ দেখুন।"),
  body: loc(
    "See how a sale moves through confirmation, dispatch and collection—with stock, courier dues and recorded costs connected along the way.",
    "একটি বিক্রি কীভাবে কনফার্মেশন, ডিসপ্যাচ ও আদায়ের ধাপ পার হয়—স্টক, কুরিয়ারের পাওনা ও নথিভুক্ত খরচসহ—দেখুন।",
  ),
  steps: [
    {
      title: loc("Confirm the order", "অর্ডার কনফার্ম করুন"),
      body: loc("Check the customer, items and payment details before dispatch.", "ডিসপ্যাচের আগে কাস্টমার, পণ্য ও পেমেন্টের তথ্য যাচাই করুন।"),
    },
    {
      title: loc("Reserve and dispatch stock", "স্টক রিজার্ভ ও ডিসপ্যাচ"),
      body: loc("Follow the stock change at the location fulfilling the order.", "যে লোকেশন থেকে অর্ডার যাচ্ছে, সেখানের স্টক পরিবর্তন দেখুন।"),
    },
    {
      title: loc("Track what the courier owes", "কুরিয়ারের পাওনা ট্র্যাক করুন"),
      body: loc(
        "A delivered order stays outstanding until the payout is received and matched.",
        "পেআউট পাওয়া ও মিলানো না হওয়া পর্যন্ত ডেলিভারড অর্ডারের টাকা পাওনা হিসেবেই থাকে।",
      ),
    },
    {
      title: loc("Match payment. Review contribution.", "পেমেন্ট মেলান। অবদান দেখুন।"),
      body: loc(
        "Connect the received payout and recorded costs to the same sale.",
        "পাওয়া পেআউট আর নথিভুক্ত খরচ একই বিক্রির সঙ্গে যুক্ত করুন।",
      ),
    },
  ],
  pause: loc("Pause", "থামান"),
  play: loc("Play", "চালু করুন"),
  replay: loc("Replay", "আবার দেখুন"),
  differenceOn: loc("See a payout difference", "পেআউটে পার্থক্য দেখুন"),
  differenceOff: loc("Back to matched example", "মিলে যাওয়া উদাহরণে ফিরুন"),
  caption: loc(
    "Illustrative order. Contribution excludes costs not recorded here. Workflow illustration; actual delivery and settlement times vary.",
    "উদাহরণমূলক অর্ডার। এখানে নথিভুক্ত নয় এমন খরচ অবদানে ধরা হয়নি। কাজের ধাপের চিত্র; আসল ডেলিভারি ও সেটেলমেন্টের সময় ভিন্ন হতে পারে।",
  ),
  link: loc("Explore courier & COD control", "কুরিয়ার ও COD নিয়ন্ত্রণ দেখুন"),
  stepsLabel: loc("Workflow steps", "কাজের ধাপ"),
};

export const STORY_DEMO = {
  orderTitle: loc("Order #GC-10512", "অর্ডার #GC-10512"),
  orderMeta: loc("Online store · Nusrat Jahan · Wireless earbuds × 1", "অনলাইন স্টোর · নুসরাত জাহান · ওয়্যারলেস ইয়ারবাড × ১"),
  price: loc("Selling price", "বিক্রয়মূল্য"),
  status: {
    pending: loc("Waiting for confirmation", "কনফার্মেশনের অপেক্ষায়"),
    confirmed: loc("Confirmed", "কনফার্মড"),
    dispatched: loc("Dispatched", "ডিসপ্যাচড"),
    delivered: loc("Delivered", "ডেলিভারড"),
  },
  confirmAction: loc("Confirm order", "অর্ডার কনফার্ম করুন"),
  confirmedBy: loc("Confirmed by Rina after a call", "কল করে রিনা কনফার্ম করেছেন"),
  checks: [loc("Customer and phone checked", "কাস্টমার ও ফোন যাচাই"), loc("Items and price checked", "পণ্য ও দাম যাচাই"), loc("Cash on delivery", "ক্যাশ অন ডেলিভারি")],
  stockTitle: loc("Stock · Mirpur warehouse", "স্টক · মিরপুর ওয়্যারহাউস"),
  onHand: loc("On hand", "হাতে আছে"),
  reserved: loc("Reserved", "রিজার্ভড"),
  available: loc("Available", "উপলব্ধ"),
  stockNote: {
    before: loc("Nothing reserved yet", "এখনো রিজার্ভ হয়নি"),
    reserved: loc("Reserved on confirmation (this store’s rule)", "কনফার্মেশনে রিজার্ভ (এই স্টোরের নিয়ম)"),
    dispatched: loc("Left the warehouse on dispatch", "ডিসপ্যাচে ওয়্যারহাউস থেকে বের হয়েছে"),
  },
  courierTitle: loc("Courier & payout", "কুরিয়ার ও পেআউট"),
  delivery: loc("Delivery", "ডেলিভারি"),
  deliveryState: {
    none: loc("Not dispatched", "ডিসপ্যাচ হয়নি"),
    transit: loc("With courier", "কুরিয়ারের কাছে"),
    delivered: loc("Delivered", "ডেলিভারড"),
  },
  expected: loc("Expected payout", "প্রত্যাশিত পেআউট"),
  expectedNote: loc("৳2,500 collected − ৳100 courier charge", "৳২,৫০০ আদায় − ৳১০০ কুরিয়ার চার্জ"),
  payoutPending: loc("Payout pending", "পেআউট বাকি"),
  payoutReceived: loc("Payout received", "পেআউট পাওয়া গেছে"),
  matched: loc("Matched", "মিলেছে"),
  notCash: loc("Owed by the courier — not in your account yet", "কুরিয়ারের কাছে পাওনা — এখনো আপনার অ্যাকাউন্টে আসেনি"),
  received: loc("Received", "পাওয়া গেছে"),
  difference: loc("৳50 difference — review needed", "৳৫০ পার্থক্য — যাচাই প্রয়োজন"),
  differenceNote: loc("Left open for your team to review with the courier.", "কুরিয়ারের সঙ্গে যাচাইয়ের জন্য খোলা রাখা হয়েছে।"),
  contributionTitle: loc("Contribution after recorded costs", "নথিভুক্ত খরচ বাদে অবদান"),
  contributionHint: loc("What this sale leaves after the costs shown", "দেখানো খরচ বাদে এই বিক্রিতে থাকে"),
  costs: {
    price: loc("Selling price", "বিক্রয়মূল্য"),
    product: loc("Product cost", "পণ্যের খরচ"),
    courier: loc("Courier cost", "কুরিয়ার খরচ"),
    packaging: loc("Packaging", "প্যাকেজিং"),
    ads: loc("Advertising (allocated)", "বিজ্ঞাপন (ভাগ করা)"),
  },
  contribution: loc("Contribution", "অবদান"),
  contributionWaiting: loc("Shown once the payout is matched", "পেআউট মিলানোর পর দেখা যাবে"),
  contributionHeld: loc("Held until the difference is reviewed", "পার্থক্য যাচাই না হওয়া পর্যন্ত স্থগিত"),
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
  reportTitle: loc("Which campaigns bring delivered orders?", "কোন ক্যাম্পেইন থেকে ডেলিভারড অর্ডার আসে?"),
  reportBody: loc(
    "Compare ad spend with confirmed and delivered orders. Keep platform-reported results separate from the orders recorded in your business.",
    "বিজ্ঞাপন খরচ মিলিয়ে দেখুন কনফার্মড ও ডেলিভারড অর্ডারের সঙ্গে। প্ল্যাটফর্মের দেখানো ফল আলাদা রাখুন আপনার ব্যবসায় নথিভুক্ত অর্ডার থেকে।",
  ),
};

export const REPORT_DEMO = {
  window: loc("1–30 Sep 2026 · counted by delivery date", "১–৩০ সেপ্টেম্বর ২০২৬ · ডেলিভারির তারিখ অনুযায়ী"),
  campaign: loc("Campaign", "ক্যাম্পেইন"),
  spend: loc("Ad spend", "বিজ্ঞাপন খরচ"),
  confirmed: loc("Confirmed orders", "কনফার্মড অর্ডার"),
  delivered: loc("Delivered orders", "ডেলিভারড অর্ডার"),
  revenue: loc("Delivered revenue", "ডেলিভারড আয়"),
  cpdo: loc("Cost per delivered order", "প্রতি ডেলিভারড অর্ডারে খরচ"),
  returns: loc("Returns", "রিটার্ন"),
  platform: loc("Platform-reported purchases", "প্ল্যাটফর্মের দেখানো পারচেজ"),
  platformNote: loc("Shown for comparison; not used in the calculations.", "তুলনার জন্য দেখানো; হিসাবে ব্যবহার হয়নি।"),
  total: loc("All campaigns", "সব ক্যাম্পেইন"),
  definition: loc(
    "Cost per delivered order = ad spend ÷ delivered orders in the same window. Returns are orders sent back after dispatch.",
    "প্রতি ডেলিভারড অর্ডারে খরচ = একই সময়ের বিজ্ঞাপন খরচ ÷ ডেলিভারড অর্ডার। রিটার্ন মানে ডিসপ্যাচের পর ফেরত আসা অর্ডার।",
  ),
  caution: loc(
    "A lower cost per delivered order doesn’t show profit on its own. Compare contribution in the profit reports.",
    "কম খরচ মানেই বেশি মুনাফা নয়। প্রফিট রিপোর্টে অবদান মিলিয়ে দেখুন।",
  ),
  chartTitle: loc("Delivered orders by day", "দিনভিত্তিক ডেলিভারড অর্ডার"),
  shareTitle: loc("Share of delivered revenue", "ডেলিভারড আয়ের ভাগ"),
  days: [loc("1 Sep", "১ সেপ্টেম্বর"), loc("15 Sep", "১৫ সেপ্টেম্বর"), loc("30 Sep", "৩০ সেপ্টেম্বর")],
  campaigns: [
    loc("Facebook · Eid offer", "ফেসবুক · ঈদ অফার"),
    loc("Facebook · Visitor retargeting", "ফেসবুক · ভিজিটর রিটার্গেটিং"),
    loc("TikTok · Unboxing video", "টিকটক · আনবক্সিং ভিডিও"),
    loc("Google · Search", "গুগল · সার্চ"),
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

export const GROWTH = {
  title: loc("Bring the next sale into the same system.", "পরের বিক্রিটাও আনুন একই সিস্টেমে।"),
  body: loc(
    "Build the offer, reply to the customer and follow up—with orders connected to your stock and business records.",
    "অফার তৈরি করুন, কাস্টমারকে উত্তর দিন, ফলোআপ করুন—অর্ডার যুক্ত থাকে আপনার স্টক ও ব্যবসার তথ্যের সঙ্গে।",
  ),
  tabsLabel: loc("Growth tools", "বিক্রি বাড়ানোর টুল"),
  play: loc("Show the steps", "ধাপগুলো দেখুন"),
  replay: loc("Show again", "আবার দেখুন"),
  tabs: {
    store: {
      tab: loc("Store & campaign pages", "স্টোর ও ক্যাম্পেইন পেজ"),
      heading: loc("Create the offer. Keep the order connected.", "অফার তৈরি করুন। অর্ডার থাকুক সংযুক্ত।"),
      body: loc(
        "Build your store and campaign pages, preview the mobile checkout and send orders into your confirmation workflow.",
        "স্টোর ও ক্যাম্পেইন পেজ তৈরি করুন, মোবাইল চেকআউট দেখে নিন, আর অর্ডার পাঠান আপনার কনফার্মেশনের ধাপে।",
      ),
      ai: loc(
        "Use AI to draft product content in Bangla or English, then edit and approve it before publishing.",
        "AI দিয়ে বাংলা বা ইংরেজিতে প্রোডাক্ট কনটেন্টের খসড়া তৈরি করুন, তারপর সম্পাদনা ও অনুমোদন করে প্রকাশ করুন।",
      ),
      tracking: loc(
        "Connect supported tracking tools to send eligible events and review campaign results.",
        "সমর্থিত ট্র্যাকিং টুল যুক্ত করে উপযুক্ত ইভেন্ট পাঠান এবং ক্যাম্পেইনের ফল দেখুন।",
      ),
      small: loc("AI drafting uses metered credits.", "AI খসড়ায় ব্যবহার অনুযায়ী ক্রেডিট লাগে।"),
      link: loc("Explore stores & landing pages", "স্টোর ও ল্যান্ডিং পেজ দেখুন"),
      href: "/features/storefront",
    },
    inbox: {
      tab: loc("Inbox & follow-up", "ইনবক্স ও ফলোআপ"),
      heading: loc("Reply with the customer’s history beside you.", "কাস্টমারের ইতিহাস পাশে রেখে উত্তর দিন।"),
      body: loc(
        "See orders and returns beside supported conversations. Assign replies, prepare an order from the chat and follow up on unfinished checkouts.",
        "সমর্থিত কথোপকথনের পাশে অর্ডার ও রিটার্ন দেখুন। উত্তরের দায়িত্ব দিন, চ্যাট থেকেই অর্ডার তৈরি করুন এবং অসম্পূর্ণ চেকআউটের ফলোআপ করুন।",
      ),
      small: loc("Supported channels and message rules apply. Usage charges may apply.", "সমর্থিত চ্যানেল ও মেসেজের নিয়ম প্রযোজ্য। ব্যবহার অনুযায়ী চার্জ প্রযোজ্য হতে পারে।"),
      link: loc("Explore inbox & follow-up", "ইনবক্স ও ফলোআপ দেখুন"),
      href: "/features/omnichannel",
    },
    recovery: {
      tab: loc("Cart recovery", "কার্ট রিকভারি"),
      heading: loc("Give unfinished checkouts a clear way back.", "অসম্পূর্ণ চেকআউটকে ফেরার সহজ পথ দিন।"),
      body: loc(
        "Use supported follow-up sequences and cart-restoring links. Stop reminders when an order is placed and respect customer opt-outs.",
        "সমর্থিত ফলোআপ সিকোয়েন্স ও কার্ট ফিরিয়ে আনার লিংক ব্যবহার করুন। অর্ডার হলে রিমাইন্ডার বন্ধ করুন এবং কাস্টমারের অপ্ট-আউট মেনে চলুন।",
      ),
      small: loc("SMS, WhatsApp and email use metered credits.", "SMS, WhatsApp ও ইমেইলে ব্যবহার অনুযায়ী ক্রেডিট লাগে।"),
      link: loc("Explore cart recovery", "কার্ট রিকভারি দেখুন"),
      href: "/features/cart-recovery",
    },
  },
};

export const GROWTH_DEMO = {
  store: {
    steps: [loc("Product details", "পণ্যের তথ্য"), loc("Draft", "খসড়া"), loc("Review", "যাচাই"), loc("Published", "প্রকাশিত"), loc("Order", "অর্ডার")],
    details: loc("Wireless earbuds · ৳2,500 · 6-month warranty · Dhaka delivery", "ওয়্যারলেস ইয়ারবাড · ৳২,৫০০ · ৬ মাসের ওয়ারেন্টি · ঢাকায় ডেলিভারি"),
    draftLabel: loc("AI draft · not published", "AI খসড়া · প্রকাশিত নয়"),
    draftTitle: loc("Wireless earbuds with clear calls and a 6-month warranty", "পরিষ্কার কলিং ও ৬ মাসের ওয়ারেন্টিসহ ওয়্যারলেস ইয়ারবাড"),
    draftBody: loc("Up to 6 hours per charge. Cash on delivery in Dhaka.", "এক চার্জে ৬ ঘণ্টা পর্যন্ত। ঢাকায় ক্যাশ অন ডেলিভারি।"),
    review: loc("Edited and approved by Shanto", "শান্ত সম্পাদনা ও অনুমোদন করেছেন"),
    published: loc("Page published · mobile checkout ready", "পেজ প্রকাশিত · মোবাইল চেকআউট প্রস্তুত"),
    orderNow: loc("Order now", "অর্ডার করুন"),
    order: loc("Order #GC-10530 · waiting for confirmation", "অর্ডার #GC-10530 · কনফার্মেশনের অপেক্ষায়"),
    orderSource: loc("From the campaign page · stock checked", "ক্যাম্পেইন পেজ থেকে · স্টক যাচাই হয়েছে"),
  },
  inbox: {
    steps: [loc("Question", "প্রশ্ন"), loc("History", "ইতিহাস"), loc("Sales Entry", "সেলস এন্ট্রি"), loc("Staff saves", "স্টাফ সেভ করেন")],
    customer: loc("Farzana Karim · Messenger", "ফারজানা করিম · মেসেঞ্জার"),
    question: loc("Earbuds ta ki stock e ache? 2 ta nibo.", "Earbuds ta ki stock e ache? 2 ta nibo."),
    historyTitle: loc("Customer history", "কাস্টমারের ইতিহাস"),
    historyLine: loc("3 orders · 0 returns · nothing due", "৩টি অর্ডার · ০ রিটার্ন · কোনো বাকি নেই"),
    assigned: loc("Assigned to Rina", "রিনাকে দায়িত্ব দেওয়া হয়েছে"),
    entryTitle: loc("Sales Entry · customer loaded", "সেলস এন্ট্রি · কাস্টমার যুক্ত"),
    entryLine: loc("Wireless earbuds × 2 · 14 available", "ওয়্যারলেস ইয়ারবাড × ২ · ১৪টি উপলব্ধ"),
    save: loc("Save order", "অর্ডার সেভ করুন"),
    saved: loc("Saved by Rina · #GC-10531", "রিনা সেভ করেছেন · #GC-10531"),
    draftNote: loc("Draft until staff confirm", "স্টাফ কনফার্ম না করা পর্যন্ত খসড়া"),
  },
  recovery: {
    steps: [loc("Checkout left", "চেকআউট অসম্পূর্ণ"), loc("Reminder", "রিমাইন্ডার"), loc("Back to cart", "কার্টে ফেরা"), loc("Order placed", "অর্ডার হয়েছে")],
    left: loc("Checkout left · ৳3,240 · 3 items", "চেকআউট অসম্পূর্ণ · ৳৩,২৪০ · ৩টি পণ্য"),
    reminder: loc("Reminder 1 sent on WhatsApp · with cart link", "WhatsApp-এ রিমাইন্ডার ১ পাঠানো · কার্ট লিংকসহ"),
    reminderText: loc("Your cart is saved. Tap to finish your order.", "আপনার কার্ট সেভ করা আছে। অর্ডার শেষ করতে ট্যাপ করুন।"),
    back: loc("Cart restored from the link", "লিংক থেকে কার্ট ফিরে এসেছে"),
    placed: loc("Order #GC-10533 placed", "অর্ডার #GC-10533 হয়েছে"),
    stopped: loc("Sequence stopped: order placed", "সিকোয়েন্স বন্ধ: অর্ডার হয়েছে"),
    optout: loc("Customers who opted out are skipped", "অপ্ট-আউট করা কাস্টমার বাদ থাকেন"),
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
/* 8 · Module directory (homepage order and copy)                      */
/* ------------------------------------------------------------------ */

export const MODULE_DIRECTORY = {
  title: loc("Explore the parts your business needs.", "আপনার ব্যবসার প্রয়োজনীয় অংশগুলো দেখুন।"),
  intro: loc("Connected modules for every part of the business. Available modules and limits depend on your plan.", "ব্যবসার প্রতিটি অংশের জন্য সংযুক্ত মডিউল। কোন মডিউল ও কত সীমা পাবেন, তা প্ল্যানের ওপর নির্ভর করে।"),
  explore: loc("Explore", "দেখুন"),
  cards: [
    { slug: "courier", icon: "Truck", title: loc("Courier & COD Control", "কুরিয়ার ও COD নিয়ন্ত্রণ"), body: loc("Match courier payouts, review charge differences and follow up on unpaid amounts.", "কুরিয়ার পেআউট মিলান, চার্জের পার্থক্য যাচাই করুন এবং বাকি টাকার ফলোআপ করুন।") },
    { slug: "inventory", icon: "Boxes", title: loc("Stock, Warehouse & Purchasing", "স্টক, ওয়্যারহাউস ও পারচেজ"), body: loc("Trace purchases, stock movements, location balances and supplier dues.", "পারচেজ, স্টকের চলাচল, লোকেশনভিত্তিক ব্যালেন্স ও সাপ্লায়ারের পাওনা দেখুন।") },
    { slug: "pos", icon: "ScanBarcode", title: loc("POS & Daily Cash", "POS ও দৈনিক ক্যাশ"), body: loc("Run counter sales and compare expected cash with the closing count.", "কাউন্টারে বিক্রি করুন এবং প্রত্যাশিত ক্যাশ মিলিয়ে নিন দিনশেষের গণনার সঙ্গে।") },
    { slug: "wholesale", icon: "Handshake", title: loc("Wholesale & Collections", "পাইকারি ও আদায়"), body: loc("Connect dealer prices and credit sales to invoices and partial payments.", "ডিলার প্রাইস ও বাকিতে বিক্রি যুক্ত করুন ইনভয়েস ও আংশিক পেমেন্টের সঙ্গে।") },
    { slug: "orders", icon: "ClipboardList", title: loc("Orders & Sales Entry", "অর্ডার ও সেলস এন্ট্রি"), body: loc("Confirm online orders and prepare phone or message orders with customer context.", "অনলাইন অর্ডার কনফার্ম করুন এবং কাস্টমারের তথ্যসহ ফোন বা মেসেজের অর্ডার তৈরি করুন।") },
    { slug: "analytics", icon: "ChartPie", title: loc("Profit & Marketing Reports", "প্রফিট ও মার্কেটিং রিপোর্ট"), body: loc("Compare delivered sales and recorded costs to understand contribution.", "ডেলিভারড বিক্রি ও নথিভুক্ত খরচ মিলিয়ে অবদান বুঝুন।") },
    { slug: "storefront", icon: "Store", title: loc("Online Store & Landing Pages", "অনলাইন স্টোর ও ল্যান্ডিং পেজ"), body: loc("Present your products and offers with a clear path to checkout.", "পণ্য ও অফার দেখান চেকআউটের সহজ পথসহ।") },
    { slug: "omnichannel", icon: "MessagesSquare", title: loc("Customer Inbox & Follow-up", "কাস্টমার ইনবক্স ও ফলোআপ"), body: loc("Reply with context and follow up on unfinished checkouts through supported channels.", "প্রাসঙ্গিক তথ্যসহ উত্তর দিন এবং সমর্থিত চ্যানেলে অসম্পূর্ণ চেকআউটের ফলোআপ করুন।") },
  ],
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
/* 8b · How data moves between the modules (animated system map)       */
/* ------------------------------------------------------------------ */

type Hop = { module: string; text: Localized };

export const MODULE_FLOW: {
  label: Localized;
  hub: Localized;
  log: Localized;
  workflows: { id: string; name: Localized; hops: Hop[] }[];
  short: Record<string, Localized>;
} = {
  label: loc("How data moves through the system", "সিস্টেমে ডেটা যেভাবে চলে"),
  hub: loc("One shared record", "একটাই সংযুক্ত তথ্য"),
  log: loc("What just happened", "এইমাত্র যা হলো"),
  short: {
    courier: loc("Couriers & COD", "কুরিয়ার ও COD"),
    inventory: loc("Stock", "স্টক"),
    pos: loc("POS", "POS"),
    "cash-and-expenses": loc("Money", "টাকা"),
    orders: loc("Orders", "অর্ডার"),
    analytics: loc("Reports", "রিপোর্ট"),
    storefront: loc("Online store", "অনলাইন স্টোর"),
    omnichannel: loc("Inbox", "ইনবক্স"),
  },
  workflows: [
    {
      id: "online",
      name: loc("Online order", "অনলাইন অর্ডার"),
      hops: [
        { module: "storefront", text: loc("Order #GC-10512 placed · ৳2,500", "অর্ডার #GC-10512 এসেছে · ৳২,৫০০") },
        { module: "orders", text: loc("Confirmed by staff", "স্টাফ কনফার্ম করেছেন") },
        { module: "inventory", text: loc("1 reserved, then dispatched · 11 available", "১টি রিজার্ভ, তারপর ডিসপ্যাচ · ১১টি উপলব্ধ") },
        { module: "courier", text: loc("Delivered · payout ৳2,400 due from the courier", "ডেলিভারড · কুরিয়ারের কাছে ৳২,৪০০ পেআউট পাওনা") },
        { module: "cash-and-expenses", text: loc("Payout ৳2,400 received and matched", "৳২,৪০০ পেআউট পাওয়া ও মিলানো") },
        { module: "analytics", text: loc("Contribution ৳540 after recorded costs", "নথিভুক্ত খরচ বাদে অবদান ৳৫৪০") },
      ],
    },
    {
      id: "message",
      name: loc("Message order", "মেসেজ থেকে অর্ডার"),
      hops: [
        { module: "omnichannel", text: loc("Messenger: “2 earbuds, in stock?”", "মেসেঞ্জার: “২টা ইয়ারবাড, স্টকে আছে?”") },
        { module: "orders", text: loc("Sales Entry · order #GC-10531 saved by staff", "সেলস এন্ট্রি · #GC-10531 স্টাফ সেভ করেছেন") },
        { module: "inventory", text: loc("2 reserved · 12 available", "২টি রিজার্ভ · ১২টি উপলব্ধ") },
        { module: "courier", text: loc("Sent to courier · COD ৳5,000 due", "কুরিয়ারে পাঠানো · ৳৫,০০০ COD পাওনা") },
      ],
    },
    {
      id: "counter",
      name: loc("Counter sale", "কাউন্টার বিক্রি"),
      hops: [
        { module: "pos", text: loc("Receipt R-2291 · ৳2,450", "রসিদ R-2291 · ৳২,৪৫০") },
        { module: "inventory", text: loc("Mirpur shop · on hand 12 → 11", "মিরপুর শপ · হাতে ১২ → ১১") },
        { module: "cash-and-expenses", text: loc("৳2,450 cash in the counter drawer", "কাউন্টারের ড্রয়ারে ৳২,৪৫০ ক্যাশ") },
        { module: "analytics", text: loc("Added to today’s sales and daily summary", "আজকের বিক্রি ও দৈনিক সারাংশে যোগ") },
      ],
    },
    {
      id: "restock",
      name: loc("Restock from a supplier", "সাপ্লায়ার থেকে স্টক আনা"),
      hops: [
        { module: "inventory", text: loc("Purchase order PO-118 · 20 units received", "পারচেজ অর্ডার PO-118 · ২০টি গ্রহণ") },
        { module: "cash-and-expenses", text: loc("Supplier bill ৳48,000 · ৳20,000 paid, ৳28,000 due", "সাপ্লায়ারের বিল ৳৪৮,০০০ · ৳২০,০০০ পরিশোধ, ৳২৮,০০০ বাকি") },
        { module: "analytics", text: loc("Stock value and supplier dues updated", "স্টকের মূল্য ও সাপ্লায়ারের পাওনা হালনাগাদ") },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Real product screens used on the homepage (captured from the app)  */
/* ------------------------------------------------------------------ */

export const SHOTS: Record<string, Localized> = {
  "merchant-overview": loc("GridCommerce dashboard: today’s sales, orders, money in hand and insights", "GridCommerce ড্যাশবোর্ড: আজকের বিক্রি, অর্ডার, হাতে থাকা টাকা ও ইনসাইট"),
  stock: loc("Stock list with available, held and in-transit units for every product", "প্রতিটি পণ্যের উপলব্ধ, হোল্ড ও পথে থাকা স্টকের তালিকা"),
  "customer-profile": loc("Customer profile with total spent, orders, returns and everything the customer did", "কাস্টমার প্রোফাইল: মোট কেনাকাটা, অর্ডার, রিটার্ন ও সব কার্যক্রম"),
  "order-detail": loc("Order screen with the confirmation steps, payment review and call actions", "অর্ডার স্ক্রিন: কনফার্মেশনের ধাপ, পেমেন্ট যাচাই ও কলের অপশন"),
  "stock-activity": loc("Stock activity: every move, hold, transfer and sale with its place and reference", "স্টক অ্যাক্টিভিটি: প্রতিটি চলাচল, হোল্ড, ট্রান্সফার ও বিক্রি"),
  "courier-statement": loc("Courier statement: dispatched, delivered, returned, COD collected and payout due per courier", "কুরিয়ার স্টেটমেন্ট: প্রতি কুরিয়ারের ডিসপ্যাচ, ডেলিভারি, রিটার্ন, COD ও পাওনা পেআউট"),
  "sales-profit": loc("Sales and profit report with net sales, gross profit and profit by channel", "বিক্রি ও মুনাফার রিপোর্ট: নিট বিক্রি, গ্রস প্রফিট ও চ্যানেলভিত্তিক মুনাফা"),
  "analytics-hub": loc("Analytics hub: ad spend against delivered revenue by platform", "অ্যানালিটিক্স হাব: প্ল্যাটফর্মভিত্তিক বিজ্ঞাপন খরচ ও ডেলিভারড আয়"),
  "daily-summary": loc("Daily summary: sales by channel, online orders and money at closing", "দৈনিক সারাংশ: চ্যানেলভিত্তিক বিক্রি, অনলাইন অর্ডার ও দিনশেষের টাকা"),
  "woo-sync": loc("WordPress sync: store connected, with what syncs and the latest changes", "ওয়ার্ডপ্রেস সিঙ্ক: সংযুক্ত স্টোর, কী সিঙ্ক হয় ও সর্বশেষ পরিবর্তন"),
  "landing-page-builder": loc("Landing page builder with page parts, price and offer, and a mobile preview", "ল্যান্ডিং পেজ বিল্ডার: পেজের অংশ, দাম ও অফার এবং মোবাইল প্রিভিউ"),
  "merchant-inbox": loc("Inbox with chats from every channel beside the conversation", "সব চ্যানেলের চ্যাটসহ ইনবক্স"),
  "abandoned-carts": loc("Abandoned carts with reminders, recovered orders and recovery rate", "অসম্পূর্ণ কার্ট: রিমাইন্ডার, ফেরত আসা অর্ডার ও রিকভারি রেট"),
};

export const REPORT_TOGGLE = loc("See the full campaign report", "পুরো ক্যাম্পেইন রিপোর্ট দেখুন");

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

export const MIGRATION_DEMO = {
  title: loc("Migration assistant", "মাইগ্রেশন অ্যাসিস্ট্যান্ট"),
  from: loc("From", "যেখান থেকে"),
  source: loc("dazzleshop.com.bd · WordPress", "dazzleshop.com.bd · ওয়ার্ডপ্রেস"),
  connected: loc("Connected", "সংযুক্ত"),
  importing: loc("Importing", "আনা হচ্ছে"),
  done: loc("Done", "সম্পন্ন"),
  ready: loc("Test import ready to review", "টেস্ট ইমপোর্ট দেখার জন্য প্রস্তুত"),
  rows: [
    { key: "customers", label: loc("Customers", "কাস্টমার"), total: 1204 },
    { key: "orders", label: loc("Past orders", "পুরনো অর্ডার"), total: 3882 },
    { key: "products", label: loc("Products", "পণ্য"), total: 268 },
    { key: "pages", label: loc("Pages & blog posts", "পেজ ও ব্লগ পোস্ট"), total: 34 },
  ],
};
