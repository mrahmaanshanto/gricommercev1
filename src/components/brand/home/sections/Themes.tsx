"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, LayoutTemplate } from "lucide-react";
import { Reveal } from "@/components/motion";
import { THEMES } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Panel } from "../../primitives";
import { HOME_INNER, IconChip, TwoTone } from "./kit";

type Shot = { src: string; w: number; h: number };
const shot = (name: string, h: number): Shot => ({ src: `/themes/${name}.webp`, w: 600, h });

/* Three columns of theme pages; the middle one runs the other way. */
const COLUMNS: { shots: Shot[]; reverse?: boolean; duration: number; className?: string }[] = [
  { shots: [shot("onskn-1", 753), shot("blakora-2", 930), shot("visora-2", 1059), shot("ameer-1", 721)], duration: 46 },
  { shots: [shot("delyo-1", 765), shot("ameer-2", 1786), shot("blakora-1", 930)], reverse: true, duration: 52 },
  { shots: [shot("visora-1", 840), shot("delyo-2", 1295), shot("onskn-2", 1245)], duration: 44, className: "hidden sm:block" },
];

/**
 * Storefront themes — the copy beside three columns of real theme pages that
 * scroll up and down past each other, like browsing a gallery. The columns
 * pause under the pointer and stand still under reduced motion.
 */
export function Themes() {
  const { L } = useI18n();

  return (
    <Panel tone="white" pattern={null} inner={HOME_INNER}>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <Reveal className="min-w-0">
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
          <Link href="/features/storefront" className="mt-7 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline">
            {L(THEMES.link)}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </Reveal>

        <div
          className="gc-marquee-wrap relative grid h-[460px] grid-cols-2 gap-3 overflow-hidden rounded-[28px] bg-gc-canvas px-3 sm:h-[560px] sm:grid-cols-3 md:gap-4 md:px-4 lg:h-[620px]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {COLUMNS.map((col, c) => (
            <div key={c} className={cn("min-w-0", col.className)}>
              <div
                className={cn("gc-marquee-y flex flex-col gap-3 pb-3 md:gap-4 md:pb-4", col.reverse && "gc-marquee-reverse")}
                style={{ ["--gc-marquee-duration" as string]: `${col.duration}s` }}
              >
                {[...col.shots, ...col.shots].map((s, i) => (
                  <Image
                    key={i}
                    src={s.src}
                    alt={i < col.shots.length && c === 0 && i === 0 ? L(THEMES.alt) : ""}
                    width={s.w}
                    height={s.h}
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 30vw, 45vw"
                    className="w-full rounded-2xl shadow-[0_18px_34px_-22px_rgba(10,40,100,0.5)] ring-1 ring-black/5"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
