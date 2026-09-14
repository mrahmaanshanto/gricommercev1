import { Legal } from "@/components/marketing/pages/Simple";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy policy",
  description: "How GridCommerce handles personal information.",
  path: "/privacy",
});

export default function Page() {
  return <Legal slug="privacy" />;
}
