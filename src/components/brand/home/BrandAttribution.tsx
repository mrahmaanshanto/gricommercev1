"use client";

import { Reveal } from "@/components/motion";
import { ATTRIBUTION_COPY, ATTRIBUTION_ROWS } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { Panel, SectionHead } from "../primitives";

/**
 * Section 11 — marketing analytics. The two measurement columns keep distinct
 * headers and fills and are never summed: that separation is a product
 * principle, not a layout choice. GridCommerce's own column takes RoyalBlue;
 * the platform's column stays neutral.
 */
export function BrandAttribution() {
  const { L } = useI18n();
  const head = "gc-eyebrow px-6 py-5 text-gc-eyebrow font-semibold uppercase";

  return (
    <Panel tone="white" pattern="tr">
      <SectionHead
        align="center"
        eyebrow={L(ATTRIBUTION_COPY.eyebrow)}
        title={L(ATTRIBUTION_COPY.title)}
        body={L(ATTRIBUTION_COPY.body)}
      />

      <Reveal delay={0.1} className="mt-14">
        <div className="overflow-x-auto rounded-[24px] bg-white shadow-gc-card ring-1 ring-inset ring-gc-line">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr>
                <th scope="col" className={`${head} text-gc-ink-50`}>{L(ATTRIBUTION_COPY.campaignLabel)}</th>
                <th scope="col" className={`${head} text-gc-ink-50`}>{L(ATTRIBUTION_COPY.spendLabel)}</th>
                <th scope="col" className={`${head} bg-gc-canvas text-gc-ink-70`}>{L(ATTRIBUTION_COPY.platformLabel)}</th>
                <th scope="col" className={`${head} bg-gc-royal text-white`}>{L(ATTRIBUTION_COPY.gridLabel)}</th>
              </tr>
            </thead>
            <tbody>
              {ATTRIBUTION_ROWS.map((row) => (
                <tr key={row.campaign} className="border-t border-gc-line">
                  <th scope="row" className="px-6 py-4 text-gc-body font-semibold text-gc-ink">{row.campaign}</th>
                  <td className="px-6 py-4 text-gc-body text-gc-ink-60">{row.spend}</td>
                  <td className="bg-gc-canvas/70 px-6 py-4 font-gc-display text-[1.0625rem] font-bold text-gc-ink-60">
                    {row.platformValue}
                  </td>
                  <td className="bg-gc-royal-10 px-6 py-4 font-gc-display text-[1.0625rem] font-bold text-gc-royal">
                    {row.gridValue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-center text-gc-small text-gc-ink-50">{L(ATTRIBUTION_COPY.note)}</p>
      </Reveal>
    </Panel>
  );
}
