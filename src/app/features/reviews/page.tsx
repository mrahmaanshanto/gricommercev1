import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Google Reviews",
  description:
    "Answer your Google reviews from one place. Once your Google Business Profile is connected, its reviews appear beside your other conversations, ready for a reply you have checked.",
  path: "/features/reviews",
});

export default function Page() {
  return <FeaturePage slug="reviews" />;
}
