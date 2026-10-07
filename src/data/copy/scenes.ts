/**
 * Words inside the homepage's animated product scenes (demo data). Kept short:
 * the scenes tell their story through motion; these are the app's own labels.
 */
import { loc } from "@/i18n/types";

export const SCENE_COMMON = {
  replay: loc("Replay", "আবার দেখুন"),
};

export const ORDER_SCENE = {
  label: loc(
    "Animation: an order arrives from Facebook, an AI call confirms it, Pathao delivers it, the COD payout is matched and the money lands in the bank.",
    "অ্যানিমেশন: Facebook থেকে অর্ডার আসে, AI কল কনফার্ম করে, Pathao ডেলিভারি দেয়, COD পেআউট মেলে আর টাকা ব্যাংকে যায়।",
  ),
  newOrder: loc("New order from Facebook", "Facebook থেকে নতুন অর্ডার"),
  order: loc("Order #GC-1042", "অর্ডার #GC-1042"),
  item: loc("Earbuds Pro × 1", "Earbuds Pro × ১"),
  cod: loc("Cash on delivery", "ক্যাশ অন ডেলিভারি"),
  status: [
    loc("New", "নতুন"),
    loc("Calling", "কল চলছে"),
    loc("Confirmed", "কনফার্মড"),
    loc("Shipped", "শিপড"),
    loc("Delivered", "ডেলিভারড"),
    loc("Payout matched", "পেআউট মিলেছে"),
    loc("Completed", "সম্পন্ন"),
  ],
  aiCall: loc("AI call · Bangla", "AI কল · বাংলা"),
  said: loc("“Hyan, pathiye din”", "“হ্যাঁ, পাঠিয়ে দিন”"),
  confirmed: loc("Confirmed", "কনফার্মড"),
  courier: loc("Courier", "কুরিয়ার"),
  pickedUp: loc("Picked up", "পিকআপ হয়েছে"),
  delivered: loc("Delivered", "ডেলিভারড"),
  payout: loc("Courier payout", "কুরিয়ার পেআউট"),
  codCollected: loc("COD collected", "COD সংগ্রহ"),
  charge: loc("Delivery charge", "ডেলিভারি চার্জ"),
  paid: loc("Paid to you", "আপনাকে দেওয়া"),
  matched: loc("Matched", "মিলেছে"),
  bank: loc("Bank ••4521", "ব্যাংক ••4521"),
  balance: loc("Balance", "ব্যালেন্স"),
  added: loc("Added to bank and books", "ব্যাংক ও হিসাবে যোগ হয়েছে"),
};

export const INBOX_SCENE = {
  label: loc(
    "Animation: messages from Messenger, WhatsApp, Instagram and TikTok arrive in one inbox; AI suggests a reply, it is sent, and an order is created from the chat.",
    "অ্যানিমেশন: Messenger, WhatsApp, Instagram ও TikTok-এর মেসেজ এক ইনবক্সে আসে; AI উত্তর সাজেস্ট করে, পাঠানো হয়, আর চ্যাট থেকেই অর্ডার তৈরি হয়।",
  ),
  inbox: loc("Inbox", "ইনবক্স"),
  threads: [
    { name: "Farzana Karim", text: loc("Earbuds ta stock e ache?", "Earbuds ta stock e ache?") },
    { name: "Rafi Ahmed", text: loc("Delivery kobe hobe?", "Delivery kobe hobe?") },
    { name: "Mitu Das", text: loc("Size M ache?", "Size M ache?") },
    { name: "Sabbir Khan", text: loc("Price koto?", "Price koto?") },
  ],
  history: loc("3 orders · 0 returns", "৩টি অর্ডার · ০ রিটার্ন"),
  question: loc("Earbuds ta stock e ache? 2 ta nibo.", "Earbuds ta stock e ache? 2 ta nibo."),
  aiLabel: loc("AI suggestion", "AI সাজেশন"),
  aiReply: loc("Ji ache! ৳2,500 each, COD available. Order confirm korbo?", "Ji ache! ৳2,500 each, COD available. Order confirm korbo?"),
  send: loc("Send", "পাঠান"),
  yes: loc("Hyan, confirm korun", "Hyan, confirm korun"),
  createOrder: loc("Create order", "অর্ডার তৈরি"),
  order: loc("Order #GC-1043", "অর্ডার #GC-1043"),
  orderLine: loc("Earbuds Pro × 2 · stock checked", "Earbuds Pro × ২ · স্টক যাচাই হয়েছে"),
  created: loc("Order created from the chat", "চ্যাট থেকেই অর্ডার তৈরি"),
};

export const MONEY_SCENE = {
  label: loc(
    "Animation: today's board shows orders to confirm, COD still with couriers and low stock; orders are confirmed, a courier payout is matched, and one sale's profit is worked out after costs.",
    "অ্যানিমেশন: আজকের বোর্ডে কনফার্মের অপেক্ষায় অর্ডার, কুরিয়ারের কাছে COD আর কম স্টক দেখা যায়; অর্ডার কনফার্ম হয়, পেআউট মেলে, আর খরচ বাদে একটি বিক্রির লাভ হিসাব হয়।",
  ),
  today: loc("Needs attention today", "আজ নজর দরকার"),
  toConfirm: loc("Orders to confirm", "কনফার্মের অপেক্ষায় অর্ডার"),
  confirmAll: loc("Confirm all", "সব কনফার্ম"),
  done: loc("All confirmed", "সব কনফার্মড"),
  codDue: loc("COD with couriers", "কুরিয়ারের কাছে COD"),
  lowStock: loc("Low stock", "কম স্টক"),
  items: loc("2 products", "২টি প্রোডাক্ট"),
  payout: loc("Steadfast payout matched", "Steadfast পেআউট মিলেছে"),
  sale: loc("Sale #GC-1042", "বিক্রি #GC-1042"),
  rows: [loc("Sale", "বিক্রি"), loc("Product cost", "প্রোডাক্ট খরচ"), loc("Courier", "কুরিয়ার"), loc("Ads", "বিজ্ঞাপন")],
  profit: loc("Profit you keep", "আপনার লাভ"),
  week: loc("Delivered revenue · this week", "ডেলিভারড আয় · এই সপ্তাহ"),
};

export const STORE_SCENE = {
  label: loc(
    "Animation: a product is picked, AI writes the campaign page, Meta, TikTok and Google tracking are connected, the link is copied and an order arrives from the page.",
    "অ্যানিমেশন: প্রোডাক্ট বাছাই হয়, AI ক্যাম্পেইন পেজ লেখে, Meta, TikTok ও Google ট্র্যাকিং যুক্ত হয়, লিংক কপি হয় আর পেজ থেকে অর্ডার আসে।",
  ),
  builder: loc("Campaign page", "ক্যাম্পেইন পেজ"),
  product: loc("Earbuds Pro · ৳2,500", "Earbuds Pro · ৳২,৫০০"),
  write: loc("Write with AI", "AI দিয়ে লিখুন"),
  writing: loc("Writing in Bangla…", "বাংলায় লেখা হচ্ছে…"),
  written: loc("Draft ready · you approve", "খসড়া তৈরি · আপনি অনুমোদন দিন"),
  headline: loc("Clear calls. All-day battery.", "পরিষ্কার কল। সারাদিনের ব্যাটারি।"),
  sub: loc("6-month warranty · COD in Dhaka", "৬ মাসের ওয়ারেন্টি · ঢাকায় COD"),
  orderNow: loc("Order now", "এখনই অর্ডার"),
  tracking: loc("Pixel & CAPI", "Pixel ও CAPI"),
  connected: loc("Connected", "যুক্ত"),
  copied: loc("Copied", "কপি হয়েছে"),
  newOrder: loc("New order from this page · ৳2,500", "এই পেজ থেকে নতুন অর্ডার · ৳২,৫০০"),
};

export const TRACKING_SCENE = {
  label: loc(
    "Animation: a customer places an order, the purchase event is recorded on the GridCommerce server, customer details are hashed, and the event reaches Meta, TikTok and Google.",
    "অ্যানিমেশন: কাস্টমার অর্ডার দেন, পারচেজ ইভেন্ট GridCommerce সার্ভারে রেকর্ড হয়, কাস্টমারের তথ্য হ্যাশ হয়, আর ইভেন্ট Meta, TikTok ও Google-এ পৌঁছায়।",
  ),
  placed: loc("Order placed", "অর্ডার হয়েছে"),
  server: loc("GridCommerce server", "GridCommerce সার্ভার"),
  log: [loc("Purchase · ৳2,450", "Purchase · ৳২,৪৫০"), loc("Phone & email hashed", "ফোন ও ইমেইল হ্যাশ করা"), loc("Duplicate check passed", "ডুপ্লিকেট যাচাই সম্পন্ন")],
  received: loc("Received", "পৌঁছেছে"),
  delivery: loc("COD delivered → event sent", "COD ডেলিভারড → ইভেন্ট পাঠানো"),
};

export const SOCIAL_SCENE = {
  label: loc(
    "Animation: a post is written once, Facebook, Instagram and TikTok are picked, it is scheduled for Friday 8 PM on the calendar, published, and its comments are answered.",
    "অ্যানিমেশন: একবার পোস্ট লেখা হয়, Facebook, Instagram ও TikTok বাছাই হয়, ক্যালেন্ডারে শুক্রবার রাত ৮টায় শিডিউল হয়, পাবলিশ হয়, আর কমেন্টের উত্তর দেওয়া হয়।",
  ),
  composer: loc("New post", "নতুন পোস্ট"),
  caption: loc("Eid drop is live! 10% off till Friday.", "ঈদ কালেকশন চলে এসেছে! শুক্রবার পর্যন্ত ১০% ছাড়।"),
  schedule: loc("Schedule for", "শিডিউল"),
  when: loc("Fri · 8:00 PM", "শুক্র · রাত ৮টা"),
  calendar: loc("Post calendar", "পোস্ট ক্যালেন্ডার"),
  best: loc("Best time", "সেরা সময়"),
  days: [loc("Sat", "শনি"), loc("Sun", "রবি"), loc("Mon", "সোম"), loc("Tue", "মঙ্গল"), loc("Wed", "বুধ"), loc("Thu", "বৃহঃ"), loc("Fri", "শুক্র")],
  published: loc("Published to 3 channels", "৩টি চ্যানেলে পাবলিশড"),
  comment: loc("Price koto?", "Price koto?"),
  reply: loc("Inbox e details dilam 😊", "Inbox e details dilam 😊"),
  replied: loc("Replied", "উত্তর দেওয়া হয়েছে"),
};

export const RECOVERY_SCENE = {
  label: loc(
    "Animation: a customer leaves a cart, a WhatsApp reminder with a cart link is sent, the customer returns and orders, and the remaining reminders stop.",
    "অ্যানিমেশন: কাস্টমার কার্ট ফেলে যান, কার্ট লিংকসহ WhatsApp রিমাইন্ডার যায়, কাস্টমার ফিরে এসে অর্ডার করেন, আর বাকি রিমাইন্ডার বন্ধ হয়।",
  ),
  cart: loc("Cart left", "ফেলে যাওয়া কার্ট"),
  total: loc("Total", "মোট"),
  ago: loc("40 min ago", "৪০ মিনিট আগে"),
  followUp: loc("Follow-up", "ফলোআপ"),
  steps: [
    { channel: loc("WhatsApp · after 1 hour", "WhatsApp · ১ ঘণ্টা পর"), sent: loc("Sent", "পাঠানো") },
    { channel: loc("SMS · after 24 hours", "SMS · ২৪ ঘণ্টা পর"), sent: loc("Waiting", "অপেক্ষায়") },
    { channel: loc("Email · after 3 days", "ইমেইল · ৩ দিন পর"), sent: loc("Waiting", "অপেক্ষায়") },
  ],
  stopped: loc("Stopped", "বন্ধ"),
  message: loc("Your cart is waiting. Tap to finish your order.", "আপনার কার্ট অপেক্ষায়। অর্ডার শেষ করতে ট্যাপ করুন।"),
  open: loc("Open my cart", "আমার কার্ট খুলুন"),
  restored: loc("Checkout restored", "চেকআউট ফিরে এসেছে"),
  placed: loc("Order placed", "অর্ডার হয়েছে"),
  recovered: loc("Recovered this week", "এই সপ্তাহে ফিরে এসেছে"),
};

export const MIGRATE_SCENE = {
  label: loc(
    "Animation: a Shopify or WordPress store is connected, customers, orders and products are copied into GridCommerce, a test import is checked and the store goes live.",
    "অ্যানিমেশন: Shopify বা WordPress স্টোর যুক্ত হয়, কাস্টমার, অর্ডার ও প্রোডাক্ট GridCommerce-এ আসে, টেস্ট ইমপোর্ট যাচাই হয় আর স্টোর লাইভ হয়।",
  ),
  oldStore: loc("Old store", "পুরনো স্টোর"),
  connected: loc("Connected", "যুক্ত"),
  rows: [loc("Customers", "কাস্টমার"), loc("Orders", "অর্ডার"), loc("Products", "প্রোডাক্ট")],
  importing: loc("Importing", "ইমপোর্ট চলছে"),
  test: loc("Test import", "টেস্ট ইমপোর্ট"),
  checks: [loc("Customers matched by phone", "ফোন দিয়ে কাস্টমার মিলেছে"), loc("Order history kept", "অর্ডারের ইতিহাস আছে"), loc("Stock and prices in place", "স্টক ও দাম ঠিক আছে")],
  live: loc("Your store is live", "আপনার স্টোর লাইভ"),
  welcome: loc("Nusrat Jahan · 6 past orders", "নুসরাত জাহান · আগের ৬টি অর্ডার"),
};

export const STOCK_SCENE = {
  label: loc(
    "Animation: a counter sale and an online order draw on one stock count, the website shows the same number, and a low-stock alert turns into a purchase order.",
    "অ্যানিমেশন: কাউন্টারের বিক্রি আর অনলাইন অর্ডার একই স্টক থেকে কমে, ওয়েবসাইটেও একই সংখ্যা দেখায়, আর কম স্টকের অ্যালার্ট থেকে পারচেজ অর্ডার তৈরি হয়।",
  ),
  counter: loc("Counter sale", "কাউন্টারে বিক্রি"),
  receipt: loc("Receipt R-2291", "রসিদ R-2291"),
  cash: loc("Paid in cash", "ক্যাশে পরিশোধ"),
  online: loc("Online order", "অনলাইন অর্ডার"),
  reserved: loc("Reserved", "রিজার্ভড"),
  product: loc("Earbuds Pro · Dhanmondi", "Earbuds Pro · ধানমন্ডি"),
  onHand: loc("On hand", "হাতে আছে"),
  held: loc("Reserved", "রিজার্ভড"),
  available: loc("Available", "উপলব্ধ"),
  website: loc("Your website", "আপনার ওয়েবসাইট"),
  inStock: loc("in stock", "স্টকে আছে"),
  low: loc("Low stock alert", "কম স্টকের অ্যালার্ট"),
  reorderAt: loc("Reorder point is 10", "রিঅর্ডার পয়েন্ট ১০"),
  createPo: loc("Create purchase order", "পারচেজ অর্ডার তৈরি"),
  poSent: loc("PO-118 sent to supplier", "PO-118 সাপ্লায়ারকে পাঠানো"),
};
