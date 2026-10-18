"use client";

import Link from "next/link";
import { ArrowRight, Boxes, Globe, ScanBarcode, Store } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SHARED } from "@/data/copy/homepage";
import { STOCK_SCENE } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { Panel } from "../../primitives";
import { HOME_INNER, IconChip, TwoTone } from "./kit";
import { lazyScene } from "../scenes/lazy";

const StockScene = lazyScene(() => import("../scenes/StockScene").then((m) => m.StockScene));

/**
 * Section 4 — counter and online share one stock picture: an animated scene (a
 * counter sale and an online order drawing on one count, the website following)
 * beside the three words the scene uses. Money lives in the dashboard section.
 */
export function SharedStock() {
  const { L } = useI18n();
  const S = STOCK_SCENE;

  return (
    <Panel tone="tint" pattern="bl" inner={HOME_INNER}>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        <Reveal direction="right" className="order-last min-w-0 lg:order-first">
          <StockScene />
        </Reveal>

        <Reveal className="min-w-0">
          <TwoTone title={L(SHARED.title)} chip={<IconChip icon={Store} tone="accent" tilt={-6} />} />
          <p className="mt-5 text-gc-lead text-gc-ink-60">{L(SHARED.body)}</p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-3">
            {(
              [
                [ScanBarcode, S.steps[1]],
                [Globe, S.steps[3]],
                [Boxes, S.formula],
              ] as const
            ).map(([Icon, text], i) => (
              <li key={i} className="flex items-start gap-2 rounded-2xl bg-white p-3 text-[0.8125rem] leading-snug ring-1 ring-gc-line">
                <Icon aria-hidden className="mt-0.5 size-4 shrink-0 text-gc-royal" />
                <span>{L(text)}</span>
              </li>
            ))}
          </ul>
          <Link href="/features/pos" className="mt-4 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline">
            {L(SHARED.link)}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </Reveal>
      </div>
    </Panel>
  );
}
