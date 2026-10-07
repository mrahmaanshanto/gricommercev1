import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "A catalogue that stays tidy as it grows. Variants, categories, brands and bulk edits that keep their shape at ten products and at ten thousand.",
  path: "/features/products",
});

export default function Page() {
  return <FeaturePage slug="products" />;
}
