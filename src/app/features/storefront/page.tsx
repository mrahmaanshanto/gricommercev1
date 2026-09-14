import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Online Store & Landing Pages",
  description:
    "Create a store on your own domain and dedicated landing pages for the products you advertise. Arrange sections, preview the mobile experience and let buyers order with their phone number, name and address.",
  path: "/features/storefront",
});

export default function Page() {
  return <FeaturePage slug="storefront" />;
}
