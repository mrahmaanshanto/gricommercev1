"use client";

import Image from "next/image";
import { FINAL_CTA } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { GcButton, Panel } from "../primitives";

/**
 * Section 11 — the final call to action, on the existing RoyalBlue →
 * DeepSkyBlue ground over the parcels photograph. One action: Book a Demo.
 * (The WhatsApp button is left off the homepage while the contact number is
 * sample data.)
 */
export function BrandCTA() {
  const { t, L } = useI18n();

  return (
    <Panel
      tone="royal"
      pattern="br"
      inner="py-14 md:py-20"
      background={
        <>
          <Image src="/merchants/rider-loading-parcels.webp" alt="" fill loading="lazy" sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-gc-royal/95 from-35% via-gc-royal/85 to-gc-sky/75" />
        </>
      }
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-gc-h2 text-white">{L(FINAL_CTA.title)}</h2>
        <p className="mx-auto mt-6 max-w-xl text-gc-lead text-white/85">{L(FINAL_CTA.body)}</p>

        <div className="mt-10 flex justify-center">
          <GcButton
            href="/contact?topic=demo"
            variant="white"
            size="lg"
            withArrow
            className="w-full sm:w-auto"
            onClick={() => trackEvent("demo_requested", { source: "final_cta" })}
          >
            {t.common.bookDemo}
          </GcButton>
        </div>
        <p className="mt-5 text-gc-small font-medium text-white/85">{L(FINAL_CTA.support)}</p>
      </div>
    </Panel>
  );
}
