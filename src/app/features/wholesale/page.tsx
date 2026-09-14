import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wholesale",
  description: "Quotations, dealer pricing, credit limits and receivables — in the same system as everything else.",
  path: "/features/wholesale",
});

export default function Page() {
  return <FeaturePage slug="wholesale" />;
}
