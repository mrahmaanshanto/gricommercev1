"use client";

import { useSyncExternalStore } from "react";
import { DEFAULT_HERO, readHeroChoice, readPreviewEnabled, subscribePreview } from "@/components/dev/previewStore";
import { BrandHero } from "../BrandHero";
import { HomeHero } from "./HomeHero";
import { HeroCentered } from "./variants/HeroCentered";
import { HeroFeed } from "./variants/HeroFeed";
import { HeroLanes } from "./variants/HeroLanes";
import { HeroMarker } from "./variants/HeroMarker";
import { HeroPhones } from "./variants/HeroPhones";
import { HeroSpotlight } from "./variants/HeroSpotlight";
import { HeroStore } from "./variants/HeroStore";
import { HeroTilt } from "./variants/HeroTilt";

/**
 * Renders the hero picked in the hero preview panel (components/dev) from the
 * candidate layouts. Hero 9 (HomeHero) is the default, for visitors and for
 * anyone who has not picked another.
 */

const HEROES = [BrandHero, HeroSpotlight, HeroTilt, HeroCentered, HeroMarker, HeroPhones, HeroFeed, HeroStore, HeroLanes, HomeHero];

export function HeroSwitch() {
  const enabled = useSyncExternalStore(subscribePreview, readPreviewEnabled, () => false);
  const stored = useSyncExternalStore(subscribePreview, readHeroChoice, () => DEFAULT_HERO);
  const choice = enabled ? stored : DEFAULT_HERO;
  const Hero = HEROES[choice] ?? HomeHero;
  return <Hero key={choice} />;
}
