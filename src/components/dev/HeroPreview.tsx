"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Check, LayoutTemplate, RotateCcw, SlidersHorizontal, Type, X } from "lucide-react";
import { HERO_VARIANTS } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { DEFAULT_HERO, HERO_COUNT, readHeroChoice, readPreviewEnabled, setHeroChoice, subscribePreview } from "./previewStore";

/* ------------------------------------------------------------------ */
/* Font pairs. Pair 4 (Outfit + DM Serif Display) is built in through  */
/* next/font; the others are fetched from Google Fonts on demand.      */
/* ------------------------------------------------------------------ */

type Pair = { id: string; name: string; heading: string; body: string; accent: string; feel: string };

const DEFAULT_PAIR = 3;
const PAIRS: Pair[] = [
  { id: "jakarta-instrument", name: "Plus Jakarta Sans + Instrument Serif", heading: "'Plus Jakarta Sans'", body: "'Plus Jakarta Sans'", accent: "'Instrument Serif'", feel: "Soft, friendly, airy" },
  { id: "manrope-fraunces", name: "Manrope + Fraunces", heading: "'Manrope'", body: "'Manrope'", accent: "'Fraunces'", feel: "Precise, warm editorial accent" },
  { id: "intertight-instrument", name: "Inter Tight / Inter + Instrument Serif", heading: "'Inter Tight'", body: "'Inter'", accent: "'Instrument Serif'", feel: "Neutral, crisp, product-like" },
  { id: "outfit-dmserif", name: "Outfit + DM Serif Display", heading: "var(--font-outfit)", body: "var(--font-outfit)", accent: "var(--font-dm-serif)", feel: "Round, geometric, confident (built in)" },
  { id: "sora-newsreader", name: "Sora / DM Sans + Newsreader", heading: "'Sora'", body: "'DM Sans'", accent: "'Newsreader'", feel: "Wide, techy headings, calm body" },
  { id: "urbanist-playfair", name: "Urbanist + Playfair Display", heading: "'Urbanist'", body: "'Urbanist'", accent: "'Playfair Display'", feel: "Elegant, fashion-leaning" },
  { id: "figtree-instrument", name: "Figtree + Instrument Serif", heading: "'Figtree'", body: "'Figtree'", accent: "'Instrument Serif'", feel: "Clean, very readable, warm" },
  { id: "dmsans-dmserif", name: "DM Sans + DM Serif Display", heading: "'DM Sans'", body: "'DM Sans'", accent: "var(--font-dm-serif)", feel: "Balanced, low-contrast, steady" },
  { id: "bricolage-figtree", name: "Bricolage Grotesque / Figtree + Instrument Serif", heading: "'Bricolage Grotesque'", body: "'Figtree'", accent: "'Instrument Serif'", feel: "Characterful headings, plain body" },
  { id: "geist-newsreader", name: "Geist + Newsreader", heading: "'Geist'", body: "'Geist'", accent: "'Newsreader'", feel: "Modern, engineered, quiet" },
];

const GOOGLE_FONTS =
  "https://fonts.googleapis.com/css2?" +
  [
    "Plus+Jakarta+Sans:wght@400;500;600;700;800",
    "Instrument+Serif:ital@1",
    "Manrope:wght@400;500;600;700;800",
    "Fraunces:ital@1",
    "Inter+Tight:wght@600;700;800",
    "Inter:wght@400;500;600;700",
    "Sora:wght@600;700;800",
    "DM+Sans:wght@400;500;600;700;800",
    "Newsreader:ital@1",
    "Urbanist:wght@400;500;600;700;800",
    "Playfair+Display:ital@1",
    "Figtree:wght@400;500;600;700;800",
    "Bricolage+Grotesque:wght@600;700;800",
    "Geist:wght@400;500;600;700;800",
  ]
    .map((f) => `family=${f}`)
    .join("&") +
  "&display=swap";

const FONT_KEY = "gridcommerce.fontPair";

function loadGoogleFonts() {
  if (document.getElementById("gc-font-tweak-css")) return;
  const link = document.createElement("link");
  link.id = "gc-font-tweak-css";
  link.rel = "stylesheet";
  link.href = GOOGLE_FONTS;
  document.head.appendChild(link);
}

function applyPair(i: number) {
  const root = document.documentElement.style;
  if (i === DEFAULT_PAIR) {
    root.removeProperty("--gc-font-heading");
    root.removeProperty("--gc-font-body");
    root.removeProperty("--gc-font-accent");
    return;
  }
  const pair = PAIRS[i];
  loadGoogleFonts();
  root.setProperty("--gc-font-heading", pair.heading);
  root.setProperty("--gc-font-body", pair.body);
  root.setProperty("--gc-font-accent", pair.accent);
}

type Tab = "hero" | "fonts";

/**
 * Design preview — a review tool, not part of the site. One button opens two
 * tabs: Hero (the homepage hero candidates; hero 9 is the default) and Fonts
 * (ten pairings; pair 4, Outfit + DM Serif Display, is built in). A pick is
 * remembered in this browser only. On phones the panel opens as a bottom
 * sheet. `?preview=off` hides it in a browser and `?preview` brings it back.
 */
export function HeroPreview() {
  const { L } = useI18n();
  const enabled = useSyncExternalStore(subscribePreview, readPreviewEnabled, () => false);
  const hero = useSyncExternalStore(subscribePreview, readHeroChoice, () => DEFAULT_HERO);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("hero");
  const [pair, setPair] = useState(DEFAULT_PAIR);

  const choosePair = (i: number) => {
    setPair(i);
    applyPair(i);
    try {
      localStorage.setItem(FONT_KEY, PAIRS[i].id);
    } catch {}
  };

  /* Re-apply the remembered font pair when the tool is on. */
  useEffect(() => {
    if (!enabled) return;
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(FONT_KEY);
    } catch {}
    const i = PAIRS.findIndex((p) => p.id === stored);
    if (i >= 0 && i !== DEFAULT_PAIR) {
      applyPair(i);
      // Syncing the panel's selection to what was just applied to <html>.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPair(i);
    }
  }, [enabled]);

  /* Load every face while the fonts list is open, so the samples render. */
  useEffect(() => {
    if (open && tab === "fonts") loadGoogleFonts();
  }, [open, tab]);

  if (!enabled) return null;

  const reset = () => (tab === "hero" ? setHeroChoice(DEFAULT_HERO) : choosePair(DEFAULT_PAIR));

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[110] inline-flex h-11 items-center gap-2 rounded-[12px] bg-gc-ink pl-3.5 pr-4 text-[0.8125rem] font-semibold text-white shadow-[0_12px_30px_-10px_rgba(17,24,39,0.6)] transition-colors hover:bg-gc-ink-70"
        >
          <SlidersHorizontal className="size-4" />
          <span className="sm:hidden">Preview</span>
          <span className="hidden sm:inline">
            Design preview · Hero {hero === 0 ? "current" : hero} · Font {pair + 1}
          </span>
        </button>
      )}

      {open && (
        <>
          <button type="button" aria-label="Close design preview" onClick={() => setOpen(false)} className="fixed inset-0 z-[109] bg-gc-ink/20 sm:hidden" />
          <div
            role="dialog"
            aria-label="Design preview"
            className="fixed inset-x-0 bottom-0 z-[110] flex max-h-[72dvh] flex-col overflow-hidden rounded-t-[20px] bg-white pb-[env(safe-area-inset-bottom)] text-gc-ink shadow-[0_-20px_60px_-20px_rgba(17,24,39,0.45)] ring-1 ring-gc-line sm:inset-x-auto sm:bottom-4 sm:right-4 sm:max-h-[min(600px,calc(100dvh-2rem))] sm:w-[360px] sm:rounded-[20px] sm:pb-0 sm:shadow-[0_30px_70px_-20px_rgba(17,24,39,0.45)]"
          >
            <div aria-hidden className="mx-auto mt-2 h-1 w-10 rounded-full bg-gc-line sm:hidden" />
            <div className="flex items-center gap-2 px-4 pb-2 pt-3">
              <SlidersHorizontal className="size-4 text-gc-royal" />
              <p className="flex-1 text-[0.875rem] font-bold">Design preview</p>
              <button type="button" onClick={reset} className="inline-flex items-center gap-1 rounded-[10px] px-2.5 py-1 text-[0.75rem] font-semibold text-gc-royal hover:bg-gc-canvas">
                <RotateCcw className="size-3.5" /> Reset
              </button>
              <button type="button" aria-label="Close design preview" onClick={() => setOpen(false)} className="grid size-8 place-items-center rounded-[10px] hover:bg-gc-canvas">
                <X className="size-4" />
              </button>
            </div>
            <div className="mx-4 mb-2 flex gap-1 rounded-[12px] bg-gc-canvas p-1 text-[0.8125rem] font-semibold">
              {(
                [
                  ["hero", "Hero", LayoutTemplate],
                  ["fonts", "Fonts", Type],
                ] as const
              ).map(([id, label, Icon]) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={tab === id}
                  onClick={() => setTab(id)}
                  className={cn("flex flex-1 items-center justify-center gap-1.5 rounded-[9px] py-1.5", tab === id ? "bg-white text-gc-ink shadow-sm" : "text-gc-ink-50")}
                >
                  <Icon className="size-3.5" /> {label}
                </button>
              ))}
            </div>

            <ul className="flex-1 overflow-y-auto overscroll-contain px-2 pb-2">
              {tab === "fonts" &&
                PAIRS.map((p, i) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      aria-pressed={i === pair}
                      onClick={() => choosePair(i)}
                      className={cn("flex w-full items-center gap-3 rounded-[12px] px-3 py-2.5 text-left transition-colors", i === pair ? "bg-gc-royal-10 ring-1 ring-gc-royal/30" : "hover:bg-gc-canvas")}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block text-[1.125rem] font-extrabold leading-tight tracking-[-0.02em]" style={{ fontFamily: p.heading }}>
                          Sales, stock.{" "}
                          <span className="font-normal italic" style={{ fontFamily: p.accent }}>
                            Connected.
                          </span>
                        </span>
                        <span className="mt-0.5 block text-[0.75rem] text-gc-ink-60" style={{ fontFamily: p.body }}>
                          {i + 1}. {p.name} · {p.feel}
                        </span>
                      </span>
                      {i === DEFAULT_PAIR && <span className="shrink-0 rounded-full bg-gc-success-10 px-2 py-0.5 text-[0.6875rem] font-semibold text-gc-success">Default</span>}
                      {i === pair && <Check className="size-4 shrink-0 text-gc-royal" />}
                    </button>
                  </li>
                ))}
              {tab === "hero" && Array.from({ length: HERO_COUNT }).map((_, i) => {
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
