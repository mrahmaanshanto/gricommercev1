"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { MegaMenu as MegaMenuType } from "@/data/navigation";
import { useI18n } from "@/i18n/provider";
import { Icon } from "@/components/ui/Icon";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

/** Palette only: every column's icons share the brand tile, whatever the
 *  per-column accent in the navigation data says. */
export function MegaMenuPanel({
  menu,
  onNavigate,
}: {
  menu: MegaMenuType;
  onNavigate: () => void;
}) {
  const { L } = useI18n();
  const reduced = useReducedMotion();

  const columnCount = menu.columns.length;
  const gridCols =
    columnCount >= 4 ? "lg:grid-cols-4" : columnCount === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.99 }}
      transition={{ duration: 0.24, ease: EASE.outQuart }}
      className="gc-scope overflow-hidden rounded-[20px] bg-white shadow-gc-float ring-1 ring-gc-line/70"
    >
      <div
        className={cn(
          "grid gap-x-8 gap-y-9 p-7",
          gridCols,
          menu.feature && "lg:grid-cols-[repeat(4,minmax(0,1fr))_20rem]",
        )}
      >
        {menu.columns.map((column, ci) => (
          <div key={ci}>
            <p className="gc-eyebrow mb-3.5 text-gc-eyebrow font-semibold uppercase text-gc-ink-50">{L(column.title)}</p>
            <ul className="space-y-0.5">
              {column.links.map((link, li) => (
                <motion.li
                  key={link.href + li}
                  initial={reduced ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: reduced ? 0 : 0.04 + ci * 0.03 + li * 0.018,
                    ease: EASE.outQuart,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="group/link flex gap-3 rounded-2xl p-2.5 transition-colors duration-[160ms] hover:bg-gc-canvas focus-visible:bg-gc-canvas"
                  >
                    {link.icon && (
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-gc-sky-10 text-gc-royal transition-[transform,background-color,color] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-105 group-hover/link:bg-gc-royal group-hover/link:text-white">
                        <Icon name={link.icon} className="size-[17px]" />
                      </span>
                    )}
                    <span className="min-w-0">
                      <span className="flex items-center gap-1.5 text-[0.9375rem] font-semibold text-gc-ink">
                        {L(link.label)}
                        <ArrowRight
                          aria-hidden
                          className="size-3.5 -translate-x-1 text-gc-royal opacity-0 transition-all duration-[180ms] group-hover/link:translate-x-0 group-hover/link:opacity-100"
                        />
                      </span>
                      {link.description && (
                        <span className="mt-0.5 block text-[0.8125rem] leading-snug text-gc-ink-50">
                          {L(link.description)}
                        </span>
                      )}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}

        {menu.feature && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: reduced ? 0 : 0.12, ease: EASE.outQuart }}
            className="relative isolate overflow-hidden rounded-[20px] bg-gc-dark p-6 text-white"
          >
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-20 -z-10 size-52 rounded-full bg-gc-royal/40 blur-3xl" />
            <span className="gc-eyebrow text-gc-eyebrow font-semibold uppercase text-gc-sky">{L(menu.feature.eyebrow)}</span>
            <h3 className="mt-3 text-[1.125rem] leading-snug text-white">{L(menu.feature.title)}</h3>
            <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/70">{L(menu.feature.body)}</p>
            <Link
              href={menu.feature.href}
              onClick={onNavigate}
              className="group/f mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-gc-sky hover:text-white"
            >
              {L(menu.feature.cta)}
              <ArrowRight aria-hidden className="size-3.5 transition-transform duration-[160ms] group-hover/f:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
