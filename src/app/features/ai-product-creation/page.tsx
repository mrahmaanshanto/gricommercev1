import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Product Writing",
  description:
    "It writes the draft. You decide what is saved. While adding a product, ask AI to draft the descriptions, SEO text, tags, FAQ and photo alt text, in English or Bangla, then edit before you save.",
  path: "/features/ai-product-creation",
});

export default function Page() {
  return <FeaturePage slug="ai-product-creation" />;
}
