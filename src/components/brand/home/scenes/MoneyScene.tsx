"use client";

import { motion } from "motion/react";
import { BadgeCheck, Boxes, ChartLine, ClipboardList, Hourglass, Receipt, Wallet } from "lucide-react";
import { MONEY_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Counter } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Cursor, Scene, Show, Swap, Tag, Toast, Widget } from "./kit";

/** Beats: 1 cursor to Confirm all · 2 confirmed · 3 payout arrives · 4 COD drops · 5 sale breakdown · 6 profit + week chart. */
const CUES = [600, 1700, 2900, 3900, 5200, 6600];

const SALE = 2450;
const COSTS = [680, 120, 300];
const PROFIT = SALE - COSTS.reduce((a, c) => a + c, 0); // 1,350

/** Today's attention board, a courier payout landing, and one sale worked down to profit. */
export function MoneyScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} duration={10200} label={L(S.label)}>
      {(b) => (
        <>
          {/* Today */}
          <At x={18} y={30} w={290} z={10}>
            <Widget title={L(S.today)} icon={ClipboardList} right={<Tag tone="neutral">Sun, 12 Oct</Tag>}>
              <ul className="space-y-2">
                <li className={cn("rounded-xl p-2.5 transition-colors duration-500", b >= 2 ? "bg-gc-success-10" : "bg-gc-royal-10")}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-[11.5px] font-semibold">
                      <Receipt className="size-3.5 text-gc-royal" /> {L(S.toConfirm)}
                    </span>
                    <span className="text-[18px] font-bold tabular-nums">
                      <Swap value={n(b >= 2 ? 0 : 7)} />
                    </span>
                  </div>
                  <span className={cn("mt-1.5 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10.5px] font-semibold transition-colors", b >= 2 ? "bg-gc-success text-white" : "bg-gc-royal text-white")}>
                    {b >= 2 && <BadgeCheck className="size-3" />}
                    <Swap value={L(b >= 2 ? S.done : S.confirmAll)} />
                  </span>
                </li>
                <li className={cn("rounded-xl p-2.5 transition-colors duration-500", b === 3 || b === 4 ? "bg-gc-warning-10" : "bg-gc-canvas")}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 text-[11.5px] font-semibold">
                      <Hourglass className="size-3.5 text-gc-warning" /> {L(S.codDue)}
                    </span>
                    <span className="text-[16px] font-bold">
                      <Counter value={b >= 4 ? 10240 : 28640} prefix="৳" />
                    </span>
                  </div>
                  <div className="mt-1.5 flex gap-1">
                    {["Pathao", "Steadfast", "RedX"].map((c, i) => (
                      <span
                        key={c}
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[9.5px] font-semibold transition-colors duration-500",
                          i === 1 && b >= 4 ? "bg-gc-success-10 text-gc-success line-through" : "bg-white text-gc-ink-60",
                        )}
                      >
                        {c}
                      </span>
                    ))}
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

          <At x={30} y={318} z={30}>
            <Toast on={b >= 3} icon={Wallet} tone="success">
              {L(S.payout)} · {n(18400, { money: true })}
            </Toast>
          </At>

          {/* One sale down to profit */}
          <At x={330} y={30} w={212} z={10}>
            <Show on={b >= 5} from="left">
              <Widget title={L(S.sale)} icon={Receipt} focus={b === 5 || b === 6}>
                <ul className="space-y-1.5 text-[11px]">
                  {[SALE, ...COSTS].map((v, i) => (
                    <li key={i}>
                      <div className="flex justify-between">
                        <span className="text-gc-ink-60">{L(S.rows[i])}</span>
                        <span className={cn("font-semibold tabular-nums", i ? "text-[#D93636]" : "")}>
                          {i ? "−" : ""}
                          {n(v, { money: true })}
                        </span>
                      </div>
                      <div className="mt-0.5 h-1.5 rounded-full bg-gc-canvas">
                        <motion.div
                          className={cn("h-full rounded-full", i ? "bg-[#F4A3A3]" : "bg-gc-royal")}
                          initial={false}
                          animate={{ width: b >= 5 ? `${(v / SALE) * 100}%` : "0%" }}
                          transition={{ duration: 0.6, ease: EASE.outQuart, delay: b >= 5 ? 0.2 + i * 0.18 : 0 }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <Show on={b >= 6} from="pop" className="mt-2.5">
                  <div className="flex items-center justify-between rounded-xl bg-gc-success-10 px-2.5 py-2">
                    <span className="text-[11px] font-semibold text-gc-success">{L(S.profit)}</span>
                    <span className="text-[17px] font-bold tabular-nums text-gc-success">{n(PROFIT, { money: true })}</span>
                  </div>
                </Show>
              </Widget>
            </Show>
          </At>

          {/* The week */}
          <At x={330} y={288} w={212} z={10}>
            <Show on={b >= 5} from="up" delay={0.3}>
              <Widget tone="ink" title={L(S.week)} icon={ChartLine}>
                <p className="text-[18px] font-bold">
                  <Counter value={b >= 6 ? 184240 : 176400} prefix="৳" />
                </p>
                <svg viewBox="0 0 180 40" className="mt-1 h-9 w-full" aria-hidden>
                  <motion.path
                    d="M0 34 C 20 30, 30 32, 45 25 S 75 20, 90 22 S 120 12, 135 14 S 165 6, 180 3"
                    fill="none"
                    stroke="var(--color-gc-sky)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={false}
                    animate={{ pathLength: b >= 6 ? 1 : 0.55 }}
                    transition={{ duration: 0.9, ease: EASE.outQuart }}
                  />
                </svg>
              </Widget>
            </Show>
          </At>

          <Cursor x={b >= 1 ? 92 : 250} y={b >= 1 ? 104 : 200} click={b === 1} show={b >= 1 && b <= 2} />
        </>
      )}
    </Scene>
  );
}
