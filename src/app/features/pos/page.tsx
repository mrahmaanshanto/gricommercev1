import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Point of sale",
  description: "Your counter and your online store finally share the same stock, the same customers and the same reports.",
  path: "/features/pos",
});

export default function Page() {
  return <FeaturePage slug="pos" />;
}
