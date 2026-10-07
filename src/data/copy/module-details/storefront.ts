import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

const IMG = "/modules/storefront";

const PAYMENTS = [
  { name: "bKash", src: "/integrations/bkash.png" },
  { name: "Nagad", src: "/integrations/nagad.png" },
  { name: "Rocket", src: "/integrations/rocket.png" },
  { name: "SSLCOMMERZ", src: "/integrations/sslcommerz.png" },
];

export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "From your post to a paid order, on one page.",
      "পোস্ট থেকে অর্ডার, এক পেজেই।",
    ),
    body: loc(
      "Build a landing page for one product in minutes and check it on your phone. Buyers order with name, phone and address, and pay cash on delivery, an advance or in full. Run flash sales, share an offers page and win back carts people left.",
      "এক প্রোডাক্টের জন্য কয়েক মিনিটে ল্যান্ডিং পেজ বানান, ফোনে দেখে নিন। ক্রেতা নাম, ফোন আর ঠিকানা দিয়ে অর্ডার করে; ক্যাশ অন ডেলিভারি, অগ্রিম বা পুরো টাকা দেয়। ফ্ল্যাশ সেল চালান, অফার পেজ শেয়ার করুন, আর ফেলে যাওয়া কার্ট থেকে বিক্রি ফেরান।",
    ),
  },
  benefits: [
    {
      icon: "LayoutTemplate",
      title: loc("Landing pages without a designer", "ডিজাইনার ছাড়াই ল্যান্ডিং পেজ"),
      body: loc(
        "Start from a COD single product, long-form, video first or blank page. Add parts like gallery, reviews, FAQ, countdown and the order form.",
        "COD সিঙ্গেল প্রোডাক্ট, লং-ফর্ম, ভিডিও ফার্স্ট বা ফাঁকা পেজ থেকে শুরু করুন। গ্যালারি, রিভিউ, FAQ, কাউন্টডাউন আর অর্ডার ফর্মের মতো অংশ যোগ করুন।",
      ),
    },
    {
      icon: "ShoppingCart",
      title: loc("Checkout made for Bangladesh", "বাংলাদেশের জন্য চেকআউট"),
      body: loc(
        "Delivery charge by zone, a coupon box, and payment by cash on delivery, bKash, Nagad, Rocket or card.",
        "জোন অনুযায়ী ডেলিভারি চার্জ, কুপন বক্স, আর ক্যাশ অন ডেলিভারি, বিকাশ, নগদ, রকেট বা কার্ডে পেমেন্ট।",
      ),
    },
    {
      icon: "Newspaper",
      title: loc("Flash sales, offers and a blog", "ফ্ল্যাশ সেল, অফার আর ব্লগ"),
      body: loc(
        "Run flash sales with a countdown and limited pieces, list every deal on an offers page, and write blog posts with categories and authors.",
        "কাউন্টডাউন আর সীমিত পিস দিয়ে ফ্ল্যাশ সেল চালান, সব অফার এক অফার পেজে দেখান, আর ক্যাটাগরি ও লেখকসহ ব্লগ লিখুন।",
      ),
    },
  ],
  heroShot: {
    src: `${IMG}/hero.webp`,
    width: 2880,
    height: 1800,
    alt: loc(
      "The landing page builder: parts on the left, a Bangla winter blanket page in the mobile preview, and price settings on the right",
      "ল্যান্ডিং পেজ বিল্ডার: বাঁয়ে অংশগুলো, মাঝে মোবাইল প্রিভিউতে বাংলায় শীতের কম্বলের পেজ, ডানে দামের সেটিং",
    ),
  },
  logos: {
    title: loc("Customers can pay with", "কাস্টমার যেভাবে পেমেন্ট করতে পারে"),
    items: PAYMENTS,
  },
  sections: [
    {
      title: loc("Build the page part by part", "অংশ জুড়ে জুড়ে পেজ বানান"),
      body: loc(
        "Pick the product, choose a starting page, then drag parts up or down. What you see is the mobile page most of your buyers will see.",
        "প্রোডাক্ট বেছে নিন, একটি শুরুর পেজ নিন, তারপর অংশগুলো উপরে-নিচে সরান। যা দেখছেন, বেশিরভাগ ক্রেতা মোবাইলে ঠিক সেটাই দেখবে।",
      ),
      points: [
        loc("Gallery, benefits, before and after, reviews, FAQ, video and more", "গ্যালারি, সুবিধা, আগে-পরে, রিভিউ, FAQ, ভিডিওসহ আরও অনেক অংশ"),
        loc("Write the page in Bangla or English with AI", "AI দিয়ে বাংলা বা ইংরেজিতে পেজের লেখা"),
        loc("Price, stock and sizes come from your product, never from AI", "দাম, স্টক আর সাইজ আসে প্রোডাক্ট থেকে, AI থেকে নয়"),
        loc("Open the page on your phone before you publish", "প্রকাশের আগে ফোনে খুলে দেখুন"),
      ],
      shot: {
        src: `${IMG}/s1.webp`,
        width: 1502,
        height: 1380,
        alt: loc(
          "Page parts list next to a mobile preview showing ৳1,290, 20% off, size choice and cash on delivery",
          "পেজের অংশের তালিকা, পাশে মোবাইল প্রিভিউ: ৳১,২৯০, ২০% ছাড়, সাইজ বাছাই আর ক্যাশ অন ডেলিভারি",
        ),
      },
    },
    {
      title: loc("A checkout buyers trust", "ক্রেতার ভরসার চেকআউট"),
      body: loc(
        "Three simple steps: details, delivery and payment. Delivery charge changes with the zone, and buyers can pay on delivery or pay now.",
        "তিনটি সহজ ধাপ: তথ্য, ডেলিভারি আর পেমেন্ট। জোন অনুযায়ী ডেলিভারি চার্জ বদলায়, ক্রেতা ডেলিভারিতে বা এখনই টাকা দিতে পারে।",
      ),
      points: [
        loc("Cash on delivery, bKash, Nagad, Rocket or card", "ক্যাশ অন ডেলিভারি, বিকাশ, নগদ, রকেট বা কার্ড"),
        loc("Show an offer on a payment method, like bKash 10% off", "পেমেন্ট মাধ্যমে অফার দেখান, যেমন বিকাশে ১০% ছাড়"),
        loc("Coupon codes, bundle discounts and free delivery over an amount", "কুপন কোড, বান্ডেল ছাড় আর নির্দিষ্ট টাকার উপরে ফ্রি ডেলিভারি"),
        loc("Delivery time and courier shown for each zone", "প্রতিটি জোনে ডেলিভারির সময় আর কুরিয়ার দেখায়"),
      ],
      shot: {
        src: `${IMG}/s2.webp`,
        width: 1728,
        height: 1024,
        alt: loc(
          "Checkout payment step with cash on delivery, bKash with 10% off, Nagad, Rocket and card by SSLCOMMERZ",
          "চেকআউটের পেমেন্ট ধাপ: ক্যাশ অন ডেলিভারি, ১০% ছাড়সহ বিকাশ, নগদ, রকেট আর SSLCOMMERZ-এ কার্ড",
        ),
      },
      logos: PAYMENTS,
    },
    {
      title: loc("Send an order link from the chat", "চ্যাট থেকে অর্ডার লিংক পাঠান"),
      body: loc(
        "Pick the items for the customer and send a link. They only add their name, phone and address, and choose how to pay.",
        "কাস্টমারের জন্য পণ্য বেছে একটি লিংক পাঠান। তিনি শুধু নাম, ফোন আর ঠিকানা দেবেন, আর কীভাবে টাকা দেবেন বেছে নেবেন।",
      ),
      points: [
        loc("Items and total are already filled in", "পণ্য আর মোট টাকা আগে থেকেই দেওয়া"),
        loc("Pay on delivery, pay the delivery charge now, or pay in full", "ডেলিভারিতে দিন, এখন শুধু ডেলিভারি চার্জ দিন, বা পুরো টাকা দিন"),
        loc("Shop pickup as a free delivery option", "দোকান থেকে নিয়ে যাওয়ার ফ্রি অপশন"),
        loc("The order lands in your orders list", "অর্ডার সরাসরি আপনার অর্ডার তালিকায় আসে"),
      ],
      shot: {
        src: `${IMG}/s3.webp`,
        width: 2064,
        height: 940,
        alt: loc(
          "Order link page: the shop picked a phone holder and a charger, total ৳2,359, the customer adds their details",
          "অর্ডার লিংক পেজ: দোকান বেছে দিয়েছে ফোন হোল্ডার আর চার্জার, মোট ৳২,৩৫৯, কাস্টমার শুধু নিজের তথ্য দেবেন",
        ),
      },
    },
    {
      title: loc("Flash sales and an offers page", "ফ্ল্যাশ সেল আর অফার পেজ"),
      body: loc(
        "Set a start, an end and how many pieces sell at the sale price. Buyers see a countdown and how much has sold, and every deal sits on one offers page.",
        "শুরু, শেষ আর সেল দামে কত পিস বিক্রি হবে ঠিক করুন। ক্রেতা কাউন্টডাউন আর কতটা বিক্রি হয়ে গেছে দেখে, আর সব অফার থাকে এক অফার পেজে।",
      ),
      points: [
        loc("Countdown and sold bar on every sale", "প্রতিটি সেলে কাউন্টডাউন আর বিক্রির বার"),
        loc("Coupons, flash sales and bKash or card offers in one place", "কুপন, ফ্ল্যাশ সেল আর বিকাশ বা কার্ড অফার এক জায়গায়"),
        loc("Buyers can ask for one SMS when a sale starts", "সেল শুরু হলে একটি SMS পেতে ক্রেতা অনুরোধ করতে পারে"),
        loc("See pieces sold and sales for each flash sale", "প্রতিটি ফ্ল্যাশ সেলে কত পিস আর কত টাকার বিক্রি, দেখুন"),
      ],
      shot: {
        src: `${IMG}/s4.webp`,
        width: 2656,
        height: 896,
        alt: loc(
          "Offers page with a live Weekend Mega Sale, a countdown and products showing how much has sold",
          "অফার পেজে চলমান Weekend Mega Sale, কাউন্টডাউন আর পণ্যগুলোর কতটা বিক্রি হয়েছে",
        ),
      },
    },
    {
      title: loc("Win back carts people left", "ফেলে যাওয়া কার্ট থেকে বিক্রি ফেরান"),
      body: loc(
        "When someone leaves a cart or checkout, you see who it was and what they wanted. Reminders go out on their own, and big carts can go to your team for a call.",
        "কেউ কার্ট বা চেকআউটে এসে চলে গেলে দেখবেন কে, আর কী কিনতে চেয়েছিল। রিমাইন্ডার নিজে থেকেই যায়, আর বড় কার্ট আপনার টিমের কাছে কলের জন্য যায়।",
      ),
      points: [
        loc("Up to three reminders by SMS, WhatsApp or email", "SMS, হোয়াটসঅ্যাপ বা ইমেইলে তিন ধাপ পর্যন্ত রিমাইন্ডার"),
        loc("Reminders respect message limits and quiet hours", "মেসেজের সীমা আর বিরতির সময় মেনে রিমাইন্ডার যায়"),
        loc("Payment issues and out-of-stock carts are shown apart", "পেমেন্ট সমস্যা আর স্টক নেই এমন কার্ট আলাদা দেখায়"),
        loc("See cart value at risk and orders you won back", "ঝুঁকিতে থাকা কার্টের টাকা আর ফেরানো অর্ডার দেখুন"),
      ],
      shot: {
        src: `${IMG}/s5.webp`,
        width: 2236,
        height: 1442,
        alt: loc(
          "Abandoned carts with cart value at risk, recovered orders, automatic reminders on, and each cart's next step",
          "ফেলে যাওয়া কার্ট: ঝুঁকিতে থাকা টাকা, ফেরানো অর্ডার, চালু থাকা অটো রিমাইন্ডার আর প্রতিটি কার্টের পরের ধাপ",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "LayoutTemplate",
      title: loc("Choose a starting page", "শুরুর পেজ বাছুন"),
      body: loc(
        "Pick the product and a template such as COD single product.",
        "প্রোডাক্ট আর একটি টেমপ্লেট বাছুন, যেমন COD সিঙ্গেল প্রোডাক্ট।",
      ),
    },
    {
      icon: "Tag",
      title: loc("Set the offer", "অফার ঠিক করুন"),
      body: loc(
        "Show the old price, the saving and the parts that sell.",
        "পুরনো দাম, কত সাশ্রয় আর বিক্রি বাড়ায় এমন অংশ দেখান।",
      ),
    },
    {
      icon: "Smartphone",
      title: loc("Check it on your phone", "ফোনে দেখে নিন"),
      body: loc(
        "Preview on mobile or open the page on your own phone.",
        "মোবাইল প্রিভিউ দেখুন বা নিজের ফোনে পেজটি খুলুন।",
      ),
    },
    {
      icon: "Globe",
      title: loc("Publish and share", "প্রকাশ করে শেয়ার করুন"),
      body: loc(
        "Put the link in your posts, ads and chats.",
        "লিংকটি পোস্ট, বিজ্ঞাপন আর চ্যাটে দিন।",
      ),
    },
    {
      icon: "RefreshCw",
      title: loc("Win back left carts", "ফেলে যাওয়া কার্ট ফেরান"),
      body: loc(
        "Reminders bring back buyers who did not finish.",
        "যারা অর্ডার শেষ করেনি, রিমাইন্ডার তাদের ফিরিয়ে আনে।",
      ),
    },
  ],
  faqs: [
    {
      q: loc("Can I use my own domain?", "নিজের ডোমেইন ব্যবহার করা যাবে?"),
      a: loc(
        "Yes. Every shop starts with a free GridCommerce address with SSL. To use your own domain, add the DNS records shown in Domains settings and connect it. DNS changes can take up to 24 hours.",
        "হ্যাঁ। প্রতিটি শপ SSL-সহ একটি ফ্রি GridCommerce ঠিকানা দিয়ে শুরু হয়। নিজের ডোমেইন ব্যবহার করতে Domains সেটিংসে দেখানো DNS রেকর্ড যোগ করে সংযোগ দিন। DNS বদল কার্যকর হতে ২৪ ঘণ্টা পর্যন্ত লাগতে পারে।",
      ),
    },
    {
      q: loc("Where do the orders from my page go?", "পেজ থেকে আসা অর্ডার কোথায় যায়?"),
      a: loc(
        "Straight into your orders list, like any other order. From there you verify, approve and book the courier.",
        "সরাসরি আপনার অর্ডার তালিকায়, অন্য অর্ডারের মতোই। সেখান থেকে যাচাই, অ্যাপ্রুভ আর কুরিয়ার বুক করুন।",
      ),
    },
    {
      q: loc("Can AI change my price by mistake?", "AI কি ভুল করে দাম বদলে দিতে পারে?"),
      a: loc(
        "No. AI only helps with the words. Price, stock and sizes always come from your product, so a buyer never sees a wrong price.",
        "না। AI শুধু লেখায় সাহায্য করে। দাম, স্টক আর সাইজ সবসময় প্রোডাক্ট থেকেই আসে, তাই ক্রেতা কখনো ভুল দাম দেখে না।",
      ),
    },
    {
      q: loc("Can buyers pay an advance instead of full COD?", "পুরো COD-এর বদলে অগ্রিম নেওয়া যায়?"),
      a: loc(
        "Yes. On an order link the buyer can pay just the delivery charge now by bKash or Nagad and the rest on delivery, or pay the full amount.",
        "হ্যাঁ। অর্ডার লিংকে ক্রেতা এখন শুধু ডেলিভারি চার্জ বিকাশ বা নগদে দিয়ে বাকিটা ডেলিভারিতে দিতে পারে, অথবা পুরো টাকাই দিতে পারে।",
      ),
    },
  ],
};
