import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Orders & Returns",
  description:
    "See online and counter orders in one list, filtered by status, courier, payment and delivery zone. Verify an order before you approve it, take an advance when you need one, and handle returns and exchanges from the same place.",
  path: "/features/orders",
});

export default function Page() {
  return <FeaturePage slug="orders" />;
}
