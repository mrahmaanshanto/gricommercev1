"use client";

import { useState, useSyncExternalStore } from "react";
import { Check, LayoutTemplate, RotateCcw, X } from "lucide-react";
import { HERO_VARIANTS } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { DEFAULT_HERO, HERO_COUNT, readHeroChoice, readPreviewEnabled, setHeroChoice, subscribePreview } from "./previewStore";

/**
 * Hero preview — a review tool, not part of the site. One button opens a
 * list of the homepage hero candidates; picking one swaps the hero on the
 * page and is remembered in this browser. Hero 9 is the default. On phones
 * the list opens as a bottom sheet. `?preview=off` hides the tool in a
 * browser and `?preview` brings it back. Fonts and colours are built in.
 */
export function HeroPreview() {
  const { L } = useI18n();
  const enabled = useSyncExternalStore(subscribePreview, readPreviewEnabled, () => false);
  const hero = useSyncExternalStore(subscribePreview, readHeroChoice, () => DEFAULT_HERO);
  const [open, setOpen] = useState(false);

  if (!enabled) return null;

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[110] inline-flex h-11 items-center gap-2 rounded-[12px] bg-gc-ink pl-3.5 pr-4 text-[0.8125rem] font-semibold text-white shadow-[0_12px_30px_-10px_rgba(17,24,39,0.6)] transition-colors hover:bg-gc-ink-70"
        >
          <LayoutTemplate className="size-4" />
          <span className="sm:hidden">Hero {hero === 0 ? "•" : hero}</span>
          <span className="hidden sm:inline">Hero preview · {L(HERO_VARIANTS.panel.options[hero])}</span>
        </button>
      )}

      {open && (
        <>
          <button type="button" aria-label="Close hero preview" onClick={() => setOpen(false)} className="fixed inset-0 z-[109] bg-gc-ink/20 sm:hidden" />
          <div
            role="dialog"
            aria-label="Hero preview"
            className="fixed inset-x-0 bottom-0 z-[110] flex max-h-[72dvh] flex-col overflow-hidden rounded-t-[20px] bg-white pb-[env(safe-area-inset-bottom)] text-gc-ink shadow-[0_-20px_60px_-20px_rgba(17,24,39,0.45)] ring-1 ring-gc-line sm:inset-x-auto sm:bottom-4 sm:right-4 sm:max-h-[min(600px,calc(100dvh-2rem))] sm:w-[360px] sm:rounded-[20px] sm:pb-0 sm:shadow-[0_30px_70px_-20px_rgba(17,24,39,0.45)]"
          >
            <div aria-hidden className="mx-auto mt-2 h-1 w-10 rounded-full bg-gc-line sm:hidden" />
            <div className="flex items-center gap-2 px-4 pb-2 pt-3">
              <LayoutTemplate className="size-4 text-gc-royal" />
              <p className="flex-1 text-[0.875rem] font-bold">Hero preview</p>
              <button type="button" onClick={() => setHeroChoice(DEFAULT_HERO)} className="inline-flex items-center gap-1 rounded-[10px] px-2.5 py-1 text-[0.75rem] font-semibold text-gc-royal hover:bg-gc-canvas">
                <RotateCcw className="size-3.5" /> Reset
              </button>
              <button type="button" aria-label="Close hero preview" onClick={() => setOpen(false)} className="grid size-8 place-items-center rounded-[10px] hover:bg-gc-canvas">
                <X className="size-4" />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto overscroll-contain px-2 pb-2">
              {Array.from({ length: HERO_COUNT }).map((_, i) => {
                const selected = i === hero;
                return (
                  <li key={i}>
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setHeroChoice(i)}
                      className={cn("flex w-full items-center gap-3 rounded-[12px] px-3 py-2.5 text-left transition-colors", selected ? "bg-gc-royal-10 ring-1 ring-gc-royal/30" : "hover:bg-gc-canvas")}
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-gc-canvas text-[0.8125rem] font-bold text-gc-ink-70">{i === 0 ? "•" : i}</span>
                      <span className="min-w-0 flex-1 text-[0.875rem] font-semibold">
                        {L(HERO_VARIANTS.panel.options[i])}
                        {i === DEFAULT_HERO && <span className="ml-2 rounded-full bg-gc-success-10 px-2 py-0.5 text-[0.6875rem] font-semibold text-gc-success">Default</span>}
                      </span>
                      {selected && <Check className="size-4 shrink-0 text-gc-royal" />}
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="border-t border-gc-line px-4 py-2.5 text-[0.75rem] text-gc-ink-50">Review tool. Add ?preview=off to the address to hide it.</p>
          </div>
        </>
      )}
    </>
  );
}
