import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Payments",
  description: "Online payment, mobile wallet and cash — recorded the same way.",
  path: "/features/payments",
});

export default function Page() {
  return <FeaturePage slug="payments" />;
}
