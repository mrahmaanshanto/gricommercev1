"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  CircleCheck,
  Crown,
  Eye,
  MessageCircle,
  Package,
  Phone,
  ReceiptText,
  Send,
  ShoppingCart,
  Sparkles,
  Star,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { AppFrame, Appear, Avatar, Card, ChannelLogo, Chip, Counter, FloatPanel, type SlideProps } from "./shared";

/** Beats: 1 KPIs · 2–5 activity rows · 6 GridAI nudge · 7 offer sent. */
export const CUSTOMERS_CUES = [300, 1000, 1600, 2200, 2800, 3400, 4400, 6000];
export const CUSTOMERS_DURATION = 9000;

const ACTIVITY: { icon: LucideIcon; title: string; meta: string; when: string; channel?: "facebook" | "whatsapp" }[] = [
  { icon: Eye, title: "Looked at Redmi Note 13 (4th time)", meta: "Stayed 3 min · came from a Facebook post", when: "Today, 11:20 AM", channel: "facebook" },
  { icon: ShoppingCart, title: "Left 3 items in the cart", meta: "Anker 20W Charger, Ring Holder, Tempered Glass · ৳3,240", when: "Today, 10:45 AM" },
  { icon: MessageCircle, title: "Cart reminder sent on WhatsApp", meta: "Reminder 1 · no discount · opened", when: "Today, 11:45 AM", channel: "whatsapp" },
  { icon: Package, title: "Order #GC-10471 delivered", meta: "৳4,860 · paid by bKash · 180 points earned", when: "12 Sep 2026" },
];

const SPEND = [38, 52, 30, 64, 48, 72, 90];

export function CustomersSlide({ beat, compact, narrow }: SlideProps) {
  const reduced = useReducedMotion();

  const kpis = [
    { icon: ReceiptText, label: "Lifetime value", value: <Counter value={beat >= 1 ? 58200 : 0} prefix="৳" />, sub: "since 2 Mar 2026" },
    { icon: Package, label: "Orders", value: <Counter value={beat >= 1 ? 14 : 0} />, sub: "1 returned" },
    { icon: TrendingUp, label: "Average order", value: <Counter value={beat >= 1 ? 4157 : 0} prefix="৳" />, sub: "+12% vs last quarter" },
    { icon: Star, label: "Loyalty points", value: <Counter value={beat >= 1 ? 1845 : 0} />, sub: "Gold tier" },
  ];

  const screen = (
    <AppFrame path="customers/C-10482" active="customers" compact={compact} className="absolute inset-0">
      <div className="flex h-full flex-col gap-3 p-5">
        {/* Record header */}
        <div className="flex items-start gap-3">
          <ArrowLeft className="mt-1.5 size-4 text-gc-ink-50" />
          <Avatar name="Nusrat Jahan" size={40} tone={1} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[20px] font-semibold leading-tight text-gc-ink">Nusrat Jahan</span>
              <Chip tone="gold">
                <Crown className="size-3" /> Gold
              </Chip>
              <Chip tone="success">Active</Chip>
            </div>
            <p className="mt-0.5 truncate text-[12px] text-gc-ink-50">
              C-10482 · Customer since 2 Mar 2026 · Mirpur 10, Dhaka
            </p>
          </div>
          {!compact && (
            <div className="flex gap-2">
              <span className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-white px-3 text-[12.5px] font-medium text-gc-ink ring-1 ring-gc-line">
                <Phone className="size-3.5" /> Call
              </span>
              <span className="inline-flex h-8 items-center rounded-lg bg-gc-royal px-3 text-[12.5px] font-medium text-white">
                Message
              </span>
            </div>
          )}
        </div>

        {/* Key figures */}
        <div className={cn("grid gap-3", compact ? "grid-cols-2" : "grid-cols-4")}>
          {kpis.map(({ icon: Icon, label, value, sub }, i) => (
            <Appear key={label} show={beat >= 1} delay={i * 0.06}>
              <Card className="flex items-center gap-3 p-3">
                <span className="grid size-9 place-items-center rounded-lg bg-gc-royal-10 text-gc-royal">
                  <Icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11.5px] text-gc-ink-50">{label}</p>
                  <p className="text-[16px] font-semibold leading-tight text-gc-ink">{value}</p>
                  <p className="truncate text-[10.5px] text-gc-ink-50">{sub}</p>
                </div>
              </Card>
            </Appear>
          ))}
        </div>

        <div className={cn("grid min-h-0 flex-1 gap-3", compact ? "grid-cols-1" : narrow ? "grid-cols-[minmax(0,1fr)_220px]" : "grid-cols-[minmax(0,1fr)_290px]")}>
          {/* Activity timeline */}
          <Card className="min-h-0 overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#EEF0F4] px-4 py-2.5">
              <div className="flex gap-1">
                <span className="rounded-md bg-gc-royal-10 px-2 py-1 text-[12px] font-semibold text-gc-royal">Everything she did</span>
                <span className="px-2 py-1 text-[12px] text-gc-ink-50">Orders 14</span>
                <span className="px-2 py-1 text-[12px] text-gc-ink-50">Messages</span>
              </div>
              <span className="text-[12px] font-medium text-gc-royal">View all</span>
            </div>
            <ul>
              {ACTIVITY.map(({ icon: Icon, title, meta, when, channel }, i) => (
                <li key={title}>
                  <Appear show={beat >= 2 + Math.min(i, 3)} from="left" className="flex items-start gap-3 border-b border-[#F1F3F7] px-4 py-2.5">
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[#F1F3F7] text-gc-ink-60">
                      <Icon className="size-3.5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-1.5 text-[13px] font-medium text-gc-ink">
                        {title}
                        {channel && <ChannelLogo channel={channel} size={13} />}
                      </p>
                      <p className="truncate text-[11.5px] text-gc-ink-50">{meta}</p>
                    </div>
                    <span className="shrink-0 text-[11.5px] text-gc-ink-50">{when}</span>
                  </Appear>
                </li>
              ))}
            </ul>
          </Card>

          {!compact && (
            <div className="flex min-h-0 flex-col gap-3">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-semibold text-gc-ink">Spend by month</p>
                  <Chip tone="success">
                    <TrendingUp className="size-3" /> 18%
                  </Chip>
                </div>
                <div className="mt-3 flex h-[86px] items-end gap-2">
                  {SPEND.map((h, i) => (
                    <motion.span
                      key={i}
                      className={cn("flex-1 origin-bottom rounded-t-[5px]", i === SPEND.length - 1 ? "bg-gc-royal" : "bg-gc-royal-20")}
                      style={{ height: `${h}%` }}
                      initial={false}
                      animate={{ scaleY: beat >= 1 ? 1 : 0.05 }}
                      transition={reduced ? { duration: 0 } : { duration: 0.7, ease: EASE.outQuart, delay: i * 0.05 }}
                    />
                  ))}
                </div>
                <div className="mt-1.5 flex justify-between text-[10px] text-gc-ink-30">
                  {["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-semibold text-gc-ink">VIP likelihood</p>
                  <Chip tone={beat >= 7 ? "success" : "warning"}>{beat >= 7 ? "High" : "Medium"}</Chip>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#EEF0F4]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-gc-sky to-gc-royal"
                    initial={false}
                    animate={{ width: beat >= 7 ? "82%" : beat >= 1 ? "58%" : "0%" }}
                    transition={reduced ? { duration: 0 } : { duration: 0.9, ease: EASE.outQuart }}
                  />
                </div>
                <p className="mt-2 text-[11.5px] text-gc-ink-50">14 orders, ৳58,200 spent, 7% returned.</p>
              </Card>

              <Card className="p-4">
                <p className="text-[13px] font-semibold text-gc-ink">Good to know</p>
                <dl className="mt-2 space-y-1.5 text-[12px]">
                  <div className="flex justify-between">
                    <dt className="text-gc-ink-50">Likes messages by</dt>
                    <dd className="flex items-center gap-1 font-medium text-gc-ink">
                      <ChannelLogo channel="whatsapp" size={12} /> WhatsApp
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gc-ink-50">Next order</dt>
                    <dd className="font-medium text-gc-ink">7 – 14 Oct</dd>
                  </div>
                </dl>
              </Card>
            </div>
          )}
        </div>
      </div>
    </AppFrame>
  );

  return (
    <div className="absolute inset-0">
      <div className={cn("absolute", compact ? "inset-x-0 top-0 bottom-[150px]" : narrow ? "inset-y-0 left-[28px] right-[28px]" : "inset-y-0 left-[64px] right-[64px]")}>{screen}</div>

      {/* GridAI nudge */}
      <Appear
        show={beat >= 6}
        from="scale"
        className={cn("absolute", compact ? "inset-x-3 bottom-0" : narrow ? "right-0 top-[352px] w-[256px]" : "right-0 top-[372px] w-[300px]")}
      >
        <FloatPanel>
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-full bg-[#F1ECFE] text-[#6D3FD9]">
              <Sparkles className="size-3.5" />
            </span>
            <p className="text-[12px] font-semibold text-[#6D3FD9]">GridAI suggests</p>
          </div>
          <p className="mt-2 text-[13px] font-medium leading-snug text-gc-ink">
            Looked at Redmi Note 13 four times but didn’t buy.
          </p>
          <div className="mt-3 flex items-center justify-between gap-2">
            <span className="text-[11.5px] text-gc-ink-50">Offer on WhatsApp</span>
            {beat >= 7 ? (
              <Chip tone="success" className="py-1.5">
                <CircleCheck className="size-3.5" /> 10% off sent
              </Chip>
            ) : (
              <span className="inline-flex h-7 items-center gap-1.5 rounded-lg bg-gc-royal px-3 text-[12px] font-semibold text-white">
                <Send className="size-3" /> Send 10% off
              </span>
            )}
          </div>
        </FloatPanel>
      </Appear>

      {!compact && (
        <Appear show={beat >= 1} from="left" delay={0.25} className={cn("absolute left-0", narrow ? "bottom-[54px] w-[188px]" : "bottom-[48px] w-[210px]")}>
          <FloatPanel>
            <p className="text-[11.5px] text-gc-ink-50">Reached her on</p>
            <div className="mt-2 flex items-center gap-2">
              {(["facebook", "whatsapp", "instagram", "messenger"] as const).map((c) => (
                <span key={c} className="grid size-8 place-items-center rounded-full bg-[#F6F7FB] ring-1 ring-gc-line">
                  <ChannelLogo channel={c} size={16} />
                </span>
              ))}
            </div>
            <p className="mt-2 text-[12px] font-medium text-gc-ink">One profile, every channel</p>
          </FloatPanel>
        </Appear>
      )}
    </div>
  );
}
