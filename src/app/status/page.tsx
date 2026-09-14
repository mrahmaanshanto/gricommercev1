import { Status } from "@/components/marketing/pages/Simple";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Platform status",
  description: "Current status of the GridCommerce platform and recent incidents.",
  path: "/status",
});

export default function Page() {
  return <Status />;
}
