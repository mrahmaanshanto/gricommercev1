import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Online Orders & Couriers",
  description:
    "A delivered parcel does not mean the payment is in your account. GridCommerce keeps courier booking, parcel status, COD collected, charges and payouts together for each courier, so you can follow up on the money still due to your business.",
  path: "/features/courier",
});

export default function Page() {
  return <FeaturePage slug="courier" />;
}
