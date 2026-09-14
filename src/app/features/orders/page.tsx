import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Orders & Sales Entry",
  description:
    "Keep online orders moving through confirmation and dispatch. Use a dedicated sales screen for orders taken by phone, Messenger or WhatsApp, with product availability, customer history and payment details ready when your team needs them.",
  path: "/features/orders",
});

export default function Page() {
  return <FeaturePage slug="orders" />;
}
