"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Stagger } from "@/components/motion";
import { BrandCTA } from "@/components/brand/home/BrandCTA";
import { GcButton, IconTile, Panel, SectionHead } from "@/components/brand/primitives";
import { PageHero } from "./pages/PageHero";
import { FEATURES, FEATURE_GROUPS } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { loc } from "@/i18n/types";
import { cn } from "@/lib/cn";

const COPY = {
  home: loc("Home", "হোম"),
  eyebrow: loc("Features", "ফিচার"),
  title: loc("Everything GridCommerce does.", "গ্রিডকমার্স যা যা করে।"),
  body: loc(
    "Grouped by how you actually run the business, not by which team built it.",
    "কোন টিম বানিয়েছে সেভাবে নয় — আপনি যেভাবে ব্যবসা চালান, সেভাবে সাজানো।",
  ),
};

export function FeaturesIndex() {
  const { t, L } = useI18n();

  return (
    <>
      <PageHero crumbs={[{ label: COPY.eyebrow }]} eyebrow={COPY.eyebrow} title={COPY.title} body={COPY.body} align="center" pattern="tl">
        <div className="hero-rise mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <GcButton href="/signup" size="lg" withArrow className="w-full sm:w-auto">
            {t.common.startFree}
          </GcButton>
          <GcButton href="/contact?topic=demo" size="lg" variant="secondary" className="w-full sm:w-auto">
            {t.common.bookDemo}
          </GcButton>
        </div>
      </PageHero>

      {FEATURE_GROUPS.map((group, gi) => {
        const items = FEATURES.filter((f) => f.group === group.id);
        if (items.length === 0) return null;
        const onTint = gi % 2 === 1;

        return (
          <Panel key={group.id} tone={onTint ? "tint" : "white"} pattern={onTint ? "bl" : "tr"} inner="py-14 md:py-20">
            <SectionHead eyebrow={L(group.label)} title={L(group.body)} />
            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
              {items.map((f) => (
                <Stagger.Item key={f.slug} className="h-full">
                  <Link
                    href={`/features/${f.slug}`}
                    className={cn(
                      "group/f flex h-full flex-col rounded-[24px] p-6 transition-[transform,box-shadow,background-color] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-gc-float md:p-7",
                      onTint ? "bg-white ring-1 ring-inset ring-gc-line/80" : "bg-gc-canvas hover:bg-white",
                    )}
                  >
                    <IconTile name={f.icon} />
                    <p className="mt-5 font-gc-display text-[1.125rem] font-bold text-gc-ink">{L(f.name)}</p>
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
        );
      })}

      <BrandCTA />
    </>
  );
}
