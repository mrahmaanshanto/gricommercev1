/**
 * Homepage copy.
 *
 * Moved verbatim out of the original homepage components when the Brand
 * Guidelines design became the site's only design. No string was changed.
 */
import {
  Boxes, ChartColumn, ClipboardList, Globe, MessageCircle, Notebook,
  ScanBarcode, Smartphone, Table, Truck,
} from "lucide-react";
import { loc } from "@/i18n/types";

export const HERO_COPY = {
  eyebrow: loc("Commerce software for Bangladesh", "বাংলাদেশের কমার্স সফটওয়্যার"),
  /* The headline breaks into a plain clause and an accent clause — the
     colour, not a heavier weight, is what carries the emphasis. */
  headline: loc("Run your entire commerce business", "পুরো ব্যবসাটা চালান"),
  headlineAccent: loc("from one place.", "এক জায়গা থেকে।"),
  sub: loc(
    "Online store, orders, Facebook and WhatsApp messages, POS, inventory, courier, cash on delivery, customers and analytics — connected, in one system.",
    "অনলাইন স্টোর, অর্ডার, ফেসবুক আর হোয়াটসঅ্যাপের মেসেজ, পিওএস, স্টক, কুরিয়ার, ক্যাশ অন ডেলিভারি, কাস্টমার আর হিসাব — সব একসাথে, এক সিস্টেমে।",
  ),
  reassure: loc(
    "Free to start · No card needed · Works in Bangla and English",
    "শুরু করা ফ্রি · কার্ড লাগবে না · বাংলা ও ইংরেজি দুটোতেই",
  ),
};

export const HERO_CHANNELS = [
  loc("Website", "ওয়েবসাইট"),
  loc("Landing page", "ল্যান্ডিং পেজ"),
  loc("Facebook", "ফেসবুক"),
  loc("WhatsApp", "হোয়াটসঅ্যাপ"),
  loc("Phone", "ফোন"),
  loc("Counter", "কাউন্টার"),
];

export const HERO_CARDS = {
  message: {
    name: loc("Nusrat Jahan", "নুসরাত জাহান"),
    text: loc("Is the blue one still available?", "নীল রঙেরটা কি আছে?"),
    channel: loc("Messenger", "মেসেঞ্জার"),
  },
  order: { title: loc("Order confirmed", "অর্ডার কনফার্ম"), id: "#GC-10482", amount: "৳ 2,450" },
};

export const FRAGMENTATION_COPY = {
  eyebrow: loc("The problem", "সমস্যাটা"),
  headline: loc(
    "Your business shouldn't live in ten different tabs.",
    "দশটা আলাদা ট্যাবে ব্যবসা চালানোর কথা নয়।",
  ),
  body: loc(
    "Bring orders, stock, customers, payments, messages and marketing together.",
    "অর্ডার, স্টক, কাস্টমার, পেমেন্ট, মেসেজ আর মার্কেটিং — সব একসাথে আনুন।",
  ),
  after: loc("All together. More commerce.", "সব একসাথে। আরও কমার্স।"),
};

export const FRAGMENTATION_TOOLS = [
  { icon: MessageCircle, label: loc("Messenger", "মেসেঞ্জার"), x: -34, y: -30 },
  { icon: Smartphone, label: loc("WhatsApp", "হোয়াটসঅ্যাপ"), x: 31, y: -32 },
  { icon: Table, label: loc("Excel", "এক্সেল"), x: -40, y: 5 },
  { icon: Truck, label: loc("Courier dashboard", "কুরিয়ার ড্যাশবোর্ড"), x: 39, y: 4 },
  { icon: ScanBarcode, label: loc("POS", "পিওএস"), x: -28, y: 33 },
  { icon: Globe, label: loc("Website", "ওয়েবসাইট"), x: 26, y: 35 },
  { icon: ChartColumn, label: loc("Meta Ads", "মেটা অ্যাডস"), x: -13, y: -40 },
  { icon: ClipboardList, label: loc("Analytics", "অ্যানালিটিক্স"), x: 11, y: -41 },
  { icon: Notebook, label: loc("Notebook", "খাতা"), x: -7, y: 41 },
  { icon: Boxes, label: loc("Separate inventory", "আলাদা স্টক হিসাব"), x: 14, y: 42 },
];

export const CAPABILITY_COPY = {
  eyebrow: loc("One platform, six jobs", "একটাই প্ল্যাটফর্ম, ছয়টা কাজ"),
  title: loc("Everything a commerce business does.", "একটা কমার্স ব্যবসা যা যা করে।"),
  body: loc(
    "Not six products with a shared login — six views of the same orders, stock, customers and cash.",
    "একই লগইনে ছয়টা আলাদা প্রোডাক্ট নয় — একই অর্ডার, স্টক, কাস্টমার আর ক্যাশের ছয়টা দৃশ্য।",
  ),
};

export const ORDER_DETAIL_COPY = {
  eyebrow: loc("The order, up close", "অর্ডারটা, কাছ থেকে"),
  title: loc("One screen holds the whole order.", "একটা স্ক্রিনেই পুরো অর্ডার।"),
  body: loc(
    "The conversation, the items, the courier, the money and the history are properties of the order — not five places you go to find out what happened.",
    "কথোপকথন, পণ্য, কুরিয়ার, টাকা আর ইতিহাস — সবই অর্ডারেরই অংশ, কী হয়েছে জানতে পাঁচ জায়গায় যেতে হয় না।",
  ),
  pending: loc(
    "Layout shown with the orders workspace capture. The dedicated order-detail screenshot is still to be supplied — see docs/ASSETS.md.",
    "অর্ডার ওয়ার্কস্পেসের ছবি দিয়ে লেআউট দেখানো হচ্ছে। অর্ডার ডিটেইলের আলাদা ছবি এখনো দেওয়া হয়নি।",
  ),
};

export const ORDER_DETAIL_NOTES = [
  { id: "thread", icon: "MessagesSquare", accent: "violet",
    label: loc("The conversation", "কথোপকথন"),
    detail: loc("Every message that led to this order, in one thread.", "এই অর্ডার পর্যন্ত আসা সব মেসেজ, এক থ্রেডে।"),
    pos: "lg:absolute lg:-left-8 lg:top-[12%] xl:-left-16" },
  { id: "courier", icon: "Truck", accent: "orange",
    label: loc("Courier and tracking", "কুরিয়ার আর ট্র্যাকিং"),
    detail: loc("Booked, picked up, in transit — without a courier panel.", "বুকড, পিকআপ, পথে — কুরিয়ার প্যানেল ছাড়াই।"),
    pos: "lg:absolute lg:-right-8 lg:top-[6%] xl:-right-16" },
  { id: "cash", icon: "Banknote", accent: "green",
    label: loc("Cash position", "টাকার অবস্থা"),
    detail: loc("What is owed, by whom, and whether it has been reconciled.", "কত পাওনা, কার কাছে, আর মিলেছে কি না।"),
    pos: "lg:absolute lg:-left-6 lg:bottom-[14%] xl:-left-14" },
  { id: "history", icon: "History", accent: "brand",
    label: loc("Action history", "কাজের ইতিহাস"),
    detail: loc("Who changed what on this order, and when.", "এই অর্ডারে কে কী বদলেছে, কখন।"),
    pos: "lg:absolute lg:-right-6 lg:bottom-[24%] xl:-right-14" },
] as const;

export const STORIES_COPY = {
  eyebrow: loc("Merchants", "মার্চেন্ট"),
  title: loc("The people this is built for.", "যাদের জন্য এটা তৈরি।"),
  body: loc(
    "Boutiques, electronics counters, home businesses and cosmetics shops — the shape of commerce in urban Bangladesh.",
    "বুটিক, ইলেকট্রনিকসের দোকান, ঘরে বসে চালানো ব্যবসা আর কসমেটিকসের দোকান — শহুরে বাংলাদেশের ব্যবসা এমনই।",
  ),
  sampleNote: loc(
    "Sample stories with generated photography. No real merchant is quoted or depicted, and no figure here is evidenced.",
    "নমুনা গল্প আর তৈরি করা ছবি। কোনো আসল মার্চেন্টের উক্তি বা ছবি নয়, কোনো সংখ্যারই প্রমাণ নেই।",
  ),
};

export const MIGRATION_CTA = loc("See how migration works", "মাইগ্রেশন কীভাবে হয় দেখুন");

export const CTA_COPY = {
  title: loc(
    "Your business is already connected. Your software should be too.",
    "আপনার ব্যবসা তো একসাথেই চলে। সফটওয়্যারটাও একসাথে চলুক।",
  ),
  body: loc(
    "Start with what you sell today, and add the rest when you need it.",
    "যা এখন বিক্রি করছেন তা দিয়েই শুরু করুন, বাকিটা পরে যোগ করুন।",
  ),
};
