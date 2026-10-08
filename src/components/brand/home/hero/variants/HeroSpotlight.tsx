"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { BadgeCheck, Heart, MessageCircle, MousePointer2, Printer, ScanBarcode, ShieldCheck, ShoppingBag, Sparkles, ThumbsUp, Truck } from "lucide-react";
import { HERO, HERO_VARIANTS as V } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE, HERO_STAGGER, heroDelay } from "@/lib/motion";
import { Avatar, ChannelLogo, Counter } from "../shared";
import { useNum } from "../../sections/kit";
import { HeroActions, HeroBody, Sticker } from "./parts";

/**
 * Variant 1 — Spotlight. Copy on the left with a stats row; on the right a
 * slider of three sellers (boutique owner, skincare seller going live, packer
 * scanning stock), each with the order, inbox and stock stickers that match
 * what they are doing (after the Cartivo reference).
 */
export function HeroSpotlight() {
  const { L } = useI18n();

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[20px] bg-gradient-to-br from-[#F3F0FF] via-white to-[#EAF3FF]">
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

          <SpotlightSlider />
        </div>
      </div>
    </section>
  );
}

const SLIDE_MS = 5200;
const SLIDE_MS_PHONE = 3800;
const PHOTOS = [
  { src: "/merchants/merchant-boutique-owner.webp", pos: "object-[50%_20%]" },
  { src: "/merchants/merchant-skincare-live.webp", pos: "object-[45%_25%]" },
  { src: "/merchants/merchant-warehouse-scan.webp", pos: "object-[40%_30%]" },
];

/** Three sellers, one after another, each with the GridCommerce stickers that match what they are doing. */
function SpotlightSlider() {
  const { L } = useI18n();
  const reduced = useReducedMotion();
  const [slide, setSlide] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const ms = window.matchMedia("(max-width: 639px)").matches ? SLIDE_MS_PHONE : SLIDE_MS;
    const t = window.setTimeout(() => setSlide((s) => (s + 1) % PHOTOS.length), ms);
    return () => window.clearTimeout(t);
  }, [slide, tick, reduced]);

  const go = (i: number) => {
    setSlide(i);
    setTick((t) => t + 1);
  };
  const labels = [V.slides.shop, V.slides.live, V.slides.stock];

  return (
    <div className="mx-auto w-full max-w-[460px]">
      <div aria-hidden className="relative h-[420px] w-full sm:h-[480px]">
        <div className="absolute inset-x-8 bottom-6 top-6 rotate-[3deg] rounded-[20px] bg-gradient-to-br from-gc-royal-20 to-[#E4DCFF]" />
        <div className="absolute inset-x-10 bottom-10 top-2 overflow-hidden rounded-[20px] bg-gc-royal-10 shadow-[0_40px_80px_-40px_rgba(10,40,100,0.6)]">
          <AnimatePresence initial={false}>
            <motion.div
              key={slide}
              className="absolute inset-0"
              initial={reduced ? false : { opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: EASE.outQuart }}
            >
              <Image src={PHOTOS[slide].src} alt="" fill priority={slide === 0} sizes="420px" className={cn("object-cover", PHOTOS[slide].pos)} />
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide}
            className="absolute inset-0"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE.outQuart, delay: 0.15 }}
          >
            {slide === 0 ? <ShopStickers /> : slide === 1 ? <LiveStickers /> : <StockStickers />}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${L(V.slides.go)} ${i + 1}: ${L(labels[i])}`}
            aria-pressed={i === slide}
            onClick={() => go(i)}
            className={cn("relative h-2 overflow-hidden rounded-full transition-all duration-300", i === slide ? "w-10 bg-gc-royal-20" : "w-2 bg-gc-ink-30 hover:bg-gc-ink-50")}
          >
            {i === slide && !reduced && (
              <span key={tick} className="gc-step-bar absolute inset-y-0 left-0 w-full origin-left rounded-full bg-gc-royal [animation-duration:5.2s] max-sm:[animation-duration:3.8s]" />
            )}
          </button>
        ))}
      </div>
      <p className="mt-2 text-center text-[0.75rem] font-semibold text-gc-ink-60">{L(labels[slide])}</p>
    </div>
  );
}

function NameTag({ name, className, tone = "bg-gc-success" }: { name: string; className: string; tone?: string }) {
  return (
    <div className={cn("gc-float absolute", className)}>
      <span className={cn("flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.8125rem] font-semibold text-white shadow-lg", tone)}>{name}</span>
      <MousePointer2 className="absolute -right-3 -top-3 size-5 fill-gc-ink text-gc-ink" />
    </div>
  );
}

/** Slide 1: a boutique owner — a Facebook order booked with Pathao, COD money in. */
function ShopStickers() {
  const { L } = useI18n();
  const n = useNum();
  return (
    <>
      <span className="gc-float absolute right-6 top-0 grid size-12 place-items-center rounded-full bg-gc-royal text-white shadow-lg">
        <ThumbsUp className="size-5" />
      </span>
      <span className="gc-float absolute left-2 top-2 grid size-14 place-items-center rounded-2xl bg-white shadow-lg [animation-delay:-2s]">
        <ChannelLogo channel="facebook" size={30} />
      </span>
      <span className="gc-float absolute right-0 top-32 flex items-center gap-1 rounded-2xl bg-[#FF4D6D] px-3 py-2 text-[0.8125rem] font-bold text-white shadow-lg [animation-delay:-1s]">
        <Heart className="size-4 fill-current" /> +12
      </span>
      <NameTag name={V.names.a} className="bottom-14 left-0 [animation-delay:-3s]" />
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
    </>
  );
}

/** Slide 2: a skincare seller live on Instagram and TikTok — a comment answered by AI turns into an order. */
function LiveStickers() {
  const { L } = useI18n();
  return (
    <>
      <span className="gc-float absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-[#FF3B5C] px-3 py-1.5 text-[0.75rem] font-bold text-white shadow-lg">
        <span className="size-2 animate-pulse rounded-full bg-white" /> LIVE
      </span>
      <span className="gc-float absolute right-4 top-0 flex gap-1.5 [animation-delay:-2s]">
        {(["instagram", "tiktok"] as const).map((c) => (
          <span key={c} className="grid size-12 place-items-center rounded-2xl bg-white shadow-lg">
            <ChannelLogo channel={c} size={24} />
          </span>
        ))}
      </span>
      <Sticker className="gc-float absolute -left-6 top-24 w-[13rem] [animation-delay:-1s]">
        <p className="flex items-center gap-1.5 text-[0.75rem]">
          <Avatar name="Sumaiya Binte" size={20} tone={2} />
          <span className="rounded-xl rounded-tl-sm bg-gc-canvas px-2 py-1 text-gc-ink">{L(V.slides.liveComment)}</span>
        </p>
        <p className="ml-auto mt-1.5 flex w-fit items-center gap-1 rounded-xl rounded-tr-sm bg-gc-royal px-2 py-1 text-[0.75rem] text-white">
          <Sparkles className="size-3" /> {L(V.slides.liveReply)}
        </p>
      </Sticker>
      <NameTag name={V.names.c} className="bottom-28 right-0 [animation-delay:-3s]" tone="bg-[#8B5CF6]" />
      <Sticker className="gc-float absolute -left-2 bottom-2 w-[13.5rem] bg-[#F3EEFF] [animation-delay:-1.5s]">
        <p className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-gc-ink-60">
          <MessageCircle className="size-3.5" /> {L(V.slides.liveOrders)}
        </p>
        <p className="mt-1 text-[1.375rem] font-bold tabular-nums text-gc-ink">
          <Counter value={38} />
        </p>
        <p className="mt-1 flex items-center gap-1 text-[0.75rem] font-semibold text-[#6D3FD9]">
          <BadgeCheck className="size-3.5" /> {L(V.slides.fromComments)}
        </p>
      </Sticker>
    </>
  );
}

/** Slide 3: a packer scanning parcels — stock goes down, couriers booked, the buyer's record checked. */
function StockStickers() {
  const { L } = useI18n();
  return (
    <>
      <Sticker className="gc-float absolute -left-6 top-4 w-[12.5rem]">
        <p className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-gc-ink-60">
          <ScanBarcode className="size-4 text-gc-royal" /> {L(V.slides.scanned)}
        </p>
        <p className="mt-1 flex items-baseline gap-1.5 text-[1.375rem] font-bold tabular-nums text-gc-ink">
          <Counter value={11} /> <span className="text-[0.75rem] font-medium text-gc-ink-60">{L(V.slides.stockLeft)}</span>
        </p>
      </Sticker>
      <span className="gc-float absolute right-2 top-0 grid h-12 place-items-center rounded-2xl bg-white px-3 shadow-lg [animation-delay:-2s]">
        <Image src="/integrations/steadfast.png" alt="" width={110} height={24} className="h-5 w-auto" />
      </span>
      <Sticker className="gc-float absolute -right-4 top-[42%] hidden w-[11rem] sm:block [animation-delay:-4s]">
        <p className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-gc-success">
          <ShieldCheck className="size-4" /> {L(V.slides.lowRisk)}
        </p>
      </Sticker>
      <NameTag name={V.names.b} className="bottom-28 left-0 [animation-delay:-3s]" tone="bg-[#F5A524]" />
      <Sticker className="gc-float absolute -right-2 bottom-2 w-[13.5rem] bg-[#E8F6FE] [animation-delay:-1.5s]">
        <p className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-gc-ink-60">
          <Truck className="size-3.5" /> Steadfast · Pathao
        </p>
        <p className="mt-1 text-[1.375rem] font-bold tabular-nums text-gc-ink">{L(V.slides.parcels)}</p>
        <p className="mt-1 flex items-center gap-1 text-[0.75rem] font-semibold text-gc-royal">
          <Printer className="size-3.5" /> {L(V.slides.labels)}
        </p>
      </Sticker>
    </>
  );
}
