"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal, Stagger } from "@/components/motion";
import { BrandCTA } from "@/components/brand/home/BrandCTA";
import { Eyebrow, Panel, SectionHead } from "@/components/brand/primitives";
import { PageHero } from "./PageHero";
import { ARTICLES, BLOG_CATEGORIES, type Article } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { loc } from "@/i18n/types";
import { cn } from "@/lib/cn";

const COPY = {
  crumb: loc("Blog", "ব্লগ"),
  eyebrow: loc("Writing", "লেখা"),
  title: loc("Notes on selling in Bangladesh.", "বাংলাদেশে বিক্রি নিয়ে কিছু কথা।"),
  body: loc(
    "Operations, courier economics and the parts of commerce that imported playbooks get wrong here.",
    "অপারেশনস, কুরিয়ারের হিসাব আর বিদেশি নিয়মে যেসব জায়গায় ভুল হয় — সেসব নিয়ে।",
  ),
  read: loc("min read", "মিনিটে পড়া"),
  sample: loc(
    "Sample articles written to exercise the layout. None of this is published guidance.",
    "লেআউট পরীক্ষার জন্য লেখা নমুনা আর্টিকেল। এগুলো প্রকাশিত পরামর্শ নয়।",
  ),
};

const fmtDate = (iso: string, locale: string) =>
  new Date(iso).toLocaleDateString(locale === "bn" ? "bn-BD" : "en-GB", {
    day: "numeric", month: "short", year: "numeric",
  });

/** Generated photographs matched to each article's subject — no real person. */
const ARTICLE_PHOTO: Record<string, { src: string; alt: string }> = {
  "cash-on-delivery-without-losing-track": {
    src: "/merchants/courier-cod-handover.webp",
    alt: "Delivery rider handing a parcel to a customer who pays cash at her building gate",
  },
  "one-inbox-six-channels": {
    src: "/merchants/merchant-cosmetics.webp",
    alt: "Shop owner checking an order on a phone beside a shelf of skincare products",
  },
  "counter-and-website-same-stock": {
    src: "/merchants/retail-counter-pos-v2.webp",
    alt: "Shopkeeper scanning a product at a counter lined with stocked shelves",
  },
  "returns-are-part-of-the-flow": {
    src: "/merchants/courier-sorting-hub.webp",
    alt: "Workers sorting stacks of parcels on shelves inside a courier hub",
  },
  "reading-ad-numbers-honestly": {
    src: "/merchants/merchant-product-photography-v2.webp",
    alt: "Merchant photographing a product on a small table to create a new catalogue listing",
  },
  "starting-from-a-facebook-page": {
    src: "/merchants/merchant-home-business.webp",
    alt: "Small business owner writing a delivery label at a table stacked with parcel boxes and fabric",
  },
};

export function Blog() {
  const { L, locale } = useI18n();
  const reduced = useReducedMotion();
  const [cat, setCat] = useState("all");
  const shown = cat === "all" ? ARTICLES : ARTICLES.filter((a) => a.categorySlug === cat);

  return (
    <>
      <PageHero crumbs={[{ label: COPY.crumb }]} eyebrow={COPY.eyebrow} title={COPY.title} body={COPY.body} pattern="tl">
        <div className="hero-rise mt-9 max-w-full overflow-x-auto">
          <div className="inline-flex gap-1 rounded-full bg-gc-canvas p-1.5 ring-1 ring-inset ring-gc-line">
            {BLOG_CATEGORIES.map((c) => {
              const active = cat === c.slug;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setCat(c.slug)}
                  aria-pressed={active}
                  className={cn(
                    "relative isolate shrink-0 rounded-full px-4 py-2 text-gc-small font-semibold transition-colors duration-[200ms]",
                    active ? "text-white" : "text-gc-ink-60 hover:text-gc-ink",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="gc-blog-pill"
                      transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }}
                      className="absolute inset-0 -z-10 rounded-full bg-gc-royal"
                    />
                  )}
                  {L(c.label)}
                </button>
              );
            })}
          </div>
        </div>
      </PageHero>

      <Panel tone="white" pattern="br" inner="py-12 md:py-16">
        <Stagger key={cat} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {shown.map((a) => (
            <ArticleCard key={a.slug} article={a} locale={locale} />
          ))}
        </Stagger>
        <p className="mt-10 text-center text-gc-small text-gc-ink-50">{L(COPY.sample)}</p>
      </Panel>

      <BrandCTA />
    </>
  );
}

function ArticleCard({ article, locale }: { article: Article; locale: string }) {
  const { L } = useI18n();
  const photo = ARTICLE_PHOTO[article.slug];

  return (
    <Stagger.Item className="h-full">
      <Link
        href={`/blog/${article.slug}`}
        className="group/a flex h-full flex-col rounded-[28px] bg-gc-canvas p-3 transition-[transform,box-shadow,background-color] duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-gc-float"
      >
        {photo && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/a:scale-[1.04]"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
          <Eyebrow className="w-fit">{L(article.category)}</Eyebrow>
          <h2 className="mt-4 text-[1.25rem] leading-snug text-gc-ink">{L(article.title)}</h2>
          <p className="mt-3 flex-1 text-gc-small text-gc-ink-60">{L(article.excerpt)}</p>
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-gc-line pt-4 text-[0.75rem] text-gc-ink-50">
            <span className="font-semibold text-gc-ink-70">{article.author}</span>
            <span>
              {fmtDate(article.date, locale)} · {article.readMinutes} {L(COPY.read)}
            </span>
          </div>
        </div>
      </Link>
    </Stagger.Item>
  );
}

export function BlogPost({ slug }: { slug: string }) {
  const { L, locale } = useI18n();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <PageHero
        crumbs={[{ label: COPY.crumb, href: "/blog" }, { label: loc("Not found", "পাওয়া যায়নি") }]}
        title={loc("That article does not exist.", "এই লেখাটি নেই।")}
        body={loc("It may have moved. The index lists everything published.", "হয়তো সরে গেছে। সব লেখা তালিকায় আছে।")}
      />
    );
  }

  const photo = ARTICLE_PHOTO[article.slug];
  const related = ARTICLES.filter((x) => x.slug !== article.slug && x.categorySlug === article.categorySlug).slice(0, 3);

  return (
    <>
      <PageHero crumbs={[{ label: COPY.crumb, href: "/blog" }, { label: article.title }]} eyebrow={article.category} title={article.title} pattern="tl">
        <div className="hero-rise mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-gc-small text-gc-ink-50">
          <span className="font-semibold text-gc-ink">{article.author}</span>
          <span>{L(article.role)}</span>
          <span aria-hidden>·</span>
          <span>{fmtDate(article.date, locale)}</span>
          <span aria-hidden>·</span>
          <span>
            {article.readMinutes} {L(COPY.read)}
          </span>
        </div>
      </PageHero>

      <Panel tone="white" inner="py-12 md:py-16">
        <article className="mx-auto max-w-3xl">
          {photo && (
            <Reveal className="relative mb-12 aspect-[16/9] overflow-hidden rounded-[28px]">
              <Image src={photo.src} alt={photo.alt} fill priority sizes="(min-width: 1024px) 768px, 100vw" className="object-cover" />
            </Reveal>
          )}
          <div className="space-y-6">
            {article.body.map((para, i) => (
              <p key={i} className={cn(i === 0 ? "text-gc-lead text-gc-ink" : "text-gc-body text-gc-ink-70 md:text-[1.0625rem]")}>
                {L(para)}
              </p>
            ))}
          </div>
        </article>
      </Panel>

      {related.length > 0 && (
        <Panel tone="tint" pattern="br">
          <SectionHead title={L(article.category)} />
          <Stagger className="mt-10 grid gap-4 md:grid-cols-3" stagger={0.07}>
            {related.map((r) => (
              <ArticleCard key={r.slug} article={r} locale={locale} />
            ))}
          </Stagger>
        </Panel>
      )}

      <BrandCTA />
    </>
  );
}
