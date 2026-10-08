"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Store } from "lucide-react";
import { Stagger } from "@/components/motion";
import { FIT } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { IconTile, Panel } from "../primitives";
import { HOME_INNER, IconChip, SectionIntro } from "./sections/kit";

/** Generated photographs — no real, identifiable person. */
export const SOLUTION_PHOTOS: Record<string, { src: string; alt: string }> = {
  online: {
    src: "/merchants/merchant-packing-orders.webp",
    alt: "Online seller sealing a customer parcel in a stockroom full of products",
  },
  retail: {
    src: "/merchants/retail-counter-pos-v2.webp",
    alt: "Shopkeeper scanning a product at a counter lined with stocked shelves",
  },
  wholesale: {
    src: "/merchants/wholesale-market-cartons.webp",
    alt: "Wholesaler on the phone among stacked cartons in a wholesale market",
  },
};

/**
 * Section 3 — business fit: online, retail and wholesale, each led by its
 * photograph and linking to its solution page. Plain links: choosing one
 * never reorders or personalises the homepage.
 */
export function BrandSolutions() {
  const { L } = useI18n();

  return (
    <Panel tone="tint" pattern="tl" inner={HOME_INNER}>
      <SectionIntro layout="center" size="h2" title={L(FIT.title)} chip={<IconChip icon={Store} tone="royal" tilt={6} />} body={L(FIT.intro)} />

      <Stagger className="mt-10 grid gap-4 md:grid-cols-3" stagger={0.08}>
        {FIT.types.map((type) => {
          const photo = SOLUTION_PHOTOS[type.id];
          return (
            <Stagger.Item key={type.id} className="h-full">
              <Link
                href={type.href}
                className="group/sol flex h-full flex-col rounded-[20px] bg-white p-2.5 transition-[transform,box-shadow,background-color] duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-gc-float"
              >
                {photo && (
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[18px]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/sol:scale-[1.04]"
                    />
                    <span
                      aria-hidden
                      className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/90 text-gc-ink backdrop-blur transition-colors duration-[240ms] group-hover/sol:bg-gc-royal group-hover/sol:text-white"
                    >
                      <ArrowUpRight className="size-5" strokeWidth={1.9} />
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col px-2.5 pb-3 pt-4 md:px-3">
                  <div className="flex items-center gap-3">
                    <IconTile name={type.icon} size="sm" />
                    <h3 className="text-gc-h4 text-gc-ink">{L(type.title)}</h3>
                  </div>
                  <p className="mt-2 flex-1 text-gc-small text-gc-ink-60">{L(type.body)}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal">
                    {L(type.link)}
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover/sol:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Stagger.Item>
          );
        })}
      </Stagger>
    </Panel>
  );
}
