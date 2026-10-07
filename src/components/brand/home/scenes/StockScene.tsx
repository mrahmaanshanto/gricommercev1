"use client";

import { BadgeCheck, Bell, Boxes, FileText, Globe, ScanBarcode } from "lucide-react";
import { STOCK_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { ChannelLogo } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Cursor, Packet, Scene, Show, Swap, Tag, Widget, Wire } from "./kit";

/** Beats: 1 counter sale · 2 stock −1 · 3 online order reserved · 4 website shows 10 · 5 low-stock alert · 6 PO created. */
const CUES = [500, 1500, 2700, 3800, 5000, 6300];
const STATE = [
  { onHand: 12, reserved: 0 },
  { onHand: 12, reserved: 0 },
  { onHand: 11, reserved: 0 },
  { onHand: 11, reserved: 1 },
];

/** A counter sale and an online order drawing on one count, the website in step, a reorder. */
export function StockScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} duration={9600} label={L(S.label)}>
      {(b) => {
        const s = STATE[Math.min(b, 3)];
        const avail = s.onHand - s.reserved;
        return (
          <>
            <Wire from={[186, 110]} to={[230, 170]} on={b >= 1} curve={-10} />
            <Wire from={[376, 110]} to={[330, 170]} on={b >= 3} curve={-10} />
            <Wire from={[330, 270]} to={[376, 300]} on={b >= 4} />
            <Packet from={[186, 110]} to={[230, 170]} on={b === 1 || b === 2} />
            <Packet from={[376, 110]} to={[330, 170]} on={b === 3} color="var(--color-gc-warning)" />
            <Packet from={[330, 270]} to={[376, 300]} on={b === 4} />

            {/* Counter */}
            <At x={18} y={30} w={170} z={10}>
              <Show on={b >= 1} from="right">
                <Widget title={L(S.counter)} icon={ScanBarcode} focus={b === 1}>
                  <p className="text-[10.5px] text-gc-ink-60">{L(S.receipt)}</p>
                  <p className="text-[17px] font-bold tabular-nums">{n(2500, { money: true })}</p>
                  <p className="mt-1">
                    <Tag tone="success">
                      <BadgeCheck className="size-3" /> {L(S.cash)}
                    </Tag>
                  </p>
                </Widget>
              </Show>
            </At>

            {/* Online */}
            <At x={376} y={30} w={166} z={10}>
              <Show on={b >= 3} from="left">
                <Widget title={L(S.online)} icon={Globe} focus={b === 3}>
                  <p className="flex items-center gap-1 text-[10.5px] text-gc-ink-60">
                    <ChannelLogo channel="facebook" size={11} /> #GC-1044
                  </p>
                  <p className="text-[17px] font-bold tabular-nums">{n(2500, { money: true })}</p>
                  <p className="mt-1">
                    <Tag tone="warning">{L(S.reserved)}</Tag>
                  </p>
                </Widget>
              </Show>
            </At>

            {/* The one stock picture */}
            <At x={170} y={160} w={220} z={15}>
              <Widget title={L(S.product)} icon={Boxes} focus={b >= 1 && b <= 3}>
                <dl className="grid grid-cols-3 gap-1.5">
                  {(
                    [
                      [S.onHand, s.onHand, "bg-gc-canvas"],
                      [S.held, s.reserved, "bg-gc-canvas"],
                      [S.available, avail, "bg-gc-royal-10"],
                    ] as const
                  ).map(([label, v, bg], i) => (
                    <div key={i} className={cn("rounded-xl px-2 py-2", bg)}>
                      <dt className="text-[9.5px] text-gc-ink-60">{L(label)}</dt>
                      <dd className={cn("text-[20px] font-bold tabular-nums", i === 2 && "text-gc-royal")}>
                        <Swap value={n(v)} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </Widget>
            </At>

            {/* Website */}
            <At x={376} y={292} w={166} z={10}>
              <Show on={b >= 4} from="left">
                <Widget title={L(S.website)} icon={Globe} focus={b === 4}>
                  <p className="text-[11px] font-semibold">Earbuds Pro</p>
                  <p className="mt-0.5 text-[11px] text-gc-success">
                    <span className="font-bold tabular-nums">{n(avail)}</span> {L(S.inStock)}
                  </p>
                </Widget>
              </Show>
            </At>

            {/* Low stock → purchase order */}
            <At x={18} y={288} w={200} z={10}>
              <Show on={b >= 5} from="right">
                <Widget title={L(S.low)} icon={Bell} focus={b === 5}>
                  <p className="text-[11px] text-gc-ink-60">{L(S.reorderAt)}</p>
                  <span className={cn("mt-2 flex items-center justify-center gap-1.5 rounded-full py-1.5 text-[11px] font-semibold text-white transition-colors", b >= 6 ? "bg-gc-success" : "bg-gc-ink")}>
                    {b >= 6 ? <BadgeCheck className="size-3.5" /> : <FileText className="size-3.5" />}
                    <Swap value={L(b >= 6 ? S.poSent : S.createPo)} />
                  </span>
                </Widget>
              </Show>
            </At>

            <Cursor x={120} y={b >= 5 ? 360 : 400} click={b === 5} show={b === 5} />
          </>
        );
      }}
    </Scene>
  );
}
