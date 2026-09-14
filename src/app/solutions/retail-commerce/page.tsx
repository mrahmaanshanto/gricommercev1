import { SolutionPage } from "@/components/marketing/pages/SolutionPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Retail commerce",
  description: "For shops, counters and multi-branch businesses.",
  path: "/solutions/retail-commerce",
});

export default function Page() {
  return <SolutionPage id="retail" />;
}
