"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Reads a media query without syncing it into state from an effect.
 * Returns `false` during server rendering so markup stays stable.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (listener: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", listener);
      return () => mq.removeEventListener("change", listener);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** True only on devices with a precise, hovering pointer (desktop mice). */
export function useFinePointer() {
  return useMediaQuery("(hover: hover) and (pointer: fine)");
}
