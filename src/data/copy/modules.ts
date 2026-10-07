/**
 * The primary modules: module grid, mega menu, footer, /features index and the
 * module pages (D01–D06).
 *
 * The list mirrors the merchant app's current modules (`MODULES` in the app's
 * src/lib/edition.js), excluding wholesale, which no edition sells for now.
 * Where a website module groups several app modules, the comment above each
 * entry names them. Copy describes only what the app's screens offer and makes
 * none of the claims listed in docs/OPEN-ITEMS.md.
 *
 * Several entries began as the owner's "Website Copy & Claude Handoff · Revised"
 * (14 Sept 2026) and were revised in Oct 2026 to match the app; sales-channels,
 * offers-loyalty and automation are new, and warehouse, cash-and-expenses,
 * customers and staff-permissions were promoted from supporting pages. English
 * and Bangla are separately written versions. Marketing groups only: they do not
 * change module architecture or plan entitlements.
 *
 * `MODULES` is in display order and is imported by the homepage; keep the export
 * and the fields below stable.
 */
import { loc, type Localized } from "@/i18n/types";

export type ModuleSlug =
  | "orders" | "courier" | "storefront" | "omnichannel"
  | "inventory" | "warehouse" | "pos" | "cash-and-expenses"
  | "analytics" | "customers" | "staff-permissions"
  | "sales-channels" | "offers-loyalty" | "automation";

/** Modules whose page still renders but which are not listed or linked. */
export type SwitchedOffSlug = "wholesale";

export type ModuleEntry = {
  slug: ModuleSlug;
  /** lucide-react icon name, resolved by components/ui/Icon */
  icon: string;
  /** Card name; also the module page eyebrow and breadcrumb. */
  name: Localized;
  /** Short one-line list of what the module covers (mega menu, compact grids). */
  summary: Localized;
  /** Hook line on cards. */
  hook: Localized;
  /** Card description. */
  description: Localized;
  /** D01 */
  hero: { title: Localized; body: Localized };
  /** D02 — exactly three. */
  benefits: { icon: string; title: Localized; body: Localized }[];
  /** D03 */
  workflow: Localized[];
  workflowNote?: Localized;
  /** D04 */
  faq: { question: Localized; answer: Localized };
  /** D05 — never a switched-off module. */
  related: ModuleSlug[];
  /** D06 closing heading */
  close: Localized;
};

export type SwitchedOffModuleEntry = Omit<ModuleEntry, "slug"> & { slug: SwitchedOffSlug };
export type AnyModuleEntry = ModuleEntry | SwitchedOffModuleEntry;

/** Display order, 01–14. */
export const MODULES: ModuleEntry[] = [
  // 01 · commerce
  {
    slug: "orders",
    icon: "ClipboardList",
    name: loc("Orders & Returns", "অর্ডার ও রিটার্ন"),
    summary: loc("All orders, returns, exchanges and payment settings", "সব অর্ডার, রিটার্ন, এক্সচেঞ্জ ও পেমেন্ট সেটিং"),
    hook: loc(
      "Know which orders need your team’s attention.",
      "কোন অর্ডারে এখন কাজ দরকার, এক নজরে জানুন।",
    ),
    description: loc(
      "Work every order from one list, verify before approving, and handle returns and exchanges with stock and refunds recorded correctly.",
      "সব অর্ডার এক তালিকা থেকে পরিচালনা করুন, অনুমোদনের আগে যাচাই করুন, আর রিটার্ন ও এক্সচেঞ্জে স্টক ও রিফান্ডের হিসাব ঠিক রাখুন।",
    ),
    hero: {
      title: loc(
        "Give every order a clear next step.",
        "প্রতিটি অর্ডারের পরবর্তী পদক্ষেপ সুনির্দিষ্ট করুন।",
      ),
      body: loc(
        "See online and counter orders in one list, filtered by status, courier, payment and delivery zone. Verify an order before you approve it, take an advance when you need one, and handle returns and exchanges from the same place.",
        "অনলাইন ও কাউন্টারের অর্ডার একই তালিকায় দেখুন—স্ট্যাটাস, কুরিয়ার, পেমেন্ট ও ডেলিভারি জোন অনুযায়ী ফিল্টার করুন। অনুমোদনের আগে অর্ডার যাচাই করুন, প্রয়োজনে অগ্রিম নিন, আর একই জায়গা থেকে রিটার্ন ও এক্সচেঞ্জ সামলান।",
      ),
    },
    benefits: [
      {
        icon: "CircleCheck",
        title: loc("Verify before you approve", "অনুমোদনের আগে যাচাই"),
        body: loc(
          "Confirm an order by phone or with an automatic call. See the customer’s delivery record from past parcels, flag likely duplicates, merge them, or block a customer who keeps refusing.",
          "ফোনে বা স্বয়ংক্রিয় কলে অর্ডার কনফার্ম করুন। আগের পার্সেলের ডেলিভারি রেকর্ড দেখে কাস্টমারের ঝুঁকি বুঝুন, সম্ভাব্য ডুপ্লিকেট অর্ডার চিহ্নিত করে মার্জ করুন, বারবার পার্সেল ফেরত দেওয়া কাস্টমারকে ব্লক করুন।",
        ),
      },
      {
        icon: "Wallet",
        title: loc("Take an advance, collect the rest on delivery", "অগ্রিম নিন, বাকিটা ডেলিভারিতে"),
        body: loc(
          "Record an advance when you approve and the remainder becomes the COD amount. Review payment proof before accepting it, and set payment rules by delivery area, customer type or category.",
          "অনুমোদনের সময় অগ্রিম রেকর্ড করুন, বাকি টাকা COD হিসেবে থাকবে। পেমেন্টের প্রমাণ যাচাই করে গ্রহণ করুন, আর ডেলিভারি এলাকা, কাস্টমারের ধরন বা ক্যাটাগরি অনুযায়ী পেমেন্টের নিয়ম ঠিক করুন।",
        ),
      },
      {
        icon: "RotateCcw",
        title: loc("Returns and exchanges in one place", "রিটার্ন ও এক্সচেঞ্জ এক জায়গায়"),
        body: loc(
          "Find the sale by order number, memo or mobile number. Record the reason, refund or exchange, and mark whether the item goes back on sale or into damaged stock.",
          "অর্ডার নম্বর, মেমো বা মোবাইল নম্বর দিয়ে বিক্রিটি খুঁজুন। কারণ লিখুন, রিফান্ড বা এক্সচেঞ্জ করুন, আর পণ্যটি আবার বিক্রয়যোগ্য স্টকে যাবে নাকি ক্ষতিগ্রস্ত স্টকে—তা চিহ্নিত করুন।",
        ),
      },
    ],
    workflow: [
      loc("Order arrives", "অর্ডার আসে"),
      loc("Verify by call", "কলে যাচাই"),
      loc("Approve, with advance if needed", "অনুমোদন, প্রয়োজনে অগ্রিমসহ"),
      loc("Send to courier or hand over", "কুরিয়ারে পাঠানো বা হস্তান্তর"),
      loc("Deliver, return or exchange", "ডেলিভারি, রিটার্ন বা এক্সচেঞ্জ"),
    ],
    workflowNote: loc(
      "Bulk actions approve, send to courier, print labels and send receipts for many orders at once.",
      "বাল্ক অ্যাকশনে একসঙ্গে অনেক অর্ডার অনুমোদন, কুরিয়ারে পাঠানো, লেবেল প্রিন্ট ও রিসিট পাঠানো যায়।",
    ),
    faq: {
      question: loc(
        "How are refunds paid when an item comes back?",
        "পণ্য ফেরত এলে রিফান্ড কীভাবে দেওয়া হয়?",
      ),
      answer: loc(
        "Refund in cash, bKash, Nagad or card, take it off the customer’s due, or give store credit. The refund leaves out the item’s share of any discount, and the money movement is recorded in your accounts.",
        "নগদ, bKash, Nagad বা কার্ডে রিফান্ড দিন, কাস্টমারের বকেয়া থেকে বাদ দিন, অথবা স্টোর ক্রেডিট দিন। ডিসকাউন্টে পণ্যটির অংশ বাদ দিয়ে রিফান্ড হিসাব হয়, আর টাকার লেনদেন হিসাবের খাতায় রেকর্ড থাকে।",
      ),
    },
    related: ["courier", "omnichannel"],
    close: loc(
      "See your daily order workflow in a demo.",
      "আপনার টিমের দৈনিক অর্ডার প্রসেসিং ডেমোতে দেখুন।",
    ),
  },
  // 02 · online (orders and couriers)
  {
    slug: "courier",
    icon: "Truck",
    name: loc("Online Orders & Couriers", "অনলাইন অর্ডার ও কুরিয়ার"),
    summary: loc("Courier booking, COD, returns to origin and order work", "কুরিয়ার বুকিং, COD, রিটার্ন ও অর্ডারের কাজ"),
    hook: loc("Delivered. But has the money reached you?", "পার্সেল ডেলিভারি হয়েছে, টাকা কি হাতে এসেছে?"),
    description: loc(
      "Book couriers in bulk, follow each parcel, see COD collected and still due per courier, and count returned parcels back into stock.",
      "একসঙ্গে কুরিয়ার বুক করুন, প্রতিটি পার্সেল ট্র্যাক করুন, কুরিয়ারভিত্তিক আদায় হওয়া ও বকেয়া COD দেখুন, আর ফেরত পার্সেল গুনে স্টকে ফেরান।",
    ),
    hero: {
      title: loc(
        "Keep every parcel and COD payment in view.",
        "প্রতিটি পার্সেল ও COD পেমেন্টের হিসাব রাখুন একসঙ্গে।",
      ),
      body: loc(
        "A delivered parcel does not mean the payment is in your account. GridCommerce keeps courier booking, parcel status, COD collected, charges and payouts together for each courier, so you can follow up on the money still due to your business.",
        "পার্সেল ডেলিভারি হলেও COD পেমেন্ট সঙ্গে সঙ্গে আপনার অ্যাকাউন্টে আসে না। GridCommerce-এ প্রতিটি কুরিয়ারের বুকিং, পার্সেল স্ট্যাটাস, আদায় হওয়া COD, চার্জ ও পেআউট একসঙ্গে থাকে—তাই বকেয়া টাকার ফলোআপ করা সহজ হয়।",
      ),
    },
    benefits: [
      {
        icon: "Send",
        title: loc("Book couriers in bulk", "একসঙ্গে কুরিয়ার বুকিং"),
        body: loc(
          "The booking queue checks courier, phone number and address before you book, then sends orders together and lets you retry the ones that failed.",
          "বুকিংয়ের আগে কুরিয়ার, ফোন নম্বর ও ঠিকানা যাচাই হয়; তারপর একসঙ্গে অর্ডার পাঠান, আর যেগুলো ব্যর্থ হয়েছে সেগুলো আবার চেষ্টা করুন।",
        ),
      },
      {
        icon: "Banknote",
        title: loc("Know what each courier owes you", "কোন কুরিয়ারের কাছে কত পাওনা"),
        body: loc(
          "The courier statement shows parcels dispatched, in transit, delivered and returned, with COD collected, charges, net amount, paid out, due and held. Export or print it for any date range.",
          "কুরিয়ার স্টেটমেন্টে পাঠানো, পথে থাকা, ডেলিভারি ও ফেরত পার্সেলের সঙ্গে আদায় হওয়া COD, চার্জ, নিট টাকা, পরিশোধিত, বকেয়া ও আটকে থাকা টাকা দেখুন। যেকোনো তারিখের জন্য এক্সপোর্ট বা প্রিন্ট করুন।",
        ),
      },
      {
        icon: "PackageX",
        title: loc("Count returned parcels back in", "ফেরত পার্সেল গুনে স্টকে ফেরান"),
        body: loc(
          "When a parcel comes back, count each item as good or damaged, even if only part has arrived. Good items return to stock; damaged ones are kept apart.",
          "পার্সেল ফেরত এলে প্রতিটি পণ্য ভালো না ক্ষতিগ্রস্ত তা গুনে রেকর্ড করুন—আংশিক এলেও। ভালো পণ্য স্টকে ফিরবে, ক্ষতিগ্রস্ত পণ্য আলাদা থাকবে।",
        ),
      },
    ],
    workflow: [
      loc("Pick and pack", "পিকিং ও প্যাকিং"),
      loc("Book the courier", "কুরিয়ার বুকিং"),
      loc("Follow the parcel", "পার্সেল ট্র্যাকিং"),
      loc("Check COD and payouts", "COD ও পেআউট যাচাই"),
      loc("Receive returns", "ফেরত পার্সেল গ্রহণ"),
    ],
    workflowNote: loc(
      "Order work also brings payment-proof review, the print queue and order edits waiting for review into one place.",
      "অর্ডারের কাজের তালিকায় পেমেন্ট প্রমাণ যাচাই, প্রিন্ট কিউ এবং রিভিউয়ের অপেক্ষায় থাকা অর্ডার এডিটও একসঙ্গে থাকে।",
    ),
    faq: {
      question: loc(
        "Which couriers does the statement cover?",
        "কোন কোন কুরিয়ারের স্টেটমেন্ট দেখা যায়?",
      ),
      answer: loc(
        "The courier screens are built around Steadfast, Pathao, RedX and Carrybee. Pick one courier or all of them and a date range; availability for your account is confirmed during setup.",
        "কুরিয়ার স্ক্রিনগুলো Steadfast, Pathao, RedX ও Carrybee-কে ঘিরে তৈরি। একটি বা সব কুরিয়ার এবং তারিখ বেছে নিন; আপনার অ্যাকাউন্টে কোনটি চালু হবে তা সেটআপের সময় নিশ্চিত করা হয়।",
      ),
    },
    related: ["orders", "analytics"],
    close: loc(
      "See how your courier dues are tracked.",
      "আপনার ব্যবসার COD ও কুরিয়ার হিসাব ডেমোতে দেখুন।",
    ),
  },
  // 03 · online (store, pages and blog)
  {
    slug: "storefront",
    icon: "Store",
    name: loc("Online Store, Landing Pages & Blog", "অনলাইন স্টোর, ল্যান্ডিং পেজ ও ব্লগ"),
    summary: loc("Landing pages, checkout, flash sales, blog and cart recovery", "ল্যান্ডিং পেজ, চেকআউট, ফ্ল্যাশ সেল, ব্লগ ও কার্ট রিকভারি"),
    hook: loc("Give every campaign a clear path to checkout.", "ক্যাম্পেইন থেকে অর্ডারের পথ সহজ করুন।"),
    description: loc(
      "Build product landing pages, take orders with COD or advance payment, run flash sales, publish a blog and follow up on carts left behind.",
      "প্রোডাক্ট ল্যান্ডিং পেজ তৈরি করুন, COD বা অগ্রিম পেমেন্টে অর্ডার নিন, ফ্ল্যাশ সেল চালান, ব্লগ প্রকাশ করুন এবং ফেলে যাওয়া কার্টের ফলোআপ করুন।",
    ),
    hero: {
      title: loc(
        "Build the page. Present the offer. Take the order.",
        "পেজ তৈরি করুন, অফার দেখান, অর্ডার নিন।",
      ),
      body: loc(
        "Start a landing page from a template, arrange its sections and preview it on mobile. Buyers order with their phone number, name and address and choose cash on delivery, an advance or full payment. Run it on a free GridCommerce address or connect your own domain.",
        "টেমপ্লেট থেকে ল্যান্ডিং পেজ শুরু করুন, সেকশন সাজান ও মোবাইলে প্রিভিউ দেখুন। ক্রেতা ফোন নম্বর, নাম ও ঠিকানা দিয়ে অর্ডার করবেন এবং ক্যাশ অন ডেলিভারি, অগ্রিম বা সম্পূর্ণ পেমেন্ট বেছে নেবেন। ফ্রি GridCommerce ঠিকানায় চালান বা নিজের ডোমেইন যুক্ত করুন।",
      ),
    },
    benefits: [
      {
        icon: "LayoutTemplate",
        title: loc("Pages built from sections", "সেকশন দিয়ে পেজ তৈরি"),
        body: loc(
          "Start from a COD single-product, long-form, video-first or blank template. Add a gallery, benefits, before and after, FAQ, countdown, bundle discount, upsell, WhatsApp button and the order form.",
          "COD সিঙ্গেল প্রোডাক্ট, লং-ফর্ম, ভিডিও-ফার্স্ট বা ফাঁকা টেমপ্লেট থেকে শুরু করুন। গ্যালারি, সুবিধা, আগে-পরে, FAQ, কাউন্টডাউন, বান্ডেল ডিসকাউন্ট, আপসেল, WhatsApp বাটন ও অর্ডার ফর্ম যোগ করুন।",
        ),
      },
      {
        icon: "ShoppingCart",
        title: loc("Checkout that suits your buyers", "ক্রেতার উপযোগী চেকআউট"),
        body: loc(
          "A three-step checkout covers details, delivery zone and payment, with a coupon field. Send an order link with the products already chosen, so the customer only adds their details and how they want to pay.",
          "তিন ধাপের চেকআউটে তথ্য, ডেলিভারি জোন ও পেমেন্ট, সঙ্গে কুপন ফিল্ড। আগে থেকে প্রোডাক্ট বেছে অর্ডার লিংক পাঠান—কাস্টমার শুধু নিজের তথ্য আর পেমেন্টের উপায় দেবেন।",
        ),
      },
      {
        icon: "Newspaper",
        title: loc("Flash sales, offers and a blog", "ফ্ল্যাশ সেল, অফার ও ব্লগ"),
        body: loc(
          "Schedule flash sales with a start, an end and a quantity for sale, and list running offers on an offers page. Write blog posts with a block editor, SEO fields, categories and authors.",
          "শুরু, শেষ ও বিক্রির পরিমাণ ঠিক করে ফ্ল্যাশ সেল শিডিউল করুন, চলমান অফার অফার পেজে দেখান। ব্লক এডিটর, SEO ফিল্ড, ক্যাটাগরি ও লেখক দিয়ে ব্লগ পোস্ট লিখুন।",
        ),
      },
    ],
    workflow: [
      loc("Choose a template", "টেমপ্লেট নির্বাচন"),
      loc("Add product and offer", "প্রোডাক্ট ও অফার সেটআপ"),
      loc("Preview on mobile", "মোবাইল প্রিভিউ"),
      loc("Publish", "পেজ প্রকাশ"),
      loc("Follow up on carts left behind", "ফেলে যাওয়া কার্টের ফলোআপ"),
    ],
    faq: {
      question: loc(
        "Can I use my own domain?",
        "নিজের ডোমেইন ব্যবহার করা যাবে?",
      ),
      answer: loc(
        "Yes. Every shop starts with a free GridCommerce address. To use your own domain, add the DNS records shown in settings, check the connection and make it the primary address.",
        "হ্যাঁ। প্রতিটি শপ একটি ফ্রি GridCommerce ঠিকানা দিয়ে শুরু হয়। নিজের ডোমেইন ব্যবহার করতে সেটিংসে দেখানো DNS রেকর্ড যোগ করুন, সংযোগ যাচাই করুন এবং সেটিকে প্রধান ঠিকানা করুন।",
      ),
    },
    related: ["courier", "analytics"],
    close: loc(
      "See a landing page built around your products.",
      "আপনার প্রোডাক্টের জন্য তৈরি ল্যান্ডিং পেজের ডেমো দেখুন।",
    ),
  },
  // 04 · comms
  {
    slug: "omnichannel",
    icon: "MessagesSquare",
    name: loc("Inbox, Calls & AI Calls", "ইনবক্স, কল ও AI কল"),
    summary: loc("Chats, comments, calls, AI calls, tickets and social posts", "চ্যাট, কমেন্ট, কল, AI কল, টিকিট ও সোশ্যাল পোস্ট"),
    hook: loc(
      "Your next sale may already be in the inbox.",
      "আপনার পরের বিক্রি হয়তো ইনবক্সেই অপেক্ষা করছে।",
    ),
    description: loc(
      "Answer chats and comments from your social channels in one inbox, create orders from conversations, and confirm orders with AI calls.",
      "সোশ্যাল চ্যানেলের চ্যাট ও কমেন্ট এক ইনবক্সে সামলান, কথোপকথন থেকে অর্ডার তৈরি করুন, আর AI কলে অর্ডার কনফার্ম করুন।",
    ),
    hero: {
      title: loc(
        "Reply with context. Confirm with a call.",
        "কাস্টমারের তথ্য দেখে রিপ্লাই দিন, কলে কনফার্ম করুন।",
      ),
      body: loc(
        "Bring chats from Facebook, Instagram, WhatsApp, TikTok and other connected channels into a shared inbox, alongside comments and mentions. See the customer’s orders beside the conversation, create an order without leaving it, and let AI calls confirm new orders in Bangla or English.",
        "Facebook, Instagram, WhatsApp, TikTok ও অন্যান্য সংযুক্ত চ্যানেলের চ্যাট, কমেন্ট ও মেনশন একটি শেয়ার্ড ইনবক্সে আনুন। কথোপকথনের পাশেই কাস্টমারের অর্ডার দেখুন, সেখান থেকেই অর্ডার তৈরি করুন, আর AI কল দিয়ে বাংলা বা ইংরেজিতে নতুন অর্ডার কনফার্ম করুন।",
      ),
    },
    benefits: [
      {
        icon: "Users",
        title: loc("A shared inbox your team can work", "পুরো টিমের জন্য একটি ইনবক্স"),
        body: loc(
          "Assign chats, add tags, snooze and leave internal notes with @mentions. Use saved replies, send product cards and payment requests, and moderate comments by replying in public or by DM.",
          "চ্যাট অ্যাসাইন করুন, ট্যাগ দিন, স্নুজ করুন এবং @মেনশনসহ ইন্টারনাল নোট রাখুন। সেভ করা রিপ্লাই, প্রোডাক্ট কার্ড ও পেমেন্ট রিকোয়েস্ট পাঠান; কমেন্টের উত্তর প্রকাশ্যে বা DM-এ দিন।",
        ),
      },
      {
        icon: "PhoneCall",
        title: loc("AI calls that confirm orders", "AI কলে অর্ডার কনফার্মেশন"),
        body: loc(
          "Choose which orders get a call, the calling hours and how many tries. Calls match the customer’s language, Bangla or English. Listen to the recording, read the transcript, and hand any call that needs a person to your team.",
          "কোন অর্ডারে কল যাবে, কলের সময় ও কতবার চেষ্টা হবে ঠিক করুন। কল কাস্টমারের ভাষা—বাংলা বা ইংরেজি—মিলিয়ে হয়। রেকর্ডিং শুনুন, ট্রান্সক্রিপ্ট পড়ুন, আর যে কলে মানুষের দরকার তা টিমের কাছে পাঠান।",
        ),
      },
      {
        icon: "LifeBuoy",
        title: loc("Calls, tickets and social posts", "কল, টিকিট ও সোশ্যাল পোস্ট"),
        body: loc(
          "Keep a call log with callbacks, recordings and after-call notes. Turn problems into support tickets with priority, owner and the linked order. Plan and schedule social posts to several networks from one composer.",
          "কলব্যাক, রেকর্ডিং ও কলের পরের নোটসহ কল লগ রাখুন। সমস্যাকে অগ্রাধিকার, দায়িত্বপ্রাপ্ত ব্যক্তি ও সংশ্লিষ্ট অর্ডারসহ সাপোর্ট টিকিটে রূপ দিন। এক কম্পোজার থেকে একাধিক নেটওয়ার্কে সোশ্যাল পোস্ট পরিকল্পনা ও শিডিউল করুন।",
        ),
      },
    ],
    workflow: [
      loc("Message or comment arrives", "মেসেজ বা কমেন্ট আসে"),
      loc("Review customer history", "কাস্টমার হিস্ট্রি যাচাই"),
      loc("Assign and reply", "দায়িত্ব নির্ধারণ ও রিপ্লাই"),
      loc("Create the order", "অর্ডার তৈরি"),
      loc("Confirm by AI call", "AI কলে কনফার্মেশন"),
    ],
    faq: {
      question: loc(
        "How are AI calls and messages paid for?",
        "AI কল ও মেসেজের খরচ কীভাবে দেওয়া হয়?",
      ),
      answer: loc(
        "AI calls, SMS and WhatsApp messages use prepaid credits from your GridCommerce wallet. You see the estimated cost before a campaign is sent, get a low-balance alert, and paid services pause when the balance runs out.",
        "AI কল, SMS ও WhatsApp মেসেজে আপনার GridCommerce ওয়ালেটের প্রিপেইড ক্রেডিট খরচ হয়। ক্যাম্পেইন পাঠানোর আগে আনুমানিক খরচ দেখা যায়, ব্যালেন্স কমলে অ্যালার্ট আসে, আর ব্যালেন্স শেষ হলে পেইড সার্ভিস বন্ধ থাকে।",
      ),
    },
    related: ["orders", "customers"],
    close: loc(
      "See how your team can handle chats, calls and confirmations.",
      "আপনার টিমের চ্যাট, কল ও অর্ডার কনফার্মেশন প্রক্রিয়া ডেমোতে দেখুন।",
    ),
  },
  // 05 · catalog + purchasing
  {
    slug: "inventory",
    icon: "Boxes",
    name: loc("Products, Stock & Purchases", "প্রোডাক্ট, স্টক ও পারচেজ"),
    summary: loc("Products, stock, suppliers, purchase orders and warranty", "প্রোডাক্ট, স্টক, সাপ্লায়ার, পারচেজ অর্ডার ও ওয়ারেন্টি"),
    hook: loc(
      "Know what is in stock, what it cost and who you owe.",
      "কী স্টকে আছে, কত খরচ পড়েছে, কার কাছে কত বাকি—সব জানুন।",
    ),
    description: loc(
      "Keep products and variants tidy, trace every stock movement, buy directly or through purchase orders, and keep supplier dues, damaged stock and warranty in view.",
      "প্রোডাক্ট ও ভ্যারিয়েন্ট গুছিয়ে রাখুন, প্রতিটি স্টক মুভমেন্ট ট্র্যাক করুন, সরাসরি বা পারচেজ অর্ডারে কিনুন, আর সাপ্লায়ারের বকেয়া, ক্ষতিগ্রস্ত স্টক ও ওয়ারেন্টির হিসাব রাখুন।",
    ),
    hero: {
      title: loc(
        "Trace your stock from purchase to sale.",
        "পারচেজ থেকে বিক্রি—স্টকের প্রতিটি মুভমেন্ট ট্র্যাক করুন।",
      ),
      body: loc(
        "Record what you buy, what you receive and what you sell. GridCommerce keeps a stock history with the cost of each purchase and the balance owed to each supplier, so your team can check the reason behind any quantity.",
        "কী কিনলেন, কী গ্রহণ করলেন আর কী বিক্রি করলেন—সব রেকর্ড করুন। GridCommerce প্রতিটি পারচেজের খরচ ও প্রতিটি সাপ্লায়ারের বকেয়াসহ স্টকের ইতিহাস রাখে, তাই যেকোনো পরিমাণের পেছনের কারণ যাচাই করা যায়।",
      ),
    },
    benefits: [
      {
        icon: "Package",
        title: loc("Products that stay organised", "গোছানো প্রোডাক্ট ক্যাটালগ"),
        body: loc(
          "Give each variant its own SKU, price and image. Track a product by quantity, serial, IMEI, batch or weight. Edit many products at once in a spreadsheet view, preview the change and roll it back if needed.",
          "প্রতিটি ভ্যারিয়েন্টের আলাদা SKU, দাম ও ছবি দিন। প্রোডাক্ট পরিমাণ, সিরিয়াল, IMEI, ব্যাচ বা ওজন অনুযায়ী ট্র্যাক করুন। স্প্রেডশিট ভিউতে একসঙ্গে অনেক প্রোডাক্ট এডিট করুন, পরিবর্তনের প্রিভিউ দেখুন এবং দরকারে আগের অবস্থায় ফেরান।",
        ),
      },
      {
        icon: "Receipt",
        title: loc("Purchases with the real cost", "আসল খরচসহ পারচেজ"),
        body: loc(
          "Buy directly or raise a purchase order, receive it in parts, and report damaged or wrong items on arrival. Share transport and customs charges across the order to see the cost per unit.",
          "সরাসরি কিনুন বা পারচেজ অর্ডার দিন, আংশিক পণ্য গ্রহণ করুন, আর পৌঁছানোর সময় ক্ষতিগ্রস্ত বা ভুল পণ্য রিপোর্ট করুন। পরিবহন ও কাস্টমস খরচ অর্ডারে ভাগ করে প্রতি ইউনিটের আসল খরচ দেখুন।",
        ),
      },
      {
        icon: "Building2",
        title: loc("Supplier dues, damage and warranty", "সাপ্লায়ার বকেয়া, ক্ষতি ও ওয়ারেন্টি"),
        body: loc(
          "See what you owe each supplier and when it is due, and pay one bill, several or part of one. Write off or return damaged and expired stock, and track warranty claims by invoice, phone or IMEI.",
          "কোন সাপ্লায়ারের কাছে কত বাকি ও কবে দিতে হবে দেখুন; একটি, একাধিক বা আংশিক বিল পরিশোধ করুন। ক্ষতিগ্রস্ত ও মেয়াদোত্তীর্ণ স্টক রাইট-অফ বা ফেরত দিন, আর ইনভয়েস, ফোন বা IMEI দিয়ে ওয়ারেন্টি ক্লেইম ট্র্যাক করুন।",
        ),
      },
    ],
    workflow: [
      loc("Request or order stock", "স্টকের অনুরোধ বা অর্ডার"),
      loc("Receive goods", "পণ্য গ্রহণ"),
      loc("Update stock and cost", "স্টক ও খরচ আপডেট"),
      loc("Sell", "বিক্রি"),
      loc("Pay the supplier", "সাপ্লায়ার পেমেন্ট"),
    ],
    workflowNote: loc(
      "Staff can request stock; approved requests become one purchase order per supplier.",
      "স্টাফ স্টকের অনুরোধ করতে পারেন; অনুমোদিত অনুরোধ সাপ্লায়ারভিত্তিক পারচেজ অর্ডারে রূপ নেয়।",
    ),
    faq: {
      question: loc(
        "Can I track serial or IMEI numbers?",
        "সিরিয়াল বা IMEI নম্বর ট্র্যাক করা যাবে?",
      ),
      answer: loc(
        "Yes. Choose how each product is tracked: by quantity, serial, IMEI, batch or weight. Stock activity can show one serial number’s full history.",
        "হ্যাঁ। প্রতিটি প্রোডাক্ট কীভাবে ট্র্যাক হবে বেছে নিন—পরিমাণ, সিরিয়াল, IMEI, ব্যাচ বা ওজন। স্টক অ্যাক্টিভিটিতে একটি সিরিয়াল নম্বরের পুরো ইতিহাস দেখা যায়।",
      ),
    },
    related: ["warehouse", "pos"],
    close: loc(
      "See your products, stock and purchases together.",
      "আপনার প্রোডাক্ট, স্টক ও পারচেজ ব্যবস্থাপনার ডেমো দেখুন।",
    ),
  },
  // 06 · places
  {
    slug: "warehouse",
    icon: "Warehouse",
    name: loc("Warehouses & Branches", "Warehouse ও ব্রাঞ্চ"),
    summary: loc("Stock places, racks and bins, transfers and counts", "স্টকের জায়গা, র‍্যাক ও বিন, ট্রান্সফার ও গণনা"),
    hook: loc(
      "Know where every piece is, not just how many.",
      "কতটি আছে শুধু নয়, কোথায় আছে তাও জানুন।",
    ),
    description: loc(
      "Run stock across warehouses and branches, with racks and bins, transfers that both sides confirm, approved adjustments and counts.",
      "একাধিক Warehouse ও ব্রাঞ্চে স্টক পরিচালনা করুন—র‍্যাক ও বিন, দুই পক্ষের নিশ্চিত করা ট্রান্সফার, অনুমোদিত অ্যাডজাস্টমেন্ট ও স্টক গণনাসহ।",
    ),
    hero: {
      title: loc(
        "Many stock places that agree with the books.",
        "একাধিক স্টক লোকেশন, হিসাবের সঙ্গে মিলে যায়।",
      ),
      body: loc(
        "Each warehouse and branch holds its own stock. Transfers are scanned out and scanned in, adjustments need a reason, and counts are approved before they change a number, so a quantity can always be explained.",
        "প্রতিটি Warehouse ও ব্রাঞ্চের নিজস্ব স্টক থাকে। ট্রান্সফার স্ক্যান করে পাঠানো ও স্ক্যান করে গ্রহণ করা হয়, অ্যাডজাস্টমেন্টে কারণ লাগে, আর স্টক গণনা অনুমোদনের পরেই সংখ্যা বদলায়—তাই প্রতিটি পরিমাণের ব্যাখ্যা থাকে।",
      ),
    },
    benefits: [
      {
        icon: "MapPin",
        title: loc("Racks and bins", "র‍্যাক ও বিন"),
        body: loc(
          "Give racks, shelves and bins their own codes, put stock away, move it between bins and find a product’s bin quickly. A list shows what has not been put in a bin yet.",
          "র‍্যাক, শেলফ ও বিনের নিজস্ব কোড দিন, স্টক জায়গামতো রাখুন, বিনের মধ্যে সরান এবং দ্রুত প্রোডাক্টের বিন খুঁজে নিন। এখনো বিনে না রাখা পণ্যের আলাদা তালিকা থাকে।",
        ),
      },
      {
        icon: "ArrowRightLeft",
        title: loc("Transfers with a trail", "রেকর্ডসহ ট্রান্সফার"),
        body: loc(
          "Scan items out, record who carries them and print a slip; the receiving side scans them in. Missing pieces can be written off, claimed or kept open until found.",
          "পণ্য স্ক্যান করে পাঠান, কে বহন করছে রেকর্ড করুন ও স্লিপ প্রিন্ট করুন; গ্রহণকারী পক্ষ স্ক্যান করে বুঝে নেবে। ঘাটতি পণ্য রাইট-অফ, ক্লেইম বা খুঁজে পাওয়া পর্যন্ত খোলা রাখা যায়।",
        ),
      },
      {
        icon: "ClipboardCheck",
        title: loc("Adjustments and counts with approval", "অনুমোদনসহ অ্যাডজাস্টমেন্ট ও গণনা"),
        body: loc(
          "Every adjustment needs a reason, and larger changes wait for a manager. Run quick, blind, cycle or full counts with several counters, recount big differences and post after approval.",
          "প্রতিটি অ্যাডজাস্টমেন্টে কারণ লাগে, বড় পরিবর্তনে ম্যানেজারের অনুমোদন। একাধিক জনকে নিয়ে কুইক, ব্লাইন্ড, সাইকেল বা পূর্ণ গণনা করুন, বড় পার্থক্য আবার গুনুন, অনুমোদনের পর পোস্ট করুন।",
        ),
      },
    ],
    workflow: [
      loc("Set up places and bins", "লোকেশন ও বিন সেটআপ"),
      loc("Put stock away", "স্টক জায়গামতো রাখা"),
      loc("Transfer between places", "লোকেশনের মধ্যে ট্রান্সফার"),
      loc("Count and adjust", "গণনা ও অ্যাডজাস্টমেন্ট"),
      loc("Approve and post", "অনুমোদন ও পোস্ট"),
    ],
    faq: {
      question: loc(
        "What happens to stock held for orders?",
        "অর্ডারের জন্য আটকে রাখা স্টকের কী হয়?",
      ),
      answer: loc(
        "Stock held for online orders, counter orders and invoices shows separately from what is available. Each hold ends as delivered, released or damaged, so held stock is never sold twice.",
        "অনলাইন অর্ডার, কাউন্টার অর্ডার ও ইনভয়েসের জন্য আটকে রাখা স্টক বিক্রয়যোগ্য স্টক থেকে আলাদা দেখায়। প্রতিটি হোল্ড ডেলিভারি, রিলিজ বা ক্ষতিগ্রস্ত হিসেবে শেষ হয়, তাই একই স্টক দুবার বিক্রি হয় না।",
      ),
    },
    related: ["inventory", "pos"],
    close: loc(
      "See stock across your warehouses and branches.",
      "আপনার Warehouse ও ব্রাঞ্চের স্টক ব্যবস্থাপনার ডেমো দেখুন।",
    ),
  },
  // 07 · pos
  {
    slug: "pos",
    icon: "ScanBarcode",
    name: loc("POS & Counter", "POS ও কাউন্টার"),
    summary: loc("Counter register, shifts, cash pickups and the sales book", "কাউন্টার রেজিস্টার, শিফট, ক্যাশ পিকআপ ও সেলস বুক"),
    hook: loc(
      "Close the day knowing where the cash went.",
      "দিনশেষে জানুন, ক্যাশ কোথায় গেল।",
    ),
    description: loc(
      "Sell at the counter with barcode scanning and split payments, keep selling when the connection drops, and compare expected and counted cash at shift close.",
      "বারকোড স্ক্যান ও স্প্লিট পেমেন্টে কাউন্টারে বিক্রি করুন, ইন্টারনেট না থাকলেও বিক্রি চালান, আর শিফট শেষে প্রত্যাশিত ও গোনা ক্যাশ মিলিয়ে নিন।",
    ),
    hero: {
      title: loc(
        "From the first counter sale to the closing cash count.",
        "প্রথম কাউন্টার সেল থেকে শিফট শেষের ক্যাশ গণনা পর্যন্ত।",
      ),
      body: loc(
        "Scan products, take payment in several methods and sell from the stock of the right branch. Record cash pickups and payouts during the shift, then compare what the system expects with what your cashier counts.",
        "প্রোডাক্ট স্ক্যান করুন, একাধিক মাধ্যমে পেমেন্ট নিন এবং সংশ্লিষ্ট ব্রাঞ্চের স্টক থেকে বিক্রি করুন। শিফটের মধ্যে ক্যাশ পিকআপ ও পেআউট রেকর্ড করুন, তারপর সিস্টেমের হিসাবের সঙ্গে ক্যাশিয়ারের গোনা টাকা মিলিয়ে নিন।",
      ),
    },
    benefits: [
      {
        icon: "ScanBarcode",
        title: loc("Keep the counter moving", "কাউন্টারে দ্রুত বিলিং"),
        body: loc(
          "Scan barcodes, capture serial or IMEI numbers and read weighed items from scale labels. Hold a sale and resume it, apply coupons and loyalty points, and work from keyboard shortcuts.",
          "বারকোড স্ক্যান করুন, সিরিয়াল বা IMEI নম্বর নিন, ওজনের পণ্য স্কেল লেবেল থেকে পড়ুন। বিল হোল্ড করে পরে আবার চালু করুন, কুপন ও লয়্যালটি পয়েন্ট দিন, কিবোর্ড শর্টকাটে কাজ করুন।",
        ),
      },
      {
        icon: "Wallet",
        title: loc("Split payments, recorded to the right account", "স্প্লিট পেমেন্ট, সঠিক অ্যাকাউন্টে"),
        body: loc(
          "Take cash, card, bKash, Nagad, Rocket, due or the customer’s wallet in one sale. Each card or wallet payment names the account or terminal that received it.",
          "এক বিক্রিতেই নগদ, কার্ড, bKash, Nagad, Rocket, বাকি বা কাস্টমারের ওয়ালেট থেকে পেমেন্ট নিন। প্রতিটি কার্ড বা ওয়ালেট পেমেন্ট কোন অ্যাকাউন্ট বা টার্মিনালে গেল তা রেকর্ড থাকে।",
        ),
      },
      {
        icon: "Eye",
        title: loc("Shift differences made visible", "শিফটের পার্থক্য স্পষ্ট"),
        body: loc(
          "Open with a float, close with a count per account and see any shortfall or excess. A difference over your limit needs a manager PIN, and manager overrides are kept in the POS audit report.",
          "ওপেনিং ফ্লোট দিয়ে শিফট শুরু করুন, অ্যাকাউন্টভিত্তিক গণনা দিয়ে শেষ করুন এবং ঘাটতি বা বাড়তি দেখুন। নির্ধারিত সীমার বেশি পার্থক্যে ম্যানেজার PIN লাগে, আর ম্যানেজারের অনুমোদনগুলো POS অডিট রিপোর্টে থাকে।",
        ),
      },
    ],
    workflow: [
      loc("Open shift", "শিফট ওপেনিং"),
      loc("Scan and sell", "স্ক্যানিং ও বিক্রি"),
      loc("Record pickups and payouts", "ক্যাশ পিকআপ ও পেআউট রেকর্ড"),
      loc("Count cash", "ক্যাশ গণনা"),
      loc("Review and close", "যাচাই ও শিফট ক্লোজিং"),
    ],
    workflowNote: loc(
      "The sales book lists every counter memo to reprint, return or exchange.",
      "সেলস বুকে কাউন্টারের প্রতিটি মেমো থাকে—আবার প্রিন্ট, রিটার্ন বা এক্সচেঞ্জের জন্য।",
    ),
    faq: {
      question: loc("What happens if the internet drops?", "ইন্টারনেট চলে গেলে কী হবে?"),
      answer: loc(
        "The register keeps selling. Sales are queued and posted when the connection returns; anything that needs a decision, such as a price that changed, waits in a sync list, and the same sale is never recorded twice.",
        "রেজিস্টারে বিক্রি চলতে থাকে। বিক্রিগুলো জমা থাকে এবং সংযোগ ফিরলে পোস্ট হয়; দামের পরিবর্তনের মতো যেসব বিষয়ে সিদ্ধান্ত লাগে সেগুলো সিঙ্ক তালিকায় অপেক্ষা করে, আর একই বিক্রি দুবার রেকর্ড হয় না।",
      ),
    },
    related: ["inventory", "cash-and-expenses"],
    close: loc(
      "See a counter sale and a complete shift close.",
      "আপনার আউটলেটের POS ও শিফট ক্লোজিং ডেমোতে দেখুন।",
    ),
  },
  // 08 · money
  {
    slug: "cash-and-expenses",
    icon: "Wallet",
    name: loc("Money", "টাকার হিসাব"),
    summary: loc("Cash, bank, wallets, dues, payouts, expenses, bills and VAT", "ক্যাশ, ব্যাংক, ওয়ালেট, বকেয়া, পেআউট, খরচ, বিল ও VAT"),
    hook: loc(
      "What came in, what went out, what is still owed.",
      "কী এলো, কী গেল, কী এখনো বাকি।",
    ),
    description: loc(
      "Keep cash, bank and mobile wallet balances, customer and supplier dues, courier and gateway payouts, expenses, bills and VAT in one place.",
      "ক্যাশ, ব্যাংক ও মোবাইল ওয়ালেটের ব্যালেন্স, কাস্টমার ও সাপ্লায়ারের বকেয়া, কুরিয়ার ও গেটওয়ের পেআউট, খরচ, বিল ও VAT এক জায়গায় রাখুন।",
    ),
    hero: {
      title: loc(
        "Every taka, in the account it actually sits in.",
        "প্রতিটি টাকা, যে অ্যাকাউন্টে আছে সেখানেই হিসাব।",
      ),
      body: loc(
        "Sales, refunds, payouts and expenses post to the cash drawer, bank or wallet that moved the money. See what partners still hold, what customers owe you and what you owe, and match bank statements against your records.",
        "বিক্রি, রিফান্ড, পেআউট ও খরচ সেই ক্যাশ ড্রয়ার, ব্যাংক বা ওয়ালেটে পোস্ট হয় যেখান দিয়ে টাকা গেছে বা এসেছে। পার্টনারের কাছে কত আটকে আছে, কাস্টমারের কাছে কত পাওনা আর আপনার কত দেনা—দেখুন, এবং ব্যাংক স্টেটমেন্ট আপনার রেকর্ডের সঙ্গে মিলিয়ে নিন।",
      ),
    },
    benefits: [
      {
        icon: "Banknote",
        title: loc("Payouts you can follow", "পেআউটের হিসাব"),
        body: loc(
          "See expected payouts from couriers and payment gateways by day. Mark one received, record a new promised date or explain a different amount.",
          "কুরিয়ার ও পেমেন্ট গেটওয়ে থেকে কোন দিন কত পেআউট আসার কথা দেখুন। প্রাপ্ত হিসেবে চিহ্নিত করুন, নতুন প্রতিশ্রুত তারিখ রেকর্ড করুন বা ভিন্ন পরিমাণের কারণ লিখুন।",
        ),
      },
      {
        icon: "Scale",
        title: loc("Dues in both directions", "দুই দিকের বকেয়া"),
        body: loc(
          "See what you will get and what you owe, by age. Record one payment across several invoices, pay bills in part and turn the month’s salaries into bills to pay.",
          "কত পাবেন আর কত দেবেন—সময়কাল অনুযায়ী দেখুন। একটি পেমেন্ট একাধিক ইনভয়েসে সমন্বয় করুন, বিল আংশিক পরিশোধ করুন এবং মাসের বেতনকে পরিশোধযোগ্য বিলে যোগ করুন।",
        ),
      },
      {
        icon: "ShieldCheck",
        title: loc("Approvals and statement matching", "অনুমোদন ও স্টেটমেন্ট মেলানো"),
        body: loc(
          "Expenses, money moves, refunds and write-offs over your limit wait for a second person, and nobody approves their own entry. Import a bank or wallet statement and match its lines by amount and date.",
          "আপনার নির্ধারিত সীমার বেশি খরচ, টাকা স্থানান্তর, রিফান্ড ও রাইট-অফ দ্বিতীয় একজনের অনুমোদনের অপেক্ষায় থাকে; কেউ নিজের এন্ট্রি নিজে অনুমোদন করতে পারেন না। ব্যাংক বা ওয়ালেট স্টেটমেন্ট ইমপোর্ট করে পরিমাণ ও তারিখ দিয়ে মিলিয়ে নিন।",
        ),
      },
    ],
    workflow: [
      loc("Record income and expenses", "আয় ও খরচ রেকর্ড"),
      loc("Follow payouts", "পেআউট ট্র্যাকিং"),
      loc("Collect and pay dues", "বকেয়া আদায় ও পরিশোধ"),
      loc("Match statements", "স্টেটমেন্ট মেলানো"),
      loc("Review VAT and profit", "VAT ও মুনাফা পর্যালোচনা"),
    ],
    faq: {
      question: loc(
        "Does it replace my accountant?",
        "এটি কি হিসাবরক্ষকের বিকল্প?",
      ),
      answer: loc(
        "No. It keeps day-to-day money records, journals, a chart of accounts and VAT collected and paid, so your accountant starts from organised figures. Final accounts and tax filings remain their work.",
        "না। এটি দৈনন্দিন টাকার রেকর্ড, জার্নাল, চার্ট অব অ্যাকাউন্টস এবং আদায় ও পরিশোধিত VAT-এর হিসাব রাখে, যাতে আপনার হিসাবরক্ষক গোছানো তথ্য থেকে কাজ শুরু করতে পারেন। চূড়ান্ত হিসাব ও কর দাখিল তাঁদেরই কাজ।",
      ),
    },
    related: ["pos", "analytics"],
    close: loc(
      "See where your money sits, account by account.",
      "অ্যাকাউন্টভিত্তিক আপনার টাকার হিসাব ডেমোতে দেখুন।",
    ),
  },
  // 09 · reports + online ads tracking
  {
    slug: "analytics",
    icon: "ChartNoAxesCombined",
    name: loc("Reports & Ad Tracking", "রিপোর্ট ও অ্যাড ট্র্যাকিং"),
    summary: loc("Every report, daily summary, scheduled reports and pixels", "সব রিপোর্ট, দৈনিক সারাংশ, শিডিউলড রিপোর্ট ও পিক্সেল"),
    hook: loc(
      "Orders are coming in. Which sales leave a margin?",
      "অর্ডার আসছে, কিন্তু কোন বিক্রিতে মুনাফা থাকছে?",
    ),
    description: loc(
      "Find every report in one place, get a daily summary and scheduled reports, and measure ads against delivered orders rather than clicks.",
      "সব রিপোর্ট এক জায়গায় খুঁজুন, দৈনিক সারাংশ ও শিডিউলড রিপোর্ট পান, আর বিজ্ঞাপনের ফল ক্লিক নয়—ডেলিভারি হওয়া অর্ডার দিয়ে মাপুন।",
    ),
    hero: {
      title: loc(
        "See what your sales leave after the costs.",
        "খরচ বাদে বিক্রিতে কী থাকছে, দেখুন।",
      ),
      body: loc(
        "Reports cover sales, online and delivery, customers and loyalty, stock, purchases, finance, POS, staff and marketing. Connect your pixels and ad accounts to compare ad spend with confirmed and delivered orders, kept separate from what the ad platforms report.",
        "রিপোর্টে আছে বিক্রি, অনলাইন ও ডেলিভারি, কাস্টমার ও লয়্যালটি, স্টক, পারচেজ, ফাইন্যান্স, POS, স্টাফ ও মার্কেটিং। পিক্সেল ও অ্যাড অ্যাকাউন্ট যুক্ত করে বিজ্ঞাপনের খরচ কনফার্ম ও ডেলিভারি হওয়া অর্ডারের সঙ্গে তুলনা করুন—অ্যাড প্ল্যাটফর্মের নিজস্ব হিসাব থেকে আলাদা রেখে।",
      ),
    },
    benefits: [
      {
        icon: "FileChartColumn",
        title: loc("Every report, one place", "সব রিপোর্ট এক জায়গায়"),
        body: loc(
          "Search the report centre, filter any report and download it as CSV or as a PDF on your letterhead. The daily summary brings sales, cash, payouts, low stock, dues and expenses for one day together.",
          "রিপোর্ট সেন্টারে সার্চ করুন, যেকোনো রিপোর্ট ফিল্টার করুন এবং CSV বা আপনার লেটারহেডসহ PDF হিসেবে ডাউনলোড করুন। দৈনিক সারাংশে এক দিনের বিক্রি, ক্যাশ, পেআউট, কম স্টক, বকেয়া ও খরচ একসঙ্গে দেখুন।",
        ),
      },
      {
        icon: "CalendarClock",
        title: loc("Reports that arrive on schedule", "নির্ধারিত সময়ে রিপোর্ট"),
        body: loc(
          "Schedule reports daily, weekly or monthly at a set time, delivered by WhatsApp or email as PDF, CSV or a short message. Pause a schedule or send a test at any time.",
          "দৈনিক, সাপ্তাহিক বা মাসিক নির্দিষ্ট সময়ে রিপোর্ট শিডিউল করুন—WhatsApp বা ইমেইলে PDF, CSV বা সংক্ষিপ্ত মেসেজ আকারে। যেকোনো সময় শিডিউল থামান বা টেস্ট পাঠান।",
        ),
      },
      {
        icon: "Radar",
        title: loc("Ads measured on delivered orders", "ডেলিভারি অর্ডারে বিজ্ঞাপনের হিসাব"),
        body: loc(
          "Set up Meta Pixel and Conversions API, TikTok Pixel and Events API, GA4, Google Tag Manager, Google Ads conversions and Microsoft Clarity. Keep COD and prepaid orders apart, send delivery events later, and check event health.",
          "Meta Pixel ও Conversions API, TikTok Pixel ও Events API, GA4, Google Tag Manager, Google Ads conversions ও Microsoft Clarity সেটআপ করুন। COD ও প্রিপেইড অর্ডার আলাদা রাখুন, ডেলিভারির ইভেন্ট পরে পাঠান এবং ইভেন্টের অবস্থা যাচাই করুন।",
        ),
      },
    ],
    workflow: [
      loc("Record sales and costs", "বিক্রি ও খরচ রেকর্ড"),
      loc("Connect pixels and ad accounts", "পিক্সেল ও অ্যাড অ্যাকাউন্ট সংযুক্তি"),
      loc("Compare confirmed and delivered results", "কনফার্ম ও ডেলিভারি ফলাফল তুলনা"),
      loc("Schedule the reports you read", "প্রয়োজনীয় রিপোর্ট শিডিউল"),
    ],
    faq: {
      question: loc(
        "Is the reported profit a final accounting figure?",
        "এই রিপোর্ট কি অডিট করা আর্থিক বিবরণী?",
      ),
      answer: loc(
        "No. These are operational reports based on the costs you record. Ad attribution has limits, and the figures are not audited financial statements.",
        "না। এগুলো আপনার রেকর্ড করা খরচের ভিত্তিতে তৈরি অপারেশনাল রিপোর্ট। অ্যাড অ্যাট্রিবিউশনের সীমাবদ্ধতা আছে, আর এটি অডিট করা আর্থিক বিবরণী নয়।",
      ),
    },
    related: ["cash-and-expenses", "storefront"],
    close: loc(
      "See which sales and campaigns contribute to your margin.",
      "আপনার রিপোর্ট ও বিজ্ঞাপনের ফলাফল ডেমোতে দেখুন।",
    ),
  },
  // 10 · core (customers)
  {
    slug: "customers",
    icon: "Users",
    name: loc("Customers & CRM", "কাস্টমার ও CRM"),
    summary: loc("Customers, segments, leads and customer statements", "কাস্টমার, সেগমেন্ট, লিড ও কাস্টমার স্টেটমেন্ট"),
    hook: loc(
      "Know the customer behind every order.",
      "প্রতিটি অর্ডারের পেছনের কাস্টমারকে চিনুন।",
    ),
    description: loc(
      "Keep one profile per customer with orders, conversations and dues, build segments, and follow leads from first contact to first order.",
      "প্রতিটি কাস্টমারের অর্ডার, কথোপকথন ও বকেয়াসহ একটি প্রোফাইল রাখুন, সেগমেন্ট তৈরি করুন, আর প্রথম যোগাযোগ থেকে প্রথম অর্ডার পর্যন্ত লিড ফলো করুন।",
    ),
    hero: {
      title: loc(
        "One record for every customer.",
        "প্রতিটি কাস্টমারের জন্য একটি রেকর্ড।",
      ),
      body: loc(
        "People and companies sit in one customer list, each with their orders, activity, addresses, consent and balance. Find anyone by phone, email or ID, group customers into segments, and keep a statement of what each one owes.",
        "ব্যক্তি ও প্রতিষ্ঠান একই কাস্টমার তালিকায় থাকে—প্রত্যেকের অর্ডার, অ্যাক্টিভিটি, ঠিকানা, সম্মতি ও ব্যালেন্সসহ। ফোন, ইমেইল বা ID দিয়ে যে কাউকে খুঁজুন, কাস্টমারদের সেগমেন্টে ভাগ করুন, আর প্রত্যেকের বকেয়ার স্টেটমেন্ট রাখুন।",
      ),
    },
    benefits: [
      {
        icon: "Filter",
        title: loc("Views and segments that mean something", "অর্থপূর্ণ ভিউ ও সেগমেন্ট"),
        body: loc(
          "Start from views such as repeat buyers, left a cart, birthday this month, COD blocked and possible duplicates. Build your own segments, then tag, export or message them in bulk.",
          "রিপিট ক্রেতা, কার্ট ফেলে যাওয়া, এ মাসে জন্মদিন, COD বন্ধ ও সম্ভাব্য ডুপ্লিকেটের মতো ভিউ থেকে শুরু করুন। নিজের সেগমেন্ট তৈরি করুন, তারপর একসঙ্গে ট্যাগ, এক্সপোর্ট বা মেসেজ করুন।",
        ),
      },
      {
        icon: "Receipt",
        title: loc("Sell on due with limits", "সীমা রেখে বাকিতে বিক্রি"),
        body: loc(
          "Set a credit limit and the days to pay for customers you sell to on due. Each customer’s statement shows a running balance for any date range, ready to print.",
          "যাদের বাকিতে বিক্রি করেন তাদের জন্য ক্রেডিট লিমিট ও পরিশোধের সময় ঠিক করুন। প্রতিটি কাস্টমারের স্টেটমেন্টে যেকোনো তারিখের চলমান ব্যালেন্স দেখা যায়, প্রিন্টের জন্য প্রস্তুত।",
        ),
      },
      {
        icon: "Target",
        title: loc("Leads and follow-ups", "লিড ও ফলোআপ"),
        body: loc(
          "Track leads from Facebook, Instagram, WhatsApp, your website or a trade fair on a board from new to won. Marking a lead won adds them as a customer.",
          "Facebook, Instagram, WhatsApp, ওয়েবসাইট বা ট্রেড ফেয়ার থেকে আসা লিড বোর্ডে নতুন থেকে জয় পর্যন্ত ট্র্যাক করুন। লিড জয় হিসেবে চিহ্নিত করলে তিনি কাস্টমার তালিকায় যুক্ত হন।",
        ),
      },
    ],
    workflow: [
      loc("Lead or first order", "লিড বা প্রথম অর্ডার"),
      loc("Customer profile created", "কাস্টমার প্রোফাইল তৈরি"),
      loc("Orders, chats and dues added", "অর্ডার, চ্যাট ও বকেয়া যুক্ত"),
      loc("Segment and follow up", "সেগমেন্ট ও ফলোআপ"),
    ],
    faq: {
      question: loc(
        "Who on my team can see customer data?",
        "আমার টিমের কে কাস্টমারের তথ্য দেখতে পারবে?",
      ),
      answer: loc(
        "Staff roles decide who can open customer pages. In customer settings you also choose who can see IP and device details and how long that data is kept.",
        "স্টাফের রোল অনুযায়ী ঠিক হয় কে কাস্টমার পেজ খুলতে পারবে। কাস্টমার সেটিংসে আরও ঠিক করুন কে IP ও ডিভাইসের তথ্য দেখবে এবং সেই তথ্য কতদিন রাখা হবে।",
      ),
    },
    related: ["omnichannel", "offers-loyalty"],
    close: loc(
      "See your customers, segments and leads in a demo.",
      "আপনার কাস্টমার, সেগমেন্ট ও লিড ব্যবস্থাপনার ডেমো দেখুন।",
    ),
  },
  // 11 · hr
  {
    slug: "staff-permissions",
    icon: "Contact",
    name: loc("Staff & HR", "স্টাফ ও HR"),
    summary: loc("Staff, attendance, leave, payroll, increments and gratuity", "স্টাফ, হাজিরা, ছুটি, বেতন, ইনক্রিমেন্ট ও গ্র্যাচুইটি"),
    hook: loc(
      "Attendance, leave and payroll that agree with each other.",
      "হাজিরা, ছুটি আর বেতনের হিসাব একসঙ্গে মেলে।",
    ),
    description: loc(
      "Keep staff records, attendance, shifts and leave, run payroll with loans and bonuses, and decide what each role can open.",
      "স্টাফের রেকর্ড, হাজিরা, শিফট ও ছুটি রাখুন, লোন ও বোনাসসহ বেতন প্রস্তুত করুন, আর কোন রোল কী খুলতে পারবে ঠিক করুন।",
    ),
    hero: {
      title: loc(
        "From the first punch to the payslip.",
        "প্রথম হাজিরা থেকে পে-স্লিপ পর্যন্ত।",
      ),
      body: loc(
        "Attendance from fingerprint or face devices and POS log-ins feeds the month’s register. Lates, absences, unpaid leave, overtime and loan instalments flow into payroll, which the owner approves before anyone is paid.",
        "ফিঙ্গারপ্রিন্ট বা ফেস ডিভাইস এবং POS লগ-ইন থেকে হাজিরা মাসিক রেজিস্টারে যায়। দেরি, অনুপস্থিতি, অবৈতনিক ছুটি, ওভারটাইম ও লোনের কিস্তি বেতনের হিসাবে যুক্ত হয়, আর মালিকের অনুমোদনের পরেই বেতন দেওয়া হয়।",
      ),
    },
    benefits: [
      {
        icon: "CalendarCheck",
        title: loc("Attendance, shifts and leave", "হাজিরা, শিফট ও ছুটি"),
        body: loc(
          "Plan a weekly roster and get warnings for leave clashes, overlapping shifts and short cover. Approve leave, apply on someone’s behalf and keep balances per leave type.",
          "সাপ্তাহিক রোস্টার তৈরি করুন; ছুটির সংঘাত, ওভারল্যাপিং শিফট ও কম জনবলের সতর্কতা পান। ছুটি অনুমোদন করুন, কারো হয়ে আবেদন করুন এবং ছুটির ধরন অনুযায়ী ব্যালেন্স রাখুন।",
        ),
      },
      {
        icon: "Banknote",
        title: loc("Payroll in clear steps", "ধাপে ধাপে বেতন"),
        body: loc(
          "Check attendance, review the sheet, get owner approval, pay by bank, bKash or cash, then print payslips. Run festival bonuses, manage loans and advances, and print salary statements.",
          "হাজিরা যাচাই, শিট পর্যালোচনা, মালিকের অনুমোদন, তারপর ব্যাংক, bKash বা নগদে বেতন—শেষে পে-স্লিপ প্রিন্ট। উৎসব বোনাস, লোন ও অগ্রিম পরিচালনা করুন এবং বেতনের স্টেটমেন্ট প্রিন্ট করুন।",
        ),
      },
      {
        icon: "Lock",
        title: loc("Roles that decide what opens", "রোল অনুযায়ী অ্যাক্সেস"),
        body: loc(
          "Each role decides which pages a person can open, and one person can hold several roles. Manager PINs guard voids, discounts, refunds and stock changes at the counter, and each request is logged.",
          "প্রতিটি রোল ঠিক করে একজন কোন পেজ খুলতে পারবেন, আর একজন একাধিক রোল পেতে পারেন। কাউন্টারে বাতিল, ডিসকাউন্ট, রিফান্ড ও স্টক পরিবর্তনে ম্যানেজার PIN লাগে, আর প্রতিটি অনুরোধ লগে থাকে।",
        ),
      },
    ],
    workflow: [
      loc("Add staff and positions", "স্টাফ ও পদ যোগ"),
      loc("Record attendance and leave", "হাজিরা ও ছুটি রেকর্ড"),
      loc("Review the payroll sheet", "বেতন শিট পর্যালোচনা"),
      loc("Approve and pay", "অনুমোদন ও পরিশোধ"),
      loc("Issue payslips", "পে-স্লিপ প্রদান"),
    ],
    workflowNote: loc(
      "Increments, promotions, ID cards with QR codes and gratuity on leaving are handled here too.",
      "ইনক্রিমেন্ট, পদোন্নতি, QR কোডসহ ID কার্ড এবং চাকরি ছাড়ার সময় গ্র্যাচুইটিও এখানেই।",
    ),
    faq: {
      question: loc(
        "Does paying salaries show up in my money records?",
        "বেতন দিলে কি টাকার হিসাবে দেখা যায়?",
      ),
      answer: loc(
        "Yes. Approving payroll creates the salaries as bills to pay, and paying them records the money leaving the account you chose.",
        "হ্যাঁ। বেতন অনুমোদন করলে তা পরিশোধযোগ্য বিল হিসেবে যুক্ত হয়, আর পরিশোধ করলে বেছে নেওয়া অ্যাকাউন্ট থেকে টাকা যাওয়ার রেকর্ড থাকে।",
      ),
    },
    related: ["cash-and-expenses", "pos"],
    close: loc(
      "See attendance and payroll for your team.",
      "আপনার টিমের হাজিরা ও বেতন ব্যবস্থাপনার ডেমো দেখুন।",
    ),
  },
  // 12 · channels
  {
    slug: "sales-channels",
    icon: "RadioTower",
    name: loc("Sales Channels", "সেলস চ্যানেল"),
    summary: loc("Meta, Google Merchant, WooCommerce, Shopify and Google Business", "Meta, Google Merchant, WooCommerce, Shopify ও Google Business"),
    hook: loc(
      "List your products where people already shop.",
      "ক্রেতারা যেখানে কেনাকাটা করেন, সেখানে প্রোডাক্ট দেখান।",
    ),
    description: loc(
      "Send products, prices and stock to the Meta catalog, Google Merchant Center, WooCommerce and Shopify, and manage your Google Business Profile.",
      "Meta ক্যাটালগ, Google Merchant Center, WooCommerce ও Shopify-তে প্রোডাক্ট, দাম ও স্টক পাঠান, আর Google Business Profile পরিচালনা করুন।",
    ),
    hero: {
      title: loc(
        "One catalogue, published to your other channels.",
        "একটি ক্যাটালগ, আপনার অন্যান্য চ্যানেলে প্রকাশিত।",
      ),
      body: loc(
        "Keep products in GridCommerce and sync them out to the Meta catalog, Google Merchant Center, WooCommerce and Shopify. See the status of every product on every channel, and fix problems from one list.",
        "প্রোডাক্ট GridCommerce-এ রাখুন এবং Meta ক্যাটালগ, Google Merchant Center, WooCommerce ও Shopify-তে সিঙ্ক করুন। প্রতিটি চ্যানেলে প্রতিটি প্রোডাক্টের অবস্থা দেখুন, আর একটি তালিকা থেকেই সমস্যার সমাধান করুন।",
      ),
    },
    benefits: [
      {
        icon: "RefreshCw",
        title: loc("Products, prices and stock kept in step", "প্রোডাক্ট, দাম ও স্টক হালনাগাদ"),
        body: loc(
          "Choose whether products, stock, prices and images sync, how often, and whether out-of-stock items are hidden. Orders from WooCommerce and Shopify come back into your orders list.",
          "প্রোডাক্ট, স্টক, দাম ও ছবি সিঙ্ক হবে কিনা, কত ঘন ঘন হবে এবং স্টক-আউট পণ্য লুকানো থাকবে কিনা ঠিক করুন। WooCommerce ও Shopify-এর অর্ডার আপনার অর্ডার তালিকায় ফিরে আসে।",
        ),
      },
      {
        icon: "AlertCircle",
        title: loc("Sync problems in one list", "সিঙ্কের সমস্যা এক তালিকায়"),
        body: loc(
          "Each product shows as synced, needing attention, failed, processing or not published. Retry one or all failed items, with guidance for each problem and alerts when something goes wrong.",
          "প্রতিটি প্রোডাক্ট সিঙ্কড, মনোযোগ দরকার, ব্যর্থ, প্রক্রিয়াধীন বা অপ্রকাশিত হিসেবে দেখায়। একটি বা সব ব্যর্থ আইটেম আবার চেষ্টা করুন—প্রতিটি সমস্যার সমাধানের নির্দেশনা ও সমস্যা হলে অ্যালার্টসহ।",
        ),
      },
      {
        icon: "MapPin",
        title: loc("Google Business Profile", "Google Business Profile"),
        body: loc(
          "Keep your business information, hours, posts and photos up to date. Reply to Google reviews, with an AI draft you check before anything is published.",
          "ব্যবসার তথ্য, সময়সূচি, পোস্ট ও ছবি হালনাগাদ রাখুন। Google রিভিউর উত্তর দিন—AI ড্রাফট আপনি যাচাই না করা পর্যন্ত কিছুই প্রকাশ হয় না।",
        ),
      },
    ],
    workflow: [
      loc("Connect a channel", "চ্যানেল সংযুক্ত করা"),
      loc("Choose what syncs", "কী সিঙ্ক হবে নির্বাচন"),
      loc("Publish products", "প্রোডাক্ট প্রকাশ"),
      loc("Fix sync issues", "সিঙ্ক সমস্যা সমাধান"),
    ],
    workflowNote: loc(
      "Every connection is made from one Connections page in settings.",
      "সব সংযোগ সেটিংসের একটি Connections পেজ থেকে করা হয়।",
    ),
    faq: {
      question: loc(
        "Do orders from other channels come into GridCommerce?",
        "অন্য চ্যানেলের অর্ডার কি GridCommerce-এ আসে?",
      ),
      answer: loc(
        "Orders from WooCommerce and Shopify come back into your orders list. Meta and Google Merchant Center receive your products, prices, stock and images; they do not send orders back.",
        "WooCommerce ও Shopify-এর অর্ডার আপনার অর্ডার তালিকায় ফিরে আসে। Meta ও Google Merchant Center আপনার প্রোডাক্ট, দাম, স্টক ও ছবি পায়; সেখান থেকে অর্ডার ফেরত আসে না।",
      ),
    },
    related: ["inventory", "storefront"],
    close: loc(
      "See your catalogue synced to your channels.",
      "আপনার ক্যাটালগ বিভিন্ন চ্যানেলে সিঙ্ক হওয়ার ডেমো দেখুন।",
    ),
  },
  // 13 · marketing
  {
    slug: "offers-loyalty",
    icon: "Gift",
    name: loc("Offers & Loyalty", "অফার ও লয়্যালটি"),
    summary: loc("Offers, coupons, loyalty points, store credit and referrals", "অফার, কুপন, লয়্যালটি পয়েন্ট, স্টোর ক্রেডিট ও রেফারেল"),
    hook: loc(
      "Bring customers back without guessing the discount.",
      "আন্দাজে ডিসকাউন্ট নয়, পরিকল্পিত অফারে কাস্টমার ফেরান।",
    ),
    description: loc(
      "Run offers and coupons that work online and at the counter, reward repeat customers with points and levels, and pay referral rewards after a delivered order.",
      "অনলাইন ও কাউন্টার দুই জায়গাতেই চলা অফার ও কুপন দিন, পয়েন্ট ও লেভেল দিয়ে নিয়মিত কাস্টমারকে পুরস্কৃত করুন, আর ডেলিভারি হওয়া অর্ডারের পরে রেফারেল রিওয়ার্ড দিন।",
    ),
    hero: {
      title: loc(
        "Offers with rules. Rewards with limits.",
        "নিয়ম মেনে অফার, সীমা রেখে রিওয়ার্ড।",
      ),
      body: loc(
        "Set who an offer is for, which products it covers, which payment method, where and when it runs, and what it can combine with. Test it on a sample cart before it goes live. Coupons work at checkout, at the counter and when your team creates an order.",
        "অফার কার জন্য, কোন প্রোডাক্টে, কোন পেমেন্ট মাধ্যমে, কোথায় ও কখন চলবে এবং কোন অফারের সঙ্গে মিলবে—ঠিক করুন। চালুর আগে নমুনা কার্টে পরীক্ষা করুন। কুপন চেকআউটে, কাউন্টারে এবং টিমের তৈরি অর্ডারেও কাজ করে।",
      ),
    },
    benefits: [
      {
        icon: "TicketPercent",
        title: loc("Offer types you actually use", "দরকারি সব অফার"),
        body: loc(
          "Coupons, flash sales, automatic discounts, buy X get Y, quantity discounts, free gifts, free delivery and payment-method offers, with running and upcoming offers in one overview.",
          "কুপন, ফ্ল্যাশ সেল, স্বয়ংক্রিয় ডিসকাউন্ট, Buy X Get Y, পরিমাণভিত্তিক ডিসকাউন্ট, ফ্রি গিফট, ফ্রি ডেলিভারি ও পেমেন্ট মাধ্যমভিত্তিক অফার—চলমান ও আসন্ন অফার এক নজরে।",
        ),
      },
      {
        icon: "Crown",
        title: loc("Points and levels", "পয়েন্ট ও লেভেল"),
        body: loc(
          "Customers earn and redeem points, move through levels and get birthday points. Set each product to normal, double or no points, and choose whether points expire.",
          "কাস্টমার পয়েন্ট অর্জন ও ব্যবহার করেন, লেভেলে ওঠেন এবং জন্মদিনে পয়েন্ট পান। প্রতিটি প্রোডাক্টে সাধারণ, দ্বিগুণ বা শূন্য পয়েন্ট ঠিক করুন, আর পয়েন্টের মেয়াদ থাকবে কিনা বেছে নিন।",
        ),
      },
      {
        icon: "Share2",
        title: loc("Store credit and referrals", "স্টোর ক্রেডিট ও রেফারেল"),
        body: loc(
          "Give store credit for a return, a refund or a goodwill gesture; it cannot be cashed out and corrections need a manager. Referral rewards wait for the friend’s first delivered order, with caps and self-referral checks.",
          "রিটার্ন, রিফান্ড বা সৌজন্য হিসেবে স্টোর ক্রেডিট দিন; এটি নগদে তোলা যায় না, আর সংশোধনে ম্যানেজারের অনুমোদন লাগে। রেফারেল রিওয়ার্ড বন্ধুর প্রথম অর্ডার ডেলিভারির পর দেওয়া হয়—সীমা ও নিজেকে রেফার করা ঠেকানোর যাচাইসহ।",
        ),
      },
    ],
    workflow: [
      loc("Choose the offer type", "অফারের ধরন নির্বাচন"),
      loc("Set who, what and when", "কার জন্য, কী ও কখন ঠিক করা"),
      loc("Test on a sample cart", "নমুনা কার্টে পরীক্ষা"),
      loc("Run online and at the counter", "অনলাইন ও কাউন্টারে চালু"),
    ],
    faq: {
      question: loc(
        "Can customers combine offers?",
        "কাস্টমার কি একাধিক অফার একসঙ্গে নিতে পারবেন?",
      ),
      answer: loc(
        "Only where you allow it. Each offer lists the offers it can combine with, and checkout picks the best eligible offer automatically.",
        "শুধু আপনি অনুমতি দিলে। প্রতিটি অফারে কোন অফারের সঙ্গে মিলবে তা ঠিক করা থাকে, আর চেকআউট স্বয়ংক্রিয়ভাবে প্রযোজ্য সেরা অফারটি বেছে নেয়।",
      ),
    },
    related: ["customers", "storefront"],
    close: loc(
      "See offers and loyalty set up for your shop.",
      "আপনার শপের জন্য অফার ও লয়্যালটি সেটআপের ডেমো দেখুন।",
    ),
  },
  // 14 · automation
  {
    slug: "automation",
    icon: "Workflow",
    name: loc("Automation", "অটোমেশন"),
    summary: loc("Rules, the workflow builder and message limits", "রুল, ওয়ার্কফ্লো বিল্ডার ও মেসেজ সীমা"),
    hook: loc(
      "Let the routine steps run themselves.",
      "নিয়মিত কাজগুলো নিজে নিজেই চলুক।",
    ),
    description: loc(
      "Turn routine steps into when-then rules, build multi-step workflows, and keep messages within quiet hours and limits.",
      "নিয়মিত কাজগুলোকে “যখন-তখন” রুলে রূপ দিন, একাধিক ধাপের ওয়ার্কফ্লো তৈরি করুন, আর মেসেজ নির্দিষ্ট সময় ও সীমার মধ্যে রাখুন।",
    ),
    hero: {
      title: loc(
        "When this happens, do that. Every time.",
        "এটা ঘটলে ওটা হবে—প্রতিবার।",
      ),
      body: loc(
        "Start from ready-made rules or write your own: send a thank-you after an order is confirmed, book the courier when a parcel is packed, or raise a purchase task when stock is low. Test a rule before switching it on, and restore an earlier version if needed.",
        "তৈরি রুল থেকে শুরু করুন বা নিজের রুল লিখুন: অর্ডার কনফার্ম হলে ধন্যবাদ মেসেজ, পার্সেল প্যাক হলে কুরিয়ার বুকিং, স্টক কমলে পারচেজের কাজ তৈরি। চালুর আগে রুল পরীক্ষা করুন, প্রয়োজনে আগের ভার্সনে ফিরুন।",
      ),
    },
    benefits: [
      {
        icon: "Zap",
        title: loc("Ready-made and custom rules", "তৈরি ও নিজস্ব রুল"),
        body: loc(
          "Switch rules on and off, see recent runs and use a test simulator that sends nothing. Version history lets you restore an earlier rule.",
          "রুল চালু-বন্ধ করুন, সাম্প্রতিক রান দেখুন এবং এমন টেস্ট সিমুলেটর ব্যবহার করুন যা কিছুই পাঠায় না। ভার্সন হিস্ট্রি থেকে আগের রুল ফিরিয়ে আনুন।",
        ),
      },
      {
        icon: "Workflow",
        title: loc("A visual workflow builder", "ভিজ্যুয়াল ওয়ার্কফ্লো বিল্ডার"),
        body: loc(
          "Start from a trigger such as order placed, status changed, AI call finished, parcel delivered, low stock or a schedule. Add conditions and waits, then hold an order, change a status, book a courier, tag a customer, notify staff or send a message.",
          "অর্ডার আসা, স্ট্যাটাস বদলানো, AI কল শেষ, পার্সেল ডেলিভারি, কম স্টক বা নির্দিষ্ট সময়—এমন ট্রিগার থেকে শুরু করুন। শর্ত ও অপেক্ষা যোগ করুন, তারপর অর্ডার হোল্ড, স্ট্যাটাস পরিবর্তন, কুরিয়ার বুকিং, কাস্টমার ট্যাগ, স্টাফকে নোটিফাই বা মেসেজ পাঠান।",
        ),
      },
      {
        icon: "ShieldCheck",
        title: loc("Guardrails for every message", "প্রতিটি মেসেজে নিয়ন্ত্রণ"),
        body: loc(
          "Set quiet hours and message limits by message type, keep a suppression list, require approvals and choose who can change rules and what happens when a step fails.",
          "মেসেজের ধরন অনুযায়ী নীরব সময় ও মেসেজ সীমা ঠিক করুন, সাপ্রেশন তালিকা রাখুন, অনুমোদন বাধ্যতামূলক করুন, আর কে রুল বদলাতে পারবে এবং কোনো ধাপ ব্যর্থ হলে কী হবে—ঠিক করুন।",
        ),
      },
    ],
    workflow: [
      loc("Pick a trigger", "ট্রিগার নির্বাচন"),
      loc("Add conditions", "শর্ত যোগ"),
      loc("Choose the actions", "অ্যাকশন নির্বাচন"),
      loc("Test without sending", "না পাঠিয়ে পরীক্ষা"),
      loc("Switch it on", "চালু করা"),
    ],
    faq: {
      question: loc(
        "Can an automation message customers at night?",
        "অটোমেশন কি রাতে কাস্টমারকে মেসেজ পাঠাবে?",
      ),
      answer: loc(
        "Not unless you allow it. Quiet hours, message limits, opt-outs and the suppression list apply to every rule, and messages that use credits draw from your prepaid wallet.",
        "আপনি অনুমতি না দিলে নয়। নীরব সময়, মেসেজ সীমা, অপ্ট-আউট ও সাপ্রেশন তালিকা প্রতিটি রুলে প্রযোজ্য, আর ক্রেডিট লাগে এমন মেসেজ আপনার প্রিপেইড ওয়ালেট থেকে খরচ হয়।",
      ),
    },
    related: ["omnichannel", "orders"],
    close: loc(
      "See the routine steps your shop could automate.",
      "আপনার শপের কোন কাজগুলো অটোমেট করা যায়, ডেমোতে দেখুন।",
    ),
  },
];

/**
 * Wholesale is switched off in the merchant app (no edition sells it, Oct 2026).
 * Its page keeps working at /features/wholesale, but it is left out of
 * `MODULES`, the menus, the footer, the features index and the sitemap.
 */
export const SWITCHED_OFF_MODULES: SwitchedOffModuleEntry[] = [
  {
    slug: "wholesale",
    icon: "Handshake",
    name: loc("Wholesale & Collections", "হোলসেল ও বকেয়া আদায়"),
    summary: loc("Dealer prices, credit sales and collections", "ডিলার প্রাইস, বাকিতে বিক্রি ও আদায়"),
    hook: loc(
      "Who owes you, how much and since when?",
      "ডিলার প্রাইসিং, ক্রেডিট ও বকেয়া আদায়ে নিয়ন্ত্রণ রাখুন।",
    ),
    description: loc(
      "Manage dealer prices, credit limits and partial collections, with customer statements and overdue balances ready to review.",
      "কাস্টমারভিত্তিক দাম, ক্রেডিট লিমিট ও আংশিক পেমেন্ট পরিচালনা করুন। মেয়াদ পেরোনো বকেয়া ও কালেকশন হিস্ট্রি দেখে ফলোআপ নির্ধারণ করুন।",
    ),
    hero: {
      title: loc(
        "Keep credit sales connected to collection.",
        "ক্রেডিট সেলস ও পেমেন্ট কালেকশনের সমন্বিত ব্যবস্থাপনা।",
      ),
      body: loc(
        "Carry a quotation through to order, invoice and payment. GridCommerce shows each customer’s due, credit terms and collection history, so your team knows which accounts need follow-up.",
        "কোটেশন থেকে সেলস অর্ডার, ইনভয়েস ও পেমেন্ট কালেকশন পর্যন্ত প্রতিটি ধাপ ট্র্যাক করুন। কাস্টমারভিত্তিক বকেয়া, ক্রেডিটের শর্ত ও কালেকশন হিস্ট্রি একসঙ্গে দেখুন। প্রাপ্য পেমেন্টের অগ্রাধিকার নির্ধারণ করে ফলোআপ পরিচালনা করুন।",
      ),
    },
    benefits: [
      {
        icon: "Tag",
        title: loc("Set the right price for each buyer", "কাস্টমারভিত্তিক B2B প্রাইসিং"),
        body: loc(
          "Use dealer groups, quantity-based prices and customer-specific rates. Convert an accepted quotation into a sales order without entering the details again.",
          "ডিলার গ্রুপ, অর্ডারের পরিমাণ ও নির্দিষ্ট কাস্টমার অনুযায়ী দাম নির্ধারণ করুন। কোটেশন গৃহীত হলে পুনরায় ডেটা এন্ট্রি ছাড়াই সেলস অর্ডারে রূপান্তর করুন।",
        ),
      },
      {
        icon: "ShieldCheck",
        title: loc("Check credit before extending it", "ক্রেডিট রিস্ক ম্যানেজমেন্ট"),
        body: loc(
          "Set a credit limit and payment period per customer. Review overdue balances and limit warnings before approving further credit sales.",
          "প্রতি কাস্টমারের ক্রেডিট লিমিট ও পেমেন্টের সময়সীমা নির্ধারণ করুন। নতুন ক্রেডিট সেল অনুমোদনের আগে ওভারডিউ ব্যালেন্স ও ক্রেডিট লিমিটের সতর্কতা যাচাই করুন।",
        ),
      },
      {
        icon: "Banknote",
        title: loc("Record every collection against what is owed", "কালেকশন ট্র্যাকিং ও এজিং রিপোর্ট"),
        body: loc(
          "Apply partial payments to invoices, view a customer ledger and review balances by age, area or salesperson. Schedule due reminders through supported channels.",
          "আংশিক পেমেন্ট সংশ্লিষ্ট ইনভয়েসে সমন্বয় করুন। কাস্টমার লেজার থেকে বকেয়ার সময়কাল, এলাকা ও সেলসপারসন অনুযায়ী রিপোর্ট দেখুন। নির্ধারিত সময়ে পেমেন্ট রিমাইন্ডার পাঠান।",
        ),
      },
    ],
    workflow: [
      loc("Quotation", "কোটেশন"),
      loc("Sales order", "সেলস অর্ডার"),
      loc("Fulfilment and invoice", "পণ্য সরবরাহ ও ইনভয়েস"),
      loc("Partial or full collection", "পেমেন্ট কালেকশন"),
      loc("Updated customer due", "কাস্টমারের বকেয়া আপডেট"),
    ],
    faq: {
      question: loc(
        "Can one customer pay an invoice in several instalments?",
        "এক ইনভয়েসের বিপরীতে একাধিক পেমেন্ট রেকর্ড করা যাবে?",
      ),
      answer: loc(
        "Yes. Record multiple payments against one invoice, or allocate one payment across several invoices, with the remaining due visible.",
        "হ্যাঁ। একটি ইনভয়েসে একাধিক আংশিক পেমেন্ট যুক্ত করা যায়। একই পেমেন্ট একাধিক ইনভয়েসেও সমন্বয় করা যায়। অবশিষ্ট বকেয়া কাস্টমার লেজারে দেখা যাবে।",
      ),
    },
    related: ["inventory", "customers"],
    close: loc(
      "See dealer pricing and collection tracking for your business.",
      "আপনার হোলসেল প্রাইসিং, ক্রেডিট ও কালেকশন প্রক্রিয়া ডেমোতে দেখুন।",
    ),
  },
];

/** Every module page that renders, listed or not. */
export const MODULE_BY_SLUG = new Map<string, AnyModuleEntry>(
  [...MODULES, ...SWITCHED_OFF_MODULES].map((m) => [m.slug, m]),
);

export const MODULE_UI = {
  explore: loc("Explore module", "বিস্তারিত দেখুন"),
  seeHow: loc("See How It Works", "যেভাবে কাজ করে"),
  related: loc("Works with", "সংশ্লিষ্ট মডিউল"),
  relatedTitle: loc("Works best with", "যেগুলোর সাথে সবচেয়ে ভালো কাজ করে"),
  worksWith: loc("Works with", "যেগুলোর সাথে কাজ করে"),
  howTitle: loc("How it works", "যেভাবে কাজ করে"),
  howBody: loc("Watch a short overview, then follow the steps.", "ছোট একটা ভিডিও দেখুন, তারপর ধাপগুলো দেখুন।"),
  watch: loc("Watch the overview", "ওভারভিউ ভিডিও দেখুন"),
  watchShort: loc("Watch video", "ভিডিও দেখুন"),
  soonTitle: loc("The overview video is coming soon", "ওভারভিউ ভিডিও শিগগির আসছে"),
  soonBody: loc(
    "We are recording a short walkthrough of this module. Until then, book a demo and we will show it to you live.",
    "এই মডিউলের একটা ছোট ভিডিও তৈরি হচ্ছে। ততক্ষণ ডেমো বুক করুন, আমরা লাইভ দেখিয়ে দেব।",
  ),
  close: loc("Close", "বন্ধ করুন"),
  faqTitle: loc("Questions sellers ask", "সেলাররা যা জানতে চান"),
  onPhone: loc("Also on the phone app", "ফোন অ্যাপেও আছে"),
  swipe: loc("Swipe to see more", "আরও দেখতে সরান"),
};
