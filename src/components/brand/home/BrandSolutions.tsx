"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Stagger } from "@/components/motion";
import { BUSINESS_TYPES_COPY } from "@/data/copy/home";
import { useI18n } from "@/i18n/provider";
import { IconTile, Panel, SectionHead } from "../primitives";

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

/** H06 — online, retail and wholesale, each led by a photograph of that kind of
 *  business. The cards keep the existing solution routes. */
export function BrandSolutions() {
  const { L } = useI18n();

  return (
    <Panel tone="tint" pattern="tl">
      <SectionHead align="center" title={L(BUSINESS_TYPES_COPY.title)} />

      <Stagger className="mt-14 grid gap-4 lg:grid-cols-3" stagger={0.08}>
        {BUSINESS_TYPES_COPY.types.map((type) => {
          const photo = SOLUTION_PHOTOS[type.id];
          return (
            <Stagger.Item key={type.id} className="h-full">
              <Link
                href={type.href}
                className="group/sol flex h-full flex-col rounded-[28px] bg-white p-3 ring-1 ring-inset ring-gc-line/80 transition-[transform,box-shadow] duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-gc-float"
              >
                {photo && (
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[22px]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
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

                <div className="flex flex-1 flex-col px-4 pb-6 pt-6 md:px-5">
                  <div className="flex items-center gap-3">
                    <IconTile name={type.icon} size="sm" />
                    <h3 className="text-gc-h3 text-gc-ink">{L(type.title)}</h3>
                  </div>
                  <p className="mt-4 flex-1 text-gc-body text-gc-ink-60">{L(type.body)}</p>
                </div>
              </Link>
            </Stagger.Item>
          );
        })}
      </Stagger>
    </Panel>
  );
}
