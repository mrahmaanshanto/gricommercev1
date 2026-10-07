"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Stagger } from "@/components/motion";
import { BrandCTA } from "@/components/brand/home/BrandCTA";
import { GcButton, IconTile, Panel, SectionHead } from "@/components/brand/primitives";
import { PageHero } from "./pages/PageHero";
import { MODULES_COPY } from "@/data/copy/home";
import { MODULES, MODULE_BY_SLUG, MODULE_UI } from "@/data/copy/modules";
import { FEATURES } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { loc } from "@/i18n/types";

const COPY = {
  eyebrow: loc("Features", "ফিচার"),
  title: loc("Everything GridCommerce does.", "গ্রিডকমার্স যা যা করে।"),
  body: loc(
    "Grouped by how you actually run the business, not by which team built it.",
    "কোন টিম বানিয়েছে সেভাবে নয় — আপনি যেভাবে ব্যবসা চালান, সেভাবে সাজানো।",
  ),
  supporting: loc("Supporting features", "সহায়ক ফিচার"),
};

const cardClass =
  "flex h-full flex-col rounded-[24px] p-6 transition-[transform,box-shadow,background-color] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-gc-float md:p-7";

/** The primary modules first, in the order `MODULES` sets, then the
 *  supporting feature pages, each labelled with the module it belongs to.
 *  Switched-off modules (wholesale) keep their route but are not listed. */
export function FeaturesIndex() {
  const { t, L } = useI18n();
  const supporting = FEATURES;

  return (
    <>
      <PageHero crumbs={[{ label: COPY.eyebrow }]} eyebrow={COPY.eyebrow} title={COPY.title} body={COPY.body} align="center" pattern="tl">
        <div className="hero-rise mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <GcButton href="/contact?topic=demo" size="lg" withArrow className="w-full sm:w-auto">
            {t.common.bookDemo}
          </GcButton>
        </div>
      </PageHero>

      <Panel tone="white" pattern="tr" inner="py-14 md:py-20">
        <SectionHead title={L(MODULES_COPY.title)} body={L(MODULES_COPY.body)} />
        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3" stagger={0.04}>
          {MODULES.map((m) => (
            <Stagger.Item key={m.slug} className="h-full">
              <Link href={`/features/${m.slug}`} className={`group/f bg-gc-canvas hover:bg-white ${cardClass}`}>
                <div className="flex items-center gap-3">
                  <IconTile name={m.icon} size="sm" />
                  <p className="font-gc-display text-[1.0625rem] font-bold text-gc-ink">{L(m.name)}</p>
                </div>
                <p className="mt-4 font-gc-display text-[1rem] font-bold leading-snug text-gc-royal">{L(m.hook)}</p>
                <p className="mt-2 flex-1 text-gc-small text-gc-ink-60">{L(m.description)}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal">
                  {L(MODULE_UI.explore)}
                  <ArrowRight aria-hidden className="size-4 transition-transform duration-[200ms] group-hover/f:translate-x-1" />
                </span>
              </Link>
            </Stagger.Item>
          ))}
        </Stagger>
      </Panel>

      {supporting.length > 0 && (
        <Panel tone="tint" pattern="bl" inner="py-14 md:py-20">
          <SectionHead title={L(COPY.supporting)} />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {supporting.map((f) => (
              <Stagger.Item key={f.slug} className="h-full">
                <Link href={`/features/${f.slug}`} className={`group/f bg-white ring-1 ring-inset ring-gc-line/80 ${cardClass}`}>
                  <IconTile name={f.icon} />
                  <p className="mt-5 font-gc-display text-[1.125rem] font-bold text-gc-ink">{L(f.name)}</p>
                  {MODULE_BY_SLUG.get(f.module) && (
                    <p className="mt-1 text-[0.8125rem] font-semibold text-gc-royal">
                      {L(MODULE_BY_SLUG.get(f.module)!.name)}
                    </p>
                  )}
                  <p className="mt-2 flex-1 text-gc-small text-gc-ink-60">{L(f.title)}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal">
                    {L(COPY.eyebrow)}
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-[200ms] group-hover/f:translate-x-1" />
                  </span>
                </Link>
              </Stagger.Item>
            ))}
          </Stagger>
        </Panel>
      )}

      <BrandCTA />
    </>
  );
}
