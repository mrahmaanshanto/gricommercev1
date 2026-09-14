import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Omnichannel inbox",
  description: "Reply to Messenger, WhatsApp, Instagram, store chat, SMS and email from one inbox — with the customer's orders beside every conversation.",
  path: "/features/omnichannel",
});

export default function Page() {
  return <FeaturePage slug="omnichannel" />;
}
