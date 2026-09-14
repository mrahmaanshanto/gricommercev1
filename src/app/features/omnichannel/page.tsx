import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customer Inbox & Follow-up",
  description:
    "Bring supported customer channels into a shared inbox. See the customer's history beside the conversation, give the right staff member responsibility and follow up when an interested buyer leaves without ordering.",
  path: "/features/omnichannel",
});

export default function Page() {
  return <FeaturePage slug="omnichannel" />;
}
