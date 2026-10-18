"use client";

import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion";
import { CONNECT } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { Panel } from "../../primitives";
import { HOME_INNER, IconChip, TwoTone } from "./kit";
import { lazyScene } from "../scenes/lazy";

const GridAiScene = lazyScene(() => import("../scenes/GridAiScene").then((m) => m.GridAiScene));

/**
 * GridAI, one job: a customer's night-time question answered from live stock, price and delivery; a draft the owner
 * sends (or Autopilot per chat); a discount above the limit that waits for the owner. The pitch sits beside the scene.
 * (The file keeps its old name so the page composition does not change.)
 */
export function Connections() {
  const { L } = useI18n();
  const C = CONNECT.gridai;

  return (
    <Panel id="gridai" tone="tint" pattern={null} inner={HOME_INNER}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="min-w-0 lg:order-last">
          <p className="gc-eyebrow inline-flex items-center gap-2 rounded-full bg-[#F1ECFE] px-3 py-1.5 text-gc-eyebrow font-semibold uppercase text-[#6D3FD9]">
            <Sparkles aria-hidden className="size-3.5" />
            {L(C.eyebrow)}
          </p>
          <TwoTone className="mt-5" title={L(C.title)} chip={<IconChip icon={Sparkles} tone="royal" tilt={6} />} />
          <p className="mt-5 text-gc-lead text-gc-ink-60">{L(C.body)}</p>
          <ul className="mt-6 space-y-2.5">
            {C.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-gc-body font-medium text-gc-ink">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gc-royal text-white">
                  <Check aria-hidden className="size-3" strokeWidth={3} />
                </span>
                {L(p)}
              </li>
            ))}
          </ul>
          <Link href={C.href} className="mt-7 inline-flex min-h-11 items-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline">
            {L(C.link)}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
          <p className="mt-3 text-[0.75rem] text-gc-ink-50">{L(C.small)}</p>
        </Reveal>

        <Reveal direction="right" className="min-w-0">
          <GridAiScene />
        </Reveal>
      </div>
    </Panel>
  );
}
