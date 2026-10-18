"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Store } from "lucide-react";
import { FIT } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { IconTile, Panel } from "../primitives";
import { HOME_INNER, IconChip, SectionIntro, useNum } from "./sections/kit";

/** Generated photographs — no real, identifiable person. */
export const SOLUTION_PHOTOS: Record<string, { src: string; alt: string }> = {
  online: {
    src: "/merchants/merchant-packing-orders.webp",
    alt: "Online seller sealing a customer parcel in a stockroom full of products",
  },
  retail: {
    src: "/merchants/retail-counter-pos-v2.webp",
    alt: "Shopkeeper scanning a product at a counter lined with stocked shelves",
  },
  both: {
    src: "/merchants/merchant-electronics.webp",
    alt: "Electronics shop owner at the counter with phones and accessories on display",
  },
  wholesale: {
    src: "/merchants/wholesale-market-cartons.webp",
    alt: "Wholesaler on the phone among stacked cartons in a wholesale market",
  },
};

type Fit = (typeof FIT.types)[number];

/**
 * Business fit as an audience selector: Online seller · Shop · Shop + online ·
 * Wholesale. Choosing one shows that owner's day in the demo world (Dazzle
 * Shop, Earbuds Pro, order GC-1042) as three bullets beside its photograph,
 * with a link to the solution page. Buttons carry aria-pressed and sit in a
 * tab-free group, so arrow keys are not needed: Tab reaches each one. On
 * phones the chips scroll sideways in one row.
 */
export function BrandSolutions() {
  const { L } = useI18n();
  const n = useNum();
  const reduced = useReducedMotion();
  const [picked, setPicked] = useState<Fit["id"]>(FIT.types[0].id);
  const panelId = useId();
  const type = FIT.types.find((t) => t.id === picked) ?? FIT.types[0];
  const photo = SOLUTION_PHOTOS[type.id];

  return (
    <Panel id="who-it-is-for" tone="tint" pattern="tl" inner={HOME_INNER}>
      <SectionIntro layout="center" size="h2" title={L(FIT.title)} chip={<IconChip icon={Store} tone="royal" tilt={6} />} body={L(FIT.intro)} />

      {/* Selector: chips in one row (scrolls sideways on phones, centred on wide screens). */}
      <div role="group" aria-label={L(FIT.selectorLabel)} className="mt-8 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:hidden">
          {FIT.types.map((t) => {
            const active = t.id === picked;
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={active}
                aria-controls={panelId}
                onClick={() => setPicked(t.id)}
                className={cn(
                  "inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 text-[0.9375rem] font-semibold transition-colors duration-[160ms]",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gc-royal",
                  active ? "bg-gc-ink text-white shadow-[0_12px_28px_-14px_rgba(17,24,39,0.7)]" : "bg-white text-gc-ink-70 ring-1 ring-inset ring-gc-line hover:text-gc-ink hover:ring-gc-ink-30",
                )}
              >
                <span aria-hidden className={cn("size-2 rounded-full", active ? "bg-gc-sky" : "bg-gc-ink-30")} />
                {L(t.chip)}
              </button>
            );
          })}
        </div>
      </div>

      {/* The chosen owner's day */}
      <div id={panelId} className="mt-6 overflow-hidden rounded-[24px] bg-white p-2.5 shadow-gc-card ring-1 ring-gc-line/70 md:p-3">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] lg:aspect-auto lg:min-h-[320px]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={type.id}
                className="absolute inset-0"
                initial={reduced ? false : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE.outQuart }}
              >
                {photo && (
                  <Image src={photo.src} alt={photo.alt} fill loading="lazy" sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                )}
              </motion.div>
            </AnimatePresence>
            <span className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-gc-ink-60 ring-1 ring-gc-line backdrop-blur">
              {L(FIT.dayLabel)}
            </span>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={type.id}
              className="flex flex-col px-2.5 pb-3 pt-2 md:px-3 lg:py-4 lg:pr-6"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: EASE.outQuart }}
            >
              <div className="flex items-center gap-3">
                <IconTile name={type.icon} size="sm" />
                <h3 className="text-gc-h4 text-gc-ink">{L(type.title)}</h3>
              </div>
              <p className="mt-3 text-gc-body text-gc-ink-60">{L(type.body)}</p>

              <ol className="mt-5 space-y-3">
                {type.day.map((line, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gc-royal-10 text-[0.75rem] font-bold tabular-nums text-gc-royal">{n(i + 1)}</span>
                    <span className="text-gc-small leading-relaxed text-gc-ink-70">{L(line)}</span>
                  </li>
                ))}
              </ol>

              <Link
                href={type.href}
                className="mt-6 inline-flex items-center gap-1.5 self-start text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline"
              >
                {L(type.link)}
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Panel>
  );
}
