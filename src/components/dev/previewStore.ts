/**
 * Shared state for the design preview panel (a review tool, not part of the
 * site): whether it is shown in this browser, and which hero is picked. The
 * hero and font are chosen (Hero 9, pair 4), so the panel is OFF for visitors:
 * `?preview` (or `?hero=` / `?fonts`) turns it on in that browser, `?preview=off`
 * turns it off. Off, neither the panel nor the other heroes are downloaded.
 * When the choices are final, delete components/dev and the hero variants.
 */

const ENABLED_KEY = "gc.preview";
const HERO_KEY = "gc.hero";
const EVENT = "gc:preview";

export const HERO_COUNT = 10;
/** Hero 9 (HomeHero) is the chosen hero. */
export const DEFAULT_HERO = 9;

export function subscribePreview(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

export function readPreviewEnabled() {
  try {
    const q = new URLSearchParams(window.location.search);
    if (q.get("preview") === "off") localStorage.setItem(ENABLED_KEY, "off");
    else if (q.has("preview") || q.has("fonts") || q.has("hero")) localStorage.setItem(ENABLED_KEY, "on");
    return localStorage.getItem(ENABLED_KEY) === "on";
  } catch {
    return false;
  }
}

export function readHeroChoice() {
  try {
    const q = new URLSearchParams(window.location.search).get("hero");
    if (q && /^\d$/.test(q) && Number(q) < HERO_COUNT) return Number(q);
    const v = Number(localStorage.getItem(HERO_KEY));
    const raw = localStorage.getItem(HERO_KEY);
    return raw !== null && Number.isInteger(v) && v >= 0 && v < HERO_COUNT ? v : DEFAULT_HERO;
  } catch {
    return DEFAULT_HERO;
  }
}

export function setHeroChoice(i: number) {
  try {
    localStorage.setItem(HERO_KEY, String(i));
    const url = new URL(window.location.href);
    if (url.searchParams.has("hero")) {
      url.searchParams.set("hero", String(i));
      window.history.replaceState(null, "", url);
    }
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(EVENT));
}
