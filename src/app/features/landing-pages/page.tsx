import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Landing Pages",
  description:
    "Build pages for ad traffic without a developer. Start from a template, add the sections you need, set the offer and publish a single-product page before the campaign goes live.",
  path: "/features/landing-pages",
});

export default function Page() {
  return <FeaturePage slug="landing-pages" />;
}
