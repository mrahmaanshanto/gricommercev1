/**
 * Company-level constants.
 *
 * IMPORTANT: fields marked `PENDING` have no confirmed real-world value yet.
 * They render as a visible "to be confirmed" state rather than invented data.
 * Replace before production.
 */

export const PENDING = "__PENDING__" as const;

export const SITE = {
  name: "GridCommerce",
  legalEntity: "Grid Technologies Limited",
  tagline: "All together. More commerce.",
  taglineDisplay: "ALL TOGETHER. MORE COMMERCE.",
  url: "https://gridcommerce.com.bd",
  domain: "gridcommerce.com.bd",
  description:
    "Run your whole commerce business from one place — online store, orders, POS, inventory, courier, cash on delivery, messaging and marketing, built for Bangladesh.",
  locales: ["en", "bn"] as const,
  defaultLocale: "en" as const,
} as const;

/**
 * SAMPLE DATA — these were all `PENDING`.
 *
 * They are filled with invented values so the footer contact row, the WhatsApp
 * CTAs and `/contact` can be reviewed. The `PENDING` mechanism is untouched:
 * restore any field to `PENDING` and its "to be confirmed" state returns.
 * None of these are real. See docs/SAMPLE-DATA.md.
 */
export const CONTACT = {
  salesEmail: "sales@gridcommerce.com.bd",
  supportEmail: "support@gridcommerce.com.bd",
  partnershipEmail: "partners@gridcommerce.com.bd",
  phone: "+880 1700 000000",
  whatsapp: "+880 1700 000000",
  addressLines: ["Level 7, House 42, Road 11", "Banani, Dhaka 1213"] as string[],
  city: "Dhaka",
  country: "Bangladesh",
} as const;

/** SAMPLE DATA — invented handles so the footer social row renders. An empty
 *  list still renders no social row, as before. */
export const SOCIAL: { label: string; href: string }[] = [
  { label: "Facebook", href: "https://facebook.com/gridcommercebd" },
  { label: "YouTube", href: "https://youtube.com/@gridcommercebd" },
  { label: "LinkedIn", href: "https://linkedin.com/company/gridcommercebd" },
];

export function isPending(value: string | undefined | null): boolean {
  return !value || value === PENDING;
}
