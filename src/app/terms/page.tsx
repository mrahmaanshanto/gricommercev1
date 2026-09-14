import { Legal } from "@/components/marketing/pages/Simple";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of service",
  description: "The terms that apply to using GridCommerce.",
  path: "/terms",
});

export default function Page() {
  return <Legal slug="terms" />;
}
