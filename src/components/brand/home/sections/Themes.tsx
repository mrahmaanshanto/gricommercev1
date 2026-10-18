"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState, type CSSProperties } from "react";
import { ArrowRight, Check, LayoutTemplate, Menu, Monitor, Search, ShoppingBag, Smartphone } from "lucide-react";
import { Reveal } from "@/components/motion";
import { THEMES } from "@/data/copy/homepage";
import { DEMO } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Panel } from "../../primitives";
import { HOME_INNER, IconChip, TwoTone, useNum } from "./kit";

/*
 * Store themes as a selectable gallery: four theme cards; the chosen one re-draws the same small store (header, hero,
 * product card) in place and one line says who it suits. A computer / phone switch and a brand-colour row show that the
 * layout and the colour are separate choices. Keyboard reachable (buttons with aria-pressed); nothing scrolls by itself.
 * On phones the cards are a row that scrolls sideways and the preview sits under them.
 */

type ThemeId = (typeof THEMES.themes)[number]["id"];

/* How each theme draws the same shop. Accents follow the merchant app's presets (lib/storefront/presets.js, presetsPack.js). */
const LOOK: Record<ThemeId, { accent: string; soft: string; serif?: boolean; header: "light" | "dark" | "brand"; hero: "split" | "image" | "compact" | "banner"; cards: 1 | 2; radius: string; menuPills?: boolean }> = {
  signal: { accent: "#0070a0", soft: "#E6F3F8", header: "light", hero: "split", cards: 1, radius: "10px" },
  nokshi: { accent: "#7c3aed", soft: "#F1EAFE", serif: true, header: "light", hero: "image", cards: 1, radius: "2px" },
  counter: { accent: "#15803d", soft: "#E9F6EE", header: "brand", hero: "compact", cards: 2, radius: "8px" },
  rupkotha: { accent: "#7a1747", soft: "#FBEAF1", serif: true, header: "light", hero: "banner", cards: 1, radius: "16px", menuPills: true },
};

/* Brand colours the owner may put on any theme (Customize › colours). `null` keeps the theme's own. */
const SWATCHES: { id: string; hex: string | null }[] = [
  { id: "theme", hex: null },
  { id: "royal", hex: "#0A5BCF" },
  { id: "teal", hex: "#0E9F9F" },
  { id: "orange", hex: "#F26B1D" },
  { id: "red", hex: "#C2185B" },
  { id: "ink", hex: "#111827" },
];

export function Themes() {
  const { L } = useI18n();
  const reduced = !!useReducedMotion();
  const [theme, setTheme] = useState<ThemeId>("signal");
  const [view, setView] = useState<"desktop" | "phone">("desktop");
  const [swatch, setSwatch] = useState<string>("theme");

  const T = THEMES.themes.find((t) => t.id === theme) ?? THEMES.themes[0];
  const look = LOOK[T.id];
  const accent = SWATCHES.find((s) => s.id === swatch)?.hex ?? look.accent;

  return (
    <Panel id="themes" tone="white" pattern={null} inner={HOME_INNER}>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <Reveal className="min-w-0 lg:sticky lg:top-28">
          <p className="text-gc-eyebrow font-semibold uppercase tracking-[0.12em] text-gc-royal">{L(THEMES.eyebrow)}</p>
          <TwoTone className="mt-3" title={L(THEMES.title)} chip={<IconChip icon={LayoutTemplate} tone="accent" tilt={-6} />} />
          <p className="mt-5 text-gc-lead text-gc-ink-60">{L(THEMES.body)}</p>
          <ul className="mt-6 space-y-2.5">
            {THEMES.points.map((p, i) => (
              <li key={i} className="flex items-center gap-2.5 text-gc-body font-medium text-gc-ink">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-gc-royal-10 text-gc-royal">
                  <Check aria-hidden className="size-3" strokeWidth={3} />
                </span>
                {L(p)}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link href="/themes" className="inline-flex min-h-11 items-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline">
              {L(THEMES.gallery)}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link href="/features/storefront" className="inline-flex min-h-11 items-center gap-1.5 text-gc-small font-semibold text-gc-ink-60 underline-offset-4 hover:underline">
              {L(THEMES.link)}
            </Link>
          </div>
        </Reveal>

        <Reveal direction="left" className="min-w-0">
          {/* Theme cards: a row that scrolls on phones, four across from sm */}
          <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden" role="group" aria-label={L(THEMES.pick)}>
            {THEMES.themes.map((t) => {
              const lk = LOOK[t.id];
              const active = t.id === theme;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTheme(t.id)}
                  aria-pressed={active}
                  className={cn(
                    "w-[46%] shrink-0 snap-start rounded-2xl bg-white p-2.5 text-left ring-1 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 sm:w-auto",
                    active ? "ring-2 ring-gc-royal shadow-[0_18px_36px_-22px_rgba(10,60,150,0.55)]" : "ring-gc-line",
                  )}
                >
                  <ThemeSketch look={lk} />
                  <p className="mt-2 flex items-center justify-between gap-2 text-[0.875rem] font-semibold text-gc-ink">
                    {t.name}
                    <span className={cn("grid size-5 place-items-center rounded-full text-white transition-colors", active ? "bg-gc-royal" : "bg-gc-ink/10")}>
                      {active && <Check className="size-3" strokeWidth={3} />}
                    </span>
                  </p>
                </button>
              );
            })}
          </div>

          {/* Preview on · brand colour */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2" role="group" aria-label={L(THEMES.view.label)}>
              <ViewBtn active={view === "desktop"} onClick={() => setView("desktop")} icon={Monitor} label={L(THEMES.view.desktop)} />
              <ViewBtn active={view === "phone"} onClick={() => setView("phone")} icon={Smartphone} label={L(THEMES.view.phone)} />
            </div>
            <div className="flex items-center gap-2" role="group" aria-label={L(THEMES.colour)}>
              <span className="text-[0.75rem] font-semibold text-gc-ink-60">{L(THEMES.colour)}</span>
              {SWATCHES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSwatch(s.id)}
                  aria-pressed={swatch === s.id}
                  aria-label={s.hex ? s.hex : L(THEMES.colourDefault)}
                  title={s.hex ? s.hex : L(THEMES.colourDefault)}
                  className="grid size-10 place-items-center rounded-full"
                >
                  <span
                    className={cn("grid size-6 place-items-center rounded-full ring-2 ring-offset-2 ring-offset-white transition-[box-shadow]", swatch === s.id ? "ring-gc-ink" : "ring-transparent")}
                    style={{ background: s.hex ?? `conic-gradient(${look.accent} 0 50%, ${look.soft} 50% 100%)` }}
                  >
                    {swatch === s.id && <Check className={cn("size-3", s.hex === null ? "text-gc-ink" : "text-white")} strokeWidth={3} />}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* The same shop, drawn the chosen way */}
          <div className={cn("mt-4 flex justify-center rounded-[20px] bg-gc-canvas p-3 sm:p-5", view === "phone" && "min-h-[460px]")} role="img" aria-label={`${L(THEMES.alt)}: ${T.name}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${T.id}-${view}`}
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: EASE.outQuart }}
                className={cn("w-full", view === "phone" ? "max-w-[280px]" : "max-w-[640px]")}
              >
                <StoreMock look={look} accent={accent} phone={view === "phone"} />
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="mt-3 min-h-[2.5rem] text-[0.9375rem] font-medium leading-snug text-gc-ink" aria-live="polite">
            <span className="mr-2 inline-block size-2.5 rounded-full align-middle" style={{ background: accent }} aria-hidden />
            <span className="font-semibold">{T.name}.</span> {L(T.suits)}
          </p>
        </Reveal>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */

function ViewBtn({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: typeof Monitor; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex h-10 items-center gap-1.5 rounded-full px-3.5 text-[0.8125rem] font-semibold transition-colors",
        active ? "bg-gc-ink text-white" : "bg-gc-canvas text-gc-ink-70 hover:bg-gc-royal-10",
      )}
    >
      <Icon aria-hidden className="size-4" />
      {label}
    </button>
  );
}

/** A tiny sketch of the theme's layout: header bar, hero, cards. Decorative; the name is written under it. */
function ThemeSketch({ look }: { look: (typeof LOOK)[ThemeId] }) {
  const headerBg = look.header === "dark" ? "#111827" : look.header === "brand" ? look.accent : "#fff";
  return (
    <div aria-hidden className="overflow-hidden rounded-xl bg-gc-canvas ring-1 ring-gc-line" style={{ aspectRatio: "4 / 3" }}>
      <div className="flex h-[16%] items-center gap-1 px-1.5" style={{ background: headerBg, borderBottom: look.header === "light" ? "1px solid #E5E7EB" : undefined }}>
        <span className="h-1.5 w-5 rounded-sm" style={{ background: look.header === "light" ? look.accent : "rgba(255,255,255,0.9)" }} />
        {look.menuPills ? (
          <span className="ml-auto flex gap-0.5">
            {[look.accent, "#f59e0b", "#0ea5e9"].map((c) => <span key={c} className="h-1.5 w-3 rounded-full" style={{ background: c }} />)}
          </span>
        ) : (
          <span className="ml-auto h-1.5 w-8 rounded-sm" style={{ background: look.header === "light" ? "#E5E7EB" : "rgba(255,255,255,0.35)" }} />
        )}
      </div>
      <div className="p-1.5">
        {look.hero === "split" && (
          <div className="flex gap-1">
            <div className="flex-1 space-y-1 py-1">
              <span className="block h-1.5 w-[80%] rounded-sm bg-gc-ink/70" />
              <span className="block h-1 w-[55%] rounded-sm bg-gc-ink/25" />
              <span className="block h-2 w-7 rounded-sm" style={{ background: look.accent }} />
            </div>
            <div className="h-9 flex-1 rounded-sm" style={{ background: look.soft }} />
          </div>
        )}
        {look.hero === "image" && (
          <div className="relative h-11 rounded-sm" style={{ background: `linear-gradient(135deg, ${look.soft}, ${look.accent}88)` }}>
            <span className="absolute bottom-1.5 left-1.5 h-1.5 w-[55%] rounded-sm bg-white" />
          </div>
        )}
        {look.hero === "compact" && (
          <div className="space-y-1">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3].map((i) => <span key={i} className="h-2 flex-1 rounded-sm" style={{ background: look.soft }} />)}
            </div>
            <div className="h-5 rounded-sm" style={{ background: `${look.accent}22` }} />
          </div>
        )}
        {look.hero === "banner" && (
          <div className="flex h-11 items-center rounded-lg px-1.5" style={{ background: `linear-gradient(90deg, ${look.accent}, ${look.accent}99)` }}>
            <span className="h-1.5 w-[50%] rounded-sm bg-white" />
            <span className="ml-auto h-2.5 w-5 rounded-full bg-white" />
          </div>
        )}
        <div className="mt-1 flex gap-1">
          {Array.from({ length: look.cards === 2 ? 3 : 2 }).map((_, i) => (
            <div key={i} className="flex-1 overflow-hidden bg-white" style={{ borderRadius: look.radius === "2px" ? 1 : 3 }}>
              <div className="h-4" style={{ background: look.soft }} />
              <div className="space-y-0.5 p-0.5">
                <span className="block h-1 w-[80%] rounded-sm bg-gc-ink/50" />
                <span className="block h-1 w-[40%] rounded-sm" style={{ background: look.accent }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** The same shop (Dazzle Shop, Earbuds Pro) drawn in the theme's layout; `accent` may be the owner's own colour. */
function StoreMock({ look, accent, phone }: { look: (typeof LOOK)[ThemeId]; accent: string; phone: boolean }) {
  const { L } = useI18n();
  const n = useNum();
  const P = THEMES.preview;
  const font = look.serif ? "font-serif" : "font-sans";
  const vars = { "--acc": accent, "--soft": look.soft, "--r": look.radius } as CSSProperties;
  const headerDark = look.header !== "light";
  const headerBg = look.header === "brand" ? accent : look.header === "dark" ? "#111827" : "#fff";

  return (
    <div style={vars} className={cn("overflow-hidden rounded-[18px] bg-white shadow-[0_24px_48px_-28px_rgba(10,60,150,0.5)] ring-1 ring-black/[0.06]", phone && "mx-auto rounded-[26px] ring-[6px] ring-gc-ink")}>
      {/* Browser or phone chrome */}
      {phone ? (
        <div className="flex h-6 items-center justify-center bg-white">
          <span className="h-1.5 w-16 rounded-full bg-gc-ink/80" />
        </div>
      ) : (
        <div className="flex h-8 items-center gap-2 border-b border-gc-line bg-[#F8FAFC] px-3">
          <span className="flex gap-1">
            <span className="size-2 rounded-full bg-[#FF5F57]" />
            <span className="size-2 rounded-full bg-[#FEBC2E]" />
            <span className="size-2 rounded-full bg-[#28C840]" />
          </span>
          <span className="mx-auto rounded-md bg-white px-2.5 py-0.5 text-[10px] font-medium text-gc-ink-50 ring-1 ring-gc-line">dazzleshop.com.bd</span>
          <span className="w-8" />
        </div>
      )}

      {/* Header */}
      <div className={cn("flex items-center gap-3 px-3", phone ? "h-11" : "h-12 px-4", !headerDark && "border-b border-gc-line")} style={{ background: headerBg }}>
        {phone && <Menu className={cn("size-4", headerDark ? "text-white" : "text-gc-ink")} />}
        <span className={cn("text-[13px] font-bold tracking-tight", font, headerDark ? "text-white" : "")} style={headerDark ? undefined : { color: accent }}>
          {P.shop}
        </span>
        {!phone && (
          <nav className="ml-2 flex items-center gap-1 text-[11px] font-medium">
            {P.nav.map((w, i) => (
              <span
                key={i}
                className={cn("rounded-full px-2 py-0.5", headerDark ? "text-white/90" : "text-gc-ink-70")}
                style={look.menuPills ? { background: ["#FBEAF1", "#FEF3C7", "#E0F2FE", "#ECFDF5"][i], color: ["#7a1747", "#92400E", "#075985", "#047857"][i] } : undefined}
              >
                {L(w)}
              </span>
            ))}
          </nav>
        )}
        <span className={cn("ml-auto flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px]", headerDark ? "bg-white/15 text-white/90" : "bg-gc-canvas text-gc-ink-50", phone && "px-1.5")}>
          <Search className="size-3" /> {!phone && L(P.search)}
        </span>
        <ShoppingBag className={cn("size-4", headerDark ? "text-white" : "text-gc-ink")} />
      </div>

      {/* Hero */}
      <div className={cn("p-3", !phone && "p-4")}>
        {look.hero === "split" && (
          <div className={cn("grid items-center gap-3 rounded-[var(--r)] p-3", !phone && "grid-cols-2 p-4")} style={{ background: look.soft }}>
            <div>
              <p className={cn("text-[15px] font-bold leading-tight text-gc-ink", font, !phone && "text-[18px]")}>{L(P.hero)}</p>
              <p className="mt-1 text-[10.5px] text-gc-ink-60">{L(P.heroSub)}</p>
              <span className="mt-2 inline-block rounded-[var(--r)] px-3 py-1.5 text-[10.5px] font-semibold text-white" style={{ background: accent }}>
                {L(P.cta)}
              </span>
            </div>
            <Image src="/merchants/merchant-electronics.webp" alt="" width={240} height={160} className={cn("h-20 w-full rounded-[var(--r)] object-cover", phone && "hidden")} />
          </div>
        )}
        {look.hero === "image" && (
          <div className="relative overflow-hidden rounded-[var(--r)]">
            <Image src="/merchants/merchant-electronics.webp" alt="" width={640} height={320} className={cn("w-full object-cover", phone ? "h-32" : "h-40")} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <p className={cn("text-[16px] font-bold leading-tight", font, !phone && "text-[22px]")}>{L(P.hero)}</p>
              <span className="mt-1.5 inline-block border-b-2 pb-0.5 text-[10.5px] font-semibold" style={{ borderColor: accent }}>
                {L(P.cta)}
              </span>
            </div>
          </div>
        )}
        {look.hero === "compact" && (
          <>
            <div className="flex gap-1.5 overflow-hidden">
              {P.categories.map((c, i) => (
                <span key={i} className="shrink-0 rounded-[var(--r)] bg-gc-canvas px-2.5 py-1 text-[10.5px] font-semibold text-gc-ink-70">
                  {L(c)}
                </span>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between rounded-[var(--r)] px-3 py-2.5" style={{ background: look.soft }}>
              <p className={cn("text-[12.5px] font-bold text-gc-ink", font)}>{L(P.hero)}</p>
              <span className="rounded-[var(--r)] px-2.5 py-1 text-[10px] font-semibold text-white" style={{ background: accent }}>
                {L(P.cta)}
              </span>
            </div>
          </>
        )}
        {look.hero === "banner" && (
          <div className={cn("flex items-center justify-between gap-3 rounded-[var(--r)] p-4 text-white", !phone && "p-5")} style={{ background: `linear-gradient(100deg, ${accent}, ${accent}B3)` }}>
            <div>
              <p className={cn("text-[16px] font-bold leading-tight", font, !phone && "text-[20px]")}>{L(P.hero)}</p>
              <p className="mt-0.5 text-[10.5px] text-white/85">{L(P.heroSub)}</p>
            </div>
            <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-[10.5px] font-semibold" style={{ color: accent }}>
              {L(P.cta)}
            </span>
          </div>
        )}

        {/* Product cards */}
        <div className={cn("mt-3 grid gap-3", look.cards === 2 || phone ? "grid-cols-2" : "grid-cols-[1fr_1fr]")}>
          <ProductCard look={look} accent={accent} name={DEMO.product} price={n(DEMO.price, { money: true })} spec={L(P.spec)} inStock={L(P.inStock)} add={L(P.add)} cod={L(P.cod)} big={look.cards === 1 && !phone} />
          <ProductCard look={look} accent={accent} name={P.second} price={n(3990, { money: true })} spec="" inStock={L(P.inStock)} add={L(P.add)} cod={L(P.cod)} big={false} muted={look.cards === 1 && !phone} />
        </div>
      </div>
    </div>
  );
}

function ProductCard({ look, accent, name, price, spec, inStock, add, cod, big, muted }: { look: (typeof LOOK)[ThemeId]; accent: string; name: string; price: string; spec: string; inStock: string; add: string; cod: string; big: boolean; muted?: boolean }) {
  const font = look.serif ? "font-serif" : "font-sans";
  return (
    <div className={cn("overflow-hidden rounded-[var(--r)] bg-white ring-1 ring-gc-line", muted && "opacity-60")}>
      <div className={cn("relative", big ? "h-24" : "h-16")} style={{ background: look.soft }}>
        <Image src="/merchants/merchant-electronics.webp" alt="" width={240} height={160} className="size-full object-cover" />
        <span className="absolute left-1.5 top-1.5 rounded-full bg-white/95 px-1.5 py-0.5 text-[9px] font-semibold text-gc-success">{inStock}</span>
      </div>
      <div className="p-2">
        <p className={cn("truncate text-[11.5px] font-semibold text-gc-ink", font)}>{name}</p>
        {spec && <p className="truncate text-[9.5px] text-gc-ink-50">{spec}</p>}
        <div className="mt-1 flex items-center justify-between gap-1">
          <p className="text-[12px] font-bold tabular-nums" style={{ color: look.serif ? undefined : accent }}>
            {price}
          </p>
          <span className="rounded-full bg-gc-canvas px-1.5 py-0.5 text-[9px] font-semibold text-gc-ink-60">{cod}</span>
        </div>
        <span className="mt-1.5 block rounded-[var(--r)] py-1 text-center text-[10px] font-semibold text-white" style={{ background: accent }}>
          {add}
        </span>
      </div>
    </div>
  );
}
