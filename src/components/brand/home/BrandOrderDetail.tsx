"use client";

import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion";
import { ORDER_DETAIL_COPY, ORDER_DETAIL_NOTES } from "@/data/copy/home";
import { SCREENS } from "@/data/screenshots";
import { useI18n } from "@/i18n/provider";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { BrandScreen } from "../BrandScreen";
import { Panel, SectionHead } from "../primitives";

/**
 * The brand stage adds padding, so the capture is shorter than the frame the
 * original offsets were tuned for and the cards collided. These hang the cards
 * off the stage corners instead. Content still comes from ORDER_DETAIL_NOTES.
 */
const POSITION: Record<string, string> = {
  thread: "lg:absolute lg:-left-10 lg:-top-8 xl:-left-16",
  courier: "lg:absolute lg:-right-10 lg:-top-4 xl:-right-16",
  cash: "lg:absolute lg:-bottom-10 lg:-left-6 xl:-left-12",
  history: "lg:absolute lg:-bottom-6 lg:-right-6 xl:-right-12",
};

/**
 * Section 7 — the order, up close. Annotations keep the original's placement
 * around the frame rather than pinned to pixels, for the reason recorded in
 * the original homepage section.
 */
export function BrandOrderDetail() {
  const { L } = useI18n();
  const reduced = useReducedMotion();

  return (
    <Panel tone="dark" pattern="tl">
      <SectionHead align="center" tone="dark" eyebrow={L(ORDER_DETAIL_COPY.eyebrow)} title={L(ORDER_DETAIL_COPY.title)} body={L(ORDER_DETAIL_COPY.body)} />

      <div className="relative mx-auto mt-16 max-w-[920px]">
        <BrandScreen screen={SCREENS.orders} tone="dark" pattern={null} />

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:block">
          {ORDER_DETAIL_NOTES.map((note, i) => (
            <motion.div
              key={note.id}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: EASE.outQuart }}
              className={cn("lg:w-[236px]", POSITION[note.id] ?? note.pos)}
            >
              <div className="rounded-[20px] bg-white/[0.06] p-4 ring-1 ring-inset ring-white/10 backdrop-blur-md lg:bg-white lg:shadow-gc-float lg:ring-gc-line/60">
                <span className="grid size-9 place-items-center rounded-xl bg-gc-sky/15 text-gc-sky lg:bg-gc-sky-10 lg:text-gc-royal">
                  <Icon name={note.icon} className="size-4" />
                </span>
                <p className="mt-3 text-gc-small font-bold text-white lg:text-gc-ink">{L(note.label)}</p>
                <p className="mt-1 text-[0.75rem] leading-relaxed text-white/55 lg:text-gc-ink-60">{L(note.detail)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-16 max-w-xl text-center text-gc-small text-white/55">{L(ORDER_DETAIL_COPY.pending)}</p>
      </Reveal>
    </Panel>
  );
}
