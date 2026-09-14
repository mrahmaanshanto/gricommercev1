import { FeaturesIndex } from "@/components/marketing/FeaturesIndex";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Features",
  description: "Everything GridCommerce does, grouped by how you actually run the business: sell, manage, deliver, grow and understand.",
  path: "/features",
});

export default function Page() {
  return <FeaturesIndex />;
}
