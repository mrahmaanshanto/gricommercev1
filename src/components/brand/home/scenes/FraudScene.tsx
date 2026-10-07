"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, CopyX, MapPinOff, Phone, Receipt, ShieldAlert, ShieldCheck, TriangleAlert, Truck } from "lucide-react";
import { FRAUD_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Avatar, ChannelLogo, Counter } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Cursor, Packet, Scene, Show, Swap, Tag, Toast, Widget, Wire } from "./kit";

/** Beats: 1 order arrives · 2 history checked · 3 bars fill, rate · 4 flags · 5 click ask advance · 6 link sent, COD off · 7 toast. */
const CUES = [500, 1500, 2500, 3700, 4900, 6000, 7100];

const COURIERS = [
  { name: "Pathao", src: "/integrations/pathao.png", delivered: 2, returned: 5 },
  { name: "Steadfast", src: "/integrations/steadfast.png", delivered: 1, returned: 3 },
  { name: "RedX", src: "/integrations/redx.png", delivered: 0, returned: 2 },
];
const TOTAL = COURIERS.reduce((a, c) => a + c.delivered + c.returned, 0); // 13
const DELIVERED = COURIERS.reduce((a, c) => a + c.delivered, 0); // 3
const RATE = Math.round((DELIVERED / TOTAL) * 100); // 23

/** A COD order checked against the number's courier record, flagged, and asked for an advance. */
export function FraudScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} duration={10400} label={L(S.label)}>
      {(b) => (
        <>
          <Wire from={[214, 112]} to={[262, 112]} on={b >= 2} />
          <Packet from={[214, 112]} to={[262, 112]} on={b === 2} />

          {/* The order */}
          <At x={18} y={34} w={196} z={10}>
            <Show on={b >= 1} from="pop">
              <Widget title={L(S.newOrder)} icon={Receipt} focus={b === 1} right={b >= 4 ? <Tag tone="danger"><ShieldAlert className="size-3" /></Tag> : <Tag tone="warning">COD</Tag>}>
                <div className="flex items-center gap-2">
                  <Avatar name="Sabbir Khan" size={28} tone={3} />
                  <div className="min-w-0">
                    <p className="text-[12px] font-semibold leading-tight">Sabbir Khan</p>
                    <p className="flex items-center gap-1 text-[10.5px] text-gc-ink-60">
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
            </Show>
          </At>

          {/* Courier history for the number */}
          <At x={262} y={34} w={280} z={10}>
            <Show on={b >= 2} from="left">
              <Widget title={L(S.history)} icon={Truck} focus={b === 2 || b === 3} right={<span className="font-mono text-[10px] text-gc-ink-50">017••••4521</span>}>
                <ul className="space-y-2">
                  {COURIERS.map((c, i) => {
                    return (
                      <li key={c.name}>
                        <div className="flex items-center justify-between text-[10.5px]">
                          <Image src={c.src} alt="" width={90} height={24} className="h-3.5 w-auto" />
                          <span className="tabular-nums text-gc-ink-60">
                            <b className="text-gc-success">{n(c.delivered)}</b> {L(S.delivered)} · <b className="text-[#D93636]">{n(c.returned)}</b> {L(S.returned)}
                          </span>
                        </div>
                        <div className="mt-1 flex h-1.5 overflow-hidden rounded-full bg-gc-canvas">
                          <motion.span
                            className="h-full bg-gc-success"
                            initial={false}
                            animate={{ width: b >= 3 ? `${(c.delivered / 7) * 100}%` : "0%" }}
                            transition={{ duration: 0.6, ease: EASE.outQuart, delay: b >= 3 ? i * 0.15 : 0 }}
                          />
                          <motion.span
                            className="h-full bg-[#F06A6A]"
                            initial={false}
                            animate={{ width: b >= 3 ? `${(c.returned / 7) * 100}%` : "0%" }}
                            transition={{ duration: 0.6, ease: EASE.outQuart, delay: b >= 3 ? 0.1 + i * 0.15 : 0 }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className={cn("mt-2.5 flex items-center justify-between rounded-xl px-2.5 py-2 transition-colors duration-500", b >= 3 ? "bg-[#FEF2F2]" : "bg-gc-canvas")}>
                  <span className="text-[11px] font-semibold">{L(S.rate)}</span>
                  <span className={cn("text-[18px] font-bold tabular-nums", b >= 3 ? "text-[#D93636]" : "text-gc-ink-50")}>
                    {b >= 3 ? (
                      <>
                        <Counter value={RATE} />%
                      </>
                    ) : (
                      <span className="text-[11px] font-semibold">{L(S.checking)}</span>
                    )}
                  </span>
                </div>
              </Widget>
            </Show>
          </At>

          {/* Flags */}
          <At x={18} y={196} w={230} z={10}>
            <Show on={b >= 4} from="right">
              <Widget title={L(S.flags)} icon={ShieldAlert} focus={b === 4 || b === 5}>
                <ul className="space-y-1.5">
                  {[
                    [TriangleAlert, S.risky, "text-[#D93636]"],
                    [CopyX, S.duplicate, "text-gc-warning"],
                    [MapPinOff, S.wrong, "text-gc-warning"],
                  ].map(([I, t, c], i) => {
                    const Icon = I as typeof TriangleAlert;
                    return (
                      <Show key={i} on={b >= 4} from="right" delay={i * 0.15}>
                        <li className="flex items-center gap-1.5 rounded-lg bg-gc-canvas px-2 py-1.5 text-[11px] font-medium">
                          <Icon className={cn("size-3.5 shrink-0", c as string)} />
                          {L(t as typeof S.risky)}
                        </li>
                      </Show>
                    );
                  })}
                </ul>
                <span className={cn("mt-2.5 flex items-center justify-center gap-1.5 rounded-full py-1.5 text-[11px] font-semibold text-white transition-colors", b >= 6 ? "bg-gc-success" : "bg-gc-ink")}>
                  {b >= 6 ? <BadgeCheck className="size-3.5" /> : null}
                  <Swap value={L(b >= 6 ? S.sent : S.ask)} />
                </span>
              </Widget>
            </Show>
          </At>

          {/* Customer rule */}
          <At x={272} y={262} w={270} z={10}>
            <Show on={b >= 6} from="up">
              <Widget focus={b === 6}>
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-full bg-[#FEF2F2] text-[#D93636]">
                    <ShieldCheck className="size-4" />
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold">{L(S.rule)}</p>
                    <p className="font-mono text-[10px] text-gc-ink-50">017••••4521</p>
                  </div>
                  <Tag tone="ai" className="ml-auto">bKash</Tag>
                </div>
              </Widget>
            </Show>
          </At>

          <At x={272} y={344} z={30}>
            <Toast on={b >= 7} icon={ShieldCheck} tone="success">
              {L(S.saved)}
            </Toast>
          </At>

          <Cursor x={130} y={b >= 5 ? 352 : 400} click={b === 5} show={b === 5} />
        </>
      )}
    </Scene>
  );
}
