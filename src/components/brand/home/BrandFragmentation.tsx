"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { FRAGMENTATION_COPY, FRAGMENTATION_TOOLS } from "@/data/copy/home";
import { useI18n } from "@/i18n/provider";
import { BrandLogo, Panel, SectionHead } from "../primitives";

/**
 * Section 3 — the fragmentation scroll story. Mechanics mirror
 * `marketing/Fragmentation`: chips animate container-relative left/top (a
 * motion x/y percentage would resolve against the chip itself), then the
 * brand lockup resolves in the centre.
 */
export function BrandFragmentation() {
  const { L } = useI18n();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.35"] });
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.6 });

  const spread = useTransform(p, [0, 0.72], [1, 0]);
  const logoOpacity = useTransform(p, [0.5, 0.82], [0, 1]);
  const logoScale = useTransform(p, [0.5, 0.9], [0.84, 1]);
  const ringOpacity = useTransform(p, [0.55, 0.9], [0, 1]);

  return (
    <Panel tone="tint" pattern="tr">
      <SectionHead align="center" eyebrow={L(FRAGMENTATION_COPY.eyebrow)} title={L(FRAGMENTATION_COPY.headline)} body={L(FRAGMENTATION_COPY.body)} />

      <div ref={ref} className="relative mx-auto mt-14 aspect-[4/3] w-full max-w-[920px] sm:aspect-[16/10] md:mt-16">
        <motion.div
          aria-hidden
          style={{ opacity: reduced ? 1 : ringOpacity }}
          className="absolute inset-0 grid place-items-center"
        >
          <div className="size-[40%] rounded-full border border-gc-royal/25" />
          <div className="absolute size-[60%] rounded-full border border-dashed border-gc-royal/20" />
          <div className="absolute size-[80%] rounded-full border border-gc-sky/25" />
        </motion.div>

        {FRAGMENTATION_TOOLS.map((tool, i) => (
          <ToolChip key={i} tool={tool} spread={spread} reduced={!!reduced} label={L(tool.label)} />
        ))}

        <motion.div
          style={{ opacity: reduced ? 1 : logoOpacity, scale: reduced ? 1 : logoScale }}
          className="absolute inset-0 grid place-items-center"
        >
          <div className="rounded-[24px] bg-white px-7 py-6 text-center shadow-gc-float ring-1 ring-gc-line/60 sm:px-10 sm:py-8">
            <BrandLogo href={null} className="mx-auto h-[24px] sm:h-[32px]" />
            <p className="gc-eyebrow mt-4 text-gc-eyebrow font-semibold uppercase text-gc-royal">{L(FRAGMENTATION_COPY.after)}</p>
          </div>
        </motion.div>
      </div>
    </Panel>
  );
}

function ToolChip({
  tool,
  spread,
  reduced,
  label,
}: {
  tool: (typeof FRAGMENTATION_TOOLS)[number];
  spread: MotionValue<number>;
  reduced: boolean;
  label: string;
}) {
  const left = useTransform(spread, (s) => `${50 + tool.x * s}%`);
  const top = useTransform(spread, (s) => `${50 + tool.y * s}%`);
  const opacity = useTransform(spread, [0, 0.2, 1], [0, 0.9, 1]);
  const scale = useTransform(spread, [0, 1], [0.72, 1]);
  const ToolIcon = tool.icon;

  return (
    <motion.div
      style={
        reduced
          ? { left: `${50 + tool.x}%`, top: `${50 + tool.y}%`, x: "-50%", y: "-50%" }
          : { left, top, opacity, scale, x: "-50%", y: "-50%" }
      }
      className="absolute"
    >
      <div className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white p-1.5 shadow-gc-card ring-1 ring-gc-line/70 sm:pr-3.5">
        <span className="grid size-7 place-items-center rounded-full bg-gc-sky-10 text-gc-royal">
          <ToolIcon aria-hidden className="size-3.5" strokeWidth={2} />
        </span>
        <span className="hidden text-gc-small font-medium text-gc-ink-70 sm:inline">{label}</span>
      </div>
    </motion.div>
  );
}
