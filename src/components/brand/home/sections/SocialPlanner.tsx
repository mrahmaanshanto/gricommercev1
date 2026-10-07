"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CalendarDays, CheckCheck, Clock3, Flame, ImageIcon, MessageCircle, PenLine, Sparkles } from "lucide-react";
import { SOCIAL_PLANNER } from "@/data/copy/showcase";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Panel } from "../../primitives";
import { Avatar, ChannelLogo, TypingDots, type Channel } from "../hero/shared";
import { Bento, DemoStamp, IconChip, SectionIntro, useTimeline } from "./kit";

/**
 * Beats: 1 caption · 2 image · 3 channels · 4 best time · 5 scheduled (lands on
 * the calendar) · 6 first comment · 7 reply drafted · 8 second comment ·
 * 9 replies sent.
 */
const CUES = [400, 1500, 2300, 3300, 4500, 5800, 6900, 8000, 9100];
const DURATION = 12500;

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIMES = ["10 AM", "3 PM", "8 PM"];

type Post = { day: number; slot: number; title: string; channels: Channel[]; tone: string };

const POSTS: Post[] = [
  { day: 0, slot: 0, title: "New arrivals", channels: ["facebook"], tone: "bg-[#E8F1FE]" },
  { day: 1, slot: 2, title: "Unboxing reel", channels: ["instagram"], tone: "bg-[#FDEBF2]" },
  { day: 2, slot: 1, title: "Charger test", channels: ["tiktok"], tone: "bg-[#EEF0F3]" },
  { day: 3, slot: 2, title: "Customer review", channels: ["facebook"], tone: "bg-[#E8F1FE]" },
  { day: 5, slot: 0, title: "Weekend offer", channels: ["instagram", "facebook"], tone: "bg-[#FDEBF2]" },
  { day: 6, slot: 1, title: "Live sale", channels: ["facebook"], tone: "bg-[#E8F1FE]" },
];
const NEW_POST: Post = { day: 4, slot: 2, title: "Eid drop", channels: ["facebook", "instagram", "tiktok"], tone: "bg-gc-accent-10" };

const CAPTION = "Eid drop is here 🌙 Redmi Note 13 at ৳23,999 with free delivery in Dhaka. Comment “price” and we’ll inbox you.";

/* Share of customers online, by day (rows) and time block (columns). */
const HEAT = [
  [1, 2, 2, 3, 4, 3],
  [1, 2, 3, 3, 4, 3],
  [1, 1, 2, 3, 3, 2],
  [1, 2, 2, 3, 4, 4],
  [2, 2, 3, 4, 5, 4],
  [2, 3, 3, 3, 4, 3],
  [2, 3, 2, 3, 4, 3],
];
const HEAT_TONES = ["bg-gc-royal-10", "bg-gc-royal-20", "bg-gc-royal/30", "bg-gc-royal/60", "bg-gc-royal"];

export function SocialPlanner() {
  const { L, t } = useI18n();
  const reduced = useReducedMotion();
  const { ref, beat } = useTimeline(CUES, { duration: DURATION });
  const scheduled = beat >= 5;
  const posts = scheduled ? [...POSTS, NEW_POST] : POSTS;
  const words = CAPTION.split(" ");

  return (
    <Panel tone="white" pattern={null}>
      <SectionIntro
        lead={L(SOCIAL_PLANNER.lead)}
        chip={<IconChip icon={CalendarDays} tone="royal" tilt={5} />}
        tail={L(SOCIAL_PLANNER.tail)}
        body={L(SOCIAL_PLANNER.body)}
      />

      <div ref={ref} className="mt-12 grid gap-4 lg:grid-cols-5">
        {/* Composer */}
        <Bento tone="warm" icon={PenLine} label={L(SOCIAL_PLANNER.cards.composer)} className="lg:col-span-2">
          <DemoStamp label={t.common.demoData} className="absolute right-5 top-5" />
          <div className="mt-5 flex flex-1 flex-col rounded-2xl bg-white p-4 ring-1 ring-gc-line">
            <p className="min-h-[4.5rem] text-[0.875rem] leading-relaxed text-gc-ink">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={false}
                  animate={{ opacity: beat >= 1 ? 1 : 0 }}
                  transition={{ duration: reduced ? 0 : 0.15, delay: reduced || beat < 1 ? 0 : i * 0.04 }}
                >
                  {w}{" "}
                </motion.span>
              ))}
            </p>

            <motion.div
              initial={false}
              animate={{ opacity: beat >= 2 ? 1 : 0, scale: beat >= 2 ? 1 : 0.94 }}
              transition={{ duration: reduced ? 0 : 0.4, ease: EASE.outQuart }}
              className="mt-3 flex items-center gap-3 rounded-xl bg-gc-canvas p-2"
            >
              <span className="grid size-12 place-items-center rounded-lg bg-gradient-to-br from-gc-royal to-gc-sky text-white">
                <ImageIcon className="size-5" />
              </span>
              <div className="text-[0.75rem]">
                <p className="font-semibold text-gc-ink">eid-drop-redmi.jpg</p>
                <p className="text-gc-ink-50">1080 × 1350 · fits every channel</p>
              </div>
            </motion.div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {(["facebook", "instagram", "tiktok"] as Channel[]).map((c, i) => (
                <motion.span
                  key={c}
                  initial={false}
                  animate={{ opacity: beat >= 3 ? 1 : 0.35 }}
                  transition={{ duration: reduced ? 0 : 0.25, delay: reduced || beat < 3 ? 0 : i * 0.18 }}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.75rem] font-medium ring-1",
                    beat >= 3 ? "bg-white text-gc-ink ring-gc-royal/40" : "bg-gc-canvas text-gc-ink-50 ring-gc-line",
                  )}
                >
                  <ChannelLogo channel={c} size={14} />
                  {c === "facebook" ? "Facebook" : c === "instagram" ? "Instagram" : "TikTok"}
                </motion.span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4">
              <motion.span
                initial={false}
                animate={{ opacity: beat >= 4 ? 1 : 0, x: beat >= 4 ? 0 : -6 }}
                transition={{ duration: reduced ? 0 : 0.35 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F1ECFE] px-2.5 py-1 text-[0.75rem] font-semibold text-[#6D3FD9]"
              >
                <Sparkles className="size-3.5" /> Fri 8:00 PM · your busiest hour
              </motion.span>
              <span
                className={cn(
                  "inline-flex h-9 items-center gap-1.5 rounded-full px-4 text-[0.8125rem] font-semibold transition-colors duration-300",
                  scheduled ? "bg-[#ECFDF5] text-[#047857]" : "bg-gc-ink text-white",
                )}
              >
                {scheduled ? (
                  <>
                    <CheckCheck className="size-4" /> Scheduled
                  </>
                ) : (
                  <>
                    <Clock3 className="size-4" /> Schedule
                  </>
                )}
              </span>
            </div>
          </div>
        </Bento>

        {/* Calendar */}
        <Bento tone="white" icon={CalendarDays} label={L(SOCIAL_PLANNER.cards.calendar)} title="6 – 12 Oct" className="shadow-gc-card lg:col-span-3">
          <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-gc-line">
            <div className="grid grid-cols-[3rem_repeat(7,minmax(0,1fr))] bg-gc-canvas text-[0.6875rem] font-semibold text-gc-ink-50">
              <span />
              {DAYS.map((d, i) => (
                <span key={d} className={cn("py-2 text-center", i === 4 && "text-gc-ink")}>
                  {d}
                </span>
              ))}
            </div>
            {TIMES.map((time, slot) => (
              <div key={time} className="grid grid-cols-[3rem_repeat(7,minmax(0,1fr))] border-t border-gc-line">
                <span className="flex items-start justify-end py-2 pr-2 text-[0.625rem] text-gc-ink-50">{time}</span>
                {DAYS.map((d, day) => {
                  const post = posts.find((p) => p.day === day && p.slot === slot);
                  const isNew = post === NEW_POST;
                  return (
                    <div key={d} className="min-h-[4.75rem] border-l border-gc-line p-1">
                      <AnimatePresence>
                        {post && (
                          <motion.div
                            initial={isNew && !reduced ? { opacity: 0, scale: 0.6, y: -24 } : false}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 380, damping: 26 }}
                            className={cn("h-full rounded-lg p-1.5", post.tone, isNew && "ring-2 ring-gc-accent")}
                          >
                            <div className="flex -space-x-1">
                              {post.channels.map((c) => (
                                <span key={c} className="grid size-4 place-items-center rounded-full bg-white ring-1 ring-white">
                                  <ChannelLogo channel={c} size={11} />
                                </span>
                              ))}
                            </div>
                            <p className="mt-1 hidden text-[0.6875rem] font-semibold leading-tight text-gc-ink sm:block">{post.title}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </Bento>

        {/* Comments */}
        <Bento tone="plain" icon={MessageCircle} label={L(SOCIAL_PLANNER.cards.comments)} title="On “Eid drop” · Facebook and Instagram" className="lg:col-span-3">
          <ul className="mt-5 space-y-3">
            <Comment
              show={beat >= 6}
              name="Farzana Karim"
              channel="facebook"
              text="Price koto? Dhaka te delivery charge ache?"
              reply="Assalamualaikum! ৳23,999, Dhaka te delivery free. Inbox e details pathalam 🙂"
              replyState={beat >= 9 ? "sent" : beat >= 7 ? "draft" : beat >= 6 ? "typing" : "none"}
              tone={0}
            />
            <Comment
              show={beat >= 8}
              name="@rumana.s"
              channel="instagram"
              text="Blue color ache?"
              reply="Ji, blue ache! Link inbox e dilam."
              replyState={beat >= 9 ? "sent" : beat >= 8 ? "typing" : "none"}
              tone={2}
            />
          </ul>
        </Bento>

        {/* Best time */}
        <Bento tone="tint" icon={Flame} label={L(SOCIAL_PLANNER.cards.bestTime)} title="Darker means more of your customers online" className="lg:col-span-2">
          <div className="mt-5 grid grid-cols-[2.25rem_repeat(6,minmax(0,1fr))] gap-1 text-[0.625rem] text-gc-ink-50">
            {HEAT.map((row, d) => (
              <div key={d} className="contents">
                <span className={cn("self-center", d === 4 && "font-semibold text-gc-ink")}>{DAYS[d]}</span>
                {row.map((v, c) => (
                  <motion.span
                    key={c}
                    initial={false}
                    animate={{ opacity: beat >= 1 ? 1 : 0.2 }}
                    transition={{ duration: reduced ? 0 : 0.3, delay: reduced || beat < 1 ? 0 : (d + c) * 0.03 }}
                    className={cn("h-6 rounded-md", HEAT_TONES[v - 1], d === 4 && c === 4 && "ring-2 ring-gc-accent ring-offset-1")}
                  />
                ))}
              </div>
            ))}
            <span />
            {["8a", "11a", "2p", "5p", "8p", "11p"].map((h) => (
              <span key={h} className="text-center">
                {h}
              </span>
            ))}
          </div>
        </Bento>
      </div>
    </Panel>
  );
}

function Comment({
  show,
  name,
  channel,
  text,
  reply,
  replyState,
  tone,
}: {
  show: boolean;
  name: string;
  channel: Channel;
  text: string;
  reply: string;
  replyState: "none" | "typing" | "draft" | "sent";
  tone: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.li
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
      transition={{ duration: reduced ? 0 : 0.4, ease: EASE.outQuart }}
      className="rounded-2xl bg-white p-3.5 ring-1 ring-gc-line"
    >
      <div className="flex items-start gap-3">
        <span className="relative">
          <Avatar name={name.replace("@", "")} size={32} tone={tone} />
          <span className="absolute -bottom-0.5 -right-0.5 rounded-full bg-white p-[1.5px]">
            <ChannelLogo channel={channel} size={11} />
          </span>
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[0.75rem] font-semibold text-gc-ink">{name}</p>
          <p className="text-[0.875rem] text-gc-ink">{text}</p>
          <div className="mt-2 min-h-[2.25rem]">
            {replyState === "typing" && (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F1ECFE] px-2.5 py-1 text-[0.75rem] font-medium text-[#6D3FD9]">
                <Sparkles className="size-3.5" /> Drafting a reply <TypingDots />
              </span>
            )}
            {(replyState === "draft" || replyState === "sent") && (
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "rounded-xl px-3 py-2 text-[0.8125rem]",
                  replyState === "sent" ? "bg-gc-royal text-white" : "bg-white text-gc-ink ring-2 ring-[#C9B5FA]",
                )}
              >
                {reply}
                <span className={cn("mt-1 flex items-center gap-1 text-[0.6875rem]", replyState === "sent" ? "text-white/75" : "text-[#6D3FD9]")}>
                  {replyState === "sent" ? (
                    <>
                      <CheckCheck className="size-3" /> Replied
                    </>
                  ) : (
                    <>
                      <Sparkles className="size-3" /> GridAI draft · tap to send
                    </>
                  )}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
}
