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
  line1: loc("Take orders. Ship fast.", "অর্ডার নিন। দ্রুত পাঠান।"),
  line2: loc("Get your COD money on time.", "COD-এর টাকা বুঝে নিন সময়মতো।"),
  body: loc(
    "Facebook messages, website orders, couriers, stock and profit, all in one simple dashboard. No more lost orders, messy spreadsheets or guessing where your money is.",
    "Facebook মেসেজ, ওয়েবসাইটের অর্ডার, কুরিয়ার, স্টক আর লাভ—সব এক সহজ ড্যাশবোর্ডে। আর হারাবে না অর্ডার, লাগবে না এলোমেলো এক্সেল শিট, টাকা কোথায় আছে তা নিয়েও আর আন্দাজ নয়।",
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
  announce: loc("New: fraud check across Pathao, Steadfast and RedX", "নতুন: Pathao, Steadfast আর RedX জুড়ে ফ্রড চেক"),
  trial: loc("Start free trial", "ফ্রি ট্রায়াল শুরু করুন"),
  trust: loc("Trusted by 100+ ecommerce businesses", "১০০+ ই-কমার্স ব্যবসার আস্থা"),
  stats: [
    { value: "100+", label: loc("Online businesses", "অনলাইন ব্যবসা") },
    { value: "3", label: loc("Couriers in one click", "এক ক্লিকে কুরিয়ার") },
    { value: "15", label: loc("Day free trial", "দিনের ফ্রি ট্রায়াল") },
  ],
  checks: [
    loc("COD money tracked to the taka", "COD-এর টাকা পাই-পয়সা পর্যন্ত ট্র্যাক"),
    loc("Fake orders stopped before shipping", "শিপের আগেই ফেক অর্ডার বন্ধ"),
    loc("Every chat in one inbox", "সব চ্যাট এক ইনবক্সে"),
  ],
  strip: [
    { icon: "ShieldCheck", text: loc("Fraud check before every parcel", "প্রতিটি পার্সেলের আগে ফ্রড চেক") },
    { icon: "Truck", text: loc("Pathao, Steadfast and RedX in one click", "এক ক্লিকে Pathao, Steadfast আর RedX") },
    { icon: "Wallet", text: loc("COD money matched to every order", "প্রতিটি অর্ডারের সাথে COD-এর টাকা মেলানো") },
  ],
  newOrder: loc("New order", "নতুন অর্ডার"),
  booked: loc("Booked with Pathao", "Pathao-তে বুকড"),
  aiReady: loc("AI reply ready", "AI উত্তর তৈরি"),
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
    ],
  },
};

/* ------------------------------------------------------------------ */
/* One order, from new order to money in the bank                     */
/* ------------------------------------------------------------------ */

export const STORY = {
  eyebrow: loc("Order to money", "অর্ডার থেকে টাকা"),
  title: loc("From new order to money in your bank.", "নতুন অর্ডার থেকে ব্যাংকে টাকা পর্যন্ত।"),
  body: loc(
    "Every order gets confirmed, sent to the courier, delivered and paid, and you can see each step. When the courier pays the COD money, it is matched to the right order.",
    "প্রতিটি অর্ডার কনফার্ম হয়, কুরিয়ারে যায়, ডেলিভারি হয়, টাকা আসে—আর প্রতিটি ধাপ আপনি দেখতে পান। কুরিয়ার COD-এর টাকা দিলে তা সঠিক অর্ডারের সাথে মিলে যায়।",
  ),
  link: loc("See how orders work", "অর্ডার কীভাবে চলে দেখুন"),
};

/* ------------------------------------------------------------------ */
/* What needs attention today                                          */
/* ------------------------------------------------------------------ */

export const CONTROL = {
  title: loc("See what needs your attention today.", "আজ কোন কাজে নজর দিতে হবে, এক নজরে দেখুন।"),
  body: loc(
    "Open GridCommerce in the morning and see it all: orders to confirm, COD money still with couriers, and the profit you made after costs.",
    "সকালে GridCommerce খুললেই সব দেখবেন: কোন অর্ডার কনফার্ম করতে হবে, কুরিয়ারের কাছে কত COD-এর টাকা আটকে আছে, আর খরচ বাদে কত লাভ হলো।",
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
    title: loc("Stop fake orders before you ship.", "শিপের আগেই ফেক অর্ডার আটকান।"),
    body: loc(
      "Fake and prank orders cost you delivery charges and wasted stock. Before you send a parcel, GridCommerce checks the customer’s phone number across Pathao, Steadfast and RedX, so you see who receives their parcels and who returns them.",
      "ফেক আর মজা করে দেওয়া অর্ডারে ডেলিভারি চার্জ আর স্টক দুটোই নষ্ট হয়। পার্সেল পাঠানোর আগে GridCommerce কাস্টমারের ফোন নম্বর Pathao, Steadfast আর RedX-এ যাচাই করে, তাই দেখতে পান কে পার্সেল নেন আর কে ফেরত পাঠান।",
    ),
    points: [
      loc("Delivered and returned count for every number", "প্রতিটি নম্বরের ডেলিভারড আর ফেরতের হিসাব"),
      loc("Risky and duplicate orders flagged for you", "ঝুঁকিপূর্ণ আর ডুপ্লিকেট অর্ডার আলাদা করে দেখায়"),
      loc("Ask for advance payment, turn off COD or block a number", "অ্যাডভান্স চান, COD বন্ধ করুন বা নম্বর ব্লক করুন"),
    ],
    small: loc("Courier history depends on the records each courier shares.", "কুরিয়ার হিস্টরি নির্ভর করে প্রতিটি কুরিয়ারের দেওয়া তথ্যের ওপর।"),
    link: loc("See order protection", "অর্ডার সুরক্ষা দেখুন"),
    href: "/features/orders",
  },
  inbox: {
    eyebrow: loc("Inbox", "ইনবক্স"),
    title: loc("All your customer messages in one inbox.", "কাস্টমারের সব মেসেজ এক ইনবক্সে।"),
    body: loc(
      "Messenger, WhatsApp, Instagram and TikTok chats come to one place. Reply fast with AI, see the customer’s past orders, and create the order right from the chat.",
      "Messenger, WhatsApp, Instagram আর TikTok-এর চ্যাট আসে এক জায়গায়। AI দিয়ে দ্রুত উত্তর দিন, কাস্টমারের আগের অর্ডার দেখুন, আর চ্যাট থেকেই অর্ডার তৈরি করুন।",
    ),
    points: [
      loc("Never miss a customer message", "কোনো কাস্টমারের মেসেজ আর মিস হবে না"),
      loc("AI writes replies in Bangla or English", "AI বাংলা বা ইংরেজিতে উত্তর লিখে দেয়"),
      loc("Turn a chat into an order in one click", "এক ক্লিকে চ্যাট থেকে অর্ডার"),
    ],
    small: loc("Works with supported channels. Message charges may apply.", "সমর্থিত চ্যানেলে কাজ করে। মেসেজের চার্জ লাগতে পারে।"),
    link: loc("See the inbox", "ইনবক্স দেখুন"),
    href: "/features/omnichannel",
  },
  store: {
    eyebrow: loc("Landing pages", "ল্যান্ডিং পেজ"),
    title: loc("Make a sales page in minutes.", "কয়েক মিনিটে সেলস পেজ বানান।"),
    body: loc(
      "Choose a product and AI writes the page for you. Add your Facebook Pixel, share the link, and start getting orders.",
      "একটি প্রোডাক্ট বাছুন, AI আপনার জন্য পেজ লিখে দেবে। Facebook Pixel যোগ করুন, লিংক শেয়ার করুন, আর অর্ডার পেতে শুরু করুন।",
    ),
    points: [
      loc("AI writes it, you check and publish", "AI লেখে, আপনি দেখে পাবলিশ করেন"),
      loc("Pixel and CAPI ready before you share", "শেয়ারের আগেই Pixel ও CAPI রেডি"),
      loc("Easy mobile checkout with cash on delivery", "ক্যাশ অন ডেলিভারিসহ সহজ মোবাইল চেকআউট"),
    ],
    small: loc("AI writing uses credits.", "AI দিয়ে লেখায় ক্রেডিট লাগে।"),
    link: loc("See landing pages", "ল্যান্ডিং পেজ দেখুন"),
    href: "/features/storefront",
  },
  tracking: {
    eyebrow: loc("Ad tracking", "অ্যাড ট্র্যাকিং"),
    title: loc("Let your ads see every real sale.", "আপনার বিজ্ঞাপন যেন প্রতিটি আসল বিক্রি দেখতে পায়।"),
    body: loc(
      "Browser pixels miss many orders. GridCommerce sends each sale to Meta, TikTok and Google from our server, so your ads learn from real buyers.",
      "ব্রাউজারের পিক্সেল অনেক অর্ডার ধরতে পারে না। GridCommerce প্রতিটি বিক্রি আমাদের সার্ভার থেকে Meta, TikTok আর Google-এ পাঠায়, তাই আপনার বিজ্ঞাপন শেখে আসল ক্রেতাদের থেকে।",
    ),
    points: [
      loc("Meta, TikTok and Google in one setup", "এক সেটআপে Meta, TikTok ও Google"),
      loc("Customer data stays protected", "কাস্টমারের তথ্য থাকে সুরক্ষিত"),
      loc("Delivered COD orders are reported too", "ডেলিভারি হওয়া COD অর্ডারও জানানো হয়"),
    ],
    small: loc("You connect your own ad accounts.", "আপনার নিজের অ্যাড অ্যাকাউন্ট যুক্ত করবেন।"),
    link: loc("See ad tracking", "অ্যাড ট্র্যাকিং দেখুন"),
    href: "/features/analytics",
  },
  social: {
    eyebrow: loc("Social media", "সোশ্যাল মিডিয়া"),
    title: loc("Post on Facebook, Instagram, TikTok, LinkedIn and YouTube from one place.", "এক জায়গা থেকে Facebook, Instagram, TikTok, LinkedIn আর YouTube-এ পোস্ট করুন।"),
    body: loc(
      "Write your post once, pick your pages and channels, and schedule it. Then reply to comments from the same inbox.",
      "একবার পোস্ট লিখুন, পেজ আর চ্যানেল বাছুন, শিডিউল করুন। তারপর একই ইনবক্স থেকে কমেন্টের উত্তর দিন।",
    ),
    logos: [
      { name: "Facebook", src: "/integrations/facebook-page.png" },
      { name: "Instagram", src: "/integrations/instagram.png" },
      { name: "TikTok", src: "/integrations/tiktok-ads.png" },
      { name: "LinkedIn", src: "/integrations/linkedin.png" },
      { name: "YouTube", src: "/integrations/youtube.png" },
    ],
    points: [
      loc("One post, five channels", "এক পোস্ট, পাঁচ চ্যানেল"),
      loc("Schedule days ahead, at the best time to post", "সেরা সময়ে, কয়েক দিন আগেই শিডিউল"),
      loc("Reply to all comments in one place", "সব কমেন্টের উত্তর এক জায়গা থেকে"),
    ],
    small: loc("Each platform’s posting rules apply. LinkedIn posts go to company pages.", "প্রতিটি প্ল্যাটফর্মের পোস্টিং নিয়ম প্রযোজ্য। LinkedIn-এ পোস্ট যায় কোম্পানি পেজে।"),
    link: loc("See social posts", "সোশ্যাল পোস্ট দেখুন"),
    href: "/features/omnichannel",
  },
  recovery: {
    eyebrow: loc("Abandoned carts", "ফেলে যাওয়া কার্ট"),
    title: loc("Bring back customers who left without buying.", "যারা না কিনে চলে গেছেন, তাদের ফিরিয়ে আনুন।"),
    body: loc(
      "When someone leaves items in the cart, GridCommerce sends a friendly reminder with a link back to the cart. Once they buy, the reminders stop.",
      "কেউ কার্টে পণ্য রেখে চলে গেলে GridCommerce কার্টে ফেরার লিংকসহ একটি রিমাইন্ডার পাঠায়। কিনে ফেললেই রিমাইন্ডার বন্ধ।",
    ),
    points: [
      loc("Reminders by WhatsApp, SMS or email", "WhatsApp, SMS বা ইমেইলে রিমাইন্ডার"),
      loc("One tap takes them back to their cart", "এক ট্যাপেই কার্টে ফিরে আসা"),
      loc("Customers can stop messages anytime", "কাস্টমার চাইলে যেকোনো সময় মেসেজ বন্ধ করতে পারেন"),
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
  eyebrow: loc("Easy move", "সহজে চলে আসুন"),
  title: loc("Moving from Shopify or WordPress? Bring everything with you.", "Shopify বা WordPress থেকে আসছেন? সবকিছু সাথে নিয়ে আসুন।"),
  body: loc(
    "Connect your old store and we bring over your customers, past orders and products. You don’t start from zero.",
    "পুরনো স্টোর কানেক্ট করুন, আমরা আপনার কাস্টমার, আগের অর্ডার আর প্রোডাক্ট নিয়ে আসব। শূন্য থেকে শুরু করতে হবে না।",
  ),
  cta: loc("Start my move", "আমার মুভ শুরু করুন"),
  link: loc("See how moving works", "কীভাবে চলে আসবেন দেখুন"),
  note: loc("Need help? Our team can do the whole move for you.", "সাহায্য লাগবে? আমাদের টিম পুরো কাজটাই করে দিতে পারে।"),
};

/* ------------------------------------------------------------------ */
/* Integrations bento                                                  */
/* ------------------------------------------------------------------ */

export const CONNECT = {
  lead: {
    title: loc("Sell online without guessing", "আন্দাজ ছাড়াই অনলাইনে বিক্রি করুন"),
    body: loc(
      "Orders, stock, couriers, messages and money in one place. Every step is saved, so you always know what happened.",
      "অর্ডার, স্টক, কুরিয়ার, মেসেজ আর টাকা এক জায়গায়। প্রতিটি ধাপ সেভ থাকে, তাই কী হয়েছে সবসময় জানবেন।",
    ),
  },
  insights: {
    title: loc("Ask GridAI about your business", "আপনার ব্যবসা নিয়ে GridAI-কে জিজ্ঞেস করুন"),
    body: loc(
      "Ask in Bangla or English. GridAI checks your orders, stock and money and tells you what to do next. You decide.",
      "বাংলা বা ইংরেজিতে জিজ্ঞেস করুন। GridAI আপনার অর্ডার, স্টক আর টাকার হিসাব দেখে পরের কাজ বলে দেয়। সিদ্ধান্ত আপনার।",
    ),
    tagReport: loc("Weekly report", "সাপ্তাহিক রিপোর্ট"),
    tagWeek: loc("This week", "এই সপ্তাহ"),
    cardTitle: loc("A strong week!", "দারুণ একটা সপ্তাহ!"),
    cardBody: loc("Delivered orders are up. Two products are running low.", "ডেলিভারড অর্ডার বেড়েছে। দুটি প্রোডাক্টের স্টক কমে আসছে।"),
    topSellers: loc("Top sellers", "সবচেয়ে বেশি বিক্রি"),
    delivered: loc("Delivered rate", "ডেলিভারি রেট"),
    action: loc("Restock 2 products", "২টি প্রোডাক্ট রিস্টক করুন"),
  },
  trusted: {
    title: loc("Trusted by 100+ ecommerce businesses", "১০০+ ই-কমার্স ব্যবসা আমাদের ওপর ভরসা রাখে"),
  },
  integrations: {
    title: loc("Works with the apps you already use", "আপনার চেনা অ্যাপগুলোর সাথেই কাজ করে"),
    label: loc("Integrations", "ইন্টিগ্রেশন"),
  },
  tracking: {
    title: loc("Track every sale from our server", "প্রতিটি বিক্রি ট্র্যাক হয় আমাদের সার্ভার থেকে"),
    body: loc(
      "Sales go to Meta, TikTok and Google from our server, so your ad reports stay correct.",
      "বিক্রির তথ্য আমাদের সার্ভার থেকে Meta, TikTok আর Google-এ যায়, তাই বিজ্ঞাপনের রিপোর্ট থাকে সঠিক।",
    ),
    cta: loc("See ad tracking", "অ্যাড ট্র্যাকিং দেখুন"),
  },
  payments: {
    title: loc("bKash and Nagad, matched", "bKash আর Nagad, মিলিয়ে রাখা"),
    body: loc("Every mobile payment is linked to its order.", "প্রতিটি মোবাইল পেমেন্ট তার অর্ডারের সাথে যুক্ত থাকে।"),
    received: loc("Received", "পাওয়া গেছে"),
  },
  alerts: {
    title: loc("Instant alerts", "সাথে সাথে অ্যালার্ট"),
    body: loc("Know the moment a new order, message or courier payment comes in.", "নতুন অর্ডার, মেসেজ বা কুরিয়ারের পেমেন্ট এলেই সাথে সাথে জানবেন।"),
  },
};

/* ------------------------------------------------------------------ */
/* Store themes                                                        */
/* ------------------------------------------------------------------ */

export const THEMES = {
  eyebrow: loc("Store themes", "স্টোর থিম"),
  title: loc("Get a beautiful online store", "সুন্দর একটা অনলাইন স্টোর নিন"),
  body: loc(
    "Pick a ready-made theme, add your products and start selling. Your store works with your orders, stock and ad tracking from day one.",
    "একটি রেডিমেড থিম বাছুন, প্রোডাক্ট যোগ করুন আর বিক্রি শুরু করুন। প্রথম দিন থেকেই আপনার স্টোর অর্ডার, স্টক আর অ্যাড ট্র্যাকিংয়ের সাথে কাজ করে।",
  ),
  points: [
    loc("Loads fast on mobile", "মোবাইলে দ্রুত খোলে"),
    loc("Your logo, colours and fonts", "আপনার লোগো, রং আর ফন্ট"),
    loc("Checkout, COD and tracking included", "চেকআউট, COD আর ট্র্যাকিং সাথেই আছে"),
  ],
  link: loc("See online stores", "অনলাইন স্টোর দেখুন"),
  alt: loc("Store theme preview", "স্টোর থিমের প্রিভিউ"),
};

/* ------------------------------------------------------------------ */
/* Shop and online store share one stock count                         */
/* ------------------------------------------------------------------ */

export const SHARED = {
  title: loc("Shop and online store, one stock count.", "দোকান আর অনলাইন স্টোর, স্টকের হিসাব একটাই।"),
  body: loc(
    "Sell at the counter or get an online order, and your stock updates everywhere. No more selling items you don’t have.",
    "কাউন্টারে বিক্রি করুন বা অনলাইনে অর্ডার পান—সব জায়গায় স্টক আপডেট হয়ে যায়। যা নেই তা আর বিক্রি হবে না।",
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

export const FIT = {
  title: loc("Made for how you sell.", "আপনি যেভাবে বিক্রি করেন, সেভাবেই তৈরি।"),
  intro: loc(
    "Start with what you need today. Add more as your business grows.",
    "আজ যা দরকার তা দিয়ে শুরু করুন। ব্যবসা বাড়লে আরও যোগ করুন।",
  ),
  types: [
    {
      id: "online",
      icon: "Globe",
      href: "/solutions/online-commerce",
      title: loc("Online sellers", "অনলাইন সেলার"),
      body: loc(
        "Get orders from Facebook, your website and phone calls. Confirm, ship and collect COD in one flow.",
        "Facebook, ওয়েবসাইট আর ফোন থেকে অর্ডার নিন। কনফার্ম, শিপিং আর COD আদায়—সব এক ধারায়।",
      ),
      link: loc("See online selling", "অনলাইন বিক্রি দেখুন"),
    },
    {
      id: "retail",
      icon: "Store",
      href: "/solutions/retail-commerce",
      title: loc("Shops with a counter", "কাউন্টারওয়ালা দোকান"),
      body: loc(
        "Sell at the counter, keep branch stock correct and check your cash at the end of the day.",
        "কাউন্টারে বিক্রি করুন, ব্রাঞ্চের স্টক ঠিক রাখুন আর দিন শেষে ক্যাশ মিলিয়ে নিন।",
      ),
      link: loc("See shop selling", "দোকানের বিক্রি দেখুন"),
    },
    {
      id: "wholesale",
      icon: "Handshake",
      href: "/solutions/wholesale-commerce",
      title: loc("Wholesalers", "পাইকারি ব্যবসা"),
      body: loc(
        "Set dealer prices, sell on credit and always know who still owes you money.",
        "ডিলার প্রাইস ঠিক করুন, বাকিতে বিক্রি করুন আর কার কাছে কত টাকা পাওনা সবসময় জানুন।",
      ),
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

export const START = {
  title: loc("Start with what you need most.", "যা সবচেয়ে বেশি দরকার, তা দিয়েই শুরু করুন।"),
  body: loc(
    "Tell us how you sell. We set up GridCommerce around your orders, your team and your stock.",
    "আপনি কীভাবে বিক্রি করেন জানান। আপনার অর্ডার, টিম আর স্টক অনুযায়ী আমরা GridCommerce সাজিয়ে দেব।",
  ),
  steps: [
    {
      title: loc("Tell us how you work", "আপনার কাজের ধরন জানান"),
      body: loc("Show us where your orders come from, where you keep stock and how you get paid.", "অর্ডার কোথা থেকে আসে, স্টক কোথায় থাকে আর টাকা কীভাবে পান—আমাদের দেখান।"),
    },
    {
      title: loc("Pick your plan", "প্ল্যান বাছুন"),
      body: loc("See which features you need, your limits and any usage costs.", "কোন ফিচার লাগবে, সীমা কত আর ব্যবহারের খরচ কত—দেখে নিন।"),
    },
    {
      title: loc("Get started", "শুরু করুন"),
      body: loc("We help you bring your data and set up the first thing your team will use.", "আপনার ডেটা আনতে আর টিমের প্রথম কাজটি সেট করতে আমরা সাহায্য করি।"),
    },
  ],
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
        "In the demo, we check your platform and show you what can connect and what can be imported.",
        "ডেমোতে আমরা আপনার প্ল্যাটফর্ম দেখে বলব কোনটা কানেক্ট করা যাবে আর কোনটা ইমপোর্ট করতে হবে।",
      ),
    },
    {
      id: "data",
      q: loc("Can I bring my old data?", "পুরনো ডেটা কি আনা যাবে?"),
      a: loc(
        "Yes. Import products, customers, suppliers and opening balances from a spreadsheet. Check a test import first, then bring the rest.",
        "হ্যাঁ। স্প্রেডশিট থেকে প্রোডাক্ট, কাস্টমার, সাপ্লায়ার আর ওপেনিং ব্যালেন্স আনুন। আগে একটি টেস্ট ইমপোর্ট দেখে নিন, তারপর বাকিটা।",
      ),
    },
    {
      id: "delivered",
      q: loc("If an order is delivered, is the money in my account?", "অর্ডার ডেলিভারি হলেই কি টাকা আমার অ্যাকাউন্টে?"),
      a: loc(
        "Not yet. Delivery and payment are two steps. The COD money shows as due until the courier pays you and it is matched.",
        "এখনো না। ডেলিভারি আর পেমেন্ট দুটি আলাদা ধাপ। কুরিয়ার টাকা দিয়ে তা মিলে না যাওয়া পর্যন্ত COD-এর টাকা পাওনা হিসেবেই দেখায়।",
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
        "Yes. They use credits based on how much you use. We show you the costs before you choose a plan.",
        "হ্যাঁ। যতটুকু ব্যবহার করবেন, সেই অনুযায়ী ক্রেডিট লাগে। প্ল্যান বাছার আগেই আমরা খরচ দেখিয়ে দিই।",
      ),
    },
    {
      id: "demo",
      q: loc("What happens in the demo?", "ডেমোতে কী হয়?"),
      a: loc(
        "Tell us how you take orders, keep stock and get paid. We show you the parts that matter for your business.",
        "আপনি কীভাবে অর্ডার নেন, স্টক রাখেন আর টাকা পান জানান। আপনার ব্যবসার জন্য যা জরুরি, আমরা সেটাই দেখাব।",
      ),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Final call to action                                                */
/* ------------------------------------------------------------------ */

export const FINAL_CTA = {
  title: loc("Ready to see it with your own business?", "নিজের ব্যবসায় দেখতে চান?"),
  body: loc(
    "Book a demo. Show us how you sell today, and we’ll show you how GridCommerce makes it easier.",
    "ডেমো বুক করুন। আজ আপনি কীভাবে বিক্রি করেন দেখান, আর GridCommerce কীভাবে কাজটা সহজ করে আমরা দেখাব।",
  ),
  support: loc("For online sellers, shops and wholesalers.", "অনলাইন সেলার, দোকান আর পাইকারি ব্যবসার জন্য।"),
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
