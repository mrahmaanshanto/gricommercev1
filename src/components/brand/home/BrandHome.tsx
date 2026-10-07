import { BrandHero } from "./BrandHero";
import { BrandProblem } from "./BrandProblem";
import { BrandModules } from "./BrandModules";
import { BrandProof } from "./BrandProof";
import { BrandSolutions } from "./BrandSolutions";
import { BrandFaq } from "./BrandFaq";
import { BrandCTA } from "./BrandCTA";
import { ChannelAnalytics } from "./sections/ChannelAnalytics";
import { LandingBuilder } from "./sections/LandingBuilder";
import { MobileApps } from "./sections/MobileApps";
import { OneDashboard } from "./sections/OneDashboard";
import { SocialPlanner } from "./sections/SocialPlanner";
import { StoreSync } from "./sections/StoreSync";

/**
 * The homepage in the GridCommerce Brand Guidelines design.
 *
 * Rendered at `/`. The copy handoff's sections (H02–H08: hero, daily
 * questions, the eight module groups, one order followed end to end, business
 * types, FAQ and the demo close) are interleaved with the October 2026
 * showcase sections in `sections/`: one dashboard, channel analytics, the
 * social planner, the AI landing page builder, store sync and the apps. Copy lives in `data/copy/`; this
 * file only composes the sections in order.
 */
export function BrandHome() {
  return (
    <div className="gc-scope bg-gc-canvas">
      <BrandHero />
      <OneDashboard />
      <BrandProblem />
      <BrandModules />
      <ChannelAnalytics />
      <SocialPlanner />
      <LandingBuilder />
      <BrandProof />
      <StoreSync />
      <BrandSolutions />
      <MobileApps />
      <BrandFaq />
      <BrandCTA />
    </div>
  );
}
