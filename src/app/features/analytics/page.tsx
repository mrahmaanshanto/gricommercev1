import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Profit & Marketing Reports",
  description:
    "Look beyond the order total. Bring sales and recorded costs into one reporting view, with online performance measured on delivered orders and a separate view of what the ad platforms report.",
  path: "/features/analytics",
});

export default function Page() {
  return <FeaturePage slug="analytics" />;
}
