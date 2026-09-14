import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Courier and cash on delivery",
  description: "Know where the parcel is — and where your COD money is.",
  path: "/features/courier",
});

export default function Page() {
  return <FeaturePage slug="courier" />;
}
