import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Marketing analytics",
  description: "See what your ads actually earned — measured against delivered orders, not browser purchases.",
  path: "/features/analytics",
});

export default function Page() {
  return <FeaturePage slug="analytics" />;
}
