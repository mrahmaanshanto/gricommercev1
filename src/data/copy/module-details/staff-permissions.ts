import { loc } from "@/i18n/types";
import type { ModuleDetail } from "./types";

/**
 * Staff & HR module page. Every claim and figure comes from the merchant app's
 * Staff & HR screens (HR dashboard, staff profile, attendance devices, shifts,
 * leave, payroll) and its role list (lib/team.js: 13 roles).
 */
export const detail: ModuleDetail = {
  hero: {
    title: loc(
      "Staff, attendance and salary in one place.",
      "স্টাফ, হাজিরা আর বেতন—সব এক জায়গায়।",
    ),
    body: loc(
      "Attendance comes from fingerprint and face machines, POS log-in or the staff app. Lates, leave, overtime and loan cuts go into the salary sheet by themselves. The owner approves, then you pay by bank, bKash or cash. Each person sees only what their role needs, so a cashier never sees cost price.",
      "হাজিরা আসে ফিঙ্গারপ্রিন্ট ও ফেস মেশিন, POS লগ-ইন বা স্টাফ অ্যাপ থেকে। দেরি, ছুটি, ওভারটাইম আর লোনের কিস্তি নিজে থেকেই বেতনের শিটে বসে যায়। মালিক অনুমোদন দিলে ব্যাংক, বিকাশ বা ক্যাশে বেতন দিন। প্রত্যেকে শুধু নিজের কাজের জিনিস দেখেন—ক্যাশিয়ার কখনো কেনা দাম দেখেন না।",
    ),
  },
  benefits: [
    {
      icon: "CalendarCheck",
      title: loc("Attendance without the khata", "খাতা ছাড়াই হাজিরা"),
      body: loc(
        "Punches come in from the machines every few minutes. See who is in, who is late and who is on leave, for today and for the whole month.",
        "কয়েক মিনিট পরপর মেশিন থেকে হাজিরা চলে আসে। কে এসেছেন, কে দেরি করেছেন, কে ছুটিতে—আজকের আর পুরো মাসের হিসাব এক নজরে।",
      ),
    },
    {
      icon: "Banknote",
      title: loc("Salary that adds itself up", "বেতনের হিসাব নিজেই হয়"),
      body: loc(
        "Lates, absences, overtime, incentives and loan cuts are already in the sheet. Check it, get the owner’s approval, pay, then print payslips.",
        "দেরি, অনুপস্থিতি, ওভারটাইম, ইনসেনটিভ আর লোনের কাটা আগেই শিটে থাকে। দেখে নিন, মালিকের অনুমোদন নিন, বেতন দিন, তারপর পে-স্লিপ প্রিন্ট করুন।",
      ),
    },
    {
      icon: "Lock",
      title: loc("Each person sees only their part", "যার যতটুকু দরকার, ততটুকুই"),
      body: loc(
        "Give each person a role. Hide cost price, mask customer phone numbers and set how much discount or refund they can give without asking.",
        "প্রত্যেককে একটা রোল দিন। কেনা দাম লুকান, কাস্টমারের ফোন নম্বর ঢেকে রাখুন, আর জিজ্ঞেস না করে কতটুকু ডিসকাউন্ট বা রিফান্ড দিতে পারবেন তা ঠিক করুন।",
      ),
    },
  ],
  heroShot: {
    src: "/modules/staff-permissions/hero.webp",
    width: 2880,
    height: 1800,
    alt: loc(
      "HR dashboard with today’s attendance, the September payroll, leave waiting for approval and who is on duty at each branch",
      "HR ড্যাশবোর্ড: আজকের হাজিরা, সেপ্টেম্বরের বেতন, অনুমোদনের অপেক্ষায় থাকা ছুটি আর কোন শাখায় কে ডিউটিতে",
    ),
  },
  sections: [
    {
      title: loc("One profile for every staff member", "প্রতিটি স্টাফের একটি প্রোফাইল"),
      body: loc(
        "Open a staff member and see everything about them in one place: the last 30 days, their shift, salary, leave, documents and login.",
        "একজন স্টাফকে খুললেই সব এক জায়গায়: গত ৩০ দিনের হাজিরা, শিফট, বেতন, ছুটি, কাগজপত্র আর লগ-ইন।",
      ),
      points: [
        loc("Present, late, absent and overtime for the last 30 days", "গত ৩০ দিনের উপস্থিতি, দেরি, অনুপস্থিতি ও ওভারটাইম"),
        loc("Usual shift, grace time, weekly off and how they clock in", "নিয়মিত শিফট, গ্রেস টাইম, সাপ্তাহিক ছুটি আর কীভাবে হাজিরা দেন"),
        loc("Job and pay history, documents and an ID card with QR", "চাকরি ও বেতনের ইতিহাস, কাগজপত্র আর QR কোডসহ ID কার্ড"),
        loc("Clear status: active, on probation or suspended", "স্পষ্ট স্ট্যাটাস: সক্রিয়, প্রবেশনে বা সাসপেন্ড"),
      ],
      shot: {
        src: "/modules/staff-permissions/s1.webp",
        width: 2220,
        height: 668,
        alt: loc(
          "Profile of Sadia Akter, cashier at Dhanmondi branch, with her last 30 days of attendance and her morning shift",
          "ধানমন্ডি শাখার ক্যাশিয়ার সাদিয়া আক্তারের প্রোফাইল: গত ৩০ দিনের হাজিরা আর সকালের শিফট",
        ),
      },
    },
    {
      title: loc("Attendance from fingerprint and face machines", "ফিঙ্গারপ্রিন্ট ও ফেস মেশিন থেকে হাজিরা"),
      body: loc(
        "Connect the machines at each branch and warehouse, like ZKTeco. Punches sync on their own. If a machine goes offline, you see it at once, and staff can clock in with the staff app.",
        "প্রতিটি শাখা ও গুদামের মেশিন (যেমন ZKTeco) যুক্ত করুন। হাজিরা নিজে থেকেই চলে আসে। কোনো মেশিন বন্ধ হলে সঙ্গে সঙ্গে দেখবেন, আর স্টাফরা তখন স্টাফ অ্যাপে হাজিরা দিতে পারেন।",
      ),
      points: [
        loc("Face, fingerprint or both, on each machine", "প্রতিটি মেশিনে ফেস, ফিঙ্গারপ্রিন্ট বা দুটোই"),
        loc("See who is enrolled on which machine", "কে কোন মেশিনে নিবন্ধিত, দেখে নিন"),
        loc("POS log-in and the staff app count as attendance too", "POS লগ-ইন আর স্টাফ অ্যাপেও হাজিরা হয়"),
        loc("A month register shows present, late, leave and holidays", "মাসিক রেজিস্টারে উপস্থিতি, দেরি, ছুটি আর ছুটির দিন"),
      ],
      shot: {
        src: "/modules/staff-permissions/s2.webp",
        width: 1470,
        height: 1220,
        alt: loc(
          "Attendance machines at Dhanmondi, Mirpur and the head office, two online and one offline",
          "ধানমন্ডি, মিরপুর আর হেড অফিসের হাজিরা মেশিন—দুটি অনলাইনে, একটি অফলাইনে",
        ),
      },
    },
    {
      title: loc("Shifts and leave without clashes", "শিফট আর ছুটিতে কোনো গোলমাল নেই"),
      body: loc(
        "Plan the week person by person. The roster warns you about leave clashes, double shifts and branches that are short of staff.",
        "প্রত্যেকের জন্য সপ্তাহের শিফট সাজান। ছুটির সঙ্গে শিফটের সংঘাত, ডাবল শিফট বা কোনো শাখায় লোক কম থাকলে রোস্টার আগেই সতর্ক করে।",
      ),
      points: [
        loc("Copy last week, then publish the roster", "গত সপ্তাহের রোস্টার কপি করে প্রকাশ করুন"),
        loc("Approve leave, or apply for a staff member", "ছুটি অনুমোদন করুন, বা স্টাফের হয়ে আবেদন করুন"),
        loc("Leave balance for casual, sick and earned leave", "নৈমিত্তিক, অসুস্থতা ও অর্জিত ছুটির ব্যালেন্স"),
        loc("Public holidays show on the roster by themselves", "সরকারি ছুটি নিজে থেকেই রোস্টারে দেখায়"),
      ],
      shot: {
        src: "/modules/staff-permissions/s3.webp",
        width: 1600,
        height: 870,
        alt: loc(
          "Weekly roster with morning and evening shifts, a double shift and a sick leave marked on the roster",
          "সাপ্তাহিক রোস্টার: সকাল ও সন্ধ্যার শিফট, একটি ডাবল শিফট আর রোস্টারে চিহ্নিত অসুস্থতার ছুটি",
        ),
      },
    },
    {
      title: loc("Salary in five clear steps", "পাঁচ ধাপে বেতন"),
      body: loc(
        "Check attendance, review the sheet, get the owner’s approval, pay, then print payslips. Cuts for lates and absences, overtime and loan instalments are already in the sheet.",
        "হাজিরা দেখুন, শিট মিলিয়ে নিন, মালিকের অনুমোদন নিন, বেতন দিন, তারপর পে-স্লিপ প্রিন্ট করুন। দেরি ও অনুপস্থিতির কাটা, ওভারটাইম আর লোনের কিস্তি আগেই শিটে থাকে।",
      ),
      points: [
        loc("Pay by bank, bKash or cash, with totals for each", "ব্যাংক, বিকাশ বা ক্যাশে বেতন, আলাদা আলাদা মোটসহ"),
        loc("Warnings before you pay, like a missing bank account", "বেতনের আগে সতর্কতা, যেমন ব্যাংক অ্যাকাউন্ট নম্বর নেই"),
        loc("A separate festival bonus run for Eid", "ঈদের জন্য আলাদা উৎসব বোনাস"),
        loc("Approved salaries show in Bills to pay", "অনুমোদিত বেতন ‘পরিশোধযোগ্য বিল’-এ চলে যায়"),
      ],
      shot: {
        src: "/modules/staff-permissions/s4.webp",
        width: 2210,
        height: 1280,
        alt: loc(
          "September 2026 payroll at the Pay step: ৳2,84,771 approved, split between bank, MFS and cash",
          "সেপ্টেম্বর ২০২৬-এর বেতন, ‘পে’ ধাপে: অনুমোদিত ৳২,৮৪,৭৭১—ব্যাংক, MFS আর ক্যাশে ভাগ করা",
        ),
      },
    },
    {
      title: loc("Decide who sees what", "কে কী দেখবে, আপনি ঠিক করুন"),
      body: loc(
        "Give each person a role, like cashier, shop manager or warehouse manager. The role decides which pages they can open. Then set limits for each person.",
        "প্রত্যেককে একটা রোল দিন—যেমন ক্যাশিয়ার, শপ ম্যানেজার বা গুদাম ম্যানেজার। রোল ঠিক করে কে কোন পেজ খুলতে পারবেন। এরপর প্রত্যেকের জন্য আলাদা সীমা দিন।",
      ),
      points: [
        loc("Hide cost price and mask customer phone numbers", "কেনা দাম লুকান, কাস্টমারের ফোন নম্বর ঢেকে রাখুন"),
        loc("Set discount and refund limits without approval", "অনুমোদন ছাড়া কত ডিসকাউন্ট ও রিফান্ড, তার সীমা দিন"),
        loc("Keep a person to one branch only", "কাউকে শুধু একটি শাখায় সীমিত রাখুন"),
        loc("Two-step sign-in and ‘sign out everywhere’", "দুই ধাপের সাইন-ইন আর ‘সব জায়গা থেকে সাইন আউট’"),
      ],
      shot: {
        src: "/modules/staff-permissions/s5.webp",
        width: 2240,
        height: 680,
        alt: loc(
          "Login and access for a cashier: Dhanmondi branch only, discount up to 5%, refund up to ৳2,000, cost price hidden",
          "একজন ক্যাশিয়ারের লগ-ইন ও অ্যাক্সেস: শুধু ধানমন্ডি শাখা, ৫% পর্যন্ত ডিসকাউন্ট, ৳২,০০০ পর্যন্ত রিফান্ড, কেনা দাম লুকানো",
        ),
      },
    },
  ],
  workflow: [
    {
      icon: "Users",
      title: loc("Add staff and roles", "স্টাফ ও রোল যোগ করুন"),
      body: loc(
        "Add each person with their job, branch, salary and role.",
        "প্রত্যেকের পদ, শাখা, বেতন আর রোলসহ যোগ করুন।",
      ),
    },
    {
      icon: "CalendarCheck",
      title: loc("Connect attendance", "হাজিরা যুক্ত করুন"),
      body: loc(
        "Connect the machines, or let staff clock in with POS log-in or the staff app.",
        "মেশিন যুক্ত করুন, অথবা POS লগ-ইন বা স্টাফ অ্যাপে হাজিরা নিন।",
      ),
    },
    {
      icon: "CalendarClock",
      title: loc("Plan shifts and leave", "শিফট ও ছুটি সাজান"),
      body: loc(
        "Publish the weekly roster and approve leave with clash warnings.",
        "সাপ্তাহিক রোস্টার প্রকাশ করুন, সতর্কতা দেখে ছুটি অনুমোদন দিন।",
      ),
    },
    {
      icon: "ClipboardCheck",
      title: loc("Check and approve salary", "বেতন মিলিয়ে অনুমোদন"),
      body: loc(
        "Review the sheet with cuts, overtime and loans, then the owner approves.",
        "কাটা, ওভারটাইম আর লোনসহ শিট দেখুন, তারপর মালিক অনুমোদন দেন।",
      ),
    },
    {
      icon: "Banknote",
      title: loc("Pay and print payslips", "বেতন দিন, পে-স্লিপ নিন"),
      body: loc(
        "Pay by bank, bKash or cash and print a payslip for each person.",
        "ব্যাংক, বিকাশ বা ক্যাশে বেতন দিন, প্রত্যেকের পে-স্লিপ প্রিন্ট করুন।",
      ),
    },
  ],
  faqs: [
    {
      q: loc("Can my cashier see the cost price?", "আমার ক্যাশিয়ার কি কেনা দাম দেখতে পাবেন?"),
      a: loc(
        "Not unless you allow it. On each staff profile, under Login & access, you choose whether cost price is hidden and whether customer phone numbers are masked.",
        "আপনি অনুমতি না দিলে নয়। প্রতিটি স্টাফ প্রোফাইলের ‘লগ-ইন ও অ্যাক্সেস’-এ ঠিক করুন কেনা দাম লুকানো থাকবে কিনা, আর কাস্টমারের ফোন নম্বর ঢাকা থাকবে কিনা।",
      ),
    },
    {
      q: loc("Do I need a fingerprint machine?", "ফিঙ্গারপ্রিন্ট মেশিন কি লাগবেই?"),
      a: loc(
        "No. Staff can also clock in with their POS log-in or the staff app. If you have machines, connect them and punches come in by themselves.",
        "না। স্টাফরা POS লগ-ইন বা স্টাফ অ্যাপ দিয়েও হাজিরা দিতে পারেন। মেশিন থাকলে যুক্ত করুন, হাজিরা নিজে থেকেই চলে আসবে।",
      ),
    },
    {
      q: loc("Can I give a salary advance or a loan?", "বেতনের অগ্রিম বা লোন দেওয়া যায়?"),
      a: loc(
        "Yes. Record the loan or advance and the parts to pay back. Each month the instalment is cut from the salary sheet.",
        "হ্যাঁ। লোন বা অগ্রিম আর কয় কিস্তিতে শোধ হবে তা লিখে রাখুন। প্রতি মাসে কিস্তি বেতনের শিট থেকে কেটে যায়।",
      ),
    },
    {
      q: loc("Does paying salaries show in my accounts?", "বেতন দিলে কি হিসাবে দেখা যায়?"),
      a: loc(
        "Yes. When the owner approves payroll, the salaries show in Bills to pay. When you pay, the money leaving your bank, bKash or cash is recorded.",
        "হ্যাঁ। মালিক বেতন অনুমোদন দিলে তা ‘পরিশোধযোগ্য বিল’-এ চলে যায়। বেতন দিলে ব্যাংক, বিকাশ বা ক্যাশ থেকে টাকা যাওয়ার রেকর্ড থাকে।",
      ),
    },
    {
      q: loc("Can one person have two roles?", "একজনের কি দুটি রোল থাকতে পারে?"),
      a: loc(
        "Yes. There are 13 ready roles, from shop seller to HR and CEO. One person can hold more than one, and they can open the pages of all their roles.",
        "হ্যাঁ। শপ সেলার থেকে HR ও CEO পর্যন্ত ১৩টি তৈরি রোল আছে। একজন একাধিক রোল পেতে পারেন, আর সব রোলের পেজই খুলতে পারবেন।",
      ),
    },
  ],
};
