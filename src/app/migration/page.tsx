import { MigrationPage } from "@/components/marketing/pages/Simple";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Migration",
  description: "Already selling somewhere else? Bring your business with you.",
  path: "/migration",
});

export default function Page() {
  return <MigrationPage />;
}
