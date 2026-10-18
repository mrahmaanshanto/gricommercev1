"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, Phone, PhoneCall, Receipt, Search, Send, Truck, TriangleAlert } from "lucide-react";
import { FRAUD_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Avatar, ChannelLogo } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Cursor, Packet, Scene, Show, Swap, Tag, Widget, Wire, type Step } from "./kit";

/** Beats: 1 order arrives · 2 number checked · 3 history shown · 4 the signal · 5 the options · 6 advance chosen. */
const CUES = [600, 1700, 2800, 4100, 5400, 6700];
const STEPS: Step[] = S.steps.map((text, i) => ({ at: i, text }));

/* A different order and customer from the main story: a risky COD order. */
const COURIERS = [
  { name: "Pathao", src: "/integrations/pathao.png", delivered: 2, returned: 5 },
  { name: "Steadfast", src: "/integrations/steadfast.png", delivered: 1, returned: 3 },
  { name: "RedX", src: "/integrations/redx.png", delivered: 0, returned: 2 },
];

/** A COD order checked against the number's courier record; the merchant sees the evidence and chooses what to do. */
export function FraudScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} steps={STEPS} label={L(S.label)} h={500}>
      {(b) => (
        <>
          <Wire from={[228, 96]} to={[252, 96]} on={b >= 2} />
          <Packet from={[228, 96]} to={[252, 96]} on={b === 2} />

          {/* The order (on screen from the first frame) */}
          <At x={18} y={24} w={210} z={10} order={1}>
            <Widget title={L(S.newOrder)} icon={Receipt} focus={b <= 1}>
              <div className="mb-2">
                <Tag tone={b >= 6 ? "royal" : b >= 4 ? "warning" : "neutral"}>
                  <Swap value={L(b >= 6 ? S.waitingAdvance : b >= 4 ? S.review : S.newTag)} />
                </Tag>
              </div>
              <div className="flex items-center gap-2">
                <Avatar name="Sabbir Khan" size={28} tone={3} />
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold leading-tight">Sabbir Khan</p>
                  <p className={cn("flex items-center gap-1 rounded px-1 -mx-1 text-[10.5px] text-gc-ink-60 transition-colors duration-500", b === 2 && "bg-gc-royal-10 text-gc-royal")}>
                    <Phone className="size-3" /> 017••••4521
                  </p>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between rounded-xl bg-gc-canvas px-2 py-1.5">
                <span className="flex items-center gap-1 text-[10.5px] text-gc-ink-60">
                  <ChannelLogo channel="facebook" size={11} /> {L(S.cod)}
                </span>
                <span className="text-[14px] font-bold tabular-nums">{n(3800, { money: true })}</span>
              </div>
            </Widget>
          </At>

          {/* Courier history for the number */}
          <At x={252} y={24} w={290} z={10} order={2}>
            <Show on={b >= 2} from="left">
              <Widget title={L(S.history)} icon={Truck} focus={b === 2 || b === 3}>
                {b === 2 ? (
                  <p className="flex items-center gap-1.5 py-3 text-[11px] font-medium text-gc-ink-60">
                    <Search className="size-3.5 animate-pulse" /> {L(S.checking)}
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {COURIERS.map((c, i) => (
                      <li key={c.name}>
                        <div className="flex items-center justify-between text-[10.5px]">
                          <Image src={c.src} alt="" width={90} height={24} className="h-3.5 w-auto" />
                          <span className="tabular-nums text-gc-ink-60">
                            <b className="text-gc-success">{n(c.delivered)}</b> {L(S.delivered)} · <b className="text-[#D93636]">{n(c.returned)}</b> {L(S.returned)}
                          </span>
                        </div>
                        <div className="mt-1 flex h-1.5 overflow-hidden rounded-full bg-gc-canvas">
                          <motion.span className="h-full bg-gc-success" initial={false} animate={{ width: `${(c.delivered / 7) * 100}%` }} transition={{ duration: 0.6, ease: EASE.outQuart, delay: i * 0.15 }} />
                          <motion.span className="h-full bg-[#F06A6A]" initial={false} animate={{ width: `${(c.returned / 7) * 100}%` }} transition={{ duration: 0.6, ease: EASE.outQuart, delay: 0.1 + i * 0.15 }} />
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <div className={cn("mt-2.5 flex items-center justify-between rounded-xl px-2.5 py-2 transition-colors duration-500", b >= 4 ? "bg-[#FEF2F2] ring-1 ring-[#F7C6C6]" : "bg-gc-canvas")}>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold">
                    {b >= 4 && <TriangleAlert className="size-3.5 text-[#D93636]" />}
                    {L(S.total)}
                  </span>
                  <span className={cn("text-[11px] font-semibold", b >= 4 ? "text-[#D93636]" : "text-gc-ink-50")}>{b >= 3 ? `${n(3)} / ${n(13)}` : "…"}</span>
                </div>
              </Widget>
            </Show>
          </At>

          {/* The one signal, in plain words */}
          <At x={18} y={204} w={210} z={10} order={3}>
            <Show on={b >= 4} from="right">
              <div className="rounded-2xl bg-[#FEF2F2] p-2.5 ring-1 ring-[#F7C6C6]">
                <p className="flex items-start gap-1.5 text-[11px] font-semibold leading-snug text-[#B91C1C]">
                  <TriangleAlert className="mt-0.5 size-3.5 shrink-0" /> {L(S.signal)}
                </p>
                <p className="mt-1 text-[10px] leading-snug text-gc-ink-60">{L(S.signalNote)}</p>
              </div>
            </Show>
          </At>

          {/* The merchant's options */}
          <At x={252} y={248} w={290} z={10} order={4}>
            <Show on={b >= 5} from="up">
              <Widget title={L(S.options)} focus={b >= 5}>
                <ul className="space-y-1.5">
                  {[
                    [Send, S.optAdvance, true],
                    [PhoneCall, S.optCall, false],
                    [Truck, S.optShip, false],
                  ].map(([I, t, pick], i) => {
                    const Icon = I as typeof Send;
                    const chosen = pick && b >= 6;
                    return (
                      <li
                        key={i}
                        className={cn(
                          "flex items-center gap-2 rounded-xl px-2.5 py-2 text-[11px] font-medium ring-1 transition-colors duration-300",
                          chosen ? "bg-gc-royal text-white ring-gc-royal" : "bg-white ring-gc-line",
                          b >= 6 && !pick && "opacity-50",
                        )}
                      >
                        <Icon className="size-3.5 shrink-0" />
                        <span className="flex-1">{L(t as typeof S.optAdvance)}</span>
                        {chosen && <Tag tone="success">{L(S.chosen)}</Tag>}
                      </li>
                    );
                  })}
                </ul>
                <Show on={b >= 6} from="up" className="mt-2.5">
                  <div className="rounded-xl bg-gc-success-10 px-2.5 py-2 text-[11px] leading-snug">
                    <p className="flex items-center gap-1.5 font-semibold text-gc-success">
                      <BadgeCheck className="size-3.5" /> {L(S.sent)}
                    </p>
                    <p className="mt-0.5 text-gc-ink-60">{L(S.reason)}</p>
                  </div>
                </Show>
              </Widget>
            </Show>
          </At>

          <Cursor x={380} y={b >= 6 ? 318 : 360} click={b === 6} show={b >= 5 && b <= 6} />
        </>
      )}
    </Scene>
  );
}
