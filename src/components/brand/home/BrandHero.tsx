"use client";

import { HERO } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { GcButton } from "../primitives";
import { HeroGallery } from "./hero/HeroGallery";

/**
 * Section 1 — hero, kept compact. A light aurora panel (soft brand glows
 * drifting over a pale canvas and a fine grid, all CSS), the headline centred
 * with its second line in royal blue, the demo action, and a
 * curved gallery of small module widgets turning beneath.
 * Copy entrances are CSS (globals.css), so text and buttons paint visible
 * from the server HTML.
 */
export function BrandHero() {
  const { t, L } = useI18n();

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[28px] bg-[#F4F8FF] md:rounded-[40px]">
        <Aurora />

        <div className="relative mx-auto max-w-[1240px] px-5 pt-9 md:px-8 md:pt-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="hero-settle text-gc-h1 text-gc-ink" style={heroDelay(HERO_STAGGER.headline)}>
              <span className="block">{L(HERO.line1)}</span>
              <span className="block text-gc-royal">{L(HERO.line2)}</span>
            </h1>

            <p className="hero-settle mx-auto mt-4 max-w-[38rem] text-gc-body text-gc-ink-60 md:text-[1.0625rem]" style={heroDelay(HERO_STAGGER.lead)}>
              {L(HERO.body)}
            </p>

            <div className="hero-rise mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:items-center" style={heroDelay(HERO_STAGGER.actions)}>
              <GcButton
                href="/contact?topic=demo"
                size="md"
                withArrow
                className="w-full sm:w-auto"
                onClick={() => trackEvent("demo_requested", { source: "hero" })}
              >
                {t.common.bookDemo}
              </GcButton>
            </div>
            <p className="hero-rise mt-3 text-gc-small text-gc-ink-60" style={heroDelay(HERO_STAGGER.reassure)}>
              {L(HERO.microcopy)}
            </p>
          </div>
        </div>

        <div className="relative mt-5 md:mt-6">
          <HeroGallery />
        </div>

        <p
          className="hero-rise relative flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 pb-7 pt-1 text-gc-small font-semibold text-gc-ink-70 md:pb-8"
          style={heroDelay(HERO_STAGGER.channels)}
        >
          <span className="sr-only">{L(HERO.fitLabel)}: </span>
          {HERO.fit.map((f, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              {i > 0 && <span aria-hidden className="size-1 rounded-full bg-gc-ink-30" />}
              {L(f)}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

/** Light aurora: brand glows drifting slowly over a pale canvas, with a fine grid. CSS only. */
function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#EEF4FF] via-white to-[#F2F7FF]" />
      <div className="gc-drift absolute -left-[10%] -top-[30%] size-[38rem] rounded-full bg-gc-royal/20 blur-[110px]" />
      <div className="gc-drift absolute -right-[8%] -top-[20%] size-[34rem] rounded-full bg-gc-sky/25 blur-[110px] [animation-delay:-6s]" />
      <div className="gc-drift absolute bottom-[-35%] left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full bg-gc-royal-20/70 blur-[100px] [animation-delay:-11s]" />
      <div className="gc-drift absolute bottom-[10%] right-[12%] size-[16rem] rounded-full bg-gc-accent/10 blur-[80px] [animation-delay:-3s]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,91,207,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,91,207,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 60% 55% at 50% 30%, black 15%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 50% 30%, black 15%, transparent 75%)",
        }}
      />
    </div>
  );
}
