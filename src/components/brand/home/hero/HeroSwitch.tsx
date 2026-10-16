"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { DEFAULT_HERO, readHeroChoice, readPreviewEnabled, subscribePreview } from "@/components/dev/previewStore";
import { HomeHero } from "./HomeHero";

/**
 * The homepage hero: Hero 9 (HomeHero), built into the page. The other candidate
 * layouts are only for the design preview panel (components/dev, `?preview`):
 * they are separate chunks, downloaded when that panel picks one, so visitors
 * never load them.
 */

const VARIANTS = [
  () => import("../BrandHero").then((m) => m.BrandHero),
  () => import("./variants/HeroSpotlight").then((m) => m.HeroSpotlight),
  () => import("./variants/HeroTilt").then((m) => m.HeroTilt),
  () => import("./variants/HeroCentered").then((m) => m.HeroCentered),
  () => import("./variants/HeroMarker").then((m) => m.HeroMarker),
  () => import("./variants/HeroPhones").then((m) => m.HeroPhones),
  () => import("./variants/HeroFeed").then((m) => m.HeroFeed),
  () => import("./variants/HeroStore").then((m) => m.HeroStore),
  () => import("./variants/HeroLanes").then((m) => m.HeroLanes),
].map((load) => dynamic(load, { ssr: false, loading: () => <HomeHero /> }));

export function HeroSwitch() {
  const enabled = useSyncExternalStore(subscribePreview, readPreviewEnabled, () => false);
  const stored = useSyncExternalStore(subscribePreview, readHeroChoice, () => DEFAULT_HERO);
  const choice = enabled ? stored : DEFAULT_HERO;
  const Hero = (choice !== DEFAULT_HERO && VARIANTS[choice]) || HomeHero;
  return <Hero key={choice} />;
}
