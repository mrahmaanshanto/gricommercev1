"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, LayoutTemplate, Percent, ShieldCheck, Truck } from "lucide-react";
import { HERO_VARIANTS as V } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { useNum } from "../../sections/kit";

const POINT_ICONS = [LayoutTemplate, Percent, Truck];

/* Tiles from the ready store themes, two columns that drift past each other. */
const COLUMNS: { src: string; h: string }[][] = [
  [
    { src: "/themes/onskn-1.webp", h: "h-[190px] sm:h-[220px]" },
    { src: "/themes/delyo-1.webp", h: "h-[250px] sm:h-[290px]" },
    { src: "/themes/blakora-2.webp", h: "h-[200px] sm:h-[230px]" },
    { src: "/themes/visora-2.webp", h: "h-[240px] sm:h-[270px]" },
    { src: "/themes/ameer-2.webp", h: "h-[210px] sm:h-[240px]" },
  ],
  [
    { src: "/themes/visora-1.webp", h: "h-[240px] sm:h-[280px]" },
    { src: "/themes/ameer-1.webp", h: "h-[190px] sm:h-[220px]" },
    { src: "/themes/onskn-2.webp", h: "h-[260px] sm:h-[300px]" },
    { src: "/themes/blakora-1.webp", h: "h-[200px] sm:h-[230px]" },
    { src: "/themes/delyo-2.webp", h: "h-[230px] sm:h-[260px]" },
  ],
];

/**
 * Variant 7 — Store gallery. A clean product-page layout: trust pill, the
 * pitch for an online store with COD and couriers built in, three points,
 * the starting price beside the trial button and a "right for you?" card; on
 * the right two columns of real store-theme tiles drifting past each other
 * (after the telehealth product-page reference).
 */
export function HeroStore() {
  const { L } = useI18n();
  const n = useNum();
  const S = V.store;

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[20px] bg-white">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 pb-10 pt-10 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:py-0">
          <div className="min-w-0 lg:py-16">
            <p className="hero-rise inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[0.8125rem] font-semibold text-gc-ink-70 shadow-[0_6px_20px_-10px_rgba(17,24,39,0.35)] ring-1 ring-gc-line" style={heroDelay(HERO_STAGGER.eyebrow)}>
              <span className="grid size-5 place-items-center rounded-full bg-gc-success text-white">
                <ShieldCheck aria-hidden className="size-3" />
              </span>
              {L(S.trust)}
            </p>

            <h1 className="hero-settle mt-6 text-gc-display tracking-[-0.04em] text-gc-ink" style={heroDelay(HERO_STAGGER.headline)}>
              {L(S.title)}
            </h1>

            <ul className="hero-settle mt-7 space-y-3" style={heroDelay(HERO_STAGGER.lead)}>
              {S.points.map((p, i) => {
                const I = POINT_ICONS[i];
                return (
                  <li key={i} className="flex items-center gap-3 text-gc-body font-medium text-gc-ink-70">
                    <I aria-hidden className="size-[18px] shrink-0 text-gc-ink" />
                    {L(p)}
                  </li>
                );
              })}
            </ul>

            <div className="hero-rise mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-gc-line pt-7 sm:flex-nowrap" style={heroDelay(HERO_STAGGER.actions)}>
              <div>
                <p className="flex items-baseline gap-1 text-gc-ink">
                  <span className="text-[0.875rem] font-medium text-gc-ink-60">{L(S.from)}</span>
                  <span className="text-[2.25rem] font-bold leading-none tracking-tight tabular-nums">{n(1000, { money: true })}</span>
                  <span className="text-[1rem] font-semibold text-gc-ink-60">{L(S.perMonth)}</span>
                </p>
                <p className="mt-1.5 text-[0.8125rem] text-gc-ink-60">{L(S.trialNote)}</p>
              </div>
              <Link
                href="/signup"
                onClick={() => trackEvent("start_free_clicked", { source: "hero" })}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[12px] bg-gc-ink px-7 text-[0.9375rem] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(17,24,39,0.7)] transition-colors hover:bg-gc-ink-70 sm:w-auto"
              >
                {L(S.start)}
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>

            <Link
              href="/compare"
              className="hero-rise group mt-7 flex max-w-[26rem] items-center gap-3 rounded-2xl bg-white p-2.5 pr-4 shadow-[0_18px_40px_-22px_rgba(17,24,39,0.45)] ring-1 ring-gc-line transition-shadow hover:shadow-[0_22px_48px_-20px_rgba(17,24,39,0.5)]"
              style={heroDelay(HERO_STAGGER.reassure)}
            >
              <span className="relative size-14 shrink-0 overflow-hidden rounded-xl">
                <Image src="/themes/delyo-1.webp" alt="" fill sizes="56px" className="object-cover object-top" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[0.9375rem] font-semibold text-gc-ink">{L(S.fitTitle)}</span>
                <span className="mt-0.5 flex items-center gap-1.5 text-[0.8125rem] font-medium text-gc-ink-60">
                  <BadgeCheck aria-hidden className="size-4 text-gc-royal" /> {L(S.fitLink)}
                </span>
              </span>
              <ArrowRight aria-hidden className="size-4 text-gc-ink-50 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Store theme tiles */}
          <div
            aria-hidden
            className="relative grid h-[460px] grid-cols-2 gap-3 overflow-hidden sm:h-[560px] lg:h-[720px] lg:gap-4"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
            }}
          >
            {COLUMNS.map((col, c) => (
              <div key={c} className={cn("min-w-0", c === 1 && "pt-16")}>
                <div className={cn("gc-marquee-y flex flex-col gap-3 pb-3 lg:gap-4 lg:pb-4", c === 1 && "gc-marquee-reverse")} style={{ ["--gc-marquee-duration" as string]: c ? "48s" : "40s" }}>
                  {[...col, ...col].map((tile, i) => (
                    <div key={i} className={cn("relative shrink-0 overflow-hidden rounded-[18px] bg-gc-canvas shadow-[0_18px_36px_-24px_rgba(17,24,39,0.45)]", tile.h)}>
                      <Image src={tile.src} alt="" fill sizes="(min-width: 1024px) 300px, 45vw" className="object-cover object-top" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
