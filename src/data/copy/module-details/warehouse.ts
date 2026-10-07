import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

const IMG = "/modules/warehouse";

export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "Know where every piece is, not just how many.",
      "কয়টা আছে শুধু নয়, কোথায় আছে তাও জানুন।",
    ),
    body: loc(
      "Each warehouse and branch keeps its own stock. Put goods on racks and bins, send stock between places by scanning, and count with a manager's approval. When a number changes, you know why.",
      "প্রতিটি গুদাম আর ব্রাঞ্চের স্টক আলাদা থাকে। মাল র‍্যাক আর বিনে রাখুন, স্ক্যান করে এক জায়গা থেকে আরেক জায়গায় পাঠান, আর ম্যানেজারের অনুমোদন নিয়ে স্টক গুনুন। কোনো সংখ্যা বদলালে কেন বদলাল, তা জানা থাকে।",
    ),
  },
  benefits: [
    {
      icon: "MapPin",
      title: loc("Find any product fast", "যেকোনো পণ্য দ্রুত খুঁজুন"),
      body: loc(
        "Every bin has a code like A-2-05. Search a product to find its bin, and see what is not in a bin yet.",
        "প্রতিটি বিনের একটা কোড থাকে, যেমন A-2-05। প্রোডাক্ট সার্চ করে তার বিন খুঁজে নিন, আর কোন মাল এখনো বিনে তোলা হয়নি তাও দেখুন।",
      ),
    },
    {
      icon: "ArrowRightLeft",
      title: loc("Transfers that both sides check", "দুই পক্ষই মিলিয়ে নেয় এমন ট্রান্সফার"),
      body: loc(
        "Scan items out and print a slip. The other branch scans them in, and missing pieces are flagged at once.",
        "পণ্য স্ক্যান করে পাঠান আর স্লিপ প্রিন্ট করুন। অন্য ব্রাঞ্চ স্ক্যান করে বুঝে নেয়, কম এলে সঙ্গে সঙ্গে ধরা পড়ে।",
      ),
    },
    {
      icon: "ShieldCheck",
      title: loc("No stock change without approval", "অনুমোদন ছাড়া স্টক বদলায় না"),
      body: loc(
        "Every adjustment needs a reason. Any decrease, or a change over 20 pieces, waits for a manager's PIN. Count differences are posted only after approval.",
        "প্রতিটি অ্যাডজাস্টমেন্টে কারণ লাগে। স্টক কমালে বা ২০ পিসের বেশি বদলালে ম্যানেজারের PIN লাগে। গণনার পার্থক্যও অনুমোদনের পরেই পোস্ট হয়।",
      ),
    },
  ],
  heroShot: {
    src: `${IMG}/hero.webp`,
    width: 2880,
    height: 1800,
    alt: loc(
      "Racks and bins at the Central Warehouse: a map of each rack's shelves and bins, how full each bin is and 1,907 pieces not in a bin yet",
      "সেন্ট্রাল ওয়্যারহাউসের র‍্যাক ও বিন: প্রতিটি র‍্যাকের শেলফ আর বিনের ম্যাপ, কোন বিন কতটা ভরা, আর এখনো বিনে না তোলা ১,৯০৭ পিস",
    ),
  },
  heroPhone: {
    src: `${IMG}/phone.webp`,
    width: 1170,
    height: 2532,
    alt: loc(
      "Stock in the phone app with a tab for each branch and buttons to transfer, count, adjust and record damage",
      "ফোন অ্যাপে স্টক: প্রতিটি ব্রাঞ্চের ট্যাব আর ট্রান্সফার, গণনা, অ্যাডজাস্ট ও নষ্ট পণ্যের বাটন",
    ),
  },
  sections: [
    {
      title: loc("Every branch, its own stock", "প্রতিটি ব্রাঞ্চের আলাদা স্টক"),
      body: loc(
        "Add your warehouses and branches. Each one shows its stock, its value and how many products are low, and the stock list can show one place or all of them.",
        "আপনার গুদাম আর ব্রাঞ্চগুলো যোগ করুন। প্রতিটির স্টক, স্টকের মূল্য আর কয়টা পণ্য কম আছে দেখা যায়, আর স্টক তালিকায় একটা জায়গা বা সব জায়গা একসঙ্গে দেখতে পারেন।",
      ),
      points: [
        loc("Branches show their POS counters and today's sales", "ব্রাঞ্চে তার POS কাউন্টার আর আজকের বিক্রি দেখায়"),
        loc("A Returns & damaged place keeps bad stock away from sale", "Returns & damaged জায়গায় নষ্ট মাল বিক্রি থেকে আলাদা থাকে"),
        loc("Change a branch's stock from the phone", "ফোন থেকেই ব্রাঞ্চের স্টক বদলান"),
        loc("If a product is out at the counter, it shows the stock at other places", "কাউন্টারে পণ্য শেষ হলে অন্য জায়গায় কত আছে দেখায়"),
      ],
      shot: {
        src: `${IMG}/s1.webp`,
        width: 2204,
        height: 620,
        alt: loc(
          "Branches: Dhanmondi and Mirpur, each with its counters, pieces on hand, stock value and low stock",
          "ব্রাঞ্চ: ধানমন্ডি আর মিরপুর, প্রতিটির কাউন্টার, হাতে থাকা পিস, স্টকের মূল্য আর কম থাকা পণ্য",
        ),
      },
      phone: {
        src: `${IMG}/s1-phone.webp`,
        width: 1170,
        height: 2532,
        alt: loc(
          "Editing a product on the phone: price, sale price and stock at each branch",
          "ফোনে প্রোডাক্ট এডিট: দাম, সেল প্রাইস আর প্রতিটি ব্রাঞ্চে স্টক",
        ),
      },
    },
    {
      title: loc("Racks and bins", "র‍্যাক আর বিন"),
      body: loc(
        "Set up racks, shelves and bins for each place, with how many pieces a bin holds. The map shows how full each bin is, and bins that are 90% full or more are marked.",
        "প্রতিটি জায়গার জন্য র‍্যাক, শেলফ আর বিন সাজান, একটা বিনে কত পিস ধরে তাও দিন। ম্যাপে দেখায় কোন বিন কতটা ভরা, আর ৯০% বা তার বেশি ভরা বিন আলাদা রঙে দেখায়।",
      ),
      points: [
        loc("Find a product's bin by name, SKU or barcode", "নাম, SKU বা বারকোড দিয়ে পণ্যের বিন খুঁজুন"),
        loc("Put stock away, and move it between bins", "মাল বিনে তুলুন, এক বিন থেকে আরেক বিনে সরান"),
        loc("\"Not in a bin yet\" tells staff what to put away", "\"এখনো বিনে নেই\" দেখে স্টাফ বুঝে কী তুলতে হবে"),
        loc("A bin cannot go over its size", "বিনে তার ধারণক্ষমতার বেশি মাল রাখা যায় না"),
      ],
      shot: {
        src: `${IMG}/s2.webp`,
        width: 2204,
        height: 950,
        alt: loc(
          "Rack A with four shelves and six bins on each, the pieces in every bin and how full it is",
          "র‍্যাক A: চারটি শেলফ, প্রতিটিতে ছয়টি বিন, প্রতিটি বিনে কত পিস আর কতটা ভরা",
        ),
      },
    },
    {
      title: loc("Send stock between branches", "ব্রাঞ্চে ব্রাঞ্চে মাল পাঠান"),
      body: loc(
        "Scan the items you send, write who carries them and print a slip. Stock goes down when you send and goes up only when the other side scans it in.",
        "যা পাঠাচ্ছেন স্ক্যান করুন, কে নিয়ে যাচ্ছে লিখুন আর স্লিপ প্রিন্ট করুন। পাঠালে এখানে স্টক কমে, আর অন্য পক্ষ স্ক্যান করে নিলে তবেই সেখানে বাড়ে।",
      ),
      points: [
        loc("See what you have here and what is left after sending", "এখানে কত আছে আর পাঠানোর পর কত থাকবে দেখুন"),
        loc("The slip has a barcode; the other side scans it to receive", "স্লিপে বারকোড থাকে; অন্য পক্ষ সেটা স্ক্যান করে মাল বুঝে নেয়"),
        loc("Missing pieces can be written off, claimed from the carrier or kept open", "কম আসা পিস রাইট-অফ, বহনকারীর কাছে ক্লেইম বা খোলা রাখা যায়"),
        loc("Tabs for on the way, received and with a problem", "পথে, রিসিভড আর সমস্যা আছে এমন ট্রান্সফারের আলাদা ট্যাব"),
      ],
      shot: {
        src: `${IMG}/s3.webp`,
        width: 2080,
        height: 1254,
        alt: loc(
          "A new transfer from the Central Warehouse to Dhanmondi branch: 22 pieces scanned, carried by the van driver",
          "সেন্ট্রাল ওয়্যারহাউস থেকে ধানমন্ডি ব্রাঞ্চে নতুন ট্রান্সফার: ২২ পিস স্ক্যান করা, নিয়ে যাচ্ছেন ভ্যানচালক",
        ),
      },
    },
    {
      title: loc("Count stock the right way", "সঠিকভাবে স্টক গুনুন"),
      body: loc(
        "Pick a place and a kind of count: quick, blind, cycle or full. Scan every item on the shelf, and the summary shows what matches, what is missing and what is extra.",
        "জায়গা আর গণনার ধরন বেছে নিন: কুইক, ব্লাইন্ড, সাইকেল বা পুরো গণনা। তাকের প্রতিটি পণ্য স্ক্যান করুন, সারাংশে দেখায় কী মিলেছে, কী কম আর কী বেশি।",
      ),
      points: [
        loc("Pause selling at that place while you count", "গণনার সময় ওই জায়গায় বিক্রি বন্ধ রাখতে পারেন"),
        loc("A box or carton barcode counts the whole pack", "বক্স বা কার্টনের বারকোড পুরো প্যাক একবারে গোনে"),
        loc("Several people can count one place together", "কয়েকজন মিলে একটা জায়গা গুনতে পারেন"),
        loc("A manager approves the difference with a PIN", "পার্থক্য ম্যানেজার PIN দিয়ে অনুমোদন করেন"),
      ],
      shot: {
        src: `${IMG}/s4.webp`,
        width: 2204,
        height: 1280,
        alt: loc(
          "A stock count at the Central Warehouse with selling paused, a scan box, the count summary and system numbers by rack",
          "সেন্ট্রাল ওয়্যারহাউসে স্টক গণনা: বিক্রি বন্ধ, স্ক্যান বক্স, গণনার সারাংশ আর র‍্যাকভিত্তিক সিস্টেমের সংখ্যা",
        ),
      },
    },
    {
      title: loc("Adjustments and holds", "অ্যাডজাস্টমেন্ট আর হোল্ড"),
      body: loc(
        "To fix stock by hand, pick a reason like damaged, lost, found or expired. You see the stock before and after, and a manager approves it before the number changes.",
        "হাতে স্টক ঠিক করতে কারণ বেছে নিন, যেমন নষ্ট, হারানো, পাওয়া গেছে বা মেয়াদ শেষ। আগে আর পরে কত থাকবে দেখায়, আর ম্যানেজার অনুমোদন দিলে তবেই সংখ্যা বদলায়।",
      ),
      points: [
        loc("Approve now with a manager's PIN, or save it for later", "এখনই ম্যানেজারের PIN দিয়ে অনুমোদন, বা পরে অনুমোদনের জন্য রেখে দিন"),
        loc("Stock held for online orders, counter orders and invoices is kept apart", "অনলাইন অর্ডার, কাউন্টার অর্ডার আর ইনভয়েসের জন্য আটকে রাখা স্টক আলাদা থাকে"),
        loc("A hold ends as delivered, back on sale or damaged", "হোল্ড শেষ হয় ডেলিভারি, আবার বিক্রিতে ফেরা বা নষ্ট হিসেবে"),
        loc("Held stock is never sold twice", "আটকে রাখা স্টক দুবার বিক্রি হয় না"),
      ],
      shot: {
        src: `${IMG}/s5.webp`,
        width: 880,
        height: 1800,
        alt: loc(
          "The Adjust stock panel with reasons, on hand before and after, and a note that a manager must approve",
          "অ্যাডজাস্ট স্টক প্যানেল: কারণ, আগে ও পরে হাতে কত, আর ম্যানেজারের অনুমোদন লাগবে এমন নোট",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "Warehouse",
      title: loc("Add places and racks", "জায়গা আর র‍্যাক যোগ করুন"),
      body: loc(
        "Add your warehouses and branches, then their racks, shelves and bins.",
        "গুদাম আর ব্রাঞ্চ যোগ করুন, তারপর তাদের র‍্যাক, শেলফ আর বিন।",
      ),
    },
    {
      icon: "PackageCheck",
      title: loc("Put stock away", "মাল বিনে তুলুন"),
      body: loc(
        "Place received goods in bins so anyone can find them.",
        "আসা মাল বিনে রাখুন, যাতে যে কেউ খুঁজে পায়।",
      ),
    },
    {
      icon: "ArrowRightLeft",
      title: loc("Transfer by scanning", "স্ক্যান করে ট্রান্সফার"),
      body: loc(
        "Scan items out at one place and scan them in at the other.",
        "এক জায়গা থেকে স্ক্যান করে পাঠান, অন্য জায়গায় স্ক্যান করে বুঝে নিন।",
      ),
    },
    {
      icon: "ClipboardCheck",
      title: loc("Count the shelves", "তাক গুনুন"),
      body: loc(
        "Run a quick, blind, cycle or full count and see the differences.",
        "কুইক, ব্লাইন্ড, সাইকেল বা পুরো গণনা করুন, পার্থক্য দেখুন।",
      ),
    },
    {
      icon: "ShieldCheck",
      title: loc("Approve and post", "অনুমোদন দিয়ে পোস্ট"),
      body: loc(
        "A manager approves with a PIN, and only then the stock changes.",
        "ম্যানেজার PIN দিয়ে অনুমোদন দেন, তবেই স্টক বদলায়।",
      ),
    },
  ],
  faqs: [
    {
      q: loc("Can I sell at one branch and ship from another?", "এক ব্রাঞ্চে বিক্রি করে অন্য জায়গা থেকে মাল পাঠানো যাবে?"),
      a: loc(
        "Yes. When a product is out at the counter, the POS shows how many are at other places. You can sell it there and ship it from the place that has it.",
        "হ্যাঁ। কাউন্টারে পণ্য শেষ হলে POS দেখায় অন্য জায়গায় কয়টা আছে। ওখানেই বিক্রি করে যে জায়গায় মাল আছে সেখান থেকে পাঠাতে পারেন।",
      ),
    },
    {
      q: loc("What happens when a transfer arrives short?", "ট্রান্সফারে মাল কম এলে কী হয়?"),
      a: loc(
        "The receiving side scans what arrived and the missing pieces are flagged. Each short line is then written off, claimed from the carrier, or kept open until the pieces are found.",
        "যে পক্ষ মাল নিচ্ছে, তারা যা এসেছে স্ক্যান করে আর কম পিস চিহ্নিত হয়। তারপর প্রতিটি কম লাইন রাইট-অফ, বহনকারীর কাছে ক্লেইম, বা খুঁজে না পাওয়া পর্যন্ত খোলা রাখা হয়।",
      ),
    },
    {
      q: loc("Can we keep selling while we count?", "গণনার সময় বিক্রি চালানো যাবে?"),
      a: loc(
        "You choose. You can pause selling at that place, or keep selling. The app takes a snapshot when the count starts, and sales and receipts during the count are worked into the difference.",
        "আপনি ঠিক করবেন। ওই জায়গায় বিক্রি বন্ধ রাখতে পারেন, আবার চালুও রাখতে পারেন। গণনা শুরুর সময় অ্যাপ স্টকের একটা ছবি রাখে, আর গণনার মধ্যে হওয়া বিক্রি ও রিসিভ পার্থক্যের হিসাবে ধরা হয়।",
      ),
    },
    {
      q: loc("Who can change stock by hand?", "হাতে স্টক কে বদলাতে পারে?"),
      a: loc(
        "Staff can enter an adjustment with a reason. Any decrease, or any change over 20 pieces, needs a manager: approve it on the spot with the manager's PIN, or save it as waiting for approval.",
        "স্টাফ কারণসহ অ্যাডজাস্টমেন্ট দিতে পারেন। স্টক কমালে বা ২০ পিসের বেশি বদলালে ম্যানেজার লাগে: সঙ্গে সঙ্গে ম্যানেজারের PIN দিয়ে অনুমোদন, অথবা অনুমোদনের অপেক্ষায় রেখে দেওয়া।",
      ),
    },
  ],
};
