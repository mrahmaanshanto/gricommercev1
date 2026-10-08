"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { HERO, HERO_VARIANTS as V } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { EASE, HERO_STAGGER, heroDelay } from "@/lib/motion";
import { Counter } from "./shared";
import { useCards } from "./widgets";

const CLIENTS = ["merchant-boutique-owner", "merchant-skincare-live", "merchant-warehouse-scan", "merchant-cosmetics"];

/**
 * The homepage hero (chosen from the hero preview, Oct 2026). The left column has the headline with the chart
 * chip, body, dark and light buttons and an animated proof row; on the right the current
 * hero's module widgets, in two columns that scroll up in a slight 3D tilt
 * with soft fades.
 */
export function HomeHero() {
  const cards = useCards();
  const columns = [cards.filter((_, i) => i % 2 === 0), cards.filter((_, i) => i % 2 === 1)];

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[20px] bg-gradient-to-br from-white via-[#F4F8FF] to-[#EAF2FE]">
        <div aria-hidden className="pointer-events-none absolute -right-[10%] -top-[20%] -z-10 size-[42rem] rounded-full bg-gc-royal/10 blur-[110px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-[30%] left-[10%] -z-10 size-[34rem] rounded-full bg-gc-sky/15 blur-[110px]" />
        <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-5 pb-8 pt-12 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:py-0">
          <FeedCopy />

          {/* The widgets, scrolling up in a slight tilt */}
          <div aria-hidden className="relative h-[440px] min-w-0 sm:h-[520px] lg:h-[660px] [perspective:1400px]">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
              }}
            >
              <div className="mx-auto grid w-full max-w-[360px] grid-cols-2 gap-3 [transform:rotateX(6deg)_rotateY(-5deg)_rotateZ(1deg)] [transform-style:preserve-3d] sm:max-w-[400px] lg:max-w-[420px] lg:gap-4 lg:[transform:rotateX(10deg)_rotateY(-12deg)_rotateZ(2deg)]">
                {columns.map((col, c) => (
                  <div key={c} className={cn("min-w-0", c === 1 && "pt-20")}>
                    <div
                      className="gc-marquee-y flex flex-col items-center gap-3 pb-3 lg:gap-4 lg:pb-4"
                      style={{ ["--gc-marquee-duration" as string]: c ? "34s" : "28s" }}
                    >
                      {[...col, ...col].map((card, i) => (
                        <div key={`${card.key}-${i}`} className="w-full [&>*]:!w-full">
                          {card.node}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** The left column: optional status pill, headline with the chart chip, body, dark and light buttons, proof row. */
export function FeedCopy({ pill = false }: { pill?: boolean }) {
  const { t, L } = useI18n();
  const reduced = useReducedMotion();
  const F = V.feed;
  // Count the businesses up from zero once the row has appeared.
  const [count, setCount] = useState(0);
  useEffect(() => {
    const t = window.setTimeout(() => setCount(100), reduced ? 0 : 900);
    return () => window.clearTimeout(t);
  }, [reduced]);
  return (
    <div className="min-w-0 lg:py-20">
      {pill && (
        <p className="hero-rise inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-gc-ink-70 shadow-sm ring-1 ring-gc-line" style={heroDelay(HERO_STAGGER.eyebrow)}>
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-gc-success/60 motion-reduce:hidden" />
            <span className="relative size-2 rounded-full bg-gc-success" />
          </span>
          {L(F.pill)}
        </p>
      )}

      <h1 className={cn("hero-settle text-gc-display tracking-[-0.04em] text-gc-ink", pill && "mt-6")} style={heroDelay(HERO_STAGGER.headline)}>
        {L(HERO.line1)}{" "}
        <span aria-hidden className="relative -top-[0.08em] mx-[0.05em] inline-grid size-[0.9em] -rotate-6 place-items-center rounded-[0.22em] bg-gradient-to-br from-gc-accent to-[#FF8A5B] align-middle text-white shadow-[0_10px_24px_-8px_rgba(255,107,61,0.8)]">
          <TrendingUp className="size-[0.55em]" strokeWidth={2.6} />
        </span>{" "}
        <span className="text-gc-ink">{L(HERO.line2)}</span>
      </h1>

      <p className="hero-settle mt-6 max-w-[32rem] text-gc-lead text-gc-ink-60" style={heroDelay(HERO_STAGGER.lead)}>
        {L(HERO.body)}
      </p>

      <div className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row" style={heroDelay(HERO_STAGGER.actions)}>
        <Link
          href="/contact?topic=demo"
          onClick={() => trackEvent("demo_requested", { source: "hero" })}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-gc-ink px-6 text-[0.9375rem] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(17,24,39,0.7)] transition-colors hover:bg-gc-ink-70"
        >
          {t.common.bookDemo}
          <ArrowRight aria-hidden className="size-4" />
        </Link>
        <Link
          href="#how-it-works"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-white px-6 text-[0.9375rem] font-semibold text-gc-ink shadow-sm ring-1 ring-gc-line transition-colors hover:ring-gc-ink-30"
        >
          <Play aria-hidden className="size-3.5 fill-current" />
          {L(F.watch)}
        </Link>
      </div>

      <div className="hero-rise mt-12 flex flex-wrap items-center gap-x-8 gap-y-5" style={heroDelay(HERO_STAGGER.reassure)}>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2.5">
            {CLIENTS.map((c, i) => (
              <motion.span
                key={c}
                className="relative block rounded-full"
                style={{ zIndex: CLIENTS.length - i }}
                initial={reduced ? false : { opacity: 0, scale: 0.4, x: -14 }}
                animate={reduced ? undefined : { opacity: 1, scale: 1, x: 0, y: [0, 0, -5, 0] }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.6 + i * 0.12 },
                  scale: { type: "spring", stiffness: 420, damping: 18, delay: 0.6 + i * 0.12 },
                  x: { duration: 0.45, ease: EASE.outQuart, delay: 0.6 + i * 0.12 },
                  y: { duration: 1.2, times: [0, 0.5, 0.75, 1], repeat: Infinity, repeatDelay: 1.8, delay: 1.6 + i * 0.18, ease: "easeInOut" },
                }}
              >
                <Image src={`/merchants/${c}.webp`} alt="" width={64} height={64} className="size-9 rounded-full object-cover ring-[3px] ring-white" />
              </motion.span>
            ))}
            <motion.span
              aria-hidden
              className="relative grid size-9 place-items-center rounded-full bg-gc-royal text-[0.6875rem] font-bold text-white ring-[3px] ring-white"
              initial={reduced ? false : { opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 420, damping: 16, delay: 0.6 + CLIENTS.length * 0.12 }}
            >
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-gc-royal"
                animate={reduced ? undefined : { scale: [1, 1.5], opacity: [0.6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: 1.4 }}
              />
              +
            </motion.span>
          </div>
          <div>
            <p className="text-[1.125rem] font-bold leading-none tabular-nums text-gc-ink">
              <Counter value={count} duration={1.6} />+
            </p>
            <p className="mt-1 text-[0.75rem] font-medium text-gc-ink-60">{L(F.businesses)}</p>
          </div>
        </div>
        <span aria-hidden className="hidden h-10 w-px bg-gc-line sm:block" />
        <ProofTicker />
      </div>
    </div>
  );
}

/* What the ticker cycles through: couriers, then the chat platforms of the inbox. */
const TICKER = [
  {
    label: V.feed.couriers,
    logos: [
      { name: "Pathao", src: "/integrations/pathao.png", h: "h-4" },
      { name: "Steadfast", src: "/integrations/steadfast.png", h: "h-4" },
      { name: "RedX", src: "/integrations/redx.png", h: "h-4" },
    ],
  },
  {
    label: V.feed.channels,
    logos: [
      { name: "Facebook", src: "/integrations/facebook-page.png", h: "h-6" },
      { name: "Messenger", src: "/integrations/messenger.png", h: "h-6" },
      { name: "WhatsApp", src: "/integrations/whatsapp-business.png", h: "h-6" },
      { name: "Instagram", src: "/integrations/instagram.png", h: "h-6" },
      { name: "TikTok", src: "/integrations/tiktok-ads.png", h: "h-6" },
    ],
  },
];

/** Couriers, then the inbox's chat platforms: each set slides up and out as the next slides in. */
function ProofTicker() {
  const { L } = useI18n();
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = window.setInterval(() => setI((x) => (x + 1) % TICKER.length), 3200);
    return () => window.clearInterval(t);
  }, [reduced]);

  const item = TICKER[i];
  return (
    <div className="relative h-[52px] min-w-[13rem] overflow-hidden">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={i}
          className="absolute inset-x-0 top-0"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE.outQuart }}
        >
          <div className="flex h-6 items-center gap-2">
            {item.logos.map((l, k) => (
              <motion.span
                key={l.name}
                initial={reduced ? false : { y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: EASE.outQuart, delay: 0.1 + k * 0.07 }}
                className="inline-flex"
              >
                <Image src={l.src} alt={l.name} width={90} height={24} className={cn("w-auto object-contain", l.h)} />
              </motion.span>
            ))}
          </div>
          <p className="mt-1.5 text-[0.75rem] font-medium text-gc-ink-60">{L(item.label)}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
