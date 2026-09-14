import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Landing pages",
  description: "Build pages for ad traffic without waiting for a developer.",
  path: "/features/landing-pages",
});

export default function Page() {
  return <FeaturePage slug="landing-pages" />;
}
