"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BellRing, CircleCheck, Radar, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion";
import { CONNECT } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { GcButton, Panel } from "../../primitives";
import { HOME_INNER, useNum } from "./kit";

const MERCHANTS = ["merchant-boutique", "merchant-cosmetics", "merchant-electronics", "merchant-grocery", "merchant-home-business"];
const EVENTS = ["Purchase", "AddToCart", "ViewContent", "InitiateCheckout", "Lead", "AddPaymentInfo", "Search", "CompleteRegistration"];

/**
 * Section 5b — the online tools as one bento grid: a lead tile, GridAI
 * insights, the trust line and alerts, server-side tracking, and mobile
 * payments. The integrations have their own full-width section
 * (Integrations.tsx).
 */
export function Connections() {
  const { L, t } = useI18n();
  const n = useNum();
  const C = CONNECT;

  return (
    <Panel tone="white" pattern={null} inner={HOME_INNER}>
      <div className="grid gap-3 md:grid-flow-row-dense md:grid-cols-2 md:gap-4 lg:grid-flow-row lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.78fr)]">
        {/* Lead */}
        <Reveal className="relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-gc-royal px-6 py-10 text-center text-white lg:col-start-1 lg:row-start-1">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[-30%] bottom-[-10%] h-1/2 [transform:perspective(320px)_rotateX(58deg)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage: "linear-gradient(to top, black, transparent)",
              WebkitMaskImage: "linear-gradient(to top, black, transparent)",
            }}
          />
          <h2 className="relative max-w-[17rem] text-gc-h3 font-semibold text-white">{L(C.lead.title)}</h2>
          <span className="relative mt-5 grid size-12 place-items-center rounded-full bg-white text-gc-royal shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)]">
            <ShieldCheck aria-hidden className="size-6" />
          </span>
          <p className="relative mt-5 max-w-[22rem] text-gc-small text-white/85">{L(C.lead.body)}</p>
          <GcButton
            href="/contact?topic=demo"
            size="sm"
            variant="white"
            className="relative mt-6"
            onClick={() => trackEvent("demo_requested", { source: "connections" })}
          >
            {t.common.bookDemo}
          </GcButton>
        </Reveal>

        {/* GridAI insights */}
        <Reveal className="relative grid items-center gap-6 overflow-hidden rounded-[20px] bg-gc-canvas p-6 md:col-span-2 md:p-8 lg:col-start-2 lg:row-start-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(10,91,207,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,91,207,0.06) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              maskImage: "radial-gradient(ellipse 50% 70% at 0% 0%, black, transparent)",
              WebkitMaskImage: "radial-gradient(ellipse 50% 70% at 0% 0%, black, transparent)",
            }}
          />
          <div className="relative">
            <h3 className="text-gc-h3 text-gc-ink">{L(C.insights.title)}</h3>
            <p className="mt-3 text-gc-small text-gc-ink-60">{L(C.insights.body)}</p>
          </div>
          <div aria-hidden className="relative rounded-2xl bg-white p-4 shadow-gc-float ring-1 ring-gc-line md:p-5">
            <div className="flex flex-wrap gap-1.5 text-[0.6875rem] font-medium text-gc-ink-70">
              <span className="rounded-md bg-gc-canvas px-2 py-0.5">{L(C.insights.tagReport)}</span>
              <span className="inline-flex items-center gap-1 rounded-md bg-gc-canvas px-2 py-0.5">
                <Sparkles className="size-3 text-gc-royal" /> {L(C.insights.tagWeek)}
              </span>
            </div>
            <p className="mt-3 text-[1.0625rem] font-bold text-gc-ink">{L(C.insights.cardTitle)}</p>
            <p className="mt-1 text-[0.75rem] leading-snug text-gc-ink-60">{L(C.insights.cardBody)}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-gc-canvas p-2.5">
                <p className="text-[0.6875rem] font-medium text-gc-ink-70">{L(C.insights.topSellers)}</p>
                <div className="mt-2 flex -space-x-2">
                  {MERCHANTS.slice(0, 4).map((m) => (
                    <Image key={m} src={`/merchants/${m}.webp`} alt="" width={56} height={56} className="size-7 rounded-full object-cover ring-2 ring-white" />
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-gc-canvas p-2.5">
                <p className="text-[0.6875rem] font-medium text-gc-ink-70">{L(C.insights.delivered)}</p>
                <div className="mt-2.5 h-4 rounded-full bg-white p-0.5 ring-1 ring-gc-royal-20">
                  <div className="flex h-full w-[86%] items-center rounded-full bg-gc-royal px-1.5 text-[0.5625rem] font-bold text-white">{n(86)}%</div>
                </div>
              </div>
            </div>
            <p className="mt-3 rounded-full bg-gc-ink py-2 text-center text-[0.75rem] font-semibold text-white">{L(C.insights.action)}</p>
          </div>
        </Reveal>

        {/* Trusted */}
        <Reveal className="flex items-center justify-between gap-4 rounded-[20px] bg-gc-canvas px-6 py-6 lg:col-start-1 lg:row-start-2">
          <p className="max-w-[13rem] text-[1.1875rem] font-semibold leading-snug text-gc-ink">{L(C.trusted.title)}</p>
          <div aria-hidden className="flex shrink-0 -space-x-3">
            {MERCHANTS.slice(0, 3).map((m) => (
              <Image key={m} src={`/merchants/${m}.webp`} alt="" width={96} height={96} className="size-12 rounded-full object-cover ring-[3px] ring-gc-canvas" />
            ))}
          </div>
        </Reveal>

        {/* Server-side tracking */}
        <Reveal className="relative flex min-h-[360px] flex-col items-center justify-end overflow-hidden rounded-[20px] bg-gc-canvas px-6 pb-8 pt-10 text-center md:row-span-2 lg:col-start-2 lg:row-start-2">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 flex h-[46%] flex-wrap content-start gap-x-4 gap-y-2 p-4 font-mono text-[0.6875rem] text-gc-ink-50/60"
            style={{ maskImage: "linear-gradient(to bottom, black 20%, transparent 95%)", WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 95%)" }}
          >
            {Array.from({ length: 4 }).flatMap((_, r) => EVENTS.map((e, i) => <span key={`${r}-${i}`}>{e}</span>))}
          </div>
          <span className="relative mb-auto mt-6 grid size-16 place-items-center rounded-full bg-gc-royal text-white shadow-[0_14px_30px_-12px_rgba(10,91,207,0.8)]">
            <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-gc-royal/30 motion-reduce:animate-none" />
            <Radar aria-hidden className="relative size-7" />
          </span>
          <h3 className="relative mt-8 text-gc-h3 text-gc-ink">{L(C.tracking.title)}</h3>
          <p className="relative mt-3 max-w-[22rem] text-gc-small text-gc-ink-60">{L(C.tracking.body)}</p>
          <Link
            href="/features/analytics"
            className="relative mt-6 inline-flex items-center gap-1.5 rounded-[12px] bg-gc-ink px-5 py-2.5 text-[0.8125rem] font-semibold text-white transition-colors hover:bg-gc-royal"
          >
            {L(C.tracking.cta)}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </Reveal>

        {/* Mobile payments */}
        <Reveal className="flex flex-col items-center justify-center rounded-[20px] bg-gc-canvas px-6 py-6 text-center lg:col-start-3 lg:row-span-2 lg:row-start-2">
          <div aria-hidden className="w-full max-w-[15rem] rounded-2xl bg-white p-3 shadow-gc-float ring-1 ring-gc-line">
            <div className="flex items-center justify-center gap-3">
              <Image src="/integrations/bkash.png" alt="" width={128} height={81} className="h-8 w-auto" />
              <Image src="/integrations/nagad.png" alt="" width={160} height={56} className="h-7 w-auto" />
            </div>
            <div className="mt-2.5 flex items-center justify-between rounded-lg bg-gc-success-10 px-2.5 py-1.5 text-[0.6875rem]">
              <span className="font-semibold tabular-nums text-gc-ink">#GC-1042 · {n(2450, { money: true })}</span>
              <span className="inline-flex items-center gap-1 font-semibold text-gc-success">
                <CircleCheck className="size-3" /> {L(C.payments.received)}
              </span>
            </div>
          </div>
          <h3 className="mt-4 text-[1.125rem] font-semibold text-gc-ink">{L(C.payments.title)}</h3>
          <p className="mt-1.5 text-gc-small text-gc-ink-60">{L(C.payments.body)}</p>
        </Reveal>

        {/* Alerts */}
        <Reveal className="flex flex-col items-center justify-center rounded-[20px] bg-gc-canvas px-6 py-6 text-center lg:col-start-1 lg:row-start-3">
          <span className="grid size-12 place-items-center rounded-full bg-gc-royal text-white">
            <BellRing aria-hidden className="size-5 motion-safe:animate-[gc-ring_2.4s_ease-in-out_infinite]" />
          </span>
          <h3 className="mt-4 text-[1.125rem] font-semibold text-gc-ink">{L(C.alerts.title)}</h3>
          <p className="mt-1.5 text-gc-small text-gc-ink-60">{L(C.alerts.body)}</p>
        </Reveal>
      </div>
    </Panel>
  );
}
