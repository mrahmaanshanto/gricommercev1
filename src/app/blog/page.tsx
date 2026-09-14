import { Blog } from "@/components/marketing/pages/Blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Notes on operations, courier economics and selling in Bangladesh.",
  path: "/blog",
});

export default function Page() {
  return <Blog />;
}
