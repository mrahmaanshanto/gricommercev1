/**
 * Hero showcase copy — the three auto-playing slides under the H02 headline.
 *
 * Only the tab labels and captions are localised. The text inside the product
 * mockups is the merchant app's own interface (English, with Banglish chat
 * messages as customers actually write them) and stays as the app shows it.
 * Every name and figure in the mockups is demo data and the stage says so.
 */
import { loc } from "@/i18n/types";

export const HERO_SHOWCASE = {
  label: loc("Product tour", "প্রোডাক্ট ট্যুর"),
  slides: {
    customers: {
      tab: loc("Customers", "কাস্টমার"),
      title: loc("Every customer, one profile", "প্রতিটি কাস্টমার, একটি প্রোফাইলে"),
      caption: loc(
        "Orders, spend, returns and what they looked at, in one view.",
        "অর্ডার, খরচ, রিটার্ন ও কী দেখেছেন, সব এক জায়গায়।",
      ),
    },
    inbox: {
      tab: loc("Inbox", "ইনবক্স"),
      title: loc("Every message, one inbox", "সব মেসেজ, একটি ইনবক্সে"),
      caption: loc(
        "Messenger, WhatsApp, Instagram and comments together, with AI-drafted replies.",
        "মেসেঞ্জার, হোয়াটসঅ্যাপ, ইনস্টাগ্রাম ও কমেন্ট একসঙ্গে, AI-এর তৈরি রিপ্লাইসহ।",
      ),
    },
    workflow: {
      tab: loc("Order to bank", "অর্ডার থেকে ব্যাংক"),
      title: loc("From order to bank, on its own", "অর্ডার থেকে ব্যাংক, স্বয়ংক্রিয়ভাবে"),
      caption: loc(
        "AI confirms the order, the courier delivers, and the COD amount reaches your books.",
        "AI অর্ডার কনফার্ম করে, কুরিয়ার ডেলিভারি দেয়, আর COD-এর টাকা হিসাবে যোগ হয়।",
      ),
    },
  },
  workflowSteps: [
    loc("Order received", "অর্ডার এসেছে"),
    loc("AI calls the customer", "AI কাস্টমারকে কল করে"),
    loc("Confirmed", "কনফার্মড"),
    loc("Courier dispatched", "কুরিয়ারে পাঠানো হয়েছে"),
    loc("Delivered", "ডেলিভারড"),
    loc("COD collected", "COD সংগ্রহ"),
    loc("Payout received", "পেআউট এসেছে"),
    loc("Added to bank and books", "ব্যাংক ও হিসাবে যোগ"),
  ],
  pause: loc("Pause tour", "ট্যুর থামান"),
  play: loc("Play tour", "ট্যুর চালু করুন"),
};
