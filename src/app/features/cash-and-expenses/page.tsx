import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cash and expenses",
  description: "Where the money came in, where it went, and what is still outstanding.",
  path: "/features/cash-and-expenses",
});

export default function Page() {
  return <FeaturePage slug="cash-and-expenses" />;
}
