"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, ClipboardList, Info } from "lucide-react";
import { Floating, Reveal } from "@/components/motion";
import { Icon } from "@/components/ui/Icon";
import { CONTROL, REPORT_DEMO, REPORT_TOGGLE, SHOTS } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Panel } from "../../primitives";
import { DemoStamp, HOME_INNER, IconChip, Shot, TwoTone, useNum } from "./kit";

/*
 * Demo campaign report, 1–30 Sep 2026, counted by delivery date. Cost per
 * delivered order is always ad spend ÷ delivered orders from the same rows;
 * platform-reported purchases are shown beside them and never used.
 */
type Row = { spend: number; confirmed: number; delivered: number; revenue: number; returns: number; platform: number };
const ROWS: Row[] = [
  { spend: 48000, confirmed: 310, delivered: 268, revenue: 656600, returns: 22, platform: 341 },
  { spend: 12000, confirmed: 96, delivered: 88, revenue: 202400, returns: 4, platform: 118 },
  { spend: 20000, confirmed: 150, delivered: 112, revenue: 212800, returns: 21, platform: 171 },
  { spend: 15000, confirmed: 74, delivered: 69, revenue: 193200, returns: 3, platform: 80 },
];
const TOTAL: Row = ROWS.reduce(
  (a, r) => ({
    spend: a.spend + r.spend,
    confirmed: a.confirmed + r.confirmed,
    delivered: a.delivered + r.delivered,
    revenue: a.revenue + r.revenue,
    returns: a.returns + r.returns,
    platform: a.platform + r.platform,
  }),
  { spend: 0, confirmed: 0, delivered: 0, revenue: 0, returns: 0, platform: 0 },
);
const cpdo = (r: Row) => Math.round(r.spend / r.delivered);

/**
 * Section 3 — what needs attention today, emphasised: the three proof points
 * beside the real Analytics hub, with the full campaign report one click away.
 */
export function DailyControl() {
  const { L } = useI18n();
  const n = useNum();
  const R = REPORT_DEMO;

  return (
    <Panel tone="white" pattern="tr" inner={HOME_INNER}>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <Reveal className="min-w-0">
          <TwoTone title={L(CONTROL.title)} chip={<IconChip icon={ClipboardList} tone="royal" tilt={-5} />} />
          <p className="mt-5 text-gc-lead text-gc-ink-60">{L(CONTROL.body)}</p>
          <ul className="mt-7 space-y-5">
            {CONTROL.cards.map((card) => (
              <li key={card.icon} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gc-royal text-white shadow-[0_10px_20px_-10px_rgba(10,91,207,0.7)]">
                  <Icon name={card.icon} className="size-[18px]" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-gc-display text-[1.0625rem] font-bold text-gc-ink">{L(card.title)}</h3>
                  <p className="mt-0.5 text-gc-small text-gc-ink-60">{L(card.body)}</p>
                  <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
                    {card.links.map((l) => (
                      <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-gc-royal underline-offset-4 hover:underline">
                        {L(l.label)}
                        <ArrowRight aria-hidden className="size-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="left" className="relative min-w-0">
          <div className="mb-2 flex justify-end">
            <DemoStamp />
          </div>
          <Shot id="analytics-hub" alt={L(SHOTS["analytics-hub"])} path="analytics/hub" />
          <Floating className="absolute -bottom-5 -left-3 hidden sm:block lg:-left-8" amplitude={5} duration={8}>
            <div className="w-[15rem] rounded-2xl bg-white/95 p-4 shadow-gc-float ring-1 ring-gc-line backdrop-blur">
              <p className="text-[0.75rem] font-semibold text-gc-ink-60">{L(R.cpdo)}</p>
              <p className="mt-0.5 font-gc-display text-[1.5rem] font-bold tabular-nums text-gc-royal">{n(cpdo(TOTAL), { money: true })}</p>
              <p className="text-[0.75rem] text-gc-ink-60">
                {n(TOTAL.delivered)} {L(R.delivered).toLowerCase()} · {L(R.window)}
              </p>
            </div>
          </Floating>
        </Reveal>
      </div>

      {/* The full report, one click away */}
      <details className="group/rep mt-10 rounded-[24px] bg-gc-canvas p-4 md:p-6">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
          <span>
            <span className="block font-gc-display text-[1.0625rem] font-bold text-gc-ink">{L(CONTROL.reportTitle)}</span>
            <span className="block text-[0.8125rem] text-gc-ink-60">{L(REPORT_TOGGLE)}</span>
          </span>
          <ChevronDown aria-hidden className="size-5 shrink-0 text-gc-ink-50 transition-transform duration-200 group-open/rep:rotate-180" />
        </summary>
        <div className="mt-4">
          <p className="max-w-3xl text-gc-small text-gc-ink-60">{L(CONTROL.reportBody)}</p>
          <p className="mt-1 text-[0.8125rem] font-medium text-gc-ink-70">{L(R.window)}</p>
          <div className="mt-4 hidden overflow-x-auto rounded-2xl bg-white p-4 lg:block">
            <table className="w-full text-left text-[0.875rem]">
              <caption className="sr-only">{L(CONTROL.reportTitle)}</caption>
              <thead>
                <tr className="border-b border-gc-line text-[0.75rem] text-gc-ink-60">
                  <th scope="col" className="py-2.5 pr-4 font-semibold">{L(R.campaign)}</th>
                  <th scope="col" className="px-3 py-2.5 text-right font-semibold">{L(R.spend)}</th>
                  <th scope="col" className="px-3 py-2.5 text-right font-semibold">{L(R.confirmed)}</th>
                  <th scope="col" className="px-3 py-2.5 text-right font-semibold">{L(R.delivered)}</th>
                  <th scope="col" className="px-3 py-2.5 text-right font-semibold">{L(R.revenue)}</th>
                  <th scope="col" className="bg-gc-royal-10/60 px-3 py-2.5 text-right font-semibold text-gc-royal">{L(R.cpdo)}</th>
                  <th scope="col" className="px-3 py-2.5 text-right font-semibold">{L(R.returns)}</th>
                  <th scope="col" className="py-2.5 pl-3 text-right font-semibold">{L(R.platform)}*</th>
                </tr>
              </thead>
              <tbody>
                {[...ROWS, TOTAL].map((r, i) => (
                  <tr key={i} className={cn(i < ROWS.length ? "border-b border-gc-line/70" : "font-bold")}>
                    <th scope="row" className="py-3 pr-4 font-semibold text-gc-ink">{i < ROWS.length ? L(R.campaigns[i]) : L(R.total)}</th>
                    <Td>{n(r.spend, { money: true })}</Td>
                    <Td>{n(r.confirmed)}</Td>
                    <Td>{n(r.delivered)}</Td>
                    <Td>{n(r.revenue, { money: true })}</Td>
                    <Td accent>{n(cpdo(r), { money: true })}</Td>
                    <Td>{n(r.returns)}</Td>
                    <Td muted>{n(r.platform)}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-4 space-y-3 lg:hidden">
            {ROWS.map((r, i) => (
              <li key={i} className="rounded-2xl bg-white p-4">
                <p className="font-semibold text-gc-ink">{L(R.campaigns[i])}</p>
                <dl className="mt-2 grid gap-x-6 gap-y-1.5 text-[0.8125rem] sm:grid-cols-2">
                  <Pair label={L(R.spend)} value={n(r.spend, { money: true })} />
                  <Pair label={L(R.confirmed)} value={n(r.confirmed)} />
                  <Pair label={L(R.delivered)} value={n(r.delivered)} />
                  <Pair label={L(R.revenue)} value={n(r.revenue, { money: true })} />
                  <Pair label={L(R.cpdo)} value={n(cpdo(r), { money: true })} accent />
                  <Pair label={L(R.returns)} value={n(r.returns)} />
                  <Pair label={`${L(R.platform)}*`} value={n(r.platform)} muted />
                </dl>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-1 text-[0.8125rem] text-gc-ink-60">
            <p>* {L(R.platformNote)}</p>
            <p>{L(R.definition)}</p>
            <p className="flex items-start gap-1.5 font-medium text-gc-ink-70">
              <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-gc-royal" />
              {L(R.caution)}
            </p>
          </div>
        </div>
      </details>
    </Panel>
  );
}

function Td({ children, accent, muted }: { children: string; accent?: boolean; muted?: boolean }) {
  return (
    <td className={cn("px-3 py-3 text-right tabular-nums", accent ? "bg-gc-royal-10/60 font-semibold text-gc-royal" : muted ? "text-gc-ink-60" : "text-gc-ink")}>
      {children}
    </td>
  );
}

function Pair({ label, value, accent, muted }: { label: string; value: string; accent?: boolean; muted?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <dt className="text-gc-ink-60">{label}</dt>
      <dd className={cn("font-semibold tabular-nums", accent ? "text-gc-royal" : muted ? "text-gc-ink-60" : "text-gc-ink")}>{value}</dd>
    </div>
  );
}
