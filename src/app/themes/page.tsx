import { Themes } from "@/components/marketing/pages/Simple";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Themes",
  description: "Five theme families, built for how Bangladesh shops.",
  path: "/themes",
});

export default function Page() {
  return <Themes />;
}
