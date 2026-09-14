import { notFound } from "next/navigation";
import { BlogPost } from "@/components/marketing/pages/Blog";
import { ARTICLES } from "@/data/sample";
import { buildMetadata } from "@/lib/seo";

/** Prerenders every article; an unknown slug 404s rather than rendering empty. */
export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return buildMetadata({ title: "Article", description: "", path: `/blog/${slug}` });

  return buildMetadata({
    title: article.title.en,
    description: article.excerpt.en,
    path: `/blog/${slug}`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!ARTICLES.some((a) => a.slug === slug)) notFound();
  return <BlogPost slug={slug} />;
}
