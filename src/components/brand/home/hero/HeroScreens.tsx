"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { Boxes, CircleCheck, HandCoins, Pause, Play, UserRound, Wallet, type LucideIcon } from "lucide-react";
import { Floating } from "@/components/motion";
import { HERO, HERO_DEMO, SHOTS, STORY } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { DemoStamp, Shot, useOnScreen } from "../sections/kit";

type TabId = keyof typeof HERO.tabs;
const TABS: { id: TabId; icon: LucideIcon; shot: string }[] = [
  { id: "sales", icon: HandCoins, shot: "merchant-overview" },
  { id: "stock", icon: Boxes, shot: "stock" },
  { id: "customer", icon: UserRound, shot: "customer-profile" },
];
const SLIDE_MS = 6500;

/**
 * The hero's product view: the real GridCommerce dashboard, with three tabs
 * (sales & collections, shared stock, customer history) that switch to the
 * matching real screen. It rotates on its own while on screen, holds while the
 * pointer or focus is on it, and has a pause button. Two small cards float at
 * the edges with the facts the screen is about.
 */
export function HeroScreens() {
  const { L } = useI18n();
  const reduced = useReducedMotion() ?? false;
  const baseId = useId();
  const { ref, onScreen } = useOnScreen<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const hold = useRef(false);
  const [runKey, setRunKey] = useState(0);

  useEffect(() => {
    if (reduced || paused || !onScreen) return;
    const t = window.setInterval(() => {
      if (!hold.current && document.visibilityState === "visible") {
        setActive((a) => (a + 1) % TABS.length);
        setRunKey((k) => k + 1);
      }
    }, SLIDE_MS);
    return () => window.clearInterval(t);
  }, [reduced, paused, onScreen, runKey]);

  const select = useCallback((i: number) => {
    setActive(i);
    setRunKey((k) => k + 1);
    trackEvent("hero_preview_tab", { tab: TABS[i].id });
  }, []);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (i + delta + TABS.length) % TABS.length;
    select(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  const tab = TABS[active];
  const running = !reduced && !paused && onScreen;

  return (
    <div
      ref={ref}
      onPointerEnter={() => (hold.current = true)}
      onPointerLeave={() => (hold.current = false)}
      onFocusCapture={() => (hold.current = true)}
      onBlurCapture={() => (hold.current = false)}
    >
      {/* Tabs */}
      <div className="flex items-center justify-center gap-2">
        <div role="tablist" aria-label={L(HERO.tourLabel)} className="flex items-center gap-1 rounded-full bg-white p-1 shadow-gc-card ring-1 ring-gc-line">
          {TABS.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t.id}
                id={`${baseId}-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={cn(
                  "relative flex h-10 items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full px-3 text-[0.8125rem] font-semibold transition-colors duration-200 sm:px-4",
                  selected ? "bg-gc-ink text-white" : "text-gc-ink-60 hover:bg-gc-canvas hover:text-gc-ink",
                )}
              >
                <t.icon aria-hidden className={cn("size-4 shrink-0", selected && "text-gc-sky")} />
                <span className={cn(!selected && "max-sm:sr-only")}>{L(HERO.tabs[t.id])}</span>
                {selected && running && (
                  <span
                    key={runKey}
                    aria-hidden
                    className="gc-step-bar absolute inset-x-3 bottom-1 h-[2px] origin-left rounded-full bg-gc-sky"
                    style={{ animationDuration: `${SLIDE_MS}ms` }}
                  />
                )}
              </button>
            );
          })}
        </div>
        {!reduced && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={L(paused ? STORY.play : STORY.pause)}
            className="grid size-10 place-items-center rounded-full bg-white text-gc-ink-70 shadow-gc-card ring-1 ring-gc-line transition-colors hover:text-gc-ink"
          >
            {paused ? <Play aria-hidden className="size-4" /> : <Pause aria-hidden className="size-4" />}
          </button>
        )}
      </div>

      {/* Screen */}
      <div className="relative mx-auto mt-6 max-w-[1100px]">
        <div className="mb-2 flex justify-end">
          <DemoStamp />
        </div>
        <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`} className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={tab.id}
              initial={reduced ? false : { opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: 0.35, ease: EASE.outQuart }}
            >
              <Shot id={tab.shot} alt={L(SHOTS[tab.shot])} priority={active === 0} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Facts at the edges (wide screens) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
          <Floating className="absolute -left-10 bottom-16" amplitude={6} duration={8}>
            <FactCard icon={Wallet} tone="success" label={L(HERO_DEMO.collection)} value={L(HERO_DEMO.payoutMatched)} />
          </Floating>
          <Floating className="absolute -right-10 top-24" amplitude={6} duration={9} delay={1.2}>
            <FactCard icon={Boxes} tone="royal" label={L(HERO_DEMO.stock)} value={L(HERO_DEMO.dispatched)} />
          </Floating>
        </div>
      </div>
    </div>
  );
}

function FactCard({ icon: Icon, label, value, tone }: { icon: LucideIcon; label: string; value: string; tone: "success" | "royal" }) {
  return (
    <div className="flex w-[17rem] items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-gc-float ring-1 ring-gc-line backdrop-blur">
      <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl", tone === "success" ? "bg-gc-success-10 text-gc-success" : "bg-gc-royal-10 text-gc-royal")}>
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-gc-ink-60">{label}</p>
        <p className="flex items-center gap-1.5 text-[0.875rem] font-semibold leading-snug text-gc-ink">
          {value}
          <CircleCheck className="size-4 shrink-0 text-gc-success" />
        </p>
      </div>
    </div>
  );
}
