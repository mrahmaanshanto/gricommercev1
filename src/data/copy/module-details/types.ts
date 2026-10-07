import type { Localized } from "@/i18n/types";

/** A real capture of the merchant app, stored under /public/modules/<slug>/. */
export type Shot = {
  src: string;
  width: number;
  height: number;
  alt: Localized;
};

/** A logo already in /public/integrations (or /public/brand). */
export type Logo = { name: string; src: string };

/**
 * Everything a module page shows beyond the basics in `modules.ts`:
 * the hero captures, the integrations it works with, the detailed feature
 * sections (each with a capture cropped to its point), the "How it works"
 * workflow and the questions people ask. Copy follows the homepage voice:
 * very simple words, short sentences, the seller's own keywords.
 */
export type ModuleDetail = {
  /** Replaces the hero title and body in modules.ts with the latest wording. */
  hero?: { title: Localized; body: Localized };
  /** Replaces the three benefit cards in modules.ts (exactly three; icon is a lucide name from components/ui/Icon). */
  benefits?: { icon: string; title: Localized; body: Localized }[];
  /** Full desktop screen of the module's main page (1440 × 900 at 2×). */
  heroShot: Shot;
  /** The same job in the phone app, in its device frame (390 × 844 at 3×), when the phone app has it. */
  heroPhone?: Shot;
  /** "Works with" logos, only for things the app really connects to. */
  logos?: { title: Localized; items: Logo[] };
  /** 3–5 sections, each one feature told with a focused capture. */
  sections: {
    title: Localized;
    body: Localized;
    points: Localized[];
    /** A crop of the desktop app around this feature. */
    shot: Shot;
    /** Optional phone-app capture for the same feature. */
    phone?: Shot;
    /** Optional logos shown with this section (e.g. couriers, channels). */
    logos?: Logo[];
  }[];
  /** 4–6 steps for "How it works"; `icon` is a lucide name from components/ui/Icon. */
  workflow: { icon: string; title: Localized; body: Localized }[];
  /** Overview video URL (YouTube embed or .mp4). Empty until the video is made. */
  video?: string;
  /** 3–5 questions and answers. */
  faqs: { q: Localized; a: Localized }[];
};
