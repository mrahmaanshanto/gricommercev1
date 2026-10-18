"use client";

import { BadgeCheck, Boxes, CircleSlash, Clock, Mail, Repeat, ShoppingCart, TrendingUp } from "lucide-react";
import { RECOVERY_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Avatar, ChannelLogo } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Cursor, Packet, Scene, Show, Swap, Tag, Widget, Wire, type Step } from "./kit";

/**
 * Beats: 1 nothing sent, the first reminder waits an hour · 2 an hour later, the two checks (consent, quiet hours)
 * · 3 the WhatsApp reminder is sent · 4 Mitu taps the link, the cart is back · 5 order placed · 6 the other
 * reminders are cancelled. The cart is on screen from the first frame.
 */
const CUES = [900, 2200, 3500, 4800, 6000, 7200];
const STEPS: Step[] = S.steps.map((text, i) => ({ at: i, text }));

/* A different customer and cart from the main story (see docs/homepage-storyboard.md). */
const ITEMS = [
  { name: "Magnetic Wireless Charger 15W", price: 1540 },
  { name: "Baseus Car Phone Holder", price: 1660 },
];
const TOTAL = 3200;

/** A left cart: a wait, two checks, one reminder with a cart link, the order back, the other reminders cancelled. */
export function RecoveryScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} steps={STEPS} label={L(S.label)}>
      {(b) => {
        const ordered = b >= 5;
        return (
          <>
            <Wire from={[347, 244]} to={[347, 256]} on={b >= 3} />
            <Packet from={[347, 244]} to={[347, 256]} on={b === 3} color="#25D366" />
            <Wire from={[222, 300]} to={[242, 330]} on={b >= 4} curve={-10} />
            <Packet from={[242, 330]} to={[222, 300]} on={b === 4} />

            {/* The cart, left and then restored */}
            <At x={18} y={24} w={204} z={10} order={1}>
              <Widget
                title={L(ordered ? S.placed : b >= 4 ? S.restored : S.cart)}
                icon={ShoppingCart}
                focus={b === 0 || b === 4 || b === 5}
                right={
                  <Tag tone={ordered ? "success" : b >= 2 ? "royal" : "warning"}>
                    {ordered ? <BadgeCheck className="size-3" /> : <Clock className="size-3" />}
                    <Swap value={L(ordered ? S.ordered : b >= 2 ? S.hourLater : b >= 1 ? S.inAnHour : S.justNow)} />
                  </Tag>
                }
              >
                <div className="flex items-center gap-2">
                  <Avatar name={S.customer} size={24} tone={2} />
                  <p className="text-[11.5px] font-semibold">{S.customer}</p>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {ITEMS.map((it) => (
                    <li key={it.name} className="flex items-center gap-2">
                      <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-gc-canvas text-gc-ink-50">
                        <Boxes className="size-3.5" />
                      </span>
                      <span className="min-w-0 flex-1 truncate text-[11px] font-medium">{it.name}</span>
                      <span className="text-[11px] tabular-nums text-gc-ink-60">{n(it.price, { money: true })}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex items-center justify-between border-t border-gc-line pt-2">
                  <span className="text-[11px] text-gc-ink-60">{L(S.total)}</span>
                  <span className="text-[15px] font-bold tabular-nums">{n(TOTAL, { money: true })}</span>
                </div>
              </Widget>
            </At>

            {/* The reminder plan for this cart */}
            <At x={242} y={24} w={300} z={10} order={2}>
              <Widget title={L(S.plan)} icon={Repeat} focus={(b >= 1 && b <= 3) || b === 6}>
                <ol className="space-y-1.5">
                  {S.reminders.map((t, i) => {
                    const first = i === 0;
                    const sent = first && b >= 3;
                    const cancelled = !first && b >= 6;
                    const status = first ? (b >= 3 ? S.sent : b === 2 ? S.checking : b === 1 ? S.due : S.waiting) : cancelled ? S.cancelled : S.waiting;
                    const tone = sent ? "success" : cancelled ? "neutral" : first && b === 2 ? "royal" : first && b === 1 ? "warning" : "neutral";
                    return (
                      <li
                        key={i}
                        className={cn(
                          "flex items-center gap-2 rounded-xl px-2 py-1.5 transition-colors duration-500",
                          sent ? "bg-gc-success-10" : first && (b === 1 || b === 2) ? "bg-gc-royal-10" : "bg-gc-canvas",
                          cancelled && "opacity-60",
                        )}
                      >
                        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white">
                          {i === 0 ? <ChannelLogo channel="whatsapp" size={13} /> : i === 1 ? <span className="text-[8.5px] font-bold text-gc-ink-50">SMS</span> : <Mail className="size-3 text-gc-ink-50" />}
                        </span>
                        <span className={cn("min-w-0 flex-1 truncate text-[11px] font-medium", cancelled && "line-through")}>{L(t)}</span>
                        <Tag tone={tone}>
                          {cancelled ? <CircleSlash className="size-3" /> : sent ? <BadgeCheck className="size-3" /> : first && b === 1 ? <Clock className="size-3" /> : null}
                          <Swap value={L(status)} />
                        </Tag>
                      </li>
                    );
                  })}
                </ol>
                {/* The checks before the send: consent and quiet hours */}
                <Show on={b >= 2} from="up">
                  <div className="mt-2 rounded-xl bg-gc-canvas px-2.5 py-2">
                    <p className="text-[9.5px] font-semibold uppercase tracking-[0.06em] text-gc-ink-60">{L(S.checks)}</p>
                    <ul className="mt-1 space-y-1 text-[10.5px] leading-snug">
                      <li className="flex items-center gap-1.5">
                        <BadgeCheck className="size-3.5 shrink-0 text-gc-success" /> {L(S.consent)}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <BadgeCheck className="size-3.5 shrink-0 text-gc-success" /> {L(S.quiet)}
                      </li>
                    </ul>
                  </div>
                </Show>
              </Widget>
            </At>

            {/* The message on Mitu's phone */}
            <At x={242} y={256} w={210} z={20} order={3}>
              <Show on={b >= 3} from="up">
                <div className="rounded-[20px] bg-[#E7F8EE] p-2.5 shadow-[0_18px_40px_-22px_rgba(10,60,150,0.45)] ring-1 ring-[#CDEFD9]">
                  <p className="flex items-center gap-1.5 text-[10px] font-semibold text-[#128C4B]">
                    <ChannelLogo channel="whatsapp" size={12} /> WhatsApp · {S.customer}
                  </p>
                  <p className="mt-1.5 rounded-xl rounded-tl-sm bg-white px-2.5 py-2 text-[10.5px] leading-snug">{L(S.message)}</p>
                  <span className={cn("mt-2 flex items-center justify-center gap-1 rounded-full py-1.5 text-[11px] font-semibold text-white transition-colors", b >= 4 ? "bg-gc-success" : "bg-[#25D366]")}>
                    {b >= 4 && <BadgeCheck className="size-3" />} {L(S.open)}
                  </span>
                </div>
              </Show>
            </At>

            {/* Recovered */}
            <At x={18} y={232} w={204} z={10} order={4}>
              <Show on={ordered} from="right">
                <Widget tone="royal" title={L(S.recovered)} icon={TrendingUp} focus={b >= 5}>
                  <p className="text-[15px] font-bold leading-tight">{L(S.recoveredOrder)}</p>
                  <p className="mt-1 text-[10px] leading-snug text-white/80">{L(S.basis)}</p>
                </Widget>
              </Show>
            </At>

            <Cursor x={347} y={b >= 4 ? 366 : 400} click={b === 4} show={b >= 3 && b <= 4} />
          </>
        );
      }}
    </Scene>
  );
}
