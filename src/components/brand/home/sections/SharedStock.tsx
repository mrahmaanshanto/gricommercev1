"use client";

import Link from "next/link";
import { ArrowRight, Banknote, Boxes, Hourglass, Store, Wallet } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SHARED, SHARED_DEMO, SHOTS } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Panel } from "../../primitives";
import { DemoStamp, HOME_INNER, IconChip, Shot, TwoTone, ValueSwap, useNum, useTimeline } from "./kit";

/** Beats: 1 counter sale completed · 2 online order reserved. Repeats while on screen. */
const CUES = [1400, 3800];
const DURATION = 8000;
const STATES = [
  { onHand: 12, reserved: 0, available: 12 },
  { onHand: 11, reserved: 0, available: 11 },
  { onHand: 11, reserved: 1, available: 10 },
];

/* Today's simplified money picture. Received and outstanding never add into "cash". */
const CASH = { counter: 61200, online: 18400, cod: 28640 };
const RECEIVED = CASH.counter + CASH.online; // 79,600
const SALES = RECEIVED + CASH.cod; // 1,08,240 — sales value, not cash

/**
 * Section 4 — counter and online share one stock picture, emphasised: the
 * real Daily summary with a small live stock card, and today's money with
 * sales value, money received and COD still with couriers kept apart.
 */
export function SharedStock() {
  const { L } = useI18n();
  const n = useNum();
  const { ref, beat } = useTimeline(CUES, { duration: DURATION });
  const s = STATES[beat];
  const D = SHARED_DEMO;
  const event = beat >= 2 ? D.onlineEvent : beat >= 1 ? D.counterEvent : D.waiting;

  return (
    <Panel tone="tint" pattern="bl" inner={HOME_INNER}>
      <div ref={ref} className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        <Reveal direction="right" className="relative order-last min-w-0 lg:order-first">
          <div className="mb-2 flex justify-end">
            <DemoStamp />
          </div>
          <Shot id="daily-summary" alt={L(SHOTS["daily-summary"])} path="analytics/daily-summary" />

          {/* One product, one location, both channels */}
          <div className="mt-3 sm:absolute sm:-bottom-6 sm:-right-3 sm:mt-0 sm:w-[20rem] lg:-right-8">
            <div className="rounded-2xl bg-white/95 p-4 shadow-gc-float ring-1 ring-gc-line backdrop-blur">
              <p className="flex items-center gap-2 text-[0.8125rem] font-bold text-gc-ink">
                <Boxes aria-hidden className="size-4 text-gc-royal" /> {L(D.product)}
              </p>
              <p className="text-[0.75rem] text-gc-ink-60">{L(D.location)}</p>
              <dl className="mt-2.5 grid grid-cols-3 gap-1.5 text-[0.8125rem]">
                {(
                  [
                    [D.onHand, s.onHand],
                    [D.reserved, s.reserved],
                    [D.available, s.available],
                  ] as const
                ).map(([label, v], i) => (
                  <div key={i} className={cn("rounded-lg px-2 py-1.5", i === 2 ? "bg-gc-royal-10" : "bg-gc-canvas")}>
                    <dt className="text-[0.6875rem] text-gc-ink-60">{L(label)}</dt>
                    <dd className="text-[1.125rem] font-bold tabular-nums text-gc-ink">
                      <ValueSwap value={n(v)} />
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-2 flex items-center gap-1.5 text-[0.75rem] font-medium text-gc-ink-70">
                <Store aria-hidden className="size-3.5 shrink-0 text-gc-ink-50" />
                <ValueSwap value={L(event)} />
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="min-w-0">
          <TwoTone title={L(SHARED.title)} chip={<IconChip icon={Store} tone="accent" tilt={-6} />} />
          <p className="mt-5 text-gc-lead text-gc-ink-60">{L(SHARED.body)}</p>

          <p className="mt-7 text-[0.8125rem] font-semibold text-gc-ink">{L(D.cashTitle)}</p>
          <dl className="mt-2 grid gap-2 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-3.5 ring-1 ring-gc-line">
              <dt className="flex items-center gap-1.5 text-[0.75rem] font-medium text-gc-ink-60">
                <Wallet aria-hidden className="size-3.5" /> {L(D.salesValue)}
              </dt>
              <dd className="mt-0.5 text-[1.125rem] font-bold tabular-nums text-gc-ink">{n(SALES, { money: true })}</dd>
            </div>
            <div className="rounded-2xl bg-gc-success-10 p-3.5">
              <dt className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-gc-success">
                <Banknote aria-hidden className="size-3.5" /> {L(D.receivedTotal)}
              </dt>
              <dd className="mt-0.5 text-[1.125rem] font-bold tabular-nums text-gc-ink">{n(RECEIVED, { money: true })}</dd>
              <dd className="text-[0.6875rem] leading-snug text-gc-ink-70">
                {L(D.counterCash)} {n(CASH.counter, { money: true })} · {L(D.onlinePaid)} {n(CASH.online, { money: true })}
              </dd>
            </div>
            <div className="rounded-2xl bg-gc-warning-10 p-3.5">
              <dt className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-gc-warning">
                <Hourglass aria-hidden className="size-3.5" /> {L(D.codDue)}
              </dt>
              <dd className="mt-0.5 text-[1.125rem] font-bold tabular-nums text-gc-ink">{n(CASH.cod, { money: true })}</dd>
              <dd className="text-[0.6875rem] leading-snug text-gc-ink-70">{L(D.codNote)}</dd>
            </div>
          </dl>
          <p className="mt-3 text-[0.75rem] text-gc-ink-60">{L(D.cashNote)}</p>
          <Link href="/features/pos" className="mt-4 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline">
            {L(SHARED.link)}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </Reveal>
      </div>
    </Panel>
  );
}
