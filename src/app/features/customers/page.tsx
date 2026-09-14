import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customers",
  description: "Know the customer behind every order.",
  path: "/features/customers",
});

export default function Page() {
  return <FeaturePage slug="customers" />;
}
