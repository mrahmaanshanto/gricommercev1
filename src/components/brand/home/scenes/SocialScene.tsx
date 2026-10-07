"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, CalendarDays, CalendarClock, MessageCircle, PenLine, Send, ThumbsUp } from "lucide-react";
import { SOCIAL_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Avatar, ChannelLogo, Counter } from "../hero/shared";
import { At, Cursor, Scene, Show, Tag, Toast, Widget } from "./kit";

/** Beats: 1 caption written · 2 channels picked · 3 schedule clicked · 4 lands on Friday · 5 published · 6 comment · 7 replied. */
const CUES = [500, 1500, 2600, 3600, 4800, 6000, 7200];
const CHANNELS = ["facebook", "instagram", "tiktok"] as const;
/* Posts already on the week, by day: each dot is a planned post. */
const WEEK = [1, 0, 2, 1, 0, 1, 0];

/** Write once, pick channels, schedule on the calendar, publish, answer comments. */
export function SocialScene() {
  const { L } = useI18n();

  return (
    <Scene cues={CUES} duration={10400} label={L(S.label)}>
      {(b) => (
        <>
          {/* Composer */}
          <At x={18} y={26} w={246} z={10}>
            <Widget title={L(S.composer)} icon={PenLine} focus={b >= 1 && b <= 3}>
              <div className="relative h-[92px] overflow-hidden rounded-xl">
                <Image src="/merchants/merchant-boutique.webp" alt="" fill sizes="240px" className="object-cover" />
              </div>
              <p className="mt-2 min-h-[32px] text-[11.5px] leading-snug">
                {b >= 1 ? (
                  <motion.span initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ duration: 0.9, ease: "linear" }} className="inline-block">
                    {L(S.caption)}
                  </motion.span>
                ) : (
                  <span className="text-gc-ink-50">…</span>
                )}
              </p>
              <div className="mt-2 flex items-center gap-1.5">
                {CHANNELS.map((c, i) => (
                  <span key={c} className={cn("relative grid size-7 place-items-center rounded-full ring-1 transition-colors duration-300", b >= 2 ? "bg-white ring-gc-royal" : "bg-gc-canvas ring-gc-line")} style={{ transitionDelay: `${i * 120}ms` }}>
                    <ChannelLogo channel={c} size={14} />
                    <Show on={b >= 2} from="pop" delay={i * 0.12} className="absolute -bottom-1 -right-1">
                      <span className="grid size-3.5 place-items-center rounded-full bg-gc-royal text-white ring-2 ring-white">
                        <BadgeCheck className="size-2.5" />
                      </span>
                    </Show>
                  </span>
                ))}
              </div>
              <span className={cn("mt-2.5 flex items-center justify-center gap-1.5 rounded-full py-1.5 text-[11px] font-semibold text-white transition-colors", b >= 4 ? "bg-gc-success" : "bg-gc-royal")}>
                {b >= 4 ? <BadgeCheck className="size-3.5" /> : <CalendarClock className="size-3.5" />} {L(S.schedule)} {L(S.when)}
              </span>
            </Widget>
          </At>

          {/* Calendar */}
          <At x={282} y={26} w={260} z={10}>
            <Widget title={L(S.calendar)} icon={CalendarDays} right={<Tag tone="ai">{L(S.best)} · 8 PM</Tag>}>
              <div className="grid grid-cols-7 gap-1 text-center">
                {S.days.map((d, i) => (
                  <div key={i} className={cn("rounded-lg py-1 transition-colors duration-500", i === 6 && b >= 4 ? "bg-gc-royal-10 ring-1 ring-gc-royal" : "bg-gc-canvas")}>
                    <p className="text-[9px] font-semibold text-gc-ink-50">{L(d)}</p>
                    <div className="mt-1 flex min-h-[34px] flex-col items-center gap-1">
                      {Array.from({ length: WEEK[i] }).map((_, k) => (
                        <span key={k} className={cn("h-1.5 w-5 rounded-full", ["bg-gc-sky", "bg-gc-accent"][k % 2])} />
                      ))}
                      {i === 6 && (
                        <Show on={b >= 4} from="down">
                          <span className="block h-4 w-6 rounded-md bg-gc-royal shadow-[0_6px_12px_-6px_rgba(10,91,207,0.8)]" />
                        </Show>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Widget>
          </At>

          {/* Published post */}
          <At x={282} y={176} w={260} z={10}>
            <Show on={b >= 5} from="up">
              <Widget focus={b >= 6}>
                <div className="flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-full bg-gc-ink text-[10px] font-bold text-white">GC</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11.5px] font-semibold leading-tight">Ayaan Fashion</p>
                    <p className="text-[10px] text-gc-ink-60">{L(S.when)}</p>
                  </div>
                  <div className="flex -space-x-1">
                    {CHANNELS.map((c) => (
                      <span key={c} className="grid size-5 place-items-center rounded-full bg-white ring-2 ring-white">
                        <ChannelLogo channel={c} size={12} />
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-[11px] leading-snug">{L(S.caption)}</p>
                <div className="mt-2 flex items-center gap-3 border-t border-gc-line pt-2 text-[10.5px] font-semibold text-gc-ink-60">
                  <span className="inline-flex items-center gap-1">
                    <ThumbsUp className="size-3.5 text-gc-royal" />
                    <Counter value={b >= 5 ? 128 : 0} duration={1.6} />
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="size-3.5" />
                    <Counter value={b >= 6 ? 14 : 0} duration={1} />
                  </span>
                </div>
                <div className="mt-2 space-y-1.5">
                  <Show on={b >= 6} from="up">
                    <div className="flex items-center gap-1.5">
                      <Avatar name="Rafi Ahmed" size={20} tone={2} />
                      <span className="rounded-xl bg-gc-canvas px-2.5 py-1 text-[11px]">{L(S.comment)}</span>
                    </div>
                  </Show>
                  <Show on={b >= 7} from="up">
                    <div className="flex items-center justify-end gap-1.5">
                      <span className="rounded-xl bg-gc-royal px-2.5 py-1 text-[11px] text-white">{L(S.reply)}</span>
                      <Tag tone="success">
                        <BadgeCheck className="size-3" /> {L(S.replied)}
                      </Tag>
                    </div>
                  </Show>
                </div>
              </Widget>
            </Show>
          </At>

          <At x={24} y={322} z={30}>
            <Toast on={b >= 5} icon={Send} tone="success">
              {L(S.published)}
            </Toast>
          </At>

          {/* Scheduled post flying to Friday */}
          <motion.span
            aria-hidden
            className="absolute left-0 top-0 z-40 h-5 w-8 rounded-md bg-gc-royal shadow-lg"
            initial={false}
            animate={b === 3 ? { x: [130, 512], y: [250, 92], opacity: [1, 1, 0] } : { x: 130, y: 250, opacity: 0 }}
            transition={{ duration: 1, ease: EASE.outQuart, delay: 0.5 }}
          />

          <Cursor x={b >= 3 ? 150 : 110} y={b >= 3 ? 262 : 230} click={b === 3} show={b >= 2 && b <= 3} />
        </>
      )}
    </Scene>
  );
}
