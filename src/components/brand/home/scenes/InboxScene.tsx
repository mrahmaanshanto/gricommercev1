"use client";

import Image from "next/image";
import { BadgeCheck, Boxes, Receipt, Send, Sparkles } from "lucide-react";
import { DEMO, INBOX_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Avatar, ChannelLogo } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Cursor, Packet, Scene, Show, Swap, Tag, Typing, Widget, Wire, type Step } from "./kit";

/** Beats: 1 message arrives · 2 stock beside the chat · 3 GridAI draft waits · 4 approved and sent · 5 Nusrat confirms · 6 order created. */
const CUES = [700, 1900, 3100, 4500, 5800, 7100];
const STEPS: Step[] = [
  { at: 0, text: S.steps[0] },
  { at: 2, text: S.steps[1] },
  { at: 3, text: S.steps[2] },
  { at: 4, text: S.steps[3] },
  { at: 5, text: S.steps[4] },
  { at: 6, text: S.steps[5] },
];
const OTHER = [
  { ch: "whatsapp", n: 2 },
  { ch: "instagram", n: 1 },
] as const;

/** One conversation becomes order GC-1042: the stock is beside the chat, GridAI drafts, a person approves and sends. */
export function InboxScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} steps={STEPS} label={L(S.label)}>
      {(b) => (
        <>
          <Wire from={[318, 150]} to={[340, 100]} on={b >= 2} curve={6} />
          <Packet from={[318, 150]} to={[340, 100]} on={b === 2} />
          <Wire from={[318, 352]} to={[340, 330]} on={b >= 6} />
          <Packet from={[318, 352]} to={[340, 330]} on={b === 6} color="var(--color-gc-success)" />

          {/* The other channels, as context only */}
          <At x={18} y={22} w={300} z={10} order={1}>
            <div className="flex items-center gap-1.5">
              <span className="rounded-full bg-gc-royal px-2.5 py-1 text-[10.5px] font-semibold text-white">
                <span className="inline-flex items-center gap-1">
                  <ChannelLogo channel="messenger" size={11} /> Messenger · {n(b >= 1 ? 1 : 0)} {L(S.unread)}
                </span>
              </span>
              {OTHER.map((o) => (
                <span key={o.ch} className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-gc-ink-60 ring-1 ring-gc-line">
                  <ChannelLogo channel={o.ch} size={11} /> {n(o.n)}
                </span>
              ))}
            </div>
          </At>

          {/* The conversation */}
          <At x={18} y={58} w={300} z={10} order={2}>
            <Widget className="min-h-[340px]" focus={b >= 1 && b <= 5}>
              <div className="flex items-center gap-2 border-b border-gc-line pb-2">
                <Avatar name={DEMO.customer} size={28} tone={1} />
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-semibold leading-tight">{DEMO.customer}</p>
                  <p className="flex items-center gap-1 text-[10px] text-gc-ink-60">
                    <ChannelLogo channel="messenger" size={10} /> Messenger · {L(S.pastOrders)}
                  </p>
                </div>
              </div>
              <div className="mt-2.5 flex flex-col gap-2">
                <Show on={b >= 1} from="up">
                  <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-gc-canvas px-3 py-2 text-[11.5px] leading-snug">{L(S.question)}</p>
                </Show>
                {b === 2 && <Typing />}
                <Show on={b === 3} from="up">
                  <div className="rounded-2xl bg-[#F6F2FF] p-2.5 ring-1 ring-[#E4D9FF]">
                    <p className="flex items-center gap-1 text-[10px] font-semibold text-[#6D3FD9]">
                      <Sparkles className="size-3" /> {L(S.aiLabel)}
                    </p>
                    <p className="mt-1 text-[11.5px] leading-snug">{L(S.aiReply)}</p>
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-gc-royal px-3 py-1 text-[10.5px] font-semibold text-white">
                      <Send className="size-3" /> {L(S.approve)}
                    </span>
                  </div>
                </Show>
                <Show on={b >= 4} from="up" className="self-end text-right">
                  <p className="w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-gc-royal px-3 py-2 text-left text-[11.5px] leading-snug text-white">{L(S.aiReply)}</p>
                  <p className="mt-0.5 text-[9.5px] text-gc-ink-50">{L(S.sentBy)}</p>
                </Show>
                <Show on={b >= 5} from="up">
                  <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-gc-canvas px-3 py-2 text-[11.5px] leading-snug">{L(S.yes)}</p>
                </Show>
              </div>
              <Show on={b >= 5} from="up" className="mt-3">
                <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-white transition-colors", b >= 6 ? "bg-gc-success" : "bg-gc-ink")}>
                  {b >= 6 ? <BadgeCheck className="size-3.5" /> : <Receipt className="size-3.5" />}
                  <Swap value={L(b >= 6 ? S.order : S.createOrder)} />
                </span>
              </Show>
            </Widget>
          </At>

          {/* Stock and price beside the chat */}
          <At x={340} y={58} w={202} z={10} order={3}>
            <Show on={b >= 2} from="left">
              <Widget title={L(S.stockCard)} icon={Boxes} focus={b === 2}>
                <div className="flex items-center gap-2">
                  <Image src="/merchants/merchant-electronics.webp" alt="" width={64} height={64} className="size-10 rounded-lg object-cover" />
                  <div className="min-w-0">
                    <p className="text-[16px] font-bold tabular-nums leading-tight">{n(DEMO.price, { money: true })}</p>
                    <p className="text-[11px] text-gc-success">
                      <span className="font-bold tabular-nums">{n(12)}</span> {L(S.inStock)}
                    </p>
                  </div>
                </div>
              </Widget>
            </Show>
          </At>

          {/* The order made from the chat */}
          <At x={340} y={300} w={202} z={20} order={4}>
            <Show on={b >= 6} from="left">
              <Widget title={L(S.order)} icon={Receipt} focus={b === 6}>
                <div className="flex items-center gap-2">
                  <Avatar name={DEMO.customer} size={24} tone={1} />
                  <p className="text-[11px] font-semibold">{DEMO.customer}</p>
                </div>
                <p className="mt-1.5 text-[11px] text-gc-ink-60">{L(S.orderLine)}</p>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className="text-[15px] font-bold tabular-nums">{n(DEMO.price, { money: true })}</p>
                  <Tag tone="success"><BadgeCheck className="size-3" /> {L(S.linked)}</Tag>
                </div>
              </Widget>
            </Show>
          </At>

          <Cursor x={b >= 5 ? 110 : 150} y={b >= 5 ? 372 : 262} click={b === 4 || b === 6} show={b >= 3 && b <= 6} />
        </>
      )}
    </Scene>
  );
}
