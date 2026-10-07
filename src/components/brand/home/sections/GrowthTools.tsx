"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState, type KeyboardEvent } from "react";
import { ArrowRight, MessagesSquare, ShoppingCart, Sparkles, Store, type LucideIcon } from "lucide-react";
import { GROWTH, SHOTS } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Panel } from "../../primitives";
import { DemoStamp, HOME_INNER, IconChip, SectionIntro, Shot } from "./kit";

type TabId = "store" | "inbox" | "recovery";
const TABS: { id: TabId; icon: LucideIcon; shot: string; path: string }[] = [
  { id: "store", icon: Store, shot: "landing-page-builder", path: "online-store/pages" },
  { id: "inbox", icon: MessagesSquare, shot: "merchant-inbox", path: "inbox" },
  { id: "recovery", icon: ShoppingCart, shot: "abandoned-carts", path: "marketing/abandoned-carts" },
];

/**
 * Section 6 — the tools that bring the next sale in, kept compact: three tabs,
 * each showing the real screen beside its short explanation.
 */
export function GrowthTools() {
  const { L, locale } = useI18n();
  const reduced = useReducedMotion();
  const baseId = useId();
  const [active, setActive] = useState<TabId>("store");

  const select = (id: TabId) => {
    if (id === active) return;
    setActive(id);
    trackEvent("growth_tab_changed", { tab: id, locale, section: "growth" });
  };
  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = TABS[(i + delta + TABS.length) % TABS.length];
    select(next.id);
    document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
  };

  const tab = TABS.find((t) => t.id === active)!;
  const copy = GROWTH.tabs[active];

  return (
    <Panel tone="white" pattern={null} inner={HOME_INNER}>
      <SectionIntro size="h2" title={L(GROWTH.title)} chip={<IconChip icon={Sparkles} tone="accent" tilt={8} />} body={L(GROWTH.body)} />

      <div role="tablist" aria-label={L(GROWTH.tabsLabel)} className="mt-8 flex flex-wrap gap-2">
        {TABS.map((t, i) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              id={`${baseId}-tab-${t.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(t.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={cn(
                "inline-flex h-10 items-center gap-2 rounded-full px-4 text-[0.8125rem] font-semibold transition-colors duration-200",
                selected ? "bg-gc-ink text-white" : "bg-gc-canvas text-gc-ink-70 hover:text-gc-ink",
              )}
            >
              <t.icon aria-hidden className={cn("size-4", selected && "text-gc-sky")} />
              {L(GROWTH.tabs[t.id].tab)}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="mt-5 grid items-center gap-8 rounded-[28px] bg-gc-canvas p-4 md:p-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            className="min-w-0 lg:pl-2"
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: EASE.outQuart }}
          >
            <h3 className="text-gc-h3 text-gc-ink">{L(copy.heading)}</h3>
            <p className="mt-3 text-gc-body text-gc-ink-60">{L(copy.body)}</p>
            {"ai" in copy && <p className="mt-2 text-gc-body text-gc-ink-60">{L(copy.ai)}</p>}
            {"tracking" in copy && <p className="mt-2 text-gc-body text-gc-ink-60">{L(copy.tracking)}</p>}
            <p className="mt-3 text-[0.75rem] text-gc-ink-60">{L(copy.small)}</p>
            <Link href={copy.href} className="mt-4 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline">
              {L(copy.link)}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="min-w-0">
          <div className="mb-2 flex justify-end">
            <DemoStamp />
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={reduced ? false : { opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: EASE.outQuart }}
            >
              <Shot id={tab.shot} alt={L(SHOTS[tab.shot])} path={tab.path} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Panel>
  );
}
