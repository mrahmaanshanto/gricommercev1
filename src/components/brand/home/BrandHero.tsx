"use client";

import { HERO_COPY } from "@/data/copy/home";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { Eyebrow, GcButton, PatternCorner } from "../primitives";
import { HeroShowcase } from "./hero/HeroShowcase";

/**
 * H01–H02 hero, with one dominant demo action.
 *
 * A light panel: the headline on the left (its last clause set in the italic
 * serif accent) and a compact three-part product tour on the right —
 * Customers, the omnichannel inbox, and one order travelling from checkout to
 * the bank — stacked below 1280px. The tour is drawn from the merchant app's
 * own screens; every name and figure in it is demo data, and it says so.
 */
export function BrandHero() {
  const { t, L } = useI18n();

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[28px] bg-white md:rounded-[40px]">
        {/* Daylight: brand blues pooling behind the tour, a dot field under it. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-[10%] -top-[30%] size-[46rem] rounded-full bg-gc-sky-10 blur-[110px]" />
          <div className="absolute -bottom-[35%] right-[18%] size-[34rem] rounded-full bg-gc-royal-10 blur-[120px]" />
          <div
            className="absolute inset-y-0 right-0 w-full xl:w-[58%]"
            style={{
              backgroundImage: "radial-gradient(rgba(10,91,207,0.16) 1px, transparent 1.2px)",
              backgroundSize: "22px 22px",
              maskImage: "radial-gradient(ellipse 60% 55% at 60% 45%, black 20%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 60% 45%, black 20%, transparent 70%)",
            }}
          />
        </div>
        <PatternCorner position="bl" />

        <div className="relative mx-auto grid max-w-[1320px] gap-12 px-5 pb-10 pt-12 md:px-8 md:pb-12 md:pt-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,37rem)] xl:items-center xl:gap-14 xl:px-12 xl:py-16">
          <div className="text-center xl:text-left">
            {/* CSS entrance (globals.css): paints visible from the server HTML. */}
            <div className="hero-rise" style={heroDelay(HERO_STAGGER.eyebrow)}>
              <Eyebrow>{L(HERO_COPY.eyebrow)}</Eyebrow>
            </div>

            <h1
              className="hero-settle mx-auto mt-6 max-w-[16ch] text-gc-display text-gc-ink xl:mx-0"
              style={heroDelay(HERO_STAGGER.headline)}
            >
              {L(HERO_COPY.headline)}{" "}
              <span className="font-gc-accent text-[1.12em] leading-[0.9] text-gc-royal">{L(HERO_COPY.headlineAccent)}</span>
            </h1>

            <p
              className="hero-settle mx-auto mt-6 max-w-[36rem] text-gc-lead text-gc-ink-60 xl:mx-0"
              style={heroDelay(HERO_STAGGER.lead)}
            >
              {L(HERO_COPY.sub)}
            </p>

            <div
              className="hero-rise mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center xl:justify-start"
              style={heroDelay(HERO_STAGGER.actions)}
            >
              <GcButton
                href="/contact?topic=demo"
                size="lg"
                withArrow
                className="w-full sm:w-auto"
                onClick={() => trackEvent("demo_requested", { source: "hero" })}
              >
                {t.common.bookDemo}
              </GcButton>
              <GcButton href="#modules" size="lg" variant="secondary" className="w-full sm:w-auto">
                {L(HERO_COPY.exploreModules)}
              </GcButton>
            </div>

            <p className="hero-rise mt-5 text-gc-small text-gc-ink-50" style={heroDelay(HERO_STAGGER.reassure)}>
              {L(HERO_COPY.microcopy)}
            </p>
          </div>

          <div
            className="hero-rise relative mx-auto w-full min-w-0 max-w-[960px] xl:max-w-none"
            style={heroDelay(HERO_STAGGER.channels)}
          >
            <HeroShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
