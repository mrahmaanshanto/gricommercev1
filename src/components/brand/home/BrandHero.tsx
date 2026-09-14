"use client";

import Image from "next/image";
import { Floating } from "@/components/motion";
import { HERO_COPY } from "@/data/copy/home";
import { SCREENS } from "@/data/screenshots";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { Eyebrow, GcButton, PatternCorner } from "../primitives";

const PHOTO = {
  src: "/merchants/hero-businessman-stockroom.webp",
  alt: "Business owner checking orders on a tablet in a stockroom stacked with products and parcels",
};

/**
 * H01–H02 hero, with one dominant demo action.
 *
 * Photo-led, following the website mockup in the Brand Guidelines (p.43), with
 * a real product capture laid over the photograph. The copy handoff rules out
 * invented customers and figures here, so no sample message or order cards
 * sit on the image, and the capture carries a "Demo data" label.
 */
export function BrandHero() {
  const { t, L } = useI18n();
  const capture = SCREENS.orders.mobile;

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[28px] bg-white md:rounded-[40px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-[12%] -top-[35%] size-[50rem] rounded-full bg-gc-sky-20 blur-[120px]" />
          <div className="absolute -bottom-[45%] -left-[10%] size-[38rem] rounded-full bg-gc-royal-10 blur-[120px]" />
        </div>
        <PatternCorner position="bl" />

        <div className="container-page relative grid items-center gap-14 py-12 md:py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 lg:py-20">
          {/* CSS entrance (globals.css): paints visible from the server HTML. */}
          <div className="max-w-[35rem]">
            <div className="hero-rise" style={heroDelay(HERO_STAGGER.eyebrow)}>
              <Eyebrow>{L(HERO_COPY.eyebrow)}</Eyebrow>
            </div>

            <h1 className="hero-settle mt-6 text-gc-display text-gc-ink" style={heroDelay(HERO_STAGGER.headline)}>
              {L(HERO_COPY.headline)} <span className="text-gc-royal">{L(HERO_COPY.headlineAccent)}</span>
            </h1>

            <p className="hero-settle mt-6 text-gc-lead text-gc-ink-60" style={heroDelay(HERO_STAGGER.lead)}>
              {L(HERO_COPY.sub)}
            </p>

            <div
              className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
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

          {/* Photograph with the product laid over it. It is the largest element in
              the hero, so it uses `hero-settle` (moves only) rather than `hero-rise`,
              which starts from opacity 0 and would hold back the first paint. */}
          <div className="hero-settle relative md:pb-12 lg:pb-0" style={heroDelay(HERO_STAGGER.lead)}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-gc-screen md:rounded-[36px] lg:aspect-square">
              <Image
                src={PHOTO.src}
                alt={PHOTO.alt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gc-dark/50 to-transparent" />
            </div>

            <div className="pointer-events-none absolute inset-0 hidden md:block">
              <Floating
                className="absolute -bottom-1 left-6 w-[58%] lg:-left-10 lg:bottom-8"
                amplitude={6}
                duration={10}
                delay={1.1}
              >
                <div className="relative overflow-hidden rounded-[18px] bg-white p-1.5 shadow-gc-screen ring-1 ring-gc-line/60">
                  <Image
                    src={capture.src}
                    alt=""
                    width={capture.width}
                    height={capture.height}
                    sizes="(min-width: 1024px) 30vw, 55vw"
                    className="block h-auto w-full rounded-[13px]"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-gc-dark/75 px-2.5 py-0.5 text-[0.6875rem] font-semibold text-white">
                    {t.common.demoData}
                  </span>
                </div>
              </Floating>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
