"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion";
import { SITE } from "@/data/site";
import { cn } from "@/lib/cn";

/** The site has one button; this name is kept for the homepage sections. */
export { Button as GcButton } from "@/components/ui/Button";

/* ------------------------------------------------------------------ */
/* Logo                                                                */
/* ------------------------------------------------------------------ */

const LOGO = {
  lockup: {
    light: "/brand/v2/gridcommerce-logo.png",
    dark: "/brand/v2/gridcommerce-logo-reverse.png",
    w: 1200,
    h: 183,
  },
  mark: {
    light: "/brand/v2/gridcommerce-mark.png",
    dark: "/brand/v2/gridcommerce-mark.png",
    w: 240,
    h: 306,
  },
} as const;

/**
 * The lockup from the Brand Guidelines (p.10–11), rendered from the vector PDF.
 * Per p.14 it is never recoloured, outlined, shadowed, re-spaced or set on a
 * low-contrast ground. `dark` is the approved reverse version — gradient mark,
 * white wordmark — for Dark backgrounds.
 */
export function BrandLogo({
  variant = "lockup",
  tone = "light",
  className,
  href = "/",
  priority = false,
}: {
  variant?: keyof typeof LOGO;
  tone?: "light" | "dark";
  className?: string;
  href?: string | null;
  priority?: boolean;
}) {
  const src = LOGO[variant];
  const img = (
    <Image
      src={src[tone]}
      alt={SITE.name}
      width={src.w}
      height={src.h}
      priority={priority}
      className={cn("h-7 w-auto", className)}
    />
  );
  if (!href) return img;
  return (
    <Link href={href} aria-label={`${SITE.name} home`} className="inline-flex shrink-0 items-center rounded-md">
      {img}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Type                                                                */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "gc-eyebrow inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-gc-eyebrow font-semibold uppercase",
        tone === "dark" ? "bg-white/[0.08] text-gc-sky ring-1 ring-inset ring-white/10" : "bg-gc-royal-10 text-gc-royal",
        className,
      )}
    >
      <span aria-hidden className={cn("size-1.5 rounded-full", tone === "dark" ? "bg-gc-sky" : "bg-gc-royal")} />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light",
  className,
  children,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={cn("text-gc-h2", eyebrow && "mt-5", tone === "dark" ? "text-white" : "text-gc-ink")}>{title}</h2>
      {body && (
        <p
          className={cn(
            "mt-5 text-gc-lead",
            align === "center" && "mx-auto max-w-2xl",
            tone === "dark" ? "text-white/65" : "text-gc-ink-60",
          )}
        >
          {body}
        </p>
      )}
      {children}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Surfaces                                                            */
/* ------------------------------------------------------------------ */

const CORNER = {
  tl: { box: "-left-28 -top-28", at: "30% 30%" },
  tr: { box: "-right-28 -top-28", at: "70% 30%" },
  bl: { box: "-left-28 -bottom-28", at: "30% 70%" },
  br: { box: "-right-28 -bottom-28", at: "70% 70%" },
} as const;

export type Corner = keyof typeof CORNER;

/** The organic brand pattern (p.32), which the guidelines reserve for design
 *  corners — so it only ever appears faded out of one corner. */
export function PatternCorner({
  position,
  tone = "light",
  className,
}: {
  position: Corner;
  tone?: "light" | "onDark" | "onRoyal";
  className?: string;
}) {
  const c = CORNER[position];
  const mask = `radial-gradient(circle at ${c.at}, black 0%, transparent 56%)`;
  return (
    <div
      aria-hidden
      className={cn(
        "gc-pattern pointer-events-none absolute -z-10 size-[30rem] md:size-[38rem]",
        c.box,
        tone === "light" ? "opacity-[0.16]" : tone === "onDark" ? "opacity-[0.1]" : "opacity-[0.22] mix-blend-screen",
        className,
      )}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    />
  );
}

type PanelTone = "white" | "tint" | "dark" | "royal";

const PANEL: Record<PanelTone, string> = {
  white: "bg-white",
  tint: "bg-gradient-to-b from-white to-gc-sky-10",
  dark: "bg-gc-dark",
  royal: "bg-gradient-to-br from-gc-royal from-45% to-gc-sky",
};

/**
 * Every section is a large rounded surface set on the light canvas, the way the
 * reference layouts stack their content as cards.
 */
export function Panel({
  id,
  tone = "white",
  pattern,
  className,
  inner,
  background,
  children,
}: {
  id?: string;
  tone?: PanelTone;
  pattern?: Corner | null;
  className?: string;
  /** Overrides the vertical padding of the panel body. */
  inner?: string;
  /** Full-bleed layer painted over the tone and under the pattern, e.g. a photo with its overlay. */
  background?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
      {/* overflow-clip rather than overflow-hidden: clipping the rounded corners
          must not create a scroll container, or sticky columns stop sticking. */}
      <div
        className={cn(
          "relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[20px]",
          PANEL[tone],
          className,
        )}
      >
        {background && (
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            {background}
          </div>
        )}
        {tone === "dark" && (
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-40 -top-48 size-[38rem] rounded-full bg-gc-royal/35 blur-[140px]" />
            <div className="absolute -bottom-48 -right-40 size-[30rem] rounded-full bg-gc-sky/15 blur-[140px]" />
          </div>
        )}
        {pattern && (
          <PatternCorner
            position={pattern}
            tone={tone === "dark" ? "onDark" : tone === "royal" ? "onRoyal" : "light"}
          />
        )}
        <div className={cn("relative py-16 md:py-24 lg:py-28", inner)}>
          <div className="container-page">{children}</div>
        </div>
      </div>
    </section>
  );
}

const TILE = {
  light: "bg-gc-sky-10 text-gc-royal ring-1 ring-inset ring-gc-sky/20",
  solid: "bg-gc-royal text-white",
  dark: "bg-white/[0.07] text-gc-sky ring-1 ring-inset ring-white/12",
  white: "bg-white text-gc-royal",
} as const;

/** Icon tile echoing the brand icon system (p.24): RoyalBlue line work on a
 *  DeepSkyBlue-tinted ground. */
export function IconTile({
  name,
  tone = "light",
  size = "md",
  className,
}: {
  name: string;
  tone?: keyof typeof TILE;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center",
        size === "sm" ? "size-10 rounded-xl" : "size-12 rounded-2xl",
        TILE[tone],
        className,
      )}
    >
      <Icon name={name} className={size === "sm" ? "size-[18px]" : "size-[22px]"} strokeWidth={1.9} />
    </span>
  );
}

/** Small white card that floats over imagery. */
export function FloatCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl bg-white/95 p-3 shadow-gc-float ring-1 ring-gc-line/60 backdrop-blur-md", className)}>
      {children}
    </div>
  );
}
