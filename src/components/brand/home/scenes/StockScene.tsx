"use client";

import { BadgeCheck, Boxes, Globe, ScanBarcode } from "lucide-react";
import { DEMO, STOCK_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { ChannelLogo } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Packet, Scene, Show, Swap, Tag, Widget, Wire, type Step } from "./kit";

/** Beats: 1 counter sale · 2 on hand drops · 3 online order arrives · 4 one reserved · 5 the website shows the new number. */
const CUES = [800, 2000, 3300, 4500, 5800];
const STEPS: Step[] = S.steps.map((text, i) => ({ at: i, text }));
/* on hand / reserved after each beat; available is always on hand − reserved */
const STATE = [
  { onHand: 13, reserved: 0 },
  { onHand: 13, reserved: 0 },
  { onHand: 12, reserved: 0 },
  { onHand: 12, reserved: 0 },
  { onHand: 12, reserved: 1 },
  { onHand: 12, reserved: 1 },
];

/** A counter sale and an online order drawing on one count; the website follows. */
export function StockScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} steps={STEPS} label={L(S.label)}>
      {(b) => {
        const s = STATE[Math.min(b, 5)];
        const avail = s.onHand - s.reserved;
        return (
          <>
            <Wire from={[186, 112]} to={[236, 176]} on={b >= 1} curve={-10} />
            <Wire from={[376, 112]} to={[326, 176]} on={b >= 3} curve={-10} />
            <Wire from={[330, 286]} to={[376, 314]} on={b >= 5} />
            <Packet from={[186, 112]} to={[236, 176]} on={b === 1 || b === 2} />
            <Packet from={[376, 112]} to={[326, 176]} on={b === 3 || b === 4} color="var(--color-gc-warning)" />
            <Packet from={[330, 286]} to={[376, 314]} on={b === 5} />

            {/* Counter */}
            <At x={18} y={30} w={176} z={10} order={2}>
              <Show on={b >= 1} from="right">
                <Widget title={L(S.counter)} icon={ScanBarcode} focus={b === 1 || b === 2}>
                  <p className="text-[10.5px] text-gc-ink-60">{L(S.receipt)}</p>
                  <p className="text-[17px] font-bold tabular-nums">{n(DEMO.price, { money: true })}</p>
                  <p className="mt-1">
                    <Tag tone="success">
                      <BadgeCheck className="size-3" /> {L(S.cash)}
                    </Tag>
                  </p>
                </Widget>
              </Show>
            </At>

            {/* Online */}
            <At x={376} y={30} w={166} z={10} order={3}>
              <Show on={b >= 3} from="left">
                <Widget title={L(S.online)} icon={Globe} focus={b === 3 || b === 4}>
                  <p className="flex items-center gap-1 text-[10.5px] text-gc-ink-60">
                    <ChannelLogo channel="messenger" size={11} /> {DEMO.order}
                  </p>
                  <p className="text-[17px] font-bold tabular-nums">{n(DEMO.price, { money: true })}</p>
                  <p className="mt-1">
                    <Tag tone="warning">{L(S.reserved)} · 1</Tag>
                  </p>
                </Widget>
              </Show>
            </At>

            {/* The one stock picture, on screen from the first frame */}
            <At x={160} y={166} w={240} z={15} order={1}>
              <Widget title={L(S.product)} icon={Boxes} focus={b === 0 || b === 2 || b === 4}>
                <dl className="grid grid-cols-3 gap-1.5">
                  {(
                    [
                      [S.onHand, s.onHand, "bg-gc-canvas", b === 2],
                      [S.held, s.reserved, "bg-gc-canvas", b === 4],
                      [S.available, avail, "bg-gc-royal-10", b === 2 || b === 4 || b === 5],
                    ] as const
                  ).map(([label, v, bg, hot], i) => (
                    <div key={i} className={cn("rounded-xl px-2 py-2 transition-shadow duration-500", bg, hot && "ring-2 ring-gc-royal")}>
                      <dt className="text-[9.5px] text-gc-ink-60">{L(label)}</dt>
                      <dd className={cn("text-[20px] font-bold tabular-nums", i === 2 && "text-gc-royal")}>
                        <Swap value={n(v)} />
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-2 text-[10px] text-gc-ink-60">{L(S.formula)}</p>
              </Widget>
            </At>

            {/* Website */}
            <At x={376} y={300} w={166} z={10} order={4}>
              <Show on={b >= 5} from="left">
                <Widget title={L(S.website)} icon={Globe} focus={b === 5}>
                  <p className="text-[11px] font-semibold">{DEMO.product}</p>
                  <p className="mt-0.5 text-[11px] text-gc-success">
                    <span className="font-bold tabular-nums">{n(avail)}</span> {L(S.inStock)}
                  </p>
                </Widget>
              </Show>
            </At>
          </>
        );
      }}
    </Scene>
  );
}
