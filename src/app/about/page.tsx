import { About } from "@/components/marketing/pages/Simple";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "Why GridCommerce exists and what we are building.",
  path: "/about",
});

export default function Page() {
  return <About />;
}
