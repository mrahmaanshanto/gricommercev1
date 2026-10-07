"use client";

import { BadgeCheck, Inbox, Receipt, Send, Sparkles } from "lucide-react";
import { INBOX_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Avatar, ChannelLogo } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Cursor, Packet, Scene, Show, Swap, Tag, Toast, Typing, Widget } from "./kit";

/** Beats: 1 message arrives · 2 history + typing · 3 AI suggestion · 4 sent · 5 customer says yes · 6 order created · 7 toast. */
const CUES = [500, 1500, 2600, 3800, 5000, 6200, 7300];
const CHANNELS = ["messenger", "whatsapp", "instagram", "tiktok"] as const;

/** Four channels in one inbox; AI drafts the reply and the order is made from the chat. */
export function InboxScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} duration={10600} label={L(S.label)}>
      {(b) => (
        <>
          {/* Inbox list */}
          <At x={18} y={28} w={186} z={10}>
            <Widget title={L(S.inbox)} icon={Inbox} right={<Tag tone="royal"><Swap value={n(b >= 1 ? 4 : 3)} /></Tag>}>
              <ul className="space-y-1.5">
                {S.threads.map((t, i) => {
                  const fresh = i === 0;
                  const active = fresh && b >= 1;
                  return (
                    <Show key={i} on={!fresh || b >= 1} from="right" delay={fresh ? 0.05 : 0}>
                      <li className={cn("flex items-center gap-2 rounded-xl px-1.5 py-1.5 transition-colors duration-300", active ? "bg-gc-royal-10" : "")}>
                        <span className="relative">
                          <Avatar name={t.name} size={26} tone={i} />
                          <span className="absolute -bottom-0.5 -right-0.5 grid size-3.5 place-items-center rounded-full bg-white">
                            <ChannelLogo channel={CHANNELS[i]} size={10} />
                          </span>
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[11px] font-semibold">{t.name}</span>
                          <span className="block truncate text-[10px] text-gc-ink-60">{L(t.text)}</span>
                        </span>
                        {fresh && b >= 1 && b < 4 && <span className="size-2 rounded-full bg-gc-royal" />}
                      </li>
                    </Show>
                  );
                })}
              </ul>
            </Widget>
          </At>

          {/* Conversation */}
          <At x={218} y={28} w={324} z={10}>
            <Widget className="min-h-[300px]">
              <div className="flex items-center gap-2 border-b border-gc-line pb-2">
                <Avatar name="Farzana Karim" size={28} tone={0} />
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-semibold leading-tight">Farzana Karim</p>
                  <p className="flex items-center gap-1 text-[10px] text-gc-ink-60">
                    <ChannelLogo channel="messenger" size={10} /> Messenger
                  </p>
                </div>
                <Show on={b >= 2} from="pop">
                  <Tag tone="success">{L(S.history)}</Tag>
                </Show>
              </div>

              <div className="mt-2.5 flex flex-col gap-2">
                <Show on={b >= 1} from="up">
                  <p className="w-fit max-w-[80%] rounded-2xl rounded-tl-sm bg-gc-canvas px-3 py-2 text-[11.5px] leading-snug">{L(S.question)}</p>
                </Show>
                {b === 2 && <Typing />}
                <Show on={b === 3} from="up" className={b === 3 ? "" : "hidden"}>
                  <div className="rounded-2xl bg-[#F6F2FF] p-2.5 ring-1 ring-[#E4D9FF]">
                    <p className="flex items-center gap-1 text-[10px] font-semibold text-[#6D3FD9]">
                      <Sparkles className="size-3" /> {L(S.aiLabel)}
                    </p>
                    <p className="mt-1 text-[11.5px] leading-snug">{L(S.aiReply)}</p>
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-gc-royal px-3 py-1 text-[10.5px] font-semibold text-white">
                      <Send className="size-3" /> {L(S.send)}
                    </span>
                  </div>
                </Show>
                <Show on={b >= 4} from="up" className={b >= 4 ? "self-end" : "hidden"}>
                  <p className="w-fit max-w-[82%] rounded-2xl rounded-tr-sm bg-gc-royal px-3 py-2 text-[11.5px] leading-snug text-white">{L(S.aiReply)}</p>
                </Show>
                <Show on={b >= 5} from="up">
                  <p className="w-fit rounded-2xl rounded-tl-sm bg-gc-canvas px-3 py-2 text-[11.5px]">{L(S.yes)}</p>
                </Show>
              </div>

              <Show on={b >= 5} from="up" className="mt-2.5">
                <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors", b >= 6 ? "bg-gc-success text-white" : "bg-gc-ink text-white")}>
                  <Receipt className="size-3.5" /> {L(S.createOrder)}
                </span>
              </Show>
            </Widget>
          </At>

          {/* The order made from the chat */}
          <Packet from={[290, 352]} to={[150, 372]} on={b === 6} color="var(--color-gc-success)" />
          <At x={18} y={300} w={196} z={20}>
            <Show on={b >= 6} from="right">
              <Widget title={L(S.order)} icon={Receipt} focus={b === 6} right={<Tag tone="royal">{n(5000, { money: true })}</Tag>}>
                <p className="text-[11px] text-gc-ink-60">{L(S.orderLine)}</p>
                <p className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-gc-success">
                  <BadgeCheck className="size-3.5" /> COD · Mirpur
                </p>
              </Widget>
            </Show>
          </At>

          <At x={250} y={392} z={30}>
            <Toast on={b >= 7} icon={BadgeCheck} tone="success">
              {L(S.created)}
            </Toast>
          </At>

          <Cursor x={b >= 5 ? 300 : b >= 3 ? 268 : 470} y={b >= 5 ? 345 : b >= 3 ? 222 : 390} click={b === 3 || b === 5} show={b >= 3 && b <= 6} />
        </>
      )}
    </Scene>
  );
}
