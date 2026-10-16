import type { Ref } from "react";

/*
 * What every product scene is drawn on, without the animation library: the 560 × 440 canvas size, the tinted
 * backdrop and an empty placeholder of the same shape. The placeholder holds the scene's place in the page until
 * the scene itself (and its code) loads near the viewport (lazy.tsx), so nothing moves when it arrives.
 */

export const W = 560;
export const H = 440;

const STAGE = "relative w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#EEF4FF] via-white to-[#EAF6FE] ring-1 ring-inset ring-gc-royal-20/60";
export const STAGE_CLASS = STAGE;

export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="gc-drift absolute -left-[15%] -top-[25%] size-[70%] rounded-full gc-glow text-gc-royal/10" />
      <div className="gc-drift absolute -bottom-[30%] -right-[10%] size-[70%] rounded-full gc-glow text-gc-sky/15 [animation-delay:-7s]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(10,91,207,0.16) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(ellipse 75% 70% at 50% 45%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 50% 45%, black 20%, transparent 80%)",
        }}
      />
    </div>
  );
}

/** The scene's box, empty: same outer classes and shape as Scene in kit.tsx. */
export function ScenePlaceholder({ innerRef }: { innerRef?: Ref<HTMLDivElement> }) {
  return (
    <div ref={innerRef} className="relative -mx-4 sm:mx-0" aria-hidden>
      <div className={STAGE} style={{ aspectRatio: `${W} / ${H}` }}>
        <Backdrop />
      </div>
    </div>
  );
}
