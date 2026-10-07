import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Inbox, Calls & AI Calls",
  description:
    "Bring chats from Facebook, Instagram, WhatsApp, TikTok and other connected channels into a shared inbox, alongside comments and mentions. See the customer's orders beside the conversation, create an order without leaving it, and let AI calls confirm new orders in Bangla or English.",
  path: "/features/omnichannel",
});

export default function Page() {
  return <FeaturePage slug="omnichannel" />;
}
