"use client";

import { Reveal } from "@/components/motion";
import { PROOF_COPY } from "@/data/copy/home";
import { SCREENS } from "@/data/screenshots";
import { useI18n } from "@/i18n/provider";
import { BrandScreen } from "../BrandScreen";
import { Panel, SectionHead } from "../primitives";

/**
 * H05 — one COD order followed through stock, courier dues and settlement.
 * Replaces the separate order close-up and end-to-end sections. Courier cash
 * collection follows delivery, and the capture's figures are labelled demo data.
 */
export function BrandProof() {
  const { t, L } = useI18n();

  return (
    <Panel tone="tint" pattern="bl">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <SectionHead title={L(PROOF_COPY.title)} body={L(PROOF_COPY.body)} />
          <Reveal delay={0.08}>
            <ol className="mt-10 space-y-3">
              {PROOF_COPY.steps.map((step, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 rounded-[20px] bg-white p-4 ring-1 ring-inset ring-gc-line/80"
                >
                  <span
                    aria-hidden
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-gc-royal font-gc-display text-gc-small font-bold text-white"
                  >
                    {i + 1}
                  </span>
                  <span className="font-gc-display text-[1rem] font-bold leading-snug text-gc-ink">{L(step)}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <figure>
          <BrandScreen screen={SCREENS.orders} pattern="tr" />
          <figcaption className="mt-4 flex flex-wrap items-center gap-2 text-gc-small text-gc-ink-60">
            <span className="rounded-full bg-gc-royal-10 px-2.5 py-0.5 text-[0.75rem] font-semibold text-gc-royal">
              {t.common.demoData}
            </span>
            {L(PROOF_COPY.caption)}
          </figcaption>
        </figure>
      </div>
    </Panel>
  );
}
