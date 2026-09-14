import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Inventory",
  description: "Know exactly how much stock you have — and why it changed.",
  path: "/features/inventory",
});

export default function Page() {
  return <FeaturePage slug="inventory" />;
}
