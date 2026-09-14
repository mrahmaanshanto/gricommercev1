"use client";

import { Reveal, Stagger } from "@/components/motion";
import { TRUST_COPY, TRUST_LOGOS, TRUST_STATS } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { Panel, SectionHead } from "../primitives";

/** Section 2 — market position. */
export function BrandTrust() {
  const { L } = useI18n();

  return (
    <Panel tone="white" inner="py-14 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
        <SectionHead eyebrow={L(TRUST_COPY.eyebrow)} title={L(TRUST_COPY.title)} body={L(TRUST_COPY.body)} />

        {/* Two columns beside the heading on desktop: four columns there left
            ~90px per figure and "৳ 190cr" wrapped into its neighbour. Each stat
            carries its own rule, so no divider depends on the column count. */}
        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4 lg:grid-cols-2" stagger={0.06}>
          {TRUST_STATS.map((stat) => (
            <Stagger.Item key={stat.value} className="border-l-2 border-gc-royal/15 pl-4">
              <p className="whitespace-nowrap font-gc-display text-[1.75rem] font-bold leading-none tracking-tight text-gc-ink md:text-[2rem] lg:text-[2.375rem]">
                {stat.value}
              </p>
              <p className="mt-3 text-gc-small text-gc-ink-50">{L(stat.label)}</p>
            </Stagger.Item>
          ))}
        </Stagger>
      </div>

      <Reveal delay={0.1} className="mt-14 border-t border-gc-line pt-10">
        <p className="gc-eyebrow text-center text-gc-eyebrow font-semibold uppercase text-gc-ink-50">
          {L(TRUST_COPY.logosLabel)}
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {TRUST_LOGOS.map((name) => (
            <li
              key={name}
              className="font-gc-display text-[1.125rem] font-bold tracking-tight text-gc-ink-30 transition-colors duration-[220ms] hover:text-gc-ink-60"
            >
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </Panel>
  );
}
