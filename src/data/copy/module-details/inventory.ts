import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

const IMG = "/modules/inventory";

export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "Know your stock, your cost and who you owe.",
      "কী স্টকে আছে, কত খরচ পড়ল, কার কাছে কত বাকি—সব জানুন।",
    ),
    body: loc(
      "See every product's stock in one list, with what is held for orders, damaged or on the way. Buy from suppliers with purchase orders, receive goods by scanning, and keep supplier dues in front of you. Every stock change has a reason and a name.",
      "এক তালিকায় প্রতিটি প্রোডাক্টের স্টক দেখুন, সঙ্গে অর্ডারের জন্য আটকে রাখা, নষ্ট আর পথে থাকা মাল। সাপ্লায়ারের কাছ থেকে পারচেজ অর্ডারে কিনুন, স্ক্যান করে মাল বুঝে নিন, সাপ্লায়ারের বাকি সবসময় চোখের সামনে রাখুন। স্টকের প্রতিটি পরিবর্তনে কারণ আর কে করেছে তা লেখা থাকে।",
    ),
  },
  benefits: [
    {
      icon: "Boxes",
      title: loc("Stock you can trust", "যে স্টকের হিসাবে ভরসা করা যায়"),
      body: loc(
        "Available, held, damaged and in transit are shown apart. Low stock, out of stock and expiring soon have their own tabs, and the list tells you how many products need buying.",
        "বিক্রির জন্য খালি, আটকে রাখা, নষ্ট আর পথে থাকা স্টক আলাদা দেখায়। লো স্টক, আউট অফ স্টক আর মেয়াদ শেষ হতে চলা পণ্যের আলাদা ট্যাব আছে, আর কতগুলো প্রোডাক্ট কিনতে হবে তাও বলে দেয়।",
      ),
    },
    {
      icon: "ClipboardList",
      title: loc("Purchases with the real cost", "আসল খরচসহ পারচেজ"),
      body: loc(
        "Make a purchase order, receive it in parts and scan each item as you unpack. Transport and labour costs are shared on every piece, so you see the true cost.",
        "পারচেজ অর্ডার দিন, মাল কয়েক ধাপে বুঝে নিন, প্যাকেট খুলতে খুলতে প্রতিটি পণ্য স্ক্যান করুন। গাড়িভাড়া আর লেবার খরচ প্রতিটি পিসে ভাগ হয়ে যায়, তাই আসল কেনা দাম দেখতে পান।",
      ),
    },
    {
      icon: "Wallet",
      title: loc("Supplier dues in one place", "সাপ্লায়ারের বাকি এক জায়গায়"),
      body: loc(
        "See what you owe each supplier, what is due this week and what is overdue. Pay one bill, several bills or part of one.",
        "কোন সাপ্লায়ারের কাছে কত বাকি, এই সপ্তাহে কত দিতে হবে আর কোনটা মেয়াদ পেরিয়েছে, সব দেখুন। একটা বিল, কয়েকটা বিল বা বিলের কিছু অংশ পরিশোধ করুন।",
      ),
    },
  ],
  heroShot: {
    src: `${IMG}/hero.webp`,
    width: 2880,
    height: 1800,
    alt: loc(
      "The stock list with stock value at cost, products held for orders, stock in transit and 16 products that need buying",
      "স্টক তালিকা: কেনা দামে স্টকের মূল্য, অর্ডারের জন্য আটকে রাখা পণ্য, পথে থাকা স্টক আর কিনতে হবে এমন ১৬টি প্রোডাক্ট",
    ),
  },
  heroPhone: {
    src: `${IMG}/phone.webp`,
    width: 1170,
    height: 2532,
    alt: loc(
      "Products in the phone app, each with its price, barcode and how many are left",
      "ফোন অ্যাপে প্রোডাক্ট তালিকা: প্রতিটির দাম, বারকোড আর কয়টা বাকি আছে",
    ),
  },
  sections: [
    {
      title: loc("Every stock change has a reason", "স্টকের প্রতিটি পরিবর্তনের কারণ লেখা থাকে"),
      body: loc(
        "Stock activity lists every move: sold, held for an order, sent to a branch, damaged or adjusted. You see the place, the reference and who did it, so a wrong number can always be explained.",
        "স্টক অ্যাক্টিভিটিতে প্রতিটি মুভমেন্ট থাকে: বিক্রি, অর্ডারের জন্য আটকে রাখা, ব্রাঞ্চে পাঠানো, নষ্ট বা অ্যাডজাস্ট। কোন জায়গায়, কোন রেফারেন্সে আর কে করেছে দেখা যায়, তাই ভুল সংখ্যার কারণ সবসময় খুঁজে পাওয়া যায়।",
      ),
      points: [
        loc("Tabs for adjustments, transfers, received goods, sales and holds", "অ্যাডজাস্টমেন্ট, ট্রান্সফার, রিসিভ, বিক্রি আর হোল্ডের আলাদা ট্যাব"),
        loc("Trace one serial or IMEI number from purchase to sale", "একটি সিরিয়াল বা IMEI নম্বর কেনা থেকে বিক্রি পর্যন্ত ট্র্যাক করুন"),
        loc("Items sent to a service centre stay listed until they come back", "সার্ভিস সেন্টারে পাঠানো পণ্য ফেরত না আসা পর্যন্ত তালিকায় থাকে"),
        loc("Changes waiting for a manager are marked clearly", "ম্যানেজারের অনুমোদনের অপেক্ষায় থাকা পরিবর্তন আলাদা করে চিহ্নিত"),
      ],
      shot: {
        src: `${IMG}/s1.webp`,
        width: 1860,
        height: 916,
        alt: loc(
          "Stock activity: each move with its date, product, type, place and change in pieces",
          "স্টক অ্যাক্টিভিটি: প্রতিটি মুভমেন্টের তারিখ, প্রোডাক্ট, ধরন, জায়গা আর কত পিস বাড়ল বা কমল",
        ),
      },
    },
    {
      title: loc("Buy with purchase orders", "পারচেজ অর্ডারে কিনুন"),
      body: loc(
        "Send a purchase order to your supplier and track what has come and what is still coming. Extra costs like transport and labour are added to the cost of each piece.",
        "সাপ্লায়ারকে পারচেজ অর্ডার পাঠান, কতটা এসেছে আর কতটা এখনো আসবে দেখুন। গাড়িভাড়া আর লেবারের মতো বাড়তি খরচ প্রতিটি পিসের কেনা দামে যোগ হয়।",
      ),
      points: [
        loc("Ordered, received and still coming for every product", "প্রতিটি প্রোডাক্টে কত অর্ডার, কত এসেছে আর কত বাকি"),
        loc("Each delivery shows who received it and the challan photo", "প্রতিটি ডেলিভারিতে কে বুঝে নিয়েছে আর চালানের ছবি থাকে"),
        loc("Staff can ask for stock; approved requests become one order per supplier", "স্টাফ স্টক চাইতে পারেন; অনুমোদিত অনুরোধ সাপ্লায়ারভিত্তিক পারচেজ অর্ডার হয়ে যায়"),
        loc("On the phone, a new order is filled with items running low", "ফোনে নতুন অর্ডারে কমে আসা পণ্যগুলো নিজে থেকেই বসে যায়"),
      ],
      shot: {
        src: `${IMG}/s2.webp`,
        width: 1448,
        height: 1620,
        alt: loc(
          "A purchase order that is partly received: 140 of 240 pieces in, two deliveries and ৳1,500 of extra costs",
          "আংশিক রিসিভ হওয়া পারচেজ অর্ডার: ২৪০ পিসের মধ্যে ১৪০ পিস এসেছে, দুটি ডেলিভারি আর ৳১,৫০০ বাড়তি খরচ",
        ),
      },
      phone: {
        src: `${IMG}/s2-phone.webp`,
        width: 1170,
        height: 2532,
        alt: loc(
          "A new purchase order on the phone, filled with two items running low from the supplier",
          "ফোনে নতুন পারচেজ অর্ডার, সাপ্লায়ারের কমে আসা দুটি পণ্য দিয়ে ভরা",
        ),
      },
    },
    {
      title: loc("Receive goods by scanning", "স্ক্যান করে মাল বুঝে নিন"),
      body: loc(
        "Scan each item as you unpack it. The screen shows what is short at once, and you can save the delivery now and receive the rest later.",
        "প্যাকেট খুলতে খুলতে প্রতিটি পণ্য স্ক্যান করুন। কোনটা কম এসেছে সঙ্গে সঙ্গে দেখায়, আর এখনই ডেলিভারি সেভ করে বাকিটা পরে বুঝে নিতে পারেন।",
      ),
      points: [
        loc("Scan with a barcode scanner or the camera", "বারকোড স্ক্যানার বা ক্যামেরা দিয়ে স্ক্যান"),
        loc("Write the supplier challan number and take a photo of it", "সাপ্লায়ারের চালান নম্বর লিখুন আর ছবি তুলে রাখুন"),
        loc("Report damaged or wrong items on arrival", "মাল আসার সময়ই নষ্ট বা ভুল পণ্য রিপোর্ট করুন"),
        loc("Stock goes up only at the place that received it", "যে জায়গায় মাল এসেছে, শুধু সেখানেই স্টক বাড়ে"),
      ],
      shot: {
        src: `${IMG}/s3.webp`,
        width: 2204,
        height: 1480,
        alt: loc(
          "Receive goods: 34 of 100 pieces scanned, items marked short, challan number and extra costs for the delivery",
          "মাল রিসিভ: ১০০ পিসের মধ্যে ৩৪ পিস স্ক্যান, কম আসা পণ্য চিহ্নিত, চালান নম্বর আর ডেলিভারির বাড়তি খরচ",
        ),
      },
      phone: {
        src: `${IMG}/s3-phone.webp`,
        width: 1170,
        height: 2532,
        alt: loc(
          "A purchase order on the phone with 180 of 300 received and a button to receive items",
          "ফোনে পারচেজ অর্ডার: ৩০০-এর মধ্যে ১৮০ এসেছে, পণ্য রিসিভ করার বাটন",
        ),
      },
    },
    {
      title: loc("Supplier dues, never forgotten", "সাপ্লায়ারের বাকি আর ভুলবেন না"),
      body: loc(
        "One page shows how much you owe in total, what is due today, this week and what is overdue. Each supplier shows the next due date and the last payment.",
        "এক পেজেই দেখুন মোট কত বাকি, আজ কত দিতে হবে, এই সপ্তাহে কত আর কোনগুলো মেয়াদ পেরিয়েছে। প্রতিটি সাপ্লায়ারের পরের পেমেন্টের তারিখ আর শেষ পেমেন্ট দেখা যায়।",
      ),
      points: [
        loc("Overdue bills show how many days late they are", "মেয়াদ পেরোনো বিলে কত দিন দেরি তা লেখা থাকে"),
        loc("Pay one bill, several bills or part of one", "একটা বিল, কয়েকটা বিল বা বিলের কিছু অংশ পরিশোধ"),
        loc("Payments come out of the cash or bank account you choose", "যে ক্যাশ বা ব্যাংক অ্যাকাউন্ট বাছবেন, টাকা সেখান থেকে কাটে"),
        loc("See how much you bought from each supplier this year", "এ বছর কোন সাপ্লায়ার থেকে কত কিনেছেন দেখুন"),
      ],
      shot: {
        src: `${IMG}/s4.webp`,
        width: 2204,
        height: 1200,
        alt: loc(
          "Suppliers and payables: ৳3,13,900 owed in total, ৳2,02,800 overdue, with days overdue for each supplier",
          "সাপ্লায়ার ও পাওনা: মোট ৳৩,১৩,৯০০ বাকি, ৳২,০২,৮০০ মেয়াদোত্তীর্ণ, প্রতিটি সাপ্লায়ারের কত দিন দেরি",
        ),
      },
      phone: {
        src: `${IMG}/s4-phone.webp`,
        width: 1170,
        height: 2532,
        alt: loc(
          "Purchases on the phone: money owed to suppliers and orders arriving this week",
          "ফোনে পারচেজ: সাপ্লায়ারের কাছে বাকি আর এই সপ্তাহে আসা অর্ডার",
        ),
      },
    },
    {
      title: loc("Barcode labels and quick scans", "বারকোড লেবেল আর দ্রুত স্ক্যান"),
      body: loc(
        "Print barcode labels with your shop name and price. Products without a barcode get one in one click, and the phone camera works as a scanner.",
        "দোকানের নাম আর দামসহ বারকোড লেবেল প্রিন্ট করুন। যে প্রোডাক্টে বারকোড নেই, এক ক্লিকে বানিয়ে নিন, আর ফোনের ক্যামেরাই স্ক্যানারের কাজ করে।",
      ),
      points: [
        loc("Match the number of labels to the stock in one click", "এক ক্লিকে স্টক অনুযায়ী লেবেলের সংখ্যা ঠিক করুন"),
        loc("See the labels before you print", "প্রিন্টের আগেই লেবেল দেখে নিন"),
        loc("Scan on the phone to see price, stock and sales of the last 30 days", "ফোনে স্ক্যান করে দাম, স্টক আর গত ৩০ দিনের বিক্রি দেখুন"),
        loc("Works with a USB or Bluetooth scanner too", "USB বা ব্লুটুথ স্ক্যানারেও কাজ করে"),
      ],
      shot: {
        src: `${IMG}/s5.webp`,
        width: 2204,
        height: 1334,
        alt: loc(
          "Print barcode labels: products and label counts on the left, a preview of 48 labels on the right",
          "বারকোড লেবেল প্রিন্ট: বাঁয়ে প্রোডাক্ট আর লেবেলের সংখ্যা, ডানে ৪৮টি লেবেলের প্রিভিউ",
        ),
      },
      phone: {
        src: `${IMG}/s5-phone.webp`,
        width: 1170,
        height: 2532,
        alt: loc(
          "Scanning a barcode on the phone shows the product, its price, stock and sales",
          "ফোনে বারকোড স্ক্যান করলে প্রোডাক্ট, দাম, স্টক আর বিক্রি দেখায়",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "Package",
      title: loc("Add your products", "প্রোডাক্ট যোগ করুন"),
      body: loc(
        "Add products with variants, SKU and barcode, and mark phones by IMEI or serial.",
        "ভ্যারিয়েন্ট, SKU আর বারকোডসহ প্রোডাক্ট যোগ করুন, ফোনে IMEI বা সিরিয়াল চিহ্নিত করুন।",
      ),
    },
    {
      icon: "ClipboardList",
      title: loc("Order from suppliers", "সাপ্লায়ারকে অর্ডার দিন"),
      body: loc(
        "Make a purchase order for the products that are running low.",
        "যেসব প্রোডাক্ট কমে আসছে, সেগুলোর জন্য পারচেজ অর্ডার দিন।",
      ),
    },
    {
      icon: "ScanBarcode",
      title: loc("Scan goods in", "স্ক্যান করে মাল তুলুন"),
      body: loc(
        "Scan each item as it arrives; the stock and the cost update.",
        "মাল আসার সঙ্গে সঙ্গে স্ক্যান করুন; স্টক আর কেনা দাম আপডেট হয়।",
      ),
    },
    {
      icon: "ShoppingCart",
      title: loc("Sell everywhere", "সব জায়গায় বিক্রি করুন"),
      body: loc(
        "Counter, website and online orders all take from the same stock.",
        "কাউন্টার, ওয়েবসাইট আর অনলাইন অর্ডার, সব একই স্টক থেকে কাটে।",
      ),
    },
    {
      icon: "Wallet",
      title: loc("Pay the supplier", "সাপ্লায়ারকে টাকা দিন"),
      body: loc(
        "See what is due and pay one bill, several or part of one.",
        "কত বাকি দেখুন আর একটা, কয়েকটা বা বিলের কিছু অংশ পরিশোধ করুন।",
      ),
    },
  ],
  faqs: [
    {
      q: loc("Can I track IMEI or serial numbers?", "IMEI বা সিরিয়াল নম্বর ট্র্যাক করা যাবে?"),
      a: loc(
        "Yes. Mark a product as IMEI or serial. The counter asks for the number when it is sold and checks it is not sold already. Stock activity can trace one number, and warranty claims keep the full serial and IMEI register.",
        "হ্যাঁ। প্রোডাক্টে IMEI বা সিরিয়াল চিহ্নিত করুন। বিক্রির সময় কাউন্টার নম্বরটা চায় এবং আগে বিক্রি হয়েছে কিনা দেখে নেয়। স্টক অ্যাক্টিভিটিতে একটি নম্বর ট্রেস করা যায়, আর ওয়ারেন্টি ক্লেইমে সিরিয়াল ও IMEI-এর পুরো তালিকা থাকে।",
      ),
    },
    {
      q: loc("What if the supplier sends less than I ordered?", "সাপ্লায়ার অর্ডারের চেয়ে কম মাল পাঠালে কী হবে?"),
      a: loc(
        "Save what arrived. Only those pieces go into stock, and the purchase order stays \"Partly received\" until the rest comes. You can also report damaged or wrong items when you receive.",
        "যা এসেছে তা সেভ করুন। শুধু ওই পিসগুলোই স্টকে যোগ হয়, আর বাকি মাল না আসা পর্যন্ত পারচেজ অর্ডার \"আংশিক রিসিভড\" থাকে। মাল নেওয়ার সময় নষ্ট বা ভুল পণ্যও রিপোর্ট করতে পারেন।",
      ),
    },
    {
      q: loc("How do I handle damaged and expired stock?", "নষ্ট আর মেয়াদোত্তীর্ণ স্টক কীভাবে সামলাব?"),
      a: loc(
        "The Damaged & expired page lists stock that has expired or will expire soon, with its value at cost, and the damaged stock set aside. Write it off from there so your stock and loss stay correct.",
        "Damaged & expired পেজে মেয়াদ শেষ বা শিগগির শেষ হবে এমন স্টক, কেনা দামে তার মূল্য, আর আলাদা করে রাখা নষ্ট স্টক দেখায়। সেখান থেকেই রাইট-অফ করুন, তাহলে স্টক আর লসের হিসাব ঠিক থাকে।",
      ),
    },
    {
      q: loc("Can my staff ask for stock to be bought?", "স্টাফরা কি মাল কেনার অনুরোধ করতে পারবে?"),
      a: loc(
        "Yes. Staff send a purchase request. You approve it or change the quantity, and approved requests become purchase orders, one per supplier.",
        "হ্যাঁ। স্টাফ পারচেজ রিকোয়েস্ট পাঠান। আপনি অনুমোদন দেন বা পরিমাণ বদলান, আর অনুমোদিত অনুরোধগুলো সাপ্লায়ারভিত্তিক পারচেজ অর্ডার হয়ে যায়।",
      ),
    },
  ],
};
