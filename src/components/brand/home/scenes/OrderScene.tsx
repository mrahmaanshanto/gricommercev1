"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, Boxes, Hourglass, PhoneCall, Receipt, Truck, Wallet } from "lucide-react";
import { DEMO, ORDER_SCENE as S, SCENE_COMMON } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Avatar, ChannelLogo } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Bar, Packet, Scene, Show, Swap, Tag, Widget, Wire, type Step } from "./kit";

/**
 * Beats: 1 confirmed by call · 2 stock held · 3 courier booked · 4 delivered (payment pending) · 5 COD outstanding
 * · 6 payout arrives · 7 the deduction · 8 matched. The order card is on screen from the first frame.
 */
const CUES = [900, 2100, 3300, 4600, 5900, 7200, 8400, 9700];
const STEPS: Step[] = S.steps.map((text, i) => ({ at: i, text }));

/** One order followed to payment, with delivery and payment as two separate statuses. */
export function OrderScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} steps={STEPS} label={L(S.label)} h={460}>
      {(b) => {
        const delivered = b >= 4;
        const received = b >= 8;
        return (
          <>
            <Wire from={[280, 118]} to={[300, 84]} on={b >= 3} curve={8} />
            <Wire from={[420, 170]} to={[420, 206]} on={b >= 5} />
            <Wire from={[420, 262]} to={[420, 292]} on={b >= 6} />
            <Packet from={[280, 118]} to={[300, 84]} on={b === 3} />
            <Packet from={[420, 170]} to={[420, 206]} on={b === 5} color="var(--color-gc-warning)" />
            <Packet from={[420, 262]} to={[420, 292]} on={b === 6} color="var(--color-gc-success)" />

            {/* The order, with its two statuses */}
            <At x={18} y={24} w={262} z={10} order={1}>
              <Widget title={L(S.order)} icon={Receipt} focus={b <= 2 || b === 8}>
                <div className="flex items-center gap-2">
                  <Avatar name={DEMO.customer} size={28} tone={1} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold leading-tight">{DEMO.customer}</p>
                    <p className="flex items-center gap-1 text-[10.5px] text-gc-ink-60">
                      <ChannelLogo channel="messenger" size={10} /> {L(DEMO.area)}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2 rounded-xl bg-gc-canvas p-2">
                  <Image src="/merchants/merchant-electronics.webp" alt="" width={64} height={64} className="size-8 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1 text-[11px]">
                    <p className="font-semibold">{L(S.item)}</p>
                    <p className="text-gc-ink-60">{L(S.cod)}</p>
                  </div>
                  <p className="text-[15px] font-bold tabular-nums">{n(DEMO.price, { money: true })}</p>
                </div>

                {/* Delivery and payment, side by side, always visible */}
                <dl className="mt-2.5 grid grid-cols-2 gap-1.5">
                  <div className={cn("rounded-xl px-2 py-1.5 transition-colors duration-500", delivered ? "bg-gc-success-10" : "bg-gc-canvas")}>
                    <dt className="text-[9.5px] font-semibold uppercase tracking-[0.06em] text-gc-ink-60">{L(SCENE_COMMON.delivery)}</dt>
                    <dd className={cn("mt-0.5 text-[12px] font-bold", delivered ? "text-gc-success" : "text-gc-ink")}>
                      <Swap value={L(S.deliveryStatus[Math.min(4, b)])} />
                    </dd>
                  </div>
                  <div className={cn("rounded-xl px-2 py-1.5 transition-colors duration-500", received ? "bg-gc-success-10" : "bg-gc-warning-10")}>
                    <dt className="text-[9.5px] font-semibold uppercase tracking-[0.06em] text-gc-ink-60">{L(SCENE_COMMON.payment)}</dt>
                    <dd className={cn("mt-0.5 text-[12px] font-bold", received ? "text-gc-success" : "text-gc-warning")}>
                      <Swap value={received ? `${L(S.paymentReceived)} · ${n(DEMO.payout, { money: true })}` : L(S.paymentPending)} />
                    </dd>
                  </div>
                </dl>

                {/* What has happened on the order */}
                <ul className="mt-2.5 space-y-1.5 text-[11px]">
                  <li className={cn("flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors duration-500", b >= 1 ? "bg-gc-canvas" : "")}>
                    <span className={cn("grid size-5 shrink-0 place-items-center rounded-full text-white", b >= 1 ? "bg-gc-royal" : "bg-gc-ink/15")}>
                      <PhoneCall className="size-3" />
                    </span>
                    <span className="w-[40px] shrink-0 font-semibold text-gc-ink-60">{L(S.checks.call)}</span>
                    <span className={cn("min-w-0 flex-1 truncate", b >= 1 ? "font-medium text-gc-ink" : "text-gc-ink-50")}>
                      <Swap value={b >= 1 ? L(S.checks.callDone) : "—"} />
                    </span>
                  </li>
                  <li className={cn("flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors duration-500", b >= 2 ? "bg-gc-canvas" : "")}>
                    <span className={cn("grid size-5 shrink-0 place-items-center rounded-full text-white", b >= 2 ? "bg-gc-royal" : "bg-gc-ink/15")}>
                      <Boxes className="size-3" />
                    </span>
                    <span className="w-[40px] shrink-0 font-semibold text-gc-ink-60">{L(S.checks.stock)}</span>
                    <span className={cn("min-w-0 flex-1 truncate", b >= 2 ? "font-medium text-gc-ink" : "text-gc-ink-50")}>
                      <Swap value={L(b >= 2 ? S.checks.stockHeld : S.checks.stockWaiting)} />
                    </span>
                  </li>
                </ul>
              </Widget>
            </At>

            {/* Courier */}
            <At x={300} y={24} w={242} z={10} order={2}>
              <Show on={b >= 3} from="left">
                <Widget title={L(S.courier)} icon={Truck} focus={b === 3 || b === 4}>
                  <div className="flex items-center justify-between">
                    <Image src="/integrations/pathao.png" alt="" width={120} height={34} className="h-4 w-auto" />
                    <span className="text-[10.5px] tabular-nums text-gc-ink-60">{DEMO.tracking}</span>
                  </div>
                  <div className="relative mt-3">
                    <Bar value={delivered ? 1 : 0.35} tone={delivered ? "success" : "royal"} />
                    <motion.span
                      className={cn("absolute -top-[9px] grid size-5 place-items-center rounded-full text-white", delivered ? "bg-gc-success" : "bg-gc-royal")}
                      initial={false}
                      animate={{ left: delivered ? "calc(100% - 20px)" : "calc(35% - 10px)" }}
                      transition={{ duration: 0.8 }}
                    >
                      <Truck className="size-3" />
                    </motion.span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <Tag tone={delivered ? "success" : "royal"}>
                      {delivered && <BadgeCheck className="size-3" />}
                      <Swap value={L(delivered ? S.delivered : S.pickedUp)} />
                    </Tag>
                    <Show on={delivered && !received} from="pop">
                      <Tag tone="warning">
                        <Hourglass className="size-3" /> {L(S.paymentPending)}
                      </Tag>
                    </Show>
                  </div>
                </Widget>
              </Show>
            </At>

            {/* COD still with the courier */}
            <At x={300} y={206} w={242} z={10} order={3}>
              <Show on={b >= 5 && !received} from="up">
                <div className="flex items-center gap-2.5 rounded-2xl bg-gc-warning-10 p-2.5 ring-1 ring-gc-warning/20">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gc-warning text-white">
                    <Hourglass className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1 text-[11px] leading-snug">
                    <p className="font-semibold text-gc-ink">{L(S.codWithCourier)}</p>
                    <p className="text-gc-ink-70">{L(S.notYours)}</p>
                  </div>
                  <p className="text-[15px] font-bold tabular-nums text-gc-warning">{n(DEMO.price, { money: true })}</p>
                </div>
              </Show>
            </At>

            {/* Payout */}
            <At x={300} y={292} w={242} z={10} order={4}>
              <Show on={b >= 6} from="up">
                <Widget title={L(S.payout)} icon={Wallet} focus={b >= 6} right={<Tag tone={received ? "success" : "royal"}><Swap value={received ? L(S.matched) : L(S.arrived)} /></Tag>}>
                  <dl className="space-y-1 text-[11px]">
                    <div className="flex justify-between">
                      <dt className="text-gc-ink-60">{L(S.codCollected)}</dt>
                      <dd className="font-semibold tabular-nums">{n(DEMO.price, { money: true })}</dd>
                    </div>
                    <Show on={b >= 7} from="up">
                      <div className="flex justify-between">
                        <dt className="text-gc-ink-60">{L(S.charge)}</dt>
                        <dd className="font-semibold tabular-nums text-[#D93636]">−{n(DEMO.courierFee, { money: true })}</dd>
                      </div>
                    </Show>
                    <Show on={b >= 7} from="up" delay={0.15}>
                      <div className="flex justify-between border-t border-gc-line pt-1">
                        <dt className="font-semibold">{L(S.paid)}</dt>
                        <dd className={cn("font-bold tabular-nums", received ? "text-gc-success" : "text-gc-ink")}>{n(DEMO.payout, { money: true })}</dd>
                      </div>
                    </Show>
                  </dl>
                </Widget>
              </Show>
            </At>
          </>
        );
      }}
    </Scene>
  );
}
