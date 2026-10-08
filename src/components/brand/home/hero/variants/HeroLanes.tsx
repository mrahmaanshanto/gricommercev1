"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ChartLine, Package, PhoneCall, RefreshCw, Truck, Wallet, type LucideIcon } from "lucide-react";
import { HERO_VARIANTS as V } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import type { Localized } from "@/i18n/types";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { useNum } from "../../sections/kit";

const C = V.lanes.cards;
const TINT = { rose: "#fbe4e2", sand: "#f5eddf", mint: "#e1f2ea", sky: "#e2eff9", lilac: "#ece7fa", lemon: "#faf3d6", peach: "#fde8d8" } as const;

type Card =
  | { kind: "photo"; img: string; tint: keyof typeof TINT; cap: Localized }
  | { kind: "info"; icon: LucideIcon; strong?: boolean; head: Localized; title?: Localized; line: Localized; amount?: number | Localized };

const cap = (en: string, bn: string): Localized => ({ en, bn });

/* Three lanes of products and the orders around them, as on the landing page. */
const LANES: { reverse?: boolean; seconds: number; cards: Card[] }[] = [
  {
    seconds: 80,
    cards: [
      { kind: "photo", img: "saree-1", tint: "rose", cap: cap("Saree", "শাড়ি") },
      { kind: "info", icon: RefreshCw, head: C.newOrder, title: C.mirpur, line: C.fbCod },
      { kind: "photo", img: "saree-2", tint: "sky", cap: cap("Fabric", "কাপড়") },
      { kind: "photo", img: "honey", tint: "lemon", cap: cap("Honey", "মধু") },
      { kind: "info", icon: Check, strong: true, head: C.codMatched, line: C.steadfastPayout, amount: C.orders27 },
      { kind: "photo", img: "skincare", tint: "lilac", cap: cap("Skincare", "স্কিনকেয়ার") },
      { kind: "info", icon: PhoneCall, head: C.byCall, title: cap("Nusrat Jahan", "নুসরাত জাহান"), line: C.items2 },
    ],
  },
  {
    reverse: true,
    seconds: 95,
    cards: [
      { kind: "info", icon: Truck, head: C.pickedUp, title: C.parcels12, line: C.dhanmondi },
      { kind: "photo", img: "sunglasses", tint: "peach", cap: cap("Sunglasses", "সানগ্লাস") },
      { kind: "photo", img: "phone-accessory", tint: "mint", cap: cap("Charger", "চার্জার") },
      { kind: "info", icon: Package, head: C.returned, title: C.backInStock, line: C.refused },
      { kind: "photo", img: "handbag-1", tint: "sand", cap: cap("Bag", "ব্যাগ") },
      { kind: "info", icon: ChartLine, strong: true, head: C.delivered, line: C.afterAds, amount: 590 },
      { kind: "photo", img: "watch-1", tint: "sky", cap: cap("Watch", "ঘড়ি") },
    ],
  },
  {
    seconds: 72,
    cards: [
      { kind: "photo", img: "sneakers-1", tint: "rose", cap: cap("Sneakers", "স্নিকার্স") },
      { kind: "info", icon: RefreshCw, head: C.newOrder, title: C.agrabad, line: C.phoneCod },
      { kind: "photo", img: "mug", tint: "peach", cap: cap("Mug", "মগ") },
      { kind: "info", icon: Wallet, strong: true, head: C.owed, line: C.pathaoSteadfast, amount: 210700 },
      { kind: "photo", img: "lentils", tint: "mint", cap: cap("Lentils", "ডাল") },
      { kind: "info", icon: Truck, head: C.transit, title: C.sylhet, line: C.steadfastId },
      { kind: "photo", img: "three-piece", tint: "lilac", cap: cap("Three-piece", "থ্রি-পিস") },
    ],
  },
];

/**
 * Variant 8 — Product lanes, ported from the "Grid Commerce" landing page in
 * Downloads. Three lanes of product photos and order cards drift sideways
 * (the middle one the other way) behind a centred, softly faded headline. On
 * wide screens the lanes sit behind the copy; on phones they run below it.
 */
export function HeroLanes() {
  const { t, L } = useI18n();
  const H = V.lanes;

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto flex max-w-[1440px] flex-col overflow-clip rounded-[28px] bg-[#F6F9FD] md:rounded-[40px] lg:grid lg:min-h-[860px] lg:items-center">
        {/* Lanes */}
        <div aria-hidden className="order-2 mt-10 grid gap-3.5 pb-10 lg:absolute lg:inset-x-0 lg:top-7 lg:z-[1] lg:mt-0 lg:gap-5 lg:pb-0">
          {LANES.map((lane, i) => (
            <div key={i} className="overflow-hidden">
              <div
                className={cn("gc-marquee flex w-max gap-3.5 pr-3.5 lg:gap-5 lg:pr-5", lane.reverse && "gc-marquee-reverse")}
                style={{ ["--gc-marquee-duration" as string]: `${lane.seconds}s` }}
              >
                {[...lane.cards, ...lane.cards].map((c, k) => (
                  <LaneCard key={k} card={c} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft light pool behind the copy, and a fade at the bottom (wide screens) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2] hidden lg:block"
          style={{
            background:
              "radial-gradient(760px 330px at center, rgb(246 249 253 / 0.95) 0, rgb(246 249 253 / 0.86) 430px, rgb(246 249 253 / 0) 760px), linear-gradient(to bottom, rgb(246 249 253 / 0) 700px, #F6F9FD 860px)",
          }}
        />

        {/* Copy */}
        <div className="relative z-[3] order-1 px-5 pt-12 text-center lg:py-[140px]">
          <p className="hero-rise inline-flex items-center gap-2 rounded-full bg-white/75 py-1.5 pl-2 pr-3.5 text-[0.8125rem] font-medium text-gc-ink-70 shadow-sm ring-1 ring-gc-line backdrop-blur" style={heroDelay(HERO_STAGGER.eyebrow)}>
            <span className="grid size-[22px] shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#0190ea] to-[#0153a7] text-white">
              <Check aria-hidden className="size-3" strokeWidth={3} />
            </span>
            {L(H.tag)}
          </p>
          <h1
            lang="en"
            className="hero-settle mx-auto mt-6 font-gc-display bg-gradient-to-r from-[#0190ea] to-[#0153a7] bg-clip-text pb-1 text-[clamp(2.75rem,7vw,5.25rem)] font-extrabold leading-[1.04] tracking-[-0.045em] text-transparent"
            style={heroDelay(HERO_STAGGER.headline)}
          >
            Grid Commerce
          </h1>
          <p
            className="hero-settle mx-auto mt-5 max-w-[36em] text-[clamp(1.0625rem,1.8vw,1.25rem)] text-gc-ink lg:w-fit lg:max-w-none lg:whitespace-nowrap lg:rounded-2xl lg:bg-[#F6F9FD]/80 lg:px-[18px] lg:py-2 lg:backdrop-blur-md"
            style={heroDelay(HERO_STAGGER.lead)}
          >
            {L(H.sub)}
          </p>
          <div className="hero-rise mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" style={heroDelay(HERO_STAGGER.actions)}>
            <Link
              href="/contact?topic=demo"
              onClick={() => trackEvent("demo_requested", { source: "hero" })}
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#0a6fbe] via-[#0153a7] to-[#0a3f86] px-7 text-[1rem] font-semibold text-white shadow-[0_6px_18px_rgb(1_83_167/0.35),inset_0_1px_0_rgb(255_255_255/0.18)] transition-shadow hover:shadow-[0_10px_24px_rgb(1_83_167/0.45),inset_0_1px_0_rgb(255_255_255/0.18)]"
            >
              {t.common.bookDemo}
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-white px-7 text-[1rem] font-semibold text-gc-ink ring-1 ring-gc-line transition-colors hover:ring-gc-ink-30"
            >
              {L(H.watch)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function LaneCard({ card }: { card: Card }) {
  const { L } = useI18n();
  const n = useNum();
  if (card.kind === "photo")
    return (
      <div className="relative size-[140px] shrink-0 overflow-hidden rounded-[20px] lg:size-[236px] lg:rounded-[24px]" style={{ background: TINT[card.tint] }}>
        <Image src={`/hero-lanes/${card.img}.webp`} alt="" fill sizes="(min-width: 1024px) 236px, 140px" className="object-cover" />
        <span className="absolute bottom-2 left-2.5 z-[1] rounded-full bg-white/85 px-2 py-px text-[11px] font-medium text-gc-ink lg:bottom-3 lg:left-3.5 lg:px-2.5 lg:py-0.5 lg:text-[13px]">
          {L(card.cap)}
        </span>
      </div>
    );
  const Icon = card.icon;
  const amount = card.amount === undefined ? null : typeof card.amount === "number" ? n(card.amount, { money: true }) : L(card.amount);
  return (
    <div className="flex h-[140px] w-[180px] shrink-0 flex-col justify-between rounded-[20px] bg-white/75 p-3.5 text-left shadow-[0_18px_40px_-26px_rgb(10_42_94/0.25)] ring-1 ring-black/[0.05] lg:h-[236px] lg:w-[268px] lg:rounded-[24px] lg:p-5">
      <p className="flex items-center gap-2 text-[12px] font-semibold text-gc-ink lg:text-[13px]">
        <span className={cn("grid size-[26px] shrink-0 place-items-center rounded-[9px] lg:size-8", card.strong ? "bg-gradient-to-br from-[#0190ea] to-[#0153a7] text-white" : "bg-[#f3f4f0] text-gc-ink")}>
          <Icon className="size-3.5" strokeWidth={2.2} />
        </span>
        {L(card.head)}
      </p>
      <div>
        {card.title && <p className="text-[14px] font-semibold leading-tight text-gc-ink lg:text-[17px]">{L(card.title)}</p>}
        <p className="text-[12px] leading-snug text-[#5f6878] lg:text-[13px]">{L(card.line)}</p>
        {amount && <p className="text-[22px] font-semibold tabular-nums tracking-tight text-gc-ink lg:text-[30px]">{amount}</p>}
      </div>
    </div>
  );
}
