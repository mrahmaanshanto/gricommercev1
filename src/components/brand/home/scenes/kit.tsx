"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { MousePointer2, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { useTimeline } from "../sections/kit";

/*
 * Animated product scenes. Each scene is drawn on a fixed 560 × 440 canvas of
 * small widget cards (the hero gallery's style) and scaled to fit its column,
 * so the composition is identical on a phone and a desktop. A scene is a
 * timeline of beats: cards arrive, values change, a cursor clicks, a toast
 * pops. It loops while on screen; reduced motion shows the final beat.
 */

export const W = 560;
export const H = 440;

/** Fits the 560 × 440 canvas to the column width and runs the scene's timeline. */
export function Scene({
  cues,
  duration,
  children,
  className,
  label,
}: {
  cues: number[];
  duration: number;
  children: (beat: number) => ReactNode;
  className?: string;
  label: string;
}) {
  const { ref, beat } = useTimeline(cues, { duration });
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(Math.min(1.25, e.contentRect.width / W)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("relative -mx-4 sm:mx-0", className)}>
      <div
        ref={box}
        role="img"
        aria-label={label}
        className="relative w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#EEF4FF] via-white to-[#EAF6FE] ring-1 ring-inset ring-gc-royal-20/60"
        style={{ aspectRatio: `${W} / ${H}` }}
      >
        <Backdrop />
        <div
          aria-hidden
          className={cn("absolute left-0 top-0 origin-top-left transition-opacity duration-500", scale === null ? "opacity-0" : "opacity-100")}
          style={{ width: W, height: H, transform: `scale(${scale ?? 1})` }}
        >
          {children(beat)}
        </div>
      </div>
    </div>
  );
}

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="gc-drift absolute -left-[15%] -top-[25%] size-[70%] rounded-full bg-gc-royal/10 blur-[70px]" />
      <div className="gc-drift absolute -bottom-[30%] -right-[10%] size-[70%] rounded-full bg-gc-sky/15 blur-[70px] [animation-delay:-7s]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(10,91,207,0.16) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(ellipse 75% 70% at 50% 45%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 50% 45%, black 20%, transparent 80%)",
        }}
      />
    </div>
  );
}

/** Absolute placement on the canvas, in canvas pixels. */
export function At({ x, y, w, z, children, className, style }: { x: number; y: number; w?: number; z?: number; children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={cn("absolute", className)} style={{ left: x, top: y, width: w, zIndex: z, ...style }}>
      {children}
    </div>
  );
}

type From = "up" | "down" | "left" | "right" | "pop";
const OFF: Record<From, { x?: number; y?: number; scale?: number }> = {
  up: { y: 14 },
  down: { y: -14 },
  left: { x: 18 },
  right: { x: -18 },
  pop: { scale: 0.85 },
};

/** Shows its children from a beat onward (and hides them again when the scene restarts). */
export function Show({ on, from = "up", delay = 0, children, className }: { on: boolean; from?: From; delay?: number; children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const off = { opacity: 0, x: 0, y: 0, scale: 1, ...OFF[from] };
  return (
    <motion.div
      className={className}
      initial={false}
      animate={on ? { opacity: 1, x: 0, y: 0, scale: 1 } : off}
      transition={reduced ? { duration: 0 } : { duration: 0.5, ease: EASE.outQuart, delay: on ? delay : 0 }}
    >
      {children}
    </motion.div>
  );
}

/** A widget card in the hero gallery's style. */
export function Widget({
  title,
  icon: Icon,
  right,
  tone = "white",
  focus,
  className,
  children,
}: {
  title?: ReactNode;
  icon?: LucideIcon;
  right?: ReactNode;
  tone?: "white" | "ink" | "royal";
  focus?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[18px] p-3 transition-shadow duration-500",
        tone === "white" && "bg-white text-gc-ink ring-1 ring-black/[0.05]",
        tone === "ink" && "bg-gc-ink text-white",
        tone === "royal" && "bg-gradient-to-br from-gc-royal to-gc-sky text-white",
        focus ? "shadow-[0_0_0_2px_var(--color-gc-royal),0_24px_44px_-22px_rgba(10,60,150,0.6)]" : "shadow-[0_18px_40px_-22px_rgba(10,60,150,0.45)]",
        className,
      )}
    >
      {(title || Icon) && (
        <div className={cn("flex items-center gap-1.5 text-[11px] font-semibold", tone === "white" ? "text-gc-ink-60" : "text-white/80")}>
          {Icon && <Icon className="size-3.5 shrink-0" />}
          <span className="min-w-0 flex-1 truncate">{title}</span>
          {right}
        </div>
      )}
      {children && <div className={cn(title || Icon ? "mt-2" : "")}>{children}</div>}
    </div>
  );
}

/** A pointer that glides to a canvas point and clicks when `click` turns true. */
export function Cursor({ x, y, click, show = true }: { x: number; y: number; click?: boolean; show?: boolean }) {
  return (
    <motion.div
      className="pointer-events-none absolute left-0 top-0 z-[60]"
      initial={false}
      animate={{ x, y, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.75, ease: EASE.outQuart }}
    >
      <AnimatePresence>
        {click && (
          <motion.span
            key={`${x}-${y}`}
            className="absolute -left-3 -top-3 size-6 rounded-full border-2 border-gc-royal"
            initial={{ scale: 0.3, opacity: 1 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          />
        )}
      </AnimatePresence>
      <MousePointer2 className="size-5 fill-white text-gc-ink drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]" />
    </motion.div>
  );
}

/** A small notification that drops in. */
export function Toast({ on, icon: Icon, children, tone = "ink" }: { on: boolean; icon: LucideIcon; children: ReactNode; tone?: "ink" | "success" | "danger" }) {
  return (
    <Show on={on} from="down">
      <div
        className={cn(
          "inline-flex items-center gap-2 whitespace-nowrap rounded-full py-1.5 pl-1.5 pr-3.5 text-[11.5px] font-semibold shadow-[0_14px_30px_-14px_rgba(0,0,0,0.5)]",
          tone === "ink" ? "bg-gc-ink text-white" : tone === "danger" ? "bg-[#D93636] text-white" : "bg-gc-success text-white",
        )}
      >
        <span className={cn("grid size-6 place-items-center rounded-full", tone === "ink" ? "bg-gc-royal" : "bg-white/20")}>
          <Icon className="size-3.5" />
        </span>
        {children}
      </div>
    </Show>
  );
}

/** A dot that travels from one canvas point to another, again and again while `on`. */
export function Packet({ from, to, on, color = "var(--color-gc-royal)", duration = 1.1, delay = 0 }: { from: [number, number]; to: [number, number]; on: boolean; color?: string; duration?: number; delay?: number }) {
  const reduced = useReducedMotion();
  if (!on || reduced) return null;
  return (
    <motion.span
      aria-hidden
      className="absolute left-0 top-0 z-[5] size-2.5 rounded-full"
      style={{ background: color, boxShadow: `0 0 0 4px color-mix(in srgb, ${color} 20%, transparent)` }}
      initial={{ x: from[0] - 5, y: from[1] - 5, opacity: 0 }}
      animate={{ x: [from[0] - 5, to[0] - 5], y: [from[1] - 5, to[1] - 5], opacity: [0, 1, 1, 0] }}
      transition={{ duration, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.25, delay }}
    />
  );
}

/** A dashed connector between two canvas points; the dashes run while `on`. */
export function Wire({ from, to, on, curve = 0 }: { from: [number, number]; to: [number, number]; on: boolean; curve?: number }) {
  const mx = (from[0] + to[0]) / 2;
  const my = (from[1] + to[1]) / 2 - curve;
  return (
    <svg aria-hidden className="pointer-events-none absolute inset-0 z-[1]" width={W} height={H}>
      <path
        d={`M ${from[0]} ${from[1]} Q ${mx} ${my} ${to[0]} ${to[1]}`}
        fill="none"
        stroke={on ? "var(--color-gc-royal)" : "rgba(10,91,207,0.2)"}
        strokeWidth={1.5}
        strokeDasharray="4 5"
        className={cn("transition-[stroke] duration-500", on && "gc-dash")}
      />
    </svg>
  );
}

/** A status pill. */
export function Tag({ tone = "neutral", children, className }: { tone?: "neutral" | "royal" | "success" | "warning" | "danger" | "ai"; children: ReactNode; className?: string }) {
  const tones = {
    neutral: "bg-[#F1F3F7] text-gc-ink-60",
    royal: "bg-gc-royal-10 text-gc-royal",
    success: "bg-gc-success-10 text-gc-success",
    warning: "bg-gc-warning-10 text-gc-warning",
    danger: "bg-[#FEF2F2] text-[#B91C1C]",
    ai: "bg-[#F1ECFE] text-[#6D3FD9]",
  };
  return <span className={cn("inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-[3px] text-[10.5px] font-semibold leading-none", tones[tone], className)}>{children}</span>;
}

/** A value that swaps with a short slide when it changes. */
export function Swap({ value, className }: { value: ReactNode; className?: string }) {
  return (
    <span className={cn("relative inline-grid overflow-hidden align-bottom", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={String(value)}
          className="col-start-1 row-start-1"
          initial={{ y: "70%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-70%", opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE.outQuart }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** A thin progress bar that fills to `value` (0–1). */
export function Bar({ value, className, tone = "royal" }: { value: number; className?: string; tone?: "royal" | "success" | "warning" }) {
  const tones = { royal: "bg-gc-royal", success: "bg-gc-success", warning: "bg-gc-warning" };
  return (
    <div className={cn("h-1.5 overflow-hidden rounded-full bg-gc-canvas", className)}>
      <motion.div className={cn("h-full rounded-full", tones[tone])} initial={false} animate={{ width: `${value * 100}%` }} transition={{ duration: 0.8, ease: EASE.outQuart }} />
    </div>
  );
}

/** A three-dot typing indicator. */
export function Typing() {
  return (
    <span className="inline-flex gap-1 rounded-xl rounded-tl-sm bg-white px-2.5 py-2 ring-1 ring-gc-line">
      {[0, 1, 2].map((i) => (
        <motion.span key={i} className="size-1.5 rounded-full bg-gc-ink-50" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }} />
      ))}
    </span>
  );
}
