"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger } from "@/components/motion";
import { BrandScreen } from "@/components/brand/BrandScreen";
import { GcButton, IconTile, Panel, SectionHead } from "@/components/brand/primitives";
import { PageHero } from "./pages/PageHero";
import { MODULE_BY_SLUG, MODULE_UI, type ModuleEntry, type ModuleSlug } from "@/data/copy/modules";
import { SCREENS, type ProductScreen } from "@/data/screenshots";
import { useI18n } from "@/i18n/provider";
import { loc } from "@/i18n/types";
import { trackEvent } from "@/lib/analytics";

const MODULES_CRUMB = loc("Modules", "মডিউল");
const DEMO_HREF = "/contact?topic=demo";

/** Real product captures that match a module. A module without a matching
 *  capture shows none, rather than borrowing another module's screen. */
const MODULE_SCREENS: Partial<Record<ModuleSlug, ProductScreen>> = {
  courier: SCREENS.orders,
  orders: SCREENS.orders,
  storefront: SCREENS.landingPages,
  omnichannel: SCREENS.omnichannel,
  pos: SCREENS.pos,
  analytics: SCREENS.dashboard,
};

/**
 * One layout for the eight primary module pages, in the order the copy handoff
 * sets: breadcrumb → module name → D01 hero and actions → product capture →
 * D02 benefits → D03 workflow (#workflow) → D04 FAQ → D05 related modules →
 * D06 close. The same demo action opens and closes the page.
 */
export function ModulePage({ entry }: { entry: ModuleEntry }) {
  const { t, L } = useI18n();
  const screen = MODULE_SCREENS[entry.slug];
  const related = entry.related.flatMap((slug) => MODULE_BY_SLUG.get(slug) ?? []);

  return (
    <>
      <PageHero
        crumbs={[{ label: MODULES_CRUMB, href: "/features" }, { label: entry.name }]}
        eyebrow={entry.name}
        eyebrowIcon={entry.icon}
        title={entry.hero.title}
        body={entry.hero.body}
        aside={
          screen && (
            <figure>
              <BrandScreen priority screen={screen} pattern="br" />
              <figcaption className="mt-3 flex justify-end">
                <span className="rounded-full bg-gc-royal-10 px-2.5 py-0.5 text-[0.75rem] font-semibold text-gc-royal">
                  {t.common.demoData}
                </span>
              </figcaption>
            </figure>
          )
        }
      >
        <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row">
          <GcButton
            href={DEMO_HREF}
            size="lg"
            withArrow
            className="w-full sm:w-auto"
            onClick={() => trackEvent("demo_requested", { source: "module_hero" })}
          >
            {t.common.bookDemo}
          </GcButton>
          <GcButton href="#workflow" size="lg" variant="secondary" className="w-full sm:w-auto">
            {L(MODULE_UI.seeHow)}
          </GcButton>
        </div>
      </PageHero>

      {/* D02 */}
      <Panel tone="tint" pattern="bl" inner="py-12 md:py-16">
        <Stagger className="grid gap-4 md:grid-cols-3" stagger={0.07}>
          {entry.benefits.map((benefit, i) => (
            <Stagger.Item key={i} className="h-full">
              <div className="h-full rounded-[24px] bg-white p-6 ring-1 ring-inset ring-gc-line/80 md:p-7">
                <IconTile name={benefit.icon} />
                <h2 className="mt-5 font-gc-display text-[1.125rem] font-bold leading-snug text-gc-ink">
                  {L(benefit.title)}
                </h2>
                <p className="mt-2 text-gc-body text-gc-ink-60">{L(benefit.body)}</p>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </Panel>

      {/* D03 */}
      <Panel id="workflow" tone="white" pattern="tr">
        <SectionHead title={L(MODULE_UI.seeHow)} />
        <Reveal delay={0.06}>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
            {entry.workflow.map((step, i) => (
              <li key={i} className="flex h-full flex-col rounded-[20px] bg-gc-canvas p-5">
                <span
                  aria-hidden
                  className="grid size-9 place-items-center rounded-full bg-gc-royal font-gc-display text-gc-small font-bold text-white"
                >
                  {i + 1}
                </span>
                <span className="mt-4 font-gc-display text-[1rem] font-bold leading-snug text-gc-ink">{L(step)}</span>
              </li>
            ))}
          </ol>
          {entry.workflowNote && <p className="mt-6 text-gc-body text-gc-ink-60">{L(entry.workflowNote)}</p>}
        </Reveal>
      </Panel>

      {/* D04 */}
      <Panel tone="tint" pattern="bl" inner="py-14 md:py-20">
        <Reveal className="max-w-3xl">
          <h2 className="text-gc-h3 text-gc-ink">{L(entry.faq.question)}</h2>
          <p className="mt-4 text-gc-lead text-gc-ink-60">{L(entry.faq.answer)}</p>
        </Reveal>
      </Panel>

      {/* D05 */}
      {related.length > 0 && (
        <Panel tone="white" pattern="tr">
          <SectionHead title={L(MODULE_UI.related)} />
          <Stagger className="mt-10 grid gap-4 md:grid-cols-2" stagger={0.07}>
            {related.map((rel) => (
              <Stagger.Item key={rel.slug} className="h-full">
                <Link
                  href={`/features/${rel.slug}`}
                  className="group/rel flex h-full flex-col rounded-[24px] bg-gc-canvas p-6 transition-[transform,box-shadow,background-color] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-gc-float md:p-7"
                >
                  <div className="flex items-center gap-3">
                    <IconTile name={rel.icon} size="sm" />
                    <p className="font-gc-display text-[1.0625rem] font-bold text-gc-ink">{L(rel.name)}</p>
                  </div>
                  <p className="mt-4 flex-1 text-gc-body text-gc-ink-60">{L(rel.hook)}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal">
                    {L(MODULE_UI.explore)}
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-[200ms] group-hover/rel:translate-x-1" />
                  </span>
                </Link>
              </Stagger.Item>
            ))}
          </Stagger>
        </Panel>
      )}

      {/* D06 */}
      <Panel tone="royal" pattern="br" inner="py-16 md:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-gc-h2 text-white">{L(entry.close)}</h2>
          <div className="mt-9 flex justify-center">
            <GcButton
              href={DEMO_HREF}
              variant="white"
              size="lg"
              withArrow
              className="w-full sm:w-auto"
              onClick={() => trackEvent("demo_requested", { source: "module_close" })}
            >
              {t.common.bookDemo}
            </GcButton>
          </div>
        </Reveal>
      </Panel>
    </>
  );
}
