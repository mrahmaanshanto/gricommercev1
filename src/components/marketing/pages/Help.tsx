"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger } from "@/components/motion";
import { BrandCTA } from "@/components/brand/home/BrandCTA";
import { GcButton, IconTile, Panel } from "@/components/brand/primitives";
import { PageHero } from "./PageHero";
import { HELP_CATEGORIES } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { loc } from "@/i18n/types";

const COPY = {
  crumb: loc("Help centre", "হেল্প সেন্টার"),
  eyebrow: loc("Support", "সাপোর্ট"),
  title: loc("How can we help?", "কীভাবে সাহায্য করতে পারি?"),
  body: loc(
    "Guides for setting up, selling, delivering and getting paid.",
    "সেটআপ, বিক্রি, ডেলিভারি আর টাকা পাওয়া — সবকিছুর গাইড।",
  ),
  searchPlaceholder: loc("Search help articles", "হেল্প আর্টিকেল খুঁজুন"),
  searchNote: loc("Search is not wired up in this frontend build.", "এই ফ্রন্টএন্ড বিল্ডে সার্চ যুক্ত নয়।"),
  articles: loc("articles", "টি আর্টিকেল"),
  stillStuck: loc("Still stuck?", "সমাধান পাননি?"),
  stillStuckBody: loc("Talk to support and a person will answer.", "সাপোর্টে কথা বলুন, একজন মানুষ উত্তর দেবে।"),
  contact: loc("Contact support", "সাপোর্টে যোগাযোগ"),
  helpful: loc("Was this helpful?", "এটি কি কাজে লেগেছে?"),
  yes: loc("Yes", "হ্যাঁ"),
  no: loc("No", "না"),
  more: loc("More in this category", "এই ক্যাটাগরিতে আরও"),
};

export function HelpIndex() {
  const { L } = useI18n();

  return (
    <>
      <PageHero crumbs={[{ label: COPY.crumb }]} eyebrow={COPY.eyebrow} title={COPY.title} body={COPY.body} align="center" pattern="tl">
        <div className="hero-rise mx-auto mt-9 max-w-xl">
          <div className="flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 shadow-gc-card ring-1 ring-inset ring-gc-line">
            <Search aria-hidden className="size-5 shrink-0 text-gc-ink-30" />
            <input
              type="search"
              placeholder={L(COPY.searchPlaceholder)}
              aria-label={L(COPY.searchPlaceholder)}
              className="h-10 w-full bg-transparent text-gc-body text-gc-ink outline-none placeholder:text-gc-ink-30"
            />
            <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-full bg-gc-royal text-white">
              <ArrowRight className="size-4" />
            </span>
          </div>
          <p className="mt-3 text-gc-small text-gc-ink-50">{L(COPY.searchNote)}</p>
        </div>
      </PageHero>

      <Panel tone="white" pattern="br" inner="py-12 md:py-16">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {HELP_CATEGORIES.map((c) => (
            <Stagger.Item key={c.slug} className="h-full">
              <Link
                href={`/help/${c.slug}`}
                className="group/h flex h-full flex-col rounded-[20px] bg-gc-canvas p-6 transition-[transform,box-shadow,background-color] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-gc-float md:p-7"
              >
                <IconTile name={c.icon} />
                <p className="mt-5 font-gc-display text-[1.125rem] font-bold text-gc-ink">{L(c.label)}</p>
                <p className="mt-2 flex-1 text-gc-small text-gc-ink-60">{L(c.description)}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal">
                  {c.articles.length} {L(COPY.articles)}
                  <ChevronRight aria-hidden className="size-4 transition-transform duration-[200ms] group-hover/h:translate-x-1" />
                </span>
              </Link>
            </Stagger.Item>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-6">
          <div className="relative isolate flex flex-col items-start gap-6 overflow-hidden rounded-[20px] bg-gc-dark p-8 sm:flex-row sm:items-center sm:justify-between md:p-10">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 -z-10 size-72 rounded-full bg-gc-royal/40 blur-[90px]" />
            <div>
              <p className="font-gc-display text-[1.5rem] font-bold text-white">{L(COPY.stillStuck)}</p>
              <p className="mt-2 text-gc-body text-white/65">{L(COPY.stillStuckBody)}</p>
            </div>
            <GcButton href="/contact?topic=support" variant="white" withArrow>
              {L(COPY.contact)}
            </GcButton>
          </div>
        </Reveal>
      </Panel>

      <BrandCTA />
    </>
  );
}

export function HelpCategory({ slug }: { slug: string }) {
  const { L } = useI18n();
  const category = HELP_CATEGORIES.find((c) => c.slug === slug);
  if (!category) throw new Error(`HelpCategory: unknown slug "${slug}"`);

  return (
    <>
      <PageHero
        crumbs={[{ label: COPY.crumb, href: "/help" }, { label: category.label }]}
        eyebrow={COPY.eyebrow}
        eyebrowIcon={category.icon}
        title={category.label}
        body={category.description}
        pattern="tl"
      />

      <Panel tone="white" pattern="br" inner="py-12 md:py-16">
        <Stagger className="mx-auto max-w-3xl space-y-3" stagger={0.05}>
          {category.articles.map((art) => (
            <Stagger.Item key={art.slug}>
              <Link
                href={`/help/${category.slug}/${art.slug}`}
                className="group/a flex items-center justify-between gap-4 rounded-[20px] bg-gc-canvas px-6 py-5 transition-[background-color,box-shadow] duration-[240ms] hover:bg-white hover:shadow-gc-card hover:ring-1 hover:ring-inset hover:ring-gc-line"
              >
                <span className="font-gc-display text-[1.0625rem] font-bold text-gc-ink transition-colors group-hover/a:text-gc-royal">
                  {L(art.title)}
                </span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-gc-royal ring-1 ring-inset ring-gc-line transition-transform duration-[200ms] group-hover/a:translate-x-1">
                  <ChevronRight aria-hidden className="size-4" />
                </span>
              </Link>
            </Stagger.Item>
          ))}
        </Stagger>
      </Panel>

      <BrandCTA />
    </>
  );
}

export function HelpArticle({ category: catSlug, slug }: { category: string; slug: string }) {
  const { L } = useI18n();
  const category = HELP_CATEGORIES.find((c) => c.slug === catSlug);
  const article = category?.articles.find((a) => a.slug === slug);
  if (!category || !article) throw new Error(`HelpArticle: unknown "${catSlug}/${slug}"`);

  const siblings = category.articles.filter((x) => x.slug !== slug);

  return (
    <>
      <PageHero
        crumbs={[
          { label: COPY.crumb, href: "/help" },
          { label: category.label, href: `/help/${category.slug}` },
          { label: article.title },
        ]}
        eyebrow={category.label}
        eyebrowIcon={category.icon}
        title={article.title}
        pattern="tl"
      />

      <Panel tone="white" inner="py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
          <article>
            <div className="space-y-5">
              {article.body.map((p, i) => (
                <p key={i} className="text-gc-body text-gc-ink-70 md:text-[1.0625rem]">
                  {L(p)}
                </p>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4 rounded-[20px] bg-gc-canvas p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-gc-display text-[1.0625rem] font-bold text-gc-ink">{L(COPY.helpful)}</p>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">{L(COPY.yes)}</Button>
                <Button variant="secondary" size="sm">{L(COPY.no)}</Button>
              </div>
            </div>
          </article>

          {siblings.length > 0 && (
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <p className="gc-eyebrow text-gc-eyebrow font-semibold uppercase text-gc-royal">{L(COPY.more)}</p>
              <ul className="mt-4 space-y-2">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/help/${category.slug}/${s.slug}`}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-gc-canvas px-4 py-3.5 text-gc-small font-semibold text-gc-ink transition-colors hover:bg-gc-royal-10 hover:text-gc-royal"
                    >
                      {L(s.title)}
                      <ChevronRight aria-hidden className="size-4 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </Panel>

      <BrandCTA />
    </>
  );
}
