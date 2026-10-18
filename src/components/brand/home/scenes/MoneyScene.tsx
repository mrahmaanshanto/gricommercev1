"use client";

import Image from "next/image";
import { BadgeCheck, Boxes, ClipboardList, Hourglass, Receipt, Wallet } from "lucide-react";
import { DEMO, MONEY_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Counter } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Cursor, Packet, Scene, Show, Swap, Tag, Widget, Wire, type Step } from "./kit";

/** Beats: 1 the COD item is highlighted · 2 its record opens · 3 Match clicked · 4 matched · 5 back on the board, one number changed. */
const CUES = [900, 2100, 3400, 4600, 6000];
const STEPS: Step[] = S.steps.map((text, i) => ({ at: i, text }));

const COD_BEFORE = 28640;
const COD_AFTER = COD_BEFORE - DEMO.price; // the order's COD is settled: 26,190

/** Today's three priorities; one is resolved and only its number changes. */
export function MoneyScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} steps={STEPS} label={L(S.label)}>
      {(b) => {
        const done = b >= 4;
        return (
          <>
            <Wire from={[262, 150]} to={[290, 110]} on={b >= 2} curve={6} />
            <Packet from={[262, 150]} to={[290, 110]} on={b === 2} />

            {/* Today's board */}
            <At x={18} y={24} w={244} z={10} order={1}>
              <Widget title={L(S.today)} icon={ClipboardList} right={<Tag tone="neutral">{b >= 5 ? L(S.left) : "3"}</Tag>} focus={b === 0 || b === 5}>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between rounded-xl bg-gc-canvas p-2.5">
                    <span className="flex items-center gap-1.5 text-[11.5px] font-semibold">
                      <Receipt className="size-3.5 text-gc-royal" /> {L(S.toConfirm)}
                    </span>
                    <span className="text-[18px] font-bold tabular-nums">{n(7)}</span>
                  </li>
                  <li className={cn("rounded-xl p-2.5 transition-colors duration-500", b === 1 || b === 5 ? "bg-gc-warning-10 ring-2 ring-gc-warning/50" : b >= 5 ? "bg-gc-success-10" : "bg-gc-canvas")}>
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-[11.5px] font-semibold">
                        <Hourglass className="size-3.5 text-gc-warning" /> {L(S.codDue)}
                      </span>
                      <span className="text-[16px] font-bold tabular-nums">
                        <Counter value={b >= 5 ? COD_AFTER : COD_BEFORE} prefix="৳" />
                      </span>
                    </div>
                    <div className="mt-1.5 flex items-center justify-between">
                      <span className="text-[10px] text-gc-ink-60">{L(S.withCouriers)}</span>
                      <Show on={b >= 1 && b < 5} from="pop">
                        <span className="rounded-full bg-gc-ink px-2 py-0.5 text-[10px] font-semibold text-white">{L(S.open)}</span>
                      </Show>
                      <Show on={b >= 5} from="pop">
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gc-success">
                          <BadgeCheck className="size-3" /> −{n(DEMO.price, { money: true })}
                        </span>
                      </Show>
                    </div>
                  </li>
                  <li className="flex items-center justify-between rounded-xl bg-gc-canvas p-2.5">
                    <span className="flex items-center gap-1.5 text-[11.5px] font-semibold">
                      <Boxes className="size-3.5 text-[#D93636]" /> {L(S.lowStock)}
                    </span>
                    <Tag tone="danger">{L(S.items)}</Tag>
                  </li>
                </ul>
              </Widget>
            </At>

            {/* The record behind the number */}
            <At x={290} y={24} w={252} z={20} order={2}>
              <Show on={b >= 2} from="left">
                <Widget title={L(S.record)} icon={Wallet} focus={b >= 2 && b <= 4} right={<Tag tone={done ? "success" : "warning"}><Swap value={L(done ? S.matched : S.arrived)} /></Tag>}>
                  <div className="flex items-center justify-between">
                    <Image src="/integrations/pathao.png" alt="" width={120} height={34} className="h-4 w-auto" />
                    <span className="text-[10.5px] text-gc-ink-60">{L(S.forOrder)}</span>
                  </div>
                  <dl className="mt-2.5 space-y-1 text-[11px]">
                    <div className="flex justify-between">
                      <dt className="text-gc-ink-60">{L(S.codCollected)}</dt>
                      <dd className="font-semibold tabular-nums">{n(DEMO.price, { money: true })}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gc-ink-60">{L(S.charge)}</dt>
                      <dd className="font-semibold tabular-nums text-[#D93636]">−{n(DEMO.courierFee, { money: true })}</dd>
                    </div>
                    <div className="flex justify-between border-t border-gc-line pt-1">
                      <dt className="font-semibold">{L(S.paid)}</dt>
                      <dd className={cn("font-bold tabular-nums", done ? "text-gc-success" : "")}>{n(DEMO.payout, { money: true })}</dd>
                    </div>
                  </dl>
                  <span className={cn("mt-2.5 flex items-center justify-center gap-1.5 rounded-full py-1.5 text-[11px] font-semibold text-white transition-colors", done ? "bg-gc-success" : "bg-gc-ink")}>
                    {done && <BadgeCheck className="size-3.5" />}
                    <Swap value={L(done ? S.resolved : S.match)} />
                  </span>
                </Widget>
              </Show>
            </At>

            <Cursor x={b >= 3 ? 410 : 230} y={b >= 3 ? 236 : 150} click={b === 1 || b === 3} show={b >= 1 && b <= 3} />
          </>
        );
      }}
    </Scene>
  );
}
