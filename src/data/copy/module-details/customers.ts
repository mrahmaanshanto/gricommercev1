import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

const dir = "/modules/customers";

export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "Know every customer, and who will buy again.",
      "প্রতিটি কাস্টমারকে চিনুন, কে আবার কিনবে জানুন।",
    ),
    body: loc(
      "One list for all your customers, with orders, money spent and due. Open a customer to see what they looked at, what they left in the cart and every order. Group your repeat buyers, sell on due with a limit, and follow up every lead.",
      "সব কাস্টমার এক তালিকায়—অর্ডার, কত কিনেছেন আর কত বাকি সহ। কাস্টমার খুললেই দেখবেন কী দেখেছেন, কার্টে কী রেখে গেছেন আর প্রতিটি অর্ডার। রিপিট ক্রেতাদের আলাদা করুন, সীমা রেখে বাকিতে বিক্রি করুন, আর প্রতিটি লিড ফলো করুন।",
    ),
  },
  benefits: [
    {
      icon: "Filter",
      title: loc("Ready views and segments", "তৈরি ভিউ আর সেগমেন্ট"),
      body: loc(
        "Left a cart, birthday this month, COD blocked: open a ready view, or build your own segment and see how many match.",
        "কার্ট ফেলে গেছেন, এ মাসে জন্মদিন, COD বন্ধ—তৈরি ভিউ খুলুন, বা নিজের সেগমেন্ট বানিয়ে দেখুন কতজন মেলে।",
      ),
    },
    {
      icon: "Receipt",
      title: loc("Sell on due, safely", "নিশ্চিন্তে বাকিতে বিক্রি"),
      body: loc(
        "Give a credit limit to customers who buy on due. Their statement shows every invoice, payment and the balance, ready to print.",
        "যারা বাকিতে কেনেন তাদের ক্রেডিট লিমিট দিন। তাদের স্টেটমেন্টে প্রতিটি ইনভয়েস, পেমেন্ট আর বাকি থাকে, প্রিন্টের জন্য তৈরি।",
      ),
    },
    {
      icon: "Target",
      title: loc("Leads that turn into customers", "লিড থেকে কাস্টমার"),
      body: loc(
        "Track leads from Facebook, WhatsApp, walk-in or a trade fair on one board. When a lead buys, they become a customer.",
        "Facebook, WhatsApp, দোকানে আসা বা ট্রেড ফেয়ারের লিড এক বোর্ডে রাখুন। লিড কিনলেই কাস্টমার তালিকায় চলে আসে।",
      ),
    },
  ],
  heroShot: {
    src: `${dir}/hero.webp`,
    width: 2880,
    height: 1800,
    alt: loc(
      "Customers list: 2,463 customers with status, location, orders, amount spent and due",
      "কাস্টমার তালিকা: ২,৪৬৩ জন কাস্টমার—অবস্থা, এলাকা, অর্ডার, মোট কেনা আর বাকিসহ",
    ),
  },
  heroPhone: {
    src: `${dir}/phone.webp`,
    width: 1170,
    height: 2532,
    alt: loc(
      "Phone app chat with Nusrat Jahan on Facebook, showing 6 orders and ৳14,200 spent above the messages",
      "ফোন অ্যাপে Facebook-এ নুসরাত জাহানের সঙ্গে চ্যাট, ওপরে ৬টি অর্ডার আর ৳১৪,২০০ কেনা দেখাচ্ছে",
    ),
  },
  sections: [
    {
      title: loc("All customers in one list", "সব কাস্টমার এক তালিকায়"),
      body: loc(
        "Find anyone by name, phone, email or customer ID. Each row shows orders, money spent and due, and ready views find the right people in one click.",
        "নাম, ফোন, ইমেইল বা কাস্টমার ID দিয়ে যে কাউকে খুঁজুন। প্রতিটি সারিতে অর্ডার, মোট কেনা আর বাকি দেখা যায়, আর তৈরি ভিউ এক ক্লিকে ঠিক মানুষদের বের করে।",
      ),
      points: [
        loc("Views: left a cart, birthday this month, points expiring", "ভিউ: কার্ট ফেলে গেছেন, এ মাসে জন্মদিন, পয়েন্টের মেয়াদ শেষ হচ্ছে"),
        loc("COD blocked and suspended customers stand out", "COD বন্ধ আর স্থগিত কাস্টমার আলাদা চোখে পড়ে"),
        loc("Tag, export or message many customers at once", "একসঙ্গে অনেক কাস্টমারকে ট্যাগ, এক্সপোর্ট বা মেসেজ করুন"),
        loc("Merge the same customer saved twice", "একই কাস্টমার দুবার থাকলে এক করুন"),
      ],
      shot: {
        src: `${dir}/s1.webp`,
        width: 2252,
        height: 1084,
        alt: loc(
          "More views menu: left a cart 31, birthday this month 97, COD blocked 3",
          "আরও ভিউ মেনু: কার্ট ফেলে গেছেন ৩১, এ মাসে জন্মদিন ৯৭, COD বন্ধ ৩",
        ),
      },
    },
    {
      title: loc("Every customer’s full story", "প্রতিটি কাস্টমারের পুরো গল্প"),
      body: loc(
        "Open a customer to see everything they did: products they looked at, carts they left, WhatsApp reminders, orders, returns and support tickets.",
        "কাস্টমার খুললেই সব দেখবেন: কোন প্রোডাক্ট দেখেছেন, কোন কার্ট ফেলে গেছেন, WhatsApp রিমাইন্ডার, অর্ডার, রিটার্ন আর সাপোর্ট টিকিট।",
      ),
      points: [
        loc("Total spent, orders, average order and returns", "মোট কেনা, অর্ডার, গড় অর্ডার আর রিটার্ন"),
        loc("Looked at a product many times? Send 10% off", "একটা প্রোডাক্ট বারবার দেখছেন? ১০% ছাড় পাঠান"),
        loc("When they may order next, and how likely they are to be a VIP", "পরের অর্ডার কবে হতে পারে, আর VIP হওয়ার সম্ভাবনা"),
        loc("Where they first came from, like a Facebook ad", "প্রথম কোথা থেকে এসেছেন, যেমন ফেসবুক বিজ্ঞাপন"),
      ],
      shot: {
        src: `${dir}/s2.webp`,
        width: 2148,
        height: 1236,
        alt: loc(
          "Nusrat Jahan’s profile: ৳58,200 spent over 14 orders, looked at Redmi Note 13 four times, cart reminder on WhatsApp",
          "নুসরাত জাহানের প্রোফাইল: ১৪টি অর্ডারে ৳৫৮,২০০ কেনা, Redmi Note 13 চারবার দেখেছেন, WhatsApp-এ কার্ট রিমাইন্ডার",
        ),
      },
      phone: {
        src: `${dir}/s2-phone.webp`,
        width: 1170,
        height: 2532,
        alt: loc(
          "Phone app order: Nusrat Jahan’s 6th order, paid by bKash, with Call and WhatsApp buttons",
          "ফোন অ্যাপে অর্ডার: নুসরাত জাহানের ৬ষ্ঠ অর্ডার, বিকাশে পেমেন্ট, কল আর WhatsApp বোতামসহ",
        ),
      },
    },
    {
      title: loc("Segments for your repeat buyers", "রিপিট ক্রেতাদের জন্য সেগমেন্ট"),
      body: loc(
        "Build a segment with simple rules, like total spent at least ৳10,000, or Dhaka buyers with 2 or more orders. You see how many customers match before you save.",
        "সহজ নিয়মে সেগমেন্ট বানান, যেমন মোট কেনা অন্তত ৳১০,০০০, বা ঢাকার যারা ২ বা তার বেশি অর্ডার করেছেন। সেভ করার আগেই দেখবেন কতজন মেলে।",
      ),
      points: [
        loc("Match all rules or any rule", "সব নিয়ম মিলবে, নাকি যেকোনো একটি"),
        loc("Start from ready-made segments", "তৈরি সেগমেন্ট থেকে শুরু করুন"),
        loc("Add your own fields, like profession or skin type", "নিজের ফিল্ড যোগ করুন, যেমন পেশা বা স্কিন টাইপ"),
        loc("Use a segment to tag, export or message", "সেগমেন্ট ধরে ট্যাগ, এক্সপোর্ট বা মেসেজ করুন"),
      ],
      shot: {
        src: `${dir}/s3.webp`,
        width: 1440,
        height: 798,
        alt: loc(
          "New segment: total spent at least ৳10,000, 6 customers match",
          "নতুন সেগমেন্ট: মোট কেনা অন্তত ৳১০,০০০, ৬ জন কাস্টমার মেলে",
        ),
      },
    },
    {
      title: loc("Sell on due with a clear statement", "পরিষ্কার স্টেটমেন্টে বাকিতে বিক্রি"),
      body: loc(
        "Give shop customers a credit limit. Their statement shows each invoice, payment and the running balance for any dates, ready to print and share.",
        "দোকানের কাস্টমারদের ক্রেডিট লিমিট দিন। তাদের স্টেটমেন্টে যেকোনো তারিখের প্রতিটি ইনভয়েস, পেমেন্ট আর চলমান বাকি থাকে, প্রিন্ট করে দেওয়ার জন্য তৈরি।",
      ),
      points: [
        loc("Invoiced, paid, due and advance at the top", "ওপরে মোট ইনভয়েস, পরিশোধ, বাকি আর অগ্রিম"),
        loc("Credit limit and how much is left", "ক্রেডিট লিমিট আর কত বাকি আছে"),
        loc("Pick a date range for the ledger", "লেজারের তারিখ বেছে নিন"),
        loc("Print the statement in one click", "এক ক্লিকে স্টেটমেন্ট প্রিন্ট"),
      ],
      shot: {
        src: `${dir}/s4.webp`,
        width: 2252,
        height: 880,
        alt: loc(
          "Statement for Maa Fatema Mobile: ৳4,725 due on one invoice, credit limit ৳60,000 with ৳55,275 left",
          "মা ফাতেমা মোবাইলের স্টেটমেন্ট: একটি ইনভয়েসে ৳৪,৭২৫ বাকি, ক্রেডিট লিমিট ৳৬০,০০০, বাকি আছে ৳৫৫,২৭৫",
        ),
      },
    },
    {
      title: loc("Leads and follow-ups", "লিড আর ফলোআপ"),
      body: loc(
        "Keep people who may buy on a board, from New to Won. See today’s follow-ups and the overdue ones, and call from the list.",
        "যারা কিনতে পারেন তাদের ‘নতুন’ থেকে ‘জয়’ পর্যন্ত বোর্ডে রাখুন। আজকের আর দেরি হওয়া ফলোআপ দেখুন, তালিকা থেকেই কল দিন।",
      ),
      points: [
        loc("Sources: Facebook, Instagram, WhatsApp, walk-in, referral, trade fair", "কোথা থেকে এলো: Facebook, Instagram, WhatsApp, দোকানে আসা, রেফারেল, ট্রেড ফেয়ার"),
        loc("Likely-to-win amount by stage", "ধাপ ধরে কত টাকার বিক্রি হতে পারে"),
        loc("See your own leads or everyone’s", "নিজের লিড বা সবার লিড দেখুন"),
        loc("A won lead is added as a customer", "জেতা লিড কাস্টমার তালিকায় যোগ হয়"),
      ],
      shot: {
        src: `${dir}/s5.webp`,
        width: 2252,
        height: 1156,
        alt: loc(
          "Leads pipeline: 14 open leads worth ৳23,07,100, from New to Won",
          "লিড পাইপলাইন: ৳২৩,০৭,১০০-এর ১৪টি খোলা লিড, ‘নতুন’ থেকে ‘জয়’ পর্যন্ত",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "Users",
      title: loc("Customer is saved", "কাস্টমার সেভ হয়"),
      body: loc(
        "From an order or a won lead, or add and import them yourself.",
        "অর্ডার বা জেতা লিড থেকে, অথবা নিজে যোগ বা ইমপোর্ট করে।",
      ),
    },
    {
      icon: "History",
      title: loc("History builds up", "ইতিহাস জমতে থাকে"),
      body: loc(
        "Orders, chats, payments and dues join their profile.",
        "অর্ডার, চ্যাট, পেমেন্ট আর বাকি তার প্রোফাইলে জমা হয়।",
      ),
    },
    {
      icon: "Filter",
      title: loc("Group them", "দল করে নিন"),
      body: loc(
        "Use views and segments to find repeat buyers or lost carts.",
        "ভিউ আর সেগমেন্ট দিয়ে রিপিট ক্রেতা বা ফেলে যাওয়া কার্ট খুঁজুন।",
      ),
    },
    {
      icon: "Send",
      title: loc("Follow up", "ফলোআপ করুন"),
      body: loc(
        "Message, call or send an offer to the right people.",
        "ঠিক মানুষদের মেসেজ, কল বা অফার পাঠান।",
      ),
    },
    {
      icon: "Receipt",
      title: loc("Collect dues", "বাকি তুলুন"),
      body: loc(
        "Check each statement and collect what customers owe.",
        "স্টেটমেন্ট দেখে কাস্টমারের বাকি টাকা তুলুন।",
      ),
    },
  ],
  faqs: [
    {
      q: loc(
        "Can I see a customer’s full order history?",
        "একজন কাস্টমারের সব অর্ডারের ইতিহাস দেখা যাবে?",
      ),
      a: loc(
        "Yes. The customer’s page shows every order with its amount and status, plus returns, support tickets, messages and what they looked at on your store.",
        "হ্যাঁ। কাস্টমারের পেজে প্রতিটি অর্ডার টাকা আর অবস্থাসহ থাকে, সঙ্গে রিটার্ন, সাপোর্ট টিকিট, মেসেজ আর আপনার স্টোরে কী দেখেছেন।",
      ),
    },
    {
      q: loc(
        "Can I sell on due to some customers only?",
        "শুধু কিছু কাস্টমারকে বাকিতে দেওয়া যাবে?",
      ),
      a: loc(
        "Yes. Turn on selling on due in customer settings and set the days to pay. Give each customer you trust a credit limit. Their statement shows what they owe at any time.",
        "হ্যাঁ। কাস্টমার সেটিংসে বাকিতে বিক্রি চালু করুন আর কত দিনের মধ্যে টাকা দিতে হবে ঠিক করুন। যাদের বিশ্বাস করেন তাদের ক্রেডিট লিমিট দিন। তাদের স্টেটমেন্টে যেকোনো সময় কত বাকি দেখা যায়।",
      ),
    },
    {
      q: loc(
        "How do I find customers who left a cart?",
        "কার্ট ফেলে যাওয়া কাস্টমার কীভাবে খুঁজব?",
      ),
      a: loc(
        "Open the “Left a cart” view in the customer list. From there you can tag them, export them or send them a message together.",
        "কাস্টমার তালিকায় ‘Left a cart’ ভিউ খুলুন। সেখান থেকে একসঙ্গে ট্যাগ, এক্সপোর্ট বা মেসেজ পাঠাতে পারবেন।",
      ),
    },
    {
      q: loc(
        "Who on my team can see customer data?",
        "আমার টিমের কে কাস্টমারের তথ্য দেখতে পারবে?",
      ),
      a: loc(
        "Staff roles decide who can open customer pages. In customer settings you also choose which roles see IP addresses and devices, and how long customer signals are kept.",
        "স্টাফের রোল ঠিক করে কে কাস্টমার পেজ খুলতে পারবে। কাস্টমার সেটিংসে আরও ঠিক করুন কোন রোল IP ঠিকানা আর ডিভাইস দেখবে, আর কাস্টমারের তথ্য কত দিন রাখা হবে।",
      ),
    },
  ],
};
