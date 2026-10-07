import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

const IMG = "/modules/courier";

const COURIERS = [
  { name: "Pathao", src: "/integrations/pathao.png" },
  { name: "Steadfast", src: "/integrations/steadfast.png" },
  { name: "RedX", src: "/integrations/redx.png" },
  { name: "Carrybee", src: "/integrations/carrybee.png" },
];

export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "Parcel delivered. Is the COD money with you?",
      "পার্সেল ডেলিভারি হয়েছে, COD-এর টাকা কি হাতে এসেছে?",
    ),
    body: loc(
      "Book Pathao, Steadfast, RedX and Carrybee from one place. Follow every parcel, see the COD each courier collected, their charge and what they still owe you. Count returned parcels back into stock, piece by piece.",
      "Pathao, Steadfast, RedX আর Carrybee এক জায়গা থেকে বুক করুন। প্রতিটি পার্সেল ট্র্যাক করুন, কোন কুরিয়ার কত COD তুলেছে, কত চার্জ কেটেছে আর এখনও কত পাওনা, সব দেখুন। ফেরত পার্সেল এক এক পিস গুনে স্টকে তুলুন।",
    ),
  },
  benefits: [
    {
      icon: "Send",
      title: loc("Book many parcels at once", "একসঙ্গে অনেক পার্সেল বুক"),
      body: loc(
        "Each order is checked for courier, phone number and address first. Booking runs in the background and you can retry the ones that failed.",
        "প্রতিটি অর্ডারে আগে কুরিয়ার, ফোন নম্বর আর ঠিকানা চেক হয়। বুকিং পেছনে চলতে থাকে, যেগুলো ব্যর্থ হলো সেগুলো আবার চেষ্টা করুন।",
      ),
    },
    {
      icon: "Banknote",
      title: loc("Know what each courier owes you", "কোন কুরিয়ারের কাছে কত পাওনা"),
      body: loc(
        "COD collected, courier charge, net amount, paid to you, payout due and money still held, for every courier and any date range.",
        "আদায় হওয়া COD, কুরিয়ার চার্জ, নিট টাকা, আপনাকে দেওয়া টাকা, বাকি পেআউট আর আটকে থাকা টাকা, প্রতিটি কুরিয়ারের জন্য, যেকোনো তারিখে।",
      ),
    },
    {
      icon: "PackageX",
      title: loc("Returned parcels back in stock", "ফেরত পার্সেল আবার স্টকে"),
      body: loc(
        "Count each returned item as good or damaged, even when only part of the parcel is back. Good items return to stock; damaged ones stay apart.",
        "ফেরত আসা প্রতিটি পণ্য ভালো না নষ্ট গুনে লিখুন, পার্সেলের কিছু অংশ এলেও। ভালো পণ্য স্টকে ফেরে, নষ্টগুলো আলাদা থাকে।",
      ),
    },
  ],
  heroShot: {
    src: `${IMG}/hero.webp`,
    width: 2880,
    height: 1800,
    alt: loc(
      "Courier statement for the last 30 days: parcels dispatched, on the way, delivered and returned, COD collected and payout due",
      "গত ৩০ দিনের কুরিয়ার স্টেটমেন্ট: পাঠানো, পথে থাকা, ডেলিভারি আর ফেরত পার্সেল, আদায় হওয়া COD আর বাকি পেআউট",
    ),
  },
  heroPhone: {
    src: `${IMG}/phone.webp`,
    width: 1170,
    height: 2532,
    alt: loc(
      "Phone app alerts: Steadfast pickups delayed and a COD payout received from Pathao",
      "ফোন অ্যাপে নোটিফিকেশন: Steadfast পিকআপ দেরি আর Pathao থেকে COD পেআউট এসেছে",
    ),
  },
  logos: {
    title: loc("Works with these couriers", "যে কুরিয়ারগুলোর সঙ্গে কাজ করে"),
    items: COURIERS,
  },
  sections: [
    {
      title: loc("Book the courier in one click", "এক ক্লিকে কুরিয়ার বুকিং"),
      body: loc(
        "Approved orders wait in the courier review queue. Each one is checked first, so a wrong phone number or a missing address is caught before booking.",
        "অ্যাপ্রুভ হওয়া অর্ডার কুরিয়ার রিভিউ লাইনে অপেক্ষা করে। আগে প্রতিটি চেক হয়, তাই ভুল ফোন নম্বর বা ঠিকানা না থাকলে বুকিংয়ের আগেই ধরা পড়ে।",
      ),
      points: [
        loc("Select orders and press Book with courier", "অর্ডার বেছে নিয়ে Book with courier চাপুন"),
        loc("Booking runs in the background while you keep working", "বুকিং পেছনে চলে, আপনি কাজ চালিয়ে যান"),
        loc("Retry only the orders that failed", "শুধু ব্যর্থ অর্ডারগুলো আবার চেষ্টা করুন"),
        loc("Pick and pack list and print queue for labels", "পিক অ্যান্ড প্যাক তালিকা আর লেবেলের প্রিন্ট কিউ"),
      ],
      shot: {
        src: `${IMG}/s1.webp`,
        width: 2236,
        height: 984,
        alt: loc(
          "Courier review: five orders selected for RedX, Carrybee and Pathao, all marked Ready, with a Book with courier button",
          "কুরিয়ার রিভিউ: RedX, Carrybee আর Pathao-এর পাঁচটি অর্ডার বাছাই, সবগুলো Ready, পাশে Book with courier বাটন",
        ),
      },
      logos: COURIERS,
    },
    {
      title: loc("Every courier side by side", "সব কুরিয়ার পাশাপাশি"),
      body: loc(
        "One table shows how each courier is doing for the dates you pick. Spot the courier with the most returns or the biggest payout still due.",
        "এক টেবিলেই দেখুন বাছাই করা তারিখে কোন কুরিয়ার কেমন করছে। কোন কুরিয়ারে রিটার্ন বেশি বা কার কাছে পেআউট বেশি বাকি, সহজেই ধরা পড়ে।",
      ),
      points: [
        loc("Dispatched, waiting pickup, on the way, delivered and returned", "পাঠানো, পিকআপের অপেক্ষায়, পথে, ডেলিভারি আর ফেরত"),
        loc("Delivered percent for each courier", "প্রতিটি কুরিয়ারের ডেলিভারি হার"),
        loc("COD collected, net amount and payout due", "আদায় হওয়া COD, নিট টাকা আর বাকি পেআউট"),
        loc("Today, last 7 days, this month or your own dates", "আজ, গত ৭ দিন, এই মাস বা নিজের পছন্দের তারিখ"),
      ],
      shot: {
        src: `${IMG}/s2.webp`,
        width: 2236,
        height: 692,
        alt: loc(
          "Courier by courier table for Steadfast, Pathao, RedX and Carrybee with delivered percent, COD collected, net and payout due",
          "Steadfast, Pathao, RedX আর Carrybee-এর তুলনা টেবিল: ডেলিভারি হার, আদায় হওয়া COD, নিট আর বাকি পেআউট",
        ),
      },
    },
    {
      title: loc("Follow the COD money, parcel by parcel", "প্রতিটি পার্সেলের COD-এর হিসাব"),
      body: loc(
        "Open a courier to see where every taka is. COD to collect, what was collected, the courier's charge, what they paid you and what they are still holding.",
        "কুরিয়ার খুললেই দেখবেন প্রতিটি টাকা কোথায়। কত COD তোলা বাকি, কত তোলা হয়েছে, কুরিয়ারের চার্জ, আপনাকে কত দিয়েছে আর কত এখনও তাদের কাছে আটকে আছে।",
      ),
      points: [
        loc("Each parcel with tracking number, zone and days on the way", "প্রতিটি পার্সেলের ট্র্যাকিং নম্বর, জোন আর কত দিন ধরে পথে"),
        loc("Filter parcels by state: in transit, delivered, coming back", "স্টেট ধরে ফিল্টার: পথে, ডেলিভারি, ফেরত আসছে"),
        loc("Average delivery days for each courier", "প্রতিটি কুরিয়ারের গড় ডেলিভারি সময়"),
        loc("Export or print the statement", "স্টেটমেন্ট এক্সপোর্ট বা প্রিন্ট করুন"),
      ],
      shot: {
        src: `${IMG}/s3.webp`,
        width: 2236,
        height: 1560,
        alt: loc(
          "Steadfast detail: 95 parcels, COD collected ৳82,953, courier charges ৳10,440, payout due ৳5,106 and the parcel list",
          "Steadfast-এর বিস্তারিত: ৯৫টি পার্সেল, আদায় হওয়া COD ৳৮২,৯৫৩, কুরিয়ার চার্জ ৳১০,৪৪০, বাকি পেআউট ৳৫,১০৬ আর পার্সেলের তালিকা",
        ),
      },
    },
    {
      title: loc("Count returns back into stock", "ফেরত পার্সেল গুনে স্টকে তুলুন"),
      body: loc(
        "When the courier brings a parcel back, open it and enter how many pieces are good and how many are damaged. If part is still with the courier, leave it and receive the rest later.",
        "কুরিয়ার পার্সেল ফেরত দিলে খুলে লিখুন কয়টা পিস ভালো আর কয়টা নষ্ট। কিছু অংশ এখনও কুরিয়ারের কাছে থাকলে রেখে দিন, পরে বাকিটা গ্রহণ করুন।",
      ),
      points: [
        loc("Good items go back to the warehouse stock", "ভালো পণ্য ওয়্যারহাউসের স্টকে ফেরে"),
        loc("Damaged items go to returns and damaged", "নষ্ট পণ্য রিটার্ন ও ড্যামেজ স্টকে যায়"),
        loc("See what is still with the courier", "কোন পণ্য এখনও কুরিয়ারের কাছে, দেখুন"),
        loc("Who received it and when is saved", "কে কখন গ্রহণ করল, রেকর্ড থাকে"),
      ],
      shot: {
        src: `${IMG}/s4.webp`,
        width: 1280,
        height: 1056,
        alt: loc(
          "Receiving a Steadfast return: good and damaged count for each item, with what was received so far",
          "Steadfast-এর ফেরত পার্সেল গ্রহণ: প্রতিটি পণ্যের ভালো আর নষ্টের সংখ্যা, আগে কতটা এসেছে তাও দেখা যায়",
        ),
      },
    },
    {
      title: loc("Delivery charge that never loses money", "ডেলিভারি চার্জে লস নয়"),
      body: loc(
        "Set what the customer pays and what the courier costs you for inside Dhaka, sub-Dhaka and outside Dhaka. The app shows your margin for each zone.",
        "ঢাকার ভেতরে, ঢাকার আশেপাশে আর ঢাকার বাইরে কাস্টমার কত দেবে আর কুরিয়ারে আপনার কত খরচ, ঠিক করুন। প্রতিটি জোনে আপনার লাভ কত, অ্যাপ দেখিয়ে দেয়।",
      ),
      points: [
        loc("Extra charge for each piece above one", "এক পিসের বেশি হলে প্রতি পিসে বাড়তি চার্জ"),
        loc("Delivery time shown to the customer at checkout", "চেকআউটে কাস্টমারকে ডেলিভারির সময় দেখায়"),
        loc("Choose your default courier and where orders ship from", "ডিফল্ট কুরিয়ার আর কোথা থেকে শিপ হবে ঠিক করুন"),
        loc("See exactly what the customer will see", "কাস্টমার কী দেখবে, আগেই দেখে নিন"),
      ],
      shot: {
        src: `${IMG}/s5.webp`,
        width: 1712,
        height: 1340,
        alt: loc(
          "Charges by zone: ৳70 inside Dhaka, ৳110 sub-Dhaka, ৳150 outside Dhaka, with courier cost and margin for each",
          "জোন অনুযায়ী চার্জ: ঢাকার ভেতরে ৳৭০, আশেপাশে ৳১১০, ঢাকার বাইরে ৳১৫০, সঙ্গে কুরিয়ার খরচ আর লাভ",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "PackageCheck",
      title: loc("Pick and pack", "পিক আর প্যাক"),
      body: loc(
        "Approved orders show up in the pick and pack list.",
        "অ্যাপ্রুভ হওয়া অর্ডার পিক অ্যান্ড প্যাক তালিকায় আসে।",
      ),
    },
    {
      icon: "Send",
      title: loc("Book the courier", "কুরিয়ার বুক করুন"),
      body: loc(
        "Check the queue, then book many orders in one go and print labels.",
        "লাইনটা দেখে নিন, তারপর একসঙ্গে অনেক অর্ডার বুক করে লেবেল প্রিন্ট করুন।",
      ),
    },
    {
      icon: "Truck",
      title: loc("Follow the parcel", "পার্সেল ট্র্যাক করুন"),
      body: loc(
        "See every parcel's state, tracking number and days on the way.",
        "প্রতিটি পার্সেলের অবস্থা, ট্র্যাকিং নম্বর আর কত দিন পথে, দেখুন।",
      ),
    },
    {
      icon: "Banknote",
      title: loc("Check COD and payouts", "COD আর পেআউট মিলিয়ে নিন"),
      body: loc(
        "See what each courier collected, charged and still owes you.",
        "কোন কুরিয়ার কত তুলেছে, কত চার্জ কেটেছে আর কত পাওনা, দেখুন।",
      ),
    },
    {
      icon: "PackageX",
      title: loc("Receive returns", "ফেরত পার্সেল গ্রহণ"),
      body: loc(
        "Count good and damaged pieces back into stock.",
        "ভালো আর নষ্ট পিস গুনে স্টকে তুলুন।",
      ),
    },
  ],
  faqs: [
    {
      q: loc("Which couriers can I use?", "কোন কোন কুরিয়ার ব্যবহার করা যাবে?"),
      a: loc(
        "Pathao, Steadfast, RedX and Carrybee. Connect them in Connections, then pick a default courier in delivery settings. You can still change the courier on any order.",
        "Pathao, Steadfast, RedX আর Carrybee। Connections থেকে যুক্ত করুন, তারপর ডেলিভারি সেটিংসে ডিফল্ট কুরিয়ার বেছে নিন। যেকোনো অর্ডারে কুরিয়ার বদলানোও যায়।",
      ),
    },
    {
      q: loc("How do I know how much COD a courier still owes me?", "কুরিয়ারের কাছে কত COD পাওনা, কীভাবে জানব?"),
      a: loc(
        "Open the courier statement and pick the dates. For each courier you see COD collected, their charge, the net amount, what they paid you, the payout still due and the money they are holding now.",
        "কুরিয়ার স্টেটমেন্ট খুলে তারিখ বেছে নিন। প্রতিটি কুরিয়ারের আদায় হওয়া COD, তাদের চার্জ, নিট টাকা, আপনাকে কত দিয়েছে, কত পেআউট বাকি আর এখন কত আটকে আছে, সব দেখবেন।",
      ),
    },
    {
      q: loc("What if only part of a returned parcel comes back?", "ফেরত পার্সেলের সব পণ্য না এলে কী হবে?"),
      a: loc(
        "Receive only what arrived and leave the rest at zero. The parcel shows as partly received and stays in the list until everything is back.",
        "যা এসেছে শুধু সেটুকু গ্রহণ করুন, বাকিটা শূন্য রাখুন। পার্সেলটি আংশিক গ্রহণ হিসেবে দেখায়, সব না আসা পর্যন্ত তালিকায় থাকে।",
      ),
    },
    {
      q: loc("What happens if a booking fails?", "বুকিং ব্যর্থ হলে কী হয়?"),
      a: loc(
        "The booking job tells you how many failed. Fix the order, for example the phone number or address, and retry only those orders.",
        "বুকিং শেষে দেখায় কয়টা ব্যর্থ হয়েছে। অর্ডারে ভুলটা ঠিক করুন, যেমন ফোন নম্বর বা ঠিকানা, তারপর শুধু সেগুলো আবার চেষ্টা করুন।",
      ),
    },
  ],
};
