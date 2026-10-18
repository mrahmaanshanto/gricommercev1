"use client";

import { LogIn, PackagePlus, PlugZap, Rocket, type LucideIcon } from "lucide-react";
import { Stagger } from "@/components/motion";
import { START } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { GcButton, Panel } from "../../primitives";
import { HOME_INNER, IconChip, SectionIntro, useNum } from "./kit";

const TONES = [
  "bg-gradient-to-b from-gc-royal-10 to-white ring-gc-royal-20/70",
  "bg-gradient-to-b from-gc-sky-10 to-white ring-gc-sky-20",
  "bg-gradient-to-b from-gc-accent-10 to-white ring-gc-accent/15",
];

/* The step icons, by the name the copy carries. */
const STEP_ICONS: Record<string, LucideIcon> = { LogIn, PackagePlus, PlugZap };

/**
 * Section 9 — how to start, in the three steps the real sign-up takes: sign
 * in and choose a system, add products (import or by hand), connect courier
 * and payments in Connections. Then the two ways to begin: a demo or the
 * 15-day trial (the plan terms stay on the pricing page).
 */
export function StartSteps() {
  const { t, L } = useI18n();
  const n = useNum();

  return (
    <Panel id="start" tone="white" pattern="bl" inner={HOME_INNER}>
      <SectionIntro layout="center" size="h2" title={L(START.title)} chip={<IconChip icon={Rocket} tone="accent" tilt={8} />} body={L(START.body)} />

      <Stagger className="mt-10 grid gap-4 md:grid-cols-3" stagger={0.08}>
        {START.steps.map((step, i) => {
          const Icon = STEP_ICONS[step.icon] ?? Rocket;
          return (
            <Stagger.Item key={i} className="h-full">
              <div className={cn("relative h-full overflow-hidden rounded-[20px] p-6 ring-1 ring-inset md:p-7", TONES[i])}>
                <span aria-hidden className="pointer-events-none absolute -right-2 -top-6 font-gc-display text-[7rem] font-extrabold leading-none text-gc-ink/[0.05]">
                  {n(i + 1)}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-full bg-white px-3 py-1 text-[0.8125rem] font-bold tabular-nums text-gc-ink ring-1 ring-gc-line">
                    {n(0)}
                    {n(i + 1)}
                  </span>
                  <span className="grid size-10 place-items-center rounded-xl bg-white text-gc-royal shadow-[0_6px_14px_-8px_rgba(17,24,39,0.35)] ring-1 ring-gc-line">
                    <Icon aria-hidden className="size-5" strokeWidth={1.9} />
                  </span>
                </div>
                <h3 className="mt-6 text-gc-h4 text-gc-ink">{L(step.title)}</h3>
                <p className="mt-2 text-gc-body text-gc-ink-60">{L(step.body)}</p>
              </div>
            </Stagger.Item>
          );
        })}
      </Stagger>

      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <GcButton
            href="/signup"
            size="lg"
            withArrow
            className="w-full sm:w-auto"
            onClick={() => trackEvent("start_free_clicked", { source: "start_steps" })}
          >
            {L(START.trial)}
          </GcButton>
          <GcButton
            href="/contact?topic=demo"
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={() => trackEvent("demo_requested", { source: "start_steps" })}
          >
            {t.common.bookDemo}
          </GcButton>
        </div>
        <p className="text-[0.75rem] text-gc-ink-50">{L(START.trialNote)}</p>
      </div>
    </Panel>
  );
}
