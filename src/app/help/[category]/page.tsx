import { notFound } from "next/navigation";
import { HelpCategory } from "@/components/marketing/pages/Help";
import { HELP_CATEGORIES } from "@/data/sample";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return HELP_CATEGORIES.map((c) => ({ category: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const found = HELP_CATEGORIES.find((c) => c.slug === category);
  return buildMetadata({
    title: found ? found.label.en : "Help centre",
    description: found ? found.description.en : "GridCommerce help centre.",
    path: `/help/${category}`,
  });
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!HELP_CATEGORIES.some((c) => c.slug === category)) notFound();
  return <HelpCategory slug={category} />;
}
