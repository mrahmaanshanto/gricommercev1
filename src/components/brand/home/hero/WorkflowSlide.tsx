"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Banknote,
  Bot,
  CircleCheck,
  HandCoins,
  Landmark,
  MapPin,
  PackageCheck,
  PhoneCall,
  ShoppingBag,
  Truck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { HERO_SHOWCASE } from "@/data/copy/heroShowcase";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { AppFrame, Appear, Card, ChannelLogo, Chip, Counter, FloatPanel, Ping, formatBdt, type SlideProps } from "./shared";

/** One beat per step: order → AI call → confirmed → courier → delivered → COD → payout → bank. */
export const WORKFLOW_CUES = [300, 2200, 4300, 6100, 7900, 9700, 11500, 13300];
export const WORKFLOW_DURATION = 17000;

const STEP_ICONS: LucideIcon[] = [ShoppingBag, PhoneCall, CircleCheck, Truck, PackageCheck, HandCoins, Wallet, Landmark];
const STATUS: { label: string; tone: "warning" | "royal" | "success" }[] = [
  { label: "New", tone: "warning" },
  { label: "Verifying", tone: "warning" },
  { label: "Confirmed", tone: "royal" },
  { label: "Sent to courier", tone: "royal" },
  { label: "Delivered", tone: "success" },
  { label: "Delivered · COD due", tone: "success" },
  { label: "Paid", tone: "success" },
  { label: "Completed", tone: "success" },
];

const TIMES = ["1:24 PM", "1:25 PM", "1:26 PM", "5:02 PM", "Thu, 2:10 PM", "Thu, 2:10 PM", "Sat, 11:00 AM", "Sat, 11:01 AM"];

const BANK_BEFORE = 241300;
const PAYOUT = 4740;

const LEDGER: { at: number; label: string; amount: string; tone?: "in" | "out" }[] = [
  { at: 1, label: "Sale recorded · receivable", amount: "৳4,860" },
  { at: 4, label: "Courier charge", amount: "−৳120", tone: "out" },
  { at: 6, label: "COD held by courier", amount: "৳4,860" },
  { at: 7, label: "Payout matched to order", amount: "৳4,740" },
  { at: 8, label: "Deposited to bank ••4521", amount: "+৳4,740", tone: "in" },
];

export function WorkflowSlide({ beat, compact, narrow }: SlideProps) {
  const { L } = useI18n();
  const reduced = useReducedMotion();
  const current = Math.max(0, Math.min(7, beat - 1));
  const status = STATUS[current];
  const steps = HERO_SHOWCASE.workflowSteps;

  const screen = (
    <AppFrame path="orders/GC-10512" active="orders" compact={compact} className="absolute inset-0">
      <div className="flex h-full flex-col gap-3 p-5">
        {/* Record header */}
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[20px] font-semibold text-gc-ink">#GC-10512</span>
              <Chip tone={status.tone}>{status.label}</Chip>
              <Chip tone={beat >= 7 ? "success" : "danger"}>{beat >= 7 ? "Paid" : "Unpaid"}</Chip>
            </div>
            <p className="mt-0.5 flex items-center gap-1.5 text-[12px] text-gc-ink-50">
              <ChannelLogo channel="web" size={12} /> Online store · Nusrat Jahan · ৳4,860 · Cash on delivery
            </p>
          </div>
          {!compact && (
            <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-[#F1ECFE] px-3 text-[12px] font-semibold text-[#6D3FD9]">
              <Bot className="size-3.5" /> Automation on
            </span>
          )}
        </div>

        {/* Stepper */}
        <Card className={cn("px-4", compact ? "py-3" : "py-4")}>
          {compact ? (
            <div>
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-semibold text-gc-ink">{L(steps[current])}</span>
                <span className="text-gc-ink-50">Step {current + 1} of 8</span>
              </div>
              <div className="mt-2 grid grid-cols-8 gap-1">
                {steps.map((_, i) => (
                  <span key={i} className={cn("h-1.5 rounded-full transition-colors duration-500", i <= current && beat > 0 ? "bg-gc-royal" : "bg-[#E5E8EE]")} />
                ))}
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute left-[calc(100%/16)] right-[calc(100%/16)] top-[17px] h-[3px] rounded-full bg-[#E5E8EE]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-gc-sky to-gc-royal"
                  initial={false}
                  animate={{ width: `${(current / 7) * 100}%` }}
                  transition={reduced ? { duration: 0 } : { duration: 0.8, ease: EASE.outQuart }}
                />
              </div>
              <ol className="relative grid grid-cols-8">
                {steps.map((step, i) => {
                  const Icon = STEP_ICONS[i];
                  const finished = beat >= steps.length;
                  const done = beat > 0 && (i < current || finished);
                  const now = beat > 0 && i === current && !finished;
                  return (
                    <li key={i} className="flex flex-col items-center gap-1.5 text-center">
                      <span
                        className={cn(
                          "relative grid size-9 place-items-center rounded-full ring-4 ring-white transition-colors duration-500",
                          done ? "bg-gc-royal text-white" : now ? "bg-white text-gc-royal ring-gc-royal-20" : "bg-[#F1F3F7] text-gc-ink-30",
                        )}
                      >
                        {now && (
                          <span className="absolute inset-[-5px] animate-ping rounded-full border-2 border-gc-royal/40 motion-reduce:hidden" />
                        )}
                        <span className={cn("absolute inset-0 rounded-full", now && "border-2 border-gc-royal")} />
                        <Icon className="size-4" strokeWidth={2} />
                      </span>
                      <span className={cn("max-w-[100px] text-[11px] leading-tight", done || now ? "font-semibold text-gc-ink" : "text-gc-ink-50")}>
                        {L(step)}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          )}
        </Card>

        <div className={cn("grid min-h-0 flex-1 gap-3", compact ? "grid-cols-1 grid-rows-[minmax(0,1fr)_auto]" : narrow ? "grid-cols-[minmax(0,1fr)_236px]" : "grid-cols-[minmax(0,1fr)_300px]")}>
          {/* What is happening now */}
          <Card className="relative flex min-h-0 flex-col overflow-hidden">
            <div className="min-h-0 flex-1 p-5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current}
                  initial={reduced ? false : { opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reduced ? undefined : { opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: EASE.outQuart }}
                >
                  <StepDetail step={current} beat={beat} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* What already happened, newest first */}
            {!compact && (
              <div className="border-t border-[#EEF0F4] bg-[#FBFCFE] px-5 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gc-ink-50">Order timeline</p>
                <ul className="mt-1.5 h-[84px] overflow-hidden">
                  <AnimatePresence initial={false}>
                    {steps
                      .map((step, i) => ({ step, i }))
                      .filter(({ i }) => beat > 0 && i <= current)
                      .reverse()
                      .slice(0, 3)
                      .map(({ step, i }) => (
                        <motion.li
                          key={i}
                          layout={!reduced}
                          initial={reduced ? false : { opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE.outQuart }}
                          className="flex h-7 items-center gap-2 text-[12px]"
                        >
                          <CircleCheck className={cn("size-3.5", i === current ? "text-gc-royal" : "text-[#047857]")} />
                          <span className="font-medium text-gc-ink">{L(step)}</span>
                          <span className="text-gc-ink-50">· {TIMES[i]}</span>
                          <Chip tone={i === 0 ? "neutral" : "ai"} className="ml-auto px-1.5 py-[2px] text-[10px]">
                            {i === 0 ? "Customer" : "Automatic"}
                          </Chip>
                        </motion.li>
                      ))}
                  </AnimatePresence>
                </ul>
              </div>
            )}
          </Card>

          {/* Money trail */}
          <Card className="flex flex-col p-4">
            <p className={cn("text-[13px] font-semibold text-gc-ink", compact && "hidden")}>Money trail</p>
            <ul className={cn("mt-2 flex-1 space-y-0.5", compact && "hidden")}>
              {LEDGER.map((row) => (
                <li key={row.label}>
                  <Appear show={beat >= row.at} from="right" className="flex items-center justify-between border-b border-[#F1F3F7] py-2 text-[12px]">
                    <span className="text-gc-ink-60">{row.label}</span>
                    <span
                      className={cn(
                        "font-semibold tabular-nums",
                        row.tone === "in" ? "text-[#047857]" : row.tone === "out" ? "text-[#B91C1C]" : "text-gc-ink",
                      )}
                    >
                      {row.amount}
                    </span>
                  </Appear>
                </li>
              ))}
            </ul>
            <div className={cn("rounded-[10px] p-3 transition-colors duration-500", !compact && "mt-2", beat >= 8 ? "bg-[#ECFDF5]" : "bg-[#F6F7FB]")}>
              <p className="flex items-center gap-1.5 text-[11.5px] text-gc-ink-50">
                <Landmark className="size-3.5" /> Cash in bank
              </p>
              <p className="mt-0.5 text-[22px] font-semibold leading-tight text-gc-ink">
                <Counter value={beat >= 8 ? BANK_BEFORE + PAYOUT : BANK_BEFORE} prefix="৳" duration={1.4} />
              </p>
              <p className={cn("text-[11.5px] font-medium", beat >= 8 ? "text-[#047857]" : "text-gc-ink-30")}>
                {beat >= 8 ? `+৳${formatBdt(PAYOUT)} from Steadfast payout` : "Waiting for courier payout"}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </AppFrame>
  );

  return (
    <div className="absolute inset-0">
      <div className={cn("absolute", compact ? "inset-0" : narrow ? "inset-y-0 left-[28px] right-[28px]" : "inset-y-0 left-[64px] right-[64px]")}>{screen}</div>

      {!compact && (
        <Appear show={beat >= 2 && beat < 4} from="right" className={cn("absolute right-0", narrow ? "top-[300px] w-[200px]" : "top-[330px] w-[230px]")}>
          <FloatPanel>
            <p className="flex items-center gap-2 text-[12px] font-semibold text-[#6D3FD9]">
              <span>
                <Ping />
              </span>
              GridAI voice call
            </p>
            <p className="mt-1 text-[12px] text-gc-ink-60">Confirms address, items and COD amount in Bangla.</p>
          </FloatPanel>
        </Appear>
      )}
    </div>
  );
}

/** The live panel for the step in progress. */
function StepDetail({ step, beat }: { step: number; beat: number }) {
  const reduced = useReducedMotion();

  switch (step) {
    case 0:
      return (
        <Detail icon={ShoppingBag} title="New order from your online store" sub="1:24 PM · Nusrat Jahan · Mirpur 10, Dhaka">
          <ul className="mt-3 divide-y divide-[#F1F3F7] text-[12.5px]">
            {[
              ["Anker 20W Charger", "× 1", "৳2,450"],
              ["Galaxy Buds FE case", "× 1", "৳1,290"],
              ["Tempered Glass", "× 2", "৳1,000"],
              ["Delivery inside Dhaka", "", "৳120"],
            ].map(([name, qty, amt]) => (
              <li key={name} className="flex justify-between py-1.5">
                <span className="text-gc-ink">
                  {name} <span className="text-gc-ink-50">{qty}</span>
                </span>
                <span className="font-medium tabular-nums text-gc-ink">{amt}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 flex justify-between text-[13px] font-semibold text-gc-ink">
            Total, cash on delivery <span>৳4,860</span>
          </p>
        </Detail>
      );
    case 1:
      return (
        <Detail icon={PhoneCall} tone="ai" title="GridAI is calling 01552-3X1-907" sub="Automatic confirmation call · 0:42">
          <div className="mt-3 flex h-10 items-center gap-[3px]" aria-hidden>
            {Array.from({ length: 42 }, (_, i) => (
              <motion.span
                key={i}
                className="w-[3px] rounded-full bg-[#8B5CF6]"
                style={{ height: 6 + ((i * 37) % 26) }}
                animate={reduced ? undefined : { scaleY: [0.35, 1, 0.5, 0.9, 0.35] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: (i % 7) * 0.08 }}
              />
            ))}
          </div>
          <div className="mt-2 space-y-1.5 text-[12.5px]">
            <p className="rounded-lg bg-[#F5F0FF] px-3 py-1.5 text-gc-ink">
              <span className="font-semibold text-[#6D3FD9]">GridAI:</span> Assalamualaikum! Apnar ৳4,860 er order ta ki confirm korbo?
            </p>
            <p className="rounded-lg bg-[#F6F7FB] px-3 py-1.5 text-gc-ink">
              <span className="font-semibold">Nusrat:</span> Ji, confirm. Kal bikel e dile bhalo hoy.
            </p>
          </div>
        </Detail>
      );
    case 2:
      return (
        <Detail icon={CircleCheck} tone="success" title="Confirmed on the call" sub="No one on your team had to dial">
          <Checklist items={["Address and phone verified", "Stock reserved at Mirpur warehouse", "Invoice sent on WhatsApp"]} />
        </Detail>
      );
    case 3:
      return (
        <Detail icon={Truck} title="Handed to Steadfast" sub="Consignment SF-88213450 · pickup booked for 5:00 PM">
          <div className="mt-4 flex items-center gap-3">
            <Image src="/integrations/steadfast.png" alt="Steadfast" width={96} height={20} className="h-5 w-auto" />
            <div className="relative h-1.5 flex-1 rounded-full bg-[#E5E8EE]">
              <motion.span
                className="absolute -top-[9px] grid size-6 place-items-center rounded-full bg-gc-royal text-white"
                initial={{ left: "0%" }}
                animate={{ left: reduced ? "70%" : ["0%", "70%"] }}
                transition={{ duration: 1.5, ease: EASE.inOutSoft }}
              >
                <Truck className="size-3.5" />
              </motion.span>
            </div>
            <MapPin className="size-4 text-gc-ink-50" />
          </div>
          <Checklist items={["Label printed", "Rider assigned"]} />
        </Detail>
      );
    case 4:
      return (
        <Detail icon={PackageCheck} tone="success" title="Delivered to Mirpur 10" sub="Next day, 2:10 PM · delivery code matched">
          <Checklist items={["Customer received 4 items", "Delivery status synced from Steadfast"]} />
        </Detail>
      );
    case 5:
      return (
        <Detail icon={HandCoins} title="Rider collected ৳4,860 cash" sub="Cash on delivery, now held by the courier">
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#FFFBEB] px-3 py-2 text-[12px] text-[#B45309]">
            <Banknote className="size-4" /> Tracked as courier due until the payout arrives
          </div>
        </Detail>
      );
    case 6:
      return (
        <Detail icon={Wallet} title="Steadfast payout received" sub="Payout PO-2291 · matched to this order automatically">
          <dl className="mt-3 space-y-1 text-[12.5px]">
            <Row k="COD collected" v="৳4,860" />
            <Row k="Courier charge" v="−৳120" />
            <Row k="Paid out" v="৳4,740" strong />
          </dl>
        </Detail>
      );
    default:
      return (
        <Detail icon={Landmark} tone="success" title="In your bank and your books" sub="Bank account ••4521 · ledger and dashboard updated">
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            {[
              ["Sales", "৳4,860"],
              ["Courier cost", "৳120"],
              ["Profit", "৳1,180"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg bg-[#F6F7FB] py-2">
                <p className="text-[11px] text-gc-ink-50">{k}</p>
                <p className="text-[14px] font-semibold text-gc-ink">{v}</p>
              </div>
            ))}
          </div>
          {beat >= 8 && <p className="mt-2 text-[11.5px] font-medium text-[#047857]">Nothing to enter by hand.</p>}
        </Detail>
      );
  }
}

function Detail({
  icon: Icon,
  title,
  sub,
  tone = "royal",
  children,
}: {
  icon: LucideIcon;
  title: string;
  sub: string;
  tone?: "royal" | "success" | "ai";
  children: React.ReactNode;
}) {
  const toneCls =
    tone === "success" ? "bg-[#ECFDF5] text-[#047857]" : tone === "ai" ? "bg-[#F1ECFE] text-[#6D3FD9]" : "bg-gc-royal-10 text-gc-royal";
  return (
    <div>
      <div className="flex items-start gap-3">
        <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl", toneCls)}>
          <Icon className="size-5" />
        </span>
        <div>
          <p className="text-[15px] font-semibold text-gc-ink">{title}</p>
          <p className="text-[12px] text-gc-ink-50">{sub}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5 text-[12.5px] text-gc-ink">
      {items.map((t, i) => (
        <li key={t}>
          <Appear show delay={0.15 + i * 0.12} className="flex items-center gap-2">
            <CircleCheck className="size-4 text-[#047857]" /> {t}
          </Appear>
        </li>
      ))}
    </ul>
  );
}

function Row({ k, v, strong }: { k: string; v: string; strong?: boolean }) {
  return (
    <div className={cn("flex justify-between", strong && "border-t border-[#EEF0F4] pt-1.5 font-semibold")}>
      <dt className="text-gc-ink-60">{k}</dt>
      <dd className="tabular-nums text-gc-ink">{v}</dd>
    </div>
  );
}
