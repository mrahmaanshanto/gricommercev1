import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

/**
 * Automation module page. Every claim and figure comes from the merchant app's
 * Communications screens (Automations, Workflow builder, Communications
 * settings), Automatic cart reminders, AI auto-call settings and the phone
 * app's Call settings.
 */
export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "Let the daily follow-up run by itself.",
      "রোজকার ফলো-আপ নিজে থেকেই চলুক।",
    ),
    body: loc(
      "Send a thank-you when an order is confirmed, book the courier when a parcel is packed, remind customers who left a cart, and let the AI call to confirm COD orders. Test every rule before it goes live. Quiet hours keep offers and reminders away at night.",
      "অর্ডার কনফার্ম হলে ধন্যবাদ মেসেজ, পার্সেল প্যাক হলে কুরিয়ার বুকিং, কার্টে পণ্য রেখে চলে যাওয়া কাস্টমারকে রিমাইন্ডার, আর COD অর্ডার কনফার্মে AI কল—সব নিজে থেকেই। চালুর আগে প্রতিটি রুল পরীক্ষা করুন। রাতে নীরব সময়ে অফার বা রিমাইন্ডার যায় না।",
    ),
  },
  benefits: [
    {
      icon: "Zap",
      title: loc("Ready rules, just switch on", "তৈরি রুল, শুধু চালু করুন"),
      body: loc(
        "Thank-you messages, courier booking, review requests and stock requests are ready. Test a rule without sending anything, and bring back an old version if needed.",
        "ধন্যবাদ মেসেজ, কুরিয়ার বুকিং, রিভিউ চাওয়া আর স্টক চাওয়ার রুল তৈরি আছে। কিছু না পাঠিয়েই রুল পরীক্ষা করুন, দরকার হলে আগের ভার্সনে ফিরে যান।",
      ),
    },
    {
      icon: "Workflow",
      title: loc("Build your own flow", "নিজের মতো ফ্লো বানান"),
      body: loc(
        "Start from a trigger like order placed or parcel delivered. Add checks and waits, then hold the order, send WhatsApp, make an AI call or book the courier.",
        "অর্ডার আসা বা পার্সেল ডেলিভারির মতো ট্রিগার থেকে শুরু করুন। শর্ত আর অপেক্ষা যোগ করুন, তারপর অর্ডার হোল্ড, WhatsApp মেসেজ, AI কল বা কুরিয়ার বুকিং।",
      ),
    },
    {
      icon: "ShieldCheck",
      title: loc("Messages with limits", "সীমার মধ্যে মেসেজ"),
      body: loc(
        "Set quiet hours and how many offers one customer can get in a day or a week. Big sends, refunds and store credit wait for a manager.",
        "নীরব সময় আর একজন কাস্টমার দিনে বা সপ্তাহে কয়টা অফার পাবেন, তা ঠিক করুন। বড় সেন্ড, রিফান্ড আর স্টোর ক্রেডিট ম্যানেজারের অনুমোদনের অপেক্ষায় থাকে।",
      ),
    },
  ],
  heroShot: {
    src: "/modules/automation/hero.webp",
    width: 2880,
    height: 1800,
    alt: loc(
      "Rules page with 6 of 8 rules on, 570 runs in 7 days and the rules for orders, delivery, stock and marketing",
      "রুল পেজ: ৮টির মধ্যে ৬টি চালু, ৭ দিনে ৫৭০ বার চলেছে, আর অর্ডার, ডেলিভারি, স্টক ও মার্কেটিংয়ের রুল",
    ),
  },
  heroPhone: {
    src: "/modules/automation/phone.webp",
    width: 1170,
    height: 2532,
    alt: loc(
      "Call settings in the phone app, with automatic calls to confirm cash-on-delivery orders turned on",
      "ফোন অ্যাপের কল সেটিংস: ক্যাশ-অন-ডেলিভারি অর্ডার কনফার্মে অটোমেটিক কল চালু",
    ),
  },
  logos: {
    title: loc("Sends messages by", "মেসেজ যায়"),
    items: [
      { name: "WhatsApp", src: "/integrations/whatsapp-business.png" },
      { name: "SMS", src: "/integrations/sms-gateway.png" },
      { name: "Email", src: "/integrations/email.png" },
    ],
  },
  sections: [
    {
      title: loc("Ready-made rules", "তৈরি রুল, চালু করলেই হলো"),
      body: loc(
        "Common jobs are ready as rules. Turn each one on or off, and see how many times it ran and what it cost.",
        "রোজকার কাজগুলো রুল হিসেবে তৈরি আছে। প্রতিটি চালু বা বন্ধ করুন, আর দেখুন কতবার চলেছে আর কত খরচ হলো।",
      ),
      points: [
        loc("Thank customers after an order is confirmed", "অর্ডার কনফার্ম হলে কাস্টমারকে ধন্যবাদ"),
        loc("Ask for a review 2 days after delivery", "ডেলিভারির ২ দিন পর রিভিউ চাওয়া"),
        loc("Test a rule on a sample order, nothing is sent", "নমুনা অর্ডারে রুল পরীক্ষা—কিছুই পাঠানো হয় না"),
        loc("Every change is kept as a version you can restore", "প্রতিটি পরিবর্তন ভার্সন হিসেবে থাকে, ফেরানো যায়"),
      ],
      shot: {
        src: "/modules/automation/s1.webp",
        width: 2132,
        height: 1090,
        alt: loc(
          "Eight rules with their trigger, runs in 7 days and cost, like ৳1.10 per WhatsApp message",
          "আটটি রুল—ট্রিগার, ৭ দিনে কতবার চলেছে আর খরচ, যেমন প্রতি WhatsApp মেসেজে ৳১.১০",
        ),
      },
    },
    {
      title: loc("Draw your own workflow", "নিজের মতো ওয়ার্কফ্লো আঁকুন"),
      body: loc(
        "Put a trigger, checks and actions on a canvas. For example: hold a big COD order going outside Dhaka, ask for ৳150 advance on WhatsApp, and if it is not paid in 30 minutes, the AI calls the customer.",
        "একটা ক্যানভাসে ট্রিগার, শর্ত আর অ্যাকশন বসান। যেমন: ঢাকার বাইরের বড় COD অর্ডার হোল্ড করুন, WhatsApp-এ ৳১৫০ অগ্রিম চান, ৩০ মিনিটে না দিলে AI কাস্টমারকে কল করবে।",
      ),
      points: [
        loc("Start on order placed, status change, AI call, delivery, low stock or a schedule", "অর্ডার আসা, স্ট্যাটাস বদল, AI কল, ডেলিভারি, কম স্টক বা নির্দিষ্ট সময়ে শুরু"),
        loc("Hold an order, change its status, tag a customer or notify staff", "অর্ডার হোল্ড, স্ট্যাটাস বদল, কাস্টমার ট্যাগ বা স্টাফকে জানানো"),
        loc("Send WhatsApp, SMS or an AI call in Bangla or English", "WhatsApp, SMS বা বাংলা-ইংরেজিতে AI কল"),
        loc("Book Pathao, Steadfast, RedX or Carrybee", "Pathao, Steadfast, RedX বা Carrybee বুকিং"),
      ],
      shot: {
        src: "/modules/automation/s2.webp",
        width: 2210,
        height: 1520,
        alt: loc(
          "Workflow builder: an order is held, a ৳150 advance is asked on WhatsApp, and the AI calls if it is not paid",
          "ওয়ার্কফ্লো বিল্ডার: অর্ডার হোল্ড, WhatsApp-এ ৳১৫০ অগ্রিম চাওয়া, আর টাকা না এলে AI কল",
        ),
      },
      logos: [
        { name: "Pathao", src: "/integrations/pathao.png" },
        { name: "Steadfast", src: "/integrations/steadfast.png" },
        { name: "RedX", src: "/integrations/redx.png" },
        { name: "Carrybee", src: "/integrations/carrybee.png" },
      ],
    },
    {
      title: loc("Bring back customers who left a cart", "যারা না কিনে চলে গেছেন, তাদের ফিরিয়ে আনুন"),
      body: loc(
        "Up to three reminders go out on their own, after 1 hour, 3 hours, 24 hours or 3 days. Add a coupon to a later reminder. The link opens their cart, ready to order.",
        "নিজে থেকেই সর্বোচ্চ তিনটি রিমাইন্ডার যায়—১ ঘণ্টা, ৩ ঘণ্টা, ২৪ ঘণ্টা বা ৩ দিন পর। পরের রিমাইন্ডারে কুপন যোগ করুন। লিংকে ক্লিক করলেই তাদের কার্ট খোলে, অর্ডারের জন্য তৈরি।",
      ),
      points: [
        loc("Send by SMS, WhatsApp or email", "SMS, WhatsApp বা ইমেইলে পাঠান"),
        loc("Add a coupon like EID300 to a reminder", "রিমাইন্ডারে EID300-এর মতো কুপন দিন"),
        loc("Reminders keep to your quiet hours and limits", "রিমাইন্ডার নীরব সময় আর সীমা মেনে চলে"),
        loc("See the cost and the orders you got back", "খরচ আর ফিরে পাওয়া অর্ডার দেখুন"),
      ],
      shot: {
        src: "/modules/automation/s3.webp",
        width: 2100,
        height: 1330,
        alt: loc(
          "Automatic cart reminders: a gentle reminder after 1 hour by SMS and WhatsApp, with a WhatsApp preview",
          "অটোমেটিক কার্ট রিমাইন্ডার: ১ ঘণ্টা পর SMS ও WhatsApp-এ রিমাইন্ডার, পাশে WhatsApp প্রিভিউ",
        ),
      },
      logos: [
        { name: "WhatsApp", src: "/integrations/whatsapp-business.png" },
        { name: "SMS", src: "/integrations/sms-gateway.png" },
        { name: "Email", src: "/integrations/email.png" },
      ],
    },
    {
      title: loc("AI calls to confirm COD orders", "COD অর্ডার কনফার্মে AI কল"),
      body: loc(
        "When a new COD order comes in, the AI calls the customer a few minutes later. Orders it can’t confirm go to your team, with a message in the app and by SMS.",
        "নতুন COD অর্ডার এলে কয়েক মিনিট পর AI কাস্টমারকে কল করে। যে অর্ডার কনফার্ম হয় না, তা অ্যাপ আর SMS-এ জানিয়ে আপনার টিমের কাছে যায়।",
      ),
      points: [
        loc("Choose the order value and the order sources", "অর্ডারের দাম আর কোথা থেকে অর্ডার, বেছে নিন"),
        loc("Skip trusted repeat customers", "বিশ্বস্ত নিয়মিত কাস্টমারকে কল নয়"),
        loc("Calls from 9 am to 9 pm, up to 3 tries", "সকাল ৯টা থেকে রাত ৯টা, সর্বোচ্চ ৩ বার চেষ্টা"),
        loc("৳4 per call up to 1 minute, from your wallet", "১ মিনিট পর্যন্ত প্রতি কলে ৳৪, ওয়ালেট থেকে"),
      ],
      shot: {
        src: "/modules/automation/s4.webp",
        width: 2100,
        height: 1090,
        alt: loc(
          "AI auto-call settings: automatic calls for new COD orders from ৳300, from the website, landing pages, Facebook and WhatsApp",
          "AI অটো-কল সেটিংস: ৳৩০০ থেকে নতুন COD অর্ডারে অটোমেটিক কল—ওয়েবসাইট, ল্যান্ডিং পেজ, ফেসবুক ও WhatsApp থেকে",
        ),
      },
    },
    {
      title: loc("Quiet hours and message limits", "নীরব সময় আর মেসেজের সীমা"),
      body: loc(
        "One set of rules for every message the shop sends. Offers and reminders wait until quiet hours end. Order updates still go out.",
        "দোকানের সব মেসেজের জন্য একটাই নিয়ম। নীরব সময় শেষ না হওয়া পর্যন্ত অফার আর রিমাইন্ডার অপেক্ষা করে। অর্ডারের আপডেট ঠিকই যায়।",
      ),
      points: [
        loc("Quiet from 9 pm to 9 am, and quieter at Friday prayers", "রাত ৯টা থেকে সকাল ৯টা নীরব, জুমার নামাজের সময়ও"),
        loc("Limit offers per customer, per day and per week", "একজন কাস্টমার দিনে ও সপ্তাহে কয়টা অফার পাবেন, তার সীমা"),
        loc("A list of people who never get messages", "যারা কখনো মেসেজ পাবেন না, তাদের তালিকা"),
        loc("Big sends, refunds and store credit need a manager", "বড় সেন্ড, রিফান্ড আর স্টোর ক্রেডিটে ম্যানেজারের অনুমোদন"),
      ],
      shot: {
        src: "/modules/automation/s5.webp",
        width: 2100,
        height: 590,
        alt: loc(
          "Quiet hours from 9 pm to 9 am, and the approved SMS name, verified WhatsApp number and email the shop sends from",
          "রাত ৯টা থেকে সকাল ৯টা নীরব সময়, আর অনুমোদিত SMS নাম, যাচাই করা WhatsApp নম্বর ও ইমেইল",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "Zap",
      title: loc("Pick a trigger", "ট্রিগার বেছে নিন"),
      body: loc(
        "An order placed, a parcel delivered, low stock or a set time.",
        "অর্ডার আসা, পার্সেল ডেলিভারি, কম স্টক বা নির্দিষ্ট সময়।",
      ),
    },
    {
      icon: "Filter",
      title: loc("Add checks", "শর্ত যোগ করুন"),
      body: loc(
        "For example: only COD orders over a set amount going outside Dhaka.",
        "যেমন: শুধু ঢাকার বাইরে যাওয়া নির্দিষ্ট টাকার বেশি COD অর্ডার।",
      ),
    },
    {
      icon: "Send",
      title: loc("Choose the action", "অ্যাকশন বেছে নিন"),
      body: loc(
        "Send a message, make an AI call, hold the order or book the courier.",
        "মেসেজ পাঠান, AI কল দিন, অর্ডার হোল্ড করুন বা কুরিয়ার বুক করুন।",
      ),
    },
    {
      icon: "Play",
      title: loc("Test without sending", "না পাঠিয়ে পরীক্ষা"),
      body: loc(
        "Run it on a real order. Nothing goes to the customer.",
        "একটা আসল অর্ডারে চালিয়ে দেখুন। কাস্টমারের কাছে কিছুই যায় না।",
      ),
    },
    {
      icon: "CircleCheck",
      title: loc("Switch it on", "চালু করুন"),
      body: loc(
        "It runs every time, within your quiet hours and limits.",
        "নীরব সময় আর সীমা মেনে প্রতিবার নিজে থেকেই চলে।",
      ),
    },
  ],
  faqs: [
    {
      q: loc("Will customers get messages at night?", "রাতে কি কাস্টমারের কাছে মেসেজ যাবে?"),
      a: loc(
        "Offers and reminders wait until your quiet hours end. Only order updates and security codes go out at any time.",
        "নীরব সময় শেষ না হওয়া পর্যন্ত অফার আর রিমাইন্ডার অপেক্ষা করে। শুধু অর্ডারের আপডেট আর সিকিউরিটি কোড যেকোনো সময় যায়।",
      ),
    },
    {
      q: loc("Do messages and calls cost money?", "মেসেজ আর কলে কি খরচ আছে?"),
      a: loc(
        "SMS, WhatsApp and AI calls use credit from your wallet. Each rule shows its cost, like ৳1.10 per WhatsApp message or ৳0.60 per SMS. Email is free.",
        "SMS, WhatsApp আর AI কলে আপনার ওয়ালেট থেকে ক্রেডিট খরচ হয়। প্রতিটি রুলে খরচ লেখা থাকে, যেমন প্রতি WhatsApp মেসেজে ৳১.১০ বা প্রতি SMS-এ ৳০.৬০। ইমেইল ফ্রি।",
      ),
    },
    {
      q: loc("Can I test a rule before turning it on?", "চালুর আগে কি রুল পরীক্ষা করা যায়?"),
      a: loc(
        "Yes. Test a rule on a sample order and see each step. Nothing is sent and nothing changes. If a change goes wrong, restore an earlier version.",
        "হ্যাঁ। নমুনা অর্ডারে রুল চালিয়ে প্রতিটি ধাপ দেখুন। কিছুই পাঠানো হয় না, কিছুই বদলায় না। কোনো পরিবর্তন ভুল হলে আগের ভার্সনে ফিরে যান।",
      ),
    },
    {
      q: loc("What happens if a step fails?", "কোনো ধাপ ব্যর্থ হলে কী হয়?"),
      a: loc(
        "Failed steps try again before anyone is told. If a rule keeps failing, it pauses and the owner gets a message in the app and by SMS.",
        "ব্যর্থ ধাপ আবার চেষ্টা করে, তারপর জানানো হয়। কোনো রুল বারবার ব্যর্থ হলে থেমে যায়, আর মালিক অ্যাপে ও SMS-এ খবর পান।",
      ),
    },
    {
      q: loc("Which couriers can a workflow book?", "ওয়ার্কফ্লো কোন কোন কুরিয়ার বুক করতে পারে?"),
      a: loc(
        "Pathao, Steadfast, RedX and Carrybee. A rule can also book your default courier as soon as an order is packed.",
        "Pathao, Steadfast, RedX আর Carrybee। অর্ডার প্যাক হলেই আপনার ডিফল্ট কুরিয়ার বুক করার রুলও আছে।",
      ),
    },
  ],
};
