"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger } from "@/components/motion";
import { BrandCTA } from "@/components/brand/home/BrandCTA";
import { BrandMigration } from "@/components/brand/home/BrandMigration";
import { Eyebrow, GcButton, IconTile, Panel, PatternCorner, SectionHead } from "@/components/brand/primitives";
import { PageHero } from "./PageHero";
import {
  ABOUT_COPY, ABOUT_VALUES, HELP_CATEGORIES, LEGAL_COPY, LEGAL_DOCS,
  STATUS_COPY, STATUS_SERVICES, THEMES, THEMES_COPY,
} from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { loc } from "@/i18n/types";
import { cn } from "@/lib/cn";

/** A photograph framed like the homepage hero. Generated imagery — no real person. */
function PhotoFrame({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-gc-screen md:rounded-[36px]">
      <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
    </div>
  );
}

/* ── About ───────────────────────────────────────────────────────────── */

export function About() {
  const { L } = useI18n();

  return (
    <>
      <PageHero
        crumbs={[{ label: ABOUT_COPY.crumb }]}
        eyebrow={ABOUT_COPY.eyebrow}
        title={ABOUT_COPY.title}
        body={ABOUT_COPY.body}
        pattern="bl"
        aside={
          <PhotoFrame
            priority
            src="/merchants/merchant-home-business.webp"
            alt="Small business owner writing a delivery label at a table stacked with parcel boxes and fabric"
          />
        }
      />

      <Panel tone="tint" pattern="tr">
        <SectionHead title={L(ABOUT_COPY.valuesTitle)} />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2" stagger={0.07}>
          {ABOUT_VALUES.map((v) => (
            <Stagger.Item key={v.icon} className="h-full">
              <div className="flex h-full flex-col rounded-[28px] bg-white p-7 ring-1 ring-inset ring-gc-line/80 md:p-8">
                <IconTile name={v.icon} />
                <p className="mt-6 font-gc-display text-[1.25rem] font-bold text-gc-ink">{L(v.label)}</p>
                <p className="mt-3 text-gc-body text-gc-ink-60">{L(v.detail)}</p>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </Panel>

      <BrandCTA />
    </>
  );
}

/* ── Themes ──────────────────────────────────────────────────────────── */

export function Themes() {
  const { L } = useI18n();

  return (
    <>
      <PageHero crumbs={[{ label: THEMES_COPY.crumb }]} eyebrow={THEMES_COPY.eyebrow} title={THEMES_COPY.title} body={THEMES_COPY.body} align="center" pattern="tl" />

      <Panel tone="white" pattern="br" inner="py-12 md:py-16">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {THEMES.map((th, i) => {
            const dark = i % 3 !== 0;
            return (
              <Stagger.Item key={th.id} className="h-full">
                <div className="flex h-full flex-col rounded-[28px] bg-gc-canvas p-3">
                  {/* No theme screenshots exist yet: an abstract layout sketch in the
                      brand palette stands in, never a fabricated storefront. */}
                  <div
                    className={cn(
                      "relative isolate flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[22px] p-5",
                      i % 3 === 0 && "bg-gradient-to-br from-gc-sky-20 via-gc-sky-10 to-gc-royal-10",
                      i % 3 === 1 && "bg-gc-dark",
                      i % 3 === 2 && "bg-gradient-to-br from-gc-royal from-40% to-gc-sky",
                    )}
                  >
                    <PatternCorner position="br" tone={dark ? "onDark" : "light"} />
                    <div aria-hidden className="space-y-2.5">
                      <div className={cn("h-2 w-1/3 rounded-full", dark ? "bg-white/30" : "bg-gc-royal/25")} />
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {[0, 1, 2].map((k) => (
                          <div key={k} className={cn("aspect-square rounded-xl", dark ? "bg-white/12" : "bg-white/85")} />
                        ))}
                      </div>
                    </div>
                    <p className={cn("font-gc-display text-[1.75rem] font-bold", dark ? "text-white" : "text-gc-ink")}>{th.name}</p>
                  </div>
                  <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                    <Eyebrow className="w-fit">{L(th.category)}</Eyebrow>
                    <p className="mt-4 flex-1 text-gc-body text-gc-ink-60">{L(th.tagline)}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {th.features.map((f, k) => (
                        <li key={k} className="rounded-full bg-white px-3 py-1.5 text-gc-small font-medium text-gc-ink-70 ring-1 ring-inset ring-gc-line">
                          {L(f)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Stagger.Item>
            );
          })}
        </Stagger>
        <p className="mt-10 text-center text-gc-small text-gc-ink-50">{L(THEMES_COPY.previewPending)}</p>
      </Panel>

      <BrandCTA />
    </>
  );
}

/* ── Status ──────────────────────────────────────────────────────────── */

/** Functional status colours, not brand decoration. */
const STATE_STYLE = {
  operational: { dot: "bg-gc-success", text: "text-gc-success", label: STATUS_COPY.operational },
  degraded: { dot: "bg-gc-warning", text: "text-gc-warning", label: STATUS_COPY.degraded },
  down: { dot: "bg-gc-danger", text: "text-gc-danger", label: STATUS_COPY.down },
} as const;

export function Status() {
  const { L } = useI18n();
  const anyDegraded = STATUS_SERVICES.some((s) => s.state !== "operational");

  return (
    <>
      <PageHero crumbs={[{ label: STATUS_COPY.crumb }]} eyebrow={STATUS_COPY.eyebrow} title={STATUS_COPY.title} body={STATUS_COPY.body} pattern="tl">
        <div
          className={cn(
            "hero-rise mt-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-gc-small font-semibold ring-1 ring-inset",
            anyDegraded ? "bg-gc-warning-10 text-gc-warning ring-gc-warning/20" : "bg-gc-success-10 text-gc-success ring-gc-success/20",
          )}
        >
          <span aria-hidden className={cn("size-2 rounded-full", anyDegraded ? "bg-gc-warning" : "bg-gc-success")} />
          {L(anyDegraded ? STATUS_COPY.degraded : STATUS_COPY.operational)}
        </div>
      </PageHero>

      <Panel tone="white" pattern="br" inner="py-12 md:py-16">
        <Reveal className="mx-auto max-w-3xl space-y-3">
          {STATUS_SERVICES.map((s, i) => {
            const st = STATE_STYLE[s.state];
            return (
              <div key={i} className="flex items-center justify-between gap-4 rounded-[20px] bg-gc-canvas px-6 py-5">
                <span className="font-gc-display text-[1.0625rem] font-bold text-gc-ink">{L(s.label)}</span>
                <span className={cn("inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-1.5 text-gc-small font-semibold ring-1 ring-inset ring-gc-line", st.text)}>
                  <span aria-hidden className={cn("size-2 rounded-full", st.dot)} />
                  {L(st.label)}
                </span>
              </div>
            );
          })}
          <p className="pt-3 text-center text-gc-small text-gc-ink-50">{L(STATUS_COPY.sample)}</p>
        </Reveal>
      </Panel>

      <BrandCTA />
    </>
  );
}

/* ── Legal ───────────────────────────────────────────────────────────── */

export function Legal({ slug }: { slug: string }) {
  const { L } = useI18n();
  const doc = LEGAL_DOCS.find((d) => d.slug === slug);
  if (!doc) throw new Error(`Legal: unknown document "${slug}"`);

  return (
    <>
      <PageHero crumbs={[{ label: LEGAL_COPY.crumb }, { label: doc.title }]} title={doc.title} body={doc.intro} pattern="tl" />

      <Panel tone="white" inner="py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
          <nav aria-label={L(LEGAL_COPY.contents)} className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-[24px] bg-gc-canvas p-5">
              <p className="gc-eyebrow text-gc-eyebrow font-semibold uppercase text-gc-royal">{L(LEGAL_COPY.contents)}</p>
              <ol className="mt-4 space-y-1">
                {doc.sections.map((s, i) => (
                  <li key={i}>
                    <a href={`#s-${i}`} className="block rounded-xl px-3 py-2 text-gc-small text-gc-ink-60 transition-colors hover:bg-white hover:text-gc-royal">
                      {i + 1}. {L(s.heading)}
                    </a>
                  </li>
                ))}
              </ol>
              <ul className="mt-4 space-y-1 border-t border-gc-line pt-4">
                {LEGAL_DOCS.filter((d) => d.slug !== slug).map((d) => (
                  <li key={d.slug}>
                    <Link href={`/${d.slug}`} className="block rounded-xl px-3 py-2 text-gc-small font-semibold text-gc-ink-70 transition-colors hover:bg-white hover:text-gc-royal">
                      {L(d.title)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="max-w-3xl">
            <div className="flex gap-3 rounded-[20px] bg-gc-royal-10 p-5 ring-1 ring-inset ring-gc-royal/15">
              <IconTile name="AlertCircle" size="sm" tone="white" />
              <p className="text-gc-small text-gc-ink-70">{L(LEGAL_COPY.notice)}</p>
            </div>

            <div className="mt-10 space-y-10">
              {doc.sections.map((s, i) => (
                <section key={i} id={`s-${i}`} className="scroll-mt-28">
                  <h2 className="text-[1.375rem] leading-snug text-gc-ink">
                    {i + 1}. {L(s.heading)}
                  </h2>
                  <p className="mt-3 text-gc-body text-gc-ink-60">{L(s.body)}</p>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-gc-line pt-6">
              <GcButton href="/contact?topic=general" variant="secondary" withArrow>
                {L(loc("Ask a question", "প্রশ্ন করুন"))}
              </GcButton>
            </div>
          </div>
        </div>
      </Panel>
    </>
  );
}

/* ── Migration ───────────────────────────────────────────────────────── */

const MIGRATION_STEPS = [
  { icon: "ClipboardList", label: loc("Tell us what you have", "কী আছে বলুন"),
    detail: loc("A store, a spreadsheet, a Facebook page, or some of each.", "একটা স্টোর, একটা স্প্রেডশিট, একটা ফেসবুক পেজ — বা সবগুলোই।") },
  { icon: "Database", label: loc("We map it once", "একবার মিলিয়ে নেওয়া হয়"),
    detail: loc("Columns and categories are matched to GridCommerce fields.", "কলাম আর ক্যাটাগরি গ্রিডকমার্সের ঘরের সাথে মেলানো হয়।") },
  { icon: "Eye", label: loc("You check the import", "আপনি দেখে নেন"),
    detail: loc("A preview runs before anything is written.", "কিছু লেখার আগেই একটা প্রিভিউ চলে।") },
  { icon: "ArrowRightLeft", label: loc("Run both for a while", "কিছুদিন দুটোই চলুক"),
    detail: loc("The old setup keeps selling until the new one is carrying real orders.", "নতুনটা আসল অর্ডার সামলানো শুরু না করা পর্যন্ত পুরনোটা চলতে থাকে।") },
];

export function MigrationPage() {
  const { L } = useI18n();

  return (
    <>
      <PageHero
        crumbs={[{ label: loc("Migration", "মাইগ্রেশন") }]}
        eyebrow={loc("Migration", "মাইগ্রেশন")}
        title={loc("Bring what you have. Keep selling while you move.", "যা আছে নিয়ে আসুন। সরানোর সময়ও বিক্রি চলবে।")}
        body={loc(
          "Nothing is switched off during a move. Products, customers and past orders come across with their history.",
          "সরানোর সময় কিছুই বন্ধ হয় না। পণ্য, কাস্টমার আর পুরনো অর্ডার ইতিহাসসহ চলে আসে।",
        )}
      pattern="tl"
        aside={
          <PhotoFrame
            priority
            src="/merchants/wholesale-market-cartons.webp"
            alt="Wholesaler on the phone among stacked cartons in a wholesale market"
          />
        }
      />

      <Panel tone="white" pattern="br" inner="py-12 md:py-16">
        <Stagger as="ol" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
          {MIGRATION_STEPS.map((s, i) => (
            <Stagger.Item as="li" key={s.icon} className="flex h-full flex-col rounded-[24px] bg-gc-canvas p-6">
              <div className="flex items-center justify-between">
                <IconTile name={s.icon} size="sm" />
                <span className="font-gc-display text-[1.5rem] font-bold text-gc-royal/30">{i + 1}</span>
              </div>
              <p className="mt-5 font-gc-display text-[1.0625rem] font-bold text-gc-ink">{L(s.label)}</p>
              <p className="mt-2 text-gc-small text-gc-ink-60">{L(s.detail)}</p>
            </Stagger.Item>
          ))}
        </Stagger>
      </Panel>

      <BrandMigration />
      <BrandCTA />
    </>
  );
}

/* ── Help guides ─────────────────────────────────────────────────────── */

export function HelpGuides() {
  const { L } = useI18n();

  return (
    <>
      <PageHero
        crumbs={[{ label: loc("Help centre", "হেল্প সেন্টার"), href: "/help" }, { label: loc("Guides", "গাইড") }]}
        eyebrow={loc("Guides", "গাইড")}
        title={loc("Step-by-step, start to finish.", "শুরু থেকে শেষ, ধাপে ধাপে।")}
        body={loc(
          "Longer walkthroughs that cross more than one part of the platform.",
          "প্ল্যাটফর্মের একাধিক অংশ জুড়ে চলা বড় গাইড।",
        )}
      pattern="tl" />

      <Panel tone="white" pattern="br" inner="py-12 md:py-16">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {HELP_CATEGORIES.map((c) => (
            <Stagger.Item key={c.slug} className="h-full">
              <div className="flex h-full flex-col rounded-[24px] bg-gc-canvas p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <IconTile name={c.icon} size="sm" />
                  <Link href={`/help/${c.slug}`} className="font-gc-display text-[1.0625rem] font-bold text-gc-ink transition-colors hover:text-gc-royal">
                    {L(c.label)}
                  </Link>
                </div>
                <ul className="mt-5 flex-1 space-y-1">
                  {c.articles.map((art) => (
                    <li key={art.slug}>
                      <Link
                        href={`/help/${c.slug}/${art.slug}`}
                        className="block rounded-xl px-3 py-2 text-gc-small text-gc-ink-60 transition-colors hover:bg-white hover:text-gc-royal"
                      >
                        {L(art.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </Panel>

      <BrandCTA />
    </>
  );
}
