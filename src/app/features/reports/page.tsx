import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reports",
  description: "Sales, stock, cash and profit — read the same way every time.",
  path: "/features/reports",
});

export default function Page() {
  return <FeaturePage slug="reports" />;
}
