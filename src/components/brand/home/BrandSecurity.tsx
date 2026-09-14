"use client";

import { Stagger } from "@/components/motion";
import { SECURITY_COPY, SECURITY_ITEMS } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { IconTile, Panel, SectionHead } from "../primitives";

/** Section 18 — security and control. Capabilities only; nothing certified. */
export function BrandSecurity() {
  const { L } = useI18n();

  return (
    <Panel tone="dark" pattern="br">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHead
            tone="dark"
            eyebrow={L(SECURITY_COPY.eyebrow)}
            title={L(SECURITY_COPY.title)}
            body={L(SECURITY_COPY.body)}
          />
        </div>

        <Stagger className="grid gap-3 sm:grid-cols-2" stagger={0.07}>
          {SECURITY_ITEMS.map((item) => (
            <Stagger.Item key={item.icon} className="h-full">
              <div className="flex h-full flex-col rounded-[22px] bg-white/[0.04] p-6 ring-1 ring-inset ring-white/10 md:p-7">
                <IconTile name={item.icon} tone="dark" />
                <p className="mt-5 font-gc-display text-[1.0625rem] font-bold text-white">{L(item.label)}</p>
                <p className="mt-2 text-gc-small text-white/60">{L(item.detail)}</p>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </Panel>
  );
}
