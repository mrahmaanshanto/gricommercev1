"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, CircleCheck, Pause, Play, RotateCcw, Route, Scale, TriangleAlert } from "lucide-react";
import { SHOTS, STORY, STORY_DEMO } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Panel } from "../../primitives";
import { DemoStamp, HOME_INNER, IconChip, Pill, SectionIntro, Shot, ValueSwap, useNum, useOnScreen } from "./kit";

/*
 * The demonstration fixture (illustrative): order #GC-10512 at ৳2,500, courier
 * payout ৳2,400 after its ৳100 charge, contribution ৳540 after product ৳1,700,
 * courier ৳100, packaging ৳40 and allocated ads ৳120. Payout and contribution
 * are two views of the same sale; the courier charge is never taken twice.
 */
const STEP_MS = 4200;
const SHOT_IDS = ["order-detail", "stock-activity", "courier-statement", "sales-profit"];
const PATHS = ["orders/GC-10512", "stock/activity", "orders/courier-statement", "reports/sales-profit"];

/**
 * Section 2 — "How it works", emphasised: four steps beside the real app screen
 * for each, with a small status card that tracks this one order's stock and
 * money. Advances on its own while on screen; choosing a step jumps there;
 * Pause, Replay and the payout-difference example sit under the steps.
 * Reduced motion: manual steps only.
 */
export function OrderStory() {
  const { L, locale } = useI18n();
  const reduced = useReducedMotion() ?? false;
  const { ref, onScreen } = useOnScreen<HTMLDivElement>();
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [difference, setDifference] = useState(false);
  const [runKey, setRunKey] = useState(0);

  const running = playing && onScreen && !reduced && !difference;

  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => {
      if (document.visibilityState === "visible") setStep((s) => (s + 1) % 4);
      setRunKey((k) => k + 1);
    }, STEP_MS);
    return () => window.clearTimeout(t);
  }, [running, step, runKey]);

  const log = useCallback(
    (action: string, s?: number) => trackEvent("how_it_works_interaction", { action, step: s, locale, section: "how-it-works" }),
    [locale],
  );

  const choose = (i: number) => {
    setDifference(false);
    setStep(i);
    setRunKey((k) => k + 1);
    log("step", i + 1);
  };

  return (
    <Panel id="how-it-works" tone="tint" pattern={null} inner={HOME_INNER}>
      <SectionIntro eyebrow={L(STORY.eyebrow)} title={L(STORY.title)} chip={<IconChip icon={Route} tone="accent" tilt={-8} />} body={L(STORY.body)} />

      <div ref={ref} className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-10">
        <div className="min-w-0">
          <ol aria-label={L(STORY.stepsLabel)} className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
            {STORY.steps.map((s, i) => {
              const active = i === step;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => choose(i)}
                    aria-pressed={active}
                    aria-controls="how-it-works-demo"
                    className={cn(
                      "relative flex w-full gap-3 overflow-hidden rounded-2xl p-3.5 text-left transition-[background-color,box-shadow] duration-300",
                      active ? "bg-white shadow-gc-float ring-1 ring-gc-line" : "hover:bg-white/70",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-full text-[0.75rem] font-bold tabular-nums transition-colors duration-300",
                        active ? "bg-gc-accent text-white" : i < step ? "bg-gc-ink text-white" : "bg-white text-gc-ink-60 ring-1 ring-gc-line",
                      )}
                    >
                      {i < step ? <CircleCheck aria-hidden className="size-4" /> : `0${i + 1}`}
                    </span>
                    <span>
                      <span className={cn("block font-gc-display text-[1rem] font-bold", active ? "text-gc-ink" : "text-gc-ink-70")}>{L(s.title)}</span>
                      <span className="mt-0.5 block text-[0.8125rem] leading-snug text-gc-ink-60">{L(s.body)}</span>
                    </span>
                    {active && running && (
                      <span
                        key={runKey}
                        aria-hidden
                        className="gc-step-bar absolute inset-x-3.5 bottom-0 h-[3px] origin-left rounded-full bg-gc-accent"
                        style={{ animationDuration: `${STEP_MS}ms` }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {!reduced && (
              <button
                type="button"
                onClick={() => {
                  setPlaying((p) => !p);
                  setDifference(false);
                  log(playing ? "pause" : "play");
                }}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-gc-ink px-4 text-[0.8125rem] font-semibold text-white transition-colors hover:bg-gc-ink-70"
              >
                {playing && !difference ? <Pause aria-hidden className="size-4" /> : <Play aria-hidden className="size-4" />}
                {L(playing && !difference ? STORY.pause : STORY.play)}
              </button>
            )}
            {!reduced && (
              <button
                type="button"
                onClick={() => {
                  setDifference(false);
                  setStep(0);
                  setPlaying(true);
                  setRunKey((k) => k + 1);
                  log("replay");
                }}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-[0.8125rem] font-semibold text-gc-ink ring-1 ring-inset ring-gc-line transition-colors hover:text-gc-royal"
              >
                <RotateCcw aria-hidden className="size-4" />
                {L(STORY.replay)}
              </button>
            )}
          </div>
          <button
            type="button"
            aria-pressed={difference}
            onClick={() => {
              setDifference((d) => !d);
              setStep(3);
              log(difference ? "difference_off" : "difference_on");
            }}
            className="mt-2 inline-flex min-h-10 items-center gap-2 text-[0.8125rem] font-semibold text-gc-royal underline-offset-4 hover:underline"
          >
            <Scale aria-hidden className="size-4" />
            {L(difference ? STORY.differenceOff : STORY.differenceOn)}
          </button>
          <Link href="/features/courier" className="mt-1 flex items-center gap-1.5 text-[0.8125rem] font-semibold text-gc-royal underline-offset-4 hover:underline">
            {L(STORY.link)}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>

        <div id="how-it-works-demo" className="relative min-w-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step}
              initial={reduced ? false : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -12 }}
              transition={{ duration: 0.35, ease: EASE.outQuart }}
            >
              <Shot id={SHOT_IDS[step]} alt={L(SHOTS[SHOT_IDS[step]])} path={PATHS[step]} />
            </motion.div>
          </AnimatePresence>

          {/* This order's status, over the screen */}
          <div className="mt-3 sm:absolute sm:bottom-5 sm:left-5 sm:mt-0 sm:w-[19rem]">
            <StatusCard step={step} difference={difference} />
          </div>

          <div className="mt-3 flex flex-wrap items-start gap-x-3 gap-y-1.5 sm:mt-4">
            <DemoStamp />
            <p className="min-w-0 flex-1 text-[0.75rem] leading-relaxed text-gc-ink-60">{L(STORY.caption)}</p>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function StatusCard({ step, difference }: { step: number; difference: boolean }) {
  const { L } = useI18n();
  const n = useNum();
  const D = STORY_DEMO;
  const stock = step === 0 ? { h: 12, r: 0, a: 12 } : { h: 11, r: 0, a: 11 };

  return (
    <div className="rounded-2xl bg-white/95 p-4 shadow-gc-float ring-1 ring-gc-line backdrop-blur">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[0.8125rem] font-bold text-gc-ink">{L(D.orderTitle)}</p>
        <p className="text-[0.8125rem] font-semibold tabular-nums text-gc-ink">{n(2500, { money: true })}</p>
      </div>
      <div className="mt-2.5 min-h-[4.25rem] text-[0.8125rem]">
        {step === 0 && (
          <Pill tone="success" className="whitespace-normal">
            <CircleCheck aria-hidden className="size-3.5 shrink-0" /> {L(D.confirmedBy)}
          </Pill>
        )}
        {step === 1 && (
          <dl className="grid grid-cols-3 gap-1.5">
            {(
              [
                [D.onHand, stock.h],
                [D.reserved, stock.r],
                [D.available, stock.a],
              ] as const
            ).map(([label, v], i) => (
              <div key={i} className={cn("rounded-lg px-2 py-1.5", i === 2 ? "bg-gc-royal-10" : "bg-gc-canvas")}>
                <dt className="text-[0.6875rem] text-gc-ink-60">{L(label)}</dt>
                <dd className="font-bold tabular-nums text-gc-ink">
                  <ValueSwap value={n(v)} />
                </dd>
              </div>
            ))}
          </dl>
        )}
        {step === 2 && (
          <div className="space-y-1.5">
            <Pill tone="warning">
              {L(D.payoutPending)} · {n(2400, { money: true })}
            </Pill>
            <p className="text-[0.75rem] text-gc-ink-60">{L(D.notCash)}</p>
          </div>
        )}
        {step === 3 && !difference && (
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1.5">
              <Pill tone="royal">
                {L(D.payoutReceived)} · {n(2400, { money: true })}
              </Pill>
              <Pill tone="success">
                <CircleCheck aria-hidden className="size-3.5" /> {L(D.matched)}
              </Pill>
            </div>
            <p className="flex items-center justify-between gap-2 border-t border-gc-line pt-2">
              <span className="text-gc-ink-60">{L(D.contributionTitle)}</span>
              <span className="font-bold tabular-nums text-gc-success">{n(540, { money: true })}</span>
            </p>
          </div>
        )}
        {step === 3 && difference && (
          <div className="space-y-1.5">
            <p className="flex justify-between text-gc-ink-70">
              <span>{L(D.received)}</span>
              <span className="font-semibold tabular-nums text-gc-ink">{n(2350, { money: true })}</span>
            </p>
            <Pill tone="danger">
              <TriangleAlert aria-hidden className="size-3.5" /> {L(D.difference)}
            </Pill>
            <p className="text-[0.75rem] text-gc-ink-60">{L(D.contributionHeld)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
