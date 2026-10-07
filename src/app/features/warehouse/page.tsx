import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Warehouses & Branches",
  description:
    "Each warehouse and branch holds its own stock. Transfers are scanned out and scanned in, adjustments need a reason, and counts are approved before they change a number, so a quantity can always be explained.",
  path: "/features/warehouse",
});

export default function Page() {
  return <FeaturePage slug="warehouse" />;
}
