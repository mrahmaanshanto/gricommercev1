"use client";

import { cn } from "@/lib/cn";
import { useCards } from "../HeroGallery";
import { FeedCopy } from "./HeroFeed";

/**
 * Variant 9 — Widget feed. Variant 6's left column (headline with the chart
 * chip, body, dark and light buttons, proof row); on the right the current
 * hero's module widgets, in two columns that scroll up in a slight 3D tilt
 * with soft fades, the motion of variant 6.
 */
export function HeroWidgetFeed() {
  const cards = useCards();
  const columns = [cards.filter((_, i) => i % 2 === 0), cards.filter((_, i) => i % 2 === 1)];

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[20px] bg-gradient-to-br from-white via-[#F4F8FF] to-[#EAF2FE]">
        <div aria-hidden className="pointer-events-none absolute -right-[10%] -top-[20%] -z-10 size-[42rem] rounded-full bg-gc-royal/10 blur-[110px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-[30%] left-[10%] -z-10 size-[34rem] rounded-full bg-gc-sky/15 blur-[110px]" />
        <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-5 pb-8 pt-12 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:py-0">
          <FeedCopy />

          {/* The widgets, scrolling up in a slight tilt */}
          <div aria-hidden className="relative h-[440px] min-w-0 sm:h-[520px] lg:h-[660px] [perspective:1400px]">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
              }}
            >
              <div className="mx-auto grid w-full max-w-[360px] grid-cols-2 gap-3 [transform:rotateX(6deg)_rotateY(-5deg)_rotateZ(1deg)] [transform-style:preserve-3d] sm:max-w-[400px] lg:max-w-[420px] lg:gap-4 lg:[transform:rotateX(10deg)_rotateY(-12deg)_rotateZ(2deg)]">
                {columns.map((col, c) => (
                  <div key={c} className={cn("min-w-0", c === 1 && "pt-20")}>
                    <div
                      className="gc-marquee-y flex flex-col items-center gap-3 pb-3 lg:gap-4 lg:pb-4"
                      style={{ ["--gc-marquee-duration" as string]: c ? "34s" : "28s" }}
                    >
                      {[...col, ...col].map((card, i) => (
                        <div key={`${card.key}-${i}`} className="w-full [&>*]:!w-full">
                          {card.node}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
