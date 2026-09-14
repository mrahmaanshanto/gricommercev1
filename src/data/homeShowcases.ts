import { loc, type Localized } from "@/i18n/types";
import { SCREENS, type ProductScreen } from "./screenshots";

export type ShowcasePoint = {
  icon: string;
  label: Localized;
  body: Localized;
};

export type ShowcaseAccent = "brand" | "violet" | "green" | "orange" | "turquoise";

export type ShowcaseSection = {
  id: string;
  eyebrow: Localized;
  title: Localized;
  body: Localized;
  points: ShowcasePoint[];
  screen: ProductScreen;
  href?: string;
  linkLabel?: Localized;
  /** Alternates the split and background so the page has rhythm. */
  media?: "left" | "right";
  surface?: "white" | "tint" | "navy";
  accent?: ShowcaseAccent;
};

/**
 * Homepage product showcases.
 *
 * Every claim here maps to functionality in the GridCommerce build
 * specification. Nothing describes behaviour the product does not have.
 * Numbers shown in copy are never invented — figures appear only inside the
 * screenshots themselves, which are real captures of demo data.
 */

export const HOME_SHOWCASES: ShowcaseSection[] = [
  /* --- Section 5 · Omnichannel messaging ------------------------------ */
  {
    id: "omnichannel",
    eyebrow: loc("Omnichannel inbox", "সব মেসেজ এক ইনবক্সে"),
    title: loc(
      "Every customer conversation. One inbox.",
      "কাস্টমারের সব কথা। একটাই ইনবক্স।",
    ),
    body: loc(
      "Messenger, WhatsApp, Instagram, store chat, SMS and email arrive in the same place — with the customer's orders, cart and cash on delivery history sitting right beside the thread.",
      "মেসেঞ্জার, হোয়াটসঅ্যাপ, ইনস্টাগ্রাম, স্টোর চ্যাট, এসএমএস আর ইমেইল — সব এক জায়গায়। পাশেই থাকে কাস্টমারের অর্ডার, কার্ট আর ক্যাশ অন ডেলিভারির হিসাব।",
    ),
    points: [
      {
        icon: "MessagesSquare",
        label: loc("Six channels, one thread", "ছয়টি চ্যানেল, একটাই থ্রেড"),
        body: loc(
          "A comment that moves to DM stays the same conversation.",
          "কমেন্ট থেকে ডিএম-এ গেলেও কথোপকথন একটাই থাকে।",
        ),
      },
      {
        icon: "Users",
        label: loc("Assign, snooze, resolve", "অ্যাসাইন, স্নুজ, রিজলভ"),
        body: loc(
          "Open, pending and resolved states per staff member, with response time reporting.",
          "প্রতিটি স্টাফের জন্য ওপেন, পেন্ডিং আর রিজলভ — সাথে রেসপন্স টাইমের রিপোর্ট।",
        ),
      },
      {
        icon: "ClipboardList",
        label: loc("Conversation to order", "কথা থেকে সরাসরি অর্ডার"),
        body: loc(
          "Turn a message into an order without retyping the customer's details.",
          "মেসেজ থেকেই অর্ডার — কাস্টমারের তথ্য আবার লিখতে হয় না।",
        ),
      },
      {
        icon: "Clock",
        label: loc("Session windows handled", "সেশন উইন্ডো হিসাবের মধ্যে"),
        body: loc(
          "The platform knows when a free reply is allowed and when a template is required.",
          "কখন সরাসরি রিপ্লাই চলবে আর কখন টেমপ্লেট লাগবে, সিস্টেম নিজেই বোঝে।",
        ),
      },
    ],
    screen: SCREENS.omnichannel,
    href: "/features/omnichannel",
    linkLabel: loc("See the inbox", "ইনবক্স দেখুন"),
    media: "right",
    surface: "white",
    accent: "violet",
  },

  /* --- Section 6 · Orders --------------------------------------------- */
  {
    id: "orders",
    eyebrow: loc("Orders", "অর্ডার"),
    title: loc(
      "Every order. Every channel. One workflow.",
      "সব অর্ডার। সব চ্যানেল। একটাই কাজের ধারা।",
    ),
    body: loc(
      "Website, landing page, Facebook, WhatsApp, phone and counter all feed the same order list — then move through confirmation, payment, courier, delivery and return the same way.",
      "ওয়েবসাইট, ল্যান্ডিং পেজ, ফেসবুক, হোয়াটসঅ্যাপ, ফোন আর কাউন্টার — সব অর্ডার একই তালিকায় আসে, আর একই নিয়মে কনফার্ম, পেমেন্ট, কুরিয়ার, ডেলিভারি আর রিটার্নে যায়।",
    ),
    points: [
      {
        icon: "Filter",
        label: loc("Work the queue, not the list", "তালিকা নয়, কাজের সারি"),
        body: loc(
          "Awaiting action, in courier hands and cash to collect are the first things you see.",
          "কী কাজ বাকি, কোনটা কুরিয়ারে, কত টাকা তুলতে বাকি — প্রথমেই চোখে পড়ে।",
        ),
      },
      {
        icon: "Truck",
        label: loc("Courier status on the order", "অর্ডারের সাথেই কুরিয়ার স্ট্যাটাস"),
        body: loc(
          "Booked, picked up, in transit, delivered, returned — without opening a courier panel.",
          "বুকড, পিকআপ, ট্রানজিট, ডেলিভার, রিটার্ন — কুরিয়ার প্যানেল না খুলেই।",
        ),
      },
      {
        icon: "Banknote",
        label: loc("Cash on delivery, tracked", "ক্যাশ অন ডেলিভারির হিসাব"),
        body: loc(
          "Know what has been collected, what is pending and what has been reconciled.",
          "কত এসেছে, কত বাকি, কতটা মিলে গেছে — সব জানা থাকে।",
        ),
      },
      {
        icon: "RotateCcw",
        label: loc("Returns are part of the flow", "রিটার্নও একই ধারার অংশ"),
        body: loc(
          "A failed delivery updates stock, cash and the customer record together.",
          "ডেলিভারি না হলে স্টক, ক্যাশ আর কাস্টমারের হিসাব একসাথে আপডেট হয়।",
        ),
      },
    ],
    screen: SCREENS.orders,
    href: "/features/orders",
    linkLabel: loc("See order management", "অর্ডার ম্যানেজমেন্ট দেখুন"),
    media: "left",
    surface: "tint",
    accent: "brand",
  },

  /* --- Section 8 · POS ------------------------------------------------ */
  {
    id: "pos",
    eyebrow: loc("Point of sale", "পিওএস"),
    title: loc(
      "Your counter and your online store finally share the same stock.",
      "দোকানের কাউন্টার আর অনলাইন স্টোর — এবার একই স্টকে।",
    ),
    body: loc(
      "Scan, sell and take payment at the counter. The same product, the same stock number and the same customer record as everything you sell online.",
      "কাউন্টারে স্ক্যান করুন, বিক্রি করুন, টাকা নিন। অনলাইনে যা বিক্রি করেন, প্রোডাক্ট-স্টক-কাস্টমার সব একই থাকে।",
    ),
    points: [
      {
        icon: "ScanBarcode",
        label: loc("Barcode first", "আগে বারকোড"),
        body: loc(
          "The scanner field refocuses after every sale, so the gun keeps working.",
          "প্রতিটি বিক্রির পর স্ক্যানার ঘরটি নিজেই আবার সক্রিয় হয়।",
        ),
      },
      {
        icon: "Store",
        label: loc("Warehouse, counter, register", "গুদাম, কাউন্টার, রেজিস্টার"),
        body: loc(
          "Stock shown is the stock at that counter, not a company-wide number.",
          "যে স্টক দেখাচ্ছে তা ওই কাউন্টারের স্টক, পুরো কোম্পানির নয়।",
        ),
      },
      {
        icon: "Wallet",
        label: loc("Hold, resume, exchange", "হোল্ড, রিজিউম, এক্সচেঞ্জ"),
        body: loc(
          "Park a sale for a customer who steps away and pick it up at the same counter.",
          "কাস্টমার সরে গেলে বিক্রি হোল্ড করুন, একই কাউন্টারে আবার শুরু করুন।",
        ),
      },
      {
        icon: "Receipt",
        label: loc("Shifts and cash reconciliation", "শিফট আর ক্যাশ মেলানো"),
        body: loc(
          "A register opens, a cashier sells, the drawer closes and the cash agrees.",
          "রেজিস্টার খোলে, ক্যাশিয়ার বিক্রি করে, ড্রয়ার বন্ধ হয় — আর ক্যাশ মিলে যায়।",
        ),
      },
    ],
    screen: SCREENS.pos,
    href: "/features/pos",
    linkLabel: loc("See point of sale", "পিওএস দেখুন"),
    media: "right",
    surface: "white",
    accent: "green",
  },

  /* --- Section 9 · Landing page builder ------------------------------- */
  {
    id: "landing-pages",
    eyebrow: loc("Landing pages", "ল্যান্ডিং পেজ"),
    title: loc(
      "Build the page your ad traffic actually lands on.",
      "আপনার অ্যাডের ট্রাফিক যেখানে নামে, সেই পেজটাই বানান।",
    ),
    body: loc(
      "Drag the parts you need — price and offer, delivery charge, cash on delivery, order form, countdown, reviews — and see the mobile view your buyers will actually get.",
      "যে অংশগুলো দরকার সেগুলো টেনে বসান — দাম ও অফার, ডেলিভারি চার্জ, ক্যাশ অন ডেলিভারি, অর্ডার ফর্ম, কাউন্টডাউন, রিভিউ — আর ক্রেতা যেই মোবাইল ভিউ পাবে সেটাই দেখুন।",
    ),
    points: [
      {
        icon: "LayoutTemplate",
        label: loc("Parts, not code", "কোড নয়, অংশ"),
        body: loc(
          "Product, conversion, social proof, offers, checkout and information parts.",
          "প্রোডাক্ট, কনভার্শন, সোশ্যাল প্রুফ, অফার, চেকআউট আর তথ্যের অংশ।",
        ),
      },
      {
        icon: "Smartphone",
        label: loc("Mobile is the default view", "মোবাইলই মূল ভিউ"),
        body: loc(
          "You edit at the width most of your buyers are actually using.",
          "যে প্রস্থে আপনার বেশিরভাগ ক্রেতা দেখে, সেই প্রস্থেই এডিট করেন।",
        ),
      },
      {
        icon: "Languages",
        label: loc("Bangla that fits", "বাংলা ঠিকভাবে বসে"),
        body: loc(
          "Bangla labels run longer, and the layout is built to carry them.",
          "বাংলা লেখা লম্বা হয়, লেআউট সেটা মাথায় রেখেই বানানো।",
        ),
      },
      {
        icon: "Lock",
        label: loc("Price and stock stay real", "দাম আর স্টক আসল থাকে"),
        body: loc(
          "They come from the product record, so a buyer can never see a wrong price.",
          "এগুলো প্রোডাক্ট থেকেই আসে, তাই ভুল দাম কেউ দেখবে না।",
        ),
      },
    ],
    screen: SCREENS.landingPages,
    href: "/features/landing-pages",
    linkLabel: loc("See the page builder", "পেজ বিল্ডার দেখুন"),
    media: "left",
    surface: "tint",
    accent: "orange",
  },

  /* --- Section 14 · Customer profile ---------------------------------- */
  {
    id: "customers",
    eyebrow: loc("Customers", "কাস্টমার"),
    title: loc(
      "Know the customer behind every order.",
      "প্রতিটি অর্ডারের পেছনের মানুষটিকে চিনুন।",
    ),
    body: loc(
      "Orders, messages, carts, returns and lifetime value in one profile — so the person who replies on Messenger knows who they are talking to.",
      "অর্ডার, মেসেজ, কার্ট, রিটার্ন আর লাইফটাইম ভ্যালু — এক প্রোফাইলে। যিনি মেসেঞ্জারে উত্তর দিচ্ছেন, তিনি জানেন কার সাথে কথা বলছেন।",
    ),
    points: [
      {
        icon: "Tag",
        label: loc("Segments that mean something", "কাজের সেগমেন্ট"),
        body: loc(
          "Repeat, VIP, at risk and cash-on-delivery-only, kept up to date automatically.",
          "রিপিট, ভিআইপি, ঝুঁকিতে আর শুধু ক্যাশ অন ডেলিভারি — নিজে থেকেই হালনাগাদ হয়।",
        ),
      },
      {
        icon: "MapPin",
        label: loc("Location you can act on", "কাজে লাগানোর মতো এলাকা"),
        body: loc(
          "District and area, the way couriers and delivery charges actually work here.",
          "জেলা আর এলাকা — কুরিয়ার আর ডেলিভারি চার্জ যেভাবে কাজ করে সেভাবেই।",
        ),
      },
      {
        icon: "RotateCcw",
        label: loc("Return history in view", "রিটার্নের ইতিহাস সামনে"),
        body: loc(
          "See a customer's return record before you confirm the next order.",
          "পরের অর্ডার কনফার্ম করার আগে তার রিটার্নের রেকর্ড দেখে নিন।",
        ),
      },
      {
        icon: "ShoppingCart",
        label: loc("Abandoned carts attached", "ফেলে যাওয়া কার্টও যুক্ত"),
        body: loc(
          "The cart someone left is part of their profile, not a separate report.",
          "কেউ কার্ট ফেলে গেলে সেটা তার প্রোফাইলেই থাকে, আলাদা রিপোর্টে নয়।",
        ),
      },
    ],
    screen: SCREENS.customers,
    href: "/features/customers",
    linkLabel: loc("See customer profiles", "কাস্টমার প্রোফাইল দেখুন"),
    media: "right",
    surface: "white",
    accent: "turquoise",
  },
];
