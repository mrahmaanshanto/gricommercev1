import { HelpGuides } from "@/components/marketing/pages/Simple";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Guides",
  description: "Step-by-step guides for setting up and running GridCommerce.",
  path: "/help/guides",
});

export default function Page() {
  return <HelpGuides />;
}
