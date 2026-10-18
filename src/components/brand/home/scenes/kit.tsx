"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { createContext, useContext, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { MousePointer2, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { useI18n } from "@/i18n/provider";
import { SCENE_COMMON } from "@/data/copy/scenes";
import { SceneSteps, useScenePlayer, type Step } from "./player";

/*
 * Animated product scenes. Each scene is a short story about one order: cards arrive, a value changes, a status
 * flips. On a wide screen the scene is drawn on a fixed 560 × 440 canvas of widget cards and scaled to fit its
 * column. On a phone the same cards are laid out in one column at full size, in reading order, so nothing is tiny
 * (`compact`). Every scene runs through the player (player.tsx): autoplay on screen, captions for each step,
 * Prev / Pause / Next / Replay, a held final frame, and a static final state under reduced motion.
 */

export { W, H } from "./frame";
import { W, H, Backdrop, STAGE_CLASS } from "./frame";
export type { Step } from "./player";

const CompactCtx = createContext(false);
/** True when the scene is laid out as a column (phones). */
export const useCompact = () => useContext(CompactCtx);

/** Fits the canvas to the column width (or stacks it on phones) and runs the scene's timeline. */
export function Scene({
  cues,
  duration,
  steps,
  h = H,
  children,
  className,
  label,
}: {
  cues: number[];
  duration?: number;
  /** The captions, each from a beat onward; the first should be at 0. Without them the scene has no rail (legacy). */
  steps?: Step[];
  /** Canvas height for wide screens (the width is always 560). */
  h?: number;
  children: (beat: number, compact: boolean) => ReactNode;
  className?: string;
  label: string;
}) {
  const { L } = useI18n();
  const { ref, player, stepIndex } = useScenePlayer(cues, steps ?? [], { duration });
  const box = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // below 480px of column the desktop canvas would shrink its labels under 9px: lay the cards out instead
  const compact = width !== null && width < 480;
  const scale = width === null ? null : Math.min(1.25, width / W);
  const b = player.beat;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div ref={box} role="img" aria-label={label} className={cn(STAGE_CLASS, compact && "p-3")} style={compact ? undefined : { aspectRatio: `${W} / ${h}` }}>
        <Backdrop />
        <span className="absolute right-3 top-3 z-[70] rounded-full bg-white/90 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-gc-ink-60 ring-1 ring-gc-line">
          {L(SCENE_COMMON.example)}
        </span>
        <CompactCtx.Provider value={compact}>
          {compact ? (
            <div aria-hidden className="relative flex flex-col gap-2.5 pt-7">
              {children(b, true)}
            </div>
          ) : (
            <div
              aria-hidden
              className={cn("absolute left-0 top-0 origin-top-left transition-opacity duration-500", scale === null ? "opacity-0" : "opacity-100")}
              style={{ width: W, height: h, transform: `scale(${scale ?? 1})` }}
            >
              {children(b, false)}
            </div>
          )}
        </CompactCtx.Provider>
      </div>
      {steps && <SceneSteps steps={steps} player={player} stepIndex={stepIndex} />}
    </div>
  );
}

/**
 * Placement on the canvas, in canvas pixels. On phones the same element becomes a full-width row, ordered by its
 * `order` (or its `y`, so the reading order follows the vertical layout); `hide` leaves it out of the column.
 */
export function At({ x, y, w, z, order, hide, children, className, style }: { x: number; y: number; w?: number; z?: number; order?: number; hide?: boolean; children: ReactNode; className?: string; style?: CSSProperties }) {
  const compact = useCompact();
  if (compact) {
    if (hide) return null;
    return (
      <div className={cn("w-full", className)} style={{ order: order ?? y }}>
        {children}
      </div>
    );
  }
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

/** Shows its children from a beat onward (and hides them again when the scene restarts). In the column layout a hidden element takes no room. */
export function Show({ on, from = "up", delay = 0, children, className }: { on: boolean; from?: From; delay?: number; children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const compact = useCompact();
  const off = { opacity: 0, x: 0, y: 0, scale: 1, ...OFF[from] };
  if (compact) {
    return (
      <AnimatePresence initial={false}>
        {on && (
          <motion.div
            className={className}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0, marginTop: 0, overflow: "hidden" }}
            transition={reduced ? { duration: 0 } : { duration: 0.4, ease: EASE.outQuart, delay }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
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
  const compact = useCompact();
  if (compact) return null;
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
  const compact = useCompact();
  if (!on || reduced || compact) return null;
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
  const compact = useCompact();
  if (compact) return null;
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
