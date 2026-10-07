import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Offers & Loyalty",
  description:
    "Set who an offer is for, which products it covers, which payment method, where and when it runs, and what it can combine with. Test it on a sample cart before it goes live. Coupons work at checkout, at the counter and when your team creates an order.",
  path: "/features/offers-loyalty",
});

export default function Page() {
  return <FeaturePage slug="offers-loyalty" />;
}
