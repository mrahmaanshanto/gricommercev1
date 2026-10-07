import type { MetadataRoute } from "next";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { SITE } from "@/data/site";

/** Walks the app directory so new static routes are indexed automatically. */
function collectRoutes(dir: string, base = ""): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith("_") || entry.startsWith("[") || entry === "fonts") continue;
    const full = join(dir, entry);
    if (!statSync(full).isDirectory()) continue;
    out.push(`${base}/${entry}`, ...collectRoutes(full, `${base}/${entry}`));
  }
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...new Set(collectRoutes(join(process.cwd(), "src/app")))];
  const now = new Date();

  return routes
    // /features/wholesale keeps its route while the wholesale module is
    // switched off, but is no longer listed or linked anywhere.
    .filter((r) => !["/login", "/signup", "/features/wholesale"].includes(r))
    .map((route) => ({
      url: `${SITE.url}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route.split("/").length > 2 ? 0.6 : 0.8,
    }));
}
