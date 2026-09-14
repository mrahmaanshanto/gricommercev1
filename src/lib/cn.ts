import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge cannot classify our custom type-scale utilities (`text-gc-h2`,
 * `text-gc-lead`, …). Left unconfigured it treats them as text *colour*
 * classes, so `cn("text-gc-h2", "text-gc-ink")` silently drops the size and
 * the heading renders at body size. Teaching it the font-size group fixes that.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "gc-display",
            "gc-h1",
            "gc-h2",
            "gc-h3",
            "gc-h4",
            "gc-lead",
            "gc-body",
            "gc-small",
            "gc-eyebrow",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
