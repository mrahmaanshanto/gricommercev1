import { ComparePage } from "@/components/marketing/pages/ComparePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "GridCommerce vs Shopify vs WordPress",
  description:
    "Compare GridCommerce with Shopify and WordPress + WooCommerce for selling in Bangladesh: price, COD and courier tools, fraud check, bKash and Nagad, and support.",
  path: "/compare",
});

export default function Page() {
  return <ComparePage />;
}
