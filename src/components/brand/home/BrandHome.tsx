import { BrandHero } from "./BrandHero";
import { BrandSolutions } from "./BrandSolutions";
import { BrandFaq } from "./BrandFaq";
import { BrandCTA } from "./BrandCTA";
import { Connections } from "./sections/Connections";
import { DailyControl } from "./sections/DailyControl";
import { FeatureSection } from "./sections/FeatureSection";
import { Migration } from "./sections/Migration";
import { MobileApps } from "./sections/MobileApps";
import { OrderStory } from "./sections/OrderStory";
import { SharedStock } from "./sections/SharedStock";
import { StartSteps } from "./sections/StartSteps";
import { Themes } from "./sections/Themes";

/**
 * The homepage, rendered at `/`, ordered by what matters most to an online
 * seller: one order from sale to bank, the inbox where sales start, today's
 * money, then the tools that bring the next sale (campaign pages, server-side
 * tracking, social posts, cart recovery), moving over from Shopify or
 * WordPress, integrations, storefront themes, counter + online stock, business
 * fit, the mobile app, how to start, FAQ and the demo close. Each feature sits
 * beside its own animated product scene (`home/scenes`). Copy lives in
 * `data/copy/homepage.ts` and `data/copy/scenes.ts`.
 */
export function BrandHome() {
  return (
    <div className="gc-scope bg-gc-canvas">
      <BrandHero />
      <OrderStory />
      <FeatureSection id="inbox" />
      <DailyControl />
      <FeatureSection id="store" flip tone="tint" chipTone="accent" />
      <FeatureSection id="tracking" />
      <FeatureSection id="social" flip tone="tint" chipTone="accent" />
      <FeatureSection id="recovery" />
      <Migration />
      <Connections />
      <Themes />
      <SharedStock />
      <BrandSolutions />
      <MobileApps />
      <StartSteps />
      <BrandFaq />
      <BrandCTA />
    </div>
  );
}
