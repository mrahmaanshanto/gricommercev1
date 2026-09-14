"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion";
import { CTA_COPY } from "@/data/copy/home";
import { CONTACT, isPending } from "@/data/site";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { GcButton, Panel } from "../primitives";

/** Final call to action: the RoyalBlue → DeepSkyBlue ground (p.39) laid over a
 *  photograph of parcels leaving a shop, strong enough to keep white text legible. */
export function BrandCTA() {
  const { t, L } = useI18n();
  const whatsappReady = !isPending(CONTACT.whatsapp);

  return (
    <Panel
      tone="royal"
      pattern="br"
      inner="py-20 md:py-28"
      background={
        <>
          <Image src="/merchants/rider-loading-parcels.webp" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-gc-royal/95 from-35% via-gc-royal/85 to-gc-sky/75" />
        </>
      }
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-gc-h2 text-white">{L(CTA_COPY.title)}</h2>
        <p className="mx-auto mt-6 max-w-xl text-gc-lead text-white/85">{L(CTA_COPY.body)}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <GcButton
            href="/signup"
            variant="white"
            size="lg"
            withArrow
            className="w-full sm:w-auto"
            onClick={() => trackEvent("start_free_clicked", { source: "final_cta" })}
          >
            {t.common.startFree}
          </GcButton>
          <GcButton
            href="/contact?topic=demo"
            variant="onDark"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => trackEvent("demo_requested", { source: "final_cta" })}
          >
            {t.common.bookDemo}
          </GcButton>
        </div>

        {whatsappReady && (
          <button
            type="button"
            onClick={() => trackEvent("whatsapp_clicked", { source: "final_cta" })}
            className="mt-7 text-gc-small font-semibold text-white underline-offset-4 hover:underline"
          >
            {t.common.talkWhatsApp}
          </button>
        )}
      </Reveal>
    </Panel>
  );
}
