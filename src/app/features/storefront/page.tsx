import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Online Store, Landing Pages & Blog",
  description:
    "Start a landing page from a template, arrange its sections and preview it on mobile. Buyers order with their phone number, name and address and choose cash on delivery, an advance or full payment. Run it on a free GridCommerce address or connect your own domain.",
  path: "/features/storefront",
});

export default function Page() {
  return <FeaturePage slug="storefront" />;
}
