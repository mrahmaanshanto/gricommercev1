"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";
import { Reveal, Stagger } from "@/components/motion";
import { BrandCTA } from "@/components/brand/home/BrandCTA";
import { GcButton, IconTile, Panel, SectionHead } from "@/components/brand/primitives";
import { PageHero } from "./PageHero";
import { MODULES, PLANS, PRICING_COPY, PRICING_FAQ } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";

const bdt = (n: number) => `৳ ${n.toLocaleString("en-US")}`;

export function Pricing() {
  const { t, L } = useI18n();
  const reduced = useReducedMotion();
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <PageHero crumbs={[{ label: PRICING_COPY.title }]} title={PRICING_COPY.title} body={PRICING_COPY.subtitle} align="center" pattern="tl">
        {/* Billing period switch */}
        <div className="hero-rise mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-[14px] bg-gc-canvas p-1.5 ring-1 ring-inset ring-gc-line">
            {([false, true] as const).map((isYear) => {
              const active = yearly === isYear;
              return (
                <button
                  key={String(isYear)}
                  type="button"
                  onClick={() => setYearly(isYear)}
                  aria-pressed={active}
                  className={cn(
                    "relative isolate inline-flex items-center gap-2 rounded-[10px] px-5 py-2.5 text-gc-small font-semibold transition-colors duration-[200ms]",
                    active ? "text-white" : "text-gc-ink-60 hover:text-gc-ink",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="gc-billing-pill"
                      transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }}
                      className="absolute inset-0 -z-10 rounded-[10px] bg-gc-royal shadow-[0_8px_20px_-8px_rgba(10,91,207,0.6)]"
                    />
                  )}
                  {L(isYear ? PRICING_COPY.yearly : PRICING_COPY.monthly)}
                  {isYear && (
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[0.6875rem] font-semibold",
                        active ? "bg-white/20 text-white" : "bg-gc-sky-10 text-gc-royal",
                      )}
                    >
                      {L(PRICING_COPY.yearlyNote)}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </PageHero>

      {/* Plans */}
      <Panel tone="white" pattern="br" inner="py-14 md:py-20">
        <Stagger className="grid items-stretch gap-4 lg:grid-cols-3" stagger={0.08}>
          {PLANS.map((plan) => {
            const price = yearly ? Math.round(plan.yearly / 12) : plan.monthly;
            const dark = Boolean(plan.featured);

            return (
              <Stagger.Item key={plan.id} className="h-full">
                <div
                  className={cn(
                    "relative isolate flex h-full flex-col overflow-hidden rounded-[20px] p-7 md:p-8",
                    dark ? "bg-gc-dark text-white shadow-gc-float" : "bg-gc-canvas",
                  )}
                >
                  {dark && (
                    <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-gc-royal/40 blur-[90px]" />
                  )}
                  <p className={cn("font-gc-display text-[1.375rem] font-bold", dark ? "text-white" : "text-gc-ink")}>{L(plan.name)}</p>
                  <p className={cn("mt-2 text-gc-small", dark ? "text-white/65" : "text-gc-ink-60")}>{L(plan.tagline)}</p>

                  <div className="mt-8">
                    <p className={cn("font-gc-display text-[2.5rem] font-bold leading-none tracking-tight", dark ? "text-white" : "text-gc-ink")}>
                      {bdt(price)}
                      <span className={cn("ml-1.5 text-gc-body font-medium tracking-normal", dark ? "text-white/55" : "text-gc-ink-50")}>
                        {L(PRICING_COPY.perMonth)}
                      </span>
                    </p>
                    {yearly && (
                      <p className={cn("mt-2 text-gc-small", dark ? "text-white/50" : "text-gc-ink-50")}>
                        {bdt(plan.yearly)} {L(PRICING_COPY.billedYearly)}
                      </p>
                    )}
                  </div>

                  <GcButton href="/signup" size="md" variant={dark ? "white" : "primary"} withArrow fullWidth className="mt-8">
                    {t.common.startFree}
                  </GcButton>

                  <p className={cn("mt-8 text-gc-small", dark ? "text-white/55" : "text-gc-ink-50")}>
                    <span className="font-semibold">{L(PRICING_COPY.bestFor)}:</span> {L(plan.bestFor)}
                  </p>

                  <ul className="mt-5 flex-1 space-y-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className={cn("flex items-start gap-2.5 text-gc-small", dark ? "text-white/80" : "text-gc-ink-70")}>
                        <span
                          className={cn(
                            "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                            dark ? "bg-gc-sky/20 text-gc-sky" : "bg-gc-royal text-white",
                          )}
                        >
                          <Check aria-hidden className="size-3" strokeWidth={3} />
                        </span>
                        {L(f)}
                      </li>
                    ))}
                  </ul>

                  <dl className={cn("mt-8 space-y-2.5 border-t pt-6", dark ? "border-white/12" : "border-gc-line")}>
                    {plan.limits.map((lim, i) => (
                      <div key={i} className="flex items-baseline justify-between gap-3">
                        <dt className={cn("text-gc-small", dark ? "text-white/55" : "text-gc-ink-50")}>{L(lim.label)}</dt>
                        <dd className={cn("font-gc-display text-[1rem] font-bold", dark ? "text-white" : "text-gc-ink")}>{L(lim.value)}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Stagger.Item>
            );
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-gc-small text-gc-ink-50">{L(PRICING_COPY.disclaimer)}</p>
        </Reveal>
      </Panel>

      {/* Modules */}
      <Panel tone="tint" pattern="tl">
        <SectionHead align="center" title={L(PRICING_COPY.modulesTitle)} body={L(PRICING_COPY.modulesBody)} />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
          {MODULES.map((m) => (
            <Stagger.Item key={m.label.en} className="h-full">
              <div className="flex h-full flex-col rounded-[20px] bg-white p-6 ring-1 ring-inset ring-gc-line/80">
                <IconTile name={m.icon} />
                <p className="mt-5 font-gc-display text-[1.0625rem] font-bold text-gc-ink">{L(m.label)}</p>
                <p className="mt-1.5 flex-1 text-gc-small text-gc-ink-60">{L(m.detail)}</p>
                <p className="mt-6 font-gc-display text-[1.5rem] font-bold text-gc-royal">{m.price}</p>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </Panel>

      {/* FAQ */}
      <Panel tone="white" pattern="br">
        <SectionHead align="center" title={L(PRICING_COPY.faqTitle)} />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {PRICING_FAQ.map((item, i) => (
            <details
              key={i}
              className="group/faq rounded-[20px] bg-gc-canvas px-6 py-5 transition-[background-color,box-shadow] duration-[240ms] open:bg-white open:shadow-gc-card open:ring-1 open:ring-inset open:ring-gc-line"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-gc-display text-[1.0625rem] font-bold text-gc-ink [&::-webkit-details-marker]:hidden">
                {L(item.q)}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-gc-royal ring-1 ring-inset ring-gc-line transition-transform duration-[240ms] group-open/faq:rotate-180">
                  <ChevronDown aria-hidden className="size-4" />
                </span>
              </summary>
              <p className="mt-3 text-gc-body text-gc-ink-60">{L(item.a)}</p>
            </details>
          ))}
        </div>
      </Panel>

      <BrandCTA />
    </>
  );
}
