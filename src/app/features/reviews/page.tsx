import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reviews",
  description: "Collect reviews and choose what gets published.",
  path: "/features/reviews",
});

export default function Page() {
  return <FeaturePage slug="reviews" />;
}
