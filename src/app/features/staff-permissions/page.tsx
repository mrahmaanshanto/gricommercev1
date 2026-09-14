import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Staff and permissions",
  description: "Give people exactly the access they need, and keep a record of what changed.",
  path: "/features/staff-permissions",
});

export default function Page() {
  return <FeaturePage slug="staff-permissions" />;
}
