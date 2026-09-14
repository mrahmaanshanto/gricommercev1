"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Floating, Stagger } from "@/components/motion";
import { BrandCTA } from "@/components/brand/home/BrandCTA";
import { SOLUTION_PHOTOS } from "@/components/brand/home/BrandSolutions";
import { Eyebrow, GcButton, IconTile, Panel, SectionHead } from "@/components/brand/primitives";
import { PageHero } from "./PageHero";
import { FEATURES, SOLUTIONS } from "@/data/sample";
import { SCREENS } from "@/data/screenshots";
import { useI18n } from "@/i18n/provider";
import { loc } from "@/i18n/types";

const COPY = {
  home: loc("Home", "হোম"),
  solutions: loc("Solutions", "সল্যুশন"),
  whatYouGet: loc("What you switch on first", "প্রথমে যা চালু করবেন"),
  whatYouGetBody: loc(
    "The platform underneath is the same. These are the parts this way of selling needs on day one.",
    "ভিতরের প্ল্যাটফর্ম একই। এভাবে বিক্রি করতে প্রথম দিনেই যেগুলো লাগে, সেগুলো এখানে।",
  ),
  others: loc("Other ways in", "অন্য পথ"),
};

const SOLUTION_FEATURES: Record<string, string[]> = {
  online: ["storefront", "landing-pages", "orders", "courier", "omnichannel", "cart-recovery"],
  retail: ["pos", "inventory", "warehouse", "products", "customers", "reports"],
  wholesale: ["wholesale", "products", "inventory", "cash-and-expenses", "staff-permissions", "reports"],
};

const SOLUTION_SCREEN: Record<string, keyof typeof SCREENS> = {
  online: "landingPages",
  retail: "pos",
  wholesale: "orders",
};

export function SolutionPage({ id }: { id: string }) {
  const { t, L } = useI18n();
  const solution = SOLUTIONS.find((s) => s.id === id);
  if (!solution) throw new Error(`SolutionPage: unknown solution "${id}"`);

  const features = (SOLUTION_FEATURES[id] ?? [])
    .map((s) => FEATURES.find((f) => f.slug === s))
    .filter((f) => f !== undefined);
  const others = SOLUTIONS.filter((s) => s.id !== id);
  const photo = SOLUTION_PHOTOS[id];
  const capture = SCREENS[SOLUTION_SCREEN[id] ?? "orders"].mobile;

  return (
    <>
      <PageHero
        crumbs={[{ label: solution.label }]}
        eyebrow={solution.label}
        eyebrowIcon={solution.icon}
        title={solution.title}
        body={solution.body}
        pattern="bl"
        aside={
          /* The kind of business in a photograph, the product laid over it. */
          <div className="relative md:pb-10 lg:pb-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-gc-screen md:rounded-[36px]">
              {photo && (
                <Image src={photo.src} alt={photo.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              )}
            </div>
            <div aria-hidden className="pointer-events-none absolute -bottom-2 left-6 hidden w-[36%] md:block lg:-bottom-10 lg:-left-10">
              <Floating amplitude={6} duration={10}>
                <div className="overflow-hidden rounded-[18px] bg-white p-1.5 shadow-gc-screen ring-1 ring-gc-line/60">
                  <Image
                    src={capture.src}
                    alt=""
                    width={capture.width}
                    height={capture.height}
                    sizes="(min-width: 1024px) 30vw, 55vw"
                    className="block h-auto w-full rounded-[13px]"
                  />
                </div>
              </Floating>
            </div>
          </div>
        }
      >
        <ul className="hero-rise mt-8 space-y-3">
          {solution.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-3 text-gc-body text-gc-ink-70">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gc-royal text-white">
                <Check aria-hidden className="size-3" strokeWidth={3} />
              </span>
              {L(pt)}
            </li>
          ))}
        </ul>
        <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row">
          <GcButton href="/signup" size="lg" withArrow className="w-full sm:w-auto">
            {t.common.startFree}
          </GcButton>
          <GcButton href="/contact?topic=demo" size="lg" variant="secondary" className="w-full sm:w-auto">
            {t.common.bookDemo}
          </GcButton>
        </div>
      </PageHero>

      <Panel tone="tint" pattern="tr">
        <SectionHead eyebrow={L(COPY.whatYouGet)} title={L(COPY.whatYouGetBody)} />
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {features.map((f) => (
            <Stagger.Item key={f.slug} className="h-full">
              <Link
                href={`/features/${f.slug}`}
                className="group/f flex h-full flex-col rounded-[24px] bg-white p-6 ring-1 ring-inset ring-gc-line/80 transition-[transform,box-shadow] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-gc-float md:p-7"
              >
                <IconTile name={f.icon} />
                <p className="mt-5 font-gc-display text-[1.125rem] font-bold text-gc-ink">{L(f.name)}</p>
                <p className="mt-2 flex-1 text-gc-small text-gc-ink-60">{L(f.title)}</p>
              </Link>
            </Stagger.Item>
          ))}
        </Stagger>
      </Panel>

      <Panel tone="white" pattern="bl">
        <SectionHead title={L(COPY.others)} />
        <Stagger className="mt-10 grid gap-4 md:grid-cols-2" stagger={0.08}>
          {others.map((o) => {
            const op = SOLUTION_PHOTOS[o.id];
            return (
              <Stagger.Item key={o.id} className="h-full">
                <Link
                  href={o.href}
                  className="group/o flex h-full flex-col rounded-[28px] bg-gc-canvas p-3 transition-[transform,box-shadow,background-color] duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-gc-float"
                >
                  {op && (
                    <div className="relative aspect-[16/9] overflow-hidden rounded-[22px]">
                      <Image
                        src={op.src}
                        alt={op.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/o:scale-[1.04]"
                      />
                      <span
                        aria-hidden
                        className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/90 text-gc-ink backdrop-blur transition-colors duration-[240ms] group-hover/o:bg-gc-royal group-hover/o:text-white"
                      >
                        <ArrowUpRight className="size-5" strokeWidth={1.9} />
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col px-4 pb-5 pt-6 md:px-5">
                    <div className="flex items-center gap-3">
                      <IconTile name={o.icon} size="sm" />
                      <Eyebrow>{L(o.label)}</Eyebrow>
                    </div>
                    <p className="mt-4 font-gc-display text-[1.375rem] font-bold leading-snug text-gc-ink">{L(o.title)}</p>
                  </div>
                </Link>
              </Stagger.Item>
            );
          })}
        </Stagger>
      </Panel>

      <BrandCTA />
    </>
  );
}
