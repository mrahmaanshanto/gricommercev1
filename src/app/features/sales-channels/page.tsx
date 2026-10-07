import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sales Channels",
  description:
    "Keep products in GridCommerce and sync them out to the Meta catalog, Google Merchant Center, WooCommerce and Shopify. See the status of every product on every channel, and fix problems from one list.",
  path: "/features/sales-channels",
});

export default function Page() {
  return <FeaturePage slug="sales-channels" />;
}
