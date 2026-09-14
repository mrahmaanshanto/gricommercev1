"use client";

import { Footer } from "@/components/layout/Footer";

/** The footer, rounded into the canvas like every other panel. */
export function BrandFooter() {
  return (
    <div className="gc-scope bg-gc-canvas px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
      <Footer />
    </div>
  );
}
