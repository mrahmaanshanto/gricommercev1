"use client";

import Image from "next/image";
import { BadgeCheck, CircleSlash, Clock, Repeat, ShoppingCart, TrendingUp } from "lucide-react";
import { RECOVERY_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { ChannelLogo, Counter } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Cursor, Packet, Scene, Show, Swap, Tag, Widget, Wire } from "./kit";

/** Beats: 1 WhatsApp sent · 2 message lands · 3 customer taps · 4 checkout restored · 5 order placed · 6 reminders stop, total up. */
const CUES = [600, 1600, 2800, 3900, 5000, 6200];

const ITEMS = [
  { name: "Cotton kurti", img: "/merchants/merchant-boutique.webp", price: 1800 },
  { name: "Leather sandal", img: "/merchants/merchant-home-business.webp", price: 1400 },
];

/** A left cart, one reminder with a cart link, the order back, the rest of the sequence stopped. */
export function RecoveryScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} duration={9800} label={L(S.label)}>
      {(b) => (
        <>
          <Wire from={[210, 120]} to={[262, 236]} on={b >= 1} curve={-20} />
          <Packet from={[210, 120]} to={[262, 236]} on={b === 1} />

          {/* The cart, left and then restored */}
          <At x={18} y={30} w={196} z={10}>
            <Widget
              title={L(b >= 4 ? S.restored : S.cart)}
              icon={ShoppingCart}
              focus={b === 4 || b === 5}
              right={b >= 5 ? <Tag tone="success"><BadgeCheck className="size-3" /> {L(S.placed)}</Tag> : <Tag tone="warning"><Clock className="size-3" /> {L(S.ago)}</Tag>}
            >
              <ul className="space-y-1.5">
                {ITEMS.map((it) => (
                  <li key={it.name} className="flex items-center gap-2">
                    <Image src={it.img} alt="" width={64} height={64} className="size-8 rounded-lg object-cover" />
                    <span className="min-w-0 flex-1 truncate text-[11px] font-semibold">{it.name}</span>
                    <span className="text-[11px] tabular-nums text-gc-ink-60">{n(it.price, { money: true })}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex items-center justify-between border-t border-gc-line pt-2">
                <span className="text-[11px] text-gc-ink-60">{L(S.total)}</span>
                <span className="text-[15px] font-bold tabular-nums">{n(3200, { money: true })}</span>
              </div>
            </Widget>
          </At>

          {/* Follow-up sequence */}
          <At x={250} y={30} w={292} z={10}>
            <Widget title={L(S.followUp)} icon={Repeat}>
              <ol className="space-y-1.5">
                {S.steps.map((s, i) => {
                  const sent = i === 0 && b >= 1;
                  const stopped = i > 0 && b >= 6;
                  return (
                    <li key={i} className={cn("flex items-center gap-2 rounded-xl px-2 py-1.5 transition-colors duration-500", sent ? "bg-gc-success-10" : stopped ? "bg-gc-canvas opacity-60" : "bg-gc-canvas")}>
                      <span className="grid size-6 place-items-center rounded-full bg-white">
                        {i === 0 ? <ChannelLogo channel="whatsapp" size={13} /> : <span className="text-[9px] font-bold text-gc-ink-50">{i === 1 ? "SMS" : "@"}</span>}
                      </span>
                      <span className={cn("flex-1 text-[11px] font-medium", stopped && "line-through")}>{L(s.channel)}</span>
                      <Tag tone={sent ? "success" : stopped ? "neutral" : "warning"}>
                        {stopped && <CircleSlash className="size-3" />}
                        <Swap value={L(stopped ? S.stopped : i === 0 && !sent ? S.steps[1].sent : s.sent)} />
                      </Tag>
                    </li>
                  );
                })}
              </ol>
            </Widget>
          </At>

          {/* The message on the customer's phone */}
          <At x={262} y={204} w={200} z={20}>
            <Show on={b >= 2} from="up">
              <div className="rounded-[20px] bg-[#E7F8EE] p-2.5 shadow-[0_18px_40px_-22px_rgba(10,60,150,0.45)] ring-1 ring-[#CDEFD9]">
                <p className="flex items-center gap-1.5 text-[10px] font-semibold text-[#128C4B]">
                  <ChannelLogo channel="whatsapp" size={12} /> WhatsApp
                </p>
                <p className="mt-1.5 rounded-xl rounded-tl-sm bg-white px-2.5 py-2 text-[11px] leading-snug">{L(S.message)}</p>
                <span className={cn("mt-2 block rounded-full py-1.5 text-center text-[11px] font-semibold text-white transition-colors", b >= 3 ? "bg-gc-success" : "bg-[#25D366]")}>
                  {L(S.open)}
                </span>
              </div>
            </Show>
          </At>

          {/* Recovered */}
          <At x={18} y={262} w={210} z={10}>
            <Show on={b >= 5} from="right">
              <Widget tone="royal" title={L(S.recovered)} icon={TrendingUp} focus={b === 6}>
                <p className="text-[22px] font-bold leading-tight">
                  <Counter value={b >= 6 ? 48600 : 45400} prefix="৳" />
                </p>
                <p className="mt-1 text-[11px] text-white/80">+{n(3200, { money: true })} · #GC-1047</p>
              </Widget>
            </Show>
          </At>

          <Cursor x={360} y={b >= 3 ? 330 : 380} click={b === 3} show={b >= 2 && b <= 3} />
        </>
      )}
    </Scene>
  );
}
