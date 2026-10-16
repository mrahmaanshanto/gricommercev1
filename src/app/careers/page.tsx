import { Careers } from "@/components/marketing/pages/Careers";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description: "Open jobs at GridCommerce in Dhaka: customer success, product and sales. Apply in a few minutes, no account needed.",
  path: "/careers",
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }])} />
      <Careers />
    </>
  );
}
