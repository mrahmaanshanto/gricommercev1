"use client";

import Image from "next/image";
import { CircleCheck, MessageCircle } from "lucide-react";
import { Floating } from "@/components/motion";
import { HERO_CARDS, HERO_CHANNELS, HERO_COPY } from "@/data/copy/home";
import { SCREENS } from "@/data/screenshots";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { Eyebrow, FloatCard, GcButton, PatternCorner } from "../primitives";

const PHOTO = {
  src: "/merchants/hero-businessman-stockroom.webp",
  alt: "Business owner checking orders on a tablet in a stockroom stacked with products and parcels",
};

/**
 * Section 1 — hero. Copy is imported from the original hero, unchanged.
 *
 * Photo-led, following the website mockup in the Brand Guidelines (p.43): the
 * merchant and his stock carry the first impression, and the product shows up
 * as a capture card and live UI cards laid over the photograph.
 */
export function BrandHero() {
  const { t, L } = useI18n();
  const capture = SCREENS.orders.mobile;

  const orderCard = (
    <FloatCard className="w-[216px]">
      <div className="flex items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gc-royal text-white">
          <CircleCheck className="size-4" strokeWidth={2} />
        </span>
        <div>
          <p className="text-[0.8125rem] font-semibold text-gc-ink">{L(HERO_CARDS.order.title)}</p>
          <p className="text-[0.75rem] text-gc-ink-50">
            {HERO_CARDS.order.id} · {HERO_CARDS.order.amount}
          </p>
        </div>
      </div>
    </FloatCard>
  );

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
                href="/signup"
                size="lg"
                withArrow
                className="w-full sm:w-auto"
                onClick={() => trackEvent("start_free_clicked", { source: "hero" })}
              >
                {t.common.startFree}
              </GcButton>
              <GcButton href="#platform" size="lg" variant="secondary" className="w-full sm:w-auto">
                {t.common.seeInAction}
              </GcButton>
            </div>

            <p className="hero-rise mt-5 text-gc-small text-gc-ink-50" style={heroDelay(HERO_STAGGER.reassure)}>
              {L(HERO_COPY.reassure)}
            </p>

            <ul className="hero-rise mt-8 flex flex-wrap gap-2" style={heroDelay(HERO_STAGGER.channels)}>
              {HERO_CHANNELS.map((channel, i) => (
                <li
                  key={i}
                  className="rounded-full bg-white px-3.5 py-1.5 text-gc-small font-medium text-gc-ink-70 ring-1 ring-inset ring-gc-line"
                >
                  {L(channel)}
                </li>
              ))}
            </ul>
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

              {/* Narrow screens: one live card inside the photograph. */}
              <div aria-hidden className="absolute bottom-3 left-3 md:hidden">
                {orderCard}
              </div>
            </div>

            <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
              <Floating className="absolute -left-4 top-[7%] lg:-left-10" amplitude={8} duration={8}>
                <FloatCard className="w-[232px]">
                  <div className="flex items-start gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gc-sky-10 text-gc-royal">
                      <MessageCircle className="size-4" strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.8125rem] font-semibold text-gc-ink">{L(HERO_CARDS.message.name)}</p>
                      <p className="mt-0.5 truncate text-[0.8125rem] text-gc-ink-60">{L(HERO_CARDS.message.text)}</p>
                      <span className="mt-1.5 inline-block rounded-full bg-gc-canvas px-2 py-0.5 text-[0.6875rem] font-medium text-gc-ink-50">
                        {L(HERO_CARDS.message.channel)}
                      </span>
                    </div>
                  </div>
                </FloatCard>
              </Floating>

              <Floating className="absolute -right-3 top-[38%] lg:-right-8" amplitude={9} duration={9.5} delay={0.6}>
                {orderCard}
              </Floating>

              <Floating
                className="absolute -bottom-1 left-6 w-[58%] lg:-left-10 lg:bottom-8"
                amplitude={6}
                duration={10}
                delay={1.1}
              >
                <div className="overflow-hidden rounded-[18px] bg-white p-1.5 shadow-gc-screen ring-1 ring-gc-line/60">
                  <Image
                    src={capture.src}
                    alt=""
                    width={capture.width}
                    height={capture.height}
                    sizes="(min-width: 1024px) 30vw, 55vw"
                    className="block h-auto w-full rounded-[13px]"
                  />
                </div>
              </Floating>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
