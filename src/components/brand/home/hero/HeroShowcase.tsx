"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import { MessageCircle, Pause, Play, Users, Workflow, type LucideIcon } from "lucide-react";
import { HERO_SHOWCASE } from "@/data/copy/heroShowcase";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { CUSTOMERS_CUES, CUSTOMERS_DURATION, CustomersSlide } from "./CustomersSlide";
import { INBOX_CUES, INBOX_DURATION, InboxSlide } from "./InboxSlide";
import { WORKFLOW_CUES, WORKFLOW_DURATION, WorkflowSlide } from "./WorkflowSlide";
import type { SlideProps } from "./shared";

type SlideId = keyof typeof HERO_SHOWCASE.slides;

/** Circumference of the progress ring round the play/pause button (r = 16). */
const RING = 2 * Math.PI * 16;

const SLIDES: {
  id: SlideId;
  icon: LucideIcon;
  cues: number[];
  duration: number;
  Slide: (props: SlideProps) => React.ReactNode;
}[] = [
  { id: "customers", icon: Users, cues: CUSTOMERS_CUES, duration: CUSTOMERS_DURATION, Slide: CustomersSlide },
  { id: "inbox", icon: MessageCircle, cues: INBOX_CUES, duration: INBOX_DURATION, Slide: InboxSlide },
  { id: "workflow", icon: Workflow, cues: WORKFLOW_CUES, duration: WORKFLOW_DURATION, Slide: WorkflowSlide },
];

/**
 * The mockups are drawn at one of three fixed sizes and scaled to fit. Keep in
 * step with the `aspect-[…]` classes on the stage box below.
 */
const STAGE = {
  wide: { w: 1120, h: 640 },
  compact: { w: 520, h: 720 },
  /** The hero's right column on large screens. */
  side: { w: 820, h: 600 },
};

/**
 * The hero's three-part product tour: Customers, the omnichannel inbox, and an
 * order travelling from checkout to the bank.
 *
 * One clock drives everything. Each slide lists cue times; the clock turns the
 * elapsed time into a `beat` (cues passed) and the slide draws itself from that
 * number, so a slide can be jumped to, paused and resumed without drifting.
 * The tour stops while it is off screen or the tab is hidden, holds on the last
 * frame while the pointer or focus is on it, and has a pause button (WCAG
 * 2.2.2). Under reduced motion it never advances on its own and each slide
 * shows its finished state.
 */
export function HeroShowcase() {
  const { L, t } = useI18n();
  const reduced = useReducedMotion() ?? false;
  const compact = useMediaQuery("(max-width: 767px)");
  const side = useMediaQuery("(min-width: 1280px)");
  const stage = compact ? STAGE.compact : side ? STAGE.side : STAGE.wide;
  const baseId = useId();

  const [active, setActive] = useState(0);
  const [beat, setBeat] = useState(0);
  const [userPaused, setUserPaused] = useState(false);

  const elapsed = useRef(0);
  const beatRef = useRef(0);
  const hold = useRef(false);
  const visible = useRef(true);
  const userPausedRef = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    userPausedRef.current = userPaused;
  }, [userPaused]);

  const go = useCallback((index: number) => {
    elapsed.current = 0;
    beatRef.current = 0;
    setBeat(0);
    setActive(index);
  }, []);

  /* The clock. */
  useEffect(() => {
    const slide = SLIDES[active];
    if (reduced) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      // Capped so a tab coming back from the background skips at most a second.
      const dt = Math.min(now - last, 1000);
      last = now;
      if (visible.current && !userPausedRef.current) {
        // While held, run the slide to its end but don't move on.
        elapsed.current = hold.current
          ? Math.min(elapsed.current + dt, slide.duration - 1)
          : elapsed.current + dt;
      }
      const e = elapsed.current;
      let b = 0;
      while (b < slide.cues.length && slide.cues[b] <= e) b++;
      if (b !== beatRef.current) {
        beatRef.current = b;
        setBeat(b);
      }
      const ring = ringRef.current;
      if (ring) ring.style.strokeDashoffset = String(RING * (1 - Math.min(1, e / slide.duration)));
      if (e >= slide.duration) {
        go((active + 1) % SLIDES.length);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reduced, go]);

  /* Pause while off screen or in a background tab. */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    let onScreen = true;
    const update = () => {
      visible.current = onScreen && document.visibilityState === "visible";
    };
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      update();
    });
    io.observe(el);
    document.addEventListener("visibilitychange", update);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  /* Scale the fixed-size stage to the available width. */
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);
  useLayoutEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const measure = () => setScale(el.clientWidth / stage.w);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [stage.w]);

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (i + delta + SLIDES.length) % SLIDES.length;
    go(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  const current = SLIDES[active];
  const copy = HERO_SHOWCASE.slides[current.id];
  const { Slide } = current;
  // Reduced motion: no clock, each slide shows its finished state.
  const shownBeat = reduced ? current.cues.length : beat;

  return (
    <div
      ref={rootRef}
      className="relative"
      onPointerEnter={() => (hold.current = true)}
      onPointerLeave={() => (hold.current = false)}
      onFocusCapture={() => (hold.current = true)}
      onBlurCapture={() => (hold.current = false)}
    >
      <p className="mb-2 flex justify-end">
        <span className="rounded-full bg-gc-canvas px-2.5 py-0.5 text-[0.6875rem] font-semibold text-gc-ink-50 ring-1 ring-inset ring-gc-line">
          {t.common.demoData}
        </span>
      </p>

      {/* Stage */}
      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`} className="relative">
        <div ref={boxRef} className="relative aspect-[520/720] w-full md:aspect-[1120/640] xl:aspect-[820/600]" aria-hidden>
          <div
            className="absolute left-0 top-0 origin-top-left transition-opacity duration-300"
            style={{
              width: stage.w,
              height: stage.h,
              transform: `scale(${scale ?? 1})`,
              opacity: scale === null ? 0 : 1,
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                className="absolute inset-0"
                initial={reduced ? false : { opacity: 0, y: 14, scale: 0.985, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={reduced ? undefined : { opacity: 0, y: -10, scale: 0.985, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: EASE.outQuart }}
              >
                <Slide beat={shownBeat} compact={compact} narrow={side} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Dock: play/pause with the slide's progress as its ring, then the tabs.
          It overlaps the window's lower edge like a media player's controls. */}
      <div className="relative z-10 -mt-6 flex justify-center px-2">
        <div className="flex items-center gap-1 rounded-full bg-white/95 p-1 shadow-[0_18px_40px_-16px_rgba(10,91,207,0.45),0_2px_6px_rgba(17,24,39,0.06)] ring-1 ring-gc-line backdrop-blur">
          {!reduced && (
            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-label={L(userPaused ? HERO_SHOWCASE.play : HERO_SHOWCASE.pause)}
              className="relative grid size-10 shrink-0 place-items-center rounded-full bg-gc-royal-10 text-gc-royal transition-colors hover:bg-gc-royal-20"
            >
              <svg viewBox="0 0 40 40" className="absolute inset-0 size-10 -rotate-90" aria-hidden>
                <circle cx="20" cy="20" r="16" fill="none" strokeWidth="2.5" className="stroke-gc-royal-20" />
                <circle
                  ref={ringRef}
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={RING}
                  strokeDashoffset={RING}
                  className="stroke-gc-royal"
                />
              </svg>
              {userPaused ? <Play className="relative size-3.5 fill-current" /> : <Pause className="relative size-3.5 fill-current" />}
            </button>
          )}

          <div role="tablist" aria-label={L(HERO_SHOWCASE.label)} className="flex items-center gap-0.5">
            {SLIDES.map((s, i) => {
              const selected = i === active;
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  id={`${baseId}-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => {
                    if (i !== active) {
                      go(i);
                      trackEvent("hero_tour_tab", { tab: s.id });
                    }
                  }}
                  onKeyDown={(e) => onTabKey(e, i)}
                  className={cn(
                    "relative flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full px-3 text-[0.8125rem] font-semibold transition-colors duration-200 sm:px-3.5",
                    selected ? "text-white" : "text-gc-ink-60 hover:bg-gc-canvas hover:text-gc-ink",
                  )}
                >
                  {selected && (
                    <motion.span
                      layoutId={`${baseId}-pill`}
                      className="absolute inset-0 rounded-full bg-gc-ink"
                      transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 460, damping: 38 }}
                    />
                  )}
                  <Icon className={cn("relative size-4 shrink-0", selected && "text-gc-sky")} />
                  <span className={cn("relative", !selected && "max-sm:sr-only")}>{L(HERO_SHOWCASE.slides[s.id].tab)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="mx-auto mt-3 min-h-[2.75rem] max-w-md px-4 text-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={current.id}
            initial={reduced ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: EASE.outQuart }}
            className="text-gc-small text-gc-ink-60"
          >
            <span className="font-semibold text-gc-ink">{L(copy.title)}.</span> {L(copy.caption)}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
