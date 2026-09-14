"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FAQ_COPY } from "@/data/copy/home";
import { useI18n } from "@/i18n/provider";
import { loc, type Localized } from "@/i18n/types";
import { Panel, SectionHead } from "../primitives";

/** Deeper pages an answer links to, labelled as they are in the navigation. */
const LINK_LABELS: Record<string, Localized> = {
  "/pricing": loc("Pricing", "প্রাইসিং ও প্ল্যান"),
  "/migration": loc("Migration", "মাইগ্রেশন"),
};

/**
 * H07 — a short accordion. Native <details> keeps every answer in the HTML,
 * open or closed, so it stays visible to search and screen readers.
 */
export function BrandFaq() {
  const { L } = useI18n();

  return (
    <Panel tone="white" pattern="tr">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHead title={L(FAQ_COPY.title)} />

        <div className="divide-y divide-gc-line border-y border-gc-line">
          {FAQ_COPY.items.map((item) => (
            <details key={item.id} className="group/faq">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-gc-display text-[1.0625rem] font-bold leading-snug text-gc-ink [&::-webkit-details-marker]:hidden">
                {L(item.question)}
                <ChevronDown
                  aria-hidden
                  className="size-5 shrink-0 text-gc-ink-50 transition-transform duration-[220ms] group-open/faq:rotate-180 group-open/faq:text-gc-royal"
                />
              </summary>
              <div className="pb-6 pr-2 md:pr-10">
                <p className="text-gc-body text-gc-ink-60">{L(item.answer)}</p>
                {item.link && LINK_LABELS[item.link] && (
                  <Link
                    href={item.link}
                    className="mt-3 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline"
                  >
                    {L(LINK_LABELS[item.link])}
                    <ArrowRight aria-hidden className="size-4" />
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </Panel>
  );
}
