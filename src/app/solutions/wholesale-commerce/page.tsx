import { SolutionPage } from "@/components/marketing/pages/SolutionPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wholesale commerce",
  description: "For dealers, credit trading and collections.",
  path: "/solutions/wholesale-commerce",
});

export default function Page() {
  return <SolutionPage id="wholesale" />;
}
