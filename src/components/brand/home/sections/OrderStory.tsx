"use client";

import Link from "next/link";
import { ArrowRight, Route } from "lucide-react";
import { Reveal } from "@/components/motion";
import { STORY } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { Panel } from "../../primitives";
import { OrderScene } from "../scenes/OrderScene";
import { HOME_INNER, IconChip, TwoTone } from "./kit";

/**
 * Section 2 — "How it works": one order from the moment it arrives to the
 * money landing in the bank, told as an animated workflow rather than app
 * screenshots.
 */
export function OrderStory() {
  const { L } = useI18n();

  return (
    <Panel id="how-it-works" tone="tint" pattern={null} inner={HOME_INNER}>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <Reveal className="min-w-0">
          <p className="gc-eyebrow inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-gc-eyebrow font-semibold uppercase text-gc-royal ring-1 ring-gc-royal-20">
            <span aria-hidden className="size-1.5 rounded-full bg-gc-royal" />
            {L(STORY.eyebrow)}
          </p>
          <TwoTone className="mt-5" title={L(STORY.title)} chip={<IconChip icon={Route} tone="accent" tilt={-8} />} />
          <p className="mt-5 text-gc-lead text-gc-ink-60">{L(STORY.body)}</p>
          <Link href="/features/orders" className="mt-6 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline">
            {L(STORY.link)}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </Reveal>

        <Reveal direction="left" className="min-w-0">
          <OrderScene />
        </Reveal>
      </div>
    </Panel>
  );
}
