import { HelpIndex } from "@/components/marketing/pages/Help";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Help centre",
  description: "Guides for setting up, selling, delivering and getting paid with GridCommerce.",
  path: "/help",
});

export default function Page() {
  return <HelpIndex />;
}
