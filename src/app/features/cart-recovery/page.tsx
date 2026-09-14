import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cart recovery",
  description: "Turn abandoned carts back into orders.",
  path: "/features/cart-recovery",
});

export default function Page() {
  return <FeaturePage slug="cart-recovery" />;
}
