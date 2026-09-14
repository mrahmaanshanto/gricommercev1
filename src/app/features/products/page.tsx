import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description: "Variants, pricing, media and categories that stay tidy as the catalogue grows.",
  path: "/features/products",
});

export default function Page() {
  return <FeaturePage slug="products" />;
}
