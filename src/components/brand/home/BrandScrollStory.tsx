"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion";
import { STORY_BEATS, STORY_COPY } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { Panel, SectionHead } from "../primitives";

/** Section 31 — one order, end to end. */
export function BrandScrollStory() {
  const { L } = useI18n();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.75"] });
  const p = useSpring(scrollYProgress, { stiffness: 100, damping: 26, mass: 0.6 });
  const railHeight = useTransform(p, [0, 1], ["0%", "100%"]);

  return (
    <Panel tone="dark" pattern="tr">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHead tone="dark" eyebrow={L(STORY_COPY.eyebrow)} title={L(STORY_COPY.title)} body={L(STORY_COPY.body)} />
          <Reveal delay={0.1} className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-[28px] ring-1 ring-white/10 lg:block">
            <Image
              src="/merchants/merchant-rider.webp"
              alt="Delivery rider checking a phone beside a motorcycle with a parcel box on a Dhaka street"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          <div aria-hidden className="absolute bottom-3 left-[21px] top-3 w-0.5 rounded-full bg-white/10">
            <motion.div
              style={reduced ? { height: "100%" } : { height: railHeight }}
              className="w-0.5 rounded-full bg-gradient-to-b from-gc-sky to-gc-royal"
            />
          </div>

          <ol className="space-y-3">
            {STORY_BEATS.map((beat, i) => (
              <motion.li
                key={beat.id}
                initial={reduced ? { opacity: 0 } : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="relative flex items-start gap-4"
              >
                <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-2xl bg-gc-dark text-gc-sky ring-1 ring-inset ring-white/15">
                  <Icon name={beat.icon} className="size-5" />
                </span>
                <div className="flex-1 rounded-[20px] bg-white/[0.04] px-5 py-4 ring-1 ring-inset ring-white/10">
                  <p className="font-gc-display text-[1.0625rem] font-bold text-white">{L(beat.label)}</p>
                  <p className="mt-1.5 text-gc-small text-white/60">{L(beat.detail)}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </Panel>
  );
}
