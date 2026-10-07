import { FeaturesIndex } from "@/components/marketing/FeaturesIndex";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Features",
  description: "Every GridCommerce module — orders, couriers, online store, inbox and calls, stock, warehouses, POS, money, reports, customers, staff, sales channels, offers and automation — plus the supporting features inside them.",
  path: "/features",
});

export default function Page() {
  return <FeaturesIndex />;
}
