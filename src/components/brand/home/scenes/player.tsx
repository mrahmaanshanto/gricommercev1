"use client";

import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from "lucide-react";
import { SCENE_COMMON } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import type { Localized } from "@/i18n/types";
import { cn } from "@/lib/cn";
import { useOnScreen, PHONE_SPEED } from "../sections/kit";

/*
 * The scene player: one clock for every product scene, with the visitor in charge of it.
 *
 * - Autoplay while the scene is on screen, from the start; the final state is held for `hold` ms before it loops.
 * - Prev / Next jump between the scene's steps; Pause stops the clock; Replay starts over. Any manual step stops the
 *   autoplay until Replay, so a visitor can inspect a frame for as long as they like.
 * - Off screen the clock stops and nothing moves; back on screen a scene that nobody touched starts again.
 * - Reduced motion: the scene opens at its final state and the stepper still works (transitions are instant), so the
 *   whole story is readable without motion.
 */

export type Step = { at: number; text: Localized };

export type Player = {
  beat: number;
  playing: boolean;
  manual: boolean;
  reduced: boolean;
  go: (beat: number) => void;
  next: () => void;
  prev: () => void;
  toggle: () => void;
  replay: () => void;
};

export function useScenePlayer(cues: number[], steps: Step[], { duration, hold = 3200 }: { duration?: number; hold?: number }) {
  const { ref, onScreen } = useOnScreen<HTMLDivElement>();
  const reduced = !!useReducedMotion();
  const total = duration ?? cues[cues.length - 1] + hold;
  const [beat, setBeatState] = useState(reduced ? cues.length : 0);
  const [playing, setPlaying] = useState(!reduced);
  const [manual, setManual] = useState(false);
  const [cycle, setCycle] = useState(0); // bumped when a loop ends, so the clock effect schedules the next one
  const timers = useRef<number[]>([]);
  const beatRef = useRef(beat);
  const setBeat = useCallback((b: number) => {
    beatRef.current = b;
    setBeatState(b);
  }, []);

  const clear = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  // schedule the cues after the current beat, then the restart (the effect below picks the next loop up)
  const schedule = useCallback(
    (from: number) => {
      clear();
      const k = window.matchMedia("(max-width: 639px)").matches ? PHONE_SPEED : 1;
      const t0 = from > 0 ? cues[from - 1] : 0;
      cues.forEach((c, i) => {
        if (i + 1 > from) timers.current.push(window.setTimeout(() => setBeat(i + 1), (c - t0) * k));
      });
      timers.current.push(
        window.setTimeout(() => {
          setBeat(0);
          setCycle((n) => n + 1);
        }, (total - t0) * k),
      );
    },
    [clear, cues, total, setBeat],
  );

  useEffect(() => {
    if (!onScreen || !playing || reduced) {
      clear();
      return;
    }
    // a scene nobody touched starts from the beginning when it comes back into view
    const from = manual ? beatRef.current : 0;
    schedule(from);
    if (!manual && beatRef.current !== 0) timers.current.push(window.setTimeout(() => setBeat(0), 0));
    return clear;
  }, [onScreen, playing, reduced, manual, cycle, schedule, clear, setBeat]);

  const stepIndex = useMemo(() => {
    let idx = 0;
    steps.forEach((s, i) => {
      if (s.at <= beat) idx = i;
    });
    return idx;
  }, [steps, beat]);

  const go = useCallback(
    (b: number) => {
      clear();
      setManual(true);
      setPlaying(false);
      setBeat(Math.max(0, Math.min(cues.length, b)));
    },
    [clear, cues.length, setBeat],
  );
  const next = useCallback(() => {
    const n = steps[Math.min(steps.length - 1, stepIndex + 1)];
    go(n ? n.at : cues.length);
  }, [steps, stepIndex, go, cues.length]);
  const prev = useCallback(() => {
    const p = steps[Math.max(0, stepIndex - 1)];
    go(p ? p.at : 0);
  }, [steps, stepIndex, go]);
  const toggle = useCallback(() => {
    if (playing) {
      clear();
      setManual(true);
      setPlaying(false);
    } else {
      // resume from here: a finished scene starts over
      const at = beatRef.current >= cues.length ? 0 : beatRef.current;
      setBeat(at);
      setManual(true);
      setPlaying(true);
      if (!reduced) schedule(at);
    }
  }, [playing, clear, cues.length, reduced, schedule, setBeat]);
  const replay = useCallback(() => {
    clear();
    setBeat(0);
    setManual(false);
    setPlaying(true);
    if (!reduced) schedule(0);
  }, [clear, reduced, schedule, setBeat]);

  return { ref, player: { beat, playing, manual, reduced, go, next, prev, toggle, replay } as Player, stepIndex };
}

/** The caption of the current step and the controls, set under a scene. */
export function SceneSteps({ steps, player, stepIndex, className }: { steps: Step[]; player: Player; stepIndex: number; className?: string }) {
  const { L } = useI18n();
  const C = SCENE_COMMON;
  const last = stepIndex >= steps.length - 1;
  const first = stepIndex <= 0;
  return (
    <div className={cn("mt-3 flex flex-col gap-2.5 sm:mt-4", className)}>
      <div className="flex items-start justify-between gap-3">
        <p className="min-h-[2.75rem] flex-1 text-[0.9375rem] font-semibold leading-snug text-gc-ink sm:text-[1rem]" aria-live="polite">
          <span className="mr-2 inline-grid size-6 place-items-center rounded-full bg-gc-royal text-[0.75rem] font-bold text-white align-middle">{stepIndex + 1}</span>
          {L(steps[stepIndex].text)}
        </p>
        <div className="flex shrink-0 items-center gap-1" role="group" aria-label={L(C.controls)}>
          <Ctl onClick={player.prev} disabled={first} label={L(C.prev)}>
            <ChevronLeft className="size-4" />
          </Ctl>
          <Ctl onClick={player.toggle} label={L(player.playing ? C.pause : C.play)} active>
            {player.playing ? <Pause className="size-4" /> : <Play className="size-4 fill-current" />}
          </Ctl>
          <Ctl onClick={player.next} disabled={last} label={L(C.next)}>
            <ChevronRight className="size-4" />
          </Ctl>
          <Ctl onClick={player.replay} label={L(C.replay)}>
            <RotateCcw className="size-4" />
          </Ctl>
        </div>
      </div>
      <ol className="flex items-center gap-1.5" aria-label={L(C.steps)}>
        {steps.map((s, i) => (
          <li key={i} className="flex-1">
            <button
              type="button"
              onClick={() => player.go(s.at)}
              aria-label={`${i + 1}. ${L(s.text)}`}
              aria-current={i === stepIndex ? "step" : undefined}
              className={cn(
                "block h-2 w-full rounded-full transition-colors duration-300",
                i < stepIndex ? "bg-gc-royal/60" : i === stepIndex ? "bg-gc-royal" : "bg-gc-ink/10 hover:bg-gc-ink/20",
              )}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

function Ctl({ children, onClick, label, disabled, active }: { children: React.ReactNode; onClick: () => void; label: string; disabled?: boolean; active?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={cn(
        "grid size-9 place-items-center rounded-full transition-colors",
        active ? "bg-gc-ink text-white hover:bg-gc-royal" : "bg-white text-gc-ink ring-1 ring-gc-line hover:bg-gc-canvas",
        disabled && "cursor-default opacity-40 hover:bg-white",
      )}
    >
      {children}
    </button>
  );
}
