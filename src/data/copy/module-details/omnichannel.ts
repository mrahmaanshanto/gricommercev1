import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

const IMG = "/modules/omnichannel";

const CHAT_CHANNELS = [
  { name: "Messenger", src: "/integrations/messenger.png" },
  { name: "Instagram", src: "/integrations/instagram.png" },
  { name: "WhatsApp", src: "/integrations/whatsapp-business.png" },
  { name: "TikTok", src: "/integrations/tiktok-ads.png" },
  { name: "LinkedIn", src: "/integrations/linkedin.png" },
  { name: "X", src: "/integrations/x.png" },
];

const COMMENT_CHANNELS = [
  { name: "Facebook Page", src: "/integrations/facebook-page.png" },
  { name: "Instagram", src: "/integrations/instagram.png" },
  { name: "TikTok", src: "/integrations/tiktok-ads.png" },
  { name: "YouTube", src: "/integrations/youtube.png" },
  { name: "LinkedIn", src: "/integrations/linkedin.png" },
  { name: "Google reviews", src: "/integrations/google-business.png" },
];

export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "Every chat, comment and call in one inbox.",
      "সব চ্যাট, কমেন্ট আর কল এক ইনবক্সে।",
    ),
    body: loc(
      "Messages from Facebook, Instagram, WhatsApp, TikTok and more land in one shared inbox. See the customer's orders while you reply, make the order from the chat, and let AI calls confirm new COD orders in Bangla or English.",
      "ফেসবুক, ইনস্টাগ্রাম, হোয়াটসঅ্যাপ, টিকটকসহ সব মেসেজ আসে এক শেয়ার্ড ইনবক্সে। রিপ্লাই দেওয়ার সময়ই কাস্টমারের অর্ডার দেখুন, চ্যাট থেকেই অর্ডার নিন, আর AI কল দিয়ে নতুন COD অর্ডার বাংলা বা ইংরেজিতে কনফার্ম করুন।",
    ),
  },
  benefits: [
    {
      icon: "MessagesSquare",
      title: loc("No more missed messages", "আর কোনো মেসেজ মিস নয়"),
      body: loc(
        "Assign chats to your team, tag, snooze and leave internal notes. Saved replies and AI suggestions help you answer fast.",
        "চ্যাট টিমের কাউকে দিন, ট্যাগ দিন, স্নুজ করুন, ভেতরের নোট রাখুন। সেভ করা রিপ্লাই আর AI সাজেশনে দ্রুত উত্তর দিন।",
      ),
    },
    {
      icon: "PhoneCall",
      title: loc("AI calls confirm COD orders", "AI কলে COD অর্ডার কনফার্ম"),
      body: loc(
        "New COD orders get a call a few minutes after they are placed. Fake orders and wrong numbers are stopped before you pack.",
        "নতুন COD অর্ডারে কয়েক মিনিটের মধ্যেই কল যায়। প্যাক করার আগেই ফেক অর্ডার আর ভুল নম্বর আটকে যায়।",
      ),
    },
    {
      icon: "LifeBuoy",
      title: loc("Calls, tickets and posts too", "কল, টিকিট আর পোস্টও এখানে"),
      body: loc(
        "Answer calls with a call log and recordings, track problems as support tickets, and schedule posts to your pages from one calendar.",
        "কল লগ আর রেকর্ডিংসহ কল ধরুন, সমস্যা সাপোর্ট টিকিটে রাখুন, আর এক ক্যালেন্ডার থেকে আপনার পেজগুলোতে পোস্ট শিডিউল করুন।",
      ),
    },
  ],
  heroShot: {
    src: `${IMG}/hero.webp`,
    width: 2880,
    height: 1800,
    alt: loc(
      "The inbox with chats from several channels, a WhatsApp conversation and the customer's details and orders beside it",
      "ইনবক্সে বিভিন্ন চ্যানেলের চ্যাট, একটি হোয়াটসঅ্যাপ কথোপকথন, পাশে কাস্টমারের তথ্য আর অর্ডার",
    ),
  },
  heroPhone: {
    src: `${IMG}/phone.webp`,
    width: 1170,
    height: 2532,
    alt: loc(
      "The inbox in the phone app with Facebook, WhatsApp, Instagram and TikTok messages",
      "ফোন অ্যাপে ইনবক্স: ফেসবুক, হোয়াটসঅ্যাপ, ইনস্টাগ্রাম আর টিকটকের মেসেজ",
    ),
  },
  logos: {
    title: loc("Works with", "যেগুলোর সঙ্গে কাজ করে"),
    items: [
      { name: "Facebook Page", src: "/integrations/facebook-page.png" },
      { name: "Messenger", src: "/integrations/messenger.png" },
      { name: "Instagram", src: "/integrations/instagram.png" },
      { name: "WhatsApp", src: "/integrations/whatsapp-business.png" },
      { name: "TikTok", src: "/integrations/tiktok-ads.png" },
      { name: "YouTube", src: "/integrations/youtube.png" },
      { name: "LinkedIn", src: "/integrations/linkedin.png" },
      { name: "X", src: "/integrations/x.png" },
      { name: "Google reviews", src: "/integrations/google-business.png" },
    ],
  },
  sections: [
    {
      title: loc("Reply with the customer's orders in view", "কাস্টমারের অর্ডার দেখে রিপ্লাই দিন"),
      body: loc(
        "Open a chat and the customer's details sit beside it: what they spent, their orders and their status. Make a new order without leaving the chat.",
        "চ্যাট খুললেই পাশে কাস্টমারের তথ্য: কত টাকার কেনাকাটা, কোন কোন অর্ডার, সেগুলোর অবস্থা। চ্যাট থেকে না বেরিয়েই নতুন অর্ডার নিন।",
      ),
      points: [
        loc("Assign the chat, tag it, snooze it or close it", "চ্যাট কাউকে দিন, ট্যাগ দিন, স্নুজ বা ক্লোজ করুন"),
        loc("Internal notes only your team can read", "ভেতরের নোট, শুধু টিম দেখতে পায়"),
        loc("Saved replies with / and AI reply suggestions", "/ দিয়ে সেভ করা রিপ্লাই আর AI রিপ্লাই সাজেশন"),
        loc("Call the customer or start an order from the chat", "চ্যাট থেকেই কাস্টমারকে কল বা নতুন অর্ডার"),
      ],
      shot: {
        src: `${IMG}/s1.webp`,
        width: 1650,
        height: 1492,
        alt: loc(
          "A WhatsApp chat about a Chattogram delivery, with the customer's lifetime value, orders and a New order button beside it",
          "চট্টগ্রামে ডেলিভারি নিয়ে হোয়াটসঅ্যাপ চ্যাট, পাশে কাস্টমারের মোট কেনাকাটা, অর্ডার আর নতুন অর্ডারের বাটন",
        ),
      },
      phone: {
        src: `${IMG}/s1-phone.webp`,
        width: 1170,
        height: 2532,
        alt: loc(
          "A Facebook chat in the phone app with a product card and an Order button",
          "ফোন অ্যাপে ফেসবুক চ্যাট, প্রোডাক্ট কার্ড আর অর্ডার বাটনসহ",
        ),
      },
      logos: CHAT_CHANNELS,
    },
    {
      title: loc("Answer comments before buyers go cold", "ক্রেতা ঠান্ডা হওয়ার আগেই কমেন্টের উত্তর"),
      body: loc(
        "Comments from your posts and reels come in by post. Price questions and order requests are marked, so you answer the ones that sell first.",
        "পোস্ট আর রিলের কমেন্ট আসে পোস্ট ধরে। দাম জানতে চাওয়া আর অর্ডার করতে চাওয়া কমেন্ট আলাদা চিহ্নিত হয়, তাই বিক্রির কমেন্টগুলো আগে উত্তর দিন।",
      ),
      points: [
        loc("Reply in public or privately, or hide a comment", "প্রকাশ্যে বা প্রাইভেটে রিপ্লাই দিন, অথবা কমেন্ট লুকান"),
        loc("Filters for unanswered, prices, order intent and complaints", "উত্তর বাকি, দাম, অর্ডার আর অভিযোগের ফিল্টার"),
        loc("Hide spam in one click", "এক ক্লিকে স্প্যাম লুকান"),
        loc("See if people feel good or bad about a post", "পোস্ট নিয়ে মানুষ খুশি না অখুশি, দেখুন"),
      ],
      shot: {
        src: `${IMG}/s2.webp`,
        width: 1650,
        height: 1410,
        alt: loc(
          "Comments on an Instagram post, marked as price ask, order intent and complaint, with sentiment and unanswered counts",
          "ইনস্টাগ্রাম পোস্টের কমেন্ট, দাম জানতে চাওয়া, অর্ডার আর অভিযোগ হিসেবে চিহ্নিত, সঙ্গে মনোভাব আর উত্তর বাকির সংখ্যা",
        ),
      },
      logos: COMMENT_CHANNELS,
    },
    {
      title: loc("Let AI calls confirm your COD orders", "AI কল দিয়ে COD অর্ডার কনফার্ম"),
      body: loc(
        "Choose which orders get a call: COD only, above a set amount, from your website, landing pages, Facebook or WhatsApp. Trusted repeat customers can be skipped.",
        "কোন অর্ডারে কল যাবে ঠিক করুন: শুধু COD, নির্দিষ্ট টাকার বেশি, ওয়েবসাইট, ল্যান্ডিং পেজ, ফেসবুক বা হোয়াটসঅ্যাপের অর্ডার। বিশ্বস্ত পুরনো কাস্টমারদের বাদ রাখা যায়।",
      ),
      points: [
        loc("Calls start a few minutes after the order", "অর্ডারের কয়েক মিনিট পরেই কল যায়"),
        loc("Set calling hours, days, tries and the gap between tries", "কলের সময়, দিন, কতবার আর কত পর পর, ঠিক করুন"),
        loc("Speaks Bangla or English, matching the customer", "কাস্টমার বুঝে বাংলা বা ইংরেজিতে কথা বলে"),
        loc("Can confirm the address and let the customer change size or quantity", "ঠিকানা মিলিয়ে নেয়, কাস্টমার সাইজ বা পরিমাণ বদলাতে পারে"),
      ],
      shot: {
        src: `${IMG}/s3.webp`,
        width: 1398,
        height: 1284,
        alt: loc(
          "AI auto-call settings: call new COD orders from ৳300 after 2 minutes, 9 am to 9 pm, up to 3 tries 30 minutes apart",
          "AI অটো-কল সেটিংস: ৳৩০০-এর বেশি নতুন COD অর্ডারে ২ মিনিট পর কল, সকাল ৯টা থেকে রাত ৯টা, ৩০ মিনিট পর পর ৩ বার পর্যন্ত",
        ),
      },
    },
    {
      title: loc("Hear every call, step in when needed", "প্রতিটি কল শুনুন, দরকারে নিজে ধরুন"),
      body: loc(
        "Each AI call has a result: confirmed, no answer, call back later, cancelled or wrong number. Listen to the recording and read the transcript. Calls that need a person go to your team.",
        "প্রতিটি AI কলের ফল দেখায়: কনফার্ম, ধরেনি, পরে কল, বাতিল বা ভুল নম্বর। রেকর্ডিং শুনুন, কথোপকথন পড়ুন। যে কলে মানুষের দরকার, সেটা টিমের কাছে যায়।",
      ),
      points: [
        loc("Recording and full transcript for each call", "প্রতিটি কলের রেকর্ডিং আর পুরো কথোপকথন"),
        loc("Call yourself, call again by AI, or mark it confirmed", "নিজে কল দিন, আবার AI কল দিন, বা কনফার্ম করে দিন"),
        loc("See calls today, confirmed and fake orders stopped", "আজকের কল, কনফার্ম আর আটকানো ফেক অর্ডার দেখুন"),
        loc("Calls are paid from your wallet; unanswered tries are free", "কলের খরচ ওয়ালেট থেকে; না ধরলে খরচ নেই"),
      ],
      shot: {
        src: `${IMG}/s4.webp`,
        width: 880,
        height: 1800,
        alt: loc(
          "An AI call result marked Needs a person, with the recording and a Bangla transcript about changing the colour",
          "AI কলের ফল 'মানুষ দরকার', সঙ্গে রেকর্ডিং আর রং বদল নিয়ে বাংলা কথোপকথন",
        ),
      },
    },
    {
      title: loc("Phone calls and support tickets", "ফোন কল আর সাপোর্ট টিকিট"),
      body: loc(
        "Answer incoming calls in the app and see why the customer is calling. Every call is logged with its outcome and who handled it, and missed calls become callbacks.",
        "অ্যাপেই কল ধরুন, কাস্টমার কেন কল দিচ্ছেন দেখুন। প্রতিটি কল কী হলো আর কে ধরল, লগে থাকে; মিস হওয়া কল কলব্যাক তালিকায় যায়।",
      ),
      points: [
        loc("Call log, callbacks, call tasks and recordings", "কল লগ, কলব্যাক, কলের কাজ আর রেকর্ডিং"),
        loc("Dial out from your shop number", "দোকানের নম্বর থেকে কল দিন"),
        loc("See the customer's orders during the call", "কলের সময়ই কাস্টমারের অর্ডার দেখুন"),
        loc("Turn a problem into a ticket with priority and owner", "সমস্যাকে অগ্রাধিকার আর দায়িত্বসহ টিকিট বানান"),
      ],
      shot: {
        src: `${IMG}/s5.webp`,
        width: 2236,
        height: 1592,
        alt: loc(
          "Calls screen with two incoming calls, today's call numbers, the call log and a dialer",
          "কল স্ক্রিন: দুটি আসা কল, আজকের কলের হিসাব, কল লগ আর ডায়ালার",
        ),
      },
      phone: {
        src: `${IMG}/s5-phone.webp`,
        width: 1170,
        height: 2532,
        alt: loc(
          "A live call in the phone app with the customer's orders and a Create ticket button",
          "ফোন অ্যাপে চলমান কল, কাস্টমারের অর্ডার আর টিকিট তৈরির বাটন",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "MessageCircle",
      title: loc("Message or comment arrives", "মেসেজ বা কমেন্ট আসে"),
      body: loc(
        "From any connected page or account, into one inbox.",
        "যুক্ত করা যেকোনো পেজ বা অ্যাকাউন্ট থেকে, এক ইনবক্সে।",
      ),
    },
    {
      icon: "Users",
      title: loc("Assign and reply", "দায়িত্ব দিন, রিপ্লাই দিন"),
      body: loc(
        "Give it to the right person and answer with saved replies.",
        "ঠিক মানুষের হাতে দিন, সেভ করা রিপ্লাই দিয়ে উত্তর দিন।",
      ),
    },
    {
      icon: "ShoppingCart",
      title: loc("Make the order", "অর্ডার নিন"),
      body: loc(
        "Create the order from the chat with the customer's details.",
        "কাস্টমারের তথ্য দিয়ে চ্যাট থেকেই অর্ডার তৈরি করুন।",
      ),
    },
    {
      icon: "PhoneCall",
      title: loc("Confirm by AI call", "AI কলে কনফার্ম"),
      body: loc(
        "The AI calls the customer and marks the order confirmed or stopped.",
        "AI কাস্টমারকে কল দেয়, অর্ডার কনফার্ম বা বাতিল চিহ্নিত করে।",
      ),
    },
    {
      icon: "LifeBuoy",
      title: loc("Follow up", "ফলোআপ"),
      body: loc(
        "Calls that need a person and problems go to your team as callbacks or tickets.",
        "যে কলে মানুষ দরকার বা কোনো সমস্যা, টিমের কাছে কলব্যাক বা টিকিট হিসেবে যায়।",
      ),
    },
  ],
  faqs: [
    {
      q: loc("Which channels come into the inbox?", "কোন কোন চ্যানেলের মেসেজ ইনবক্সে আসে?"),
      a: loc(
        "Chats from Facebook, Instagram, WhatsApp, TikTok, LinkedIn, Telegram and X. Comments also come from YouTube, Pinterest and Threads, and Google reviews have their own tab. You connect each one in Connections.",
        "ফেসবুক, ইনস্টাগ্রাম, হোয়াটসঅ্যাপ, টিকটক, লিংকডইন, টেলিগ্রাম আর X-এর চ্যাট। ইউটিউব, পিন্টারেস্ট আর থ্রেডসের কমেন্টও আসে, আর গুগল রিভিউয়ের আলাদা ট্যাব আছে। প্রতিটি Connections থেকে যুক্ত করুন।",
      ),
    },
    {
      q: loc("Does the AI call speak Bangla?", "AI কল কি বাংলায় কথা বলে?"),
      a: loc(
        "Yes. Set it to Bangla, English or to match the customer. You can edit the script, pick a female or male voice and change the speaking speed.",
        "হ্যাঁ। বাংলা, ইংরেজি, বা কাস্টমারের ভাষা মিলিয়ে, যেটা চান সেট করুন। স্ক্রিপ্ট নিজে লিখতে পারবেন, নারী বা পুরুষ কণ্ঠ বাছতে পারবেন, কথার গতিও বদলাতে পারবেন।",
      ),
    },
    {
      q: loc("How are AI calls paid for?", "AI কলের খরচ কীভাবে দেওয়া হয়?"),
      a: loc(
        "Calls use credit from your GridCommerce wallet. The settings page shows the cost per call, what you spent this month and your balance. Tries the customer does not answer are free.",
        "কলের খরচ যায় আপনার GridCommerce ওয়ালেটের ক্রেডিট থেকে। সেটিংসে প্রতি কলের খরচ, এই মাসে কত খরচ হলো আর ব্যালেন্স দেখা যায়। কাস্টমার না ধরলে সেই চেষ্টার খরচ নেই।",
      ),
    },
    {
      q: loc("What happens when the AI cannot finish a call?", "AI কল শেষ করতে না পারলে কী হয়?"),
      a: loc(
        "The call is marked Needs a person and goes to the team you chose, with an alert in the app and by SMS. Your staff can listen to it, call the customer and confirm the order.",
        "কলটি 'মানুষ দরকার' হিসেবে চিহ্নিত হয়ে আপনার বাছাই করা টিমের কাছে যায়, অ্যাপে আর SMS-এ জানানো হয়। স্টাফ রেকর্ডিং শুনে কাস্টমারকে কল দিয়ে অর্ডার কনফার্ম করতে পারে।",
      ),
    },
    {
      q: loc("Can I post to my pages from here?", "এখান থেকে কি পেজে পোস্ট দেওয়া যায়?"),
      a: loc(
        "Yes. Write one post, pick Facebook, Instagram, WhatsApp, TikTok, YouTube, LinkedIn and other pages, and post now or schedule it. Planned posts show on a calendar.",
        "হ্যাঁ। একটি পোস্ট লিখে ফেসবুক, ইনস্টাগ্রাম, হোয়াটসঅ্যাপ, টিকটক, ইউটিউব, লিংকডইনসহ পেজ বেছে নিন, এখনই পোস্ট করুন বা শিডিউল করুন। পরিকল্পিত পোস্ট ক্যালেন্ডারে দেখা যায়।",
      ),
    },
  ],
};
