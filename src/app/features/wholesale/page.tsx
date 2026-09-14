import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wholesale & Collections",
  description:
    "Carry a quotation through to order, invoice and payment. GridCommerce shows each customer's due, credit terms and collection history, so your team knows which accounts need follow-up.",
  path: "/features/wholesale",
});

export default function Page() {
  return <FeaturePage slug="wholesale" />;
}
