import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

const IMG = "/modules/orders";

export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "Check every order before you ship it.",
      "শিপের আগেই প্রতিটি অর্ডার যাচাই করুন।",
    ),
    body: loc(
      "Online, Facebook and phone orders come into one list. Call the customer, see their parcel record, take an advance if you need it, and approve. Returns and exchanges are handled in the same place, with stock and refunds kept right.",
      "অনলাইন, ফেসবুক আর ফোনের সব অর্ডার আসে এক তালিকায়। কাস্টমারকে কল দিন, তার আগের পার্সেলের রেকর্ড দেখুন, দরকার হলে অগ্রিম নিন, তারপর অ্যাপ্রুভ করুন। রিটার্ন আর এক্সচেঞ্জও এখানেই, স্টক আর রিফান্ডের হিসাব ঠিক থাকে।",
    ),
  },
  benefits: [
    {
      icon: "ShieldCheck",
      title: loc("Stop fake orders early", "ফেক অর্ডার শুরুতেই আটকান"),
      body: loc(
        "See how many parcels this number took and how many came back, with each courier. Low, medium or high risk is shown on the order. Duplicate orders are flagged for you.",
        "এই নম্বরে আগে কতগুলো পার্সেল গেছে আর কতগুলো ফেরত এসেছে, কুরিয়ার ধরে দেখুন। অর্ডারেই দেখায় ঝুঁকি কম, মাঝারি না বেশি। ডুপ্লিকেট অর্ডার নিজে থেকেই চিহ্নিত হয়।",
      ),
    },
    {
      icon: "Wallet",
      title: loc("Advance now, COD later", "এখন অগ্রিম, বাকিটা COD"),
      body: loc(
        "Take an advance by bKash or a payment link before you approve. The rest becomes the COD amount the rider collects.",
        "অ্যাপ্রুভের আগে বিকাশ বা পেমেন্ট লিংকে অগ্রিম নিন। বাকি টাকা COD হিসেবে থাকে, রাইডার তুলে আনবে।",
      ),
    },
    {
      icon: "RotateCcw",
      title: loc("Returns without a mess", "ঝামেলা ছাড়া রিটার্ন"),
      body: loc(
        "Find the sale by invoice or mobile number, tick what came back and choose the refund. Good items go back to stock, damaged ones are kept apart.",
        "ইনভয়েস বা মোবাইল নম্বর দিয়ে বিক্রিটা খুঁজুন, কী ফেরত এল টিক দিন, রিফান্ডের উপায় বেছে নিন। ভালো পণ্য স্টকে ফেরে, নষ্টগুলো আলাদা থাকে।",
      ),
    },
  ],
  heroShot: {
    src: `${IMG}/hero.webp`,
    width: 2880,
    height: 1800,
    alt: loc(
      "The Orders list with today's orders, COD to collect, orders with the courier and tabs for each status",
      "অর্ডার তালিকা: আজকের অর্ডার, আদায় বাকি COD, কুরিয়ারে থাকা অর্ডার আর প্রতিটি স্ট্যাটাসের ট্যাব",
    ),
  },
  heroPhone: {
    src: `${IMG}/phone.webp`,
    width: 1170,
    height: 2532,
    alt: loc(
      "Orders in the phone app, with tabs for orders to confirm, to ship and on the way",
      "ফোন অ্যাপে অর্ডার: কনফার্ম, শিপ আর পথে থাকা অর্ডারের ট্যাব",
    ),
  },
  logos: {
    title: loc("Works with", "যেগুলোর সঙ্গে কাজ করে"),
    items: [
      { name: "bKash", src: "/integrations/bkash.png" },
      { name: "Nagad", src: "/integrations/nagad.png" },
      { name: "Pathao", src: "/integrations/pathao.png" },
      { name: "Steadfast", src: "/integrations/steadfast.png" },
      { name: "RedX", src: "/integrations/redx.png" },
      { name: "Carrybee", src: "/integrations/carrybee.png" },
    ],
  },
  sections: [
    {
      title: loc("Every order in one list", "সব অর্ডার এক তালিকায়"),
      body: loc(
        "Online store, Facebook shop and phone orders sit together. Pick many orders and act on all of them at once.",
        "অনলাইন স্টোর, ফেসবুক শপ আর ফোনের অর্ডার একসঙ্গে থাকে। একসঙ্গে অনেক অর্ডার বেছে এক ক্লিকে কাজ সারুন।",
      ),
      points: [
        loc("Tabs for on hold, processing, sent to courier, delivered and returned", "অন হোল্ড, প্রসেসিং, কুরিয়ারে পাঠানো, ডেলিভারি আর রিটার্নের আলাদা ট্যাব"),
        loc("Filter by status, courier, payment and delivery zone", "স্ট্যাটাস, কুরিয়ার, পেমেন্ট আর ডেলিভারি জোন দিয়ে ফিল্টার"),
        loc("Approve, send to courier, print labels and send receipts in bulk", "একসঙ্গে অ্যাপ্রুভ, কুরিয়ারে পাঠানো, লেবেল প্রিন্ট আর রিসিট পাঠানো"),
        loc("See today's orders, COD to collect and return rate on top", "উপরেই দেখুন আজকের অর্ডার, আদায় বাকি COD আর রিটার্ন রেট"),
      ],
      shot: {
        src: `${IMG}/s1.webp`,
        width: 2000,
        height: 980,
        alt: loc(
          "Four orders selected, with Approve, Send to courier, Print labels and Send receipts buttons",
          "চারটি অর্ডার বাছাই করা, পাশে অ্যাপ্রুভ, কুরিয়ারে পাঠান, লেবেল প্রিন্ট আর রিসিট পাঠানোর বাটন",
        ),
      },
    },
    {
      title: loc("Verify before you approve", "অ্যাপ্রুভের আগে যাচাই"),
      body: loc(
        "Each new order has a verify card. Call, WhatsApp or SMS the customer, or start an auto call. If the same phone ordered the same product in the last two days, the order is marked as a possible duplicate.",
        "প্রতিটি নতুন অর্ডারে একটি যাচাই কার্ড থাকে। কাস্টমারকে কল, হোয়াটসঅ্যাপ বা SMS দিন, অথবা অটো কল চালু করুন। একই নম্বর থেকে দুই দিনের মধ্যে একই পণ্যের অর্ডার এলে সেটি সম্ভাব্য ডুপ্লিকেট হিসেবে দেখায়।",
      ),
      points: [
        loc("Call, WhatsApp and SMS buttons right on the order", "অর্ডারের ভেতরেই কল, হোয়াটসঅ্যাপ আর SMS বাটন"),
        loc("Auto call or log your own call", "অটো কল দিন বা নিজের কলের নোট রাখুন"),
        loc("Merge a duplicate or cancel it in one click", "ডুপ্লিকেট অর্ডার এক ক্লিকে মার্জ বা বাতিল"),
        loc("Block a customer who keeps placing fake orders", "বারবার ফেক অর্ডার দেওয়া কাস্টমারকে ব্লক করুন"),
      ],
      shot: {
        src: `${IMG}/s2.webp`,
        width: 2236,
        height: 952,
        alt: loc(
          "An order marked as a possible duplicate, with Cancel as duplicate and Merge buttons above the verify card",
          "সম্ভাব্য ডুপ্লিকেট হিসেবে চিহ্নিত অর্ডার, যাচাই কার্ডের উপরে ডুপ্লিকেট বাতিল আর মার্জ বাটন",
        ),
      },
      phone: {
        src: `${IMG}/s2-phone.webp`,
        width: 1170,
        height: 2532,
        alt: loc(
          "An order in the phone app with Call, WhatsApp and Confirm order buttons",
          "ফোন অ্যাপে একটি অর্ডার, সঙ্গে কল, হোয়াটসঅ্যাপ আর অর্ডার কনফার্মের বাটন",
        ),
      },
    },
    {
      title: loc("Know the customer's parcel record", "কাস্টমারের পার্সেল রেকর্ড জানুন"),
      body: loc(
        "Before you ship, see how this number did with couriers before. Parcels sent, delivered and returned are shown for Pathao, Steadfast and RedX, with a risk label.",
        "শিপের আগেই দেখুন এই নম্বরের আগের কুরিয়ার রেকর্ড কেমন। Pathao, Steadfast আর RedX-এ কতগুলো পার্সেল গেছে, ডেলিভারি হয়েছে আর ফেরত এসেছে, সঙ্গে ঝুঁকির লেবেল।",
      ),
      points: [
        loc("Success rate across all past parcels", "আগের সব পার্সেলের সফলতার হার"),
        loc("Low, medium or high risk at a glance", "এক নজরে ঝুঁকি কম, মাঝারি না বেশি"),
        loc("Delivered and returned count for each courier", "প্রতিটি কুরিয়ারে ডেলিভারি আর ফেরতের সংখ্যা"),
        loc("Where the order was placed from", "অর্ডারটি কোন এলাকা থেকে এসেছে"),
      ],
      shot: {
        src: `${IMG}/s3.webp`,
        width: 756,
        height: 750,
        alt: loc(
          "Order verification card: 18 parcels, 15 delivered, 3 returned, 83% success, low risk",
          "অর্ডার যাচাই কার্ড: ১৮টি পার্সেল, ১৫টি ডেলিভারি, ৩টি ফেরত, ৮৩% সফল, ঝুঁকি কম",
        ),
      },
    },
    {
      title: loc("Take an advance, keep the rest as COD", "অগ্রিম নিন, বাকিটা COD রাখুন"),
      body: loc(
        "For a risky or costly order, ask for an advance first. Send a payment link or record the money you got, and the app works out the COD the rider will collect.",
        "ঝুঁকির বা বেশি দামের অর্ডারে আগে অগ্রিম চান। পেমেন্ট লিংক পাঠান বা পাওয়া টাকা লিখে রাখুন, রাইডার কত COD তুলবে অ্যাপ নিজেই হিসাব করে।",
      ),
      points: [
        loc("Total, advance and COD after, side by side", "মোট, অগ্রিম আর বাকি COD পাশাপাশি"),
        loc("Send a bKash payment link from the order", "অর্ডার থেকেই বিকাশ পেমেন্ট লিংক পাঠান"),
        loc("Check the customer's payment proof before you accept it", "কাস্টমারের পেমেন্ট প্রুফ দেখে তারপর গ্রহণ করুন"),
        loc("Choose the warehouse that holds the stock", "কোন ওয়্যারহাউস থেকে স্টক ধরে রাখবেন বেছে নিন"),
      ],
      shot: {
        src: `${IMG}/s4.webp`,
        width: 960,
        height: 672,
        alt: loc(
          "Take advance and approve: total ৳1,060, advance ৳70, COD after ৳990, paid by bKash payment link",
          "অগ্রিম নিয়ে অ্যাপ্রুভ: মোট ৳১,০৬০, অগ্রিম ৳৭০, বাকি COD ৳৯৯০, বিকাশ পেমেন্ট লিংকে",
        ),
      },
      phone: {
        src: `${IMG}/s4-phone.webp`,
        width: 1170,
        height: 2532,
        alt: loc(
          "A new order made in the phone app, with delivery zone and payment by cash on delivery, bKash, Nagad or card",
          "ফোন অ্যাপে নতুন অর্ডার, ডেলিভারি জোন আর ক্যাশ অন ডেলিভারি, বিকাশ, নগদ বা কার্ডে পেমেন্ট",
        ),
      },
      logos: [
        { name: "bKash", src: "/integrations/bkash.png" },
        { name: "Nagad", src: "/integrations/nagad.png" },
      ],
    },
    {
      title: loc("Returns and exchanges in one place", "রিটার্ন আর এক্সচেঞ্জ এক জায়গায়"),
      body: loc(
        "Find the sale by memo, invoice or mobile number. Tick what came back, write why, and refund or swap it for another item.",
        "মেমো, ইনভয়েস বা মোবাইল নম্বর দিয়ে বিক্রিটা খুঁজুন। কী ফেরত এল টিক দিন, কারণ লিখুন, তারপর রিফান্ড দিন বা অন্য পণ্যে বদলে দিন।",
      ),
      points: [
        loc("Refund by cash, bKash, Nagad, card, store credit or from the customer's due", "নগদ, বিকাশ, নগদ (Nagad), কার্ড, স্টোর ক্রেডিট বা কাস্টমারের বাকি থেকে রিফান্ড"),
        loc("Say if the item can be sold again or goes to damaged stock", "পণ্যটি আবার বিক্রি হবে নাকি নষ্ট স্টকে যাবে ঠিক করুন"),
        loc("Sales older than the return window need a manager's approval", "রিটার্নের সময় পার হলে ম্যানেজারের অনুমোদন লাগে"),
        loc("Print a return slip for the customer", "কাস্টমারের জন্য রিটার্ন স্লিপ প্রিন্ট করুন"),
      ],
      shot: {
        src: `${IMG}/s5.webp`,
        width: 2236,
        height: 1436,
        alt: loc(
          "Return and exchange screen: one Lightning cable coming back as a faulty item, ৳441 taken off the customer's due",
          "রিটার্ন ও এক্সচেঞ্জ: একটি লাইটনিং কেবল নষ্ট হিসেবে ফেরত, কাস্টমারের বাকি থেকে ৳৪৪১ কাটা",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "ShoppingCart",
      title: loc("Order comes in", "অর্ডার আসে"),
      body: loc(
        "From your online store, Facebook shop, a call or the phone app.",
        "অনলাইন স্টোর, ফেসবুক শপ, ফোন কল বা ফোন অ্যাপ থেকে।",
      ),
    },
    {
      icon: "PhoneCall",
      title: loc("Verify the customer", "কাস্টমার যাচাই"),
      body: loc(
        "Call or auto call, and check the parcel record and duplicates.",
        "কল বা অটো কল দিন, পার্সেল রেকর্ড আর ডুপ্লিকেট দেখে নিন।",
      ),
    },
    {
      icon: "CircleCheck",
      title: loc("Approve, with advance if needed", "অ্যাপ্রুভ, দরকারে অগ্রিমসহ"),
      body: loc(
        "Stock is held for the order and the COD amount is set.",
        "অর্ডারের জন্য স্টক আলাদা হয়, COD-এর টাকা ঠিক হয়ে যায়।",
      ),
    },
    {
      icon: "Truck",
      title: loc("Send to the courier", "কুরিয়ারে পাঠান"),
      body: loc(
        "Book many orders at once and print the labels.",
        "একসঙ্গে অনেক অর্ডার বুক করুন, লেবেল প্রিন্ট করুন।",
      ),
    },
    {
      icon: "RotateCcw",
      title: loc("Deliver, return or exchange", "ডেলিভারি, রিটার্ন বা এক্সচেঞ্জ"),
      body: loc(
        "Close the order, or take the item back with stock and refund recorded.",
        "অর্ডার শেষ করুন, অথবা স্টক আর রিফান্ডের হিসাবসহ পণ্য ফেরত নিন।",
      ),
    },
  ],
  faqs: [
    {
      q: loc("How does it spot a fake or risky order?", "ফেক বা ঝুঁকির অর্ডার কীভাবে বোঝা যায়?"),
      a: loc(
        "The order shows the customer's past parcels with each courier: sent, delivered and returned. From the success rate it marks the order low, medium or high risk. You can then call, take an advance or cancel it as a fake order.",
        "অর্ডারে দেখায় কাস্টমারের আগের পার্সেল, কুরিয়ার ধরে: কতগুলো গেছে, ডেলিভারি হয়েছে আর ফেরত এসেছে। সফলতার হার দেখে অর্ডারটিকে কম, মাঝারি বা বেশি ঝুঁকির বলা হয়। তারপর আপনি কল দিতে পারেন, অগ্রিম নিতে পারেন, বা ফেক অর্ডার হিসেবে বাতিল করতে পারেন।",
      ),
    },
    {
      q: loc("What counts as a duplicate order?", "কোন অর্ডারকে ডুপ্লিকেট ধরা হয়?"),
      a: loc(
        "An open order from the same phone number with at least one same product, placed within two days of another. You can merge it into the first order or cancel it as a duplicate.",
        "একই ফোন নম্বর থেকে দুই দিনের মধ্যে আসা আরেকটি খোলা অর্ডার, যেখানে অন্তত একটি পণ্য একই। আপনি এটি প্রথম অর্ডারের সঙ্গে মার্জ করতে পারেন বা ডুপ্লিকেট হিসেবে বাতিল করতে পারেন।",
      ),
    },
    {
      q: loc("How are refunds paid when an item comes back?", "পণ্য ফেরত এলে রিফান্ড কীভাবে দেওয়া হয়?"),
      a: loc(
        "Pay back in cash, bKash, Nagad or card, give store credit, or take it off what the customer still owes you. The refund uses the price the customer paid, VAT included.",
        "নগদ টাকা, বিকাশ, নগদ (Nagad) বা কার্ডে ফেরত দিন, স্টোর ক্রেডিট দিন, অথবা কাস্টমারের বাকি টাকা থেকে কেটে নিন। কাস্টমার যে দামে কিনেছেন, ভ্যাটসহ সেই দামেই রিফান্ড হয়।",
      ),
    },
    {
      q: loc("Can I change how long customers can return items?", "কত দিনের মধ্যে রিটার্ন নেওয়া যাবে, বদলানো যায়?"),
      a: loc(
        "Yes. Set the return window in order settings, for example 7 days after delivery. A sale older than that can still be returned, but a manager has to approve it first.",
        "হ্যাঁ। অর্ডার সেটিংসে রিটার্নের সময় ঠিক করুন, যেমন ডেলিভারির ৭ দিন পর পর্যন্ত। এর চেয়ে পুরনো বিক্রিও ফেরত নেওয়া যায়, তবে আগে ম্যানেজারের অনুমোদন লাগে।",
      ),
    },
    {
      q: loc("Can my team handle orders from the phone?", "টিম কি ফোন থেকে অর্ডার সামলাতে পারবে?"),
      a: loc(
        "Yes. The phone app shows orders to confirm, to ship and on the way. Staff can call or WhatsApp the customer, confirm the order and create new orders there.",
        "হ্যাঁ। ফোন অ্যাপে কনফার্ম, শিপ আর পথে থাকা অর্ডার আলাদা দেখায়। স্টাফ সেখান থেকেই কাস্টমারকে কল বা হোয়াটসঅ্যাপ দিতে, অর্ডার কনফার্ম করতে আর নতুন অর্ডার নিতে পারে।",
      ),
    },
  ],
};
