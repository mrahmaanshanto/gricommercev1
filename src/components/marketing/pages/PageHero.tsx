"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Eyebrow, IconTile, PatternCorner, type Corner } from "@/components/brand/primitives";
import { useI18n } from "@/i18n/provider";
import { loc, type Localized } from "@/i18n/types";
import { cn } from "@/lib/cn";

const HOME = loc("Home", "হোম");

/**
 * Hero for every inner page: a rounded white panel on the canvas carrying the
 * breadcrumb, eyebrow, H1 and lead. `aside` sets a visual — photograph,
 * capture or form — beside the copy; `align="center"` suits single-column
 * pages. Entrance is CSS (`hero-settle` / `hero-rise`), so it paints from the
 * server HTML without waiting for hydration.
 */
export function PageHero({
  crumbs = [],
  eyebrow,
  eyebrowIcon,
  title,
  body,
  aside,
  align = "left",
  pattern = "tr",
  children,
}: {
  crumbs?: { label: Localized; href?: string }[];
  eyebrow?: Localized;
  eyebrowIcon?: string;
  title: Localized;
  body?: Localized;
  aside?: ReactNode;
  align?: "left" | "center";
  pattern?: Corner;
  children?: ReactNode;
}) {
  const { L } = useI18n();
  const centered = align === "center" && !aside;

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[20px] bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-[12%] -top-[40%] size-[46rem] rounded-full bg-gc-sky-20 blur-[120px]" />
          <div className="absolute -bottom-[50%] -left-[10%] size-[34rem] rounded-full bg-gc-royal-10 blur-[120px]" />
        </div>
        <PatternCorner position={pattern} />

        <div className="container-page relative py-10 md:py-14 lg:py-16">
          <nav aria-label="Breadcrumb" className={cn("mb-10", centered && "flex justify-center")}>
            <ol className="flex flex-wrap items-center gap-1.5 text-gc-small text-gc-ink-50">
              <li>
                <Link href="/" className="transition-colors hover:text-gc-royal">{L(HOME)}</Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight aria-hidden className="size-3.5 text-gc-ink-30" />
                  {c.href && i < crumbs.length - 1 ? (
                    <Link href={c.href} className="transition-colors hover:text-gc-royal">{L(c.label)}</Link>
                  ) : (
                    <span aria-current="page" className="font-medium text-gc-ink">{L(c.label)}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className={cn(aside && "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14")}>
            <div className={cn(aside ? "max-w-[35rem]" : centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
              {eyebrow && (
                <div className={cn("hero-rise flex items-center gap-3", centered && "justify-center")}>
                  {eyebrowIcon && <IconTile name={eyebrowIcon} size="sm" />}
                  <Eyebrow>{L(eyebrow)}</Eyebrow>
                </div>
              )}
              <h1 className={cn("hero-settle text-gc-h1 text-gc-ink", eyebrow && "mt-6")}>{L(title)}</h1>
              {body && (
                <p className={cn("hero-settle mt-6 max-w-2xl text-gc-lead text-gc-ink-60", centered && "mx-auto")}>
                  {L(body)}
                </p>
              )}
              {children}
            </div>
            {aside && <div className="hero-settle relative">{aside}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
