"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion";
import { CAPABILITY_COPY } from "@/data/copy/home";
import { CAPABILITIES } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { BrandScreen } from "../BrandScreen";
import { Panel, SectionHead } from "../primitives";

/**
 * Section 4 — capability tabs. The original gave each tab its own hue; the
 * brand guidelines allow no colours outside the palette, so every tab shares
 * RoyalBlue and the active state is carried by a sliding pill instead.
 */
export function BrandCapabilityTabs() {
  const { L } = useI18n();
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState(CAPABILITIES[0].id);
  const active = CAPABILITIES.find((c) => c.id === activeId) ?? CAPABILITIES[0];

  return (
    <Panel id="platform" tone="white" pattern="tl">
      <SectionHead align="center" eyebrow={L(CAPABILITY_COPY.eyebrow)} title={L(CAPABILITY_COPY.title)} body={L(CAPABILITY_COPY.body)} />

      <Reveal delay={0.08} className="mt-12 flex justify-center">
        <div
          role="tablist"
          aria-label={L(CAPABILITY_COPY.eyebrow)}
          className="flex max-w-full gap-1 overflow-x-auto rounded-full bg-gc-canvas p-1.5 ring-1 ring-inset ring-gc-line"
        >
          {CAPABILITIES.map((cap) => {
            const isActive = cap.id === activeId;
            return (
              <button
                key={cap.id}
                type="button"
                role="tab"
                id={`gc-cap-tab-${cap.id}`}
                aria-selected={isActive}
                aria-controls={`gc-cap-panel-${cap.id}`}
                onClick={() => setActiveId(cap.id)}
                className={cn(
                  "relative isolate inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-gc-small font-semibold transition-colors duration-[200ms] md:px-5",
                  isActive ? "text-white" : "text-gc-ink-60 hover:text-gc-ink",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="gc-cap-pill"
                    transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }}
                    className="absolute inset-0 -z-10 rounded-full bg-gc-royal shadow-[0_8px_20px_-8px_rgba(10,91,207,0.6)]"
                  />
                )}
                <Icon name={cap.icon} className="size-4" />
                {L(cap.label)}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div
        role="tabpanel"
        id={`gc-cap-panel-${active.id}`}
        aria-labelledby={`gc-cap-tab-${active.id}`}
        className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-14"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.34, ease: EASE.outQuart }}
          >
            <h3 className="text-gc-h3 text-gc-ink">{L(active.title)}</h3>
            <p className="mt-4 text-gc-body text-gc-ink-60">{L(active.body)}</p>
            <ul className="mt-7 space-y-3.5">
              {active.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-gc-body text-gc-ink-70">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gc-royal text-white">
                    <Check aria-hidden className="size-3" strokeWidth={3} />
                  </span>
                  {L(bullet)}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${active.id}-shot`}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.985, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.42, ease: EASE.outQuart }}
          >
            <BrandScreen screen={active.screen} pattern="br" />
          </motion.div>
        </AnimatePresence>
      </div>
    </Panel>
  );
}
