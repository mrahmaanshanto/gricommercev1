import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Courier & COD Control",
  description:
    "A delivered parcel does not mean the payment is in your account. GridCommerce connects delivery status, courier charges and remittances, so you can follow up on the money still due to your business.",
  path: "/features/courier",
});

export default function Page() {
  return <FeaturePage slug="courier" />;
}
