import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Online store",
  description: "A storefront on your own domain, with themes built for how Bangladesh shops.",
  path: "/features/storefront",
});

export default function Page() {
  return <FeaturePage slug="storefront" />;
}
