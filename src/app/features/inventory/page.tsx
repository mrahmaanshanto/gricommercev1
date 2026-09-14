import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Stock, Warehouse & Purchasing",
  description:
    "Record what you buy, what you receive and what moves between locations. GridCommerce keeps a stock history alongside purchasing costs and supplier balances, so your team can check the reason behind a quantity.",
  path: "/features/inventory",
});

export default function Page() {
  return <FeaturePage slug="inventory" />;
}
