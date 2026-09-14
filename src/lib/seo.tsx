import type { Metadata } from "next";
import { SITE } from "@/data/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = "/og/default.png",
  type = "website",
}: PageSeo): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;

  return {
    // Absolute: the root layout's `%s | GridCommerce` template would otherwise
    // append the site name a second time.
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: { "en-BD": url, "bn-BD": url },
    },
    openGraph: {
      type,
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      locale: "en_BD",
      alternateLocale: ["bn_BD"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/brand/v2/gridcommerce-logo.png`,
    slogan: SITE.tagline,
    areaServed: "BD",
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: SITE.description,
    url: SITE.url,
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
