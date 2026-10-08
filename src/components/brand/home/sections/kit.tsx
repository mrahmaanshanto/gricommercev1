"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { ChannelLogo, type Channel } from "../hero/shared";

/**
 * Shared pieces for the homepage sections: scroll-started timelines, the
 * two-tone heading with inline chips, bento surfaces, product windows and
 * locale-aware numbers.
 */

/* ------------------------------------------------------------------ */
/* Numbers                                                             */
/* ------------------------------------------------------------------ */

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";

export function toLocaleDigits(s: string, locale: string) {
  return locale === "bn" ? s.replace(/\d/g, (d) => BN_DIGITS[Number(d)]) : s;
}

/** Bangladeshi grouping (2,46,040), in Bangla digits when the page is in Bangla. */
export function useNum() {
  const { locale } = useI18n();
  return useCallback(
    (n: number, { money = false, sign = false }: { money?: boolean; sign?: boolean } = {}) => {
      const abs = Math.abs(n).toLocaleString("en-IN");
      return toLocaleDigits(`${n < 0 ? "−" : sign && n > 0 ? "+" : ""}${money ? "৳" : ""}${abs}`, locale);
    },
    [locale],
  );
}

/* ------------------------------------------------------------------ */
/* Timelines                                                           */
/* ------------------------------------------------------------------ */

/** True while any part of the element is in the middle band of the viewport. */
export function useOnScreen<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [onScreen, setOnScreen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { rootMargin: "-20% 0px -20% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, onScreen };
}

/**
 * Plays a list of cue times while the element is on screen and returns how
 * many have passed. With `loop` it starts over every `duration` ms; it stops
 * when scrolled away and restarts on return. Reduced motion: the final state.
 */
/** Timing factor for animated scenes on phones (0.6 = 40% faster). */
export const PHONE_SPEED = 0.6;

export function useTimeline(cues: number[], { duration, loop = true }: { duration: number; loop?: boolean }) {
  const { ref, onScreen } = useOnScreen<HTMLDivElement>();
  const reduced = useReducedMotion();
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    if (!onScreen || reduced) return;
    let timers: number[] = [];
    // Phones play every scene faster: less waiting on a small screen.
    const k = window.matchMedia("(max-width: 639px)").matches ? PHONE_SPEED : 1;
    const run = () => {
      timers.forEach((t) => window.clearTimeout(t));
      timers = [];
      setBeat(0);
      cues.forEach((c, i) => timers.push(window.setTimeout(() => setBeat(i + 1), c * k)));
      if (loop) timers.push(window.setTimeout(run, duration * k));
    };
    run();
    return () => timers.forEach((t) => window.clearTimeout(t));
    // cues are module constants
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScreen, reduced, duration, loop]);

  return { ref, beat: reduced ? cues.length : beat, reduced: !!reduced };
}

/* ------------------------------------------------------------------ */
/* Motion helpers                                                      */
/* ------------------------------------------------------------------ */

/** A value that slides in when it changes; its label stays put. */
export function ValueSwap({ value, className }: { value: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <span className={cn("relative inline-grid overflow-hidden align-bottom", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={String(value)}
          className="col-start-1 row-start-1"
          initial={reduced ? false : { y: "70%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduced ? undefined : { y: "-70%", opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE.outQuart }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Heading                                                             */
/* ------------------------------------------------------------------ */

/**
 * Splits a heading into a lead and a quieter tail without changing a word:
 * at the first sentence break (. ? । —) if there is one mid-way, otherwise
 * before the last part of the words.
 */
export function splitTitle(text: string): [string, string] {
  const m = text.match(/^(.+?[.?।—])\s+(.+)$/);
  if (m && m[2].length > 3) return [m[1], m[2]];
  const words = text.split(" ");
  if (words.length < 4) return [text, ""];
  const cut = Math.ceil(words.length * 0.55);
  return [words.slice(0, cut).join(" "), words.slice(cut).join(" ")];
}

const CHIP_TONE = {
  royal: "bg-gc-royal text-white",
  sky: "bg-gc-sky text-white",
  accent: "bg-gc-accent text-white",
  ink: "bg-gc-ink text-white",
} as const;

/** A rounded icon tile sized to sit inside a line of display type. */
export function IconChip({ icon: Icon, tone = "royal", tilt = 0 }: { icon: LucideIcon; tone?: keyof typeof CHIP_TONE; tilt?: number }) {
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

/** A two-tone section heading on its own (lead in ink, tail quieter, inline chip). */
export function TwoTone({ title, chip, size = "h2", className }: { title: string; chip?: ReactNode; size?: "h1" | "h2"; className?: string }) {
  const [lead, tail] = splitTitle(title);
  return (
    <h2 className={cn("tracking-[-0.03em] text-gc-ink", size === "h1" ? "text-gc-h1" : "text-gc-h2", className)}>
      {lead} {chip}
      {tail && <span className="text-gc-ink-50">{tail}</span>}
    </h2>
  );
}

/**
 * Section opener: a large two-tone heading (lead in ink, tail quieter) with an
 * inline chip, and the body set to its right on wide screens.
 */
export function SectionIntro({
  title,
  chip,
  body,
  eyebrow,
  aside,
  size = "h1",
  layout = "split",
  className,
}: {
  title: string;
  chip?: ReactNode;
  body?: ReactNode;
  eyebrow?: ReactNode;
  aside?: ReactNode;
  size?: "h1" | "h2";
  layout?: "split" | "stack" | "center";
  className?: string;
}) {
  const [lead, tail] = splitTitle(title);
  return (
    <Reveal
      className={cn(
        layout === "split" && "grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end lg:gap-14",
        layout === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <div>
        {eyebrow && (
          <p className="gc-eyebrow mb-5 inline-flex items-center gap-2 rounded-full bg-gc-royal-10 px-3 py-1.5 text-gc-eyebrow font-semibold uppercase text-gc-royal">
            <span aria-hidden className="size-1.5 rounded-full bg-gc-royal" />
            {eyebrow}
          </p>
        )}
        <h2 className={cn("tracking-[-0.03em] text-gc-ink", size === "h1" ? "text-gc-h1" : "text-gc-h2")}>
          {lead} {chip}
          {tail && <span className="text-gc-ink-50">{tail}</span>}
        </h2>
      </div>
      {(body || aside) && (
        <div className={cn(layout === "split" ? "lg:pb-2" : "mt-6")}>
          {body && <p className={cn("max-w-[34rem] text-gc-lead text-gc-ink-60", layout === "center" && "mx-auto")}>{body}</p>}
          {aside}
        </div>
      )}
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
    <div className={cn("relative flex min-w-0 flex-col overflow-hidden rounded-[20px] p-5 md:p-6", BENTO[tone], className)}>
      {(label || title) && (
        <div className="flex items-start gap-3 pr-20">
          {Icon && (
            <span
              className={cn(
                "grid size-9 shrink-0 place-items-center rounded-xl",
                tone === "ink" ? "bg-white/10 text-gc-sky" : "bg-white text-gc-royal shadow-[0_6px_14px_-8px_rgba(17,24,39,0.35)] ring-1 ring-gc-line",
              )}
            >
              <Icon aria-hidden className="size-[18px]" strokeWidth={2} />
            </span>
          )}
          <div className="min-w-0">
            {label && <p className={cn("text-gc-small font-semibold", tone === "ink" ? "text-white" : "text-gc-ink")}>{label}</p>}
            {title && <p className={cn("text-[0.8125rem] leading-snug", tone === "ink" ? "text-white/70" : "text-gc-ink-60")}>{title}</p>}
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

/** A product screen in a light browser frame. */
export function ProductWindow({
  path,
  children,
  className,
  bodyClassName,
}: {
  path: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-[20px] bg-white shadow-gc-screen ring-1 ring-gc-line", className)}>
      <div className="flex h-10 items-center gap-3 border-b border-gc-line bg-[#F8FAFC] px-4" aria-hidden>
        <div className="flex gap-1.5">
          <span className="size-[10px] rounded-full bg-[#FF5F57]" />
          <span className="size-[10px] rounded-full bg-[#FEBC2E]" />
          <span className="size-[10px] rounded-full bg-[#28C840]" />
        </div>
        <div className="mx-auto truncate rounded-md bg-white px-3 py-0.5 text-[0.6875rem] font-medium text-gc-ink-50 ring-1 ring-gc-line">
          app.gridcommerce.com.bd/{path}
        </div>
        <span className="w-[42px]" />
      </div>
      <div className={cn("bg-[#F6F7FB]", bodyClassName)}>{children}</div>
    </div>
  );
}

/** The "Demo data" stamp every illustrative figure carries. */
export function DemoStamp({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <span
      className={cn(
        "rounded-full bg-white/90 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-gc-ink-60 ring-1 ring-gc-line",
        className,
      )}
    >
      {t.common.demoData}
    </span>
  );
}

/** A labelled status pill. */
export function Pill({
  tone = "neutral",
  children,
  className,
}: {
  tone?: "neutral" | "royal" | "success" | "warning" | "danger" | "ai";
  children: ReactNode;
  className?: string;
}) {
  const tones = {
    neutral: "bg-[#F1F3F7] text-gc-ink-70",
    royal: "bg-gc-royal-10 text-gc-royal",
    success: "bg-gc-success-10 text-gc-success",
    warning: "bg-gc-warning-10 text-gc-warning",
    danger: "bg-gc-danger-10 text-gc-danger",
    ai: "bg-[#F1ECFE] text-[#6D3FD9]",
  } as const;
  return (
    <span className={cn("inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[0.75rem] font-semibold leading-none", tones[tone], className)}>
      {children}
    </span>
  );
}

export type { Channel };

/* ------------------------------------------------------------------ */
/* Section rhythm                                                      */
/* ------------------------------------------------------------------ */

/** Compact vertical rhythm for every homepage section. */
export const HOME_INNER = "py-12 md:py-16 lg:py-20";
