"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, BellRing, CalendarClock, CalendarDays, MessageCircle, PenLine } from "lucide-react";
import { SOCIAL_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Avatar, ChannelLogo, type Channel } from "../hero/shared";
import { At, Cursor, Scene, Show, Swap, Tag, Widget, type Step } from "./kit";

/**
 * Beats: 1 the platforms are picked, each with its rule · 2 the date and time are set · 3 the post lands on the
 * calendar · 4 scheduled · 5 Friday 8 PM: published, one status per platform · 6 a comment arrives in the Inbox.
 * The post itself is written on the first frame.
 */
const CUES = [1000, 2200, 3300, 4400, 5700, 7000];
const STEPS: Step[] = S.steps.map((text, i) => ({ at: i, text }));

/* The places the panel's composer offers (lib/socialPosts.js › PLATS): six that post on their own, and WhatsApp
 * Channel, which gets a reminder with the text ready to copy. */
type Plat = { key: string; name: string; logo: string; reminder?: boolean };
const PLATS: Plat[] = [
  { key: "fb", name: "Facebook", logo: "facebook" },
  { key: "ig", name: "Instagram", logo: "instagram" },
  { key: "tt", name: "TikTok", logo: "tiktok" },
  { key: "yt", name: "YouTube", logo: "/integrations/youtube.png" },
  { key: "x", name: "X", logo: "/integrations/x.png" },
  { key: "li", name: "LinkedIn", logo: "/integrations/linkedin.png" },
  { key: "wac", name: "WA Channel", logo: "whatsapp", reminder: true },
];

function Logo({ p, size }: { p: Plat; size: number }) {
  if (p.logo.startsWith("/")) return <Image src={p.logo} alt="" width={size * 2} height={size * 2} style={{ width: size, height: size }} className="object-contain" />;
  return <ChannelLogo channel={p.logo as Channel} size={size} />;
}

/* Posts already on the week, by day: each dot is a planned post. */
const WEEK = [1, 0, 2, 1, 0, 1, 0];

/** One post, written once: picked platforms, a time, the calendar, published with a status each, a comment in the Inbox. */
export function SocialScene() {
  const { L } = useI18n();

  return (
    <Scene cues={CUES} steps={STEPS} label={L(S.label)} h={480}>
      {(b, compact) => {
        const scheduled = b >= 4;
        const published = b >= 5;
        return (
          <>
            {/* Composer */}
            <At x={18} y={24} w={246} z={10} order={1}>
              <Widget title={L(S.composer)} icon={PenLine} focus={b <= 2}>
                <div className="relative h-[60px] overflow-hidden rounded-xl">
                  <Image src="/merchants/merchant-electronics.webp" alt="" fill sizes="240px" className="object-cover" />
                </div>
                <p className="mt-2 min-h-[30px] text-[11px] leading-snug">
                  <motion.span initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ duration: 1, ease: "linear" }} className="inline-block">
                    {L(S.caption)}
                  </motion.span>
                </p>
                <p className="mt-2 text-[9.5px] font-semibold uppercase tracking-[0.06em] text-gc-ink-60">{L(S.where)}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  {PLATS.map((p, i) => (
                    <span
                      key={p.key}
                      className={cn("relative grid size-6 place-items-center rounded-full ring-1 transition-colors duration-300", b >= 1 ? "bg-white ring-gc-royal" : "bg-gc-canvas ring-gc-line")}
                      style={{ transitionDelay: `${i * 90}ms` }}
                    >
                      <Logo p={p} size={12} />
                      <Show on={b >= 1} from="pop" delay={i * 0.09} className="absolute -bottom-1 -right-1">
                        <span className={cn("grid size-3.5 place-items-center rounded-full text-white ring-2 ring-white", p.reminder ? "bg-gc-warning" : "bg-gc-royal")}>
                          {p.reminder ? <BellRing className="size-2" /> : <BadgeCheck className="size-2.5" />}
                        </span>
                      </Show>
                    </span>
                  ))}
                </div>
                <Show on={b >= 1} from="up">
                  <ul className="mt-2 space-y-0.5 text-[10px] leading-snug text-gc-ink-60">
                    {S.notes.map((t, i) => (
                      <li key={i}>· {L(t)}</li>
                    ))}
                  </ul>
                </Show>
                <span
                  className={cn(
                    "mt-2.5 flex items-center justify-center gap-1.5 rounded-full py-1.5 text-[11px] font-semibold transition-colors duration-300",
                    published ? "bg-gc-success text-white" : scheduled ? "bg-gc-royal text-white" : b >= 2 ? "bg-gc-ink text-white" : "bg-gc-canvas text-gc-ink-60",
                  )}
                >
                  {scheduled ? <BadgeCheck className="size-3.5" /> : <CalendarClock className="size-3.5" />}
                  <Swap value={published ? L(S.published) : scheduled ? L(S.scheduled) : b >= 2 ? `${L(S.schedule)} · ${L(S.when)}` : L(S.schedule)} />
                </span>
              </Widget>
            </At>

            {/* Calendar */}
            <At x={282} y={24} w={260} z={10} order={2}>
              <Widget title={L(S.calendar)} icon={CalendarDays} focus={b === 3 || b === 4}>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {S.days.map((d, i) => (
                    <div key={i} className={cn("rounded-lg py-1 transition-colors duration-500", i === 6 && b >= 3 ? "bg-gc-royal-10 ring-1 ring-gc-royal" : "bg-gc-canvas")}>
                      <p className="text-[9px] font-semibold text-gc-ink-50">{L(d)}</p>
                      <div className="mt-1 flex min-h-[30px] flex-col items-center gap-1">
                        {Array.from({ length: WEEK[i] }).map((_, k) => (
                          <span key={k} className={cn("h-1.5 w-5 rounded-full", ["bg-gc-sky", "bg-gc-accent"][k % 2])} />
                        ))}
                        {i === 6 && (
                          <Show on={b >= 3} from="down">
                            <span className={cn("block h-4 w-6 rounded-md shadow-[0_6px_12px_-6px_rgba(10,91,207,0.8)] transition-colors duration-500", published ? "bg-gc-success" : "bg-gc-royal")} />
                          </Show>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {/* The calendar entry, readable */}
                <Show on={b >= 3} from="up">
                  <div className="mt-2 flex items-center gap-2 rounded-xl bg-gc-royal-10 px-2.5 py-2">
                    <span className={cn("h-7 w-1 shrink-0 rounded-full transition-colors duration-500", published ? "bg-gc-success" : "bg-gc-royal")} />
                    <div className="min-w-0 flex-1 text-[10.5px] leading-snug">
                      <p className="truncate font-semibold text-gc-ink">{L(S.entry)}</p>
                      <p className="text-gc-ink-60">
                        {L(S.when)} · {L(S.platforms)}
                      </p>
                    </div>
                    <Tag tone={published ? "success" : "royal"}>
                      <Swap value={L(published ? S.published : S.scheduled)} />
                    </Tag>
                  </div>
                </Show>
              </Widget>
            </At>

            {/* Published: one status per platform */}
            <At x={282} y={196} w={260} z={10} order={3}>
              <Show on={published} from="up">
                <Widget title={L(S.results)} icon={BadgeCheck} focus={b === 5}>
                  <div className="grid grid-cols-2 gap-1">
                    {PLATS.map((p, i) => (
                      <Show key={p.key} on from="pop" delay={i * 0.07}>
                        <p className="flex items-center gap-1.5 rounded-lg bg-gc-canvas px-2 py-1 text-[10.5px] font-medium">
                          <Logo p={p} size={12} />
                          <span className="min-w-0 flex-1 truncate">{p.name}</span>
                          {p.reminder ? <BellRing className="size-3.5 shrink-0 text-gc-warning" /> : <BadgeCheck className="size-3.5 shrink-0 text-gc-success" />}
                        </p>
                      </Show>
                    ))}
                  </div>
                  <p className="mt-1.5 flex items-center gap-2 text-[9.5px] text-gc-ink-60">
                    <span className="inline-flex items-center gap-1">
                      <BadgeCheck className="size-3 text-gc-success" /> {L(S.published)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <BellRing className="size-3 text-gc-warning" /> {L(S.reminder)}
                    </span>
                  </p>
                </Widget>
              </Show>
            </At>

            {/* A comment comes to the Inbox */}
            <At x={282} y={364} w={260} z={10} order={4}>
              <Show on={b >= 6} from="up">
                <Widget title={L(S.inbox)} icon={MessageCircle} focus={b >= 6} right={<Tag tone="royal">1</Tag>}>
                  <div className="flex items-start gap-2">
                    <Avatar name={S.commenter} size={24} tone={2} />
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-1 text-[10px] text-gc-ink-60">
                        <b className="text-gc-ink">{S.commenter}</b> · <ChannelLogo channel="facebook" size={10} /> {L(S.onPost)}
                      </p>
                      <p className="mt-0.5 inline-block rounded-xl rounded-tl-sm bg-gc-canvas px-2.5 py-1 text-[11px]">{L(S.comment)}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-gc-ink px-2.5 py-1 text-[10px] font-semibold text-white">{L(S.reply)}</span>
                  </div>
                </Widget>
              </Show>
            </At>

            {/* The post flying to Friday */}
            {!compact && (
              <motion.span
                aria-hidden
                className="absolute left-0 top-0 z-40 h-5 w-8 rounded-md bg-gc-royal shadow-lg"
                initial={false}
                animate={b === 3 ? { x: [130, 512], y: [290, 90], opacity: [1, 1, 0] } : { x: 130, y: 290, opacity: 0 }}
                transition={{ duration: 1, ease: EASE.outQuart, delay: 0.2 }}
              />
            )}

            <Cursor x={b >= 2 ? 140 : 70} y={b >= 2 ? 296 : 196} click={b === 1 || b === 2} show={b >= 1 && b <= 2} />
          </>
        );
      }}
    </Scene>
  );
}
