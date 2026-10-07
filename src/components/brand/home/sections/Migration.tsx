"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CircleCheck, CloudDownload, Loader } from "lucide-react";
import { Reveal } from "@/components/motion";
import { MIGRATION, MIGRATION_DEMO, SHOTS } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { GcButton, Panel } from "../../primitives";
import { Counter } from "../hero/shared";
import { DemoStamp, HOME_INNER, IconChip, Pill, Shot, TwoTone, useNum, useTimeline } from "./kit";

/** Beats: 1 connected · 2–5 each data type finishes · 6 test import ready. Repeats while on screen. */
const CUES = [500, 1500, 2600, 3700, 4700, 5600];
const DURATION = 9500;

/**
 * Migration assistant (Shopify / WordPress), emphasised: the four steps beside
 * the real WordPress sync screen, with the assistant importing customers, past
 * orders, products and pages on top. Demo figures.
 */
export function Migration() {
  const { L } = useI18n();
  const n = useNum();
  const { ref, beat, reduced } = useTimeline(CUES, { duration: DURATION });

  return (
    <Panel tone="white" pattern="tr" inner={HOME_INNER} background={<div className="absolute inset-0 bg-gradient-to-br from-gc-royal-10 via-white to-gc-sky-10" />}>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
        <Reveal className="min-w-0">
          <p className="gc-eyebrow inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-gc-eyebrow font-semibold uppercase text-gc-royal ring-1 ring-gc-royal-20">
            <span aria-hidden className="size-1.5 rounded-full bg-gc-royal" />
            {L(MIGRATION.eyebrow)}
          </p>
          <TwoTone className="mt-5" title={L(MIGRATION.title)} chip={<IconChip icon={CloudDownload} tone="royal" tilt={6} />} />
          <p className="mt-5 text-gc-lead text-gc-ink-60">{L(MIGRATION.body)}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3" aria-hidden>
            <span className="grid h-11 place-items-center rounded-xl bg-white px-3 ring-1 ring-gc-line">
              <Image src="/integrations/shopify.webp" alt="" width={300} height={86} className="h-6 w-auto" />
            </span>
            <span className="grid h-11 place-items-center rounded-xl bg-white px-3 ring-1 ring-gc-line">
              <Image src="/integrations/wordpress.webp" alt="" width={300} height={190} className="h-8 w-auto" />
            </span>
          </div>

          <ol className="mt-7 grid gap-3 sm:grid-cols-2">
            {MIGRATION.steps.map((s, i) => (
              <li key={i} className="rounded-2xl bg-white p-4 ring-1 ring-gc-line">
                <span className="grid size-7 place-items-center rounded-full bg-gc-royal text-[0.75rem] font-bold tabular-nums text-white">{n(i + 1)}</span>
                <p className="mt-2.5 font-gc-display text-[1rem] font-bold text-gc-ink">{L(s.title)}</p>
                <p className="mt-0.5 text-[0.8125rem] leading-snug text-gc-ink-60">{L(s.body)}</p>
              </li>
            ))}
          </ol>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <GcButton href="/contact?topic=demo" size="lg" withArrow className="w-full sm:w-auto" onClick={() => trackEvent("migration_requested", { source: "home" })}>
              {L(MIGRATION.cta)}
            </GcButton>
            <Link href="/migration" className="inline-flex min-h-11 items-center justify-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline">
              {L(MIGRATION.link)}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <p className="mt-3 text-[0.8125rem] text-gc-ink-60">{L(MIGRATION.note)}</p>
        </Reveal>

        <Reveal direction="left" className="relative min-w-0">
          <div ref={ref}>
            <div className="mb-2 flex justify-end">
              <DemoStamp />
            </div>
            <Shot id="woo-sync" alt={L(SHOTS["woo-sync"])} path="channels/woocommerce" />

            {/* The assistant at work */}
            <div className="mt-3 sm:absolute sm:-bottom-8 sm:-left-4 sm:mt-0 sm:w-[21rem] lg:-left-10">
              <div className="rounded-2xl bg-white p-4 shadow-gc-float ring-1 ring-gc-line">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[0.875rem] font-bold text-gc-ink">{L(MIGRATION_DEMO.title)}</p>
                  <Pill tone={beat >= 1 ? "success" : "neutral"}>{L(MIGRATION_DEMO.connected)}</Pill>
                </div>
                <p className="mt-0.5 text-[0.75rem] text-gc-ink-60">
                  {L(MIGRATION_DEMO.from)}: {L(MIGRATION_DEMO.source)}
                </p>
                <ul className="mt-3 space-y-2.5">
                  {MIGRATION_DEMO.rows.map((row, i) => {
                    const done = beat >= i + 2;
                    const busy = beat === i + 1;
                    return (
                      <li key={row.key}>
                        <div className="flex items-center justify-between gap-2 text-[0.8125rem]">
                          <span className="flex items-center gap-1.5 font-medium text-gc-ink">
                            {done ? (
                              <CircleCheck aria-hidden className="size-4 text-gc-success" />
                            ) : (
                              <Loader aria-hidden className={cn("size-4 text-gc-ink-30", busy && !reduced && "animate-spin text-gc-royal")} />
                            )}
                            {L(row.label)}
                          </span>
                          <span className="tabular-nums text-gc-ink-70">
                            <Counter value={done ? row.total : busy ? Math.round(row.total * 0.6) : 0} duration={0.9} />
                          </span>
                        </div>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-gc-canvas">
                          <motion.div
                            className={cn("h-full rounded-full", done ? "bg-gc-success" : "bg-gc-royal")}
                            initial={false}
                            animate={{ width: done ? "100%" : busy ? "60%" : "0%" }}
                            transition={reduced ? { duration: 0 } : { duration: 0.9, ease: EASE.outQuart }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <p
                  className={cn(
                    "mt-3 flex items-center gap-1.5 rounded-xl px-3 py-2 text-[0.8125rem] font-semibold transition-colors duration-300",
                    beat >= 6 ? "bg-gc-success-10 text-gc-success" : "bg-gc-canvas text-gc-ink-60",
                  )}
                >
                  {beat >= 6 ? <CircleCheck aria-hidden className="size-4" /> : <Loader aria-hidden className={cn("size-4", !reduced && "animate-spin")} />}
                  {L(beat >= 6 ? MIGRATION_DEMO.ready : MIGRATION_DEMO.importing)}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Panel>
  );
}
