import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Money",
  description:
    "Sales, refunds, payouts and expenses post to the cash drawer, bank or wallet that moved the money. See what partners still hold, what customers owe you and what you owe, and match bank statements against your records.",
  path: "/features/cash-and-expenses",
});

export default function Page() {
  return <FeaturePage slug="cash-and-expenses" />;
}
