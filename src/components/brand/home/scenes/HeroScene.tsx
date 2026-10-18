"use client";

import Image from "next/image";
import { BadgeCheck, Boxes, Hourglass, PackageCheck, Receipt, Truck, Wallet } from "lucide-react";
import { DEMO, HERO_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Avatar, ChannelLogo } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Packet, Scene, Show, Swap, Tag, Widget, Wire, type Step } from "./kit";

/** Beats: 1 message arrives · 2 it becomes the order · 3 stock updates · 4 courier attaches · 5 delivered, payment tracked. */
const CUES = [500, 1700, 3000, 4300, 5600];
const STEPS: Step[] = [
  { at: 0, text: S.steps[0] },
  { at: 2, text: S.steps[1] },
  { at: 3, text: S.steps[2] },
  { at: 4, text: S.steps[3] },
  { at: 5, text: S.steps[4] },
];

/**
 * The hero's introduction: one customer message becomes one order card, and the card gathers its stock, courier
 * and payment status. The final frame holds the connected card with its four steps complete.
 */
export function HeroScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} steps={STEPS} label={L(S.label)}>
      {(b) => (
        <>
          <Wire from={[150, 92]} to={[200, 128]} on={b >= 2} curve={-8} />
          <Wire from={[446, 140]} to={[430, 196]} on={b >= 3} curve={6} />
          <Wire from={[446, 290]} to={[430, 250]} on={b >= 4} curve={-6} />
          <Packet from={[150, 92]} to={[200, 128]} on={b === 2} />
          <Packet from={[446, 140]} to={[430, 196]} on={b === 3} color="var(--color-gc-warning)" />
          <Packet from={[446, 290]} to={[430, 250]} on={b === 4} />

          {/* The message */}
          <At x={18} y={22} w={238} z={20} order={1}>
            <Show on={b >= 1} from="left">
              <Widget focus={b === 1}>
                <div className="flex items-center gap-2">
                  <Avatar name={DEMO.customer} size={28} tone={1} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold leading-tight">{DEMO.customer}</p>
                    <p className="flex items-center gap-1 text-[10.5px] text-gc-ink-60">
                      <ChannelLogo channel="messenger" size={10} /> {L(S.viaMessenger)}
                    </p>
                  </div>
                </div>
                <p className="mt-2 w-fit rounded-2xl rounded-tl-sm bg-gc-canvas px-3 py-2 text-[11.5px] leading-snug">{L(S.message)}</p>
              </Widget>
            </Show>
          </At>

          {/* The order, gathering its steps */}
          <At x={150} y={118} w={290} z={10} order={2}>
            <Show on={b >= 2} from="pop">
              <Widget
                title={L(S.order)}
                icon={Receipt}
                focus={b >= 2}
                right={
                  <Tag tone={b >= 5 ? "success" : b >= 3 ? "royal" : "warning"}>
                    <Swap value={L(b >= 5 ? S.doneStatus : b >= 3 ? S.openStatus : S.newStatus)} />
                  </Tag>
                }
              >
                <div className="flex items-center gap-2 rounded-xl bg-gc-canvas p-2">
                  <Image src="/merchants/merchant-electronics.webp" alt="" width={64} height={64} className="size-9 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1 text-[11px]">
                    <p className="font-semibold">{L(S.item)}</p>
                    <p className="text-gc-ink-60">
                      {DEMO.customer} · {L(S.cod)}
                    </p>
                  </div>
                  <p className="text-[15px] font-bold tabular-nums">{n(DEMO.price, { money: true })}</p>
                </div>
                <ul className="mt-2.5 space-y-1.5 text-[11px]">
                  <Row icon={Boxes} label={L(S.rows.stock)} done={b >= 3} tone="royal">
                    <Swap value={L(b >= 3 ? S.stockNow : S.stockWas)} />
                  </Row>
                  <Row icon={Truck} label={L(S.rows.courier)} done={b >= 4} tone="royal">
                    <Swap value={L(b >= 4 ? S.booked : S.notBooked)} />
                  </Row>
                  <Row icon={PackageCheck} label={L(S.rows.delivery)} done={b >= 5} tone="success">
                    <Swap value={L(b >= 5 ? S.delivered : S.pending)} />
                  </Row>
                  <Row icon={Wallet} label={L(S.rows.payment)} done={b >= 5} tone="warning">
                    <Swap value={L(b >= 5 ? S.codDue : S.pending)} />
                  </Row>
                </ul>
              </Widget>
            </Show>
          </At>

          {/* Stock */}
          <At x={400} y={78} w={144} z={15} order={3}>
            <Show on={b >= 3} from="left">
              <Widget title={L(S.stockCard)} icon={Boxes} focus={b === 3}>
                <p className="text-[22px] font-bold tabular-nums leading-none">
                  <Swap value={n(b >= 3 ? 11 : 12)} />
                  <span className="ml-1 text-[11px] font-medium text-gc-ink-60">{L(S.available)}</span>
                </p>
              </Widget>
            </Show>
          </At>

          {/* Courier */}
          <At x={400} y={286} w={144} z={15} order={4}>
            <Show on={b >= 4} from="left">
              <Widget title={L(S.rows.courier)} icon={Truck} focus={b === 4}>
                <Image src="/integrations/pathao.png" alt="" width={120} height={34} className="h-4 w-auto" />
                <p className="mt-1 text-[10.5px] tabular-nums text-gc-ink-60">{DEMO.tracking}</p>
                <p className="mt-1.5">
                  <Tag tone={b >= 5 ? "success" : "royal"}>
                    {b >= 5 && <BadgeCheck className="size-3" />}
                    <Swap value={L(b >= 5 ? S.delivered : S.pending)} />
                  </Tag>
                </p>
              </Widget>
            </Show>
          </At>

          {/* Payment, kept apart from delivery */}
          <At x={18} y={330} w={262} z={15} order={5}>
            <Show on={b >= 5} from="up">
              <div className="flex items-center gap-2 rounded-2xl bg-gc-warning-10 p-2.5 ring-1 ring-gc-warning/20">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gc-warning text-white">
                  <Hourglass className="size-4" />
                </span>
                <div className="min-w-0 text-[11px] leading-snug">
                  <p className="font-semibold text-gc-ink">{L(S.rows.payment)}</p>
                  <p className="text-gc-ink-70">{L(S.codDue)}</p>
                </div>
              </div>
            </Show>
          </At>
        </>
      )}
    </Scene>
  );
}

function Row({ icon: Icon, label, done, tone, children }: { icon: typeof Boxes; label: string; done: boolean; tone: "royal" | "success" | "warning"; children: React.ReactNode }) {
  const dot = { royal: "bg-gc-royal", success: "bg-gc-success", warning: "bg-gc-warning" }[tone];
  return (
    <li className={cn("flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors duration-500", done ? "bg-gc-canvas" : "bg-transparent")}>
      <span className={cn("grid size-5 shrink-0 place-items-center rounded-full text-white transition-colors duration-500", done ? dot : "bg-gc-ink/15")}>
        <Icon className="size-3" />
      </span>
      <span className="w-[52px] shrink-0 font-semibold text-gc-ink-60">{label}</span>
      <span className={cn("min-w-0 flex-1 truncate font-medium", done ? "text-gc-ink" : "text-gc-ink-50")}>{children}</span>
    </li>
  );
}
