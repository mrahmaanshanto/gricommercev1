"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, CircleCheck, Network } from "lucide-react";
import { Reveal, Stagger } from "@/components/motion";
import { Icon } from "@/components/ui/Icon";
import { MODULES } from "@/data/copy/modules";
import { MODULE_DIRECTORY, MODULE_FLOW } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { IconTile, Panel } from "../primitives";
import { DemoStamp, HOME_INNER, IconChip, TwoTone, useNum, useOnScreen } from "./sections/kit";

/**
 * Section 8 — the modules. A quiet map of how data moves: eight modules around
 * one shared record, and a sale travelling between them (online order,
 * message order, counter sale, restock). One line says what just happened.
 * Below it, the module cards, read from the product's current module list.
 * Keeps `id="modules"` for existing links.
 */

const MAP_ORDER = ["inventory", "courier", "analytics", "cash-and-expenses", "pos", "omnichannel", "storefront", "orders"];
const MAP_ICON: Record<string, string> = {
  inventory: "Boxes",
  courier: "Truck",
  analytics: "ChartPie",
  "cash-and-expenses": "Wallet",
  pos: "ScanBarcode",
  omnichannel: "MessagesSquare",
  storefront: "Store",
  orders: "ClipboardList",
};
const POS: Record<string, { x: number; y: number }> = Object.fromEntries(
  MAP_ORDER.map((slug, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 4;
    return [slug, { x: 50 + 39 * Math.cos(a), y: 50 + 39 * Math.sin(a) }];
  }),
);
const HUB = { x: 50, y: 50 };
const HOP_MS = 1800;
const HOLD_MS = 2400;

export function BrandModules() {
  const { L, locale } = useI18n();
  const n = useNum();
  const reduced = useReducedMotion() ?? false;
  const { ref, onScreen } = useOnScreen<HTMLDivElement>();
  const [wf, setWf] = useState(0);
  const [hop, setHop] = useState(0);

  useEffect(() => {
    if (!onScreen || reduced) return;
    const last = hop >= MODULE_FLOW.workflows[wf].hops.length - 1;
    const t = window.setTimeout(
      () => {
        if (last) {
          setWf((w) => (w + 1) % MODULE_FLOW.workflows.length);
          setHop(0);
        } else setHop((h) => h + 1);
      },
      last ? HOP_MS + HOLD_MS : HOP_MS,
    );
    return () => window.clearTimeout(t);
  }, [wf, hop, onScreen, reduced]);

  const flow = MODULE_FLOW.workflows[wf];
  const shownHop = reduced ? flow.hops.length - 1 : hop;
  const current = flow.hops[shownHop];
  const previous = shownHop > 0 ? flow.hops[shownHop - 1] : null;
  const visited = new Set(flow.hops.slice(0, shownHop).map((h) => h.module));
  const inPath = new Set(flow.hops.map((h) => h.module));
  const from = previous ? POS[previous.module] : HUB;
  const to = POS[current.module];

  return (
    <Panel id="modules" tone="white" pattern="tr" inner={HOME_INNER}>
      <div ref={ref} className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
        <Reveal className="min-w-0">
          <TwoTone title={L(MODULE_DIRECTORY.title)} chip={<IconChip icon={Network} tone="royal" tilt={-6} />} />
          <p className="mt-4 text-gc-lead text-gc-ink-60">{L(MODULE_DIRECTORY.intro)}</p>

          <div className="mt-7 flex items-center justify-between gap-3">
            <p className="text-[0.8125rem] font-semibold text-gc-ink">{L(MODULE_FLOW.label)}</p>
            <DemoStamp />
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5" role="group" aria-label={L(MODULE_FLOW.label)}>
            {MODULE_FLOW.workflows.map((w, i) => (
              <button
                key={w.id}
                type="button"
                aria-pressed={i === wf}
                onClick={() => {
                  setWf(i);
                  setHop(0);
                  trackEvent("module_opened", { module: `flow:${w.id}`, locale, section: "modules" });
                }}
                className={cn(
                  "inline-flex h-9 items-center rounded-full px-3.5 text-[0.8125rem] font-semibold transition-colors duration-200",
                  i === wf ? "bg-gc-ink text-white" : "bg-gc-canvas text-gc-ink-70 hover:text-gc-ink",
                )}
              >
                {L(w.name)}
              </button>
            ))}
          </div>

          {/* What just happened */}
          <div className="mt-4 rounded-2xl bg-gc-canvas p-4">
            <p className="flex items-center justify-between text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-gc-ink-60">
              {L(MODULE_FLOW.log)}
              <span className="tabular-nums normal-case tracking-normal">
                {n(shownHop + 1)}/{n(flow.hops.length)}
              </span>
            </p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${wf}-${shownHop}`}
                initial={reduced ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: EASE.outQuart }}
                className="mt-2 flex items-start gap-3"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gc-royal text-white">
                  <Icon name={MAP_ICON[current.module]} className="size-[18px]" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.75rem] font-semibold text-gc-royal">{L(MODULE_FLOW.short[current.module])}</p>
                  <p className="font-medium leading-snug text-gc-ink">{L(current.text)}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Map */}
        <div className="relative mx-auto aspect-square w-full max-w-[30rem] [container-type:size]" aria-hidden>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
            <circle cx="50" cy="50" r="39" fill="none" stroke="#DCE6F5" strokeWidth="0.3" strokeDasharray="1 1.4" />
            {MAP_ORDER.map((slug) => {
              const p = POS[slug];
              const hot = slug === current.module || slug === previous?.module;
              return (
                <line
                  key={slug}
                  x1={HUB.x}
                  y1={HUB.y}
                  x2={p.x}
                  y2={p.y}
                  stroke={hot ? "var(--color-gc-royal)" : "#DDE6F3"}
                  strokeWidth={hot ? 0.6 : 0.3}
                  strokeDasharray={hot ? undefined : "1.2 1.2"}
                  style={{ transition: "stroke 300ms" }}
                />
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <span className="grid size-16 place-items-center rounded-[22px] bg-white shadow-gc-float ring-1 ring-gc-line md:size-[4.5rem]">
              <Image src="/brand/v2/gridcommerce-mark.png" alt="" width={40} height={40} className="size-9 object-contain md:size-10" />
            </span>
            <span className="mt-1.5 rounded-full bg-white px-2 py-0.5 text-[0.625rem] font-semibold text-gc-ink-70 ring-1 ring-gc-line md:text-[0.6875rem]">
              {L(MODULE_FLOW.hub)}
            </span>
          </div>

          {MAP_ORDER.map((slug) => {
            const p = POS[slug];
            const isNow = slug === current.module;
            const isDone = visited.has(slug) && !isNow;
            return (
              <div
                key={slug}
                className="absolute flex w-[4.75rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center md:w-24"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span
                  className={cn(
                    "relative grid size-10 place-items-center rounded-2xl transition-[background-color,color,box-shadow] duration-300 md:size-12",
                    isNow
                      ? "bg-gc-royal text-white shadow-[0_12px_24px_-12px_rgba(10,91,207,0.8)]"
                      : isDone
                        ? "bg-gc-royal-10 text-gc-royal"
                        : inPath.has(slug)
                          ? "bg-white text-gc-royal ring-1 ring-gc-royal-20"
                          : "bg-white text-gc-ink-30 ring-1 ring-gc-line",
                  )}
                >
                  <Icon name={MAP_ICON[slug]} className="size-[18px] md:size-5" strokeWidth={1.9} />
                  {isDone && (
                    <span className="absolute -right-1.5 -top-1.5 grid size-4 place-items-center rounded-full bg-white text-gc-success ring-1 ring-gc-line">
                      <CircleCheck className="size-3" />
                    </span>
                  )}
                </span>
                <span className={cn("mt-1 text-[0.625rem] font-semibold leading-tight md:text-[0.6875rem]", isNow || isDone ? "text-gc-ink" : "text-gc-ink-60")}>
                  {L(MODULE_FLOW.short[slug])}
                </span>
              </div>
            );
          })}

          {!reduced && (
            // Transforms in container units (cqw/cqh): nothing is laid out per frame.
            <motion.span
              key={`${wf}-${hop}`}
              className="absolute left-0 top-0 z-10 -ml-[6px] -mt-[6px] size-3 rounded-full bg-gc-accent shadow-[0_0_0_4px_rgba(255,107,61,0.25)]"
              initial={{ x: `${from.x}cqw`, y: `${from.y}cqh`, opacity: 0 }}
              animate={{ x: [`${from.x}cqw`, `${HUB.x}cqw`, `${to.x}cqw`], y: [`${from.y}cqh`, `${HUB.y}cqh`, `${to.y}cqh`], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.1, ease: "easeInOut", opacity: { duration: 1.3, times: [0, 0.1, 0.85, 1] } }}
            />
          )}
        </div>
      </div>

      {/* The directory: the product's current modules */}
      <Stagger className="mt-10 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.04}>
        {MODULES.map((m) => {
          const lit = inPath.has(m.slug);
          return (
            <Stagger.Item key={m.slug} className="h-full">
              <div
                className={cn(
                  "group/m relative flex h-full items-start gap-3 rounded-2xl p-4 transition-[background-color,box-shadow,transform] duration-300 focus-within:bg-white focus-within:shadow-gc-float hover:-translate-y-0.5 hover:bg-white hover:shadow-gc-float",
                  lit ? "bg-white shadow-gc-card ring-1 ring-gc-royal/25" : "bg-gc-canvas",
                )}
              >
                <IconTile name={m.icon} size="sm" tone={current.module === m.slug ? "solid" : "light"} />
                <div className="min-w-0">
                  <h3 className="font-gc-display text-[0.9375rem] font-bold leading-snug text-gc-ink">
                    <Link
                      href={`/features/${m.slug}`}
                      onClick={() => trackEvent("module_opened", { module: m.slug, locale, section: "modules" })}
                      className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-gc-royal"
                    >
                      {L(m.name)}
                    </Link>
                  </h3>
                  <p className="mt-0.5 line-clamp-2 text-[0.8125rem] leading-snug text-gc-ink-60">{L(m.hook)}</p>
                </div>
                <ArrowRight aria-hidden className="ml-auto mt-1 size-4 shrink-0 text-gc-royal transition-transform duration-200 group-hover/m:translate-x-0.5" />
              </div>
            </Stagger.Item>
          );
        })}
      </Stagger>
    </Panel>
  );
}
