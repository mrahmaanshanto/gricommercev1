"use client";

import Image from "next/image";
import { Reveal, Stagger } from "@/components/motion";
import { INTEGRATION_LOGOS } from "@/data/integrationLogos";
import { INTEGRATION_GROUPS, INTEGRATIONS_COPY } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { IconTile, Panel, SectionHead } from "../primitives";

/**
 * Section 16 — integrations, as a logo wall grouped by category.
 *
 * Marks are shown as supplied — never recoloured or cropped — each on a
 * neutral tile. Symbols get their name beside them; wordmarks already carry
 * it. An item with no mark in the pack falls back to its name in type.
 */
export function BrandIntegrations() {
  const { L } = useI18n();

  return (
    <Panel tone="white" pattern="br">
      <SectionHead
        align="center"
        eyebrow={L(INTEGRATIONS_COPY.eyebrow)}
        title={L(INTEGRATIONS_COPY.title)}
        body={L(INTEGRATIONS_COPY.body)}
      />

      <Stagger className="mt-14 space-y-3" stagger={0.07}>
        {INTEGRATION_GROUPS.map((group) => (
          <Stagger.Item key={group.id}>
            <div className="grid gap-4 rounded-[24px] bg-gc-canvas p-4 md:grid-cols-[190px_minmax(0,1fr)] md:items-center md:p-5 lg:grid-cols-[210px_minmax(0,1fr)]">
              <div className="flex items-center gap-3 md:pl-2">
                <IconTile name={group.icon} size="sm" tone="solid" />
                <p className="font-gc-display text-[1.0625rem] font-bold text-gc-ink">{L(group.label)}</p>
              </div>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                {group.items.map((item) => (
                  <LogoTile key={item} name={item} />
                ))}
              </ul>
            </div>
          </Stagger.Item>
        ))}
      </Stagger>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-xl text-center text-gc-small text-gc-ink-50">{L(INTEGRATIONS_COPY.note)}</p>
      </Reveal>
    </Panel>
  );
}

function LogoTile({ name }: { name: string }) {
  const logo = INTEGRATION_LOGOS[name];
  const dark = logo?.ground === "dark";

  return (
    <li
      className={cn(
        "flex h-[72px] items-center justify-center rounded-2xl px-3.5 ring-1 ring-inset transition-shadow duration-[240ms] hover:shadow-gc-card",
        dark ? "bg-gc-dark ring-gc-dark" : "bg-white ring-gc-line/80",
      )}
    >
      {!logo ? (
        <span className="text-center text-gc-small font-semibold text-gc-ink-70">{name}</span>
      ) : logo.kind === "icon" ? (
        <span className="flex min-w-0 items-center gap-2.5">
          <Image
            src={logo.src}
            alt=""
            width={logo.width}
            height={logo.height}
            className="size-7 shrink-0 object-contain"
          />
          <span className="text-[0.8125rem] font-semibold leading-tight text-gc-ink-70">{name}</span>
        </span>
      ) : (
        <Image
          src={logo.src}
          alt={name}
          width={logo.width}
          height={logo.height}
          className={cn("w-auto max-w-full object-contain", logo.height_class)}
        />
      )}
    </li>
  );
}
