"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, MousePointer2, ShieldCheck, Sparkles, Truck } from "lucide-react";
import type { ReactNode } from "react";
import { HERO, HERO_VARIANTS as V } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { Avatar, ChannelLogo, Counter } from "../shared";
import { useNum } from "../../sections/kit";
import { HeroActions, HeroBody } from "./parts";

/**
 * Variant 5 — Phones. A centred headline on a warm canvas, then three phone
 * screens fanned out (inbox, a new order, the courier and COD) with name
 * tags, cursors and stickers around them (after the Cartivo reference's
 * "Redefining ecommerce" block).
 */
export function HeroPhones() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[28px] bg-gradient-to-b from-[#FFF4EC] via-[#FFF9F4] to-white md:rounded-[40px]">
        <div className="mx-auto max-w-[1240px] px-5 pt-12 text-center md:px-8 md:pt-16">
          <h1 className="hero-settle mx-auto max-w-4xl text-gc-display tracking-[-0.035em] text-gc-ink" style={heroDelay(HERO_STAGGER.headline)}>
            <span className="block">{L(HERO.line1)}</span>
            <span className="block text-gc-accent">{L(HERO.line2)}</span>
          </h1>
          <HeroBody className="mx-auto mt-6 max-w-[36rem]" />
          <HeroActions center className="mt-8" />
        </div>

        <div aria-hidden className="relative mx-auto mt-12 h-[400px] max-w-[880px] sm:h-[440px]">
          {/* Left phone: inbox */}
          <Phone className="left-[2%] top-16 hidden -rotate-[10deg] sm:block" delay={0.5} tone="bg-white">
            <p className="text-[13px] font-bold text-gc-ink">{L(V.menu[2])}</p>
            <ul className="mt-3 space-y-2.5">
              {[
                ["Farzana Karim", "messenger", "Stock e ache?"],
                ["Rafi Ahmed", "whatsapp", "Delivery kobe?"],
                ["Mitu Das", "instagram", "Size M ache?"],
              ].map(([name, ch, msg], i) => (
                <li key={i} className="flex items-center gap-2 text-left">
                  <Avatar name={name} size={26} tone={i} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[11px] font-semibold text-gc-ink">{name}</span>
                    <span className="block truncate text-[10px] text-gc-ink-60">{msg}</span>
                  </span>
                  <ChannelLogo channel={ch as "messenger"} size={12} />
                </li>
              ))}
            </ul>
            <p className="mt-3 flex items-center gap-1 rounded-xl bg-[#F6F2FF] p-2 text-left text-[10px] text-[#6D3FD9]">
              <Sparkles className="size-3 shrink-0" /> {L(V.aiReady)}
            </p>
          </Phone>

          {/* Middle phone: the order */}
          <Phone className="left-1/2 top-0 z-10 -translate-x-1/2" delay={0.3} tone="bg-gradient-to-b from-gc-accent to-[#FF8A5B]">
            <div className="flex items-center gap-2 text-left text-white">
              <Avatar name="Nusrat Jahan" size={30} tone={1} />
              <div>
                <p className="text-[12px] font-bold">Nusrat Jahan</p>
                <p className="flex items-center gap-1 text-[10px] text-white/80">
                  <ChannelLogo channel="facebook" size={10} /> {L(V.newOrder)}
                </p>
              </div>
            </div>
            <div className="relative mt-4 h-[150px] overflow-hidden rounded-2xl">
              <Image src="/merchants/merchant-cosmetics.webp" alt="" fill sizes="200px" className="object-cover" />
            </div>
            <div className="mt-3 rounded-2xl bg-white/20 p-3 text-left text-white backdrop-blur">
              <p className="text-[11px] text-white/80">#GC-1042 · COD</p>
              <p className="text-[22px] font-bold">
                <Counter value={2450} prefix="৳" />
              </p>
              <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold">
                <BadgeCheck className="size-3.5" /> {L(V.status[0])}
              </p>
            </div>
          </Phone>

          {/* Right phone: courier + COD */}
          <Phone className="right-[2%] top-16 hidden rotate-[10deg] sm:block" delay={0.7} tone="bg-gc-ink">
            <p className="flex items-center gap-1.5 text-[13px] font-bold text-white">
              <Truck className="size-4 text-gc-sky" /> {L(V.menu[3])}
            </p>
            <div className="mt-3 space-y-2">
              {["Pathao", "Steadfast", "RedX"].map((c, i) => (
                <div key={c} className="rounded-xl bg-white/10 p-2 text-left">
                  <p className="flex justify-between text-[10.5px] text-white/80">
                    {c} <span className="font-semibold text-white">{n([18400, 7240, 3834][i], { money: true })}</span>
                  </p>
                  <div className="mt-1 h-1 rounded-full bg-white/15">
                    <div className="h-full rounded-full bg-gc-sky" style={{ width: `${[80, 50, 30][i]}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 flex items-center gap-1 rounded-xl bg-gc-success/20 p-2 text-left text-[10.5px] font-semibold text-[#7BE3B0]">
              <BadgeCheck className="size-3.5" /> {L(V.codIn)}
            </p>
          </Phone>

          {/* Name tags and stickers */}
          <NameTag name={V.names.a} className="left-[18%] top-6 bg-gc-success" />
          <NameTag name={V.names.b} className="right-[1%] top-[42%] bg-[#F5A524]" flip />
          <span className="gc-float absolute left-[6%] top-[62%] grid size-14 place-items-center rounded-full bg-[#FFD8E4] text-[1.6rem] shadow-lg [animation-delay:-2s]">
            <ShieldCheck className="size-7 text-[#D93636]" />
          </span>
          <span className="gc-float absolute right-[8%] top-2 grid size-14 rotate-12 place-items-center rounded-2xl bg-gc-accent text-white shadow-lg [animation-delay:-1s]">
            <span className="text-[1rem] font-black">COD</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function Phone({ children, className, delay, tone }: { children: ReactNode; className?: string; delay: number; tone: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay }}
      className={cn("absolute w-[230px]", className)}
    >
      <div className={cn("h-[380px] rounded-[34px] p-4 shadow-[0_40px_80px_-30px_rgba(60,30,10,0.45)] ring-[6px] ring-gc-ink", tone)}>{children}</div>
    </motion.div>
  );
}

function NameTag({ name, className, flip }: { name: string; className?: string; flip?: boolean }) {
  return (
    <span className={cn("gc-float absolute z-20 inline-flex", className, "rounded-full px-3 py-1.5 text-[0.8125rem] font-semibold text-white shadow-lg")}>
      {name}
      <MousePointer2 className={cn("absolute size-5 fill-gc-ink text-gc-ink", flip ? "-left-4 -top-3 -scale-x-100" : "-right-3 -top-3")} />
    </span>
  );
}
