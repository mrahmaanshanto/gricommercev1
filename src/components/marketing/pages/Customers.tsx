"use client";

import Image from "next/image";
import { BrandCTA } from "@/components/brand/home/BrandCTA";
import { BrandStories } from "@/components/brand/home/BrandStories";
import { PageHero } from "./PageHero";
import { loc } from "@/i18n/types";
import { cn } from "@/lib/cn";

const COPY = {
  crumb: loc("Customers", "কাস্টমার"),
  eyebrow: loc("Merchants", "মার্চেন্ট"),
  title: loc("The businesses behind the orders.", "অর্ডারের পেছনের ব্যবসাগুলো।"),
  body: loc(
    "Boutiques, counters, home businesses and wholesalers running on GridCommerce. Every story on this page is sample content until a real merchant agrees to be named.",
    "বুটিক, কাউন্টার, ঘরে বসে চালানো ব্যবসা আর পাইকার — সবাই গ্রিডকমার্সে। কোনো আসল মার্চেন্ট নাম দিতে রাজি না হওয়া পর্যন্ত এই পাতার প্রতিটি গল্পই নমুনা।",
  ),
};

/** Generated photographs of the kinds of business on the platform — no real person. */
const COLLAGE = [
  [
    { src: "/merchants/merchant-packing-orders.webp", alt: "Online seller sealing a customer parcel in a stockroom full of products", ratio: "aspect-[4/5]" },
    { src: "/merchants/wholesale-market-cartons.webp", alt: "Wholesaler on the phone among stacked cartons in a wholesale market", ratio: "aspect-[4/3]" },
  ],
  [
    { src: "/merchants/retail-counter-pos-v2.webp", alt: "Shopkeeper scanning a product at a counter lined with stocked shelves", ratio: "aspect-[4/3]" },
    { src: "/merchants/merchant-product-photography-v2.webp", alt: "Merchant photographing a product on a small table to create a new catalogue listing", ratio: "aspect-[4/5]" },
  ],
];

export function Customers() {
  return (
    <>
      <PageHero
        crumbs={[{ label: COPY.crumb }]}
        eyebrow={COPY.eyebrow}
        title={COPY.title}
        body={COPY.body}
        pattern="bl"
        aside={
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {COLLAGE.map((column, ci) => (
              <div key={ci} className={cn("space-y-3 md:space-y-4", ci === 1 && "mt-10")}>
                {column.map((p, i) => (
                  <div key={p.src} className={cn("relative overflow-hidden rounded-[24px] shadow-gc-card", p.ratio)}>
                    <Image src={p.src} alt={p.alt} fill priority={ci === 0 && i === 0} sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        }
      />
      <BrandStories />
      <BrandCTA />
    </>
  );
}
