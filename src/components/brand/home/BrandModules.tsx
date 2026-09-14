"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Stagger } from "@/components/motion";
import { MODULES_COPY } from "@/data/copy/home";
import { MODULES, MODULE_UI } from "@/data/copy/modules";
import { useI18n } from "@/i18n/provider";
import { IconTile, Panel, SectionHead } from "../primitives";

/**
 * H04 — the eight module groups, each card reading name → hook → description
 * → link. Two columns on desktop, one on mobile, in the same order. Cards take
 * their natural height: Bangla copy is never shortened to match.
 */
export function BrandModules() {
  const { L } = useI18n();

  return (
    <Panel id="modules" tone="white" pattern="tr">
      <SectionHead title={L(MODULES_COPY.title)} body={L(MODULES_COPY.body)} />

      <Stagger className="mt-12 grid gap-4 md:grid-cols-2" stagger={0.05}>
        {MODULES.map((m) => (
          <Stagger.Item key={m.slug} className="h-full">
            <Link
              href={`/features/${m.slug}`}
              className="group/m flex h-full flex-col rounded-[24px] bg-gc-canvas p-6 transition-[transform,box-shadow,background-color] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-gc-float md:p-8"
            >
              <div className="flex items-center gap-3">
                <IconTile name={m.icon} size="sm" />
                <span className="font-gc-display text-gc-small font-bold text-gc-royal">{L(m.name)}</span>
              </div>
              <h3 className="mt-5 text-gc-h3 text-gc-ink">{L(m.hook)}</h3>
              <p className="mt-3 flex-1 text-gc-body text-gc-ink-60">{L(m.description)}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal">
                {L(MODULE_UI.explore)}
                <ArrowRight aria-hidden className="size-4 transition-transform duration-[200ms] group-hover/m:translate-x-1" />
              </span>
            </Link>
          </Stagger.Item>
        ))}
      </Stagger>
    </Panel>
  );
}
