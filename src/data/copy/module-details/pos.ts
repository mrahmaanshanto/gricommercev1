import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

const IMG = "/modules/pos";

export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "Fast counter sales. Cash that matches at night.",
      "কাউন্টারে দ্রুত বিক্রি। রাতে ক্যাশ মিলে যায়।",
    ),
    body: loc(
      "Scan a barcode and the product is on the bill. Take cash, card, bKash, Nagad or Rocket, even split in one sale. Every sale takes stock from the right branch, and at the end of the shift you see what the drawer should hold and what the cashier counted.",
      "বারকোড স্ক্যান করলেই প্রোডাক্ট বিলে উঠে যায়। ক্যাশ, কার্ড, বিকাশ, নগদ বা রকেটে টাকা নিন, এক বিলেই ভাগ করেও নিতে পারেন। প্রতিটি বিক্রি সঠিক ব্রাঞ্চের স্টক থেকে কাটে, আর শিফট শেষে দেখেন ড্রয়ারে কত থাকার কথা আর ক্যাশিয়ার কত গুনলেন।",
    ),
  },
  benefits: [
    {
      icon: "ScanBarcode",
      title: loc("Bill in seconds", "সেকেন্ডে বিল"),
      body: loc(
        "Scan, tap a product or use keyboard shortcuts. Phones ask for the IMEI, weighed items read the scale label, and a sale can be held and resumed.",
        "স্ক্যান করুন, প্রোডাক্টে ট্যাপ করুন বা কিবোর্ড শর্টকাট চাপুন। ফোন বিক্রিতে IMEI চায়, ওজনের পণ্য স্কেলের লেবেল থেকে পড়ে, আর বিল হোল্ড করে পরে আবার চালু করা যায়।",
      ),
    },
    {
      icon: "Wallet",
      title: loc("Any payment, split if needed", "যেকোনো পেমেন্ট, দরকারে ভাগ করে"),
      body: loc(
        "Cash, card, bKash, Nagad, Rocket, due or the member's wallet. Part in cash and the rest by bKash is fine, and each payment goes to the right account.",
        "ক্যাশ, কার্ড, বিকাশ, নগদ, রকেট, বাকি বা মেম্বারের ওয়ালেট। কিছু ক্যাশে আর বাকিটা বিকাশে নিলেও সমস্যা নেই, প্রতিটি পেমেন্ট সঠিক অ্যাকাউন্টে যায়।",
      ),
    },
    {
      icon: "Banknote",
      title: loc("Cash that adds up", "ক্যাশের হিসাব মেলে"),
      body: loc(
        "Open with a float, record cash pickups, and close with a count. Any short or extra cash is shown, and a big difference needs a manager's PIN.",
        "ওপেনিং ক্যাশ দিয়ে শিফট শুরু করুন, ক্যাশ পিকআপ রেকর্ড করুন, শেষে গুনে বন্ধ করুন। কম বা বেশি ক্যাশ সঙ্গে সঙ্গে দেখায়, আর বড় পার্থক্যে ম্যানেজারের PIN লাগে।",
      ),
    },
  ],
  heroShot: {
    src: `${IMG}/hero.webp`,
    width: 2880,
    height: 1800,
    alt: loc(
      "The POS register at Dhanmondi Counter 1: product cards with stock, a bill with four items and a total of ৳4,945",
      "ধানমন্ডি কাউন্টার ১-এর POS রেজিস্টার: স্টকসহ প্রোডাক্ট কার্ড, চারটি পণ্যের বিল আর মোট ৳৪,৯৪৫",
    ),
  },
  logos: {
    title: loc("Take payment by", "পেমেন্ট নিন"),
    items: [
      { name: "bKash", src: "/integrations/bkash.png" },
      { name: "Nagad", src: "/integrations/nagad.png" },
      { name: "Rocket", src: "/integrations/rocket.png" },
    ],
  },
  sections: [
    {
      title: loc("Scan and sell", "স্ক্যান করুন, বিক্রি করুন"),
      body: loc(
        "Each product card shows how many are left at this branch. If it is low here, the card shows how many are at the warehouse.",
        "প্রতিটি প্রোডাক্ট কার্ডে দেখায় এই ব্রাঞ্চে কয়টা আছে। এখানে কম থাকলে কার্ডেই দেখায় গুদামে কয়টা আছে।",
      ),
      points: [
        loc("Search by name, SKU or brand, or scan the barcode", "নাম, SKU বা ব্র্যান্ড দিয়ে সার্চ, বা বারকোড স্ক্যান"),
        loc("Phones ask for the IMEI, and a sold IMEI cannot be sold again", "ফোন বিক্রিতে IMEI চায়, একবার বিক্রি হওয়া IMEI আবার বিক্রি হয় না"),
        loc("Weighed items are read from the scale label", "ওজনের পণ্য স্কেলের লেবেল থেকে পড়ে নেয়"),
        loc("Hold a sale and serve the next customer", "একটা বিল হোল্ড করে পরের কাস্টমারকে সার্ভ করুন"),
      ],
      shot: {
        src: `${IMG}/s1.webp`,
        width: 1614,
        height: 1090,
        alt: loc(
          "Product cards on the register with stock badges, IMEI and serial tags, and stock at the Central Warehouse",
          "রেজিস্টারে প্রোডাক্ট কার্ড: স্টকের ব্যাজ, IMEI ও সিরিয়াল ট্যাগ, আর সেন্ট্রাল ওয়্যারহাউসে কত আছে",
        ),
      },
    },
    {
      title: loc("Split payment and member points", "ভাগ করে পেমেন্ট আর মেম্বার পয়েন্ট"),
      body: loc(
        "Type the customer's mobile number and their member discount and points show up. Take part in cash and the rest by bKash, and choose which bKash account received it.",
        "কাস্টমারের মোবাইল নম্বর লিখলেই মেম্বার ডিসকাউন্ট আর পয়েন্ট দেখায়। কিছু টাকা ক্যাশে আর বাকিটা বিকাশে নিন, কোন বিকাশ অ্যাকাউন্টে এল তাও বেছে নিন।",
      ),
      points: [
        loc("Cash, card, bKash, Nagad, Rocket, due or wallet", "ক্যাশ, কার্ড, বিকাশ, নগদ, রকেট, বাকি বা ওয়ালেট"),
        loc("Apply a discount or a coupon code", "ডিসকাউন্ট বা কুপন কোড দিন"),
        loc("Name the salesperson for staff sales and commission", "স্টাফের বিক্রি আর কমিশনের জন্য বিক্রেতার নাম দিন"),
        loc("Print the receipt, or send it by SMS or email", "রসিদ প্রিন্ট করুন, বা SMS বা ইমেইলে পাঠান"),
      ],
      shot: {
        src: `${IMG}/s2.webp`,
        width: 1840,
        height: 1552,
        alt: loc(
          "Checkout for a Gold member: 5% off, ৳2,000 taken in cash and the rest, ৳2,697.75, by bKash",
          "গোল্ড মেম্বারের চেকআউট: ৫% ছাড়, ৳২,০০০ ক্যাশে আর বাকি ৳২,৬৯৭.৭৫ বিকাশে",
        ),
      },
      logos: [
        { name: "bKash", src: "/integrations/bkash.png" },
        { name: "Nagad", src: "/integrations/nagad.png" },
        { name: "Rocket", src: "/integrations/rocket.png" },
      ],
    },
    {
      title: loc("Every memo in the sales book", "সেলস বুকে প্রতিটি মেমো"),
      body: loc(
        "The sales book lists every counter memo of the day with the customer, payment, amount and who sold it. Total sales, profit, sales on due and returns sit on top.",
        "সেলস বুকে দিনের প্রতিটি কাউন্টার মেমো থাকে: কাস্টমার, পেমেন্ট, টাকা আর কে বিক্রি করেছে। উপরে থাকে মোট বিক্রি, লাভ, বাকিতে বিক্রি আর রিটার্ন।",
      ),
      points: [
        loc("Filter by cash, bKash, Nagad, card or due", "ক্যাশ, বিকাশ, নগদ, কার্ড বা বাকি ধরে ফিল্টার"),
        loc("See the day's profit and margin", "দিনের লাভ আর মার্জিন দেখুন"),
        loc("Reprint a receipt from recent sales", "সাম্প্রতিক বিক্রি থেকে রসিদ আবার প্রিন্ট"),
        loc("Return or exchange from the same sale", "একই বিক্রি থেকে রিটার্ন বা এক্সচেঞ্জ"),
      ],
      shot: {
        src: `${IMG}/s3.webp`,
        width: 2204,
        height: 1160,
        alt: loc(
          "The sales book for today: ৳48,650 sold in 62 memos, ৳9,820 profit, and each memo with its payment",
          "আজকের সেলস বুক: ৬২টি মেমোতে ৳৪৮,৬৫০ বিক্রি, ৳৯,৮২০ লাভ, আর প্রতিটি মেমোর পেমেন্ট",
        ),
      },
    },
    {
      title: loc("Close the shift, count the cash", "শিফট বন্ধ করুন, ক্যাশ গুনুন"),
      body: loc(
        "At the end of the shift the register shows sales, cash taken, refunds and pickups, and the cash expected in the drawer. The cashier types what they counted and any shortfall shows at once.",
        "শিফট শেষে রেজিস্টার দেখায় বিক্রি, ক্যাশে নেওয়া টাকা, রিফান্ড আর পিকআপ, আর ড্রয়ারে কত থাকার কথা। ক্যাশিয়ার যা গুনলেন লিখলেই কম-বেশি সঙ্গে সঙ্গে দেখায়।",
      ),
      points: [
        loc("Open each shift with a counted float", "প্রতিটি শিফট গোনা ওপেনিং ক্যাশ দিয়ে শুরু"),
        loc("A difference over your limit needs a manager's PIN", "সীমার বেশি পার্থক্যে ম্যানেজারের PIN লাগে"),
        loc("The difference is recorded with the shift", "পার্থক্য শিফটের সঙ্গে রেকর্ড থাকে"),
        loc("Print the shift report", "শিফট রিপোর্ট প্রিন্ট করুন"),
      ],
      shot: {
        src: `${IMG}/s4.webp`,
        width: 1520,
        height: 1032,
        alt: loc(
          "End shift: ৳3,345.50 expected in the drawer, ৳3,300 counted, short by ৳45.50",
          "শিফট শেষ: ড্রয়ারে থাকার কথা ৳৩,৩৪৫.৫০, গোনা হয়েছে ৳৩,৩০০, কম ৳৪৫.৫০",
        ),
      },
    },
    {
      title: loc("Counters, cashiers and cash pickups", "কাউন্টার, ক্যাশিয়ার আর ক্যাশ পিকআপ"),
      body: loc(
        "POS manage shows every counter, who is on shift and each cashier's cash difference. Closed shifts list what was expected and what was counted.",
        "POS manage-এ সব কাউন্টার, কে শিফটে আছে আর প্রতিটি ক্যাশিয়ারের ক্যাশের পার্থক্য দেখায়। বন্ধ শিফটে থাকে কত থাকার কথা ছিল আর কত গোনা হয়েছে।",
      ),
      points: [
        loc("Each counter sells from its own branch or warehouse", "প্রতিটি কাউন্টার তার নিজের ব্রাঞ্চ বা গুদাম থেকে বিক্রি করে"),
        loc("Record cash pickups to the shop safe or a bank deposit", "শপ সেফ বা ব্যাংকে জমার জন্য ক্যাশ পিকআপ রেকর্ড"),
        loc("A reminder shows when the drawer holds too much cash", "ড্রয়ারে বেশি ক্যাশ জমলে রিমাইন্ডার দেখায়"),
        loc("Opening the drawer without a sale needs a reason", "বিক্রি ছাড়া ড্রয়ার খুলতে কারণ লাগে"),
      ],
      shot: {
        src: `${IMG}/s5.webp`,
        width: 2204,
        height: 1610,
        alt: loc(
          "Employees and shifts: each cashier's sales and cash difference, and closed shifts with expected and counted cash",
          "কর্মী ও শিফট: প্রতিটি ক্যাশিয়ারের বিক্রি আর ক্যাশের পার্থক্য, আর বন্ধ শিফটে প্রত্যাশিত ও গোনা ক্যাশ",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "Banknote",
      title: loc("Open the register", "রেজিস্টার খুলুন"),
      body: loc(
        "Choose the counter and the cashier, and count the opening cash.",
        "কাউন্টার আর ক্যাশিয়ার বেছে নিন, ওপেনিং ক্যাশ গুনে দিন।",
      ),
    },
    {
      icon: "ScanBarcode",
      title: loc("Scan and bill", "স্ক্যান করে বিল"),
      body: loc(
        "Scan barcodes or tap products; stock comes from this branch.",
        "বারকোড স্ক্যান করুন বা প্রোডাক্টে ট্যাপ করুন; স্টক কাটে এই ব্রাঞ্চ থেকে।",
      ),
    },
    {
      icon: "CreditCard",
      title: loc("Take payment", "পেমেন্ট নিন"),
      body: loc(
        "Cash, card, bKash, Nagad or Rocket, split if needed.",
        "ক্যাশ, কার্ড, বিকাশ, নগদ বা রকেট, দরকারে ভাগ করে।",
      ),
    },
    {
      icon: "Receipt",
      title: loc("Give the receipt", "রসিদ দিন"),
      body: loc(
        "Print it, or send it to the customer by SMS or email.",
        "প্রিন্ট করুন, বা কাস্টমারকে SMS বা ইমেইলে পাঠান।",
      ),
    },
    {
      icon: "ClipboardCheck",
      title: loc("Count and close", "গুনে বন্ধ করুন"),
      body: loc(
        "Count the drawer at the end of the shift and see any difference.",
        "শিফট শেষে ড্রয়ার গুনুন, কম-বেশি থাকলে দেখে নিন।",
      ),
    },
  ],
  faqs: [
    {
      q: loc("What if the internet goes down?", "ইন্টারনেট চলে গেলে কী হবে?"),
      a: loc(
        "The register keeps selling, with cash only. Sales are saved and posted when the connection comes back. Anything that needs a decision, like a price that changed, waits in a sync list, and the same sale is never saved twice.",
        "রেজিস্টারে বিক্রি চলতে থাকে, শুধু ক্যাশে। বিক্রিগুলো জমা থাকে আর ইন্টারনেট ফিরলে পোস্ট হয়। দাম বদলানোর মতো যেসব বিষয়ে সিদ্ধান্ত লাগে, সেগুলো সিঙ্ক তালিকায় অপেক্ষা করে, আর একই বিক্রি দুবার সেভ হয় না।",
      ),
    },
    {
      q: loc("Can a cashier give any discount?", "ক্যাশিয়ার কি যেকোনো ডিসকাউন্ট দিতে পারে?"),
      a: loc(
        "No. You set the largest discount a cashier can give on a bill, for example 15%. Lowering an item's price or giving an item discount needs a manager's PIN.",
        "না। একটা বিলে ক্যাশিয়ার সর্বোচ্চ কত ডিসকাউন্ট দিতে পারবে আপনি ঠিক করেন, যেমন ১৫%। কোনো পণ্যের দাম কমাতে বা সেই পণ্যে ছাড় দিতে ম্যানেজারের PIN লাগে।",
      ),
    },
    {
      q: loc("Can I sell on due at the counter?", "কাউন্টারে বাকিতে বিক্রি করা যাবে?"),
      a: loc(
        "Yes, once selling on due is turned on in settings. At checkout, add the customer's mobile number and choose Due. The sales book shows how much was sold on due today.",
        "হ্যাঁ, সেটিংসে বাকিতে বিক্রি চালু করা থাকলে। চেকআউটে কাস্টমারের মোবাইল নম্বর দিন আর বাকি বেছে নিন। আজ কত বাকিতে বিক্রি হলো, সেলস বুকে দেখায়।",
      ),
    },
    {
      q: loc("How do returns and exchanges work?", "রিটার্ন আর এক্সচেঞ্জ কীভাবে হয়?"),
      a: loc(
        "Open Exchange / return from the register and find the sale. You set how many days a customer has to return or exchange, and the number is printed on the receipt.",
        "রেজিস্টার থেকে Exchange / return খুলে বিক্রিটা খুঁজুন। কাস্টমার কত দিনের মধ্যে ফেরত বা বদল করতে পারবে আপনি ঠিক করেন, আর সেটা রসিদে ছাপা থাকে।",
      ),
    },
  ],
};
