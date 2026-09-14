import { HOME_SHOWCASES } from "@/data/homeShowcases";
import { AI_COPY, AI_STEPS, RECOVERY_COPY, RECOVERY_STEPS } from "@/data/sample";
import { BrandHero } from "./BrandHero";
import { BrandTrust } from "./BrandTrust";
import { BrandFragmentation } from "./BrandFragmentation";
import { BrandCapabilityTabs } from "./BrandCapabilityTabs";
import { BrandShowcase } from "./BrandShowcase";
import { BrandOrderDetail } from "./BrandOrderDetail";
import { BrandCourier } from "./BrandCourier";
import { BrandAttribution } from "./BrandAttribution";
import { BrandFlow } from "./BrandFlow";
import { BrandSolutions } from "./BrandSolutions";
import { BrandIntegrations } from "./BrandIntegrations";
import { BrandMigration } from "./BrandMigration";
import { BrandSecurity } from "./BrandSecurity";
import { BrandStories } from "./BrandStories";
import { BrandScrollStory } from "./BrandScrollStory";
import { BrandCTA } from "./BrandCTA";

/**
 * The homepage in the GridCommerce Brand Guidelines design.
 *
 * Rendered at `/`. Copy lives in `data/copy/home.ts` and the data files it
 * references; this file only composes the sections in order.
 */
export function BrandHome() {
  const [omnichannel, orders, ...restShowcases] = HOME_SHOWCASES;

  return (
    <div className="gc-scope bg-gc-canvas">
      <BrandHero />
      <BrandTrust />
      <BrandFragmentation />
      <BrandCapabilityTabs />

      <BrandShowcase section={omnichannel} index={0} />
      <BrandShowcase section={orders} index={1} />
      <BrandOrderDetail />
      {restShowcases.map((section, i) => (
        <BrandShowcase key={section.id} section={section} index={i + 2} />
      ))}

      <BrandCourier />
      <BrandAttribution />

      <BrandFlow
        id="cart-recovery"
        eyebrow={RECOVERY_COPY.eyebrow}
        title={RECOVERY_COPY.title}
        body={RECOVERY_COPY.body}
        steps={RECOVERY_STEPS}
        tone="tint"
        pattern="bl"
      />
      <BrandFlow
        id="ai-product-creation"
        eyebrow={AI_COPY.eyebrow}
        title={AI_COPY.title}
        body={AI_COPY.body}
        steps={AI_STEPS}
        humanLabel={AI_COPY.humanLabel}
        pattern="tr"
        image={{
          src: "/merchants/merchant-product-photography-v2.webp",
          alt: "Merchant photographing a product on a small table to create a new catalogue listing",
        }}
      />

      <BrandSolutions />
      <BrandIntegrations />
      <BrandMigration />
      <BrandSecurity />
      <BrandStories />
      <BrandScrollStory />
      <BrandCTA />
    </div>
  );
}
