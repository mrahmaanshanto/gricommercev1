"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { Check, ChevronDown, Play, X } from "lucide-react";
import { GcButton } from "@/components/brand/primitives";
import { Icon } from "@/components/ui/Icon";
import { MODULE_UI } from "@/data/copy/modules";
import type { Logo, ModuleDetail, Shot } from "@/data/copy/module-details/types";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";

/* ------------------------------------------------------------------ */
/* Frames for real captures                                            */
/* ------------------------------------------------------------------ */

/** A desktop capture in a light browser frame. */
export function BrowserShot({ shot, priority, className }: { shot: Shot; priority?: boolean; className?: string }) {
  const { L } = useI18n();
  return (
    <div className={cn("overflow-hidden rounded-[18px] bg-white shadow-[0_40px_80px_-40px_rgba(10,40,100,0.55)] ring-1 ring-black/[0.06]", className)}>
      <div aria-hidden className="flex h-7 items-center gap-1.5 border-b border-gc-line bg-[#F8FAFC] px-3 sm:h-8">
        <span className="size-2 rounded-full bg-[#FF5F57]" />
        <span className="size-2 rounded-full bg-[#FEBC2E]" />
        <span className="size-2 rounded-full bg-[#28C840]" />
      </div>
      <Image src={shot.src} alt={L(shot.alt)} width={shot.width} height={shot.height} priority={priority} sizes="(min-width: 1024px) 720px, 100vw" className="h-auto w-full" />
    </div>
  );
}

/** A phone-app capture inside a phone body. */
export function PhoneShot({ shot, priority, className }: { shot: Shot; priority?: boolean; className?: string }) {
  const { L } = useI18n();
  return (
    <div className={cn("rounded-[38px] bg-gc-ink p-[7px] shadow-[0_40px_70px_-30px_rgba(10,30,80,0.6)]", className)}>
      <div className="relative overflow-hidden rounded-[32px] bg-white">
        <Image src={shot.src} alt={L(shot.alt)} width={shot.width} height={shot.height} priority={priority} sizes="300px" className="h-auto w-full" />
      </div>
    </div>
  );
}

/**
 * A focused crop of the app, set on a soft stage so the point it makes stands
 * out. On phones a section with a phone-app capture shows that instead, and a
 * wide desktop crop keeps a readable size and scrolls sideways.
 */
export function FocusShot({ shot, phone, className }: { shot: Shot; phone?: Shot; className?: string }) {
  const { L } = useI18n();
  const ratio = shot.width / shot.height;
  const wide = ratio > 1.35;
  return (
    <div className={cn("relative isolate overflow-hidden rounded-[28px] bg-gradient-to-br from-gc-royal-10 via-[#F4F8FF] to-gc-sky-10 p-4 sm:p-8", phone && "sm:pb-20 lg:pb-8 lg:pr-28", className)}>
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(rgba(10,91,207,0.14) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
        }}
      />
      {phone && (
        <div className="sm:hidden">
          <PhoneShot shot={phone} className="mx-auto w-[230px]" />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: EASE.outQuart }}
        className={cn(phone && "hidden sm:block", wide && "-mx-4 overflow-x-auto px-4 pb-1 [scrollbar-width:thin] sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0")}
      >
        <div
          className={cn(
            "mx-auto overflow-hidden rounded-[16px] bg-white shadow-[0_30px_60px_-30px_rgba(10,40,100,0.5)] ring-1 ring-black/[0.06]",
            ratio < 1.1 ? "max-w-[420px]" : ratio < 1.6 ? "max-w-[560px]" : "",
            wide && "min-w-[560px] sm:min-w-0",
          )}
        >
          <Image src={shot.src} alt={L(shot.alt)} width={shot.width} height={shot.height} sizes="(min-width: 1024px) 1100px, (min-width: 640px) 100vw, 600px" className="h-auto w-full" />
        </div>
      </motion.div>
      {wide && (
        <p aria-hidden className={cn("mt-3 flex items-center justify-center gap-1.5 text-[0.75rem] font-semibold text-gc-ink-50 sm:hidden", phone && "hidden")}>
          <ChevronDown className="size-3.5 rotate-90" /> {L(MODULE_UI.swipe)} <ChevronDown className="size-3.5 -rotate-90" />
        </p>
      )}
      {phone && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: EASE.outQuart, delay: 0.15 }}
          className="absolute bottom-4 right-6 hidden w-[140px] sm:block lg:bottom-6 lg:right-5 lg:w-[150px]"
        >
          <PhoneShot shot={phone} />
        </motion.div>
      )}
    </div>
  );
}

/** The hero visual: desktop capture with the phone app beside it; phones see the phone app first. */
export function HeroShots({ detail }: { detail: ModuleDetail }) {
  return (
    <div className="relative">
      <div className={cn("relative isolate rounded-[28px] bg-gradient-to-br from-gc-sky-20 via-gc-sky-10 to-gc-royal-10 p-3 sm:p-5 md:rounded-[32px] md:p-7", detail.heroPhone && "lg:mr-10")}>
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-2/3 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-[70px]" />
        <BrowserShot shot={detail.heroShot} priority className={cn(detail.heroPhone && "hidden sm:block")} />
        {detail.heroPhone && <PhoneShot shot={detail.heroPhone} priority className="mx-auto w-[240px] sm:hidden" />}
      </div>
      {detail.heroPhone && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE.outQuart, delay: 0.4 }}
          className="absolute -bottom-10 -right-2 hidden w-[150px] sm:block lg:-right-4 lg:w-[170px]"
        >
          <PhoneShot shot={detail.heroPhone} />
        </motion.div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Logos                                                               */
/* ------------------------------------------------------------------ */

export function LogoRow({ items, size = "md", className }: { items: Logo[]; size?: "sm" | "md"; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {items.map((l) => (
        <li
          key={l.name}
          title={l.name}
          className={cn("grid place-items-center rounded-xl bg-white px-3 ring-1 ring-gc-line", size === "sm" ? "h-9 min-w-9" : "h-12 min-w-12")}
        >
          <Image src={l.src} alt={l.name} width={120} height={48} className={cn("w-auto object-contain", size === "sm" ? "max-h-5 max-w-[72px]" : "max-h-7 max-w-[96px]")} />
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Overview video                                                      */
/* ------------------------------------------------------------------ */

/** The video poster; opens the overview video (or its placeholder) in a pop-up. */
export function VideoCard({ poster, video, slug }: { poster: Shot; video?: string; slug: string }) {
  const { L } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          trackEvent("demo_replayed", { source: "module_video", module: slug });
        }}
        className="group relative block w-full overflow-hidden rounded-[28px] bg-gc-ink text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gc-sky"
        style={{ aspectRatio: "16 / 9" }}
      >
        <Image src={poster.src} alt="" fill sizes="(min-width: 1024px) 900px, 100vw" className="object-cover object-top opacity-45 transition-transform duration-700 group-hover:scale-[1.03]" />
        <span className="absolute inset-0 bg-gradient-to-t from-gc-ink via-gc-ink/50 to-gc-royal/30" />
        <span className="absolute inset-0 grid place-items-center">
          <span className="relative grid size-20 place-items-center rounded-full bg-white text-gc-royal shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-110 md:size-24">
            <span className="absolute inset-0 animate-ping rounded-full bg-white/40 motion-reduce:hidden" />
            <Play aria-hidden className="relative ml-1 size-8 fill-current md:size-10" />
          </span>
        </span>
        <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white md:bottom-7 md:left-7 md:right-7">
          <span className="font-gc-display text-[1.125rem] font-bold md:text-[1.5rem]">{L(MODULE_UI.watch)}</span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-[0.75rem] font-semibold backdrop-blur">{L(MODULE_UI.watchShort)}</span>
        </span>
      </button>
      <VideoModal open={open} onClose={() => setOpen(false)} video={video} />
    </>
  );
}

function VideoModal({ open, onClose, video }: { open: boolean; onClose: () => void; video?: string }) {
  const { t, L } = useI18n();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const youtube = video && /youtube\.com|youtu\.be/.test(video);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center bg-gc-ink/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={L(MODULE_UI.watch)}
        >
          <motion.div
            className="relative w-full max-w-4xl overflow-hidden rounded-[24px] bg-gc-ink shadow-2xl ring-1 ring-white/10"
            initial={reduced ? false : { scale: 0.94, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={reduced ? undefined : { scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: EASE.outQuart }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={L(MODULE_UI.close)}
              autoFocus
              className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
            <div style={{ aspectRatio: "16 / 9" }} className="relative">
              {video ? (
                youtube ? (
                  <iframe src={video} title={L(MODULE_UI.watch)} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen className="absolute inset-0 size-full" />
                ) : (
                  <video src={video} controls autoPlay playsInline className="absolute inset-0 size-full" />
                )
              ) : (
                <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-gc-royal to-gc-ink p-6 text-center text-white">
                  <div className="max-w-md">
                    <span className="mx-auto grid size-16 place-items-center rounded-full bg-white/15">
                      <Play aria-hidden className="ml-1 size-7 fill-current" />
                    </span>
                    <p className="mt-5 font-gc-display text-[1.375rem] font-bold">{L(MODULE_UI.soonTitle)}</p>
                    <p className="mt-2 text-gc-small text-white/75">{L(MODULE_UI.soonBody)}</p>
                    <GcButton href="/contact?topic=demo" variant="white" size="md" withArrow className="mt-6" onClick={() => trackEvent("demo_requested", { source: "module_video" })}>
                      {t.common.bookDemo}
                    </GcButton>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* Workflow                                                            */
/* ------------------------------------------------------------------ */

const COLS: Record<number, string> = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 6: "lg:grid-cols-3 xl:grid-cols-6" };

/** The steps, in a row on wide screens and a column on phones, numbered, with an arrow between neighbours. */
export function WorkflowSteps({ steps }: { steps: ModuleDetail["workflow"] }) {
  const { L } = useI18n();
  return (
    <ol className={cn("grid gap-3 sm:grid-cols-2", COLS[steps.length] ?? "lg:grid-cols-4")}>
        {steps.map((s, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.45, ease: EASE.outQuart, delay: i * 0.08 }}
            className="relative flex flex-col rounded-[20px] bg-white p-5 ring-1 ring-gc-line"
          >
            <div className="flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-2xl bg-gc-royal text-white shadow-[0_10px_20px_-10px_rgba(10,91,207,0.7)]">
                <Icon name={s.icon} className="size-5" strokeWidth={2} />
              </span>
              <span className="font-gc-display text-[1.5rem] font-bold text-gc-royal-20">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <p className="mt-4 font-gc-display text-[1rem] font-bold leading-snug text-gc-ink">{L(s.title)}</p>
            <p className="mt-1.5 text-gc-small leading-relaxed text-gc-ink-60">{L(s.body)}</p>
            {i < steps.length - 1 && (
              <span aria-hidden className="absolute -right-2.5 top-10 z-10 hidden size-5 place-items-center rounded-full bg-gc-royal-10 text-gc-royal lg:grid">
                <ChevronDown className="size-3.5 -rotate-90" strokeWidth={3} />
              </span>
            )}
          </motion.li>
        ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-gc-line overflow-hidden rounded-[24px] bg-white ring-1 ring-gc-line">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <li key={i}>
            <button type="button" aria-expanded={on} onClick={() => setOpen(on ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-7 md:py-5">
              <span className="font-gc-display text-[1rem] font-bold leading-snug text-gc-ink md:text-[1.0625rem]">{f.q}</span>
              <ChevronDown aria-hidden className={cn("size-5 shrink-0 text-gc-ink-50 transition-transform duration-200", on && "rotate-180")} />
            </button>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                  <p className="px-5 pb-5 text-gc-body text-gc-ink-60 md:px-7">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

/** Small check list used in the feature sections. */
export function Points({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((p, i) => (
        <li key={i} className="flex items-start gap-2.5 text-gc-body text-gc-ink-70">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gc-royal-10 text-gc-royal">
            <Check aria-hidden className="size-3" strokeWidth={3} />
          </span>
          {p}
        </li>
      ))}
    </ul>
  );
}
