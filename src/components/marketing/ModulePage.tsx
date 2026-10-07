"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger } from "@/components/motion";
import { BrandScreen } from "@/components/brand/BrandScreen";
import { GcButton, IconTile, Panel, SectionHead } from "@/components/brand/primitives";
import { PageHero } from "./pages/PageHero";
import { MODULE_BY_SLUG, MODULE_UI, type AnyModuleEntry, type ModuleSlug, type SwitchedOffSlug } from "@/data/copy/modules";
import { SCREENS, type ProductScreen } from "@/data/screenshots";
import { MODULE_DETAILS } from "@/data/copy/module-details";
import { FaqList, FocusShot, HeroShots, LogoRow, Points, VideoCard, WorkflowSteps } from "./module/parts";
import { useI18n } from "@/i18n/provider";
import { loc } from "@/i18n/types";
import { trackEvent } from "@/lib/analytics";

const MODULES_CRUMB = loc("Modules", "মডিউল");
const DEMO_HREF = "/contact?topic=demo";

/** Real product captures that match a module. A module without a matching
 *  capture shows none, rather than borrowing another module's screen. */
const MODULE_SCREENS: Partial<Record<ModuleSlug | SwitchedOffSlug, ProductScreen>> = {
  orders: SCREENS.orders,
  courier: SCREENS.orders,
  storefront: SCREENS.landingPages,
  omnichannel: SCREENS.omnichannel,
  pos: SCREENS.pos,
  analytics: SCREENS.dashboard,
  customers: SCREENS.customers,
};

/**
 * One layout for every primary module page, in the order the copy handoff
 * sets: breadcrumb → module name → D01 hero and actions → product capture →
 * D02 benefits → D03 workflow (#workflow) → D04 FAQ → D05 related modules →
 * D06 close. The same demo action opens and closes the page.
 */
export function ModulePage({ entry }: { entry: AnyModuleEntry }) {
  const { t, L } = useI18n();
  const screen = MODULE_SCREENS[entry.slug];
  const detail = entry.slug in MODULE_DETAILS ? MODULE_DETAILS[entry.slug as ModuleSlug] : undefined;
  const related = entry.related.flatMap((slug) => MODULE_BY_SLUG.get(slug) ?? []);
  const hero = detail?.hero ?? entry.hero;
  const benefits = detail?.benefits ?? entry.benefits;

  return (
    <>
      <PageHero
        crumbs={[{ label: MODULES_CRUMB, href: "/features" }, { label: entry.name }]}
        eyebrow={entry.name}
        eyebrowIcon={entry.icon}
        title={hero.title}
        body={hero.body}
        aside={
          detail ? (
            <HeroShots detail={detail} />
          ) : screen && (
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
          <GcButton href={detail ? "#how-it-works" : "#workflow"} size="lg" variant="secondary" className="w-full sm:w-auto">
            {L(MODULE_UI.seeHow)}
          </GcButton>
        </div>
      </PageHero>

      {/* Works with */}
      {detail?.logos && (
        <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 rounded-[28px] bg-white px-5 py-6 text-center md:flex-row md:justify-center md:gap-6 md:rounded-[40px] md:py-7">
            <p className="text-gc-small font-semibold text-gc-ink-60">{L(detail.logos.title)}</p>
            <LogoRow items={detail.logos.items} className="justify-center" />
          </div>
        </section>
      )}

      {/* D02 */}
      <Panel tone="tint" pattern="bl" inner="py-12 md:py-16">
        <Stagger className="grid gap-4 md:grid-cols-3" stagger={0.07}>
          {benefits.map((benefit, i) => (
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

      {detail ? (
        <>
          {/* Feature sections, each with a capture cropped to its point */}
          <Panel tone="white" pattern={null} inner="py-14 md:py-20">
            <div className="space-y-16 md:space-y-24">
              {detail.sections.map((sec, i) => {
                const wide = sec.shot.width / sec.shot.height >= 1.9;
                const flip = i % 2 === 1;
                const text = (
                  <>
                    <span className="font-gc-display text-[0.875rem] font-bold text-gc-royal">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="mt-2 text-gc-h3 text-gc-ink">{L(sec.title)}</h2>
                    <p className="mt-4 text-gc-lead text-gc-ink-60">{L(sec.body)}</p>
                  </>
                );
                const extras = (
                  <>
                    <Points items={sec.points.map((p) => L(p))} />
                    {sec.logos && <LogoRow items={sec.logos} size="sm" className="mt-6" />}
                  </>
                );
                return wide ? (
                  <div key={i}>
                    <Reveal className="grid gap-6 lg:grid-cols-2 lg:gap-14">
                      <div className="min-w-0">{text}</div>
                      <div className="min-w-0 lg:pt-8">{extras}</div>
                    </Reveal>
                    <div className="mt-8">
                      <FocusShot shot={sec.shot} phone={sec.phone} />
                    </div>
                  </div>
                ) : (
                  <div key={i} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    <Reveal className={flip ? "min-w-0 lg:order-last" : "min-w-0"}>
                      {text}
                      <div className="mt-6">{extras}</div>
                    </Reveal>
                    <div className="min-w-0">
                      <FocusShot shot={sec.shot} phone={sec.phone} />
                    </div>
                  </div>
                );
              })}
            </div>
          </Panel>

          {/* How it works: overview video and the steps */}
          <Panel id="how-it-works" tone="tint" pattern={null} inner="py-14 md:py-20">
            <SectionHead title={L(MODULE_UI.howTitle)} body={L(MODULE_UI.howBody)} />
            <Reveal className="mx-auto mt-10 max-w-4xl">
              <VideoCard poster={detail.heroShot} video={detail.video} slug={entry.slug} />
            </Reveal>
            <div className="mt-10">
              <WorkflowSteps steps={detail.workflow} />
            </div>
          </Panel>

          {/* Questions */}
          <Panel tone="white" pattern={null} inner="py-14 md:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <h2 className="text-gc-h2 text-gc-ink">{L(MODULE_UI.faqTitle)}</h2>
              <FaqList items={detail.faqs.map((f) => ({ q: L(f.q), a: L(f.a) }))} />
            </div>
          </Panel>
        </>
      ) : (
        <>
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
        </>
      )}

      {/* D05 */}
      {related.length > 0 && (
        <Panel tone="white" pattern="tr">
          <SectionHead title={L(detail ? MODULE_UI.relatedTitle : MODULE_UI.related)} />
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
