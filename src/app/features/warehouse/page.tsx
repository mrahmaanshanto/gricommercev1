import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Warehouse",
  description: "Multiple locations, transfers and counts that agree with the books.",
  path: "/features/warehouse",
});

export default function Page() {
  return <FeaturePage slug="warehouse" />;
}
