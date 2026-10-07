"use client";

import { useState, useSyncExternalStore } from "react";
import { ChevronDown, LayoutTemplate } from "lucide-react";
import { HERO_VARIANTS as V } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { BrandHero } from "../BrandHero";
import { HeroCentered } from "./variants/HeroCentered";
import { HeroMarker } from "./variants/HeroMarker";
import { HeroPhones } from "./variants/HeroPhones";
import { HeroSpotlight } from "./variants/HeroSpotlight";
import { HeroTilt } from "./variants/HeroTilt";

/**
 * Hero preview — a review tool, not part of the design. Renders the hero the
 * reviewer picked from five candidate layouts (or the current one). The
 * picker shows in development, and on any deployment when the URL carries
 * `?hero` (remembered for the browser tab); visitors always get the current
 * hero. Once one is chosen, put it in BrandHome, delete the others and this
 * file.
 */

const HEROES = [BrandHero, HeroSpotlight, HeroTilt, HeroCentered, HeroMarker, HeroPhones];
const CHOICE_KEY = "gc.hero";
const SESSION_KEY = "gc.hero.panel";
const EVENT = "gc:hero";

const subscribe = (cb: () => void) => {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
};

function readEnabled() {
  try {
    if (new URLSearchParams(window.location.search).has("hero")) sessionStorage.setItem(SESSION_KEY, "1");
    return process.env.NODE_ENV !== "production" || sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function readChoice() {
  try {
    const q = new URLSearchParams(window.location.search).get("hero");
    if (q && /^[0-5]$/.test(q)) return Number(q);
    const v = Number(localStorage.getItem(CHOICE_KEY));
    return Number.isInteger(v) && v >= 0 && v < HEROES.length ? v : 0;
  } catch {
    return 0;
  }
}

export function HeroSwitch() {
  const enabled = useSyncExternalStore(subscribe, readEnabled, () => false);
  const stored = useSyncExternalStore(subscribe, readChoice, () => 0);
  const choice = enabled ? stored : 0;
  const Hero = HEROES[choice];

  return (
    <>
      <Hero key={choice} />
      {enabled && <Picker choice={choice} />}
    </>
  );
}

function Picker({ choice }: { choice: number }) {
  const { L } = useI18n();
  const [open, setOpen] = useState(true);

  const pick = (i: number) => {
    try {
      localStorage.setItem(CHOICE_KEY, String(i));
      const url = new URL(window.location.href);
      url.searchParams.set("hero", String(i));
      window.history.replaceState(null, "", url);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(EVENT));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-[95] w-[min(560px,calc(100vw-2rem))] -translate-x-1/2">
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-20px_rgba(17,24,39,0.45)] ring-1 ring-gc-line">
        <button type="button" onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-[0.8125rem] font-semibold text-gc-ink">
          <LayoutTemplate aria-hidden className="size-4 text-gc-royal" />
          {L(V.panel.title)} · {L(V.panel.options[choice])}
          <ChevronDown aria-hidden className={cn("ml-auto size-4 transition-transform", open ? "" : "rotate-180")} />
        </button>
        {open && (
          <div className="grid grid-cols-2 gap-1.5 border-t border-gc-line p-2 sm:grid-cols-3">
            {V.panel.options.map((o, i) => (
              <button
                key={i}
                type="button"
                aria-pressed={i === choice}
                onClick={() => pick(i)}
                className={cn(
                  "rounded-xl px-3 py-2 text-left text-[0.75rem] font-semibold transition-colors",
                  i === choice ? "bg-gc-royal text-white" : "bg-gc-canvas text-gc-ink-70 hover:text-gc-ink",
                )}
              >
                {L(o)}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
