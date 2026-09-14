import { Legal } from "@/components/marketing/pages/Simple";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data policy",
  description: "What happens to merchant and customer data on GridCommerce.",
  path: "/data-policy",
});

export default function Page() {
  return <Legal slug="data-policy" />;
}
