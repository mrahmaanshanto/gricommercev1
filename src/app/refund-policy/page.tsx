import { Legal } from "@/components/marketing/pages/Simple";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Refund policy",
  description: "How subscription refunds work.",
  path: "/refund-policy",
});

export default function Page() {
  return <Legal slug="refund-policy" />;
}
