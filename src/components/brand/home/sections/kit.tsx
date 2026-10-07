"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/cn";
import { ChannelLogo, type Channel } from "../hero/shared";

/**
 * Shared pieces for the homepage showcase sections: a scroll-started timeline,
 * the mixed-weight heading with inline chips, and the bento card surfaces.
 */

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */

/**
 * Plays a list of cue times once the element reaches mid-screen and returns
 * how many have passed. With `loop`, it starts over every `duration` ms while
 * visible; it stops when scrolled away. Reduced motion gets the final state.
 */
export function useTimeline(cues: number[], { duration, loop = true }: { duration: number; loop?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let timers: number[] = [];
    let running = false;
    const clear = () => {
      timers.forEach((t) => window.clearTimeout(t));
      timers = [];
    };
    const run = () => {
      clear();
      setBeat(0);
      cues.forEach((c, i) => timers.push(window.setTimeout(() => setBeat(i + 1), c)));
      if (loop) timers.push(window.setTimeout(run, duration));
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          run();
        } else if (!entry.isIntersecting && running) {
          running = false;
          clear();
        }
      },
      // Any part of it inside the middle half of the viewport: works for
      // sections taller than the screen, where a ratio threshold never fires.
      { rootMargin: "-25% 0px -25% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
    // cues are module constants
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, duration, loop]);

  return { ref, beat: reduced ? cues.length : beat };
}

/* ------------------------------------------------------------------ */
/* Heading                                                             */
/* ------------------------------------------------------------------ */

const CHIP_TONE = {
  royal: "bg-gc-royal text-white",
  sky: "bg-gc-sky text-white",
  accent: "bg-gc-accent text-white",
  ink: "bg-gc-ink text-white",
  soft: "bg-gc-royal-10 text-gc-royal",
} as const;

/** A rounded icon tile sized to sit inside a line of display type. */
export function IconChip({
  icon: Icon,
  tone = "royal",
  tilt = 0,
}: {
  icon: LucideIcon;
  tone?: keyof typeof CHIP_TONE;
  tilt?: number;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "mx-[0.12em] inline-grid size-[0.92em] translate-y-[0.1em] place-items-center rounded-[0.26em] align-baseline shadow-[0_0.18em_0.4em_-0.12em_rgba(17,24,39,0.35)]",
        CHIP_TONE[tone],
      )}
      style={{ rotate: `${tilt}deg` }}
    >
      <Icon className="size-[0.5em]" strokeWidth={2.4} />
    </span>
  );
}

/** Overlapping channel logos inside a line of display type. */
export function LogoChip({ channels }: { channels: Channel[] }) {
  return (
    <span aria-hidden className="mx-[0.12em] inline-flex translate-y-[0.08em] align-baseline">
      {channels.map((c, i) => (
        <span
          key={c}
          className="grid size-[0.86em] place-items-center rounded-full bg-white shadow-[0_0.12em_0.3em_-0.08em_rgba(17,24,39,0.35)] ring-[0.05em] ring-white"
          style={{ marginLeft: i ? "-0.22em" : 0, zIndex: channels.length - i }}
        >
          <ChannelLogo channel={c} size={22} className="size-[0.56em]!" />
        </span>
      ))}
    </span>
  );
}

/**
 * Section opener: a large two-tone heading (lead in ink, tail quieter) with an
 * inline chip, and the body set to its right on wide screens.
 */
export function SectionIntro({
  lead,
  chip,
  tail,
  body,
  aside,
  className,
}: {
  lead: ReactNode;
  chip?: ReactNode;
  tail: ReactNode;
  body: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-14", className)}>
      <h2 className="text-gc-h1 tracking-[-0.03em] text-gc-ink">
        {lead} {chip}
        <span className="text-gc-ink-50">{tail}</span>
      </h2>
      <div className="lg:pb-2">
        <p className="max-w-[34rem] text-gc-lead text-gc-ink-60">{body}</p>
        {aside}
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Surfaces                                                            */
/* ------------------------------------------------------------------ */

const BENTO = {
  plain: "bg-gc-canvas",
  tint: "bg-gradient-to-b from-gc-royal-10 to-white ring-1 ring-inset ring-gc-royal-20/70",
  sky: "bg-gradient-to-br from-gc-sky-10 via-white to-white ring-1 ring-inset ring-gc-sky-20",
  warm: "bg-gradient-to-br from-gc-accent-10 via-white to-white ring-1 ring-inset ring-gc-accent/15",
  white: "bg-white ring-1 ring-inset ring-gc-line",
  ink: "bg-gc-ink text-white",
} as const;

export type BentoTone = keyof typeof BENTO;

/** A bento cell: soft surface, generous radius, a small label and title. */
export function Bento({
  tone = "plain",
  label,
  title,
  icon: Icon,
  className,
  children,
}: {
  tone?: BentoTone;
  label?: ReactNode;
  title?: ReactNode;
  icon?: LucideIcon;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("relative flex flex-col overflow-hidden rounded-[28px] p-5 md:p-6", BENTO[tone], className)}>
      {(label || title) && (
        <div className="flex items-start gap-3">
          {Icon && (
            <span
              className={cn(
                "grid size-9 shrink-0 place-items-center rounded-xl",
                tone === "ink" ? "bg-white/10 text-gc-sky" : "bg-white text-gc-royal shadow-[0_6px_14px_-8px_rgba(17,24,39,0.35)] ring-1 ring-gc-line",
              )}
            >
              <Icon className="size-[18px]" strokeWidth={2} />
            </span>
          )}
          <div className="min-w-0">
            {label && (
              <p className={cn("text-gc-small font-semibold", tone === "ink" ? "text-white" : "text-gc-ink")}>{label}</p>
            )}
            {title && (
              <p className={cn("text-[0.8125rem] leading-snug", tone === "ink" ? "text-white/60" : "text-gc-ink-50")}>{title}</p>
            )}
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

/** Small "Demo data" stamp for a mockup. */
export function DemoStamp({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-full bg-white/90 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-gc-ink-50 ring-1 ring-gc-line",
        className,
      )}
    >
      {label}
    </span>
  );
}

export type { Channel };
