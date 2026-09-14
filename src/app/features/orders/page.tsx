import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Order management",
  description: "Every order from your website, landing pages, Facebook, WhatsApp, phone and counter — in one workflow, from confirmation to delivered.",
  path: "/features/orders",
});

export default function Page() {
  return <FeaturePage slug="orders" />;
}
