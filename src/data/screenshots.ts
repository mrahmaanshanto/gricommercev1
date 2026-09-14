/**
 * Product screenshot registry.
 *
 * These are real captures of the GridCommerce admin. They are never altered,
 * cropped to mislead, or recreated as fake UI. Add a new capture here once and
 * every showcase component can reference it by key.
 *
 * Source files live in /public/product-screens/ as WebP, capped at 2400px wide.
 */

export type ProductScreen = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /**
   * Art-directed crop for small screens. A 2400px-wide admin capture shrunk to
   * 360px is unreadable, so narrow viewports get a legible region of the same
   * screen rather than the whole thing scaled down.
   */
  mobile?: { src: string; width: number; height: number };
};

export const SCREENS = {
  orders: {
    src: "/product-screens/orders.webp",
    width: 2400,
    height: 951,
    alt: "GridCommerce orders workspace showing awaiting action, in courier hands, delivery success and cash to collect, with status tabs and courier filters",
    mobile: { src: "/product-screens/orders-mobile.webp", width: 1100, height: 397 },
  },
  omnichannel: {
    src: "/product-screens/omnichannel.webp",
    width: 2400,
    height: 1189,
    alt: "GridCommerce shared inbox with Instagram, Facebook, WhatsApp and TikTok conversations, a linked order and the customer profile beside the thread",
    mobile: { src: "/product-screens/omnichannel-mobile.webp", width: 1100, height: 727 },
  },
  pos: {
    src: "/product-screens/pos.webp",
    width: 2400,
    height: 1090,
    alt: "GridCommerce point of sale with warehouse and counter selection, product grid showing live stock, and a barcode scanner panel",
    mobile: { src: "/product-screens/pos-mobile.webp", width: 1100, height: 702 },
  },
  landingPages: {
    src: "/product-screens/landing-pages.webp",
    width: 2400,
    height: 1186,
    alt: "GridCommerce landing page builder with a drag and drop part list, a Bangla mobile preview and the price and offer settings panel",
    mobile: { src: "/product-screens/landing-pages-mobile.webp", width: 864, height: 1126 },
  },
  dashboard: {
    src: "/product-screens/dashboard.webp",
    width: 2400,
    height: 1184,
    alt: "GridCommerce dashboard overview showing revenue, profit, orders and purchases with a sales summary chart and fulfilment pipeline",
    mobile: { src: "/product-screens/dashboard-mobile.webp", width: 1100, height: 543 },
  },
  customers: {
    src: "/product-screens/customers.webp",
    width: 2400,
    height: 1173,
    alt: "GridCommerce customer list with total customers, repeat rate and lifetime value, segmented into repeat, VIP, at risk and COD only",
    mobile: { src: "/product-screens/customers-mobile.webp", width: 1100, height: 538 },
  },
} as const satisfies Record<string, ProductScreen>;

export type ScreenKey = keyof typeof SCREENS;
