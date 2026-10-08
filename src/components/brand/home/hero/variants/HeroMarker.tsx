"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, BadgeCheck, ShieldCheck, Truck, Wallet } from "lucide-react";
import { HERO, HERO_VARIANTS as V } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { Counter } from "../shared";
import { useNum } from "../../sections/kit";
import { HeroActions, HeroBody, Sticker } from "./parts";

const STRIP_ICONS = { ShieldCheck, Truck, Wallet } as const;

/**
 * Variant 4 — Highlight. A thin announcement bar, the trust line, a centred
 * headline with its key words on a marker highlight and a hand-drawn
 * underline, money cards floating at both edges and a three-point strip
 * below (after the Slate reference).
 */
export function HeroMarker() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[20px] bg-[#F4F7FB]">
        <a href="#fraud" className="flex items-center justify-center gap-2 bg-gc-ink px-4 py-2.5 text-center text-[0.8125rem] font-medium text-white">
          <ShieldCheck aria-hidden className="size-4 shrink-0 text-gc-sky" />
          {L(V.announce)}
          <ArrowRight aria-hidden className="size-3.5" />
        </a>

        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ backgroundImage: "radial-gradient(rgba(10,91,207,0.14) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />

        <div className="relative mx-auto max-w-[1240px] px-5 pb-10 pt-14 text-center md:px-8 md:pt-20">
          <p className="hero-rise text-[0.9375rem] font-semibold text-gc-ink-70" style={heroDelay(HERO_STAGGER.eyebrow)}>
            {L(V.trust)}
          </p>
          <h1 className="hero-settle mx-auto mt-5 max-w-4xl text-gc-display tracking-[-0.035em] text-gc-ink" style={heroDelay(HERO_STAGGER.headline)}>
            <span className="block">{L(HERO.line1)}</span>
            <span className="relative mt-1 inline-block">
              <motion.span
                aria-hidden
                className="absolute -inset-x-3 inset-y-1 -z-10 origin-left rounded-xl bg-[#C9E8FF]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
              />
              {L(HERO.line2)}
              <svg aria-hidden viewBox="0 0 400 20" preserveAspectRatio="none" className="absolute -bottom-4 left-[8%] h-4 w-[84%]">
                <path d="M4 12 C 80 2, 160 18, 240 8 S 360 6, 396 12" fill="none" stroke="var(--color-gc-ink)" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" className="gc-draw" style={{ ["--gc-len" as string]: 420 }} />
              </svg>
            </span>
          </h1>
          <HeroBody className="mx-auto mt-9 max-w-[36rem]" />
          <HeroActions center className="mt-8" />

        </div>

        {/* Side cards */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[96px] top-[42px] hidden xl:block">
          <Sticker className="gc-float absolute left-6 top-16 w-[15rem] text-left">
            <p className="text-[0.875rem] font-bold text-gc-ink">{L(V.sales)}</p>
            <div className="relative mt-3">
              <span className="absolute left-[44%] top-0 rounded-md bg-[#C9E8FF] px-1.5 py-0.5 text-[0.6875rem] font-bold text-gc-royal">{n(28900, { money: true })}</span>
              <svg viewBox="0 0 220 80" className="h-24 w-full">
                <path d="M6 64 C 26 40, 40 40, 56 56 S 86 30, 98 28 S 116 70, 132 66 S 150 6, 166 12 S 190 70, 214 34" fill="none" stroke="var(--color-gc-ink)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="98" cy="28" r="4" fill="var(--color-gc-ink)" />
              </svg>
              <div className="flex justify-between px-1 text-[0.625rem] font-semibold text-gc-ink-50">
                {["S", "S", "M", "T", "W", "T", "F"].map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>
            </div>
          </Sticker>
          <Sticker className="gc-float absolute left-3 bottom-10 w-[14rem] text-left [animation-delay:-2s]">
            <div className="flex items-center justify-between">
              <Image src="/integrations/steadfast.png" alt="" width={90} height={20} className="h-3.5 w-auto" />
              <span className="rounded-lg bg-gc-ink px-2.5 py-1 text-[0.6875rem] font-semibold text-white">{L(V.matched)}</span>
            </div>
            <p className="mt-3 text-[1.75rem] font-bold leading-none text-gc-ink">98%</p>
            <p className="mt-1 text-[0.75rem] text-gc-ink-60">{L(V.status[2])}</p>
          </Sticker>
          <Sticker className="gc-float absolute right-6 top-16 w-[14rem] text-left [animation-delay:-1s]">
            <p className="text-[0.875rem] font-bold text-gc-ink">{L(V.codIn)}</p>
            <div className="mt-3 flex items-center gap-3 border-t border-gc-line pt-3">
              <span className="grid size-10 place-items-center rounded-full bg-[#C9E8FF] text-gc-royal">
                <Wallet className="size-5" />
              </span>
              <span className="text-[1.75rem] font-bold text-gc-ink">
                <Counter value={18400} prefix="৳" />
              </span>
            </div>
          </Sticker>
          <Sticker className="gc-float absolute right-3 bottom-10 w-[15rem] text-left [animation-delay:-3s]">
            <div className="flex items-center justify-between">
              <p className="text-[0.875rem] font-bold text-gc-ink">{L(V.balance)}</p>
              <span className="rounded-full bg-gc-ink px-2.5 py-1 text-[0.6875rem] font-semibold text-white">Pathao</span>
            </div>
            <p className="mt-3 text-[1.375rem] font-bold tabular-nums text-gc-ink">{n(29474, { money: true })}</p>
            <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#C9E8FF] px-3 py-2 text-[0.75rem] font-semibold text-gc-royal">
              <BadgeCheck className="size-4" /> {L(V.matched)}
              <span className="ml-auto h-1.5 w-16 rounded-full bg-gc-royal" />
            </div>
          </Sticker>
        </div>
        <ul className="relative grid gap-4 border-t border-gc-line bg-white px-5 py-6 sm:grid-cols-3 md:px-12">
          {V.strip.map((s, i) => {
            const I = STRIP_ICONS[s.icon as keyof typeof STRIP_ICONS];
            return (
              <li key={i} className="flex items-center gap-3 sm:justify-center">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gc-canvas text-gc-ink">
                  <I aria-hidden className="size-5" />
                </span>
                <span className="text-gc-small font-medium text-gc-ink-70">{L(s.text)}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
