"use client";

import { Floating, Reveal, Stagger } from "@/components/motion";
import type { ShowcaseSection } from "@/data/homeShowcases";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { BrandScreen } from "../BrandScreen";
import { FloatCard, GcButton, IconTile, Panel, SectionHead } from "../primitives";

/**
 * Sections 5, 6, 8, 9, 14 — product showcases, driven by HOME_SHOWCASES.
 *
 * The capture takes the larger share of the row. The four points sit in their
 * own band beneath it: stacked in the copy column they made that column twice
 * the screenshot's height and left the capture small and floating.
 */
export function BrandShowcase({ section, index }: { section: ShowcaseSection; index: number }) {
  const { L } = useI18n();
  const mediaLeft = section.media === "left";
  const lead = section.points[0];

  return (
    <Panel id={section.id} tone={index % 2 === 0 ? "white" : "tint"} pattern={mediaLeft ? "tr" : "tl"}>
      <div
        className={cn(
          "grid items-center gap-12 lg:gap-14",
          mediaLeft
            ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
            : "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]",
        )}
      >
        <div className={cn("max-w-[32rem]", mediaLeft && "lg:order-2")}>
          <SectionHead eyebrow={L(section.eyebrow)} title={L(section.title)} body={L(section.body)} />
          {section.href && section.linkLabel && (
            <Reveal delay={0.12} className="mt-9">
              <GcButton href={section.href} variant="secondary" withArrow>
                {L(section.linkLabel)}
              </GcButton>
            </Reveal>
          )}
        </div>

        <Reveal className={cn("relative", mediaLeft && "lg:order-1")}>
          <BrandScreen screen={section.screen} pattern={mediaLeft ? "bl" : "br"}>
            {lead && (
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute hidden sm:block",
                  mediaLeft ? "-right-3 -top-5 md:-right-6" : "-bottom-5 -left-3 md:-left-6",
                )}
              >
                <Floating amplitude={7} duration={8.5}>
                  <FloatCard className="flex items-center gap-3 pr-5">
                    <IconTile name={lead.icon} size="sm" tone="solid" />
                    <span className="text-gc-small font-semibold text-gc-ink">{L(section.eyebrow)}</span>
                  </FloatCard>
                </Floating>
              </div>
            )}
          </BrandScreen>
        </Reveal>
      </div>

      <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4" stagger={0.07}>
        {section.points.map((point, i) => (
          <Stagger.Item key={i} className="h-full">
            <div className="h-full rounded-[20px] bg-white p-5 ring-1 ring-inset ring-gc-line/80 transition-shadow duration-[260ms] hover:shadow-gc-card md:p-6">
              <IconTile name={point.icon} size="sm" />
              <p className="mt-4 font-gc-display text-[1rem] font-bold leading-snug text-gc-ink">{L(point.label)}</p>
              <p className="mt-1.5 text-gc-small text-gc-ink-60">{L(point.body)}</p>
            </div>
          </Stagger.Item>
        ))}
      </Stagger>
    </Panel>
  );
}
