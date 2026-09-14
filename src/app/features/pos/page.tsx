import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "POS & Daily Cash",
  description:
    "Scan products, take payments and adjust stock at the correct branch. Record expenses and cash movements, then compare what the system expects with what your cashier counts at closing.",
  path: "/features/pos",
});

export default function Page() {
  return <FeaturePage slug="pos" />;
}
