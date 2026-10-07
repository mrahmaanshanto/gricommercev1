"use client";

import { HERO } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { Eyebrow, GcButton } from "../primitives";
import { HeroScreens } from "./hero/HeroScreens";

/**
 * Section 1 — hero. Centred headline (second line in the italic serif
 * accent), the two actions and the fit line, then the real GridCommerce
 * dashboard full width beneath, the way product-led sites open. Copy entrances
 * are CSS (globals.css), so text and buttons paint visible from the server.
 */
export function BrandHero() {
  const { t, L } = useI18n();

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[28px] bg-white md:rounded-[40px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[70rem] -translate-x-1/2 rounded-full bg-gc-sky-10 blur-[110px]" />
          <div className="absolute bottom-[-12rem] left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-gc-royal-10 blur-[120px]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(rgba(10,91,207,0.14) 1px, transparent 1.2px)",
              backgroundSize: "22px 22px",
              maskImage: "radial-gradient(ellipse 55% 40% at 50% 22%, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 55% 40% at 50% 22%, black 10%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-5 pb-10 pt-12 md:px-8 md:pb-14 md:pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="hero-rise" style={heroDelay(HERO_STAGGER.eyebrow)}>
              <Eyebrow>{L(HERO.eyebrow)}</Eyebrow>
            </div>

            <h1 className="hero-settle mt-6 text-gc-display text-gc-ink" style={heroDelay(HERO_STAGGER.headline)}>
              <span className="block">{L(HERO.line1)}</span>
              <span className="font-gc-accent block text-[1.06em] leading-[1.05] text-gc-royal">{L(HERO.line2)}</span>
            </h1>

            <p className="hero-settle mx-auto mt-5 max-w-[40rem] text-gc-lead text-gc-ink-60" style={heroDelay(HERO_STAGGER.lead)}>
              {L(HERO.body)}
            </p>

            <div className="hero-rise mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center" style={heroDelay(HERO_STAGGER.actions)}>
              <GcButton
                href="/contact?topic=demo"
                size="lg"
                withArrow
                className="w-full sm:w-auto"
                onClick={() => trackEvent("demo_requested", { source: "hero" })}
              >
                {t.common.bookDemo}
              </GcButton>
              <GcButton href="#how-it-works" size="lg" variant="secondary" className="w-full sm:w-auto">
                {L(HERO.secondary)}
              </GcButton>
            </div>

            <p className="hero-rise mt-4 text-gc-small text-gc-ink-60" style={heroDelay(HERO_STAGGER.reassure)}>
              {L(HERO.microcopy)}
            </p>
            <p
              className="hero-rise mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-gc-small font-semibold text-gc-ink-70"
              style={heroDelay(HERO_STAGGER.reassure)}
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

          <div className="mt-10 md:mt-12">
            <HeroScreens />
          </div>
        </div>
      </div>
    </section>
  );
}
