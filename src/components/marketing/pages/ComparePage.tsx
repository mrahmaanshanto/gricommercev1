"use client";

import { BrandCTA } from "@/components/brand/home/BrandCTA";
import { CompareSection } from "@/components/brand/home/sections/CompareSection";
import { FeatureSection } from "@/components/brand/home/sections/FeatureSection";
import { PricingSection } from "@/components/brand/home/sections/PricingSection";
import { COMPARE } from "@/data/copy/compare";
import { PageHero } from "./PageHero";

/** /compare — GridCommerce against Shopify and WordPress + WooCommerce: cost, features, fraud check, plans. */
export function ComparePage() {
  return (
    <div className="gc-scope bg-gc-canvas">
      <PageHero crumbs={[{ label: COMPARE.eyebrow }]} eyebrow={COMPARE.eyebrow} title={COMPARE.pageTitle} body={COMPARE.pageBody} align="center" pattern="tl" />
      <CompareSection full id="table" />
      <FeatureSection id="fraud" />
      <PricingSection />
      <BrandCTA />
    </div>
  );
}
