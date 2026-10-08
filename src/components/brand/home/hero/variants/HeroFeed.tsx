"use client";

import Image from "next/image";
import { Fragment } from "react";
import { HERO_VARIANTS as V } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { FeedCopy } from "../HomeHero";
import { Avatar } from "../shared";
import { useNum } from "../../sections/kit";

type Kind = keyof typeof V.feed.kinds;
const DOT: Record<Kind, string> = {
  confirmed: "bg-gc-royal",
  booked: "bg-gc-sky",
  delivered: "bg-gc-success",
  payout: "bg-gc-success",
  fake: "bg-[#D93636]",
  chat: "bg-[#8B5CF6]",
};

/* Four days of a shop's orders: who, what happened, when, how much. */
const FEED: { name: string; kind: Kind; time: string; amount: number; tone: number }[][] = [
  [
    { name: "Nusrat Jahan", kind: "confirmed", time: "10:12 AM", amount: 2450, tone: 0 },
    { name: "Rafi Ahmed", kind: "booked", time: "11:40 AM", amount: 2100, tone: 1 },
  ],
  [
    { name: "Mitu Das", kind: "chat", time: "2:05 PM", amount: 1250, tone: 2 },
    { name: "Sabbir Khan", kind: "fake", time: "3:30 PM", amount: 3800, tone: 3 },
  ],
  [{ name: "Pathao", kind: "payout", time: "11:00 AM", amount: 18400, tone: 1 }],
  [
    { name: "Farzana Karim", kind: "delivered", time: "4:15 PM", amount: 1700, tone: 0 },
    { name: "Tanvir Hasan", kind: "confirmed", time: "6:45 PM", amount: 2950, tone: 2 },
  ],
];


/**
 * Variant 6 — Live order feed. Calm light canvas; copy on the left with a
 * status pill, an inline icon chip in the headline, a dark and a light button,
 * and a proof row; on the right a day-by-day feed of the shop's orders that
 * scrolls up on its own in a slight 3D tilt (after the BookedUp reference).
 */
export function HeroFeed() {
  const { L } = useI18n();
  const n = useNum();
  const F = V.feed;

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[20px] bg-gradient-to-br from-white via-[#F7F8FA] to-[#EEF1F5]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 pb-10 pt-12 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pb-0 lg:pt-0">
          <FeedCopy pill />

          {/* The feed */}
          <div aria-hidden className="relative h-[440px] min-w-0 sm:h-[520px] lg:h-[640px] [perspective:1400px]">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)",
              }}
            >
              <div className="mx-auto w-full max-w-[340px] px-3 [transform:rotateX(6deg)_rotateY(-5deg)_rotateZ(1deg)] [transform-style:preserve-3d] sm:max-w-[380px] sm:px-0 lg:[transform:rotateX(10deg)_rotateY(-12deg)_rotateZ(2deg)]">
                <div className="gc-marquee-y flex flex-col gap-4 pb-4" style={{ ["--gc-marquee-duration" as string]: "26s" }}>
                  {[0, 1].map((copy) => (
                    <Fragment key={copy}>
                      {FEED.map((day, d) => (
                        <div key={`${copy}-${d}`} className="rounded-[20px] bg-white/80 p-3 shadow-[0_24px_50px_-28px_rgba(17,24,39,0.35)] ring-1 ring-black/[0.05] backdrop-blur">
                          <p className="flex items-center justify-between px-1 pb-2 text-[0.6875rem] font-bold tracking-[0.08em] text-gc-ink-50">
                            <span>{L(F.days[d].day)}</span>
                            <span className="font-medium">{L(F.days[d].date)}</span>
                          </p>
                          <ul className="space-y-2">
                            {day.map((o) => (
                              <li key={o.name} className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-gc-line/70">
                                {o.kind === "payout" ? (
                                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white ring-1 ring-gc-line">
                                    <Image src="/integrations/pathao.png" alt="" width={60} height={18} className="h-2.5 w-auto" />
                                  </span>
                                ) : (
                                  <Avatar name={o.name} size={36} tone={o.tone} />
                                )}
                                <span className="min-w-0 flex-1">
                                  <span className="flex items-center gap-1.5 truncate text-[0.8125rem] font-semibold text-gc-ink">
                                    <span className={cn("size-1.5 shrink-0 rounded-full", DOT[o.kind])} />
                                    {L(F.kinds[o.kind])}: {o.name.split(" ")[0]}
                                  </span>
                                  <span className="mt-0.5 block text-[0.6875rem] text-gc-ink-50">{o.time}</span>
                                </span>
                                <span className={cn("text-[0.8125rem] font-bold tabular-nums", o.kind === "fake" ? "text-[#D93636] line-through" : o.kind === "payout" ? "text-gc-success" : "text-gc-ink")}>
                                  {o.kind === "payout" ? "+" : ""}
                                  {n(o.amount, { money: true })}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
