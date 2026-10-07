"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check, Tag as TagIcon } from "lucide-react";
import { PRICING_HOME as P } from "@/data/copy/compare";
import { PLANS, PRICING_COPY } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { GcButton, Panel } from "../../primitives";
import { HOME_INNER, IconChip, TwoTone, useNum } from "./kit";

/**
 * Pricing on the homepage: the three plans with a monthly / yearly switch,
 * the order limit up front, the five main features, and a link to the full
 * pricing page with add-ons.
 */
export function PricingSection() {
  const { L } = useI18n();
  const n = useNum();
  const reduced = useReducedMotion();
  const [yearly, setYearly] = useState(false);

  return (
    <Panel id="pricing" tone="white" pattern={null} inner={HOME_INNER}>
      <div className="mx-auto max-w-3xl text-center">
        <p className="gc-eyebrow inline-flex items-center gap-2 rounded-full bg-gc-royal-10 px-3 py-1.5 text-gc-eyebrow font-semibold uppercase text-gc-royal">
          <span aria-hidden className="size-1.5 rounded-full bg-gc-royal" />
          {L(P.eyebrow)}
        </p>
        <TwoTone className="mt-5" title={L(P.title)} chip={<IconChip icon={TagIcon} tone="royal" tilt={6} />} />
        <p className="mt-5 text-gc-lead text-gc-ink-60">{L(P.body)}</p>

        <div className="mt-7 inline-flex items-center gap-1 rounded-full bg-gc-canvas p-1.5 ring-1 ring-inset ring-gc-line">
          {([false, true] as const).map((isYear) => {
            const active = yearly === isYear;
            return (
              <button
                key={String(isYear)}
                type="button"
                aria-pressed={active}
                onClick={() => setYearly(isYear)}
                className={cn("relative isolate inline-flex items-center gap-2 rounded-full px-4 py-2 text-gc-small font-semibold transition-colors", active ? "text-white" : "text-gc-ink-60 hover:text-gc-ink")}
              >
                {active && (
                  <motion.span
                    layoutId="gc-home-billing"
                    transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }}
                    className="absolute inset-0 -z-10 rounded-full bg-gc-royal"
                  />
                )}
                {L(isYear ? PRICING_COPY.yearly : PRICING_COPY.monthly)}
                {isYear && <span className={cn("rounded-full px-2 py-0.5 text-[0.6875rem]", active ? "bg-white/20" : "bg-gc-sky-10 text-gc-royal")}>{L(PRICING_COPY.yearlyNote)}</span>}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-stretch">
        {PLANS.map((plan, i) => {
          const featured = !!plan.featured;
          const price = yearly ? Math.round(plan.yearly / 12) : plan.monthly;
          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: EASE.outQuart, delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-[28px] p-6 md:p-7",
                featured ? "bg-gc-ink text-white shadow-[0_30px_60px_-30px_rgba(10,40,100,0.7)] lg:-my-3" : "bg-gc-canvas text-gc-ink",
              )}
            >
              {featured && (
                <span className="absolute right-5 top-5 rounded-full bg-gc-accent px-2.5 py-1 text-[0.6875rem] font-bold text-white">{L(P.popular)}</span>
              )}
              <p className="font-gc-display text-[1.25rem] font-bold">{L(plan.name)}</p>
              <p className={cn("mt-1 text-gc-small", featured ? "text-white/70" : "text-gc-ink-60")}>{L(plan.tagline)}</p>
              <p className="mt-5 flex items-baseline gap-1">
                <span className="font-gc-display text-[2.5rem] font-bold leading-none tabular-nums">{n(price, { money: true })}</span>
                <span className={cn("text-gc-small", featured ? "text-white/70" : "text-gc-ink-60")}>{L(PRICING_COPY.perMonth)}</span>
              </p>
              <p className={cn("mt-1 h-5 text-[0.75rem]", featured ? "text-white/60" : "text-gc-ink-50")}>
                {yearly ? `${n(plan.yearly, { money: true })} · ${L(PRICING_COPY.billedYearly)}` : ""}
              </p>
              <p className={cn("mt-4 rounded-xl px-3 py-2 text-gc-small font-semibold", featured ? "bg-white/10" : "bg-white")}>
                {L(plan.limits[0].value)} {L(P.orders)}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((f, k) => (
                  <li key={k} className={cn("flex items-start gap-2.5 text-gc-small", featured ? "text-white/90" : "text-gc-ink-70")}>
                    <Check aria-hidden className={cn("mt-0.5 size-4 shrink-0", featured ? "text-gc-sky" : "text-gc-royal")} strokeWidth={2.5} />
                    {L(f)}
                  </li>
                ))}
              </ul>
              <GcButton
                href={`/signup?plan=${plan.id}`}
                size="md"
                variant={featured ? "white" : "primary"}
                withArrow
                className="mt-6 w-full"
                onClick={() => trackEvent("start_free_clicked", { source: "home_pricing", plan: plan.id })}
              >
                {L(P.start)}
              </GcButton>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 text-center">
        <Link href="/pricing" className="inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline">
          {L(P.all)}
          <ArrowRight aria-hidden className="size-4" />
        </Link>
        <p className="text-[0.75rem] text-gc-ink-50">{L(PRICING_COPY.disclaimer)}</p>
      </div>
    </Panel>
  );
}
