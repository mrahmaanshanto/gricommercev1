"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { readPreviewEnabled, subscribePreview } from "./previewStore";

const HeroPreview = dynamic(() => import("./HeroPreview").then((m) => m.HeroPreview), { ssr: false });

/** The design preview panel, downloaded only in a browser that switched it on (`?preview`). */
export function LazyHeroPreview() {
  const enabled = useSyncExternalStore(subscribePreview, readPreviewEnabled, () => false);
  return enabled ? <HeroPreview /> : null;
}
