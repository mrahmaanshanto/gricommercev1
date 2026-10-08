"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal, Stagger } from "@/components/motion";
import { MERCHANT_STORIES } from "@/data/sample";
import { useI18n } from "@/i18n/provider";
import { loc } from "@/i18n/types";
import { Panel, SectionHead } from "../primitives";

/** Sample copy, kept beside the sample stories it introduces. The copy handoff
 *  removed this section from the homepage; it remains on /customers. */
const STORIES_COPY = {
  eyebrow: loc("Merchants", "মার্চেন্ট"),
  title: loc("The people this is built for.", "যাদের জন্য এটা তৈরি।"),
  body: loc(
    "Boutiques, electronics counters, home businesses and cosmetics shops — the shape of commerce in urban Bangladesh.",
    "বুটিক, ইলেকট্রনিকসের দোকান, ঘরে বসে চালানো ব্যবসা আর কসমেটিকসের দোকান — শহুরে বাংলাদেশের ব্যবসা এমনই।",
  ),
  sampleNote: loc(
    "Sample stories with generated photography. No real merchant is quoted or depicted, and no figure here is evidenced.",
    "নমুনা গল্প আর তৈরি করা ছবি। কোনো আসল মার্চেন্টের উক্তি বা ছবি নয়, কোনো সংখ্যারই প্রমাণ নেই।",
  ),
};

/** Merchant stories. Sample content, labelled as such below. */
export function BrandStories() {
  const { L } = useI18n();

  return (
    <Panel tone="white" pattern="tl">
      <SectionHead align="center" eyebrow={L(STORIES_COPY.eyebrow)} title={L(STORIES_COPY.title)} body={L(STORIES_COPY.body)} />

      <Stagger className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.08}>
        {MERCHANT_STORIES.map((story) => {
          const [first, second] = story.metrics;
          return (
            <Stagger.Item key={story.id} className="h-full">
              <article className="group/story flex h-full flex-col rounded-[20px] bg-gc-canvas p-3 md:p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                  <Image
                    src={story.photo}
                    alt={story.photoAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/story:scale-[1.04]"
                  />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gc-dark/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-gc-small font-semibold text-gc-ink backdrop-blur">
                    {L(story.category)}
                  </span>
                  {first && (
                    <div className="absolute bottom-4 right-4 rounded-2xl bg-white/95 px-4 py-3 shadow-gc-float backdrop-blur">
                      <p className="font-gc-display text-[1.375rem] font-bold leading-none text-gc-royal">{first.value}</p>
                      <p className="mt-1.5 text-[0.6875rem] font-medium text-gc-ink-60">{L(first.label)}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col px-3 pb-3 pt-6 md:px-4">
                  <Quote aria-hidden className="size-6 text-gc-sky" strokeWidth={1.8} />
                  <blockquote className="mt-4 flex-1 text-gc-lead text-gc-ink">{L(story.quote)}</blockquote>

                  <div className="mt-7 flex items-end justify-between gap-4 border-t border-gc-line pt-5">
                    <div>
                      <p className="text-gc-body font-bold text-gc-ink">{story.person}</p>
                      <p className="mt-0.5 text-gc-small text-gc-ink-50">
                        {L(story.role)} · {story.business}
                      </p>
                      <p className="text-gc-small text-gc-ink-50">{L(story.city)}</p>
                    </div>
                    {second && (
                      <div className="text-right">
                        <p className="font-gc-display text-[1.25rem] font-bold leading-none text-gc-ink">{second.value}</p>
                        <p className="mt-1 max-w-[9rem] text-[0.6875rem] text-gc-ink-50">{L(second.label)}</p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Stagger.Item>
          );
        })}
      </Stagger>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-gc-small text-gc-ink-50">{L(STORIES_COPY.sampleNote)}</p>
      </Reveal>
    </Panel>
  );
}
