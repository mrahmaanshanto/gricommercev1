import { loc, type Localized } from "@/i18n/types";

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

export const MEGA_MENUS: MegaMenu[] = [
  {
    id: "products",
    label: loc("Products", "প্রোডাক্ট"),
    columns: [
      {
        title: loc("Commerce", "কমার্স"),
        accent: "brand",
        links: [
          {
            label: loc("Online Store", "অনলাইন স্টোর"),
            description: loc("Themes, checkout and your own domain", "থিম, চেকআউট আর নিজের ডোমেইন"),
            href: "/features/storefront",
            icon: "Store",
          },
          {
            label: loc("Orders", "অর্ডার"),
            description: loc("Every channel in one workflow", "সব চ্যানেলের অর্ডার এক জায়গায়"),
            href: "/features/orders",
            icon: "ClipboardList",
          },
          {
            label: loc("Products", "প্রোডাক্ট"),
            description: loc("Variants, pricing and media", "ভ্যারিয়েন্ট, দাম আর ছবি"),
            href: "/features/products",
            icon: "Package",
          },
          {
            label: loc("Inventory", "ইনভেন্টরি"),
            description: loc("Know what you have, and why", "কত স্টক আছে, কেন আছে"),
            href: "/features/inventory",
            icon: "Boxes",
          },
          {
            label: loc("Customers", "কাস্টমার"),
            description: loc("One profile behind every order", "প্রতিটি অর্ডারের পেছনের মানুষটি"),
            href: "/features/customers",
            icon: "Users",
          },
          {
            label: loc("Payments", "পেমেন্ট"),
            description: loc("Online, mobile wallet and cash", "অনলাইন, মোবাইল ওয়ালেট আর ক্যাশ"),
            href: "/features/payments",
            icon: "CreditCard",
          },
        ],
      },
      {
        title: loc("Sell Everywhere", "সব জায়গায় বিক্রি"),
        accent: "cyan",
        links: [
          {
            label: loc("POS", "পিওএস"),
            description: loc("Counter selling with shared stock", "দোকানের কাউন্টার, একই স্টক"),
            href: "/features/pos",
            icon: "ScanBarcode",
          },
          {
            label: loc("Landing Pages", "ল্যান্ডিং পেজ"),
            description: loc("Built for ad traffic", "অ্যাড ট্রাফিকের জন্য তৈরি"),
            href: "/features/landing-pages",
            icon: "LayoutTemplate",
          },
          {
            label: loc("Wholesale", "হোলসেল"),
            description: loc("Dealer pricing and credit", "ডিলার প্রাইস আর বাকি"),
            href: "/features/wholesale",
            icon: "Handshake",
          },
          {
            label: loc("Warehouse", "ওয়্যারহাউস"),
            description: loc("Multiple locations and transfers", "একাধিক গুদাম আর ট্রান্সফার"),
            href: "/features/warehouse",
            icon: "Warehouse",
          },
        ],
      },
      {
        title: loc("Growth", "গ্রোথ"),
        accent: "mint",
        links: [
          {
            label: loc("Omnichannel Inbox", "সব মেসেজ এক ইনবক্সে"),
            description: loc("Messenger, WhatsApp and store chat", "মেসেঞ্জার, হোয়াটসঅ্যাপ আর স্টোর চ্যাট"),
            href: "/features/omnichannel",
            icon: "MessagesSquare",
          },
          {
            label: loc("Marketing Analytics", "মার্কেটিং অ্যানালিটিক্স"),
            description: loc("What your ads actually earned", "অ্যাড থেকে আসলে কত এলো"),
            href: "/features/analytics",
            icon: "ChartNoAxesCombined",
          },
          {
            label: loc("Cart Recovery", "কার্ট রিকভারি"),
            description: loc("Bring abandoned carts back", "ফেলে যাওয়া কার্ট ফিরিয়ে আনুন"),
            href: "/features/cart-recovery",
            icon: "ShoppingCart",
          },
          {
            label: loc("Reviews", "রিভিউ"),
            description: loc("Collect and publish with control", "রিভিউ সংগ্রহ ও প্রকাশ"),
            href: "/features/reviews",
            icon: "Star",
          },
          {
            label: loc("AI Product Creation", "এআই প্রোডাক্ট ড্রাফট"),
            description: loc("Draft listings, you approve", "ড্রাফট এআই করে, অনুমোদন আপনার"),
            href: "/features/ai-product-creation",
            icon: "Sparkles",
          },
        ],
      },
      {
        title: loc("Operations", "অপারেশন"),
        accent: "butter",
        links: [
          {
            label: loc("Reports", "রিপোর্ট"),
            description: loc("Sales, stock, cash and profit", "বিক্রি, স্টক, ক্যাশ আর লাভ"),
            href: "/features/reports",
            icon: "FileBarChart",
          },
          {
            label: loc("Courier", "কুরিয়ার"),
            description: loc("Booking, tracking and returns", "বুকিং, ট্র্যাকিং আর রিটার্ন"),
            href: "/features/courier",
            icon: "Truck",
          },
          {
            label: loc("Cash & Expenses", "ক্যাশ ও খরচ"),
            description: loc("Including the COD ledger", "ক্যাশ অন ডেলিভারি হিসাবসহ"),
            href: "/features/cash-and-expenses",
            icon: "Wallet",
          },
          {
            label: loc("Staff & Permissions", "স্টাফ ও অনুমতি"),
            description: loc("Roles, limits and audit trail", "রোল, সীমা আর অডিট"),
            href: "/features/staff-permissions",
            icon: "ShieldCheck",
          },
        ],
      },
    ],
    feature: {
      eyebrow: loc("Signature", "বিশেষ"),
      title: loc("Delivered orders, not just clicks", "ক্লিক নয় — ডেলিভার হওয়া অর্ডার"),
      body: loc(
        "GridCommerce reads your own order data next to Meta, Google and TikTok — and never merges the two.",
        "মেটা, গুগল আর টিকটকের হিসাব আর আপনার নিজের অর্ডারের হিসাব — পাশাপাশি, মেশানো নয়।",
      ),
      href: "/features/analytics",
      cta: loc("See how measurement works", "মাপার পদ্ধতি দেখুন"),
    },
  },
  {
    id: "solutions",
    label: loc("Solutions", "সল্যুশন"),
    columns: [
      {
        title: loc("By how you sell", "কীভাবে বিক্রি করেন"),
        accent: "brand",
        links: [
          {
            label: loc("Online Commerce", "অনলাইন কমার্স"),
            description: loc("Facebook-first sellers and D2C brands", "ফেসবুক সেলার আর ডিটুসি ব্র্যান্ড"),
            href: "/solutions/online-commerce",
            icon: "Globe",
          },
          {
            label: loc("Retail Commerce", "রিটেইল কমার্স"),
            description: loc("Shops, counters and branches", "দোকান, কাউন্টার আর ব্রাঞ্চ"),
            href: "/solutions/retail-commerce",
            icon: "Store",
          },
          {
            label: loc("Wholesale Commerce", "হোলসেল কমার্স"),
            description: loc("Dealers, credit and collections", "ডিলার, বাকি আর আদায়"),
            href: "/solutions/wholesale-commerce",
            icon: "Handshake",
          },
        ],
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
  { label: loc("Pricing", "প্রাইসিং"), href: "/pricing" },
];

/* ---------------------------------------------------------------- */
/* Footer                                                            */
/* ---------------------------------------------------------------- */

export type FooterColumn = { titleKey: "product" | "solutions" | "resources" | "company" | "legal"; links: NavLink[] };

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    titleKey: "product",
    links: [
      { label: loc("Online Store", "অনলাইন স্টোর"), href: "/features/storefront" },
      { label: loc("Orders", "অর্ডার"), href: "/features/orders" },
      { label: loc("Inventory", "ইনভেন্টরি"), href: "/features/inventory" },
      { label: loc("POS", "পিওএস"), href: "/features/pos" },
      { label: loc("Wholesale", "হোলসেল"), href: "/features/wholesale" },
      { label: loc("Courier", "কুরিয়ার"), href: "/features/courier" },
      { label: loc("Omnichannel Inbox", "অমনিচ্যানেল ইনবক্স"), href: "/features/omnichannel" },
      { label: loc("Marketing Analytics", "মার্কেটিং অ্যানালিটিক্স"), href: "/features/analytics" },
      { label: loc("Landing Pages", "ল্যান্ডিং পেজ"), href: "/features/landing-pages" },
      { label: loc("AI Product Creation", "এআই প্রোডাক্ট ড্রাফট"), href: "/features/ai-product-creation" },
    ],
  },
  {
    titleKey: "solutions",
    links: [
      { label: loc("Online Commerce", "অনলাইন কমার্স"), href: "/solutions/online-commerce" },
      { label: loc("Retail Commerce", "রিটেইল কমার্স"), href: "/solutions/retail-commerce" },
      { label: loc("Wholesale Commerce", "হোলসেল কমার্স"), href: "/solutions/wholesale-commerce" },
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
