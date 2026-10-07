import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "POS & Counter",
  description:
    "Scan products, take payment in several methods and sell from the stock of the right branch. Record cash pickups and payouts during the shift, then compare what the system expects with what your cashier counts.",
  path: "/features/pos",
});

export default function Page() {
  return <FeaturePage slug="pos" />;
}
