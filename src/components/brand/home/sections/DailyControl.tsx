"use client";

import Link from "next/link";
import { ArrowRight, ClipboardList } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Icon } from "@/components/ui/Icon";
import { CONTROL } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { Panel } from "../../primitives";
import { MoneyScene } from "../scenes/MoneyScene";
import { HOME_INNER, IconChip, TwoTone } from "./kit";

/**
 * Section 3 — what needs attention today, emphasised: the three proof points
 * beside an animated board (orders confirmed, a courier payout matched, one
 * sale worked down to profit).
 */
export function DailyControl() {
  const { L } = useI18n();

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

        <Reveal direction="left" className="min-w-0">
          <MoneyScene />
        </Reveal>
      </div>

    </Panel>
  );
}
