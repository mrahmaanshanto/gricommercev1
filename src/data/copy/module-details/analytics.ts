import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

const dir = "/modules/analytics";

const META = { name: "Meta Pixel", src: "/integrations/meta-ads.png" };
const GA4 = { name: "Google Analytics 4", src: "/integrations/google-analytics.png" };
const GADS = { name: "Google Ads", src: "/integrations/google-ads.png" };
const TIKTOK = { name: "TikTok Pixel", src: "/integrations/tiktok-ads.png" };

export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "See which ads bring delivered orders, and what you keep.",
      "কোন বিজ্ঞাপনে ডেলিভারি হওয়া অর্ডার আসে, আর হাতে কত থাকে—দেখুন।",
    ),
    body: loc(
      "Ad spend sits next to delivered sales, not just clicks. Profit is shown after product cost, returns, delivery charge and fees. Get the day’s summary on WhatsApp, and keep Facebook Pixel, Google and TikTok sending the right data.",
      "বিজ্ঞাপনের খরচ পাশে রাখুন ডেলিভারি হওয়া বিক্রির সঙ্গে, শুধু ক্লিকের সঙ্গে নয়। প্রোডাক্টের দাম, রিটার্ন, ডেলিভারি চার্জ আর ফি বাদে লাভ কত—দেখুন। দিনের সারাংশ WhatsApp-এ পান, আর Facebook Pixel, Google ও TikTok-এ ঠিক তথ্য যাচ্ছে কিনা নিশ্চিত থাকুন।",
    ),
  },
  benefits: [
    {
      icon: "Radar",
      title: loc("Ads judged on delivered orders", "ডেলিভারি অর্ডার দিয়ে বিজ্ঞাপনের হিসাব"),
      body: loc(
        "Delivered ROAS shows what Meta, Google and TikTok ads brought in delivered sales, right next to what the ad platform claims.",
        "Delivered ROAS দেখায় Meta, Google আর TikTok-এর বিজ্ঞাপনে আসলে কত টাকার ডেলিভারি হয়েছে—অ্যাড প্ল্যাটফর্মের দাবির ঠিক পাশে।",
      ),
    },
    {
      icon: "FileChartColumn",
      title: loc("95 reports in one place", "৯৫টি রিপোর্ট এক জায়গায়"),
      body: loc(
        "Sales, courier, returns, stock, money and staff reports. Search, filter and download any of them as CSV or PDF.",
        "বিক্রি, কুরিয়ার, রিটার্ন, স্টক, টাকা আর স্টাফের রিপোর্ট। খুঁজুন, ফিল্টার করুন, CSV বা PDF হিসেবে নামিয়ে নিন।",
      ),
    },
    {
      icon: "CalendarClock",
      title: loc("Your day on WhatsApp", "দিনের হিসাব WhatsApp-এ"),
      body: loc(
        "Schedule the daily summary or any report by WhatsApp or email, every day, week or month.",
        "দৈনিক সারাংশ বা যেকোনো রিপোর্ট প্রতিদিন, প্রতি সপ্তাহ বা প্রতি মাসে WhatsApp বা ইমেইলে পাঠানোর সময় ঠিক করে দিন।",
      ),
    },
  ],
  heroShot: {
    src: `${dir}/hero.webp`,
    width: 2880,
    height: 1800,
    alt: loc(
      "Analytics hub: ৳1,92,766 delivered sales from ৳12,000 of ads over 30 days, by platform",
      "অ্যানালিটিক্স হাব: ৩০ দিনে ৳১২,০০০ বিজ্ঞাপনে ৳১,৯২,৭৬৬-এর ডেলিভারি বিক্রি, প্ল্যাটফর্ম ধরে",
    ),
  },
  heroPhone: {
    src: `${dir}/phone.webp`,
    width: 1170,
    height: 2532,
    alt: loc(
      "Phone app home: sales today ৳48,250 from 36 orders, 12% up on last Wednesday",
      "ফোন অ্যাপের হোম: আজকের বিক্রি ৳৪৮,২৫০, ৩৬টি অর্ডার, গত বুধবারের চেয়ে ১২% বেশি",
    ),
  },
  logos: {
    title: loc("Tracks with", "যেগুলোর সঙ্গে ট্র্যাক করে"),
    items: [META, GA4, GADS, TIKTOK],
  },
  sections: [
    {
      title: loc("Ad spend vs delivered sales", "বিজ্ঞাপনের খরচ বনাম ডেলিভারি বিক্রি"),
      body: loc(
        "See ad spend, delivered sales and delivered ROAS for Meta, Google and TikTok on one screen. The number the ad platform reports stays beside it, so you see the gap.",
        "এক স্ক্রিনে Meta, Google আর TikTok-এর বিজ্ঞাপন খরচ, ডেলিভারি বিক্রি আর Delivered ROAS দেখুন। অ্যাড প্ল্যাটফর্ম যা বলে সেটাও পাশে থাকে, তাই পার্থক্যটা চোখে পড়ে।",
      ),
      points: [
        loc("Pick 7, 30 or 90 days, or one platform", "৭, ৩০ বা ৯০ দিন, অথবা একটি প্ল্যাটফর্ম বেছে নিন"),
        loc("Contribution after ads shows what is really left", "বিজ্ঞাপনের পর আসলে কত থাকল, দেখায়"),
        loc("Where the money went: spend split by platform", "টাকা কোথায় গেল: প্ল্যাটফর্ম ধরে খরচ"),
        loc("Ask buyers “How did you hear about us?” at checkout", "চেকআউটে ক্রেতাকে জিজ্ঞেস করুন ‘আমাদের কোথায় পেলেন?’"),
      ],
      shot: {
        src: `${dir}/s1.webp`,
        width: 2252,
        height: 1496,
        alt: loc(
          "Delivered ROAS 16.06× against platform-reported 22.81×, with delivered revenue and ad spend by day",
          "Delivered ROAS ১৬.০৬×, প্ল্যাটফর্মের দাবি ২২.৮১×; দিন ধরে ডেলিভারি আয় আর বিজ্ঞাপন খরচ",
        ),
      },
      logos: [META, GADS, TIKTOK],
    },
    {
      title: loc("Profit after every cost", "সব খরচ বাদে লাভ"),
      body: loc(
        "Sales & profit shows net sales, gross profit and net profit for any period. It takes off product cost, returns, delivery charges, COD and gateway fees, and says in plain words what stands out.",
        "সেলস ও প্রফিট পেজে যেকোনো সময়ের নিট বিক্রি, গ্রস লাভ আর নিট লাভ দেখুন। প্রোডাক্টের দাম, রিটার্ন, ডেলিভারি চার্জ, COD আর গেটওয়ে ফি বাদ দিয়ে হিসাব হয়, আর কোনটা চোখে পড়ার মতো—সহজ কথায় বলে দেয়।",
      ),
      points: [
        loc("Profit by channel: online and retail", "চ্যানেল ধরে লাভ: অনলাইন আর দোকান"),
        loc("“Still due” shows what customers owe you", "‘এখনো বাকি’-তে কাস্টমারের কাছে পাওনা দেখায়"),
        loc("Warns when a margin is thin", "লাভের হার কম হলে সতর্ক করে"),
        loc("Print it or download as CSV", "প্রিন্ট করুন বা CSV নামান"),
      ],
      shot: {
        src: `${dir}/s2.webp`,
        width: 2148,
        height: 980,
        alt: loc(
          "Sales & profit for 1–7 Oct: ৳2,79,696 net sales, ৳61,020 gross profit, ৳42,816.25 net profit",
          "১–৭ অক্টোবরের সেলস ও প্রফিট: নিট বিক্রি ৳২,৭৯,৬৯৬, গ্রস লাভ ৳৬১,০২০, নিট লাভ ৳৪২,৮১৬.২৫",
        ),
      },
    },
    {
      title: loc("Facebook Pixel, Google and TikTok, set up right", "Facebook Pixel, Google আর TikTok—ঠিকঠাক সেটআপ"),
      body: loc(
        "Connect Meta Pixel and Conversions API, Google Analytics 4 and Google Ads, and TikTok Pixel and Events API. The delivered order is sent as the real conversion, and returns are sent too. Setup guides also cover Google Tag Manager and Microsoft Clarity.",
        "Meta Pixel ও Conversions API, Google Analytics 4 ও Google Ads, আর TikTok Pixel ও Events API যুক্ত করুন। ডেলিভারি হওয়া অর্ডার আসল কনভার্সন হিসেবে যায়, রিটার্নও জানানো হয়। সেটআপ গাইডে Google Tag Manager আর Microsoft Clarity-ও আছে।",
      ),
      points: [
        loc("A match quality score for each platform", "প্রতিটি প্ল্যাটফর্মের ম্যাচ কোয়ালিটি স্কোর"),
        loc("The same event from browser and server is counted once", "ব্রাউজার আর সার্ভার থেকে একই ইভেন্ট একবারই গোনা হয়"),
        loc("Delivered orders are sent up to 7 days later", "ডেলিভারি হওয়া অর্ডার ৭ দিন পর্যন্ত পরে পাঠানো হয়"),
        loc("Event health warns about expiring tokens and stopped events", "টোকেনের মেয়াদ শেষ বা ইভেন্ট বন্ধ হলে ইভেন্ট হেলথ জানায়"),
      ],
      shot: {
        src: `${dir}/s3.webp`,
        width: 2148,
        height: 1482,
        alt: loc(
          "Pixels & events: Meta, Google and TikTok cards with match scores, and an order’s life from purchase to delivered",
          "পিক্সেল ও ইভেন্ট: Meta, Google ও TikTok-এর ম্যাচ স্কোর, আর কেনা থেকে ডেলিভারি পর্যন্ত একটি অর্ডারের ধাপ",
        ),
      },
      logos: [META, GA4, GADS, TIKTOK],
    },
    {
      title: loc("Your whole day on one page", "পুরো দিন এক পাতায়"),
      body: loc(
        "The daily summary shows sales by channel and branch, online orders placed, delivered and returned, money at closing, late payouts, low stock, dues collected and expenses.",
        "দৈনিক সারাংশে দেখুন চ্যানেল আর শাখা ধরে বিক্রি, কত অনলাইন অর্ডার এলো, ডেলিভারি হলো আর ফেরত এলো, দিনশেষে হাতে কত টাকা, দেরি হওয়া পেআউট, কম স্টক, আদায় হওয়া বাকি আর খরচ।",
      ),
      points: [
        loc("Go back to any day", "যেকোনো দিনে ফিরে দেখুন"),
        loc("Money at closing for cash, banks and wallets", "ক্যাশ, ব্যাংক আর ওয়ালেটে দিনশেষের টাকা"),
        loc("Orders returned by the courier, at a glance", "কুরিয়ার কতগুলো ফেরত দিল, এক নজরে"),
        loc("Download as PDF or CSV", "PDF বা CSV হিসেবে নামান"),
      ],
      shot: {
        src: `${dir}/s4.webp`,
        width: 2128,
        height: 1510,
        alt: loc(
          "Daily summary: ৳17,660 sales from 11 online orders, 16 delivered, 2 returned, and money at closing",
          "দৈনিক সারাংশ: ১১টি অনলাইন অর্ডারে ৳১৭,৬৬০ বিক্রি, ১৬টি ডেলিভারি, ২টি ফেরত, আর দিনশেষের টাকা",
        ),
      },
    },
    {
      title: loc("Reports sent to you on time", "সময়মতো রিপোর্ট আপনার কাছে"),
      body: loc(
        "Pick a report, how often and what time. It goes to WhatsApp or email as a PDF, a spreadsheet or a short message.",
        "রিপোর্ট, কত দিন পরপর আর কোন সময়—বেছে নিন। WhatsApp বা ইমেইলে PDF, স্প্রেডশিট বা ছোট মেসেজ হিসেবে চলে যাবে।",
      ),
      points: [
        loc("Every day, every week or every month", "প্রতিদিন, প্রতি সপ্তাহ বা প্রতি মাসে"),
        loc("Send a test now to see the message", "এখনই টেস্ট পাঠিয়ে মেসেজটা দেখে নিন"),
        loc("Pause a schedule any time", "যেকোনো সময় শিডিউল থামান"),
        loc("Works for the daily summary and every report", "দৈনিক সারাংশ আর সব রিপোর্টে চলে"),
      ],
      shot: {
        src: `${dir}/s5.webp`,
        width: 1040,
        height: 884,
        alt: loc(
          "New scheduled report: daily summary every day at 8:00 PM to WhatsApp as a PDF",
          "নতুন শিডিউল রিপোর্ট: দৈনিক সারাংশ প্রতিদিন রাত ৮টায় WhatsApp-এ PDF হিসেবে",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "Radar",
      title: loc("Connect your pixels", "পিক্সেল যুক্ত করুন"),
      body: loc(
        "Add Meta, Google and TikTok with the setup guides.",
        "সেটআপ গাইড দেখে Meta, Google আর TikTok যুক্ত করুন।",
      ),
    },
    {
      icon: "Truck",
      title: loc("Sell and deliver", "বিক্রি আর ডেলিভারি"),
      body: loc(
        "Orders, costs and courier results are recorded as you work.",
        "কাজ করতে করতেই অর্ডার, খরচ আর কুরিয়ারের ফল রেকর্ড হয়।",
      ),
    },
    {
      icon: "ChartNoAxesCombined",
      title: loc("Compare ads with deliveries", "বিজ্ঞাপন আর ডেলিভারি মেলান"),
      body: loc(
        "See delivered sales and ROAS for each platform.",
        "প্রতিটি প্ল্যাটফর্মের ডেলিভারি বিক্রি আর ROAS দেখুন।",
      ),
    },
    {
      icon: "TrendingUp",
      title: loc("Check your profit", "লাভ দেখুন"),
      body: loc(
        "See what is left after costs, returns and fees.",
        "খরচ, রিটার্ন আর ফি বাদে কত থাকল, দেখুন।",
      ),
    },
    {
      icon: "CalendarClock",
      title: loc("Get reports on WhatsApp", "WhatsApp-এ রিপোর্ট পান"),
      body: loc(
        "Schedule the daily summary or any report you read.",
        "দৈনিক সারাংশ বা দরকারি যেকোনো রিপোর্টের সময় ঠিক করে দিন।",
      ),
    },
  ],
  faqs: [
    {
      q: loc(
        "Why is my ROAS here lower than in Facebook Ads Manager?",
        "এখানে ROAS ফেসবুক অ্যাডস ম্যানেজারের চেয়ে কম কেন?",
      ),
      a: loc(
        "Ads Manager counts a sale when the order is placed. Here a sale counts when the courier delivers it, so cancelled and returned COD orders are left out. Both numbers are shown side by side.",
        "অ্যাডস ম্যানেজার অর্ডার হলেই বিক্রি ধরে। এখানে কুরিয়ার ডেলিভারি দিলে তবেই বিক্রি ধরা হয়, তাই বাতিল আর ফেরত আসা COD অর্ডার বাদ যায়। দুটো সংখ্যাই পাশাপাশি দেখানো হয়।",
      ),
    },
    {
      q: loc(
        "How do I set up Facebook Pixel and Google Analytics?",
        "Facebook Pixel আর Google Analytics কীভাবে সেটআপ করব?",
      ),
      a: loc(
        "Follow the setup guides for Meta Pixel, GA4, Google Tag Manager, Google Ads, TikTok and Microsoft Clarity. Then send a test event and check Event health to see that events arrive.",
        "Meta Pixel, GA4, Google Tag Manager, Google Ads, TikTok আর Microsoft Clarity-র সেটআপ গাইড ধরে এগোন। তারপর একটি টেস্ট ইভেন্ট পাঠিয়ে ইভেন্ট হেলথে দেখুন ইভেন্ট পৌঁছাচ্ছে কিনা।",
      ),
    },
    {
      q: loc(
        "Can I get the daily sales report on WhatsApp?",
        "দৈনিক বিক্রির রিপোর্ট কি WhatsApp-এ পাওয়া যাবে?",
      ),
      a: loc(
        "Yes. In Scheduled reports, pick the daily summary, the time and your mobile number. It can come as a PDF, a spreadsheet or a short message, and you can send a test first.",
        "হ্যাঁ। শিডিউলড রিপোর্টে দৈনিক সারাংশ, সময় আর আপনার মোবাইল নম্বর দিন। PDF, স্প্রেডশিট বা ছোট মেসেজ হিসেবে আসবে, আর আগে একটা টেস্ট পাঠিয়ে দেখতে পারেন।",
      ),
    },
    {
      q: loc(
        "Is the profit here my final accounts?",
        "এখানকার লাভ কি আমার চূড়ান্ত হিসাব?",
      ),
      a: loc(
        "No. These are working reports built from the costs you record. Ad tracking has limits, and the figures are not audited accounts.",
        "না। এগুলো আপনার লেখা খরচ থেকে তৈরি কাজের রিপোর্ট। অ্যাড ট্র্যাকিংয়ের সীমাবদ্ধতা আছে, আর এগুলো অডিট করা হিসাব নয়।",
      ),
    },
  ],
};
