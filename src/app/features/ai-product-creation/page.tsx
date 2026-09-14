import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI product creation",
  description: "Upload a product photo and let GridCommerce prepare the draft. You approve before anything publishes.",
  path: "/features/ai-product-creation",
});

export default function Page() {
  return <FeaturePage slug="ai-product-creation" />;
}
