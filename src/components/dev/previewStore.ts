/**
 * Shared state for the design preview panel (a review tool, not part of the
 * site): whether it is switched on for this browser, and which hero is picked.
 * Turn it on with `?preview` (or the older `?fonts` / `?hero`) on any page; it
 * is then remembered in this browser until `?preview=off`. It is always on in
 * development. Visitors who never use the link never see it.
 */

const ENABLED_KEY = "gc.preview";
const HERO_KEY = "gc.hero";
const EVENT = "gc:preview";

export const HERO_COUNT = 6;

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
    if (q.get("preview") === "off") {
      localStorage.removeItem(ENABLED_KEY);
      return false;
    }
    if (q.has("preview") || q.has("fonts") || q.has("hero")) localStorage.setItem(ENABLED_KEY, "1");
    return process.env.NODE_ENV !== "production" || localStorage.getItem(ENABLED_KEY) === "1";
  } catch {
    return false;
  }
}

export function readHeroChoice() {
  try {
    const q = new URLSearchParams(window.location.search).get("hero");
    if (q && /^\d$/.test(q) && Number(q) < HERO_COUNT) return Number(q);
    const v = Number(localStorage.getItem(HERO_KEY));
    return Number.isInteger(v) && v >= 0 && v < HERO_COUNT ? v : 0;
  } catch {
    return 0;
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
