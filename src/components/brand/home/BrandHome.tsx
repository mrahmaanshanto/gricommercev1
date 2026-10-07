import { BrandHero } from "./BrandHero";
import { BrandSolutions } from "./BrandSolutions";
import { BrandModules } from "./BrandModules";
import { BrandFaq } from "./BrandFaq";
import { BrandCTA } from "./BrandCTA";
import { DailyControl } from "./sections/DailyControl";
import { GrowthTools } from "./sections/GrowthTools";
import { Migration } from "./sections/Migration";
import { OrderStory } from "./sections/OrderStory";
import { SharedStock } from "./sections/SharedStock";
import { StartSteps } from "./sections/StartSteps";

/**
 * The homepage, rendered at `/`. The sections that decide whether a business
 * buys come first and get the most room — one order from sale to money, daily
 * money control, shared stock, and moving over from Shopify or WordPress —
 * then business fit, growth tools, the modules, how to start, FAQ and the demo
 * close. Copy lives in `data/copy/homepage.ts`; product visuals are real
 * captures of the merchant app in `/public/product`.
 */
export function BrandHome() {
  return (
    <div className="gc-scope bg-gc-canvas">
      <BrandHero />
      <OrderStory />
      <DailyControl />
      <SharedStock />
      <Migration />
      <BrandSolutions />
      <GrowthTools />
      <BrandModules />
      <StartSteps />
      <BrandFaq />
      <BrandCTA />
    </div>
  );
}
