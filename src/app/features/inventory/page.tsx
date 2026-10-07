import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products, Stock & Purchases",
  description:
    "Record what you buy, what you receive and what you sell. GridCommerce keeps a stock history with the cost of each purchase and the balance owed to each supplier, so your team can check the reason behind any quantity.",
  path: "/features/inventory",
});

export default function Page() {
  return <FeaturePage slug="inventory" />;
}
