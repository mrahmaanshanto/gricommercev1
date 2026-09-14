import { Customers } from "@/components/marketing/pages/Customers";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customers",
  description: "The businesses running on GridCommerce — boutiques, counters, home businesses and wholesalers across Bangladesh.",
  path: "/customers",
});

export default function Page() {
  return <Customers />;
}
