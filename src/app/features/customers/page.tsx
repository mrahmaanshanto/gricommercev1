import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customers & CRM",
  description:
    "People and companies sit in one customer list, each with their orders, activity, addresses, consent and balance. Find anyone by phone, email or ID, group customers into segments, and keep a statement of what each one owes.",
  path: "/features/customers",
});

export default function Page() {
  return <FeaturePage slug="customers" />;
}
