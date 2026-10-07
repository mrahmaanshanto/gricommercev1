import { HeroSwitch } from "./hero/HeroSwitch";
import { BrandSolutions } from "./BrandSolutions";
import { BrandFaq } from "./BrandFaq";
import { BrandCTA } from "./BrandCTA";
import { CompareSection } from "./sections/CompareSection";
import { Connections } from "./sections/Connections";
import { DailyControl } from "./sections/DailyControl";
import { FeatureSection } from "./sections/FeatureSection";
import { Migration } from "./sections/Migration";
import { MobileApps } from "./sections/MobileApps";
import { PricingSection } from "./sections/PricingSection";
import { OrderStory } from "./sections/OrderStory";
import { SharedStock } from "./sections/SharedStock";
import { StartSteps } from "./sections/StartSteps";
import { Themes } from "./sections/Themes";

/**
 * The homepage, rendered at `/`, ordered by what matters most to an online
 * seller: one order from sale to bank, stopping fake orders, the inbox,
 * today's money, the tools that bring the next sale (campaign pages, ad
 * tracking, social posts, cart recovery), how GridCommerce compares with
 * Shopify and WordPress, moving over, integrations, store themes, counter +
 * online stock, business fit, the mobile app, pricing, how to start, FAQ and
 * the demo close. Each feature sits beside its own animated product scene
 * (`home/scenes`). Copy lives in `data/copy/`.
 */
export function BrandHome() {
  return (
    <div className="gc-scope bg-gc-canvas">
      <HeroSwitch />
      <OrderStory />
      <FeatureSection id="fraud" flip />
      <FeatureSection id="inbox" tone="tint" />
      <DailyControl />
      <FeatureSection id="store" flip tone="tint" chipTone="accent" />
      <FeatureSection id="tracking" />
      <FeatureSection id="social" flip tone="tint" chipTone="accent" />
      <FeatureSection id="recovery" />
      <CompareSection />
      <Migration />
      <Connections />
      <Themes />
      <SharedStock />
      <BrandSolutions />
      <MobileApps />
      <PricingSection />
      <StartSteps />
      <BrandFaq />
      <BrandCTA />
    </div>
  );
}
