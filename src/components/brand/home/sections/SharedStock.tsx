"use client";

import Link from "next/link";
import { ArrowRight, Banknote, Hourglass, Store, Wallet } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SHARED, SHARED_DEMO } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { Panel } from "../../primitives";
import { StockScene } from "../scenes/StockScene";
import { HOME_INNER, IconChip, TwoTone, useNum } from "./kit";

/* Today's simplified money picture. Received and outstanding never add into "cash". */
const CASH = { counter: 61200, online: 18400, cod: 28640 };
const RECEIVED = CASH.counter + CASH.online; // 79,600
const SALES = RECEIVED + CASH.cod; // 1,08,240 — sales value, not cash

/**
 * Section 4 — counter and online share one stock picture, emphasised: an
 * animated scene (a counter sale and an online order drawing on one count)
 * beside today's money, with sales value, money received and COD still with
 * couriers kept apart.
 */
export function SharedStock() {
  const { L } = useI18n();
  const n = useNum();
  const D = SHARED_DEMO;

  return (
    <Panel tone="tint" pattern="bl" inner={HOME_INNER}>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        <Reveal direction="right" className="order-last min-w-0 lg:order-first">
          <StockScene />
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
