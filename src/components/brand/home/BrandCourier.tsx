"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion";
import { COURIER_COPY, COURIER_LIFECYCLE } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { IconTile, Panel, SectionHead } from "../primitives";

/** Stage states stay inside the brand palette: progress reads through fill
 *  weight — outline, soft tint, solid — instead of traffic-light colours. */
const TONE = {
  neutral: { chip: "bg-white text-gc-ink-50 ring-1 ring-inset ring-gc-line", dot: "bg-gc-ink-30" },
  active: { chip: "bg-gc-sky-10 text-gc-royal ring-1 ring-inset ring-gc-sky/30", dot: "bg-gc-sky" },
  warn: { chip: "bg-gc-royal-10 text-gc-royal ring-1 ring-inset ring-gc-royal/30", dot: "bg-gc-royal/50" },
  done: { chip: "bg-gc-royal text-white", dot: "bg-gc-royal" },
} as const;

/** Section 10 — courier and cash-on-delivery lifecycle. */
export function BrandCourier() {
  const { L } = useI18n();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.6 });
  const fill = useTransform(p, [0, 1], ["0%", "100%"]);

  return (
    <Panel tone="tint" pattern="br">
      <SectionHead
        align="center"
        eyebrow={L(COURIER_COPY.eyebrow)}
        title={L(COURIER_COPY.title)}
        body={L(COURIER_COPY.body)}
      />

      <Reveal delay={0.06} className="mt-14 rounded-[28px] bg-white p-6 shadow-gc-card ring-1 ring-inset ring-gc-line/70 md:p-10">
        <div ref={ref} className="relative">
          <div
            aria-hidden
            className="absolute bottom-2 left-[21px] top-2 w-0.5 rounded-full bg-gc-line lg:bottom-auto lg:left-0 lg:right-0 lg:top-[21px] lg:h-0.5 lg:w-auto"
          >
            <motion.div
              style={reduced ? { height: "100%" } : { height: fill }}
              className="w-0.5 rounded-full bg-gradient-to-b from-gc-sky to-gc-royal lg:hidden"
            />
            <motion.div
              style={reduced ? { width: "100%" } : { width: fill }}
              className="hidden h-0.5 rounded-full bg-gradient-to-r from-gc-sky to-gc-royal lg:block"
            />
          </div>

          <ol className="relative grid gap-7 lg:grid-cols-7 lg:gap-4">
            {COURIER_LIFECYCLE.map((stage, i) => {
              const tone = TONE[stage.tone];
              return (
                <motion.li
                  key={stage.id}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex gap-4 lg:block"
                >
                  <span
                    className={cn(
                      "relative z-10 grid size-11 shrink-0 place-items-center rounded-full shadow-[0_0_0_5px_white]",
                      tone.chip,
                    )}
                  >
                    <Icon name={stage.icon} className="size-[18px]" />
                  </span>
                  <div className="lg:mt-5 lg:pr-3">
                    <p className="font-gc-display text-[0.9375rem] font-bold text-gc-ink">{L(stage.label)}</p>
                    <p className="mt-1.5 text-[0.75rem] leading-relaxed text-gc-ink-60">{L(stage.detail)}</p>
                    <p className="mt-3 inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-gc-ink-50">
                      <span aria-hidden className={cn("size-1.5 rounded-full", tone.dot)} />
                      {L(stage.cash)}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Reveal>

      {/* The parcel's journey in photographs: the hub it passes through and the
          doorstep where cash changes hands. */}
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,0.85fr)]">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[28px] md:col-span-2 lg:col-span-1 lg:aspect-auto lg:min-h-[400px]">
          <Image
            src="/merchants/courier-sorting-hub.webp"
            alt="Workers sorting stacks of parcels on shelves inside a courier hub"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.05} className="relative aspect-[4/3] overflow-hidden rounded-[28px] lg:aspect-auto">
          <Image
            src="/merchants/courier-cod-handover.webp"
            alt="Delivery rider handing a parcel to a customer who pays cash at her building gate"
            fill
            sizes="(min-width: 1024px) 32vw, 50vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-between gap-10 rounded-[28px] bg-gc-dark p-8 md:p-9">
          <IconTile name="AlertCircle" tone="dark" />
          <p className="text-[1.0625rem] font-medium leading-relaxed text-white/90 md:text-[1.1875rem]">
            {L(COURIER_COPY.failNote)}
          </p>
        </Reveal>
      </div>
    </Panel>
  );
}
