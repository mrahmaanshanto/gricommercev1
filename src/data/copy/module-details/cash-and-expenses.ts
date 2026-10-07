import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

const dir = "/modules/cash-and-expenses";

export const detail: ModuleDetail = {
  hero: {
    title: loc("Know where every taka is.", "প্রতিটি টাকা কোথায় আছে, জানুন।"),
    body: loc(
      "Cash, bank, bKash and Nagad in one list. See how much COD money the couriers still hold, what customers owe you, which bills are due and what is left after expenses.",
      "ক্যাশ, ব্যাংক, বিকাশ আর নগদ—সব এক তালিকায়। কুরিয়ারের কাছে COD-র কত টাকা আটকে আছে, কাস্টমারের কাছে কত বাকি, কোন বিল দিতে হবে আর খরচের পর কত থাকে—সব দেখুন।",
    ),
  },
  benefits: [
    {
      icon: "Truck",
      title: loc("Courier payout, checked", "কুরিয়ার পেআউটের পাকা হিসাব"),
      body: loc(
        "See which courier payout is late and by how many days. Mark it arrived when the money lands, or write why it came short.",
        "কোন কুরিয়ারের পেআউট কত দিন দেরি, দেখুন। টাকা এলে ‘এসেছে’ দিন, কম এলে কারণ লিখে রাখুন।",
      ),
    },
    {
      icon: "ShieldCheck",
      title: loc("Check every bKash TrxID", "প্রতিটি বিকাশ TrxID যাচাই"),
      body: loc(
        "Check bKash, Nagad and Rocket payments before you ship. A transaction ID that was used before is flagged.",
        "পাঠানোর আগে বিকাশ, নগদ আর রকেটের পেমেন্ট যাচাই করুন। আগে ব্যবহার হওয়া TrxID আলাদা করে দেখায়।",
      ),
    },
    {
      icon: "Receipt",
      title: loc("Expenses and bills in order", "খরচ আর বিল গোছানো"),
      body: loc(
        "Record every expense, pay bills in parts, and let a second person approve big spends.",
        "প্রতিটি খরচ লিখে রাখুন, বিল কিস্তিতে দিন, আর বড় খরচ আরেকজনকে দিয়ে অনুমোদন করান।",
      ),
    },
  ],
  heroShot: {
    src: `${dir}/hero.webp`,
    width: 2880,
    height: 1800,
    alt: loc(
      "Money page: ৳36,10,641.63 balance across cash, banks and mobile wallets, with bKash and Nagad sales and courier payouts",
      "মানি পেজ: ক্যাশ, ব্যাংক ও মোবাইল ওয়ালেট মিলে ৳৩৬,১০,৬৪১.৬৩ ব্যালেন্স, বিকাশ-নগদের বিক্রি ও কুরিয়ার পেআউটসহ",
    ),
  },
  heroPhone: {
    src: `${dir}/phone.webp`,
    width: 1170,
    height: 2532,
    alt: loc(
      "Phone app alerts: an order paid by bKash and a Pathao COD payout of ৳48,300 for 31 orders",
      "ফোন অ্যাপের নোটিফিকেশন: বিকাশে পেমেন্ট হওয়া অর্ডার আর ৩১টি অর্ডারের ৳৪৮,৩০০ Pathao COD পেআউট",
    ),
  },
  logos: {
    title: loc("Works with", "যাদের সঙ্গে কাজ করে"),
    items: [
      { name: "bKash", src: "/integrations/bkash.png" },
      { name: "Nagad", src: "/integrations/nagad.png" },
      { name: "Rocket", src: "/integrations/rocket.png" },
      { name: "SSLCOMMERZ", src: "/integrations/sslcommerz.png" },
      { name: "EPS", src: "/integrations/eps.png" },
      { name: "Bank transfer", src: "/integrations/bank-transfer.png" },
      { name: "Pathao", src: "/integrations/pathao.png" },
      { name: "Steadfast", src: "/integrations/steadfast.png" },
      { name: "RedX", src: "/integrations/redx.png" },
      { name: "Carrybee", src: "/integrations/carrybee.png" },
    ],
  },
  sections: [
    {
      title: loc("Cash, bank and wallets in one list", "ক্যাশ, ব্যাংক আর ওয়ালেট এক তালিকায়"),
      body: loc(
        "Every sale, payout and expense goes to the account that got the money: the counter drawer, the bank, or your bKash and Nagad merchant wallet. The total balance stays at the top.",
        "প্রতিটি বিক্রি, পেআউট আর খরচ সেই অ্যাকাউন্টে যায় যেখানে টাকা এসেছে বা গেছে: কাউন্টারের ড্রয়ার, ব্যাংক, কিংবা বিকাশ-নগদের মার্চেন্ট ওয়ালেট। মোট ব্যালেন্স সবসময় ওপরে থাকে।",
      ),
      points: [
        loc("Cash, banks and mobile wallets, each with its balance", "ক্যাশ, ব্যাংক আর মোবাইল ওয়ালেট—প্রতিটির আলাদা ব্যালেন্স"),
        loc("Add money, take money out or move it between accounts", "টাকা যোগ করুন, তুলুন বা এক অ্যাকাউন্ট থেকে আরেকটায় নিন"),
        loc("See the money payment partners still hold", "পেমেন্ট পার্টনারের কাছে কত টাকা আছে, দেখুন"),
        loc("Big money moves wait for approval", "বড় অঙ্কের লেনদেন অনুমোদনের অপেক্ষায় থাকে"),
      ],
      shot: {
        src: `${dir}/s1.webp`,
        width: 1828,
        height: 1010,
        alt: loc(
          "Money in and out: Nagad and bKash counter sales, cash sales and payouts from Pathao and Steadfast",
          "টাকা আসা-যাওয়া: নগদ ও বিকাশে কাউন্টার বিক্রি, ক্যাশ বিক্রি আর Pathao ও Steadfast-এর পেআউট",
        ),
      },
    },
    {
      title: loc("Courier COD payout, day by day", "কুরিয়ারের COD পেআউট, দিন ধরে ধরে"),
      body: loc(
        "Pathao, Steadfast, RedX and Carrybee collect your COD money and pay you later. See what each one holds, which payout is late, and tick it off when it reaches your bank.",
        "Pathao, Steadfast, RedX আর Carrybee আপনার COD টাকা তুলে পরে পাঠায়। কার কাছে কত আছে, কোন পেআউট দেরি হচ্ছে দেখুন, আর ব্যাংকে টাকা এলে টিক দিন।",
      ),
      points: [
        loc("Late payouts come first, with the days overdue", "দেরি হওয়া পেআউট সবার আগে, কত দিন দেরি সহ"),
        loc("Mark it arrived, or set the new date they promised", "‘এসেছে’ দিন, বা ওরা যে নতুন তারিখ দিল সেটা লিখুন"),
        loc("A short payout goes to “Needs a look” with a reason", "কম টাকা এলে কারণসহ ‘দেখতে হবে’ তালিকায় যায়"),
        loc("Gateway payouts from bKash, Nagad and SSLCOMMERZ too", "বিকাশ, নগদ আর SSLCOMMERZ-এর পেআউটও এখানে"),
      ],
      shot: {
        src: `${dir}/s2.webp`,
        width: 1828,
        height: 968,
        alt: loc(
          "Payouts: ৳21,738.10 late from Pathao, RedX, Carrybee and Steadfast, each with an Arrived button",
          "পেআউট: Pathao, RedX, Carrybee ও Steadfast-এর ৳২১,৭৩৮.১০ দেরিতে, প্রতিটির পাশে ‘Arrived’ বোতাম",
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
      title: loc("Check bKash and Nagad payments", "বিকাশ-নগদের পেমেন্ট যাচাই"),
      body: loc(
        "When a customer pays by bKash, Nagad, Rocket or bank transfer and sends the TrxID, check it here before you ship. If the same TrxID was used on another order, you see it at once.",
        "কাস্টমার বিকাশ, নগদ, রকেট বা ব্যাংকে টাকা পাঠিয়ে TrxID দিলে, পাঠানোর আগে এখানে যাচাই করুন। একই TrxID অন্য অর্ডারে আগে ব্যবহার হলে সঙ্গে সঙ্গে দেখবেন।",
      ),
      points: [
        loc("To check, verified and rejected lists", "যাচাই বাকি, যাচাই হয়েছে আর বাতিল—আলাদা তালিকা"),
        loc("“Used before” warning on a repeated TrxID", "একই TrxID আবার এলে ‘আগে ব্যবহার হয়েছে’ সতর্কতা"),
        loc("Only one staff member checks a payment at a time", "একটি পেমেন্ট একবারে একজনই যাচাই করেন"),
        loc("Refunds and payment links in the same place", "রিফান্ড আর পেমেন্ট লিংকও একই জায়গায়"),
      ],
      shot: {
        src: `${dir}/s3.webp`,
        width: 1828,
        height: 1024,
        alt: loc(
          "Payments to check: Nagad and bKash transaction IDs, one marked Used before",
          "যাচাই বাকি পেমেন্ট: নগদ ও বিকাশের TrxID, একটিতে ‘Used before’ চিহ্ন",
        ),
      },
      logos: [
        { name: "bKash", src: "/integrations/bkash.png" },
        { name: "Nagad", src: "/integrations/nagad.png" },
        { name: "Rocket", src: "/integrations/rocket.png" },
        { name: "Bank transfer", src: "/integrations/bank-transfer.png" },
      ],
    },
    {
      title: loc("Expenses, bills and dues", "খরচ, বিল আর বাকি"),
      body: loc(
        "Record rent, transport, repairs and other expenses. Salaries, sales commission and Facebook boost bills wait in Bills to pay until you pay them, in full or in parts.",
        "ভাড়া, যাতায়াত, মেরামত সহ সব খরচ লিখে রাখুন। বেতন, সেলস কমিশন আর ফেসবুক বুস্টের বিল ‘দেওয়ার বিল’-এ থাকে, যতক্ষণ না পুরো বা কিস্তিতে দেন।",
      ),
      points: [
        loc("Overdue bills show how many days late", "মেয়াদ পেরোনো বিলে কত দিন দেরি, দেখা যায়"),
        loc("Pay a bill in parts and see what is left", "বিল কিস্তিতে দিন, কত বাকি দেখুন"),
        loc("Dues: what customers owe you and what you owe, by age", "বাকি: কাস্টমারের কাছে কত পাবেন আর আপনি কত দেবেন, সময় ধরে"),
        loc("Spends over your limit need a second person’s approval", "সীমার বেশি খরচে আরেকজনের অনুমোদন লাগে"),
      ],
      shot: {
        src: `${dir}/s4.webp`,
        width: 2148,
        height: 1140,
        alt: loc(
          "Bills to pay: ৳3,74,385 owed, with September salaries, sales commission and a Facebook boost bill",
          "দেওয়ার বিল: মোট ৳৩,৭৪,৩৮৫ বাকি—সেপ্টেম্বরের বেতন, সেলস কমিশন আর ফেসবুক বুস্টের বিলসহ",
        ),
      },
    },
    {
      title: loc("VAT and Mushak, ready", "VAT আর মূসক, তৈরি"),
      body: loc(
        "See VAT collected on sales and VAT paid on purchases every month. Set the rate for each category and get the Mushak-6.3 invoice and the Mushak-9.1 monthly return.",
        "প্রতি মাসে বিক্রিতে কত VAT নিলেন আর কেনাকাটায় কত দিলেন, দেখুন। প্রতিটি ক্যাটাগরির রেট ঠিক করুন, আর মূসক-৬.৩ চালান ও মূসক-৯.১ মাসিক রিটার্ন নিন।",
      ),
      points: [
        loc("VAT to pay this month and the last date", "এ মাসে কত VAT দিতে হবে আর শেষ তারিখ"),
        loc("Rate per category, inside the price or added on top", "ক্যাটাগরি ধরে রেট, দামের ভেতরে বা দামের ওপরে"),
        loc("Monthly return built from your sales and purchase records", "বিক্রি আর কেনার রেকর্ড থেকে মাসিক রিটার্ন তৈরি"),
        loc("Turn it off if your shop is not VAT-registered", "দোকান VAT-নিবন্ধিত না হলে বন্ধ রাখুন"),
      ],
      shot: {
        src: `${dir}/s5.webp`,
        width: 2128,
        height: 1294,
        alt: loc(
          "VAT for September: ৳54,500 collected, ৳31,240 paid, ৳23,260 to pay by 15 Oct, with rates by category",
          "সেপ্টেম্বরের VAT: ৳৫৪,৫০০ আদায়, ৳৩১,২৪০ পরিশোধিত, ১৫ অক্টোবরের মধ্যে ৳২৩,২৬০ দিতে হবে, ক্যাটাগরি ধরে রেটসহ",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "Wallet",
      title: loc("Add your accounts", "অ্যাকাউন্ট যোগ করুন"),
      body: loc(
        "Add your cash drawers, bank accounts and bKash or Nagad wallets once.",
        "ক্যাশ ড্রয়ার, ব্যাংক অ্যাকাউন্ট আর বিকাশ-নগদ ওয়ালেট একবার যোগ করুন।",
      ),
    },
    {
      icon: "ShoppingCart",
      title: loc("Sales post themselves", "বিক্রি নিজেই উঠে যায়"),
      body: loc(
        "Each sale goes to the account that took the money.",
        "প্রতিটি বিক্রি সেই অ্যাকাউন্টে ওঠে যেখানে টাকা এসেছে।",
      ),
    },
    {
      icon: "Truck",
      title: loc("Follow courier payouts", "কুরিয়ার পেআউট দেখুন"),
      body: loc(
        "See what each courier holds and tick off each payout.",
        "কোন কুরিয়ারের কাছে কত আছে দেখুন, পেআউট এলে টিক দিন।",
      ),
    },
    {
      icon: "Receipt",
      title: loc("Record expenses and bills", "খরচ আর বিল লিখুন"),
      body: loc(
        "Add expenses, pay bills and collect dues from customers.",
        "খরচ লিখুন, বিল দিন আর কাস্টমারের বাকি তুলুন।",
      ),
    },
    {
      icon: "ShieldCheck",
      title: loc("Approve and match", "অনুমোদন ও মিলিয়ে দেখা"),
      body: loc(
        "Big spends wait for approval, and bank statements are matched line by line.",
        "বড় খরচ অনুমোদনের অপেক্ষায় থাকে, আর ব্যাংক স্টেটমেন্ট লাইন ধরে মেলানো হয়।",
      ),
    },
    {
      icon: "ChartPie",
      title: loc("See profit and VAT", "লাভ আর VAT দেখুন"),
      body: loc(
        "Check net profit and the VAT you have to pay each month.",
        "প্রতি মাসের নিট লাভ আর কত VAT দিতে হবে, দেখুন।",
      ),
    },
  ],
  faqs: [
    {
      q: loc(
        "Can I see how much COD money Pathao or Steadfast still owes me?",
        "Pathao বা Steadfast-এর কাছে আমার কত COD টাকা আছে, দেখা যাবে?",
      ),
      a: loc(
        "Yes. Payouts shows what each courier holds now, what should arrive today and what is late. When the money reaches your bank, mark it arrived. If it is short, write the reason.",
        "হ্যাঁ। পেআউট পেজে দেখবেন কোন কুরিয়ারের কাছে এখন কত আছে, আজ কত আসার কথা আর কোনটা দেরি। ব্যাংকে টাকা এলে ‘এসেছে’ দিন, কম এলে কারণ লিখে রাখুন।",
      ),
    },
    {
      q: loc(
        "Can it catch a bKash transaction ID that was already used?",
        "আগে ব্যবহার হওয়া বিকাশ TrxID কি ধরা পড়বে?",
      ),
      a: loc(
        "Yes. bKash, Nagad, Rocket and bank payments that customers report wait in Payments to be checked. If the same transaction ID was used before, it is marked “Used before”, and your staff verifies or rejects the payment.",
        "হ্যাঁ। কাস্টমার যে বিকাশ, নগদ, রকেট বা ব্যাংক পেমেন্টের কথা জানান, সেগুলো পেমেন্টস-এ যাচাইয়ের জন্য থাকে। একই TrxID আগে ব্যবহার হলে ‘Used before’ দেখায়, আর আপনার স্টাফ পেমেন্টটি মেনে নেন বা বাতিল করেন।",
      ),
    },
    {
      q: loc(
        "Can my staff spend money without asking me?",
        "আমাকে না জানিয়ে স্টাফ কি টাকা খরচ করতে পারবে?",
      ),
      a: loc(
        "You set the limits. Expenses, money moves, refunds and write-offs over the limit wait in Approvals for a second person, and nobody can approve their own request.",
        "সীমা আপনি ঠিক করেন। সীমার বেশি খরচ, টাকা স্থানান্তর, রিফান্ড ও রাইট-অফ ‘অনুমোদন’-এ আরেকজনের জন্য অপেক্ষা করে। নিজের অনুরোধ কেউ নিজে অনুমোদন করতে পারেন না।",
      ),
    },
    {
      q: loc("Can I match my bank statement?", "ব্যাংক স্টেটমেন্ট মেলানো যাবে?"),
      a: loc(
        "Yes. Import a bank or wallet statement as a CSV file. Lines are matched to your records by amount and date. For the rest, pick the matching entry, add the missing one, or ignore it with a reason.",
        "হ্যাঁ। ব্যাংক বা ওয়ালেটের স্টেটমেন্ট CSV ফাইল হিসেবে আনুন। টাকার অঙ্ক আর তারিখ দেখে লাইনগুলো আপনার রেকর্ডের সঙ্গে মিলে যায়। বাকিগুলোর জন্য মিলিয়ে দিন, না থাকা এন্ট্রি যোগ করুন, বা কারণ লিখে বাদ দিন।",
      ),
    },
    {
      q: loc("Does it replace my accountant?", "এটি কি হিসাবরক্ষকের বিকল্প?"),
      a: loc(
        "No. It keeps your daily money records, journals, chart of accounts and VAT in order, so your accountant starts from clean figures. Final accounts and tax filing are still their job.",
        "না। এটি দৈনিক টাকার হিসাব, জার্নাল, চার্ট অব অ্যাকাউন্টস আর VAT গুছিয়ে রাখে, যাতে হিসাবরক্ষক পরিষ্কার হিসাব থেকে কাজ শুরু করতে পারেন। চূড়ান্ত হিসাব আর কর দাখিল তাঁদেরই কাজ।",
      ),
    },
  ],
};
