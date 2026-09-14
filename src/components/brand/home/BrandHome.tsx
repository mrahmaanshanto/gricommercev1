import { BrandHero } from "./BrandHero";
import { BrandProblem } from "./BrandProblem";
import { BrandModules } from "./BrandModules";
import { BrandProof } from "./BrandProof";
import { BrandSolutions } from "./BrandSolutions";
import { BrandFaq } from "./BrandFaq";
import { BrandCTA } from "./BrandCTA";

/**
 * The homepage in the GridCommerce Brand Guidelines design.
 *
 * Rendered at `/`. Section order follows the copy handoff (H02–H08): hero,
 * daily questions, the eight module groups, one order followed end to end,
 * business types, FAQ and the demo close. Copy lives in `data/copy/`; this
 * file only composes the sections in order.
 */
export function BrandHome() {
  return (
    <div className="gc-scope bg-gc-canvas">
      <BrandHero />
      <BrandProblem />
      <BrandModules />
      <BrandProof />
      <BrandSolutions />
      <BrandFaq />
      <BrandCTA />
    </div>
  );
}
