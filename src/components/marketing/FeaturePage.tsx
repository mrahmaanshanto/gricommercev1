"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Stagger } from "@/components/motion";
import { BrandScreen } from "@/components/brand/BrandScreen";
import { BrandCTA } from "@/components/brand/home/BrandCTA";
import { GcButton, IconTile, Panel, SectionHead } from "@/components/brand/primitives";
import { ModulePage } from "./ModulePage";
import { PageHero } from "./pages/PageHero";
import { MODULE_BY_SLUG, MODULE_UI } from "@/data/copy/modules";
import { FEATURES, FEATURE_BY_SLUG, type FeaturePoint } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { loc, type Localized } from "@/i18n/types";

const COPY = {
  features: loc("Features", "ফিচার"),
  relatedBody: loc(
    "Nothing here is a separate product. These share the same orders, stock and customers.",
    "এখানে কোনোটাই আলাদা প্রোডাক্ট নয়। সবাই একই অর্ডার, স্টক আর কাস্টমার ব্যবহার করে।",
  ),
};

/**
 * Template for every /features/<slug> route — a route file is a slug and its
 * metadata.
 *
 * The primary modules (and the switched-off wholesale page, which keeps its
 * route but is no longer linked) render `ModulePage` from the copy in
 * `data/copy/modules.ts`. The supporting features are driven by
 * `data/sample/features.ts`; each belongs to one module, which names the page's
 * eyebrow and breadcrumb and leads its related links. Where a capture exists it
 * sits on the brand stage beside the heading; where none does, the benefit
 * points take that place rather than a fabricated interface.
 */
export function FeaturePage({ slug }: { slug: string }) {
  const { t, L } = useI18n();

  const moduleEntry = MODULE_BY_SLUG.get(slug);
  if (moduleEntry) return <ModulePage entry={moduleEntry} />;

  const feature = FEATURE_BY_SLUG.get(slug);

  // A slug with no registry entry is a wiring mistake, not a runtime state.
  if (!feature) {
    throw new Error(`FeaturePage: no registry entry for slug "${slug}"`);
  }

  const parent = MODULE_BY_SLUG.get(feature.module);
  // The parent module first, then the other supporting pages of that module.
  const related: { slug: string; icon: string; name: Localized; line: Localized; isModule: boolean }[] = [
    ...(parent ? [{ slug: parent.slug, icon: parent.icon, name: parent.name, line: parent.hook, isModule: true }] : []),
    ...FEATURES.filter((f) => f.module === feature.module && f.slug !== feature.slug).map((f) => ({
      slug: f.slug, icon: f.icon, name: f.name, line: f.title, isModule: false,
    })),
  ].slice(0, 3);

  const pointCard = (point: FeaturePoint, i: number) => (
    <div key={i} className="h-full rounded-[20px] bg-white p-5 ring-1 ring-inset ring-gc-line/80 md:p-6">
      <IconTile name={point.icon} size="sm" />
      <p className="mt-4 font-gc-display text-[1rem] font-bold leading-snug text-gc-ink">{L(point.label)}</p>
      <p className="mt-1.5 text-gc-small text-gc-ink-60">{L(point.body)}</p>
    </div>
  );

  return (
    <>
      <PageHero
        crumbs={[
          { label: COPY.features, href: "/features" },
          ...(parent ? [{ label: parent.name, href: `/features/${parent.slug}` }] : []),
          { label: feature.name },
        ]}
        eyebrow={parent?.name}
        eyebrowIcon={feature.icon}
        title={feature.title}
        body={feature.body}
        aside={
          feature.screen ? (
            <BrandScreen priority screen={feature.screen} pattern="br" />
          ) : (
            <div className="rounded-[20px] bg-gradient-to-br from-gc-sky-20 via-gc-sky-10 to-gc-royal-10 p-3 sm:p-5 md:p-7">
              <div className="grid gap-3 sm:grid-cols-2">{feature.points.map(pointCard)}</div>
            </div>
          )
        }
      >
        <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row">
          <GcButton href="/contact?topic=demo" size="lg" withArrow className="w-full sm:w-auto">
            {t.common.bookDemo}
          </GcButton>
        </div>
      </PageHero>

      {/* With a capture in the hero, the points get their own band. */}
      {feature.screen && (
        <Panel tone="tint" pattern="bl" inner="py-12 md:py-16">
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
            {feature.points.map((point, i) => (
              <Stagger.Item key={i} className="h-full">
                {pointCard(point, i)}
              </Stagger.Item>
            ))}
          </Stagger>
        </Panel>
      )}

      {related.length > 0 && (
        <Panel tone={feature.screen ? "white" : "tint"} pattern="tr">
          <SectionHead eyebrow={L(MODULE_UI.related)} title={L(COPY.relatedBody)} />
          <Stagger className="mt-10 grid gap-4 md:grid-cols-3" stagger={0.07}>
            {related.map((rel) => (
              <Stagger.Item key={rel.slug} className="h-full">
                <Link
                  href={`/features/${rel.slug}`}
                  className="group/rel flex h-full flex-col rounded-[20px] bg-gc-canvas p-6 transition-[transform,box-shadow,background-color] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-gc-float md:p-7"
                >
                  <IconTile name={rel.icon} />
                  <p className="mt-5 font-gc-display text-[1.125rem] font-bold text-gc-ink">{L(rel.name)}</p>
                  <p className="mt-2 flex-1 text-gc-small text-gc-ink-60">{L(rel.line)}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal">
                    {L(rel.isModule ? MODULE_UI.explore : COPY.features)}
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-[200ms] group-hover/rel:translate-x-1" />
                  </span>
                </Link>
              </Stagger.Item>
            ))}
          </Stagger>
        </Panel>
      )}

      <BrandCTA />
    </>
  );
}
