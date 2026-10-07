"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CloudDownload } from "lucide-react";
import { Reveal } from "@/components/motion";
import { MIGRATION } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { GcButton, Panel } from "../../primitives";
import { MigrateScene } from "../scenes/MigrateScene";
import { HOME_INNER, IconChip, TwoTone } from "./kit";

/**
 * Migration assistant (Shopify / WordPress), emphasised: the pitch beside an
 * animated scene of the move — connect, choose, import, check, go live.
 */
export function Migration() {
  const { L } = useI18n();

  return (
    <Panel tone="white" pattern="tr" inner={HOME_INNER} background={<div className="absolute inset-0 bg-gradient-to-br from-gc-royal-10 via-white to-gc-sky-10" />}>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
        <Reveal className="min-w-0">
          <p className="gc-eyebrow inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-gc-eyebrow font-semibold uppercase text-gc-royal ring-1 ring-gc-royal-20">
            <span aria-hidden className="size-1.5 rounded-full bg-gc-royal" />
            {L(MIGRATION.eyebrow)}
          </p>
          <TwoTone className="mt-5" title={L(MIGRATION.title)} chip={<IconChip icon={CloudDownload} tone="royal" tilt={6} />} />
          <p className="mt-5 text-gc-lead text-gc-ink-60">{L(MIGRATION.body)}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3" aria-hidden>
            <span className="grid h-11 place-items-center rounded-xl bg-white px-3 ring-1 ring-gc-line">
              <Image src="/integrations/shopify.webp" alt="" width={300} height={86} className="h-6 w-auto" />
            </span>
            <span className="grid h-11 place-items-center rounded-xl bg-white px-3 ring-1 ring-gc-line">
              <Image src="/integrations/wordpress.webp" alt="" width={300} height={190} className="h-8 w-auto" />
            </span>
          </div>


          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <GcButton href="/contact?topic=demo" size="lg" withArrow className="w-full sm:w-auto" onClick={() => trackEvent("migration_requested", { source: "home" })}>
              {L(MIGRATION.cta)}
            </GcButton>
            <Link href="/migration" className="inline-flex min-h-11 items-center justify-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline">
              {L(MIGRATION.link)}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <p className="mt-3 text-[0.8125rem] text-gc-ink-60">{L(MIGRATION.note)}</p>
        </Reveal>

        <Reveal direction="left" className="min-w-0">
          <MigrateScene />
        </Reveal>
      </div>
    </Panel>
  );
}
