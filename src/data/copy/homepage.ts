/**
 * Homepage copy, English and Bangla side by side.
 *
 * Voice: very simple words, short sentences, straight to the point. Speak to
 * the seller's daily problems in the words they use themselves — orders,
 * COD money, courier, stock, profit, Facebook page, inbox, ads. Friendly but
 * never slangy; no vague phrases.
 *
 * Claims stay with what the merchant app does. Figures inside the animated
 * scenes are demo data.
 */
import { loc, type Localized } from "@/i18n/types";

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const HERO = {
  line1: loc("Your orders, stock and COD,", "আপনার অর্ডার, স্টক আর COD,"),
  line2: loc("in one place.", "এক জায়গায়।"),
  body: loc(
    "A message becomes an order. The order takes its stock, books its courier and shows when the COD money has really reached you. One record, every step on it.",
    "একটি মেসেজ অর্ডার হয়। অর্ডারটি নিজের স্টক নেয়, কুরিয়ার বুক করে, আর COD-এর টাকা সত্যিই কখন আপনার হাতে এল তা দেখায়। একটি রেকর্ড, তার ওপর প্রতিটি ধাপ।",
  ),
  microcopy: loc(
    "We’ll show you how it works for your business.",
    "আপনার ব্যবসায় কীভাবে কাজ করবে, আমরা দেখিয়ে দেব।",
  ),
  fit: [loc("Online sellers", "অনলাইন সেলার"), loc("Shops with a counter", "কাউন্টারওয়ালা দোকান"), loc("Wholesalers", "পাইকারি ব্যবসা")],
  fitLabel: loc("Made for", "যাদের জন্য"),
};

/* Extra words for the hero variants being compared (?hero). */
export const HERO_VARIANTS = {
  announce: loc("New: courier delivery history on every COD order", "নতুন: প্রতিটি COD অর্ডারে কুরিয়ারের ডেলিভারি ইতিহাস"),
  trial: loc("Start free trial", "ফ্রি ট্রায়াল শুরু করুন"),
  /* No customer count is shown until there is one to cite (docs/homepage-storyboard.md › facts needed). */
  trust: loc("Made for online sellers and shops in Bangladesh", "বাংলাদেশের অনলাইন সেলার আর দোকানের জন্য"),
  stats: [
    { value: "3", label: loc("Couriers booked from the order", "অর্ডার থেকেই কুরিয়ার বুক") },
    { value: "15", label: loc("Day free trial", "দিনের ফ্রি ট্রায়াল") },
    { value: "2", label: loc("Languages: Bangla and English", "ভাষা: বাংলা আর ইংরেজি") },
  ],
  checks: [
    loc("Each courier payout matched to its orders", "প্রতিটি কুরিয়ার পেআউট তার অর্ডারের সাথে মেলানো"),
    loc("Risky COD orders reviewed before shipping", "ঝুঁকিপূর্ণ COD অর্ডার শিপের আগে খতিয়ে দেখা"),
    loc("Every chat in one inbox", "সব চ্যাট এক ইনবক্সে"),
  ],
  strip: [
    { icon: "ShieldCheck", text: loc("Courier history checked before a COD parcel", "COD পার্সেলের আগে কুরিয়ার ইতিহাস যাচাই") },
    { icon: "Truck", text: loc("Pathao, Steadfast and RedX booked from the order", "অর্ডার থেকেই Pathao, Steadfast আর RedX বুক") },
    { icon: "Wallet", text: loc("COD money matched to every order", "প্রতিটি অর্ডারের সাথে COD-এর টাকা মেলানো") },
  ],
  newOrder: loc("New order", "নতুন অর্ডার"),
  booked: loc("Booked with Pathao", "Pathao-তে বুকড"),
  aiReady: loc("AI reply ready", "AI উত্তর তৈরি"),
  /* Product lanes hero (variant 8), from the "Grid Commerce" landing page. */
  lanes: {
    tag: loc("For Facebook-first COD sellers in Bangladesh", "বাংলাদেশের Facebook-নির্ভর COD সেলারদের জন্য"),
    sub: loc("Confirm orders, ship with any courier, and see profit on delivered orders.", "অর্ডার কনফার্ম করুন, যেকোনো কুরিয়ারে পাঠান, আর ডেলিভারড অর্ডারে লাভ দেখুন।"),
    watch: loc("See how it works", "কীভাবে কাজ করে দেখুন"),
    cards: {
      newOrder: loc("New order", "নতুন অর্ডার"),
      codMatched: loc("COD matched", "COD মিলেছে"),
      byCall: loc("Confirmed by call", "কলে কনফার্মড"),
      pickedUp: loc("Picked up", "পিকআপ হয়েছে"),
      returned: loc("Return received", "রিটার্ন এসেছে"),
      delivered: loc("Delivered order", "ডেলিভারড অর্ডার"),
      owed: loc("Owed by couriers", "কুরিয়ারের কাছে পাওনা"),
      transit: loc("In transit", "পথে আছে"),
      mirpur: loc("Mirpur, Dhaka", "মিরপুর, ঢাকা"),
      agrabad: loc("Agrabad, Chattogram", "আগ্রাবাদ, চট্টগ্রাম"),
      sylhet: loc("Zindabazar, Sylhet", "জিন্দাবাজার, সিলেট"),
      fbCod: loc("Facebook page · COD ৳1,450", "Facebook পেজ · COD ৳১,৪৫০"),
      phoneCod: loc("Phone order · COD ৳2,180", "ফোন অর্ডার · COD ৳২,১৮০"),
      steadfastPayout: loc("Steadfast payout", "Steadfast পেআউট"),
      orders27: loc("27 orders", "২৭টি অর্ডার"),
      items2: loc("#GC-20431 · 2 items", "#GC-20431 · ২টি পণ্য"),
      parcels12: loc("12 parcels", "১২টি পার্সেল"),
      dhanmondi: loc("Pathao · Dhanmondi hub", "Pathao · ধানমন্ডি হাব"),
      backInStock: loc("Back in stock", "স্টকে ফেরত"),
      refused: loc("#GC-20288 · Customer refused", "#GC-20288 · কাস্টমার নেননি"),
      afterAds: loc("Profit after ads", "বিজ্ঞাপন বাদে লাভ"),
      pathaoSteadfast: loc("Pathao and Steadfast", "Pathao আর Steadfast"),
      steadfastId: loc("Steadfast · #GC-20402", "Steadfast · #GC-20402"),
    },
  },
  /* Store gallery hero (variant 7). */
  store: {
    trust: loc("Trusted by 100+ ecommerce businesses", "১০০+ ই-কমার্স ব্যবসার আস্থা"),
    title: loc("Your online store, with COD and couriers built in", "আপনার অনলাইন স্টোর, COD আর কুরিয়ারসহ"),
    points: [
      loc("Ready-made store themes, your brand", "রেডিমেড স্টোর থিম, আপনার ব্র্যান্ড"),
      loc("No commission on your sales", "বিক্রিতে কোনো কমিশন নেই"),
      loc("Pathao, Steadfast and RedX in one click", "এক ক্লিকে Pathao, Steadfast আর RedX"),
    ],
    from: loc("From", "শুরু"),
    perMonth: loc("/mo", "/মাস"),
    trialNote: loc("15-day free trial on every plan", "প্রতিটি প্ল্যানে ১৫ দিনের ফ্রি ট্রায়াল"),
    start: loc("Start free trial", "ফ্রি ট্রায়াল শুরু করুন"),
    fitTitle: loc("Is GridCommerce right for you?", "GridCommerce কি আপনার জন্য?"),
    fitLink: loc("Compare with Shopify and WordPress", "Shopify আর WordPress-এর সাথে তুলনা"),
  },
  /* Live order feed hero (variant 6). */
  feed: {
    pill: loc("Selling for Puja and Eid", "পূজা আর ঈদের বিক্রি চলছে"),
    watch: loc("See how it works", "কীভাবে কাজ করে দেখুন"),
    businesses: loc("Built with sellers in Dhaka, Chattogram and Sylhet", "ঢাকা, চট্টগ্রাম আর সিলেটের সেলারদের সাথে তৈরি"),
    couriers: loc("Couriers booked from the order", "অর্ডার থেকেই কুরিয়ার বুক"),
    channels: loc("Every chat in one inbox", "সব চ্যাট এক ইনবক্সে"),
    days: [
      { day: loc("SAT", "শনি"), date: loc("12 Oct", "১২ অক্টো") },
      { day: loc("SUN", "রবি"), date: loc("13 Oct", "১৩ অক্টো") },
      { day: loc("MON", "সোম"), date: loc("14 Oct", "১৪ অক্টো") },
      { day: loc("TUE", "মঙ্গল"), date: loc("15 Oct", "১৫ অক্টো") },
    ],
    kinds: {
      confirmed: loc("Order confirmed", "অর্ডার কনফার্মড"),
      booked: loc("Booked with Pathao", "Pathao-তে বুকড"),
      delivered: loc("Delivered", "ডেলিভারড"),
      payout: loc("COD payout", "COD পেআউট"),
      fake: loc("Fake order stopped", "ফেক অর্ডার আটকানো"),
      chat: loc("Order from chat", "চ্যাট থেকে অর্ডার"),
    },
  },
  /* Spotlight hero slides: what each photo's seller is doing in GridCommerce. */
  slides: {
    shop: loc("Boutique owner", "বুটিকের মালিক"),
    live: loc("Skincare seller going live", "লাইভে স্কিনকেয়ার সেলার"),
    stock: loc("Packing and scanning stock", "প্যাকিং আর স্টক স্ক্যান"),
    liveComment: loc("Serum ta koto?", "Serum ta koto?"),
    liveReply: loc("৳850. Order korben?", "৳850. Order korben?"),
    liveOrders: loc("Orders from this live", "এই লাইভ থেকে অর্ডার"),
    fromComments: loc("Order made from a comment", "কমেন্ট থেকে অর্ডার"),
    scanned: loc("Scanned · Earbuds Pro", "স্ক্যান হয়েছে · Earbuds Pro"),
    stockLeft: loc("in stock", "স্টকে আছে"),
    parcels: loc("6 parcels booked", "৬টি পার্সেল বুকড"),
    labels: loc("6 labels printed", "৬টি লেবেল প্রিন্ট"),
    lowRisk: loc("Low risk · 83% delivered", "কম ঝুঁকি · ৮৩% ডেলিভারড"),
    go: loc("Show slide", "স্লাইড দেখুন"),
  },
  codIn: loc("COD received", "COD পাওয়া গেছে"),
  todayOrders: loc("Orders today", "আজকের অর্ডার"),
  codDue: loc("COD with couriers", "কুরিয়ারের কাছে COD"),
  sales: loc("Sales this week", "এই সপ্তাহের বিক্রি"),
  balance: loc("Courier balance", "কুরিয়ার ব্যালেন্স"),
  matched: loc("Matched", "মিলেছে"),
  columns: [loc("To confirm", "কনফার্ম বাকি"), loc("To ship", "শিপ বাকি"), loc("Delivered", "ডেলিভারড")],
  menu: [loc("Dashboard", "ড্যাশবোর্ড"), loc("Orders", "অর্ডার"), loc("Inbox", "ইনবক্স"), loc("Couriers", "কুরিয়ার"), loc("Stock", "স্টক"), loc("Fraud check", "ফ্রড চেক"), loc("Reports", "রিপোর্ট")],
  greeting: loc("Good morning, Shanto", "শুভ সকাল, শান্ত"),
  overview: loc("Here is your shop today.", "আজ আপনার দোকানের অবস্থা।"),
  recent: loc("Recent orders", "সাম্প্রতিক অর্ডার"),
  status: [loc("Confirmed", "কনফার্মড"), loc("Shipped", "শিপড"), loc("Delivered", "ডেলিভারড"), loc("Paid", "পেইড")],
  names: { a: "Nusrat", b: "Rafi", c: "Mitu" },
  panel: {
    title: loc("Hero preview", "হিরো প্রিভিউ"),
    options: [
      loc("Current: aurora + gallery", "বর্তমান: অরোরা + গ্যালারি"),
      loc("1 · Spotlight photo", "১ · স্পটলাইট ছবি"),
      loc("2 · Tilted dashboard", "২ · বাঁকা ড্যাশবোর্ড"),
      loc("3 · Centered + dashboard", "৩ · মাঝখানে + ড্যাশবোর্ড"),
      loc("4 · Highlight + side cards", "৪ · হাইলাইট + পাশের কার্ড"),
      loc("5 · Phones + name tags", "৫ · ফোন + নামের ট্যাগ"),
      loc("6 · Live order feed", "৬ · লাইভ অর্ডার ফিড"),
      loc("7 · Store gallery + price", "৭ · স্টোর গ্যালারি + দাম"),
      loc("8 · Product lanes", "৮ · প্রোডাক্ট লেন"),
      loc("9 · Widget feed", "৯ · উইজেট ফিড"),
    ],
  },
};

/* ------------------------------------------------------------------ */
/* One order, from new order to money in the bank                     */
/* ------------------------------------------------------------------ */

export const STORY = {
  eyebrow: loc("Order to money", "অর্ডার থেকে টাকা"),
  title: loc("Follow an order all the way to payment.", "একটি অর্ডারকে পেমেন্ট পর্যন্ত অনুসরণ করুন।"),
  body: loc(
    "A delivered parcel is not money in your hand. GridCommerce keeps the delivery status and the payment status apart, so you always know what the courier still owes you.",
    "পার্সেল ডেলিভারি হওয়া মানেই টাকা হাতে আসা নয়। GridCommerce ডেলিভারির অবস্থা আর পেমেন্টের অবস্থা আলাদা রাখে, তাই কুরিয়ারের কাছে কত পাওনা আছে আপনি সবসময় জানেন।",
  ),
  link: loc("See how orders work", "অর্ডার কীভাবে চলে দেখুন"),
};

/* ------------------------------------------------------------------ */
/* What needs attention today                                          */
/* ------------------------------------------------------------------ */

export const CONTROL = {
  title: loc("Know what needs your attention today.", "আজ কোন কাজে নজর দিতে হবে, জানুন।"),
  body: loc(
    "Open GridCommerce in the morning and see what is waiting: orders to confirm, COD money still with couriers, stock running low. Resolve one, and only that number changes.",
    "সকালে GridCommerce খুললেই দেখবেন কী অপেক্ষায়: কোন অর্ডার কনফার্ম বাকি, কুরিয়ারের কাছে কত COD, কোন স্টক কমে আসছে। একটি কাজ শেষ করলে শুধু সেই সংখ্যাটাই বদলায়।",
  ),
  cards: [
    {
      icon: "ClipboardList",
      title: loc("Orders waiting", "অপেক্ষায় থাকা অর্ডার"),
      body: loc(
        "See which orders need confirming, packing or shipping, and how long they have waited.",
        "কোন অর্ডার কনফার্ম, প্যাকিং বা শিপিংয়ের অপেক্ষায়, আর কতক্ষণ ধরে—দেখুন।",
      ),
      links: [{ href: "/features/orders", label: loc("Manage orders", "অর্ডার সামলান") }],
    },
    {
      icon: "Banknote",
      title: loc("Money not received yet", "যে টাকা এখনো আসেনি"),
      body: loc(
        "Track COD money with Pathao, Steadfast and RedX until it reaches you. Nothing gets forgotten.",
        "Pathao, Steadfast আর RedX-এর কাছে থাকা COD-এর টাকা আপনার হাতে না আসা পর্যন্ত ট্র্যাক করুন। কিছুই ভুলে যাবেন না।",
      ),
      links: [{ href: "/features/courier", label: loc("Track courier money", "কুরিয়ারের টাকা ট্র্যাক করুন") }],
    },
    {
      icon: "ChartPie",
      title: loc("Real profit on every sale", "প্রতিটি বিক্রিতে আসল লাভ"),
      body: loc(
        "See what is left after product cost, delivery charge, returns and ads.",
        "প্রোডাক্টের দাম, ডেলিভারি চার্জ, রিটার্ন আর বিজ্ঞাপনের খরচ বাদে কত থাকে—দেখুন।",
      ),
      links: [{ href: "/features/analytics", label: loc("See profit reports", "লাভের রিপোর্ট দেখুন") }],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Dedicated feature sections, each beside its animated scene          */
/* ------------------------------------------------------------------ */

export const FEATURES = {
  fraud: {
    eyebrow: loc("Fraud check", "ফ্রড চেক"),
    title: loc("Review risky orders before you ship.", "শিপের আগে ঝুঁকিপূর্ণ অর্ডার খতিয়ে দেখুন।"),
    body: loc(
      "A parcel that comes back costs you the delivery charge both ways. Before you ship a COD order, GridCommerce shows the phone number’s delivery history from the couriers that share it, so you decide with evidence: ask for an advance, call first, or ship.",
      "ফেরত আসা পার্সেলে দুই দিকের ডেলিভারি চার্জ আপনার। COD অর্ডার পাঠানোর আগে GridCommerce ফোন নম্বরটির ডেলিভারি ইতিহাস দেখায়, যা কুরিয়াররা শেয়ার করে—তাই প্রমাণ দেখে আপনি ঠিক করেন: অ্যাডভান্স চাইবেন, আগে কল করবেন, না পাঠাবেন।",
    ),
    points: [
      loc("Delivered and returned count for every number", "প্রতিটি নম্বরের ডেলিভারড আর ফেরতের হিসাব"),
      loc("A clear reason with every flag, never an automatic block", "প্রতিটি সতর্কতার সাথে কারণ, কোনো স্বয়ংক্রিয় ব্লক নয়"),
      loc("Ask for advance payment, turn off COD or block a number", "অ্যাডভান্স চান, COD বন্ধ করুন বা নম্বর ব্লক করুন"),
    ],
    small: loc("Courier history depends on the records each courier shares.", "কুরিয়ার হিস্টরি নির্ভর করে প্রতিটি কুরিয়ারের দেওয়া তথ্যের ওপর।"),
    link: loc("See order protection", "অর্ডার সুরক্ষা দেখুন"),
    href: "/features/orders",
  },
  inbox: {
    eyebrow: loc("Inbox", "ইনবক্স"),
    title: loc("Turn a customer conversation into an order.", "কাস্টমারের কথোপকথন থেকেই অর্ডার।"),
    body: loc(
      "Messenger, WhatsApp and Instagram chats come to one inbox. Stock and price sit beside the conversation, GridAI drafts the reply for you to approve, and the order is created from the chat with the customer and product already filled in.",
      "Messenger, WhatsApp আর Instagram-এর চ্যাট আসে এক ইনবক্সে। কথোপকথনের পাশেই স্টক আর দাম, GridAI উত্তরের খসড়া করে আর আপনি অনুমোদন দেন, আর চ্যাট থেকেই কাস্টমার-পণ্যসহ অর্ডার তৈরি হয়।",
    ),
    points: [
      loc("Never miss a customer message", "কোনো কাস্টমারের মেসেজ আর মিস হবে না"),
      loc("GridAI drafts in Bangla or English; you approve before it goes", "GridAI বাংলা বা ইংরেজিতে খসড়া করে; যাওয়ার আগে আপনি অনুমোদন দেন"),
      loc("Turn a chat into an order in one click", "এক ক্লিকে চ্যাট থেকে অর্ডার"),
    ],
    small: loc("Works with supported channels. Message charges may apply.", "সমর্থিত চ্যানেলে কাজ করে। মেসেজের চার্জ লাগতে পারে।"),
    link: loc("See the inbox", "ইনবক্স দেখুন"),
    href: "/features/omnichannel",
  },
  store: {
    eyebrow: loc("Landing pages", "ল্যান্ডিং পেজ"),
    title: loc("Make a sales page for one product. Its orders land in Orders.", "একটি পণ্যের সেলস পেজ বানান। তার অর্ডার আসে অর্ডার তালিকায়।"),
    body: loc(
      "Pick a product and GridAI drafts the page. You check it and publish. Customers order on the page with cash on delivery, and every order shows which page it came from.",
      "একটি পণ্য বাছুন, GridAI পেজের খসড়া লেখে। আপনি দেখে নিয়ে পাবলিশ করেন। কাস্টমার পেজ থেকে ক্যাশ অন ডেলিভারিতে অর্ডার করেন, আর প্রতিটি অর্ডারে লেখা থাকে কোন পেজ থেকে এল।",
    ),
    points: [
      loc("GridAI drafts it; you check and publish", "GridAI খসড়া লেখে; আপনি দেখে পাবলিশ করেন"),
      loc("A mobile order form with cash on delivery", "ক্যাশ অন ডেলিভারিসহ মোবাইল অর্ডার ফর্ম"),
      loc("Every order shows the page it came from", "প্রতিটি অর্ডারে লেখা থাকে কোন পেজ থেকে এল"),
    ],
    small: loc("AI drafting uses credits. Ad tracking is set up once for the whole store, under Pixels & events.", "AI দিয়ে খসড়ায় ক্রেডিট লাগে। অ্যাড ট্র্যাকিং পুরো স্টোরের জন্য একবার সেট হয়, Pixels & events-এ।"),
    link: loc("See landing pages", "ল্যান্ডিং পেজ দেখুন"),
    href: "/features/storefront",
  },
  tracking: {
    eyebrow: loc("Ad tracking", "অ্যাড ট্র্যাকিং"),
    title: loc("Let your ad platforms see every real sale.", "আপনার অ্যাড প্ল্যাটফর্ম যেন প্রতিটি আসল বিক্রি দেখতে পায়।"),
    body: loc(
      "A browser pixel alone misses orders. GridCommerce records each order once, even when the pixel and our server both report it, and sends it to the ad accounts you connect: Meta, Google and TikTok. When the parcel is delivered, that goes out as its own event.",
      "শুধু ব্রাউজারের পিক্সেল অনেক অর্ডার ধরতে পারে না। পিক্সেল আর আমাদের সার্ভার দুটোই জানালেও GridCommerce প্রতিটি অর্ডার একবারই রেকর্ড করে, আর আপনার যুক্ত করা অ্যাড অ্যাকাউন্টে পাঠায়: Meta, Google আর TikTok। পার্সেল ডেলিভারি হলে সেটি আলাদা ইভেন্ট হিসেবে যায়।",
    ),
    points: [
      loc("Each event counted once, by its ID", "প্রতিটি ইভেন্ট তার ID দিয়ে একবারই গোনা"),
      loc("Meta, Google and TikTok, through your own accounts", "Meta, Google আর TikTok, আপনার নিজের অ্যাকাউন্টে"),
      loc("Order placed and delivered are two separate events", "অর্ডার হওয়া আর ডেলিভারি দুটি আলাদা ইভেন্ট"),
    ],
    small: loc("You connect your own ad accounts. Ad cost per delivered order comes from the Marketing report; the per-order figures in the example are illustrative.", "আপনার নিজের অ্যাড অ্যাকাউন্ট যুক্ত করবেন। ডেলিভারড অর্ডারপ্রতি বিজ্ঞাপন খরচ আসে মার্কেটিং রিপোর্ট থেকে; উদাহরণের অর্ডারপ্রতি হিসাবটি নমুনা।"),
    link: loc("See ad tracking", "অ্যাড ট্র্যাকিং দেখুন"),
    href: "/features/analytics",
  },
  social: {
    eyebrow: loc("Social media", "সোশ্যাল মিডিয়া"),
    title: loc("Post to Facebook, Instagram, TikTok, YouTube, X and LinkedIn from one place.", "এক জায়গা থেকে Facebook, Instagram, TikTok, YouTube, X আর LinkedIn-এ পোস্ট করুন।"),
    body: loc(
      "Write the post once, pick the platforms and set a time. It is published on schedule with one status per platform, and the comments come to your Inbox.",
      "একবার পোস্ট লিখুন, প্ল্যাটফর্ম বাছুন আর সময় ঠিক করুন। শিডিউল মতো পাবলিশ হয়, প্ল্যাটফর্মপ্রতি একটি অবস্থা দেখায়, আর কমেন্ট আসে আপনার ইনবক্সে।",
    ),
    logos: [
      { name: "Facebook", src: "/integrations/facebook-page.png" },
      { name: "Instagram", src: "/integrations/instagram.png" },
      { name: "TikTok", src: "/integrations/tiktok-ads.png" },
      { name: "YouTube", src: "/integrations/youtube.png" },
      { name: "X", src: "/integrations/x.png" },
      { name: "LinkedIn", src: "/integrations/linkedin.png" },
    ],
    points: [
      loc("Write once; each platform shows its own rule, such as X’s 280 characters", "একবার লিখুন; প্রতিটি প্ল্যাটফর্ম নিজের নিয়ম দেখায়, যেমন X-এর ২৮০ অক্ষর"),
      loc("Set a date and time; it goes out on its own", "তারিখ আর সময় ঠিক করুন; নিজে থেকেই যাবে"),
      loc("Comments and messages come to the same Inbox", "কমেন্ট আর মেসেজ আসে একই ইনবক্সে"),
    ],
    small: loc("Also Pinterest and WhatsApp broadcasts. WhatsApp Channel and Facebook groups get a reminder with the text ready to copy. LinkedIn posts go to company pages.", "Pinterest আর WhatsApp ব্রডকাস্টও। WhatsApp Channel আর Facebook গ্রুপে যায় কপি করার জন্য টেক্সটসহ রিমাইন্ডার। LinkedIn-এ পোস্ট যায় কোম্পানি পেজে।"),
    link: loc("See social posts", "সোশ্যাল পোস্ট দেখুন"),
    href: "/features/omnichannel",
  },
  recovery: {
    eyebrow: loc("Abandoned carts", "ফেলে যাওয়া কার্ট"),
    title: loc("Bring back customers who left their cart.", "যারা কার্ট ফেলে চলে গেছেন, তাদের ফিরিয়ে আনুন।"),
    body: loc(
      "When someone leaves a cart, GridCommerce waits, checks that they agreed to messages and that it is not quiet hours, then sends a WhatsApp or SMS reminder with a link back to the cart. Once they order, the remaining reminders are cancelled.",
      "কেউ কার্ট ফেলে গেলে GridCommerce অপেক্ষা করে, দেখে নেয় তিনি মেসেজে রাজি আর এখন নিরব সময় নয়, তারপর কার্টে ফেরার লিংকসহ WhatsApp বা SMS রিমাইন্ডার পাঠায়। অর্ডার করলেই বাকি রিমাইন্ডার বাতিল।",
    ),
    points: [
      loc("First reminder after 1 hour, then 24 hours, then 3 days. You set the steps.", "প্রথম রিমাইন্ডার ১ ঘণ্টা পর, তারপর ২৪ ঘণ্টা, তারপর ৩ দিন। ধাপ আপনি ঠিক করেন।"),
      loc("Sent only with the customer’s consent and outside quiet hours", "শুধু কাস্টমারের সম্মতিতে আর নিরব সময়ের বাইরে পাঠানো হয়"),
      loc("Reminders stop the moment they order", "অর্ডার করার সাথে সাথেই রিমাইন্ডার বন্ধ"),
    ],
    small: loc("SMS, WhatsApp and email use credits.", "SMS, WhatsApp ও ইমেইলে ক্রেডিট লাগে।"),
    link: loc("See cart recovery", "কার্ট রিকভারি দেখুন"),
    href: "/features/cart-recovery",
  },
};

/* ------------------------------------------------------------------ */
/* Moving from Shopify or WordPress                                    */
/* ------------------------------------------------------------------ */

export const MIGRATION = {
  eyebrow: loc("Moving over", "চলে আসা"),
  title: loc("Moving from Shopify or WooCommerce? Bring your products, customers and past orders.", "Shopify বা WooCommerce থেকে আসছেন? প্রোডাক্ট, কাস্টমার আর আগের অর্ডার নিয়ে আসুন।"),
  body: loc(
    "Export them from your old store as files. GridCommerce reads each file, checks a sample with you first — rows read, problems listed, nothing saved until you confirm — and then imports the rest. Past orders come in as history; customers are matched by phone number.",
    "পুরনো স্টোর থেকে ফাইলে এক্সপোর্ট করুন। GridCommerce প্রতিটি ফাইল পড়ে, আগে আপনার সাথে একটি নমুনা যাচাই করে — কত সারি পড়া হলো, কোথায় সমস্যা, কনফার্ম না করা পর্যন্ত কিছু সেভ হয় না — তারপর বাকিটা ইমপোর্ট করে। আগের অর্ডার ইতিহাস হিসেবে আসে; কাস্টমার ফোন নম্বরে মিলে যায়।",
  ),
  cta: loc("Plan my move", "আমার মুভ পরিকল্পনা করুন"),
  link: loc("See how moving works", "কীভাবে চলে আসবেন দেখুন"),
  note: loc("Need help? Our team can run the import with you, as a service.", "সাহায্য লাগবে? আমাদের টিম সার্ভিস হিসেবে আপনার সাথে ইমপোর্টটি করে দিতে পারে।"),
};

/* ------------------------------------------------------------------ */
/* Integrations diagram and the GridAI section                         */
/* ------------------------------------------------------------------ */

export const CONNECT = {
  /* The selectable diagram (sections/Integrations.tsx). Groups and apps follow the merchant app's Connections page;
     every sentence says what the connection does for the owner, in plain words. */
  integrations: {
    title: loc("See what connects, and what moves.", "কী যুক্ত হয়, আর কী আসা-যাওয়া করে, দেখুন।"),
    label: loc("Integrations", "ইন্টিগ্রেশন"),
    body: loc(
      "Tap an app to see what the connection does for you. Every connection is made once, in Settings › Connections; after that the work goes back and forth on the order, product or chat it belongs to.",
      "কোনো অ্যাপে ট্যাপ করে দেখুন সংযোগটি আপনার জন্য কী করে। প্রতিটি সংযোগ একবার হয়, Settings › Connections-এ; তারপর কাজটা যে অর্ডার, প্রোডাক্ট বা চ্যাটের, সেখানেই আসা-যাওয়া করে।",
    ),
    hint: loc("Tap or focus an app", "কোনো অ্যাপে ট্যাপ করুন"),
    hub: loc("GridCommerce", "GridCommerce"),
    sends: loc("GridCommerce sends", "GridCommerce পাঠায়"),
    gets: loc("Comes back", "ফিরে আসে"),
    groups: {
      sell: { label: loc("Sell online", "অনলাইনে বিক্রি"), out: loc("Products, prices, stock", "প্রোডাক্ট, দাম, স্টক"), in: loc("Orders", "অর্ডার") },
      social: { label: loc("Inbox & social", "ইনবক্স ও সোশ্যাল"), out: loc("Replies, posts", "উত্তর, পোস্ট"), in: loc("Messages, comments, reviews", "মেসেজ, কমেন্ট, রিভিউ") },
      ads: { label: loc("Ads & tracking", "বিজ্ঞাপন ও ট্র্যাকিং"), out: loc("Sales events", "বিক্রির ইভেন্ট"), in: loc("Ad spend, visitors", "বিজ্ঞাপনের খরচ, ভিজিটর") },
      payments: { label: loc("Payments", "পেমেন্ট"), out: loc("Checkout, payment links", "চেকআউট, পেমেন্ট লিংক"), in: loc("Payments, matched to the order", "পেমেন্ট, অর্ডারের সাথে মিলিয়ে") },
      delivery: { label: loc("Delivery", "ডেলিভারি"), out: loc("Parcel booking", "পার্সেল বুকিং"), in: loc("Tracking, delivery updates, COD payout", "ট্র্যাকিং, ডেলিভারি আপডেট, COD পেআউট") },
      messages: { label: loc("SMS & email", "SMS ও ইমেইল"), out: loc("Order updates, codes", "অর্ডার আপডেট, কোড"), in: loc("Sent or failed, per message", "পাঠানো বা ব্যর্থ, প্রতিটি মেসেজের") },
    },
    apps: {
      woocommerce: loc("Products, prices and stock sync to your WordPress store; its orders come into Orders.", "প্রোডাক্ট, দাম আর স্টক আপনার WordPress স্টোরে সিঙ্ক হয়; তার অর্ডার আসে Orders-এ।"),
      shopify: loc("Products, prices and stock sync to your Shopify store; its orders come into Orders.", "প্রোডাক্ট, দাম আর স্টক আপনার Shopify স্টোরে সিঙ্ক হয়; তার অর্ডার আসে Orders-এ।"),
      "meta-catalog": loc("Your products, prices and stock go to your Facebook and Instagram shop. A sync problem shows in plain words with its fix.", "আপনার প্রোডাক্ট, দাম আর স্টক Facebook ও Instagram শপে যায়। সিঙ্কের সমস্যা সহজ ভাষায় সমাধানসহ দেখায়।"),
      facebook: loc("Messenger chats and comments come into the Inbox, where a chat becomes an order. Your posts go out from Social posts.", "Messenger চ্যাট আর কমেন্ট ইনবক্সে আসে, যেখানে চ্যাট থেকে অর্ডার হয়। আপনার পোস্ট যায় Social posts থেকে।"),
      instagram: loc("Direct messages and comments come into the Inbox; posts are scheduled with the rest.", "ডাইরেক্ট মেসেজ আর কমেন্ট ইনবক্সে আসে; পোস্ট বাকিগুলোর সাথে শিডিউল হয়।"),
      whatsapp: loc("Chats come into the Inbox. Cart reminders can go out on WhatsApp (message credits apply).", "চ্যাট ইনবক্সে আসে। কার্ট রিমাইন্ডার WhatsApp-এ যেতে পারে (মেসেজ ক্রেডিট লাগে)।"),
      tiktok: loc("Messages and comments come into the Inbox; videos are scheduled from Social posts.", "মেসেজ আর কমেন্ট ইনবক্সে আসে; ভিডিও Social posts থেকে শিডিউল হয়।"),
      youtube: loc("Comments come into the Inbox; videos are scheduled from Social posts.", "কমেন্ট ইনবক্সে আসে; ভিডিও Social posts থেকে শিডিউল হয়।"),
      gbp: loc("Google reviews come into the Inbox with a reply draft for you to send; hours, photos and posts are managed from one page.", "Google রিভিউ ইনবক্সে আসে, পাঠানোর জন্য উত্তরের খসড়াসহ; সময়সূচি, ছবি আর পোস্ট এক পেজ থেকে সামলানো।"),
      "meta-ads": loc("Each sale is sent from our server to Meta as a purchase event, and your ad spend sits beside the sales it brought.", "প্রতিটি বিক্রি আমাদের সার্ভার থেকে Meta-তে পারচেজ ইভেন্ট হিসেবে যায়, আর বিজ্ঞাপনের খরচ থাকে তার আনা বিক্রির পাশে।"),
      "google-ads": loc("Sales are sent to Google Ads as conversions; ad spend sits beside the sales it brought.", "বিক্রি Google Ads-এ কনভার্শন হিসেবে যায়; বিজ্ঞাপনের খরচ থাকে তার আনা বিক্রির পাশে।"),
      "tiktok-ads": loc("Sales are sent to TikTok as purchase events; ad spend sits beside the sales it brought.", "বিক্রি TikTok-এ পারচেজ ইভেন্ট হিসেবে যায়; বিজ্ঞাপনের খরচ থাকে তার আনা বিক্রির পাশে।"),
      ga4: loc("Website visitors and where they come from, beside your orders.", "ওয়েবসাইটের ভিজিটর আর তারা কোথা থেকে আসে, আপনার অর্ডারের পাশে।"),
      bkash: loc("Checkout payments land in a bKash account in Money and are matched to their order. A transaction ID can be used only once.", "চেকআউটের পেমেন্ট Money-তে bKash অ্যাকাউন্টে আসে আর অর্ডারের সাথে মিলে যায়। একটি ট্রানজ্যাকশন আইডি একবারই ব্যবহার হয়।"),
      nagad: loc("Checkout payments land in a Nagad account in Money and are matched to their order. A transaction ID can be used only once.", "চেকআউটের পেমেন্ট Money-তে Nagad অ্যাকাউন্টে আসে আর অর্ডারের সাথে মিলে যায়। একটি ট্রানজ্যাকশন আইডি একবারই ব্যবহার হয়।"),
      rocket: loc("Checkout payments land in a Rocket account in Money and are matched to their order.", "চেকআউটের পেমেন্ট Money-তে Rocket অ্যাকাউন্টে আসে আর অর্ডারের সাথে মিলে যায়।"),
      sslcommerz: loc("Cards, wallets and net banking at checkout. The money waits in a holding account until SSLCOMMERZ pays out, then it is matched.", "চেকআউটে কার্ড, ওয়ালেট আর নেট ব্যাংকিং। SSLCOMMERZ পেআউট দেওয়া পর্যন্ত টাকা হোল্ডিং অ্যাকাউন্টে থাকে, তারপর মিলে যায়।"),
      eps: loc("Card and bank payments at checkout. The money waits in a holding account until EPS pays out, then it is matched.", "চেকআউটে কার্ড আর ব্যাংক পেমেন্ট। EPS পেআউট দেওয়া পর্যন্ত টাকা হোল্ডিং অ্যাকাউন্টে থাকে, তারপর মিলে যায়।"),
      pathao: loc("Book the parcel from the order. The tracking ID, delivery updates and the COD payout come back to that same order.", "অর্ডার থেকেই পার্সেল বুক করুন। ট্র্যাকিং আইডি, ডেলিভারি আপডেট আর COD পেআউট ফিরে আসে সেই অর্ডারেই।"),
      steadfast: loc("Book the parcel from the order. Delivery updates land on it, and the COD payout is matched back when Steadfast pays.", "অর্ডার থেকেই পার্সেল বুক করুন। ডেলিভারি আপডেট অর্ডারে আসে, আর Steadfast টাকা দিলে COD পেআউট মিলে যায়।"),
      redx: loc("Book the parcel from the order. Delivery updates land on it, and the COD payout is matched back when RedX pays.", "অর্ডার থেকেই পার্সেল বুক করুন। ডেলিভারি আপডেট অর্ডারে আসে, আর RedX টাকা দিলে COD পেআউট মিলে যায়।"),
      carrybee: loc("Book the parcel from the order. Delivery updates land on it, and the COD payout is matched back when Carrybee pays.", "অর্ডার থেকেই পার্সেল বুক করুন। ডেলিভারি আপডেট অর্ডারে আসে, আর Carrybee টাকা দিলে COD পেআউট মিলে যায়।"),
      sms: loc("Order updates and codes go out by SMS, once per event: confirmed, sent to courier, delivered. Each order keeps its own message log.", "অর্ডার আপডেট আর কোড SMS-এ যায়, প্রতিটি ঘটনায় একবার: কনফার্মড, কুরিয়ারে পাঠানো, ডেলিভারড। প্রতিটি অর্ডারের নিজের মেসেজ লগ থাকে।"),
      email: loc("Receipts and order emails go out from your shop's own address.", "রসিদ আর অর্ডারের ইমেইল যায় আপনার দোকানের নিজের ঠিকানা থেকে।"),
    },
  },
  /* GridAI, one job (sections/Connections.tsx beside scenes/GridAiScene.tsx). */
  gridai: {
    eyebrow: loc("GridAI", "GridAI"),
    title: loc("An assistant that answers from your real stock and prices, and asks before it decides.", "একটি সহকারী, যে আপনার আসল স্টক আর দাম থেকে উত্তর দেয়, আর সিদ্ধান্তের আগে জিজ্ঞেস করে।"),
    body: loc(
      "A customer writes at night in Bangla, Banglish or English. GridAI reads the live stock, price and delivery charge and drafts the reply. You send it, or switch Autopilot on for a chat and let it answer simple questions by itself. Anything above your limits waits for your approval.",
      "কোনো কাস্টমার রাতে বাংলা, বাংলিশ বা ইংরেজিতে লেখেন। GridAI লাইভ স্টক, দাম আর ডেলিভারি চার্জ পড়ে উত্তরের খসড়া করে। আপনি পাঠান, বা কোনো চ্যাটে Autopilot চালু করে সহজ প্রশ্নের উত্তর নিজেই দিতে দিন। আপনার সীমার বাইরে যা কিছু, আপনার অনুমোদনের অপেক্ষায় থাকে।",
    ),
    points: [
      loc("Reads live stock, price, delivery and order status. A customer never sees cost or margin.", "লাইভ স্টক, দাম, ডেলিভারি আর অর্ডারের অবস্থা পড়ে। কাস্টমার কখনো কেনা দাম বা লাভ দেখেন না।"),
      loc("Drafts the reply; you send. Or Autopilot per chat for simple questions.", "উত্তরের খসড়া করে; আপনি পাঠান। বা সহজ প্রশ্নের জন্য চ্যাটভেদে Autopilot।"),
      loc("Discounts over your limit, refunds and bulk messages always wait for your approval.", "আপনার সীমার বেশি ছাড়, রিফান্ড আর একসাথে অনেক মেসেজ সবসময় আপনার অনুমোদনের অপেক্ষায় থাকে।"),
    ],
    small: loc("AI replies use credits. Complaints and refund requests are always handed to a person.", "AI উত্তরে ক্রেডিট লাগে। অভিযোগ আর রিফান্ডের অনুরোধ সবসময় একজন মানুষের কাছে যায়।"),
    link: loc("See the inbox and GridAI", "ইনবক্স আর GridAI দেখুন"),
    href: "/features/omnichannel",
  },
};

/* ------------------------------------------------------------------ */
/* Store themes                                                        */
/* ------------------------------------------------------------------ */

export const THEMES = {
  eyebrow: loc("Store themes", "স্টোর থিম"),
  title: loc("See how your store will look.", "আপনার স্টোর কেমন দেখাবে, দেখুন।"),
  body: loc(
    "Pick a theme and watch the same shop change: header, hero and product card. Your logo, colours and fonts go on top; the checkout, cash on delivery and tracking are the same underneath.",
    "একটি থিম বাছুন আর একই দোকানকে বদলে যেতে দেখুন: হেডার, হিরো আর প্রোডাক্ট কার্ড। ওপরে থাকে আপনার লোগো, রং আর ফন্ট; নিচে চেকআউট, ক্যাশ অন ডেলিভারি আর ট্র্যাকিং একই।",
  ),
  points: [
    loc("Loads fast on mobile", "মোবাইলে দ্রুত খোলে"),
    loc("Your logo, colours and fonts", "আপনার লোগো, রং আর ফন্ট"),
    loc("Checkout, COD and tracking included", "চেকআউট, COD আর ট্র্যাকিং সাথেই আছে"),
  ],
  link: loc("See online stores", "অনলাইন স্টোর দেখুন"),
  gallery: loc("Open the theme gallery", "থিম গ্যালারি খুলুন"),
  alt: loc("Store theme preview", "স্টোর থিমের প্রিভিউ"),
  pick: loc("Pick a theme", "থিম বাছুন"),
  /* The four themes shown; names and audiences follow the merchant app's presets. */
  themes: [
    { id: "signal", name: "Signal", suits: loc("For electronics shops: spec lines that stay readable on a phone.", "ইলেকট্রনিকসের দোকানের জন্য: ফোনেও পড়া যায় এমন স্পেসিফিকেশন।") },
    { id: "nokshi", name: "Nokshi", suits: loc("For clothing and fashion: large pictures of products people want to look at.", "পোশাক আর ফ্যাশনের জন্য: যে পণ্য দেখতে ইচ্ছে করে, তার বড় ছবি।") },
    { id: "counter", name: "Counter", suits: loc("For grocery and retail: a dense catalogue for shops with many lines.", "মুদি আর রিটেইলের জন্য: অনেক পণ্যের দোকানের ঘন ক্যাটালগ।") },
    { id: "rupkotha", name: "Rupkotha", suits: loc("For beauty and skincare: banner-led pages with a colourful menu.", "বিউটি আর স্কিনকেয়ারের জন্য: ব্যানার-নির্ভর পাতা, রঙিন মেনু।") },
  ],
  view: { desktop: loc("Computer", "কম্পিউটার"), phone: loc("Phone", "ফোন"), label: loc("Preview on", "প্রিভিউ") },
  colour: loc("Brand colour", "ব্র্যান্ডের রং"),
  colourDefault: loc("Theme colour", "থিমের রং"),
  preview: {
    shop: "Dazzle Shop",
    nav: [loc("Phones", "ফোন"), loc("Audio", "অডিও"), loc("Wearables", "ওয়্যারেবল"), loc("Offers", "অফার")],
    search: loc("Search products", "প্রোডাক্ট খুঁজুন"),
    hero: loc("Clear calls. All-day battery.", "পরিষ্কার কল। সারাদিনের ব্যাটারি।"),
    heroSub: loc("Cash on delivery across Bangladesh", "সারা বাংলাদেশে ক্যাশ অন ডেলিভারি"),
    cta: loc("Shop now", "কিনুন"),
    spec: loc("ANC · 30 h battery · 6-month warranty", "ANC · ৩০ ঘণ্টা ব্যাটারি · ৬ মাসের ওয়ারেন্টি"),
    inStock: loc("In stock", "স্টকে আছে"),
    add: loc("Add to cart", "কার্টে যোগ"),
    cod: loc("COD", "COD"),
    categories: [loc("Phones", "ফোন"), loc("Audio", "অডিও"), loc("Chargers", "চার্জার"), loc("Cases", "কেস")],
    second: "Smart Watch S2",
  },
};

/* ------------------------------------------------------------------ */
/* Shop and online store share one stock count                         */
/* ------------------------------------------------------------------ */

export const SHARED = {
  title: loc("One stock count across your shop and online store.", "দোকান আর অনলাইন স্টোর জুড়ে একটাই স্টক হিসাব।"),
  body: loc(
    "A counter sale takes from the same count as an online order. On hand, reserved and available stay apart, so your website never promises a product you no longer have.",
    "কাউন্টারের বিক্রি আর অনলাইন অর্ডার একই হিসাব থেকে কমে। হাতে আছে, রিজার্ভড আর উপলব্ধ আলাদা থাকে, তাই আপনার ওয়েবসাইট এমন পণ্য দেখায় না যা আর নেই।",
  ),
  link: loc("See POS and stock", "POS ও স্টক দেখুন"),
};

export const SHARED_DEMO = {
  cashTitle: loc("Today’s sales and money", "আজকের বিক্রি ও টাকা"),
  salesValue: loc("Total sales", "মোট বিক্রি"),
  counterCash: loc("Cash at counter", "কাউন্টারে ক্যাশ"),
  onlinePaid: loc("Paid online", "অনলাইনে পেমেন্ট"),
  receivedTotal: loc("Money received", "হাতে আসা টাকা"),
  codDue: loc("COD not received yet", "যে COD এখনো আসেনি"),
  codNote: loc("Still with couriers. Not in your hand yet.", "এখনো কুরিয়ারের কাছে, আপনার হাতে আসেনি।"),
  cashNote: loc("Simple example. Opening balance and expenses are not shown.", "সহজ উদাহরণ। ওপেনিং ব্যালেন্স ও খরচ দেখানো হয়নি।"),
};

/* ------------------------------------------------------------------ */
/* Who it is for                                                       */
/* ------------------------------------------------------------------ */

/* Audience selector: each type carries its own day in the demo world (Dazzle
 * Shop, Earbuds Pro, order GC-1042; see docs/homepage-storyboard.md). */
export const FIT = {
  title: loc("Made for how you sell.", "আপনি যেভাবে বিক্রি করেন, সেভাবেই তৈরি।"),
  intro: loc(
    "Pick how you sell and see what a day looks like. Start with what you need today; add more as your business grows.",
    "কীভাবে বিক্রি করেন বাছুন, একটি দিন কেমন যায় দেখুন। আজ যা দরকার তা দিয়ে শুরু করুন; ব্যবসা বাড়লে আরও যোগ করুন।",
  ),
  selectorLabel: loc("How do you sell?", "আপনি কীভাবে বিক্রি করেন?"),
  dayLabel: loc("A day at Dazzle Shop (example)", "Dazzle Shop-এ একটি দিন (উদাহরণ)"),
  types: [
    {
      id: "online",
      icon: "Globe",
      href: "/solutions/online-commerce",
      chip: loc("Online seller", "অনলাইন সেলার"),
      title: loc("Online sellers", "অনলাইন সেলার"),
      body: loc(
        "Get orders from Facebook, your website and phone calls. Confirm, ship and collect COD in one flow.",
        "Facebook, ওয়েবসাইট আর ফোন থেকে অর্ডার নিন। কনফার্ম, শিপিং আর COD আদায়—সব এক ধারায়।",
      ),
      day: [
        loc("Nusrat asks on Messenger; the chat becomes order GC-1042, ৳2,450 cash on delivery.", "নুসরাত Messenger-এ জানতে চান; চ্যাটটি হয় অর্ডার GC-1042, ৳২,৪৫০ ক্যাশ অন ডেলিভারি।"),
        loc("A call confirms it, one Earbuds Pro is held in stock, and Pathao is booked with tracking PT-88213.", "কলে কনফার্ম, একটি Earbuds Pro স্টকে হোল্ড, আর Pathao বুক—ট্র্যাকিং PT-88213।"),
        loc("Delivered is not paid: the ৳2,330 payout from Pathao arrives later and is matched to the order.", "ডেলিভারড মানেই পেইড নয়: Pathao-র ৳২,৩৩০ পেআউট পরে আসে আর অর্ডারের সাথে মেলে।"),
      ],
      link: loc("See online selling", "অনলাইন বিক্রি দেখুন"),
    },
    {
      id: "retail",
      icon: "Store",
      href: "/solutions/retail-commerce",
      chip: loc("Shop", "দোকান"),
      title: loc("Shops with a counter", "কাউন্টারওয়ালা দোকান"),
      body: loc(
        "Sell at the counter, keep branch stock correct and check your cash at the end of the day.",
        "কাউন্টারে বিক্রি করুন, ব্রাঞ্চের স্টক ঠিক রাখুন আর দিন শেষে ক্যাশ মিলিয়ে নিন।",
      ),
      day: [
        loc("A counter sale at Dhanmondi: receipt R-2291, Earbuds Pro, paid in cash. Stock goes 13 to 12.", "ধানমন্ডিতে কাউন্টারে বিক্রি: রসিদ R-2291, Earbuds Pro, ক্যাশে পরিশোধ। স্টক ১৩ থেকে ১২।"),
        loc("Each branch and the warehouse keep their own count: on hand, held and available per place.", "প্রতিটি ব্রাঞ্চ আর ওয়্যারহাউসের আলাদা হিসাব: জায়গা অনুযায়ী হাতে আছে, হোল্ড আর উপলব্ধ।"),
        loc("At closing, the Z-report shows the day's cash and card takings for each counter.", "দিন শেষে Z-রিপোর্টে প্রতিটি কাউন্টারের ক্যাশ আর কার্ডের হিসাব।"),
      ],
      link: loc("See shop selling", "দোকানের বিক্রি দেখুন"),
    },
    {
      id: "both",
      icon: "Layers",
      href: "/solutions/online-commerce#online-retail",
      chip: loc("Shop + online", "দোকান + অনলাইন"),
      title: loc("Shop and online together", "দোকান আর অনলাইন একসাথে"),
      body: loc(
        "The counter and the website sell from one stock count, and the day's cash and COD money stay apart.",
        "কাউন্টার আর ওয়েবসাইট একটাই স্টক হিসাব থেকে বিক্রি করে, আর দিনের ক্যাশ ও COD-এর টাকা আলাদা থাকে।",
      ),
      day: [
        loc("Earbuds Pro: 13 on hand. A counter sale takes one, so 12.", "Earbuds Pro: হাতে ১৩টি। কাউন্টারে একটি বিক্রি, তাই ১২।"),
        loc("Online order GC-1042 holds one: 1 reserved, 11 available, and the website shows 11.", "অনলাইন অর্ডার GC-1042 একটি হোল্ড করে: ১টি রিজার্ভড, ১১টি উপলব্ধ, ওয়েবসাইটে দেখায় ১১।"),
        loc("Home shows cash at the counter and COD still with couriers as two separate figures.", "Home-এ কাউন্টারের ক্যাশ আর কুরিয়ারের কাছে থাকা COD দুটি আলাদা সংখ্যা।"),
      ],
      link: loc("See shop + online", "দোকান + অনলাইন দেখুন"),
    },
    {
      id: "wholesale",
      icon: "Handshake",
      href: "/solutions/wholesale-commerce",
      chip: loc("Wholesale", "পাইকারি"),
      title: loc("Wholesalers", "পাইকারি ব্যবসা"),
      body: loc(
        "Set dealer prices, sell on due and always know who still owes you money.",
        "ডিলার প্রাইস ঠিক করুন, বাকিতে বিক্রি করুন আর কার কাছে কত টাকা পাওনা সবসময় জানুন।",
      ),
      day: [
        loc("Set a wholesale price and a minimum order quantity on each product.", "প্রতিটি প্রোডাক্টে পাইকারি দাম আর সর্বনিম্ন অর্ডার পরিমাণ ঠিক করুন।"),
        loc("Sell on due with a credit limit and days to pay; above the limit, a manager approves with a PIN.", "ক্রেডিট লিমিট আর পরিশোধের দিন ঠিক করে বাকিতে বিক্রি করুন; লিমিট ছাড়ালে ম্যানেজার PIN দিয়ে অনুমোদন দেন।"),
        loc("Invoices sit under Unpaid, Partly paid and Paid, so you see who still owes you.", "ইনভয়েস থাকে Unpaid, Partly paid আর Paid-এ, তাই কার কাছে পাওনা স্পষ্ট দেখা যায়।"),
      ],
      link: loc("See wholesale", "পাইকারি দেখুন"),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Mobile app                                                          */
/* ------------------------------------------------------------------ */

/* Store links are placeholders until the listings are live. */
export const MOBILE_APPS = {
  lead: loc("Your shop,", "আপনার দোকান,"),
  tail: loc("in your pocket.", "আপনার পকেটে।"),
  body: loc(
    "Take orders, reply to customers, check stock and see today’s cash from your phone. For Android and iPhone.",
    "ফোন থেকেই অর্ডার নিন, কাস্টমারকে উত্তর দিন, স্টক দেখুন আর আজকের ক্যাশ জানুন। Android ও iPhone-এর জন্য।",
  ),
  features: [
    { icon: "BellRing", text: loc("New order alerts", "নতুন অর্ডারের নোটিফিকেশন") },
    { icon: "ScanBarcode", text: loc("Scan a barcode to sell", "বারকোড স্ক্যান করে বিক্রি") },
    { icon: "MessageCircle", text: loc("Reply to chats anywhere", "যেকোনো জায়গা থেকে চ্যাটের উত্তর") },
    { icon: "Wallet", text: loc("Today’s cash at a glance", "এক নজরে আজকের ক্যাশ") },
  ],
  googlePlay: loc("Get it on Google Play", "Google Play থেকে নিন"),
  appStore: loc("Download on the App Store", "App Store থেকে ডাউনলোড করুন"),
};

export const APP_LINKS = {
  googlePlay: "#",
  appStore: "#",
};

/* ------------------------------------------------------------------ */
/* How to start                                                        */
/* ------------------------------------------------------------------ */

/* The three steps follow the real sign-up: sign in and choose a system, add
 * products (import or by hand), connect courier and payments in Connections. */
export const START = {
  title: loc("Start in three steps.", "তিন ধাপে শুরু করুন।"),
  body: loc(
    "Your first day, as it really happens: sign in, add products, connect a courier, book the first parcel.",
    "আপনার প্রথম দিন, যেমনটা আসলে হয়: সাইন ইন, প্রোডাক্ট যোগ, কুরিয়ার যুক্ত, প্রথম পার্সেল বুক।",
  ),
  steps: [
    {
      icon: "LogIn",
      title: loc("Sign in and choose your system", "সাইন ইন করে সিস্টেম বাছুন"),
      body: loc(
        "Open the panel and pick Retail, Online or Retail + Online. Your dashboard is ready; the menu shows only that system's pages.",
        "প্যানেল খুলে Retail, Online বা Retail + Online বাছুন। ড্যাশবোর্ড তৈরি; মেনুতে থাকে শুধু সেই সিস্টেমের পেজ।",
      ),
    },
    {
      icon: "PackagePlus",
      title: loc("Add your products", "প্রোডাক্ট যোগ করুন"),
      body: loc(
        "Import a spreadsheet or your old store's export file and check the sample rows first, or add products one by one with their opening stock.",
        "স্প্রেডশিট বা পুরনো স্টোরের এক্সপোর্ট ফাইল ইমপোর্ট করুন, আগে নমুনা সারিগুলো যাচাই করুন; বা ওপেনিং স্টকসহ একটি একটি করে প্রোডাক্ট যোগ করুন।",
      ),
    },
    {
      icon: "PlugZap",
      title: loc("Connect your courier and payments", "কুরিয়ার আর পেমেন্ট যুক্ত করুন"),
      body: loc(
        "In Settings › Connections, connect Pathao, Steadfast or RedX and your bKash, Nagad or SSLCommerz account. Then book your first order.",
        "Settings › Connections-এ Pathao, Steadfast বা RedX আর আপনার bKash, Nagad বা SSLCommerz অ্যাকাউন্ট যুক্ত করুন। তারপর প্রথম অর্ডারটি বুক করুন।",
      ),
    },
  ],
  trial: loc("Start free trial", "ফ্রি ট্রায়াল শুরু করুন"),
  trialNote: loc("15 days, with your own products and orders.", "১৫ দিন, আপনার নিজের প্রোডাক্ট আর অর্ডার দিয়ে।"),
};

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const FAQ: { title: Localized; items: { id: string; q: Localized; a: Localized }[] } = {
  title: loc("Questions before you start.", "শুরুর আগে কিছু প্রশ্ন।"),
  items: [
    {
      id: "online-only",
      q: loc("Is GridCommerce only for online sellers?", "GridCommerce কি শুধু অনলাইন সেলারদের জন্য?"),
      a: loc(
        "No. It works for online sellers, shops with a counter and wholesalers. You turn on only the parts you need.",
        "না। অনলাইন সেলার, কাউন্টারওয়ালা দোকান আর পাইকারি ব্যবসা—সবার জন্যই। যা দরকার শুধু সেটুকু চালু করবেন।",
      ),
    },
    {
      id: "modules",
      q: loc("Do I need every feature?", "সব ফিচার কি লাগবে?"),
      a: loc(
        "No. Your plan decides which features and limits you get. Pick what fits your business.",
        "না। কোন ফিচার আর কত সীমা পাবেন, তা প্ল্যান অনুযায়ী। আপনার ব্যবসার সাথে যা মেলে তা বাছুন।",
      ),
    },
    {
      id: "store",
      q: loc("Can I keep my current website?", "আমার বর্তমান ওয়েবসাইট কি রাখতে পারব?"),
      a: loc(
        "For a while, yes. Connect a Shopify or WooCommerce store as a sales channel and your products stay in sync. When you move, bring customers, products and past orders in from the store's export file.",
        "কিছুদিনের জন্য, হ্যাঁ। Shopify বা WooCommerce স্টোরকে সেলস চ্যানেল হিসেবে যুক্ত করুন, প্রোডাক্ট মিলে থাকবে। চলে আসার সময় স্টোরের এক্সপোর্ট ফাইল থেকে কাস্টমার, প্রোডাক্ট আর আগের অর্ডার নিয়ে আসুন।",
      ),
    },
    {
      id: "data",
      q: loc("Can I bring my old data?", "পুরনো ডেটা কি আনা যাবে?"),
      a: loc(
        "Yes. Export from your old store or a spreadsheet and import products, customers, suppliers, opening balances and past orders. A checked sample first shows the rows that need fixing; then you import the rest.",
        "হ্যাঁ। পুরনো স্টোর বা স্প্রেডশিট থেকে এক্সপোর্ট করে প্রোডাক্ট, কাস্টমার, সাপ্লায়ার, ওপেনিং ব্যালেন্স আর আগের অর্ডার ইমপোর্ট করুন। আগে যাচাই করা নমুনায় দেখা যায় কোন সারি ঠিক করতে হবে; তারপর বাকিটা ইমপোর্ট করুন।",
      ),
    },
    {
      id: "delivered",
      q: loc("If an order is delivered, is the money in my account?", "অর্ডার ডেলিভারি হলেই কি টাকা আমার অ্যাকাউন্টে?"),
      a: loc(
        "Not yet. Delivery and payment are two steps. The COD stays due from the courier until the courier pays out; then the payout is matched to the order and shows as received.",
        "এখনো না। ডেলিভারি আর পেমেন্ট দুটি আলাদা ধাপ। কুরিয়ার পেআউট না দেওয়া পর্যন্ত COD কুরিয়ারের কাছে পাওনা থাকে; তারপর পেআউট অর্ডারের সাথে মেলে আর পাওয়া গেছে দেখায়।",
      ),
    },
    {
      id: "fraud",
      q: loc("How does the fraud check work?", "ফ্রড চেক কীভাবে কাজ করে?"),
      a: loc(
        "Before you ship a COD order, GridCommerce shows the delivery history the couriers have for that phone number: parcels delivered and parcels returned. Nothing is blocked on its own. You choose: ask for an advance, call first, ship, or block the number.",
        "COD অর্ডার পাঠানোর আগে GridCommerce ওই ফোন নম্বরের কুরিয়ার ডেলিভারি ইতিহাস দেখায়: কটি পার্সেল ডেলিভারড, কটি ফেরত। নিজে থেকে কিছুই ব্লক হয় না। আপনি ঠিক করেন: অ্যাডভান্স চাইবেন, আগে কল করবেন, পাঠাবেন, না নম্বর ব্লক করবেন।",
      ),
    },
    {
      id: "ai",
      q: loc("Does the AI send messages or take actions on its own?", "AI কি নিজে থেকে মেসেজ পাঠায় বা কাজ করে?"),
      a: loc(
        "No. GridAI drafts the reply or suggests the next step, and a person approves before anything goes out. Bigger actions wait for your approval and lapse if nobody acts.",
        "না। GridAI উত্তরের খসড়া করে বা পরের ধাপ সাজেস্ট করে, আর কিছু পাঠানোর আগে একজন মানুষ অনুমোদন দেন। বড় কাজ আপনার অনুমোদনের অপেক্ষায় থাকে, কেউ না দেখলে বাতিল হয়।",
      ),
    },
    {
      id: "access",
      q: loc("Can I control what my staff see?", "স্টাফরা কী দেখবেন, তা কি ঠিক করে দিতে পারব?"),
      a: loc(
        "Yes. Set roles so only the right people see cost prices or make big changes.",
        "হ্যাঁ। রোল ঠিক করে দিন, যাতে শুধু দরকারি লোকেরাই কেনা দাম দেখেন বা বড় পরিবর্তন করতে পারেন।",
      ),
    },
    {
      id: "credits",
      q: loc("Do SMS, WhatsApp and AI cost extra?", "SMS, WhatsApp আর AI-এর কি আলাদা খরচ আছে?"),
      a: loc(
        "Yes. SMS, WhatsApp, email and AI are paid by use from a prepaid credits balance, separate from the plan. Your plan includes some; you see the balance before you send.",
        "হ্যাঁ। SMS, WhatsApp, ইমেইল আর AI-এর খরচ ব্যবহার অনুযায়ী, প্ল্যানের বাইরে আলাদা প্রিপেইড ক্রেডিট ব্যালেন্স থেকে। প্ল্যানের সাথে কিছুটা থাকে; পাঠানোর আগে ব্যালেন্স দেখতে পান।",
      ),
    },
    {
      id: "demo",
      q: loc("What happens in the demo?", "ডেমোতে কী হয়?"),
      a: loc(
        "Tell us how you take orders, keep stock and get paid. We walk through those parts with products like yours, from the order to the courier payout. Then you try the panel yourself.",
        "আপনি কীভাবে অর্ডার নেন, স্টক রাখেন আর টাকা পান জানান। আপনার মতো প্রোডাক্ট দিয়ে অর্ডার থেকে কুরিয়ার পেআউট পর্যন্ত সেই অংশগুলো দেখাই। তারপর আপনি নিজে প্যানেল চালিয়ে দেখেন।",
      ),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Final call to action                                                */
/* ------------------------------------------------------------------ */

export const FINAL_CTA = {
  title: loc("See it with your own business.", "নিজের ব্যবসায় দেখুন।"),
  body: loc(
    "Book a demo and we walk through your orders, stock and COD money the way they really happen. Or start a free trial and try it yourself.",
    "ডেমো বুক করুন, আপনার অর্ডার, স্টক আর COD-এর টাকা যেভাবে আসলে চলে সেভাবেই দেখাই। অথবা ফ্রি ট্রায়াল শুরু করে নিজেই চালিয়ে দেখুন।",
  ),
  trial: loc("Start free trial", "ফ্রি ট্রায়াল শুরু করুন"),
  support: loc("For online sellers, shops with a counter and wholesalers.", "অনলাইন সেলার, কাউন্টারওয়ালা দোকান আর পাইকারি ব্যবসার জন্য।"),
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
