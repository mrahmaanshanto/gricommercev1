import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cart Recovery",
  description:
    "Turn abandoned carts back into orders. See every cart left behind and why it stalled, then follow up by SMS, WhatsApp, email or a call, within the limits you set.",
  path: "/features/cart-recovery",
});

export default function Page() {
  return <FeaturePage slug="cart-recovery" />;
}
