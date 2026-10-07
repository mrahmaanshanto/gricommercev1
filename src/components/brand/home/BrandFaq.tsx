"use client";

import { ChevronDown } from "lucide-react";
import { FAQ } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { Panel } from "../primitives";
import { HOME_INNER, SectionIntro } from "./sections/kit";

/**
 * Section 10 — FAQ. Native <details>: several answers can be open at once,
 * keyboard and screen readers get the built-in behaviour, and every answer
 * stays in the HTML.
 */
export function BrandFaq() {
  const { L } = useI18n();

  return (
    <Panel tone="tint" pattern="tr" inner={HOME_INNER}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionIntro layout="stack" size="h2" title={L(FAQ.title)} />

        <div className="divide-y divide-gc-line border-y border-gc-line">
          {FAQ.items.map((item) => (
            <details key={item.id} className="group/faq">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-5 font-gc-display text-[1.0625rem] font-bold leading-snug text-gc-ink [&::-webkit-details-marker]:hidden">
                {L(item.q)}
                <ChevronDown
                  aria-hidden
                  className="size-5 shrink-0 text-gc-ink-50 transition-transform duration-[220ms] group-open/faq:rotate-180 group-open/faq:text-gc-royal motion-reduce:transition-none"
                />
              </summary>
              <p className="pb-6 pr-2 text-gc-body text-gc-ink-60 md:pr-10">{L(item.a)}</p>
            </details>
          ))}
        </div>
      </div>
    </Panel>
  );
}
