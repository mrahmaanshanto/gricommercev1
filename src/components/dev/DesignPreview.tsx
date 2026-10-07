"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { Check, LayoutTemplate, Palette as PaletteIcon, RotateCcw, SlidersHorizontal, Type, X } from "lucide-react";
import { HERO_VARIANTS } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { HERO_COUNT, readHeroChoice, readPreviewEnabled, setHeroChoice, subscribePreview } from "./previewStore";

/**
 * Design preview — a review tool, not part of the site.
 *
 * One button and one panel for everything the team is still choosing: the
 * homepage hero (five candidates or the current one), ten heading / body /
 * accent font pairings and six colour palettes. On phones the panel opens as a
 * bottom sheet. It is on by default while the design is being chosen;
 * `?preview=off` hides it in that browser and `?preview` shows it again.
 *
 * A palette overrides the `--color-gc-*` tokens (and the two blue-tinted
 * shadows); a font pair overrides the three `--gc-font-*` roles on <html>.
 * Both are remembered in this browser. Once choices are made, build them in
 * (next/font in app/layout.tsx, the tokens in globals.css, the hero in
 * BrandHome) and delete this folder and its line in the layout.
 */

type Pair = {
  id: string;
  name: string;
  heading: string;
  body: string;
  accent: string;
  feel: string;
};

const DEFAULT_ID = "jakarta-instrument";

const PAIRS: Pair[] = [
  { id: DEFAULT_ID, name: "Plus Jakarta Sans + Instrument Serif", heading: "var(--font-jakarta)", body: "var(--font-jakarta)", accent: "var(--font-instrument)", feel: "Soft, friendly, airy (built in)" },
  { id: "manrope-fraunces", name: "Manrope + Fraunces", heading: "'Manrope'", body: "'Manrope'", accent: "'Fraunces'", feel: "Precise, warm editorial accent" },
  { id: "intertight-instrument", name: "Inter Tight / Inter + Instrument Serif", heading: "'Inter Tight'", body: "'Inter'", accent: "var(--font-instrument)", feel: "Neutral, crisp, product-like" },
  { id: "outfit-dmserif", name: "Outfit + DM Serif Display", heading: "'Outfit'", body: "'Outfit'", accent: "'DM Serif Display'", feel: "Round, geometric, confident" },
  { id: "sora-newsreader", name: "Sora / DM Sans + Newsreader", heading: "'Sora'", body: "'DM Sans'", accent: "'Newsreader'", feel: "Wide, techy headings, calm body" },
  { id: "urbanist-playfair", name: "Urbanist + Playfair Display", heading: "'Urbanist'", body: "'Urbanist'", accent: "'Playfair Display'", feel: "Elegant, fashion-leaning" },
  { id: "figtree-instrument", name: "Figtree + Instrument Serif", heading: "'Figtree'", body: "'Figtree'", accent: "var(--font-instrument)", feel: "Clean, very readable, warm" },
  { id: "dmsans-dmserif", name: "DM Sans + DM Serif Display", heading: "'DM Sans'", body: "'DM Sans'", accent: "'DM Serif Display'", feel: "Balanced, low-contrast, steady" },
  { id: "bricolage-figtree", name: "Bricolage Grotesque / Figtree + Instrument Serif", heading: "'Bricolage Grotesque'", body: "'Figtree'", accent: "var(--font-instrument)", feel: "Characterful headings, plain body" },
  { id: "geist-newsreader", name: "Geist + Newsreader", heading: "'Geist'", body: "'Geist'", accent: "'Newsreader'", feel: "Modern, engineered, quiet" },
];

type Palette = {
  id: string;
  name: string;
  feel: string;
  /** Primary, its hover, two tints; secondary and two tints; accent and tint; page canvas; glow (r g b). */
  royal: [string, string, string, string];
  sky: [string, string, string];
  accent: [string, string];
  canvas: string;
  glow: string;
};

const DEFAULT_PALETTE = "brand-coral";

const PALETTES: Palette[] = [
  { id: DEFAULT_PALETTE, name: "Brand Blue + Coral", feel: "Logo blues with a warm coral spark (built in)", royal: ["#0A5BCF", "#084AA8", "#E7EFFA", "#CEDEF5"], sky: ["#18A7F5", "#E8F6FE", "#D1EDFD"], accent: ["#FF6B3D", "#FFF0EA"], canvas: "#F2F4F8", glow: "10 91 207" },
  { id: "indigo-amber", name: "Indigo Night + Amber", feel: "Deep indigo and violet, gold highlights", royal: ["#4F46E5", "#4338CA", "#EEF0FF", "#DCDDFE"], sky: ["#8B5CF6", "#F3EEFF", "#E6DBFE"], accent: ["#F59E0B", "#FFF7E6"], canvas: "#F4F4F9", glow: "79 70 229" },
  { id: "teal-sand", name: "Deep Teal + Sand", feel: "Calm, financial, warm off-white canvas", royal: ["#0F766E", "#115E59", "#E6F4F2", "#C9E8E4"], sky: ["#2DD4BF", "#E7FBF8", "#C8F4EC"], accent: ["#F97316", "#FFF1E7"], canvas: "#F5F4EF", glow: "15 118 110" },
  { id: "coral-ink", name: "Coral + Ink", feel: "Warm coral lead on cream, like the Cashly reference", royal: ["#C9461C", "#A93A17", "#FDEEE8", "#F9D9CC"], sky: ["#FB923C", "#FFF4EA", "#FEE3CC"], accent: ["#111827", "#F1F2F4"], canvas: "#FBF7F4", glow: "201 70 28" },
  { id: "emerald-lime", name: "Emerald + Lime", feel: "Fresh green with a lime pop, like Connectly", royal: ["#047857", "#065F46", "#E8F5EF", "#CBEADB"], sky: ["#84CC16", "#F4FBE6", "#E4F5C4"], accent: ["#0EA5E9", "#E6F6FD"], canvas: "#F4F6F1", glow: "4 120 87" },
  { id: "graphite-gold", name: "Graphite + Gold", feel: "Near-black and gold, quiet luxury", royal: ["#1F2937", "#111827", "#F1F2F4", "#E2E4E8"], sky: ["#C8A15A", "#FBF6EC", "#F3E7CC"], accent: ["#B7862F", "#FBF3E4"], canvas: "#F5F4F1", glow: "31 41 55" },
];

function applyPalette(p: Palette) {
  const root = document.documentElement.style;
  const vars: Record<string, string> = {
    "--color-gc-royal": p.royal[0],
    "--color-gc-royal-700": p.royal[1],
    "--color-gc-royal-10": p.royal[2],
    "--color-gc-royal-20": p.royal[3],
    "--color-gc-sky": p.sky[0],
    "--color-gc-sky-10": p.sky[1],
    "--color-gc-sky-20": p.sky[2],
    "--color-gc-accent": p.accent[0],
    "--color-gc-accent-10": p.accent[1],
    "--color-gc-canvas": p.canvas,
    "--shadow-gc-float": `0 20px 44px -16px rgb(${p.glow} / 0.32), 0 3px 8px rgba(17, 24, 39, 0.06)`,
    "--shadow-gc-screen": `0 44px 90px -36px rgb(${p.glow} / 0.42), 0 14px 30px -14px rgba(17, 24, 39, 0.16)`,
  };
  for (const [k, v] of Object.entries(vars)) {
    if (p.id === DEFAULT_PALETTE) root.removeProperty(k);
    else root.setProperty(k, v);
  }
}

const GOOGLE_FONTS =
  "https://fonts.googleapis.com/css2?" +
  [
    "Manrope:wght@400;500;600;700;800",
    "Fraunces:ital@1",
    "Inter+Tight:wght@600;700;800",
    "Inter:wght@400;500;600;700",
    "Outfit:wght@400;500;600;700;800",
    "DM+Serif+Display:ital@1",
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

const STORE_KEY = "gridcommerce.fontPair";
const PALETTE_KEY = "gridcommerce.palette";

function loadGoogleFonts() {
  if (document.getElementById("gc-font-tweak-css")) return;
  const link = document.createElement("link");
  link.id = "gc-font-tweak-css";
  link.rel = "stylesheet";
  link.href = GOOGLE_FONTS;
  document.head.appendChild(link);
}

function applyPair(pair: Pair) {
  const root = document.documentElement.style;
  if (pair.id === DEFAULT_ID) {
    root.removeProperty("--gc-font-heading");
    root.removeProperty("--gc-font-body");
    root.removeProperty("--gc-font-accent");
    return;
  }
  loadGoogleFonts();
  root.setProperty("--gc-font-heading", pair.heading);
  root.setProperty("--gc-font-body", pair.body);
  root.setProperty("--gc-font-accent", pair.accent);
}


type Tab = "hero" | "fonts" | "colours";
const TABS: { id: Tab; label: string; icon: typeof Type }[] = [
  { id: "hero", label: "Hero", icon: LayoutTemplate },
  { id: "fonts", label: "Fonts", icon: Type },
  { id: "colours", label: "Colours", icon: PaletteIcon },
];

export function DesignPreview() {
  const { L } = useI18n();
  const enabled = useSyncExternalStore(subscribePreview, readPreviewEnabled, () => false);
  const hero = useSyncExternalStore(subscribePreview, readHeroChoice, () => 0);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("hero");
  const [index, setIndex] = useState(0);
  const [paletteIndex, setPaletteIndex] = useState(0);

  const choose = useCallback((i: number) => {
    setIndex(i);
    applyPair(PAIRS[i]);
    try {
      localStorage.setItem(STORE_KEY, PAIRS[i].id);
    } catch {}
  }, []);

  const choosePalette = useCallback((i: number) => {
    setPaletteIndex(i);
    applyPalette(PALETTES[i]);
    try {
      localStorage.setItem(PALETTE_KEY, PALETTES[i].id);
    } catch {}
  }, []);

  /* Re-apply the remembered pair and palette when the tool is on. */
  useEffect(() => {
    if (!enabled) return;
    let stored: string | null = null;
    let storedPalette: string | null = null;
    try {
      stored = localStorage.getItem(STORE_KEY);
      storedPalette = localStorage.getItem(PALETTE_KEY);
    } catch {}
    const i = PAIRS.findIndex((p) => p.id === stored);
    if (i > 0) {
      applyPair(PAIRS[i]);
      // Syncing the panel's selection to what was just applied to <html>.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIndex(i);
    }
    const j = PALETTES.findIndex((p) => p.id === storedPalette);
    if (j > 0) {
      applyPalette(PALETTES[j]);
      setPaletteIndex(j);
    }
  }, [enabled]);

  /* Load every face while the fonts list is open, so the samples render. */
  useEffect(() => {
    if (open && tab === "fonts") loadGoogleFonts();
  }, [open, tab]);

  if (!enabled) return null;

  const reset = () => {
    if (tab === "hero") setHeroChoice(0);
    else if (tab === "fonts") choose(0);
    else choosePalette(0);
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[110] inline-flex h-11 items-center gap-2 rounded-full bg-gc-ink pl-3.5 pr-4 text-[0.8125rem] font-semibold text-white shadow-[0_12px_30px_-10px_rgba(17,24,39,0.6)] transition-colors hover:bg-gc-ink-70"
        >
          <SlidersHorizontal className="size-4" />
          <span className="sm:hidden">Preview</span>
          <span className="hidden sm:inline">
            Design preview · Hero {hero === 0 ? "current" : hero} · Font {index + 1} · Colour {paletteIndex + 1}
          </span>
        </button>
      )}

      {open && (
        <>
          <button type="button" aria-label="Close design preview" onClick={() => setOpen(false)} className="fixed inset-0 z-[109] bg-gc-ink/20 sm:hidden" />
          <div
            role="dialog"
            aria-label="Design preview"
            className="fixed inset-x-0 bottom-0 z-[110] flex max-h-[72dvh] flex-col overflow-hidden rounded-t-[24px] bg-white pb-[env(safe-area-inset-bottom)] text-gc-ink shadow-[0_-20px_60px_-20px_rgba(17,24,39,0.45)] ring-1 ring-gc-line sm:inset-x-auto sm:bottom-4 sm:right-4 sm:max-h-[min(640px,calc(100dvh-2rem))] sm:w-[380px] sm:rounded-2xl sm:pb-0 sm:shadow-[0_30px_70px_-20px_rgba(17,24,39,0.45)]"
          >
            <div aria-hidden className="mx-auto mt-2 h-1 w-10 rounded-full bg-gc-line sm:hidden" />
            <div className="flex items-center gap-2 px-4 pb-2 pt-3">
              <SlidersHorizontal className="size-4 text-gc-royal" />
              <p className="flex-1 text-[0.875rem] font-bold">Design preview</p>
              <button type="button" onClick={reset} className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.75rem] font-semibold text-gc-royal hover:bg-gc-canvas">
                <RotateCcw className="size-3.5" /> Reset
              </button>
              <button type="button" aria-label="Close design preview" onClick={() => setOpen(false)} className="grid size-8 place-items-center rounded-full hover:bg-gc-canvas">
                <X className="size-4" />
              </button>
            </div>
            <div className="mx-4 mb-2 flex gap-1 rounded-full bg-gc-canvas p-1 text-[0.8125rem] font-semibold">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={cn("flex flex-1 items-center justify-center gap-1.5 rounded-full py-1.5", tab === t.id ? "bg-white text-gc-ink shadow-sm" : "text-gc-ink-50")}
                >
                  <t.icon className="size-3.5" /> {t.label}
                </button>
              ))}
            </div>

            <ul className="flex-1 overflow-y-auto overscroll-contain px-2 pb-2">
              {tab === "hero" &&
                Array.from({ length: HERO_COUNT }).map((_, i) => (
                  <li key={i}>
                    <Row selected={i === hero} onClick={() => setHeroChoice(i)}>
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gc-canvas text-[0.8125rem] font-bold text-gc-ink-70">{i === 0 ? "•" : i}</span>
                      <span className="min-w-0 flex-1 text-[0.875rem] font-semibold">{L(HERO_VARIANTS.panel.options[i])}</span>
                    </Row>
                  </li>
                ))}

              {tab === "fonts" &&
                PAIRS.map((pair, i) => (
                  <li key={pair.id}>
                    <Row selected={i === index} onClick={() => choose(i)}>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[1.125rem] font-extrabold leading-tight tracking-[-0.02em]" style={{ fontFamily: pair.heading }}>
                          Sales, stock.{" "}
                          <span className="font-normal italic" style={{ fontFamily: pair.accent }}>
                            Connected.
                          </span>
                        </span>
                        <span className="mt-0.5 block text-[0.75rem] text-gc-ink-60" style={{ fontFamily: pair.body }}>
                          {i + 1}. {pair.name} · {pair.feel}
                        </span>
                      </span>
                    </Row>
                  </li>
                ))}

              {tab === "colours" &&
                PALETTES.map((p, i) => (
                  <li key={p.id}>
                    <Row selected={i === paletteIndex} onClick={() => choosePalette(i)}>
                      <span className="flex shrink-0 -space-x-1.5">
                        {[p.royal[0], p.sky[0], p.accent[0], p.canvas].map((c, k) => (
                          <span key={k} className="size-7 rounded-full ring-2 ring-white" style={{ background: c }} />
                        ))}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.875rem] font-semibold">
                          {i + 1}. {p.name}
                        </span>
                        <span className="block text-[0.75rem] text-gc-ink-60">{p.feel}</span>
                      </span>
                    </Row>
                  </li>
                ))}
            </ul>
            <p className="border-t border-gc-line px-4 py-2.5 text-[0.75rem] text-gc-ink-50">Review tool while the design is chosen. Add ?preview=off to the address to hide it.</p>
          </div>
        </>
      )}
    </>
  );
}

function Row({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn("flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors", selected ? "bg-gc-royal-10 ring-1 ring-gc-royal/30" : "hover:bg-gc-canvas")}
    >
      {children}
      {selected && <Check className="size-4 shrink-0 text-gc-royal" />}
    </button>
  );
}
