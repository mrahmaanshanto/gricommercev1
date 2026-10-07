import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Automation",
  description:
    "Start from ready-made rules or write your own: send a thank-you after an order is confirmed, book the courier when a parcel is packed, or raise a purchase task when stock is low. Test a rule before switching it on, and restore an earlier version if needed.",
  path: "/features/automation",
});

export default function Page() {
  return <FeaturePage slug="automation" />;
}
