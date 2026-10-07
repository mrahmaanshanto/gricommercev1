"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeftRight, CircleCheck, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Icon } from "@/components/ui/Icon";
import { STORE_SYNC } from "@/data/copy/showcase";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { GcButton, Panel } from "../../primitives";
import { DemoStamp, IconChip, useTimeline } from "./kit";

const CUES = [700, 2300, 3900];
const DURATION = 5600;

const STORES = [
  { id: "wordpress", name: "WordPress", sub: "WooCommerce store", logo: "/integrations/wordpress.webp", w: 360, h: 229, inbound: "Order #WP-2041", outbound: "Price ৳2,450" },
  { id: "shopify", name: "Shopify", sub: "Online store", logo: "/integrations/shopify.webp", w: 360, h: 103, inbound: "Order #SH-1188", outbound: "Stock → 11" },
] as const;

const LOG = [
  { store: "WordPress", text: "Order #WP-2041 imported", meta: "৳3,240 · COD" },
  { store: "Shopify", text: "Stock updated · Redmi Note 13", meta: "12 → 11" },
  { store: "WordPress", text: "Price updated · Anker 20W Charger", meta: "৳2,450" },
];

/**
 * WordPress (WooCommerce) and Shopify, kept and run from GridCommerce: orders
 * travel in, stock and prices travel back out. Demo data.
 */
export function StoreSync() {
  const { L, t } = useI18n();
  const reduced = useReducedMotion();
  const { ref, beat } = useTimeline(CUES, { duration: DURATION });

  return (
    <Panel tone="white" pattern="br">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <h2 className="text-gc-h2 tracking-[-0.03em] text-gc-ink">
            {L(STORE_SYNC.lead)} <IconChip icon={ArrowLeftRight} tone="ink" tilt={-4} />
            <span className="text-gc-ink-50">{L(STORE_SYNC.tail)}</span>
          </h2>
          <p className="mt-6 max-w-[34rem] text-gc-lead text-gc-ink-60">{L(STORE_SYNC.body)}</p>

          <ul className="mt-8 space-y-5">
            {STORE_SYNC.points.map((p) => (
              <li key={p.icon} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gc-royal-10 text-gc-royal">
                  <Icon name={p.icon} className="size-[18px]" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-gc-display text-[1rem] font-bold text-gc-ink">{L(p.title)}</p>
                  <p className="text-gc-body text-gc-ink-60">{L(p.body)}</p>
                </div>
              </li>
            ))}
          </ul>

          <GcButton href="/contact?topic=demo" size="md" withArrow className="mt-9">
            {L(STORE_SYNC.cta)}
          </GcButton>
        </Reveal>

        <div ref={ref} className="relative rounded-[32px] bg-gradient-to-br from-gc-royal-10 via-white to-gc-sky-10 p-4 ring-1 ring-inset ring-gc-royal-20/70 md:p-6">
          <DemoStamp label={t.common.demoData} className="absolute right-5 top-5" />
          <p className="flex items-center gap-2 text-gc-small font-semibold text-gc-ink">
            <RefreshCw className={cn("size-4 text-gc-royal", !reduced && "animate-[spin_3s_linear_infinite]")} /> Two-way sync
          </p>

          <div className="mt-5 space-y-3">
            {STORES.map((s, i) => (
              <div key={s.id} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                <div className="flex w-[7.5rem] flex-col items-center gap-1 rounded-2xl bg-white p-3 text-center shadow-gc-card ring-1 ring-gc-line sm:w-[9.5rem]">
                  <Image src={s.logo} alt={s.name} width={s.w} height={s.h} className="h-12 w-full max-w-[6.5rem] object-contain" />
                  <p className="text-[0.6875rem] text-gc-ink-50">{s.sub}</p>
                  <p className="flex items-center gap-1 text-[0.6875rem] font-semibold text-[#047857]">
                    <span className="size-1.5 rounded-full bg-[#10B981]" /> Connected
                  </p>
                </div>

                {/* Track: an order rides in, stock or a price rides back. */}
                <div className="relative h-16">
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 border-t-2 border-dashed border-gc-royal-20" />
                  <Rider label={s.inbound} direction="in" delay={i * 1.1} reduced={!!reduced} />
                  <Rider label={s.outbound} direction="out" delay={i * 1.1 + 1.6} reduced={!!reduced} />
                </div>

                <span className="grid size-12 place-items-center rounded-2xl bg-white shadow-gc-card ring-1 ring-gc-line">
                  <Image src="/brand/v2/gridcommerce-mark.png" alt="GridCommerce" width={28} height={28} className="size-7 object-contain" />
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-white p-4 ring-1 ring-gc-line">
            <div className="flex items-center justify-between">
              <p className="text-[0.8125rem] font-semibold text-gc-ink">Sync activity</p>
              <p className="text-[0.6875rem] text-gc-ink-50">Last sync · just now</p>
            </div>
            <ul className="mt-2 min-h-[8.25rem] space-y-1.5">
              <AnimatePresence initial={false}>
                {LOG.slice(0, beat)
                  .slice()
                  .reverse()
                  .map((row) => (
                    <motion.li
                      key={row.text}
                      layout={!reduced}
                      initial={reduced ? false : { opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE.outQuart }}
                      className="flex items-center gap-2.5 rounded-xl bg-gc-canvas px-3 py-2 text-[0.8125rem]"
                    >
                      <CircleCheck className="size-4 shrink-0 text-[#047857]" />
                      <span className="min-w-0 flex-1 truncate text-gc-ink">
                        {row.text} <span className="text-gc-ink-50">· {row.store}</span>
                      </span>
                      <span className="shrink-0 font-semibold tabular-nums text-gc-ink">{row.meta}</span>
                    </motion.li>
                  ))}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>
    </Panel>
  );
}

/** A pill travelling along a store's track, inbound (to GridCommerce) or outbound. */
function Rider({ label, direction, delay, reduced }: { label: string; direction: "in" | "out"; delay: number; reduced: boolean }) {
  const inbound = direction === "in";
  const pill = (
    <span
      className={cn(
        "whitespace-nowrap rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold shadow-[0_8px_18px_-10px_rgba(17,24,39,0.45)]",
        inbound ? "bg-gc-royal text-white" : "bg-white text-gc-ink ring-1 ring-gc-line",
      )}
    >
      {inbound ? "→ " : "← "}
      {label}
    </span>
  );

  if (reduced) {
    return <span className={cn("absolute", inbound ? "left-1 top-0" : "bottom-0 right-1")}>{pill}</span>;
  }

  return (
    <motion.span
      className={cn("absolute", inbound ? "top-0" : "bottom-0")}
      initial={{ left: inbound ? "0%" : "100%", x: inbound ? "0%" : "-100%", opacity: 0 }}
      animate={{
        left: inbound ? ["0%", "100%"] : ["100%", "0%"],
        x: inbound ? ["0%", "-100%"] : ["-100%", "0%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3.2,
        ease: EASE.inOutSoft,
        repeat: Infinity,
        repeatDelay: 0.6,
        delay,
        opacity: { duration: 3.2, ease: "linear", times: [0, 0.15, 0.85, 1], repeat: Infinity, repeatDelay: 0.6, delay },
      }}
    >
      {pill}
    </motion.span>
  );
}
