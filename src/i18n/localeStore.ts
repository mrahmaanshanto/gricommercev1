import type { Locale } from "./types";

/**
 * Locale is held in a tiny external store rather than component state that is
 * synced from an effect. React 19 flags setState-inside-effect as a cascading
 * render, and useSyncExternalStore is the correct shape for "read a value that
 * lives outside React" — here, localStorage.
 *
 * The server snapshot is always the default locale, so SSR output is stable and
 * hydration does not mismatch.
 */

const STORAGE_KEY = "gridcommerce.locale";
const DEFAULT: Locale = "en";

let current: Locale | null = null;
const listeners = new Set<() => void>();

function read(): Locale {
  if (current) return current;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    current = stored === "bn" || stored === "en" ? stored : DEFAULT;
  } catch {
    current = DEFAULT;
  }
  return current;
}

export const localeStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot: read,
  getServerSnapshot: (): Locale => DEFAULT,
  set(next: Locale) {
    if (current === next) return;
    current = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be unavailable — the switch still works for this session */
    }
    listeners.forEach((l) => l());
  },
};
