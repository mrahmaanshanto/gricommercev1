import { loc, type Localized } from "@/i18n/types";
import { BUSINESS_TYPES_COPY } from "@/data/copy/home";
import { MODULES } from "@/data/copy/modules";
import { FEATURES } from "@/data/sample";

export type NavLink = {
  label: Localized;
  description?: Localized;
  href: string;
  /** lucide-react icon name, resolved in the UI layer */
  icon?: string;
  badge?: Localized;
};

export type NavColumn = {
  title: Localized;
  accent: "brand" | "cyan" | "mint" | "butter" | "lavender";
  links: NavLink[];
};

export type MegaMenu = {
  id: "products" | "solutions" | "resources";
  label: Localized;
  columns: NavColumn[];
  /** Optional promotional rail on the right of the mega menu */
  feature?: {
    eyebrow: Localized;
    title: Localized;
    body: Localized;
    href: string;
    cta: Localized;
  };
};

/** The primary modules, in the order `MODULES` sets, described by their
 *  one-line summary. Switched-off modules (wholesale) are not in `MODULES`. */
const MODULE_LINKS: NavLink[] = MODULES.map((m) => ({
  label: m.name,
  description: m.summary,
  href: `/features/${m.slug}`,
  icon: m.icon,
}));

/** Supporting feature pages, generated from the registry so the menu never
 *  links to a page that does not exist. Each sits inside one module. */
const SUPPORTING_LINKS: NavLink[] = FEATURES.map((f) => ({
  label: f.name,
  href: `/features/${f.slug}`,
  icon: f.icon,
}));

/** A continuation column carries no heading of its own; the non-breaking space
 *  keeps its links aligned with the column beside it. */
const CONTINUED = loc(" ", " ");

export const MEGA_MENUS: MegaMenu[] = [
  {
    id: "products",
    label: loc("Modules", "মডিউল"),
    columns: [
      { title: loc("Modules", "মডিউল"), accent: "brand", links: MODULE_LINKS.slice(0, 5) },
      { title: CONTINUED, accent: "brand", links: MODULE_LINKS.slice(5, 10) },
      { title: CONTINUED, accent: "brand", links: MODULE_LINKS.slice(10) },
      { title: loc("Supporting features", "সহায়ক ফিচার"), accent: "cyan", links: SUPPORTING_LINKS },
    ],
  },
  {
    id: "solutions",
    label: loc("Business Types", "ব্যবসার ধরন"),
    columns: [
      {
        title: loc("By how you sell", "কীভাবে বিক্রি করেন"),
        accent: "brand",
        links: BUSINESS_TYPES_COPY.types.map((type) => ({ label: type.title, href: type.href, icon: type.icon })),
      },
      {
        title: loc("Mixed businesses", "মিশ্র ব্যবসা"),
        accent: "cyan",
        links: [
          {
            label: loc("Online + Retail", "অনলাইন + রিটেইল"),
            description: loc("One stock pool across both", "দুই জায়গার স্টক একটাই"),
            href: "/solutions/online-commerce#online-retail",
            icon: "Layers",
          },
          {
            label: loc("Omnichannel Commerce", "অমনিচ্যানেল কমার্স"),
            description: loc("Every channel, one operation", "সব চ্যানেল, এক অপারেশন"),
            href: "/solutions/retail-commerce#omnichannel",
            icon: "Network",
          },
        ],
      },
    ],
  },
  {
    id: "resources",
    label: loc("Resources", "রিসোর্স"),
    columns: [
      {
        title: loc("Learn", "শিখুন"),
        accent: "brand",
        links: [
          { label: loc("Help Centre", "হেল্প সেন্টার"), href: "/help", icon: "LifeBuoy" },
          { label: loc("Blog", "ব্লগ"), href: "/blog", icon: "Newspaper" },
          { label: loc("Guides", "গাইড"), href: "/help/guides", icon: "BookOpen" },
        ],
      },
      {
        title: loc("Move to GridCommerce", "গ্রিডকমার্সে আসুন"),
        accent: "mint",
        links: [
          { label: loc("Migration", "মাইগ্রেশন"), href: "/migration", icon: "ArrowRightLeft" },
          { label: loc("Customer Stories", "মার্চেন্ট স্টোরি"), href: "/customers", icon: "Quote" },
          { label: loc("Themes", "থিম"), href: "/themes", icon: "Palette" },
        ],
      },
      {
        title: loc("Get in touch", "যোগাযোগ"),
        accent: "butter",
        links: [
          { label: loc("Contact", "যোগাযোগ"), href: "/contact", icon: "Mail" },
          { label: loc("Platform Status", "প্ল্যাটফর্ম স্ট্যাটাস"), href: "/status", icon: "Activity" },
          { label: loc("About", "আমাদের কথা"), href: "/about", icon: "Building2" },
        ],
      },
    ],
  },
];

export const PRIMARY_NAV: { label: Localized; href: string }[] = [
  { label: loc("Pricing", "প্রাইসিং ও প্ল্যান"), href: "/pricing" },
];

/* ---------------------------------------------------------------- */
/* Footer                                                            */
/* ---------------------------------------------------------------- */

export type FooterColumn = { titleKey: "product" | "solutions" | "resources" | "company" | "legal"; links: NavLink[] };

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    titleKey: "product",
    links: MODULES.map((m) => ({ label: m.name, href: `/features/${m.slug}` })),
  },
  {
    titleKey: "solutions",
    links: [
      ...BUSINESS_TYPES_COPY.types.map((type) => ({ label: type.title, href: type.href })),
      { label: loc("Facebook Sellers", "ফেসবুক সেলার"), href: "/solutions/online-commerce#facebook-sellers" },
      { label: loc("Multi-location Businesses", "একাধিক ব্রাঞ্চের ব্যবসা"), href: "/solutions/retail-commerce#branches" },
    ],
  },
  {
    titleKey: "resources",
    links: [
      { label: loc("Help Centre", "হেল্প সেন্টার"), href: "/help" },
      { label: loc("Blog", "ব্লগ"), href: "/blog" },
      { label: loc("Migration", "মাইগ্রেশন"), href: "/migration" },
      { label: loc("Customer Stories", "মার্চেন্ট স্টোরি"), href: "/customers" },
      { label: loc("Guides", "গাইড"), href: "/help/guides" },
      { label: loc("System Status", "সিস্টেম স্ট্যাটাস"), href: "/status" },
    ],
  },
  {
    titleKey: "company",
    links: [
      { label: loc("About", "আমাদের কথা"), href: "/about" },
      { label: loc("Contact", "যোগাযোগ"), href: "/contact" },
      { label: loc("Careers", "ক্যারিয়ার"), href: "/about#careers" },
      { label: loc("Partners", "পার্টনার"), href: "/contact?topic=partnership" },
    ],
  },
  {
    titleKey: "legal",
    links: [
      { label: loc("Terms", "শর্তাবলি"), href: "/terms" },
      { label: loc("Privacy", "প্রাইভেসি"), href: "/privacy" },
      { label: loc("Refund Policy", "রিফান্ড নীতি"), href: "/refund-policy" },
      { label: loc("Data Policy", "ডেটা নীতি"), href: "/data-policy" },
    ],
  },
];
