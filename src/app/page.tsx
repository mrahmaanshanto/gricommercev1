import { BrandHome } from "@/components/brand/home/BrandHome";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "GridCommerce — Run your whole commerce business from one place",
  description:
    "Online store, orders, Facebook and WhatsApp messages, POS, inventory, courier, cash on delivery, customers and marketing analytics — connected in one platform, built for Bangladesh.",
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
