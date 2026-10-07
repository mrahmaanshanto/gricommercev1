import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

const IMG = "/modules/sales-channels";

export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "Add a product once. Sell it everywhere.",
      "প্রোডাক্ট একবার যোগ করুন। বিক্রি করুন সব জায়গায়।",
    ),
    body: loc(
      "Keep your products in GridCommerce and send them to your Facebook and Instagram shop, Google Shopping, your WordPress website and your Shopify store. Prices and stock stay the same everywhere, and any problem shows in one list.",
      "প্রোডাক্ট GridCommerce-এ রাখুন, আর পাঠিয়ে দিন আপনার ফেসবুক ও ইনস্টাগ্রাম শপে, গুগল শপিংয়ে, ওয়ার্ডপ্রেস ওয়েবসাইটে আর শপিফাই স্টোরে। দাম আর স্টক সব জায়গায় একই থাকে, আর কোনো সমস্যা হলে এক তালিকায় দেখায়।",
    ),
  },
  benefits: [
    {
      icon: "RefreshCw",
      title: loc("Same price and stock everywhere", "সব জায়গায় একই দাম আর স্টক"),
      body: loc(
        "Products, stock, prices and images sync by themselves. Sell the last piece at the shop and your channels know.",
        "প্রোডাক্ট, স্টক, দাম আর ছবি নিজে থেকেই সিঙ্ক হয়। দোকানে শেষ পিসটা বিক্রি হলে চ্যানেলগুলোও জেনে যায়।",
      ),
    },
    {
      icon: "ShoppingCart",
      title: loc("Website orders come home", "ওয়েবসাইটের অর্ডার চলে আসে এখানেই"),
      body: loc(
        "Orders from your WooCommerce and Shopify store come into your orders list, so you pack and ship them like any other order.",
        "WooCommerce আর Shopify স্টোরের অর্ডার আপনার অর্ডার তালিকায় চলে আসে, অন্য অর্ডারের মতোই প্যাক করে পাঠান।",
      ),
    },
    {
      icon: "AlertCircle",
      title: loc("Problems in plain words", "সমস্যা সহজ ভাষায়"),
      body: loc(
        "If a product cannot sync, you see what is wrong and how to fix it. Retry one item or all failed items at once.",
        "কোনো প্রোডাক্ট সিঙ্ক না হলে কী সমস্যা আর কীভাবে ঠিক করবেন, তা দেখায়। একটা বা সব ব্যর্থ আইটেম একসঙ্গে আবার চেষ্টা করুন।",
      ),
    },
  ],
  heroShot: {
    src: `${IMG}/hero.webp`,
    width: 2880,
    height: 1800,
    alt: loc(
      "Sales channels overview: Meta Commerce, Google Merchant Center, WooCommerce and Shopify with products synced, issues and last sync",
      "সেলস চ্যানেলের সারাংশ: Meta Commerce, Google Merchant Center, WooCommerce আর Shopify, কতগুলো প্রোডাক্ট সিঙ্ক হয়েছে, সমস্যা আর শেষ সিঙ্ক",
    ),
  },
  logos: {
    title: loc("Works with", "যেগুলোর সঙ্গে কাজ করে"),
    items: [
      { name: "Facebook", src: "/integrations/facebook-page.png" },
      { name: "Instagram", src: "/integrations/instagram.png" },
      { name: "WooCommerce (WordPress)", src: "/integrations/wordpress.webp" },
      { name: "Shopify", src: "/integrations/shopify.webp" },
    ],
  },
  sections: [
    {
      title: loc("Your Facebook and Instagram shop", "আপনার ফেসবুক আর ইনস্টাগ্রাম শপ"),
      body: loc(
        "Connect your Meta catalog and your products show on Facebook and Instagram. Each product shows its status, price and stock on Meta.",
        "Meta ক্যাটালগ কানেক্ট করুন, আপনার প্রোডাক্ট ফেসবুক আর ইনস্টাগ্রামে দেখাবে। প্রতিটি প্রোডাক্টের Meta-তে অবস্থা, দাম আর স্টক দেখা যায়।",
      ),
      points: [
        loc("Synced, needs attention, failed, processing or not published", "সিঙ্কড, মনোযোগ দরকার, ব্যর্থ, প্রসেসিং বা অপ্রকাশিত"),
        loc("Draft products are not sent", "ড্রাফট প্রোডাক্ট পাঠানো হয় না"),
        loc("Auto sync on, or press Sync now", "অটো সিঙ্ক চালু রাখুন, বা Sync now চাপুন"),
        loc("Remove a product from Meta when you want", "চাইলে কোনো প্রোডাক্ট Meta থেকে সরিয়ে দিন"),
      ],
      shot: {
        src: `${IMG}/s1.webp`,
        width: 2204,
        height: 1150,
        alt: loc(
          "Meta Commerce connected to Facebook and Instagram, with each product's Meta status, price and stock",
          "ফেসবুক ও ইনস্টাগ্রামে কানেক্টেড Meta Commerce, প্রতিটি প্রোডাক্টের Meta স্ট্যাটাস, দাম আর স্টক",
        ),
      },
      logos: [
        { name: "Facebook", src: "/integrations/facebook-page.png" },
        { name: "Instagram", src: "/integrations/instagram.png" },
      ],
    },
    {
      title: loc("Show up on Google Shopping", "গুগল শপিংয়ে দেখান"),
      body: loc(
        "Connect Google Merchant Center so your products can appear in Google Search and the Shopping tab. You see which products Google approved, limited or disapproved.",
        "Google Merchant Center কানেক্ট করুন, যাতে আপনার প্রোডাক্ট গুগল সার্চ আর শপিং ট্যাবে দেখাতে পারে। গুগল কোন প্রোডাক্ট অনুমোদন করেছে, সীমিত করেছে বা বাতিল করেছে, দেখতে পান।",
      ),
      points: [
        loc("Approved, limited, disapproved and processing tabs", "অনুমোদিত, সীমিত, বাতিল আর প্রসেসিংয়ের আলাদা ট্যাব"),
        loc("The reason is shown next to each problem product", "প্রতিটি সমস্যার প্রোডাক্টের পাশে কারণ লেখা থাকে"),
        loc("Price and stock come from your stock list", "দাম আর স্টক আসে আপনার স্টক তালিকা থেকে"),
        loc("Out-of-stock products can be hidden", "আউট অফ স্টক প্রোডাক্ট লুকিয়ে রাখা যায়"),
      ],
      shot: {
        src: `${IMG}/s2.webp`,
        width: 2204,
        height: 1150,
        alt: loc(
          "Google Merchant Center: 18 products approved, 8 limited, 4 disapproved, with price and stock for each",
          "Google Merchant Center: ১৮টি প্রোডাক্ট অনুমোদিত, ৮টি সীমিত, ৪টি বাতিল, প্রতিটির দাম আর স্টক",
        ),
      },
    },
    {
      title: loc("Your website, in sync both ways", "আপনার ওয়েবসাইট, দুই দিকেই সিঙ্ক"),
      body: loc(
        "Connect your WooCommerce store on WordPress and choose what syncs: products, orders, customers, categories, coupons, blog posts and pages. A Shopify store can be connected too, for products, prices, stock and orders.",
        "ওয়ার্ডপ্রেসের WooCommerce স্টোর কানেক্ট করুন আর বেছে নিন কী সিঙ্ক হবে: প্রোডাক্ট, অর্ডার, কাস্টমার, ক্যাটাগরি, কুপন, ব্লগ পোস্ট আর পেজ। Shopify স্টোরও কানেক্ট করা যায়, প্রোডাক্ট, দাম, স্টক আর অর্ডারের জন্য।",
      ),
      points: [
        loc("Products, orders and customers sync instantly", "প্রোডাক্ট, অর্ডার আর কাস্টমার সঙ্গে সঙ্গে সিঙ্ক হয়"),
        loc("New website orders arrive in your orders list", "ওয়েবসাইটের নতুন অর্ডার আপনার অর্ডার তালিকায় আসে"),
        loc("Order status changes show on the website too", "অর্ডারের স্ট্যাটাস বদলালে ওয়েবসাইটেও বদলায়"),
        loc("Latest changes show which way each update went", "সর্বশেষ পরিবর্তনে দেখায় কোন দিক থেকে কোন আপডেট গেল"),
      ],
      shot: {
        src: `${IMG}/s3.webp`,
        width: 1366,
        height: 1648,
        alt: loc(
          "WordPress sync: what syncs with how many items and when, and how each order status shows in WooCommerce",
          "ওয়ার্ডপ্রেস সিঙ্ক: কী সিঙ্ক হয়, কতগুলো আইটেম আর কখন, আর প্রতিটি অর্ডার স্ট্যাটাস WooCommerce-এ কীভাবে দেখায়",
        ),
      },
      logos: [
        { name: "WooCommerce (WordPress)", src: "/integrations/wordpress.webp" },
        { name: "Shopify", src: "/integrations/shopify.webp" },
      ],
    },
    {
      title: loc("Fix sync problems from one list", "এক তালিকা থেকে সিঙ্কের সমস্যা ঠিক করুন"),
      body: loc(
        "Problems from every channel come into one list: a missing SKU, a photo that could not sync, a missing GTIN. Open one to see what is wrong and how to fix it.",
        "সব চ্যানেলের সমস্যা আসে এক তালিকায়: SKU নেই, ছবি সিঙ্ক হয়নি, GTIN নেই। একটা খুললেই দেখায় কী সমস্যা আর কীভাবে ঠিক করবেন।",
      ),
      points: [
        loc("Needs attention, failed, processing and resolved tabs", "মনোযোগ দরকার, ব্যর্থ, প্রসেসিং আর সমাধান হয়েছে, আলাদা ট্যাব"),
        loc("Retry all failed items in one click", "এক ক্লিকে সব ব্যর্থ আইটেম আবার চেষ্টা"),
        loc("Fix the product and it syncs again", "প্রোডাক্ট ঠিক করলেই আবার সিঙ্ক হয়"),
        loc("Get told in the app, by email or by SMS", "অ্যাপে, ইমেইলে বা SMS-এ জানিয়ে দেয়"),
      ],
      shot: {
        src: `${IMG}/s4.webp`,
        width: 2204,
        height: 1066,
        alt: loc(
          "Sync issues: 18 open problems across Meta, WooCommerce and Google Merchant, with a Retry all failed button",
          "সিঙ্ক সমস্যা: Meta, WooCommerce আর Google Merchant মিলিয়ে ১৮টি খোলা সমস্যা, আর সব ব্যর্থ আবার চেষ্টার বাটন",
        ),
      },
    },
    {
      title: loc("You choose what syncs", "কী সিঙ্ক হবে আপনিই ঠিক করুন"),
      body: loc(
        "Turn product, stock, price and image sync on or off. Choose how often to sync and how to send products with variants.",
        "প্রোডাক্ট, স্টক, দাম আর ছবি সিঙ্ক চালু বা বন্ধ করুন। কত পর পর সিঙ্ক হবে আর ভ্যারিয়েন্টওয়ালা প্রোডাক্ট কীভাবে যাবে, বেছে নিন।",
      ),
      points: [
        loc("Sync every 15 minutes, every hour, every 6 hours or once a day", "প্রতি ১৫ মিনিট, প্রতি ঘণ্টা, প্রতি ৬ ঘণ্টা বা দিনে একবার সিঙ্ক"),
        loc("Send each variant as its own item, or one item per product", "প্রতিটি ভ্যারিয়েন্ট আলাদা আইটেম, বা প্রোডাক্টপ্রতি একটি আইটেম"),
        loc("Hide out-of-stock products on your channels", "আউট অফ স্টক প্রোডাক্ট চ্যানেলে লুকিয়ে রাখুন"),
        loc("Auto sync on or off for each channel", "প্রতিটি চ্যানেলে আলাদা করে অটো সিঙ্ক চালু বা বন্ধ"),
      ],
      shot: {
        src: `${IMG}/s5.webp`,
        width: 2080,
        height: 1394,
        alt: loc(
          "Channel settings: sync switches, sync issue alerts and each connected channel with auto sync",
          "চ্যানেল সেটিংস: সিঙ্কের সুইচ, সিঙ্ক সমস্যার নোটিফিকেশন আর অটো সিঙ্কসহ প্রতিটি কানেক্টেড চ্যানেল",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "Network",
      title: loc("Connect a channel", "চ্যানেল কানেক্ট করুন"),
      body: loc(
        "Connect Meta, Google Merchant Center, WooCommerce or Shopify from one page.",
        "এক পেজ থেকেই Meta, Google Merchant Center, WooCommerce বা Shopify কানেক্ট করুন।",
      ),
    },
    {
      icon: "Settings",
      title: loc("Choose what syncs", "কী সিঙ্ক হবে বেছে নিন"),
      body: loc(
        "Pick products, stock, prices and images, and how often.",
        "প্রোডাক্ট, স্টক, দাম আর ছবি, আর কত পর পর, বেছে নিন।",
      ),
    },
    {
      icon: "Send",
      title: loc("Products go live", "প্রোডাক্ট লাইভ হয়"),
      body: loc(
        "Active products are sent; drafts stay at home.",
        "অ্যাক্টিভ প্রোডাক্ট পাঠানো হয়; ড্রাফট থেকে যায়।",
      ),
    },
    {
      icon: "ShoppingCart",
      title: loc("Orders come back", "অর্ডার ফিরে আসে"),
      body: loc(
        "WooCommerce and Shopify orders land in your orders list.",
        "WooCommerce আর Shopify-এর অর্ডার আপনার অর্ডার তালিকায় আসে।",
      ),
    },
    {
      icon: "AlertCircle",
      title: loc("Fix any issue", "সমস্যা ঠিক করুন"),
      body: loc(
        "See the problem in plain words, fix it and retry.",
        "সহজ ভাষায় সমস্যা দেখুন, ঠিক করুন, আবার চেষ্টা করুন।",
      ),
    },
  ],
  faqs: [
    {
      q: loc("Do orders from other channels come into GridCommerce?", "অন্য চ্যানেলের অর্ডার কি GridCommerce-এ আসে?"),
      a: loc(
        "Orders from your WooCommerce and Shopify store come into your orders list. Meta and Google Merchant Center get your products, prices, stock and images; they do not send orders back.",
        "WooCommerce আর Shopify স্টোরের অর্ডার আপনার অর্ডার তালিকায় আসে। Meta আর Google Merchant Center আপনার প্রোডাক্ট, দাম, স্টক আর ছবি পায়; সেখান থেকে অর্ডার ফেরত আসে না।",
      ),
    },
    {
      q: loc("What happens when a product sells out?", "কোনো প্রোডাক্ট শেষ হয়ে গেলে কী হয়?"),
      a: loc(
        "With stock sync on, the channel shows it as out of stock. You can also turn on \"Hide out-of-stock products\" so it is hidden on your channels.",
        "স্টক সিঙ্ক চালু থাকলে চ্যানেলে সেটা আউট অফ স্টক দেখায়। চাইলে \"Hide out-of-stock products\" চালু করুন, তাহলে চ্যানেলে লুকিয়ে থাকবে।",
      ),
    },
    {
      q: loc("Why is a product not showing on Google?", "গুগলে কোনো প্রোডাক্ট দেখাচ্ছে না কেন?"),
      a: loc(
        "Google may have limited or disapproved it, for example for a missing GTIN, a missing photo or an image that is too small. The reason and the fix are shown on the product and in Sync issues.",
        "গুগল হয়তো সেটা সীমিত বা বাতিল করেছে, যেমন GTIN নেই, ছবি নেই বা ছবি খুব ছোট। কারণ আর সমাধান প্রোডাক্টে আর Sync issues-এ দেখায়।",
      ),
    },
    {
      q: loc("Are draft products sent to my channels?", "ড্রাফট প্রোডাক্ট কি চ্যানেলে যায়?"),
      a: loc(
        "No. Draft products are not sent, so you can finish a product before customers see it. Make it active when it is ready to sell.",
        "না। ড্রাফট প্রোডাক্ট পাঠানো হয় না, তাই কাস্টমার দেখার আগেই প্রোডাক্ট গুছিয়ে নিতে পারেন। বিক্রির জন্য তৈরি হলে অ্যাক্টিভ করুন।",
      ),
    },
  ],
};
