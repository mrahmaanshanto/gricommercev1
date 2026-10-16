/**
 * SAMPLE DATA — NOT REAL. Careers at GridCommerce (/careers, /careers/[slug]).
 *
 * Mirrors GridCommerce's own employer profile and open jobs in the platform's super admin, Grid Career
 * (gridc-backend › /admin/career: Jobs and Careers page; lib/platform/career.js, owner "gc"). Only jobs whose status is
 * "open" there are listed; drafts and closed jobs are not. The headline, about text, benefits, pay ranges and dates are
 * the demo seed, not confirmed company facts.
 *
 * TODO(backend): GET /api/careers?owner=gc — the published employer profile and its open jobs from Grid Career, so a job
 * the super admin publishes, pauses or closes shows here without a deploy. The shapes below are that response.
 */

import { loc, type Localized } from "@/i18n/types";

/** Turn on once real jobs replace these: job pages then carry JobPosting structured data for Google Jobs. */
export const JOBS_ARE_REAL = false;

export type JobType = "full-time" | "part-time" | "contract" | "internship";

export type JobQuestion = {
  id: string;
  label: Localized;
  type: "text" | "textarea" | "select" | "yesno" | "number" | "file";
  options?: Localized[];
  required: boolean;
};

export type Job = {
  id: string;            // Grid Career's job id (JOB-101 …)
  slug: string;
  title: Localized;
  team: Localized;
  place: Localized;
  remote: boolean;
  type: JobType;
  salaryFrom: number;    // ৳ a month
  salaryTo: number;
  showSalary: boolean;
  postedAt: string;      // ISO date (Asia/Dhaka)
  closesAt: string;
  summary: Localized;
  description: Localized<string[]>;   // paragraphs
  duties: Localized<string[]>;
  needs: Localized<string[]>;
  questions: JobQuestion[];
};

export const JOB_TYPES: Record<JobType, Localized> = {
  "full-time": loc("Full-time", "ফুল-টাইম"),
  "part-time": loc("Part-time", "পার্ট-টাইম"),
  contract: loc("Contract", "চুক্তিভিত্তিক"),
  internship: loc("Internship", "ইন্টার্নশিপ"),
};

export const EMPLOYER = {
  name: "GridCommerce",
  city: loc("Dhaka", "ঢাকা"),
  headline: loc("Build the tools Bangladesh’s shops run on", "বাংলাদেশের দোকানগুলো যে টুলে চলে, তা তৈরি করুন"),
  about: loc(
    "GridCommerce is a commerce platform for shops in Bangladesh: orders, stock, POS, payments and their website in one place. We are a small team in Dhaka that ships every week and talks to merchants every day.",
    "গ্রিডকমার্স বাংলাদেশের দোকানের জন্য একটি কমার্স প্ল্যাটফর্ম: অর্ডার, স্টক, পিওএস, পেমেন্ট আর ওয়েবসাইট এক জায়গায়। আমরা ঢাকার একটি ছোট টিম, প্রতি সপ্তাহে নতুন কিছু চালু করি আর প্রতিদিন মার্চেন্টদের সাথে কথা বলি।",
  ),
  benefits: [
    { icon: "TrendingUp", label: loc("Salary reviewed every year", "প্রতি বছর বেতন পর্যালোচনা") },
    { icon: "Gift", label: loc("Two Eid bonuses", "দুটি ঈদ বোনাস") },
    { icon: "Utensils", label: loc("Lunch at the office", "অফিসে দুপুরের খাবার") },
    { icon: "House", label: loc("Work from home on Thursdays", "বৃহস্পতিবার বাসা থেকে কাজ") },
    { icon: "HeartPulse", label: loc("Health cover for you and your family", "আপনার ও পরিবারের জন্য স্বাস্থ্য সুবিধা") },
  ],
};

const yesNo = (id: string, en: string, bn: string, required = true): JobQuestion => ({ id, label: loc(en, bn), type: "yesno", required });
const q = (id: string, type: JobQuestion["type"], en: string, bn: string, required = true, options?: Localized[]): JobQuestion => ({ id, label: loc(en, bn), type, required, options });

export const JOBS: Job[] = [
  {
    id: "JOB-101",
    slug: "customer-success-executive",
    title: loc("Customer success executive", "কাস্টমার সাকসেস এক্সিকিউটিভ"),
    team: loc("Customer success", "কাস্টমার সাকসেস"),
    place: loc("Dhaka office (Banani)", "ঢাকা অফিস (বনানী)"),
    remote: false,
    type: "full-time",
    salaryFrom: 28000,
    salaryTo: 38000,
    showSalary: true,
    postedAt: "2026-10-04",
    closesAt: "2026-11-03",
    summary: loc(
      "Help merchants set up their shop on GridCommerce and get value from it.",
      "মার্চেন্টদের গ্রিডকমার্সে দোকান সাজাতে আর এর পুরো সুবিধা নিতে সাহায্য করুন।",
    ),
    description: loc(
      [
        "Merchants call, message and email us every day. You help them set up their shop on GridCommerce, answer their questions and make sure they get value from it.",
        "You work with the support and product teams, and you tell us what merchants need next.",
      ],
      [
        "মার্চেন্টরা প্রতিদিন আমাদের ফোন, মেসেজ আর ইমেইল করেন। আপনি তাদের গ্রিডকমার্সে দোকান সাজাতে সাহায্য করবেন, প্রশ্নের উত্তর দেবেন আর নিশ্চিত করবেন যে তারা এর সুবিধা পাচ্ছেন।",
        "আপনি সাপোর্ট আর প্রোডাক্ট টিমের সাথে কাজ করবেন, আর মার্চেন্টদের পরের প্রয়োজন কী তা আমাদের জানাবেন।",
      ],
    ),
    duties: loc(
      ["Answer merchant chats, calls and email in Bangla and English", "Run setup calls with new stores", "Follow up stores that stop using GridCommerce", "Write help articles from the questions you get"],
      ["বাংলা ও ইংরেজিতে মার্চেন্টদের চ্যাট, কল আর ইমেইলের উত্তর দেওয়া", "নতুন দোকানের সাথে সেটআপ কল করা", "যেসব দোকান গ্রিডকমার্স ব্যবহার বন্ধ করেছে, তাদের খোঁজ নেওয়া", "যে প্রশ্নগুলো আসে, সেগুলো থেকে হেল্প আর্টিকেল লেখা"],
    ),
    needs: loc(
      ["1+ year in customer support or sales", "Clear Bangla and good English", "Calm on the phone", "Knows how online shops work in Bangladesh"],
      ["কাস্টমার সাপোর্ট বা সেলসে ১+ বছরের অভিজ্ঞতা", "পরিষ্কার বাংলা ও ভালো ইংরেজি", "ফোনে শান্ত থাকতে পারেন", "বাংলাদেশে অনলাইন দোকান কীভাবে চলে জানেন"],
    ),
    questions: [
      yesNo("q1", "Can you work Saturday to Thursday, 10 am to 7 pm?", "শনিবার থেকে বৃহস্পতিবার, সকাল ১০টা থেকে সন্ধ্যা ৭টা কাজ করতে পারবেন?"),
      q("q2", "number", "Years of customer support experience", "কাস্টমার সাপোর্টে কত বছরের অভিজ্ঞতা"),
      q("q3", "textarea", "Why do you want to work at GridCommerce?", "কেন গ্রিডকমার্সে কাজ করতে চান?"),
      q("q4", "number", "Expected salary (৳ a month)", "প্রত্যাশিত বেতন (মাসে ৳)", false),
    ],
  },
  {
    id: "JOB-102",
    slug: "junior-front-end-developer",
    title: loc("Junior front-end developer", "জুনিয়র ফ্রন্ট-এন্ড ডেভেলপার"),
    team: loc("Product", "প্রোডাক্ট"),
    place: loc("Dhaka office (Banani), 3 days a week", "ঢাকা অফিস (বনানী), সপ্তাহে ৩ দিন"),
    remote: false,
    type: "full-time",
    salaryFrom: 40000,
    salaryTo: 60000,
    showSalary: true,
    postedAt: "2026-10-07",
    closesAt: "2026-11-10",
    summary: loc(
      "Build the screens merchants use every day, in React and Next.js.",
      "মার্চেন্টরা প্রতিদিন যে স্ক্রিনগুলো ব্যবহার করেন, সেগুলো React আর Next.js দিয়ে তৈরি করুন।",
    ),
    description: loc(
      [
        "You build the screens merchants use every day: orders, stock, POS and the store builder. We use React and Next.js and care about speed on cheap phones.",
        "You pair with a senior developer and ship to real shops from your first month.",
      ],
      [
        "আপনি সেই স্ক্রিনগুলো তৈরি করবেন যা মার্চেন্টরা প্রতিদিন ব্যবহার করেন: অর্ডার, স্টক, পিওএস আর স্টোর বিল্ডার। আমরা React ও Next.js ব্যবহার করি আর কম দামের ফোনেও দ্রুত চলাকে গুরুত্ব দিই।",
        "আপনি একজন সিনিয়র ডেভেলপারের সাথে কাজ করবেন আর প্রথম মাস থেকেই আসল দোকানে আপনার কাজ পৌঁছাবে।",
      ],
    ),
    duties: loc(
      ["Build and fix screens from designs", "Make pages work well on phones", "Write small tests for what you build", "Review each other’s work"],
      ["ডিজাইন থেকে স্ক্রিন তৈরি ও ঠিক করা", "পেজগুলো ফোনে ভালোভাবে চালানো", "নিজের কাজের জন্য ছোট টেস্ট লেখা", "একে অপরের কাজ রিভিউ করা"],
    ),
    needs: loc(
      ["Good JavaScript and CSS", "Some React (projects count)", "Reads and writes English well", "A portfolio or GitHub we can look at"],
      ["ভালো JavaScript ও CSS", "কিছুটা React (নিজের প্রজেক্টও গণ্য)", "ইংরেজি ভালো পড়তে ও লিখতে পারেন", "দেখার মতো একটি পোর্টফোলিও বা GitHub"],
    ),
    questions: [
      q("q1", "text", "Link to your GitHub or portfolio", "আপনার GitHub বা পোর্টফোলিওর লিংক"),
      q("q2", "select", "Which have you used?", "কোনটি ব্যবহার করেছেন?", true, [loc("React", "React"), loc("Vue", "Vue"), loc("Plain JavaScript only", "শুধু JavaScript"), loc("None yet", "এখনো কোনোটি না")]),
      yesNo("q3", "Can you work from our Dhaka office 3 days a week?", "সপ্তাহে ৩ দিন আমাদের ঢাকা অফিস থেকে কাজ করতে পারবেন?"),
      q("q4", "textarea", "A small project you are proud of", "আপনার গর্বের একটি ছোট প্রজেক্ট", false),
    ],
  },
  {
    id: "JOB-103",
    slug: "sales-executive",
    title: loc("Sales executive", "সেলস এক্সিকিউটিভ"),
    team: loc("Sales", "সেলস"),
    place: loc("Dhaka (field)", "ঢাকা (মাঠ পর্যায়ে)"),
    remote: false,
    type: "full-time",
    salaryFrom: 25000,
    salaryTo: 35000,
    showSalary: true,
    postedAt: "2026-10-11",
    closesAt: "2026-10-26",
    summary: loc(
      "Visit shops across Dhaka, show them GridCommerce and help them sign up.",
      "ঢাকার দোকানে দোকানে গিয়ে গ্রিডকমার্স দেখান আর তাদের যুক্ত হতে সাহায্য করুন।",
    ),
    description: loc(
      ["You visit shops across Dhaka, show them GridCommerce and help them sign up. Salary plus commission on every store that subscribes."],
      ["আপনি ঢাকার বিভিন্ন দোকানে যাবেন, গ্রিডকমার্স দেখাবেন আর তাদের সাইন আপ করতে সাহায্য করবেন। বেতনের সাথে প্রতিটি সাবস্ক্রাইব করা দোকানে কমিশন।"],
    ),
    duties: loc(
      ["Visit 6–8 shops a day", "Show the POS and the online store on a tablet", "Keep every lead in the CRM"],
      ["দিনে ৬–৮টি দোকানে যাওয়া", "ট্যাবলেটে পিওএস আর অনলাইন স্টোর দেখানো", "প্রতিটি লিড সিআরএমে রাখা"],
    ),
    needs: loc(
      ["Sales experience, any field", "A motorbike is a plus", "Lives in Dhaka"],
      ["যেকোনো ক্ষেত্রে সেলসের অভিজ্ঞতা", "মোটরবাইক থাকলে ভালো", "ঢাকায় থাকেন"],
    ),
    questions: [
      q("q1", "number", "Years of sales experience", "সেলসে কত বছরের অভিজ্ঞতা"),
      yesNo("q2", "Do you have a motorbike and a licence?", "আপনার কি মোটরবাইক ও লাইসেন্স আছে?", false),
      q("q3", "text", "Which areas of Dhaka do you know well?", "ঢাকার কোন এলাকাগুলো ভালো চেনেন?"),
    ],
  },
];

export const jobBySlug = (slug: string) => JOBS.find((j) => j.slug === slug) || null;

export const CAREERS_COPY = {
  crumb: loc("Careers", "ক্যারিয়ার"),
  eyebrow: loc("Careers at GridCommerce", "গ্রিডকমার্সে ক্যারিয়ার"),
  openTitle: loc("Open jobs", "খোলা পদ"),
  openBody: loc("Every application is read by the team you would join.", "আপনি যে টিমে যোগ দেবেন, সেই টিমই প্রতিটি আবেদন পড়ে।"),
  allTeams: loc("All teams", "সব টিম"),
  benefitsTitle: loc("What you get", "আপনি যা পাবেন"),
  howTitle: loc("How hiring works", "নিয়োগ যেভাবে হয়"),
  steps: [
    { icon: "Send", label: loc("Apply in a few minutes", "কয়েক মিনিটে আবেদন"), detail: loc("Your details, your CV and a few questions about the job. No account needed.", "আপনার তথ্য, সিভি আর পদ নিয়ে কয়েকটি প্রশ্ন। কোনো অ্যাকাউন্ট লাগবে না।") },
    { icon: "ClipboardCheck", label: loc("We read every application", "প্রতিটি আবেদন আমরা পড়ি"), detail: loc("The team shortlists. You get an SMS with a link to follow your application at each step.", "টিম সংক্ষিপ্ত তালিকা করে। প্রতিটি ধাপে আবেদনের অবস্থা দেখার লিংকসহ এসএমএস পাবেন।") },
    { icon: "CalendarCheck", label: loc("Interview", "ইন্টারভিউ"), detail: loc("At our Banani office, by phone or by video, at a time we agree with you.", "বনানী অফিসে, ফোনে বা ভিডিওতে, আপনার সাথে ঠিক করা সময়ে।") },
    { icon: "Handshake", label: loc("Offer", "অফার"), detail: loc("We call you with the offer and send your joining details.", "আমরা ফোন করে অফার জানাই আর যোগদানের তথ্য পাঠাই।") },
  ],
  none: loc("We are not hiring right now.", "এই মুহূর্তে আমরা নিয়োগ দিচ্ছি না।"),
  noneBody: loc("Send your CV to us and we will contact you when a job fits.", "আপনার সিভি পাঠান, মানানসই পদ এলে আমরা যোগাযোগ করব।"),
  noFit: loc("Don’t see your job?", "আপনার পদ দেখছেন না?"),
  noFitBody: loc("Tell us what you do well. We keep your details for the next opening.", "আপনি কী ভালো পারেন জানান। পরের সুযোগের জন্য আপনার তথ্য রেখে দেব।"),
  noFitCta: loc("Write to us", "আমাদের লিখুন"),
  sampleNote: loc("Sample jobs for review — not real openings.", "রিভিউয়ের জন্য নমুনা পদ — আসল নিয়োগ নয়।"),
};
