import { notFound } from "next/navigation";
import { HelpArticle } from "@/components/marketing/pages/Help";
import { HELP_CATEGORIES } from "@/data/sample";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return HELP_CATEGORIES.flatMap((c) =>
    c.articles.map((a) => ({ category: c.slug, slug: a.slug })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const cat = HELP_CATEGORIES.find((c) => c.slug === category);
  const art = cat?.articles.find((a) => a.slug === slug);
  return buildMetadata({
    title: art ? art.title.en : "Help article",
    description: cat ? cat.description.en : "GridCommerce help centre.",
    path: `/help/${category}/${slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const cat = HELP_CATEGORIES.find((c) => c.slug === category);
  if (!cat || !cat.articles.some((a) => a.slug === slug)) notFound();
  return <HelpArticle category={category} slug={slug} />;
}
