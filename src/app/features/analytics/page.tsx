import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reports & Ad Tracking",
  description:
    "Reports cover sales, online and delivery, customers and loyalty, stock, purchases, finance, POS, staff and marketing. Connect your pixels and ad accounts to compare ad spend with confirmed and delivered orders, kept separate from what the ad platforms report.",
  path: "/features/analytics",
});

export default function Page() {
  return <FeaturePage slug="analytics" />;
}
