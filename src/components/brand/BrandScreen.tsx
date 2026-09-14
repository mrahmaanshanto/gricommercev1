"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import type { ProductScreen } from "@/data/screenshots";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { PatternCorner, type Corner } from "./primitives";

const STAGE = {
  sky: "bg-gradient-to-br from-gc-sky-20 via-gc-sky-10 to-gc-royal-10",
  royal: "bg-gradient-to-br from-gc-royal from-40% to-gc-sky",
  dark: "bg-white/[0.04] ring-1 ring-inset ring-white/10",
} as const;

/**
 * How product captures are presented in the brand design.
 *
 * The capture itself is never altered (docs/ASSETS.md) — only its frame is: a
 * tinted stage in the brand blues, the screenshot inset with generous rounded
 * corners, a hairline highlight and a long blue-tinted shadow. There is no
 * browser chrome; the references present product UI as an object on a stage,
 * not as a window.
 */
export function BrandScreen({
  screen,
  tone = "sky",
  priority = false,
  pattern = "tr",
  className,
  children,
}: {
  screen: ProductScreen;
  tone?: keyof typeof STAGE;
  priority?: boolean;
  pattern?: Corner | null;
  className?: string;
  /** Floating cards, positioned against the stage. */
  children?: ReactNode;
}) {
  const reduced = useReducedMotion();

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-[24px] p-3 sm:p-5 md:rounded-[32px] md:p-7 lg:p-9",
          STAGE[tone],
        )}
      >
        {pattern && <PatternCorner position={pattern} tone={tone === "sky" ? "light" : "onDark"} />}

        {/* A light pool behind the capture, so its shadow reads as depth. */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 -z-10 h-2/3 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]",
            tone === "dark" ? "bg-gc-royal/40" : "bg-white/70",
          )}
        />

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: EASE.outQuart }}
          className="relative overflow-hidden rounded-[14px] bg-white shadow-gc-screen ring-1 ring-gc-dark/[0.06] md:rounded-[20px]"
        >
          {/* Art direction needs <picture>; dimensions are explicit, so no CLS. */}
          <picture>
            {screen.mobile && (
              <source
                media="(max-width: 767px)"
                srcSet={screen.mobile.src}
                width={screen.mobile.width}
                height={screen.mobile.height}
              />
            )}
            <img
              src={screen.src}
              alt={screen.alt}
              width={screen.width}
              height={screen.height}
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              decoding="async"
              className="block h-auto w-full"
            />
          </picture>
          <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/60" />
        </motion.div>
      </div>

      {children}
    </div>
  );
}
