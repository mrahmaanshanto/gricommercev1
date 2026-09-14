import { Pricing } from "@/components/marketing/pages/Pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing",
  description: "Plans and modules for online, retail, wholesale and mixed businesses selling in Bangladesh.",
  path: "/pricing",
});

export default function Page() {
  return <Pricing />;
}
