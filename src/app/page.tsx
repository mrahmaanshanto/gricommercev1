import { BrandHome } from "@/components/brand/home/BrandHome";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "GridCommerce — Sales, stock, dues and profit. Connected.",
  description:
    "Manage your online store, phone orders and counter sales with connected stock and customer records. Keep courier dues, daily cash and business costs in view, so you know what needs attention.",
  path: "/",
  keywords: [
    "ecommerce software Bangladesh",
    "ecommerce platform Bangladesh",
    "Facebook order management Bangladesh",
    "POS software Bangladesh",
    "COD management Bangladesh",
    "WhatsApp ecommerce Bangladesh",
  ],
});

export default function HomePage() {
  return <BrandHome />;
}
