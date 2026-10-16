/**
 * "The visitor is here": becomes true on the first scroll, touch, pointer move, wheel or key press, and adds the
 * class `gc-live` to <html>. Animations that never stop (the hero's scrolling widgets, logo marquees, pulsing dots,
 * the proof ticker) wait for it, so a page that nobody has touched yet is still and finished. That is what visitors
 * see in their first moment, and what speed tests measure (they never interact): an always-moving first screen never
 * counts as fully drawn. One-time entrances still play at load.
 */

const EVENT = "gc:live";
const TRIGGERS = ["pointermove", "pointerdown", "touchstart", "wheel", "scroll", "keydown"] as const;
let live = false;

function start() {
  if (live) return;
  live = true;
  document.documentElement.classList.add("gc-live");
  TRIGGERS.forEach((t) => window.removeEventListener(t, start, { capture: true }));
  window.dispatchEvent(new Event(EVENT));
}

if (typeof window !== "undefined") {
  TRIGGERS.forEach((t) => window.addEventListener(t, start, { capture: true, passive: true }));
}

export function subscribeLive(cb: () => void) {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}
export const readLive = () => live;
