"use client";

import Image from "next/image";
import { BadgeCheck, Heart, MousePointer2, ShoppingBag, ThumbsUp, Truck } from "lucide-react";
import { HERO, HERO_VARIANTS as V } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { ChannelLogo, Counter } from "../shared";
import { useNum } from "../../sections/kit";
import { HeroActions, HeroBody, Sticker } from "./parts";

/**
 * Variant 1 — Spotlight. Copy on the left with a stats row; on the right a
 * merchant photo with order stickers, reactions and a name tag floating
 * around it (after the Cartivo reference).
 */
export function HeroSpotlight() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[28px] bg-gradient-to-br from-[#F3F0FF] via-white to-[#EAF3FF] md:rounded-[40px]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-12 pt-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-16 lg:pt-16">
          <div className="min-w-0">
            <h1 className="hero-settle text-gc-display tracking-[-0.035em] text-gc-ink" style={heroDelay(HERO_STAGGER.headline)}>
              <span className="block">{L(HERO.line1)}</span>
              <span className="block text-gc-accent">{L(HERO.line2)}</span>
            </h1>
            <HeroBody className="mt-6 max-w-[34rem]" />
            <HeroActions className="mt-8" />
            <dl className="hero-rise mt-12 grid max-w-[30rem] grid-cols-3 divide-x divide-gc-line" style={heroDelay(HERO_STAGGER.reassure)}>
              {V.stats.map((s, i) => (
                <div key={i} className="px-4 first:pl-0">
                  <dt className="sr-only">{L(s.label)}</dt>
                  <dd className={["text-[2rem] font-bold leading-none tracking-tight", ["text-gc-royal", "text-gc-accent", "text-gc-success"][i]].join(" ")}>{s.value}</dd>
                  <dd className="mt-2 text-[0.8125rem] leading-snug text-gc-ink-60">{L(s.label)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div aria-hidden className="relative mx-auto h-[420px] w-full max-w-[460px] sm:h-[480px]">
            <div className="absolute inset-x-8 bottom-6 top-6 rotate-[3deg] rounded-[36px] bg-gradient-to-br from-gc-royal-20 to-[#E4DCFF]" />
            <div className="absolute inset-x-10 bottom-10 top-2 overflow-hidden rounded-[32px] shadow-[0_40px_80px_-40px_rgba(10,40,100,0.6)]">
              <Image src="/merchants/merchant-boutique-owner.webp" alt="" fill priority sizes="420px" className="object-cover object-[50%_20%]" />
            </div>

            <span className="gc-float absolute right-6 top-0 grid size-12 place-items-center rounded-full bg-gc-royal text-white shadow-lg">
              <ThumbsUp className="size-5" />
            </span>
            <span className="gc-float absolute left-2 top-2 grid size-14 place-items-center rounded-2xl bg-white text-[1.75rem] shadow-lg [animation-delay:-2s]">
              <ChannelLogo channel="facebook" size={30} />
            </span>
            <span className="gc-float absolute right-0 top-32 flex items-center gap-1 rounded-2xl bg-[#FF4D6D] px-3 py-2 text-[0.8125rem] font-bold text-white shadow-lg [animation-delay:-1s]">
              <Heart className="size-4 fill-current" /> +12
            </span>

            <div className="gc-float absolute left-0 bottom-14 [animation-delay:-3s]">
              <span className="flex items-center gap-1.5 rounded-full bg-gc-success px-3 py-1.5 text-[0.8125rem] font-semibold text-white shadow-lg">
                {V.names.a}
              </span>
              <MousePointer2 className="absolute -right-3 -top-3 size-5 fill-gc-ink text-gc-ink" />
            </div>

            <Sticker className="gc-float absolute -right-2 bottom-2 w-[13.5rem] bg-[#FFF6D9] [animation-delay:-1.5s]">
              <p className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-gc-ink-60">
                <ShoppingBag className="size-3.5" /> {L(V.newOrder)} · #GC-1042
              </p>
              <p className="mt-1 text-[1.375rem] font-bold tabular-nums text-gc-ink">
                <Counter value={2450} prefix="৳" />
              </p>
              <p className="mt-1 flex items-center gap-1 text-[0.75rem] font-semibold text-gc-royal">
                <Truck className="size-3.5" /> {L(V.booked)}
              </p>
            </Sticker>

            <Sticker className="gc-float absolute -left-8 top-[38%] hidden w-[10rem] sm:block [animation-delay:-4s]">
              <p className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-gc-success">
                <BadgeCheck className="size-4" /> {L(V.codIn)}
              </p>
              <p className="mt-0.5 text-[1.125rem] font-bold tabular-nums text-gc-ink">{n(18400, { money: true })}</p>
            </Sticker>
          </div>
        </div>
      </div>
    </section>
  );
}
