import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reports",
  description:
    "Read the same way every time. Sales, stock, purchases, finance, POS, staff and marketing reports in one report centre, ready to filter, download or schedule.",
  path: "/features/reports",
});

export default function Page() {
  return <FeaturePage slug="reports" />;
}
