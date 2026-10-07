"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  CircleCheck,
  Copy,
  Link2,
  Radio,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Truck,
  WandSparkles,
} from "lucide-react";
import { LANDING_BUILDER } from "@/data/copy/showcase";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Panel } from "../../primitives";
import { ChannelLogo, Counter, TypingDots } from "../hero/shared";
import { DemoStamp, IconChip, SectionIntro } from "./kit";

const STEP_MS = 4600;
const SUB_CUES = [250, 900, 1550, 2200, 2850];
const PAGE_URL = "yourshop.gridcommerce.com.bd/p/redmi-note-13";

/**
 * Four steps from product to sale. The steps on the left are buttons; the
 * page on the right shows the active one. It advances on its own while on
 * screen (each step's bar shows how long it has left) and stops off screen.
 * Reduced motion shows each step finished and never advances by itself.
 */
export function LandingBuilder() {
  const { L, t } = useI18n();
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [sub, setSub] = useState(0);
  const [onScreen, setOnScreen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { rootMargin: "-25% 0px -25% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || !onScreen) return;
    const timers = SUB_CUES.map((c, i) => window.setTimeout(() => setSub(i + 1), c));
    timers.push(window.setTimeout(() => {
      setSub(0);
      setStep((s) => (s + 1) % 4);
    }, STEP_MS));
    return () => timers.forEach((tm) => window.clearTimeout(tm));
  }, [step, onScreen, reduced]);

  const choose = useCallback((i: number) => {
    setSub(0);
    setStep(i);
  }, []);

  const s = reduced ? SUB_CUES.length : sub;

  return (
    <Panel
      tone="white"
      pattern={null}
      background={<div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gc-accent-10" />}
    >
      <SectionIntro
        lead={L(LANDING_BUILDER.lead)}
        chip={<IconChip icon={WandSparkles} tone="accent" tilt={-8} />}
        tail={L(LANDING_BUILDER.tail)}
        body={L(LANDING_BUILDER.body)}
      />

      <div ref={rootRef} className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] lg:gap-10">
        {/* Steps */}
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 lg:content-center">
          {LANDING_BUILDER.steps.map((st, i) => {
            const active = i === step;
            const done = i < step;
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => choose(i)}
                  aria-pressed={active}
                  className={cn(
                    "relative w-full overflow-hidden rounded-2xl p-4 text-left transition-[background-color,box-shadow] duration-300",
                    active ? "bg-white shadow-gc-float ring-1 ring-gc-line" : "hover:bg-white/70",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-full text-[0.8125rem] font-bold tabular-nums transition-colors duration-300",
                        active ? "bg-gc-accent text-white" : done ? "bg-gc-ink text-white" : "bg-gc-canvas text-gc-ink-50",
                      )}
                    >
                      {done ? <CircleCheck className="size-4" /> : `0${i + 1}`}
                    </span>
                    <span className={cn("font-gc-display text-[1.0625rem] font-bold", active ? "text-gc-ink" : "text-gc-ink-60")}>
                      {L(st.title)}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300",
                      active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 lg:grid-rows-[0fr]",
                    )}
                  >
                    <span className="overflow-hidden">
                      <span className="block pl-12 pt-1 text-gc-small text-gc-ink-60">{L(st.body)}</span>
                    </span>
                  </span>
                  {active && !reduced && onScreen && (
                    <motion.span
                      key={step}
                      aria-hidden
                      className="absolute inset-x-4 bottom-0 h-[3px] origin-left rounded-full bg-gc-accent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: STEP_MS / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ol>

        {/* Stage */}
        <div className="relative">
          <div className="overflow-hidden rounded-[22px] bg-white shadow-gc-screen ring-1 ring-gc-line">
            <div className="flex h-10 items-center gap-3 border-b border-gc-line bg-[#F8FAFC] px-4">
              <div className="flex gap-1.5" aria-hidden>
                <span className="size-[10px] rounded-full bg-[#FF5F57]" />
                <span className="size-[10px] rounded-full bg-[#FEBC2E]" />
                <span className="size-[10px] rounded-full bg-[#28C840]" />
              </div>
              <div className="mx-auto flex h-6 min-w-0 items-center gap-1.5 truncate rounded-md bg-white px-3 text-[0.6875rem] font-medium text-gc-ink-50 ring-1 ring-gc-line">
                <ShieldCheck className="size-3 shrink-0 text-[#047857]" />
                <span className="truncate">{step >= 2 ? PAGE_URL : "GridAI page builder · draft"}</span>
              </div>
              <DemoStamp label={t.common.demoData} />
            </div>

            <div className="relative h-[32rem] overflow-hidden bg-gc-canvas sm:h-[31rem]">
              <LandingPage step={step} sub={s} />

              <AnimatePresence>
                {step === 1 && <TrackingPanel key="track" sub={s} />}
                {step === 2 && <LinkCard key="link" sub={s} />}
                {step === 3 && <SaleStack key="sale" sub={s} />}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}

/** The landing page itself, building piece by piece in step 1. */
function LandingPage({ step, sub }: { step: number; sub: number }) {
  const reduced = useReducedMotion();
  const built = step > 0 ? 5 : sub;
  const piece = (n: number) => ({
    initial: false as const,
    animate: { opacity: built >= n ? 1 : 0, y: built >= n ? 0 : 10, filter: built >= n ? "blur(0px)" : "blur(4px)" },
    transition: { duration: reduced ? 0 : 0.45, ease: EASE.outQuart },
  });

  return (
    <div className={cn("absolute inset-0 p-4 transition-[filter,opacity] duration-500 sm:p-5", step > 0 && "opacity-90")}>
      {step === 0 && (
        <div className="mb-3 flex items-start gap-2 rounded-2xl bg-white p-3 ring-1 ring-gc-line">
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#F1ECFE] text-[#6D3FD9]">
            <Sparkles className="size-3.5" />
          </span>
          <p className="text-[0.8125rem] text-gc-ink">
            Redmi Note 13 8/256 · ৳23,999 · 1 year official warranty · free delivery in Dhaka
            {sub < 5 && (
              <span className="ml-2 inline-flex text-[#6D3FD9]">
                <TypingDots />
              </span>
            )}
          </p>
        </div>
      )}

      <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-gc-line">
        <motion.div {...piece(1)} className="relative flex h-28 items-center justify-center bg-gradient-to-br from-gc-royal via-gc-royal to-gc-sky sm:h-32">
          <span className="absolute left-4 top-3 rounded-full bg-white/15 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-white">
            Eid offer
          </span>
          <span className="grid size-20 place-items-center rounded-[22px] bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
            <Smartphone className="size-10" strokeWidth={1.5} />
          </span>
        </motion.div>
        <div className="p-4">
          <motion.p {...piece(2)} className="font-gc-display text-[1.25rem] font-extrabold leading-tight text-gc-ink">
            Redmi Note 13, 8/256 with official warranty
          </motion.p>
          <motion.div {...piece(3)} className="mt-2 flex items-center justify-between gap-3">
            <p className="text-[1.125rem] font-bold text-gc-ink">
              ৳23,999 <span className="text-[0.8125rem] font-medium text-gc-ink-50 line-through">৳26,500</span>
            </p>
            <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-gc-accent px-4 text-[0.8125rem] font-semibold text-white">
              <ShoppingBag className="size-4" /> Order now
            </span>
          </motion.div>
          <motion.ul {...piece(4)} className="mt-3 grid grid-cols-3 gap-2 text-[0.6875rem] text-gc-ink-60">
            {[
              [Truck, "Free delivery in Dhaka"],
              [BadgeCheck, "1 year warranty"],
              [ShieldCheck, "Cash on delivery"],
            ].map(([I, label]) => {
              const Ico = I as typeof Truck;
              return (
                <li key={label as string} className="flex items-center gap-1.5 rounded-lg bg-gc-canvas px-2 py-1.5">
                  <Ico className="size-3.5 shrink-0 text-gc-royal" /> {label as string}
                </li>
              );
            })}
          </motion.ul>
          {/* The cash-on-delivery order form most Bangladeshi landing pages end with. */}
          <motion.div {...piece(5)} className="mt-3 rounded-xl bg-gc-canvas p-3">
            <p className="text-[0.75rem] font-semibold text-gc-ink">Order with cash on delivery</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {["Your name", "Phone number"].map((f) => (
                <span key={f} className="rounded-lg bg-white px-2.5 py-1.5 text-[0.6875rem] text-gc-ink-50 ring-1 ring-gc-line">
                  {f}
                </span>
              ))}
              <span className="col-span-2 rounded-lg bg-white px-2.5 py-1.5 text-[0.6875rem] text-gc-ink-50 ring-1 ring-gc-line">
                Full delivery address
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const overlay = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.98 },
  transition: { duration: 0.4, ease: EASE.outQuart },
};

function TrackingPanel({ sub }: { sub: number }) {
  const rows = [
    { name: "Meta Pixel", detail: "ID 4829 •••• 1104" },
    { name: "Conversions API", detail: "Server events on" },
    { name: "TikTok Pixel", detail: "ID C8K2 •••• 77QA" },
  ];
  const events = ["PageView", "ViewContent", "AddToCart", "Purchase"];
  return (
    <motion.div {...overlay} className="absolute inset-x-3 bottom-3 rounded-2xl bg-white p-4 shadow-gc-float ring-1 ring-gc-line sm:inset-x-auto sm:right-4 sm:top-4 sm:bottom-auto sm:w-[19rem]">
      <p className="flex items-center gap-2 text-[0.875rem] font-semibold text-gc-ink">
        <Radio className="size-4 text-gc-accent" /> Tracking
      </p>
      <ul className="mt-3 space-y-2">
        {rows.map((r, i) => (
          <li key={r.name} className="flex items-center justify-between gap-3 rounded-xl bg-gc-canvas px-3 py-2">
            <div>
              <p className="flex items-center gap-1.5 text-[0.8125rem] font-semibold text-gc-ink">
                {i === 2 ? <ChannelLogo channel="tiktok" size={13} /> : <ChannelLogo channel="facebook" size={13} />}
                {r.name}
              </p>
              <p className="text-[0.6875rem] text-gc-ink-50">{r.detail}</p>
            </div>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[0.6875rem] font-semibold transition-colors duration-300",
                sub > i ? "bg-[#ECFDF5] text-[#047857]" : "bg-white text-gc-ink-50 ring-1 ring-gc-line",
              )}
            >
              {sub > i ? "Connected" : "Connecting…"}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {events.map((e) => (
          <span
            key={e}
            className={cn(
              "rounded-full px-2 py-0.5 text-[0.6875rem] font-medium transition-colors duration-300",
              sub >= 4 ? "bg-gc-royal-10 text-gc-royal" : "bg-gc-canvas text-gc-ink-50",
            )}
          >
            {e}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function LinkCard({ sub }: { sub: number }) {
  const copied = sub >= 2;
  return (
    <motion.div {...overlay} className="absolute inset-x-3 top-1/2 -translate-y-1/2 sm:inset-x-10">
      <div className="rounded-2xl bg-white p-5 shadow-gc-float ring-1 ring-gc-line">
        <p className="flex items-center gap-2 text-[0.9375rem] font-bold text-gc-ink">
          <CircleCheck className="size-5 text-[#047857]" /> Your page is live
        </p>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-gc-canvas p-1.5 pl-3 ring-1 ring-gc-line">
          <Link2 className="size-4 shrink-0 text-gc-ink-50" />
          <span className="min-w-0 flex-1 truncate text-[0.8125rem] font-medium text-gc-ink">{PAGE_URL}</span>
          <span
            className={cn(
              "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg px-3 text-[0.75rem] font-semibold transition-colors duration-300",
              copied ? "bg-[#ECFDF5] text-[#047857]" : "bg-gc-ink text-white",
            )}
          >
            {copied ? <CircleCheck className="size-3.5" /> : <Copy className="size-3.5" />}
            {copied ? "Copied" : "Copy"}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[0.75rem] text-gc-ink-60">
          Share to
          {(["facebook", "messenger", "whatsapp", "instagram"] as const).map((c, i) => (
            <span
              key={c}
              className={cn(
                "grid size-8 place-items-center rounded-full bg-white ring-1 transition-[box-shadow] duration-300",
                sub >= 3 && i === 0 ? "ring-2 ring-gc-accent" : "ring-gc-line",
              )}
            >
              <ChannelLogo channel={c} size={16} />
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SaleStack({ sub }: { sub: number }) {
  return (
    <motion.div {...overlay} className="absolute inset-x-3 top-3 space-y-2 sm:left-auto sm:right-4 sm:w-[21rem]">
      <Toast show={sub >= 1} icon={<ShoppingBag className="size-4" />} tone="bg-gc-accent text-white" title="New order #GC-10533 · ৳23,999" meta="From your landing page · COD · Mirpur" />
      <Toast show={sub >= 2} icon={<ChannelLogo channel="facebook" size={16} />} tone="bg-white ring-1 ring-gc-line" title="Purchase sent to Meta" meta="Pixel and Conversions API matched · deduplicated" />
      <motion.div
        initial={false}
        animate={{ opacity: sub >= 3 ? 1 : 0, y: sub >= 3 ? 0 : 8 }}
        className="grid grid-cols-3 gap-2 rounded-2xl bg-gc-ink p-3 text-white"
      >
        <Stat label="Visits" value={sub >= 3 ? 1240 : 0} />
        <Stat label="Orders" value={sub >= 3 ? 38 : 0} />
        <Stat label="Revenue" value={sub >= 3 ? 911962 : 0} prefix="৳" />
      </motion.div>
    </motion.div>
  );
}

function Toast({ show, icon, tone, title, meta }: { show: boolean; icon: React.ReactNode; tone: string; title: string; meta: string }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: show ? 1 : 0, x: show ? 0 : 24 }}
      transition={{ duration: 0.4, ease: EASE.outQuart }}
      className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-gc-float ring-1 ring-gc-line"
    >
      <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl", tone)}>{icon}</span>
      <div className="min-w-0">
        <p className="truncate text-[0.8125rem] font-semibold text-gc-ink">{title}</p>
        <p className="truncate text-[0.6875rem] text-gc-ink-50">{meta}</p>
      </div>
    </motion.div>
  );
}

function Stat({ label, value, prefix }: { label: string; value: number; prefix?: string }) {
  return (
    <div>
      <p className="text-[0.6875rem] text-white/60">{label}</p>
      <p className="text-[0.9375rem] font-bold tabular-nums">
        <Counter value={value} prefix={prefix} />
      </p>
    </div>
  );
}
