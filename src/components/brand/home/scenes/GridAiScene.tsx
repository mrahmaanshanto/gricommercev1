"use client";

import { BadgeCheck, Boxes, Check, FileText, Languages, ShieldAlert, Sparkles, Truck, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DEMO, GRIDAI_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Avatar, ChannelLogo } from "../hero/shared";
import { At, Cursor, Packet, Scene, Show, Swap, Tag, Typing, Widget, Wire, type Step } from "./kit";

/**
 * One GridAI job, at night: 1 the question is understood · 2 live stock, price and delivery read (risk 1) · 3 a reply
 * drafted (risk 2) and, with Autopilot on for this chat, sent (risk 3) · 4 sent · 5 a discount above the limit asks the
 * owner (risk 4) · 6 declined in the morning, GridAI answers politely. Follows lib/gridai/engine.js: live data wins,
 * customer tools return public fields only, Autopilot per chat, discounts above the limit always go to approval.
 */
const CUES = [1000, 2300, 3700, 5100, 6600, 8200];
const STEPS: Step[] = S.steps.map((text, i) => ({ at: i, text }));

type TraceRow = { key: keyof typeof S.traceRows; on: number; level: 1 | 2 | 3 | 4; icon: LucideIcon; live?: boolean };
const TRACE: TraceRow[] = [
  { key: "understood", on: 1, level: 1, icon: Languages },
  { key: "stock", on: 2, level: 1, icon: Boxes, live: true },
  { key: "delivery", on: 2, level: 1, icon: Truck, live: true },
  { key: "draft", on: 3, level: 2, icon: FileText },
  { key: "decision", on: 4, level: 3, icon: Sparkles },
  { key: "policy", on: 5, level: 4, icon: ShieldAlert },
];

const LEVEL_TONE = ["", "bg-gc-royal", "bg-[#6D3FD9]", "bg-gc-success", "bg-gc-warning"];

/** The level GridAI is working at on a beat: 1 read · 2 draft · 3 switched-on send · 4 the owner's approval. */
function levelAt(b: number) {
  if (b >= 5) return 4;
  if (b === 4) return 3;
  if (b === 3) return 2;
  if (b >= 1) return 1;
  return 0;
}

/** Nusrat asks at night; GridAI answers from live data and asks the owner before a discount. */
export function GridAiScene() {
  const { L } = useI18n();

  return (
    <Scene cues={CUES} steps={STEPS} label={L(S.label)} h={580}>
      {(b) => {
        const declined = b >= 6;
        return (
          <>
            <Wire from={[318, 120]} to={[338, 100]} on={b >= 1} curve={6} />
            <Packet from={[318, 120]} to={[338, 100]} on={b === 1 || b === 2} />
            <Wire from={[318, 300]} to={[338, 318]} on={b >= 5} />
            <Packet from={[318, 300]} to={[338, 318]} on={b === 5} color="var(--color-gc-warning)" />

            {/* The conversation */}
            <At x={18} y={24} w={300} z={10} order={1}>
              <Widget className="min-h-[352px]" focus={b <= 0 || b === 4 || b === 6}>
                <div className="flex items-center gap-2 border-b border-gc-line pb-2">
                  <Avatar name={DEMO.customer} size={28} tone={1} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold leading-tight">{DEMO.customer}</p>
                    <p className="flex items-center gap-1 text-[10px] text-gc-ink-60">
                      <ChannelLogo channel="messenger" size={10} /> Messenger · {L(S.night)}
                    </p>
                  </div>
                  <Tag tone="ai">
                    <Sparkles className="size-3" /> {L(S.autopilotOn)}
                  </Tag>
                </div>
                <div className="mt-2.5 flex flex-col gap-2">
                  <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-gc-canvas px-3 py-2 text-[11.5px] leading-snug">{L(S.question)}</p>

                  {(b === 1 || b === 2) && <Typing />}

                  <Show on={b === 3} from="up">
                    <div className="rounded-2xl bg-[#F6F2FF] p-2.5 ring-1 ring-[#E4D9FF]">
                      <p className="flex items-center gap-1 text-[10px] font-semibold text-[#6D3FD9]">
                        <Sparkles className="size-3" /> {L(S.traceRows.draft)}
                      </p>
                      <p className="mt-1 text-[11.5px] leading-snug">{L(S.reply)}</p>
                    </div>
                  </Show>

                  <Show on={b >= 4} from="up" className="self-end text-right">
                    <p className="w-fit max-w-[88%] rounded-2xl rounded-tr-sm bg-gc-royal px-3 py-2 text-left text-[11.5px] leading-snug text-white">{L(S.reply)}</p>
                    <p className="mt-0.5 inline-flex items-center gap-1 text-[9.5px] text-gc-ink-50">
                      <Sparkles className="size-2.5 text-[#6D3FD9]" /> {L(S.sentBy)} · {L(S.sentAt)} · <span className="underline">{L(S.rate)}</span>
                    </p>
                  </Show>

                  <Show on={b >= 5} from="up">
                    <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-gc-canvas px-3 py-2 text-[11.5px] leading-snug">{L(S.askDiscount)}</p>
                  </Show>

                  <Show on={b === 5} from="up">
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gc-warning-10 px-2.5 py-1.5 text-[10.5px] font-semibold text-gc-warning ring-1 ring-gc-warning/20">
                      <ShieldAlert className="size-3" /> {L(S.approval)}
                    </span>
                  </Show>

                  <Show on={declined} from="up" className="self-end text-right">
                    <p className="w-fit max-w-[88%] rounded-2xl rounded-tr-sm bg-gc-royal px-3 py-2 text-left text-[11.5px] leading-snug text-white">{L(S.declineReply)}</p>
                    <p className="mt-0.5 inline-flex items-center gap-1 text-[9.5px] text-gc-ink-50">
                      <Sparkles className="size-2.5 text-[#6D3FD9]" /> {L(S.sentBy)} · {L(S.afterDecision)} · {L(S.morning)}
                    </p>
                  </Show>
                </div>
              </Widget>
            </At>

            {/* What GridAI did, step by step */}
            <At x={338} y={24} w={204} z={10} order={2}>
              <Show on={b >= 1} from="left">
                <Widget title={L(S.trace)} icon={Sparkles} focus={b >= 1 && b <= 3}>
                  <ul className="space-y-1.5">
                    {TRACE.map((r) => {
                      const I = r.icon;
                      return (
                        <Show key={r.key} on={b >= r.on} from="right">
                          <li className="flex items-start gap-1.5 text-[10.5px] leading-snug">
                            <span className={cn("mt-px grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold text-white", LEVEL_TONE[r.level])}>{r.level}</span>
                            <I className="mt-px size-3 shrink-0 text-gc-ink-50" />
                            <span className="min-w-0 flex-1 font-medium">
                              {L(S.traceRows[r.key])}
                              {r.live && <span className="ml-1 rounded-full bg-gc-success-10 px-1.5 py-px text-[9px] font-semibold text-gc-success">{L(S.live)}</span>}
                            </span>
                          </li>
                        </Show>
                      );
                    })}
                  </ul>
                </Widget>
              </Show>
            </At>

            {/* The approval the owner sees */}
            <At x={338} y={318} w={204} z={20} order={3}>
              <Show on={b >= 5} from="up">
                <Widget title={L(S.approval)} icon={ShieldAlert} focus={b >= 5} right={declined ? <Tag tone="neutral"><Swap value={`${L(S.declined)} · ${L(S.morning)}`} /></Tag> : <Tag tone="warning">{L(S.expires)}</Tag>}>
                  <p className="text-[11px] font-semibold leading-snug">{L(S.approvalBody)}</p>
                  <p className="mt-1 text-[10px] leading-snug text-gc-ink-60">{L(S.limit)}</p>
                  <div className="mt-2 grid grid-cols-2 gap-1.5 text-[10.5px] font-semibold">
                    <span className={cn("flex items-center justify-center gap-1 rounded-full py-1.5 ring-1 ring-gc-line transition-opacity duration-500", declined ? "opacity-40" : "bg-white text-gc-ink")}>
                      <Check className="size-3" /> {L(S.approve)}
                    </span>
                    <span className={cn("flex items-center justify-center gap-1 rounded-full py-1.5 text-white transition-colors duration-500", declined ? "bg-gc-ink" : "bg-gc-ink/70")}>
                      {declined ? <BadgeCheck className="size-3" /> : <X className="size-3" />} <Swap value={L(declined ? S.declined : S.decline)} />
                    </span>
                  </div>
                </Widget>
              </Show>
            </At>

            {/* The four levels, with the one in use lit */}
            <At x={18} y={500} w={300} z={10} order={4}>
              <div className="rounded-2xl bg-white/80 p-2.5 ring-1 ring-gc-line">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.06em] text-gc-ink-60">{L(S.levels)}</p>
                <ol className="mt-1.5 grid grid-cols-4 gap-1">
                  {S.risk.map((r, i) => {
                    const lv = i + 1;
                    const active = levelAt(b) === lv;
                    const passed = levelAt(b) > lv;
                    return (
                      <li key={i} className={cn("flex items-center gap-1 rounded-lg px-1.5 py-1 text-[9.5px] font-semibold leading-tight transition-colors duration-500", active ? "bg-gc-ink text-white" : passed ? "bg-gc-canvas text-gc-ink" : "text-gc-ink-50")}>
                        <span className={cn("grid size-3.5 shrink-0 place-items-center rounded-full text-[8px] font-bold text-white", active || passed ? LEVEL_TONE[lv] : "bg-gc-ink/20")}>{lv}</span>
                        <span className="min-w-0 truncate">{L(r)}</span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </At>

            <Cursor x={b >= 6 ? 490 : 440} y={b >= 6 ? 430 : 380} click={b === 6} show={b >= 5 && b <= 6} />
          </>
        );
      }}
    </Scene>
  );
}
