import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

/**
 * Offers & Loyalty module page. Every claim and figure comes from the merchant
 * app's Marketing screens: Offers, Coupons, New coupon, Flash sales, Loyalty,
 * Product points, Store credit, Invite a friend and Smart offers.
 */
export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "Discounts and points that bring customers back.",
      "ডিসকাউন্ট আর পয়েন্টে কাস্টমার বারবার ফিরে আসে।",
    ),
    body: loc(
      "Make a coupon in a minute, run an Eid offer or a flash sale, and test it on a sample cart first. Repeat customers earn points, move up levels and get offers by SMS or WhatsApp. It all works on your website and at the shop counter.",
      "এক মিনিটে কুপন বানান, ঈদ অফার বা ফ্ল্যাশ সেল চালান, আর চালুর আগে নমুনা কার্টে পরীক্ষা করে নিন। নিয়মিত কাস্টমার পয়েন্ট পান, লেভেলে ওঠেন, আর SMS বা WhatsApp-এ অফার পান। ওয়েবসাইট আর দোকানের কাউন্টার—দুই জায়গাতেই চলে।",
    ),
  },
  benefits: [
    {
      icon: "TicketPercent",
      title: loc("Every kind of offer", "সব ধরনের অফার"),
      body: loc(
        "Taka off, % off, free delivery, buy X get Y, quantity discount, free gift and bKash offers. See what is running and what starts soon.",
        "টাকা ছাড়, % ছাড়, ফ্রি ডেলিভারি, Buy X Get Y, বেশি কিনলে ছাড়, ফ্রি গিফট আর বিকাশ অফার। কোনটা চলছে আর কোনটা শুরু হবে, এক নজরে।",
      ),
    },
    {
      icon: "Crown",
      title: loc("Points that bring them back", "পয়েন্টে কাস্টমার ফেরে"),
      body: loc(
        "Customers earn points on every buy, get welcome and birthday points, and move up from Member to Platinum.",
        "প্রতিটি কেনায় পয়েন্ট, প্রথম অর্ডার আর জন্মদিনে উপহার পয়েন্ট, আর মেম্বার থেকে প্লাটিনাম পর্যন্ত লেভেলে ওঠা।",
      ),
    },
    {
      icon: "Share2",
      title: loc("Customers bring their friends", "কাস্টমারই আনেন নতুন কাস্টমার"),
      body: loc(
        "Each customer gets an invite code. The reward waits until the friend’s order is delivered, with limits and a check for fake invites.",
        "প্রত্যেক কাস্টমার একটা ইনভাইট কোড পান। বন্ধুর অর্ডার ডেলিভারি হওয়ার পরই রিওয়ার্ড—সীমা আর ভুয়া ইনভাইট যাচাইসহ।",
      ),
    },
  ],
  heroShot: {
    src: "/modules/offers-loyalty/hero.webp",
    width: 2880,
    height: 1800,
    alt: loc(
      "Offers & promo page with ৳3,12,400 sales from offers this month and the running coupons, bKash offer and free delivery offer",
      "অফার ও প্রোমো পেজ: এ মাসে অফার থেকে ৳৩,১২,৪০০ বিক্রি, আর চলমান কুপন, বিকাশ অফার ও ফ্রি ডেলিভারি অফার",
    ),
  },
  logos: {
    title: loc("Offers go out by", "অফার পাঠানো হয়"),
    items: [
      { name: "WhatsApp", src: "/integrations/whatsapp-business.png" },
      { name: "SMS", src: "/integrations/sms-gateway.png" },
      { name: "Email", src: "/integrations/email.png" },
    ],
  },
  sections: [
    {
      title: loc("Make a coupon and test it first", "কুপন বানান, আগে পরীক্ষা করুন"),
      body: loc(
        "Choose what the customer gets, who can use it, how they must pay, and where and when it works. Before it goes live, test it on a sample cart and see the final bill.",
        "কাস্টমার কী পাবেন, কে ব্যবহার করতে পারবেন, কীভাবে পেমেন্ট করতে হবে, আর কোথায় ও কখন চলবে—ঠিক করুন। চালুর আগে নমুনা কার্টে পরীক্ষা করে শেষ বিল দেখে নিন।",
      ),
      points: [
        loc("Customer types a code, or it applies by itself", "কাস্টমার কোড দেবেন, বা নিজে থেকেই ছাড় পাবেন"),
        loc("For everyone, first orders, Gold and Platinum members or one customer", "সবার জন্য, শুধু প্রথম অর্ডারে, গোল্ড-প্লাটিনাম মেম্বার বা একজন কাস্টমার"),
        loc("Website, shop counter or both", "ওয়েবসাইট, দোকানের কাউন্টার বা দুটোই"),
        loc("Choose which offers it can combine with", "কোন অফারের সঙ্গে মিলবে, ঠিক করে দিন"),
      ],
      shot: {
        src: "/modules/offers-loyalty/s1.webp",
        width: 2100,
        height: 1400,
        alt: loc(
          "Making the EID300 code: ৳300 off on bills of ৳2,000 or more, with a test cart on the side",
          "EID300 কোড বানানো: ৳২,০০০ বা বেশি বিলে ৳৩০০ ছাড়, পাশে পরীক্ষার কার্ট",
        ),
      },
    },
    {
      title: loc("Flash sales with a timer", "টাইমারসহ ফ্ল্যাশ সেল"),
      body: loc(
        "Set a start and an end time, and the sale runs by itself. Watch pieces sold, time left and sales while it runs.",
        "শুরু আর শেষের সময় দিন, সেল নিজে থেকেই চলবে। চলার সময়েই দেখুন কত পিস বিক্রি হলো, কত সময় বাকি আর কত টাকা এল।",
      ),
      points: [
        loc("Running, coming soon and ended in one list", "চলমান, আসন্ন আর শেষ হওয়া সেল এক তালিকায়"),
        loc("Show the sale on your home page", "সেলটি ওয়েবসাইটের হোম পেজে দেখান"),
        loc("See the best seller of the month", "মাসের সবচেয়ে বেশি বিক্রি হওয়া পণ্য দেখুন"),
        loc("Pause any offer with one click", "এক ক্লিকে যেকোনো অফার থামান"),
      ],
      shot: {
        src: "/modules/offers-loyalty/s2.webp",
        width: 2210,
        height: 650,
        alt: loc(
          "Flash sales: Weekend Mega Sale and Night Deals running, with time left and pieces sold",
          "ফ্ল্যাশ সেল: উইকেন্ড মেগা সেল আর নাইট ডিলস চলছে, বাকি সময় আর বিক্রি হওয়া পিসসহ",
        ),
      },
    },
    {
      title: loc("Points and levels for repeat customers", "নিয়মিত কাস্টমারের জন্য পয়েন্ট ও লেভেল"),
      body: loc(
        "Decide how many points a customer earns for every ৳100, what one point is worth and how much of a bill points can pay. Higher levels earn more points and get a discount at the counter.",
        "প্রতি ৳১০০-তে কত পয়েন্ট, এক পয়েন্টের দাম কত, আর বিলের কতটুকু পয়েন্টে দেওয়া যাবে—আপনি ঠিক করুন। উঁচু লেভেলে বেশি পয়েন্ট, আর কাউন্টারে বাড়তি ছাড়।",
      ),
      points: [
        loc("Welcome points on the first order and birthday points", "প্রথম অর্ডারে স্বাগত পয়েন্ট, জন্মদিনে উপহার পয়েন্ট"),
        loc("Member, Silver, Gold and Platinum levels", "মেম্বার, সিলভার, গোল্ড আর প্লাটিনাম লেভেল"),
        loc("Normal, double or no points for each product", "প্রতিটি পণ্যে সাধারণ, দ্বিগুণ বা শূন্য পয়েন্ট"),
        loc("Customers get an SMS in Bangla with their points", "কাস্টমার বাংলায় SMS-এ পয়েন্টের খবর পান"),
      ],
      shot: {
        src: "/modules/offers-loyalty/s3.webp",
        width: 2210,
        height: 1490,
        alt: loc(
          "Loyalty rules: 1 point for every ৳100, a worked example for a Gold member and the four member levels",
          "লয়্যালটির নিয়ম: প্রতি ৳১০০-তে ১ পয়েন্ট, একজন গোল্ড মেম্বারের উদাহরণ আর চারটি মেম্বার লেভেল",
        ),
      },
    },
    {
      title: loc("Smart offers that send themselves", "নিজে থেকেই যায় স্মার্ট অফার"),
      body: loc(
        "An offer goes out when a customer does something: buys a phone, stops ordering for 30 days or reaches Gold. It is sent by SMS, WhatsApp or email.",
        "কাস্টমার কিছু করলেই অফার চলে যায়: ফোন কিনলেন, ৩০ দিন অর্ডার করেননি, বা গোল্ড লেভেলে উঠলেন। যায় SMS, WhatsApp বা ইমেইলে।",
      ),
      points: [
        loc("Win back customers who stopped ordering", "যারা অর্ডার বন্ধ করেছেন, তাদের ফিরিয়ে আনুন"),
        loc("Offer a cover after someone buys a phone", "ফোন কেনার পর কভারে ছাড় দিন"),
        loc("Send a gift to a group, like your loyal customers", "একটা গ্রুপকে উপহার পাঠান, যেমন নিয়মিত কাস্টমারদের"),
        loc("See sent, used and sales for each offer", "প্রতিটি অফার কতজন পেলেন, কতজন নিলেন, কত বিক্রি হলো"),
      ],
      shot: {
        src: "/modules/offers-loyalty/s4.webp",
        width: 2210,
        height: 1010,
        alt: loc(
          "Smart offers list: Win them back, Bought a phone add a case, Welcome to Gold and more, with sends and sales",
          "স্মার্ট অফারের তালিকা: Win them back, ফোনের সঙ্গে কভার, Welcome to Gold—পাঠানো ও বিক্রিসহ",
        ),
      },
      logos: [
        { name: "WhatsApp", src: "/integrations/whatsapp-business.png" },
        { name: "SMS", src: "/integrations/sms-gateway.png" },
        { name: "Email", src: "/integrations/email.png" },
      ],
    },
    {
      title: loc("Invite a friend and store credit", "বন্ধুকে আমন্ত্রণ আর স্টোর ক্রেডিট"),
      body: loc(
        "Every customer can share an invite code and earn a share of the friend’s first order once it is delivered. Rewards, returns and sorry gifts can go out as store credit for the next buy.",
        "প্রত্যেক কাস্টমার ইনভাইট কোড শেয়ার করে বন্ধুর প্রথম অর্ডারের একটা অংশ পান—অর্ডার ডেলিভারি হওয়ার পর। রিওয়ার্ড, রিটার্ন বা দুঃখপ্রকাশের উপহার স্টোর ক্রেডিট হিসেবে পরের কেনায় ব্যবহার করা যায়।",
      ),
      points: [
        loc("The reward waits a few days after delivery", "ডেলিভারির পর কয়েক দিন অপেক্ষা করে রিওয়ার্ড"),
        loc("Monthly and lifetime limits for each customer", "প্রত্যেক কাস্টমারের মাসিক ও মোট সীমা"),
        loc("Same address or device is held for you to check", "একই ঠিকানা বা ডিভাইস হলে আপনার যাচাইয়ের জন্য আটকে থাকে"),
        loc("Store credit is never paid out as cash", "স্টোর ক্রেডিট কখনো নগদে দেওয়া হয় না"),
      ],
      shot: {
        src: "/modules/offers-loyalty/s5.webp",
        width: 2220,
        height: 840,
        alt: loc(
          "Invite a friend: 69 friends joined, ৳9,465 in rewards and the top sharers with their invite codes",
          "বন্ধুকে আমন্ত্রণ: ৬৯ জন বন্ধু যোগ দিয়েছেন, ৳৯,৪৬৫ রিওয়ার্ড, আর ইনভাইট কোডসহ শীর্ষ শেয়ারকারীরা",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "TicketPercent",
      title: loc("Choose the offer", "অফার বেছে নিন"),
      body: loc(
        "Pick taka off, % off, free delivery, buy X get Y or a free gift.",
        "টাকা ছাড়, % ছাড়, ফ্রি ডেলিভারি, Buy X Get Y বা ফ্রি গিফট বেছে নিন।",
      ),
    },
    {
      icon: "Users",
      title: loc("Pick who gets it", "কে পাবেন, ঠিক করুন"),
      body: loc(
        "Everyone, first orders, a member level or one customer.",
        "সবাই, প্রথম অর্ডার, কোনো মেম্বার লেভেল বা একজন কাস্টমার।",
      ),
    },
    {
      icon: "ShoppingCart",
      title: loc("Test on a sample cart", "নমুনা কার্টে পরীক্ষা"),
      body: loc(
        "See the final bill with all offers before you turn it on.",
        "চালুর আগে সব অফারসহ শেষ বিলটা দেখে নিন।",
      ),
    },
    {
      icon: "Store",
      title: loc("Run online and in the shop", "অনলাইনে ও দোকানে চালু"),
      body: loc(
        "The same offer works at checkout and at the POS counter.",
        "একই অফার চেকআউটে আর POS কাউন্টারে চলে।",
      ),
    },
    {
      icon: "Crown",
      title: loc("Reward repeat buyers", "নিয়মিত ক্রেতাকে পুরস্কার"),
      body: loc(
        "Points, levels and smart offers keep customers coming back.",
        "পয়েন্ট, লেভেল আর স্মার্ট অফারে কাস্টমার বারবার ফেরেন।",
      ),
    },
  ],
  faqs: [
    {
      q: loc("Can a customer use two offers together?", "কাস্টমার কি দুটি অফার একসঙ্গে নিতে পারবেন?"),
      a: loc(
        "Only if you allow it. Each offer says which offers it can combine with. When two offers can’t combine, the bigger one wins.",
        "শুধু আপনি অনুমতি দিলে। প্রতিটি অফারে লেখা থাকে কোন অফারের সঙ্গে মিলবে। না মিললে বড় অফারটিই পাবেন।",
      ),
    },
    {
      q: loc("Do coupons work at the shop counter too?", "কুপন কি দোকানের কাউন্টারেও চলে?"),
      a: loc(
        "Yes. Choose website, POS counter or both. The same code works at checkout, at the counter and when your team creates an order.",
        "হ্যাঁ। ওয়েবসাইট, POS কাউন্টার বা দুটোই বেছে নিন। একই কোড চেকআউটে, কাউন্টারে আর টিমের তৈরি অর্ডারেও কাজ করে।",
      ),
    },
    {
      q: loc("Do points expire?", "পয়েন্টের কি মেয়াদ শেষ হয়?"),
      a: loc(
        "Only if you want. Turn on expiry, choose after how many months, and remove expired points in one step.",
        "আপনি চাইলেই। মেয়াদ চালু করুন, কত মাস পর শেষ হবে ঠিক করুন, আর এক ধাপে মেয়াদোত্তীর্ণ পয়েন্ট মুছে দিন।",
      ),
    },
    {
      q: loc("How do you stop fake referrals?", "ভুয়া রেফারেল কীভাবে আটকান?"),
      a: loc(
        "An invite from the same phone number is blocked. The same address or device waits for you to check. Rewards come only after the friend’s order is delivered.",
        "একই ফোন নম্বর থেকে ইনভাইট হলে আটকে যায়। একই ঠিকানা বা ডিভাইস হলে আপনার যাচাইয়ের অপেক্ষায় থাকে। বন্ধুর অর্ডার ডেলিভারি হলেই কেবল রিওয়ার্ড।",
      ),
    },
    {
      q: loc("Can I see what my discounts cost me?", "ডিসকাউন্টে আমার কত খরচ হলো, দেখা যায়?"),
      a: loc(
        "Yes. The offers page shows sales from offers and the discount given. Loyalty shows what points and store credit you hold for customers.",
        "হ্যাঁ। অফার পেজে অফার থেকে বিক্রি আর মোট ডিসকাউন্ট দেখায়। লয়্যালটিতে দেখায় কাস্টমারদের জন্য কত টাকার পয়েন্ট ও স্টোর ক্রেডিট জমা আছে।",
      ),
    },
  ],
};
