"use client";

import Image from "next/image";
import { Floating, Reveal, Stagger } from "@/components/motion";
import { MIGRATION_COPY, MIGRATION_SOURCES } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { loc } from "@/i18n/types";
import { FloatCard, GcButton, IconTile, Panel, SectionHead } from "../primitives";

const MIGRATION_CTA = loc("See how migration works", "মাইগ্রেশন কীভাবে হয় দেখুন");

/** Migration. The copy handoff folded this into the homepage FAQ; the section
 *  itself remains on /migration. */
export function BrandMigration() {
  const { L } = useI18n();
  const sheets = MIGRATION_SOURCES.find((s) => s.id === "sheets");

  return (
    <Panel tone="tint" pattern="tr">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[28px] md:rounded-[36px]">
            <Image
              src="/merchants/merchant-grocery.webp"
              alt="Shopkeeper on the phone beside a ledger notebook at the counter of a small neighbourhood grocery shop"
              width={1400}
              height={1050}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
          {sheets && (
            <div aria-hidden className="absolute -bottom-5 left-5 hidden sm:block md:left-8">
              <Floating amplitude={7} duration={9}>
                <FloatCard className="flex items-center gap-3 pr-5">
                  <IconTile name={sheets.icon} size="sm" tone="solid" />
                  <span className="text-gc-small font-semibold text-gc-ink">{L(sheets.label)}</span>
                </FloatCard>
              </Floating>
            </div>
          )}
        </Reveal>

        <div className="max-w-[35rem]">
          <SectionHead
            eyebrow={L(MIGRATION_COPY.eyebrow)}
            title={L(MIGRATION_COPY.title)}
            body={L(MIGRATION_COPY.body)}
          />

          <Stagger className="mt-10 space-y-3" stagger={0.08}>
            {MIGRATION_SOURCES.map((source) => (
              <Stagger.Item key={source.id}>
                <div className="flex gap-4 rounded-[20px] bg-white p-5 ring-1 ring-inset ring-gc-line/80">
                  <IconTile name={source.icon} size="sm" />
                  <div>
                    <p className="font-gc-display text-[1rem] font-bold text-gc-ink">{L(source.label)}</p>
                    <p className="mt-1 text-gc-small text-gc-ink-60">{L(source.detail)}</p>
                  </div>
                </div>
              </Stagger.Item>
            ))}
          </Stagger>

          <Reveal delay={0.12} className="mt-9">
            <GcButton href="/migration" variant="secondary" withArrow>
              {L(MIGRATION_CTA)}
            </GcButton>
          </Reveal>
        </div>
      </div>
    </Panel>
  );
}
