"use client";

import { useSyncExternalStore } from "react";
import { readHeroChoice, readPreviewEnabled, subscribePreview } from "@/components/dev/previewStore";
import { BrandHero } from "../BrandHero";
import { HeroCentered } from "./variants/HeroCentered";
import { HeroFeed } from "./variants/HeroFeed";
import { HeroLanes } from "./variants/HeroLanes";
import { HeroMarker } from "./variants/HeroMarker";
import { HeroPhones } from "./variants/HeroPhones";
import { HeroSpotlight } from "./variants/HeroSpotlight";
import { HeroStore } from "./variants/HeroStore";
import { HeroTilt } from "./variants/HeroTilt";

/**
 * Renders the hero picked in the design preview panel (components/dev) from
 * five candidate layouts, or the current one. Visitors who have not switched
 * the preview on always get the current hero. Once one is chosen, put it in
 * BrandHome and delete the others and this file.
 */

const HEROES = [BrandHero, HeroSpotlight, HeroTilt, HeroCentered, HeroMarker, HeroPhones, HeroFeed, HeroStore, HeroLanes];

export function HeroSwitch() {
  const enabled = useSyncExternalStore(subscribePreview, readPreviewEnabled, () => false);
  const stored = useSyncExternalStore(subscribePreview, readHeroChoice, () => 0);
  const choice = enabled ? stored : 0;
  const Hero = HEROES[choice] ?? BrandHero;
  return <Hero key={choice} />;
}
