"use client";

import { motion } from "motion/react";
import { BarChart3, Boxes, Inbox, LayoutDashboard, Receipt, ShieldCheck, Truck, Wallet } from "lucide-react";
import { HERO, HERO_VARIANTS as V } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { Avatar, ChannelLogo, Counter } from "../shared";
import { useNum } from "../../sections/kit";
import { HeroActions, HeroBody } from "./parts";

const MENU_ICONS = [LayoutDashboard, Receipt, Inbox, Truck, Boxes, ShieldCheck, BarChart3];
const ORDERS = [
  { id: "#GC-1042", name: "Nusrat Jahan", amt: 2450, ch: "facebook" as const, st: 3, tone: 0 },
  { id: "#GC-1047", name: "Rafi Ahmed", amt: 2100, ch: "whatsapp" as const, st: 2, tone: 1 },
  { id: "#GC-1050", name: "Mitu Das", amt: 1250, ch: "instagram" as const, st: 1, tone: 2 },
];
const STATUS_TONE = ["bg-gc-royal-10 text-gc-royal", "bg-gc-warning-10 text-gc-warning", "bg-gc-success-10 text-gc-success", "bg-gc-success-10 text-gc-success"];

/**
 * Variant 3 — Centered. Announcement pill, centred headline with a
 * hand-drawn circle around the second line's key words and an arrow down to
 * the buttons, then the dashboard in a browser frame below (after the
 * Untitled UI reference).
 */
export function HeroCentered() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[28px] bg-white md:rounded-[40px]">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(10,91,207,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,91,207,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "linear-gradient(to bottom, black 30%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-[1240px] px-5 pt-12 text-center md:px-8 md:pt-16">
          <a href="#fraud" className="hero-rise inline-flex items-center gap-2 rounded-full bg-white p-1 pr-3 text-[0.8125rem] font-semibold text-gc-ink ring-1 ring-gc-line" style={heroDelay(HERO_STAGGER.eyebrow)}>
            <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 ring-1 ring-gc-line">
              <span className="size-1.5 rounded-full bg-gc-royal" /> New
            </span>
            {L(V.announce)} →
          </a>

          <h1 className="hero-settle mx-auto mt-7 max-w-4xl text-gc-display tracking-[-0.035em] text-gc-ink" style={heroDelay(HERO_STAGGER.headline)}>
            <span className="block">{L(HERO.line1)}</span>
            <span className="relative mt-5 inline-block">
              {L(HERO.line2)}
              <svg aria-hidden viewBox="0 0 400 100" preserveAspectRatio="none" className="pointer-events-none absolute -left-[5%] -top-[34%] h-[170%] w-[110%]">
                <path
                  d="M40 64 C 10 40, 60 10, 200 8 S 396 22, 392 52 S 300 96, 190 94 S 6 84, 14 56 S 90 18, 230 14"
                  fill="none"
                  stroke="var(--color-gc-royal)"
                  strokeOpacity="0.45"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="gc-draw"
                  style={{ ["--gc-len" as string]: 1200 }}
                />
              </svg>
            </span>
          </h1>

          <HeroBody className="mx-auto mt-9 max-w-[38rem]" />
          <div className="relative mx-auto mt-8 w-fit">
            <HeroActions center />
            <svg aria-hidden viewBox="0 0 160 120" className="pointer-events-none absolute -right-36 -top-16 hidden h-28 w-36 lg:block">
              <path d="M140 6 C 150 60, 110 104, 18 96" fill="none" stroke="var(--color-gc-royal)" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" className="gc-draw" style={{ ["--gc-len" as string]: 220 }} />
              <path d="M34 84 L 16 96 L 34 108" fill="none" stroke="var(--color-gc-royal)" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="gc-draw" style={{ ["--gc-len" as string]: 60 }} />
            </svg>
          </div>
        </div>

        {/* The dashboard */}
        <div aria-hidden className="relative mx-auto mt-14 max-w-[1100px] px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
            className="overflow-hidden rounded-t-[22px] bg-white shadow-[0_-10px_80px_-30px_rgba(10,40,100,0.45)] ring-1 ring-gc-line"
          >
            <div className="flex h-9 items-center gap-1.5 border-b border-gc-line bg-gc-canvas/70 px-4">
              <span className="size-2.5 rounded-full bg-[#FF5F57]" />
              <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="size-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="grid md:grid-cols-[190px_1fr]">
              <aside className="hidden border-r border-gc-line p-3 md:block">
                <ul className="space-y-0.5">
                  {V.menu.map((m, i) => {
                    const I = MENU_ICONS[i];
                    return (
                      <li key={i} className={cn("flex items-center gap-2 rounded-lg px-2 py-1.5 text-[12.5px] font-medium", i === 0 ? "bg-gc-canvas text-gc-ink" : "text-gc-ink-60")}>
                        <I className="size-4" /> {L(m)}
                      </li>
                    );
                  })}
                </ul>
              </aside>
              <div className="min-w-0 p-4 text-left md:p-6">
                <p className="text-[18px] font-bold text-gc-ink">{L(V.greeting)}</p>
                <p className="text-[12.5px] text-gc-ink-60">{L(V.overview)}</p>
                <div className="mt-4 grid grid-cols-3 gap-2 md:gap-3">
                  {[
                    [V.todayOrders, 48, "", Receipt],
                    [V.sales, 184240, "৳", BarChart3],
                    [V.codDue, 28640, "৳", Wallet],
                  ].map(([label, v, prefix, I], i) => {
                    const Icon = I as typeof Receipt;
                    return (
                      <div key={i} className="rounded-xl p-2.5 ring-1 ring-gc-line md:p-3">
                        <p className="flex items-center gap-1.5 text-[10.5px] font-semibold text-gc-ink-60 md:text-[11.5px]">
                          <Icon className="size-3.5" /> {L(label as typeof V.sales)}
                        </p>
                        <p className="mt-1 text-[15px] font-bold text-gc-ink md:text-[20px]">
                          <Counter value={v as number} prefix={prefix as string} />
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 rounded-xl p-3 ring-1 ring-gc-line">
                  <svg viewBox="0 0 600 120" className="h-24 w-full md:h-28">
                    <defs>
                      <linearGradient id="hc-area" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#0A5BCF" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#0A5BCF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 100 C 60 96, 90 80, 140 84 S 220 70, 270 64 S 360 76, 410 52 S 500 30, 600 20 L 600 120 L 0 120 Z" fill="url(#hc-area)" />
                    <path d="M0 100 C 60 96, 90 80, 140 84 S 220 70, 270 64 S 360 76, 410 52 S 500 30, 600 20" fill="none" stroke="#0A5BCF" strokeWidth="2.5" className="gc-draw" style={{ ["--gc-len" as string]: 700 }} />
                    <path d="M0 108 C 80 104, 150 98, 220 96 S 360 92, 440 80 S 540 72, 600 66" fill="none" stroke="#9CA3AF" strokeDasharray="4 5" strokeWidth="1.5" />
                  </svg>
                </div>
                <p className="mt-4 text-[13px] font-bold text-gc-ink">{L(V.recent)}</p>
                <ul className="mt-2 divide-y divide-gc-line">
                  {ORDERS.map((o) => (
                    <li key={o.id} className="flex items-center gap-2.5 py-2 text-[12px]">
                      <Avatar name={o.name} size={24} tone={o.tone} />
                      <span className="min-w-0 flex-1 truncate font-semibold text-gc-ink">{o.name}</span>
                      <ChannelLogo channel={o.ch} size={13} />
                      <span className="hidden w-[72px] whitespace-nowrap text-gc-ink-50 sm:block">{o.id}</span>
                      <span className="w-16 text-right font-semibold tabular-nums text-gc-ink">{n(o.amt, { money: true })}</span>
                      <span className={cn("w-[74px] rounded-full px-2 py-0.5 text-center text-[10.5px] font-semibold", STATUS_TONE[o.st])}>{L(V.status[o.st])}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
