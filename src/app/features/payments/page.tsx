import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Payments",
  description:
    "Online, wallet and cash — recorded the same way. Set up the ways customers pay, review manual payments and refunds, and see each payment land in the account that received it.",
  path: "/features/payments",
});

export default function Page() {
  return <FeaturePage slug="payments" />;
}
