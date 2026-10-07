/**
 * Copy for the homepage showcase sections added in October 2026: one
 * dashboard for counter and online, channel analytics, the social planner,
 * WordPress / Shopify sync, the AI landing page builder and the mobile apps.
 *
 * Headings are split into a lead clause and a second clause the sections set
 * in a quieter tone, with an inline icon chip between them. English and
 * Bangla are separately authored; the Bangla here is a first draft for a
 * native writer to review. Text inside the product mockups is the merchant
 * app's own interface and is not localised. No figure on this page is a
 * claim about GridCommerce: every number sits inside a mockup labelled demo.
 */
import { loc } from "@/i18n/types";

export const ONE_DASHBOARD = {
  lead: loc("Counter sales and online orders.", "কাউন্টার সেল ও অনলাইন অর্ডার।"),
  tail: loc("One dashboard.", "এক ড্যাশবোর্ডে।"),
  body: loc(
    "Your shop counter, website, Facebook and phone orders sell from the same stock, update the same customer and close into the same day's cash.",
    "দোকানের কাউন্টার, ওয়েবসাইট, ফেসবুক ও ফোনের অর্ডার একই স্টক থেকে বিক্রি হয়, একই কাস্টমার প্রোফাইলে যোগ হয় এবং দিনের একই ক্যাশ হিসাবে মেলে।",
  ),
  cards: {
    live: loc("Live sales, every channel", "সব চ্যানেলের লাইভ সেল"),
    stock: loc("One stock count", "একটাই স্টক হিসাব"),
    stockBody: loc("A sale at the counter and a sale on the website take from the same shelf.", "কাউন্টার ও ওয়েবসাইটের বিক্রি একই তাক থেকে স্টক কমায়।"),
    customer: loc("One customer record", "একটাই কাস্টমার প্রোফাইল"),
    customerBody: loc("Whether she walks in or orders on Facebook, it's the same profile.", "দোকানে আসুক বা ফেসবুকে অর্ডার দিক, প্রোফাইল একটাই।"),
    cash: loc("One cash close", "একটাই দিনশেষের হিসাব"),
  },
};

export const CHANNEL_ANALYTICS = {
  lead: loc("See which channel", "কোন চ্যানেল থেকে"),
  tail: loc("actually sells.", "আসলে বিক্রি হচ্ছে, দেখুন।"),
  body: loc(
    "Orders, revenue, ad spend and returns from Facebook, Instagram, TikTok, Google and your website, side by side and up to date.",
    "ফেসবুক, ইনস্টাগ্রাম, টিকটক, গুগল ও ওয়েবসাইটের অর্ডার, আয়, বিজ্ঞাপন খরচ ও রিটার্ন, পাশাপাশি এবং হালনাগাদ।",
  ),
};

export const SOCIAL_PLANNER = {
  lead: loc("Plan posts, fill the calendar,", "পোস্ট প্ল্যান, ক্যালেন্ডার সাজানো,"),
  tail: loc("answer every comment.", "আর প্রতিটি কমেন্টের উত্তর।"),
  body: loc(
    "Write once, schedule to Facebook, Instagram and TikTok, and reply to the comments that follow from the same screen.",
    "একবার লিখুন, ফেসবুক, ইনস্টাগ্রাম ও টিকটকে শিডিউল করুন, এবং একই স্ক্রিন থেকে কমেন্টের উত্তর দিন।",
  ),
  cards: {
    composer: loc("Write and schedule", "লিখুন ও শিডিউল করুন"),
    calendar: loc("Content calendar", "কনটেন্ট ক্যালেন্ডার"),
    comments: loc("Comments, with replies drafted", "কমেন্ট, তৈরি রিপ্লাইসহ"),
    bestTime: loc("When your customers are online", "কাস্টমাররা কখন অনলাইনে থাকেন"),
  },
};

export const STORE_SYNC = {
  lead: loc("Keep your WordPress or Shopify store.", "আপনার ওয়ার্ডপ্রেস বা শপিফাই স্টোর থাকুক।"),
  tail: loc("Run it from GridCommerce.", "চালান গ্রিডকমার্স থেকে।"),
  body: loc(
    "Connect your store in a few minutes. Orders come straight into GridCommerce, and stock and prices sync back, so the two never disagree.",
    "কয়েক মিনিটে স্টোর কানেক্ট করুন। অর্ডার সরাসরি গ্রিডকমার্সে আসে, আর স্টক ও দাম স্টোরে ফিরে সিঙ্ক হয়, তাই দুই জায়গার হিসাব কখনো আলাদা হয় না।",
  ),
  points: [
    { icon: "ShoppingBag", title: loc("Orders come in", "অর্ডার চলে আসে"), body: loc("Every store order lands in your GridCommerce order list, ready to confirm and ship.", "স্টোরের প্রতিটি অর্ডার গ্রিডকমার্সের অর্ডার লিস্টে আসে, কনফার্ম ও শিপ করার জন্য প্রস্তুত।") },
    { icon: "Boxes", title: loc("Stock and prices go out", "স্টক ও দাম ফিরে যায়"), body: loc("Sell at the counter and the store's stock drops too. Change a price once.", "কাউন্টারে বিক্রি করলে স্টোরের স্টকও কমে। দাম বদলান একবারই।") },
    { icon: "Users", title: loc("Customers matched", "কাস্টমার মিলে যায়"), body: loc("Store buyers join the same customer profiles as your other channels.", "স্টোরের ক্রেতারা অন্য চ্যানেলের একই কাস্টমার প্রোফাইলে যুক্ত হন।") },
  ],
  cta: loc("See it in a demo", "ডেমোতে দেখুন"),
};

export const LANDING_BUILDER = {
  lead: loc("Describe the product.", "প্রোডাক্টের বর্ণনা দিন।"),
  tail: loc("GridAI builds the page that sells it.", "বিক্রির পেজ বানাবে GridAI।"),
  body: loc(
    "From a product and a few lines, GridAI writes a landing page, connects your Meta Pixel and Conversions API, and gives you a link to share. Orders arrive with the sale tracked.",
    "একটি প্রোডাক্ট আর কয়েক লাইনের বর্ণনা থেকে GridAI ল্যান্ডিং পেজ লেখে, মেটা পিক্সেল ও কনভার্শন API কানেক্ট করে এবং শেয়ার করার লিংক দেয়। অর্ডার আসে সেল ট্র্যাকসহ।",
  ),
  steps: [
    { title: loc("Create", "তৈরি করুন"), body: loc("Pick a product, add a line or two. GridAI writes and lays out the page.", "প্রোডাক্ট বাছুন, এক-দুই লাইন লিখুন। GridAI পেজ লিখে সাজিয়ে দেয়।") },
    { title: loc("Connect Pixel and CAPI", "পিক্সেল ও CAPI কানেক্ট"), body: loc("Meta Pixel and Conversions API on, so every purchase is counted.", "মেটা পিক্সেল ও কনভার্শন API চালু, তাই প্রতিটি পারচেজ গোনা হয়।") },
    { title: loc("Get the link", "লিংক নিন"), body: loc("A ready link for your ads, posts and chats.", "বিজ্ঞাপন, পোস্ট ও চ্যাটের জন্য প্রস্তুত লিংক।") },
    { title: loc("Make the sale", "বিক্রি করুন"), body: loc("The order comes in and the purchase goes back to Meta.", "অর্ডার আসে, আর পারচেজ ইভেন্ট মেটাতে ফিরে যায়।") },
  ],
};

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

/**
 * Store links for the mobile apps. `#` until the listings are live; replace
 * with the Play Store and App Store URLs.
 */
export const APP_LINKS = {
  googlePlay: "#",
  appStore: "#",
};
