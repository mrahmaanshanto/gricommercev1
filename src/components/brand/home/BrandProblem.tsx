"use client";

import { Stagger } from "@/components/motion";
import { PROBLEM_COPY } from "@/data/copy/home";
import { useI18n } from "@/i18n/provider";
import { IconTile, Panel, SectionHead } from "../primitives";

/** H03 — the questions an owner's team answers every day. */
export function BrandProblem() {
  const { L } = useI18n();

  return (
    <Panel tone="tint" pattern="tl">
      <SectionHead align="center" title={L(PROBLEM_COPY.title)} body={L(PROBLEM_COPY.body)} />

      <Stagger className="mt-12 grid gap-4 md:grid-cols-3" stagger={0.08}>
        {PROBLEM_COPY.prompts.map((prompt, i) => (
          <Stagger.Item key={i} className="h-full">
            <div className="flex h-full flex-col rounded-[24px] bg-white p-6 ring-1 ring-inset ring-gc-line/80 md:p-7">
              <IconTile name={prompt.icon} />
              <p className="mt-5 font-gc-display text-[1.125rem] font-bold leading-snug text-gc-ink">{L(prompt.text)}</p>
            </div>
          </Stagger.Item>
        ))}
      </Stagger>
    </Panel>
  );
}
