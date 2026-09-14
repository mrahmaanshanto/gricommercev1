"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion";
import { useI18n } from "@/i18n/provider";
import type { Localized } from "@/i18n/types";
import { cn } from "@/lib/cn";
import { IconTile, Panel, SectionHead, type Corner } from "../primitives";

export type FlowStep = {
  id: string;
  icon: string;
  label: Localized;
  detail: Localized;
  /** Marks a step a person performs, not the system. */
  human?: boolean;
};

/** Sections 12 and 13 — cart recovery and AI product creation. Human steps
 *  are set in solid RoyalBlue so the approval step cannot be missed. With an
 *  `image`, the heading shares its row with a photograph. */
export function BrandFlow({
  id,
  eyebrow,
  title,
  body,
  steps,
  humanLabel,
  tone = "white",
  pattern = "bl",
  image,
}: {
  id?: string;
  eyebrow: Localized;
  title: Localized;
  body: Localized;
  steps: FlowStep[];
  humanLabel?: Localized;
  tone?: "white" | "tint";
  pattern?: Corner;
  image?: { src: string; alt: string };
}) {
  const { L } = useI18n();
  const reduced = useReducedMotion();

  return (
    <Panel id={id} tone={tone} pattern={pattern}>
      {image ? (
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHead eyebrow={L(eyebrow)} title={L(title)} body={L(body)} />
          <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-gc-card md:rounded-[36px]">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      ) : (
        <SectionHead align="center" eyebrow={L(eyebrow)} title={L(title)} body={L(body)} />
      )}

      <div className="relative mt-14">
        {/* Dashed route behind the cards — visible only in the gaps. */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[8%] right-[8%] top-[40px] hidden border-t-2 border-dashed border-gc-royal/25 lg:block"
        />
        <ol className="relative grid gap-3 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {steps.map((step, i) => {
            const human = Boolean(step.human);
            return (
              <motion.li
                key={step.id}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div
                  className={cn(
                    "flex h-full flex-col rounded-[22px] p-5",
                    human ? "bg-gc-royal shadow-gc-float" : "bg-white ring-1 ring-inset ring-gc-line/80",
                  )}
                >
                  <IconTile name={step.icon} size="sm" tone={human ? "white" : "light"} />
                  <p
                    className={cn(
                      "mt-5 font-gc-display text-[1rem] font-bold leading-snug",
                      human ? "text-white" : "text-gc-ink",
                    )}
                  >
                    {L(step.label)}
                  </p>
                  <p className={cn("mt-2 text-gc-small", human ? "text-white/80" : "text-gc-ink-60")}>
                    {L(step.detail)}
                  </p>
                  {human && humanLabel && (
                    <span className="gc-eyebrow mt-5 inline-flex w-fit items-center rounded-full bg-white/15 px-2.5 py-1 text-gc-eyebrow font-semibold uppercase text-white">
                      {L(humanLabel)}
                    </span>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Panel>
  );
}
