/**
 * Generates the route tree required by the GridCommerce brief.
 * Each generated page carries real metadata + breadcrumb and renders
 * <PageShell/> until its phase is built. Run once; then edit pages directly.
 *
 *   node scripts/gen-routes.mjs
 */
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const APP = "src/app";

/** [route, title, description, phase, breadcrumb[], scope[]] */
const ROUTES = [
  ["/features", "Features", "Everything GridCommerce does, grouped by how you actually run the business: sell, manage, online, retail, wholesale and growth.", "Phase 4", [["Features", "/features"]], ["Sell / Manage / Online / Retail / Wholesale / Growth groups", "Per-capability cards with merchant-language headlines", "Cross-links into individual feature pages"]],

  ["/features/orders", "Order management", "Every order from your website, landing pages, Facebook, WhatsApp, phone and counter — in one workflow, from confirmation to delivered.", "Phase 4", [["Features", "/features"], ["Orders", "/features/orders"]], ["Order Page screenshot as hero", "Channel chips flowing into the orders list", "Confirmation, payment, courier, return and COD states"]],
  ["/features/omnichannel", "Omnichannel inbox", "Reply to Messenger, WhatsApp, Instagram, store chat, SMS and email from one inbox — with the customer's orders beside every conversation.", "Phase 4", [["Features", "/features"], ["Omnichannel inbox", "/features/omnichannel"]], ["Omnichannel Messaging screenshot as hero", "Conversation to order sequence", "Assignment, saved replies, internal notes, response tracking"]],
  ["/features/pos", "Point of sale", "Your counter and your online store finally share the same stock, the same customers and the same reports.", "Phase 4", [["Features", "/features"], ["POS", "/features/pos"]], ["POS screenshot as hero", "Product to sale to stock-updated sequence", "Barcode, split payment, shifts, cash reconciliation, branches"]],
  ["/features/inventory", "Inventory", "Know exactly how much stock you have — and why it changed.", "Phase 4", [["Features", "/features"], ["Inventory", "/features/inventory"]], ["Movement ledger explanation", "Multi-location and transfers", "Low stock and reorder signals"]],
  ["/features/courier", "Courier and cash on delivery", "Know where the parcel is — and where your COD money is.", "Phase 4", [["Features", "/features"], ["Courier", "/features/courier"]], ["Delivery lifecycle visual", "Failed delivery, charge variance, returns", "Remittance and COD outstanding"]],
  ["/features/landing-pages", "Landing pages", "Build pages for ad traffic without waiting for a developer.", "Phase 4", [["Features", "/features"], ["Landing pages", "/features/landing-pages"]], ["Section library and drag-drop demo", "Desktop / tablet / mobile preview switch", "Checkout and Bangla support"]],
  ["/features/analytics", "Marketing analytics", "See what your ads actually earned — measured against delivered orders, not browser purchases.", "Phase 4", [["Features", "/features"], ["Marketing analytics", "/features/analytics"]], ["Placed / confirmed / delivered / returned ladder", "Platform-claimed vs GridCommerce order data, kept separate", "Cost per delivered order and net contribution"]],
  ["/features/cart-recovery", "Cart recovery", "Turn abandoned carts back into orders.", "Phase 4", [["Features", "/features"], ["Cart recovery", "/features/cart-recovery"]], ["Abandonment to recovery flow diagram", "WhatsApp, Messenger, SMS and email channels", "Consent and fatigue controls"]],
  ["/features/ai-product-creation", "AI product creation", "Upload a product photo and let GridCommerce prepare the draft. You approve before anything publishes.", "Phase 4", [["Features", "/features"], ["AI product creation", "/features/ai-product-creation"]], ["Image to draft listing sequence", "Bangla and English output", "Explicit human approval step"]],
  ["/features/wholesale", "Wholesale", "Quotations, dealer pricing, credit limits and receivables — in the same system as everything else.", "Phase 4", [["Features", "/features"], ["Wholesale", "/features/wholesale"]], ["Quote to collection cycle", "Dealer price lists and credit limits", "Receivable ageing"]],
  ["/features/reports", "Reports", "Sales, stock, cash and profit — read the same way every time.", "Phase 4", [["Features", "/features"], ["Reports", "/features/reports"]], ["Report library overview", "Profitability after advertising and courier cost", "Export and scheduling"]],
  ["/features/storefront", "Online store", "A storefront on your own domain, with themes built for how Bangladesh shops.", "Phase 4", [["Features", "/features"], ["Online store", "/features/storefront"]], ["Theme families", "Checkout and delivery configuration", "Custom domain and SEO"]],
  ["/features/products", "Products", "Variants, pricing, media and categories that stay tidy as the catalogue grows.", "Phase 4", [["Features", "/features"], ["Products", "/features/products"]], ["Catalogue structure", "Variants and pricing", "Bulk editing"]],
  ["/features/customers", "Customers", "Know the customer behind every order.", "Phase 4", [["Features", "/features"], ["Customers", "/features/customers"]], ["Unified profile: orders, messages, returns, carts", "Traffic source and lifetime value", "Segments"]],
  ["/features/payments", "Payments", "Online payment, mobile wallet and cash — recorded the same way.", "Phase 4", [["Features", "/features"], ["Payments", "/features/payments"]], ["Supported gateways", "Partial advance on COD", "Reconciliation"]],
  ["/features/warehouse", "Warehouse", "Multiple locations, transfers and counts that agree with the books.", "Phase 4", [["Features", "/features"], ["Warehouse", "/features/warehouse"]], ["Locations and transfers", "Stock counts", "Branch-level availability"]],
  ["/features/reviews", "Reviews", "Collect reviews and choose what gets published.", "Phase 4", [["Features", "/features"], ["Reviews", "/features/reviews"]], ["Review requests", "Moderation", "Storefront display"]],
  ["/features/cash-and-expenses", "Cash and expenses", "Where the money came in, where it went, and what is still outstanding.", "Phase 4", [["Features", "/features"], ["Cash and expenses", "/features/cash-and-expenses"]], ["Cash book", "Expense categories", "COD ledger link"]],
  ["/features/staff-permissions", "Staff and permissions", "Give people exactly the access they need, and keep a record of what changed.", "Phase 4", [["Features", "/features"], ["Staff and permissions", "/features/staff-permissions"]], ["Roles and limits", "Two-factor authentication", "Audit history"]],

  ["/solutions/online-commerce", "Online commerce", "For Facebook-first sellers, D2C brands and landing-page sellers.", "Phase 5", [["Solutions", "/solutions/online-commerce"], ["Online commerce", "/solutions/online-commerce"]], ["Storefront, orders, courier, COD", "Messaging and marketing", "Analytics"]],
  ["/solutions/retail-commerce", "Retail commerce", "For shops, counters and multi-branch businesses.", "Phase 5", [["Solutions", "/solutions/retail-commerce"], ["Retail commerce", "/solutions/retail-commerce"]], ["POS, inventory, cash, expenses", "Customers and branches", "Reports"]],
  ["/solutions/wholesale-commerce", "Wholesale commerce", "For dealers, credit trading and collections.", "Phase 5", [["Solutions", "/solutions/wholesale-commerce"], ["Wholesale commerce", "/solutions/wholesale-commerce"]], ["Quotation and sales orders", "Dealer pricing and credit", "Receivables and collections"]],

  ["/pricing", "Pricing", "Plans and modules for online, retail, wholesale and mixed businesses.", "Phase 5", [["Pricing", "/pricing"]], ["Business-type switch", "Plan cards and comparison table", "Add-ons, limits, FAQ and contact sales", "PRICING NUMBERS NOT YET CONFIRMED — see docs/OPEN-ITEMS.md"]],
  ["/themes", "Themes", "Five theme families, built for how Bangladesh shops.", "Phase 5", [["Themes", "/themes"]], ["General, Tech, Beauty, Fresh, Fashion families", "Desktop and mobile previews", "Demo links once live URLs exist"]],
  ["/migration", "Migration", "Already selling somewhere else? Bring your business with you.", "Phase 5", [["Migration", "/migration"]], ["Current platform to GridCommerce flow", "What transfers and what is validated", "Redirect preservation", "Migration enquiry form"]],
  ["/customers", "Customer stories", "How merchants run their business on GridCommerce.", "Phase 5", [["Customer stories", "/customers"]], ["Case study layout", "Before / after workflow", "ALL CONTENT MUST BE LABELLED SAMPLE UNTIL REAL STORIES EXIST"]],

  ["/blog", "Blog", "Practical writing on orders, cash on delivery, courier, retail and marketing in Bangladesh.", "Phase 6", [["Blog", "/blog"]], ["Category filters", "Article cards", "Mock content architecture ready for a CMS"]],
  ["/help", "Help centre", "Guides and answers, in Bangla and English.", "Phase 6", [["Help centre", "/help"]], ["Search", "Categories and popular articles", "Video area and related articles"]],
  ["/help/guides", "Guides", "Step-by-step guides for setting up and running GridCommerce.", "Phase 6", [["Help centre", "/help"], ["Guides", "/help/guides"]], ["Guide index", "Bangla and English", "Article template"]],
  ["/about", "About", "Why GridCommerce exists and what we are building.", "Phase 6", [["About", "/about"]], ["Mission and the Bangladesh commerce problem", "Product philosophy", "Team area — NO INVENTED BIOGRAPHIES"]],
  ["/contact", "Contact", "Talk to sales, support or the partnerships team.", "Phase 6", [["Contact", "/contact"]], ["Topic-based routing: sales, support, partnership, general", "Validated contact form", "REAL CONTACT DETAILS STILL REQUIRED"]],
  ["/status", "Platform status", "Current status of the GridCommerce platform and recent incidents.", "Phase 6", [["Platform status", "/status"]], ["Operational / degraded / partial / major / maintenance states", "Component list", "Incident history UI — MOCK DATA, NO UPTIME CLAIMS"]],

  ["/terms", "Terms of service", "The terms that apply to using GridCommerce.", "Phase 6", [["Terms", "/terms"]], ["LEGAL COPY REQUIRED FROM COUNSEL"]],
  ["/privacy", "Privacy policy", "How GridCommerce handles personal information.", "Phase 6", [["Privacy", "/privacy"]], ["LEGAL COPY REQUIRED FROM COUNSEL"]],
  ["/refund-policy", "Refund policy", "How subscription refunds work.", "Phase 6", [["Refund policy", "/refund-policy"]], ["LEGAL COPY REQUIRED FROM COUNSEL"]],
  ["/data-policy", "Data policy", "What happens to merchant and customer data on GridCommerce.", "Phase 6", [["Data policy", "/data-policy"]], ["LEGAL COPY REQUIRED FROM COUNSEL"]],
];

/** Dynamic routes get their own hand-written templates later. */
const DYNAMIC = [
  ["/blog/[slug]", "Article", "Blog article template.", "Phase 6", [["Blog", "/blog"], ["Article", "/blog"]], ["Article schema", "Related posts", "Author and reading time"]],
  ["/help/[category]", "Help category", "Help centre category template.", "Phase 6", [["Help centre", "/help"], ["Category", "/help"]], ["Article list", "Search within category"]],
  ["/help/[category]/[slug]", "Help article", "Help centre article template.", "Phase 6", [["Help centre", "/help"], ["Article", "/help"]], ["Article body", "Was this helpful", "Related articles"]],
];

function pageSource({ route, title, description, phase, breadcrumb, scope, dynamic }) {
  const crumbs = breadcrumb
    .map(([label, href]) => `{ label: ${JSON.stringify(label)}, href: ${JSON.stringify(href)} }`)
    .join(", ");
  const scopeList = (scope ?? []).map((s) => JSON.stringify(s)).join(",\n        ");
  const metaPath = dynamic ? route.replace(/\[.*\]/, "") : route;

  return `import { PageShell } from "@/components/marketing/PageShell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  path: ${JSON.stringify(metaPath)},
});

export default function Page() {
  return (
    <PageShell
      breadcrumb={[${crumbs}]}
      title={${JSON.stringify(title)}}
      description={${JSON.stringify(description)}}
      phase={${JSON.stringify(phase)}}
      scope={[
        ${scopeList}
      ]}
    />
  );
}
`;
}

let created = 0;
for (const [route, title, description, phase, breadcrumb, scope] of [...ROUTES, ...DYNAMIC]) {
  const file = join(APP, route.replace(/^\//, ""), "page.tsx");
  if (existsSync(file)) continue;
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(
    file,
    pageSource({ route, title, description, phase, breadcrumb, scope, dynamic: route.includes("[") }),
  );
  created += 1;
}
console.log(`Generated ${created} route file(s).`);
