"use client";

import { motion } from "motion/react";
import { ArrowRight, BarChart3, Boxes, Check, Inbox, LayoutDashboard, Receipt, ShieldCheck, Truck } from "lucide-react";
import { HERO, HERO_VARIANTS as V } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { Avatar, ChannelLogo, Counter } from "../shared";
import { useNum } from "../../sections/kit";
import { HeroActions, HeroBody } from "./parts";

const MENU_ICONS = [LayoutDashboard, Receipt, Inbox, Truck, Boxes, ShieldCheck, BarChart3];
const BOARD = [
  [
    { id: "#GC-1051", name: "Sabbir Khan", amt: 3800, ch: "facebook" as const, tone: 3 },
    { id: "#GC-1050", name: "Mitu Das", amt: 1250, ch: "instagram" as const, tone: 2 },
  ],
  [{ id: "#GC-1047", name: "Rafi Ahmed", amt: 2100, ch: "whatsapp" as const, tone: 1 }],
  [{ id: "#GC-1042", name: "Nusrat Jahan", amt: 2450, ch: "facebook" as const, tone: 0 }],
];

/**
 * Variant 2 — Tilted dashboard. Left-aligned copy with an announcement pill,
 * an inline UI chip in the headline and a checklist; on the right the app,
 * tilted in 3D over a halftone dot field (after the Tasking reference).
 */
export function HeroTilt() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[20px] bg-white">
        <div
          aria-hidden
          className="absolute right-[-6%] top-[8%] -z-10 h-[80%] w-[60%]"
          style={{
            backgroundImage: "radial-gradient(rgba(17,24,39,0.35) 1.2px, transparent 1.4px)",
            backgroundSize: "14px 14px",
            maskImage: "radial-gradient(ellipse 50% 50% at 60% 40%, black 10%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 60% 40%, black 10%, transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 pb-12 pt-12 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-16 lg:pt-16">
          <div className="min-w-0">
            <a href="#fraud" className="hero-rise inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.8125rem] font-semibold text-gc-ink ring-1 ring-gc-line transition-colors hover:ring-gc-royal/40" style={heroDelay(HERO_STAGGER.eyebrow)}>
              <span className="rounded-full bg-gc-royal px-2 py-0.5 text-[0.6875rem] text-white">New</span>
              {L(V.announce)}
              <ArrowRight aria-hidden className="size-3.5" />
            </a>
            <h1 className="hero-settle mt-6 text-gc-display tracking-[-0.035em] text-gc-ink" style={heroDelay(HERO_STAGGER.headline)}>
              <span className="block">
                {L(HERO.line1)}{" "}
                <span aria-hidden className="relative -top-1 inline-flex h-[0.8em] w-[1.6em] translate-y-[0.08em] flex-col justify-center gap-[0.09em] rounded-[0.18em] bg-white px-[0.14em] align-middle shadow-sm ring-1 ring-gc-line">
                  {[1, 1, 0].map((on, i) => (
                    <span key={i} className="flex items-center gap-[0.06em]">
                      <span className={cn("size-[0.13em] rounded-full", on ? "bg-gc-royal" : "bg-gc-line")} />
                      <span className="h-[0.07em] flex-1 rounded-full bg-gc-line" />
                    </span>
                  ))}
                </span>
              </span>
              <span className="block text-gc-royal">{L(HERO.line2)}</span>
            </h1>
            <HeroBody className="mt-6 max-w-[32rem]" />
            <HeroActions className="mt-8" />
            <ul className="hero-rise mt-10 max-w-[24rem] divide-y divide-gc-line" style={heroDelay(HERO_STAGGER.reassure)}>
              {V.checks.map((c, i) => (
                <li key={i} className="flex items-center gap-2.5 py-3 text-gc-body font-medium text-gc-ink-70">
                  <span className="grid size-5 place-items-center rounded-full bg-gc-royal text-white">
                    <Check aria-hidden className="size-3" strokeWidth={3} />
                  </span>
                  {L(c)}
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden className="relative min-w-0 [perspective:1600px]">
            <motion.div
              initial={{ opacity: 0, rotateY: -24, rotateX: 10, y: 30 }}
              animate={{ opacity: 1, rotateY: -14, rotateX: 6, y: 0 }}
              transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
              className="origin-left overflow-hidden rounded-[20px] max-sm:![transform:none] bg-white shadow-[0_50px_100px_-40px_rgba(10,40,100,0.55)] ring-1 ring-gc-line lg:w-[118%]"
            >
              <div className="grid sm:grid-cols-[170px_1fr]">
                <aside className="hidden border-r border-gc-line bg-gc-canvas/60 p-3 sm:block">
                  <p className="flex items-center gap-1.5 px-1 text-[13px] font-bold text-gc-ink">
                    <span className="grid size-5 place-items-center rounded-md bg-gc-royal text-[10px] text-white">G</span> GridCommerce
                  </p>
                  <ul className="mt-4 space-y-0.5">
                    {V.menu.map((m, i) => {
                      const I = MENU_ICONS[i];
                      return (
                        <li key={i} className={cn("flex items-center gap-2 rounded-lg px-2 py-1.5 text-[12px] font-medium", i === 1 ? "bg-white text-gc-ink shadow-sm" : "text-gc-ink-60")}>
                          <I className="size-3.5" /> {L(m)}
                        </li>
                      );
                    })}
                  </ul>
                </aside>
                <div className="min-w-0 p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl p-3 ring-1 ring-gc-line">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-gc-ink-50">{L(V.todayOrders)}</p>
                      <p className="mt-1 text-[22px] font-bold text-gc-ink">
                        <Counter value={48} />
                      </p>
                    </div>
                    <div className="rounded-xl p-3 ring-1 ring-gc-line">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-gc-ink-50">{L(V.codDue)}</p>
                      <p className="mt-1 text-[22px] font-bold text-gc-ink">
                        <Counter value={28640} prefix="৳" />
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {V.columns.map((col, c) => (
                      <div key={c} className={cn("min-w-0", c === 2 && "hidden sm:block")}>
                        <p className="flex items-center gap-1.5 text-[11px] font-semibold text-gc-ink-70">
                          <span className={cn("size-1.5 rounded-full", ["bg-gc-warning", "bg-gc-royal", "bg-gc-success"][c])} />
                          {L(col)} <span className="text-gc-ink-50">{n(BOARD[c].length)}</span>
                        </p>
                        <div className="mt-2 space-y-2">
                          {BOARD[c].map((o, k) => (
                            <motion.div
                              key={o.id}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.9 + c * 0.25 + k * 0.15, duration: 0.5 }}
                              className="rounded-xl bg-white p-2.5 shadow-[0_8px_20px_-14px_rgba(10,40,100,0.5)] ring-1 ring-gc-line"
                            >
                              <p className="flex items-center justify-between text-[10px] text-gc-ink-50">
                                {o.id} <ChannelLogo channel={o.ch} size={11} />
                              </p>
                              <p className="mt-1 flex items-center gap-1.5 truncate text-[11.5px] font-semibold text-gc-ink">
                                <Avatar name={o.name} size={16} tone={o.tone} /> {o.name}
                              </p>
                              <p className="mt-1 text-[12px] font-bold tabular-nums text-gc-ink">{n(o.amt, { money: true })}</p>
                              <div className="mt-1.5 grid grid-cols-4 gap-0.5">
                                {[0, 1, 2, 3].map((s) => (
                                  <span key={s} className={cn("h-1 rounded-full", s <= c ? "bg-gc-royal" : "bg-gc-line")} />
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
