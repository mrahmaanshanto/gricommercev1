import { SolutionPage } from "@/components/marketing/pages/SolutionPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Online commerce",
  description: "For Facebook-first sellers, D2C brands and landing-page sellers.",
  path: "/solutions/online-commerce",
});

export default function Page() {
  return <SolutionPage id="online" />;
}
