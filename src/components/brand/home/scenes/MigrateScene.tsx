"use client";

import Image from "next/image";
import { BadgeCheck, CircleAlert, CloudDownload, Columns3, FileSpreadsheet, ShieldCheck, Store } from "lucide-react";
import { MIGRATE_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Avatar, Counter } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Bar, Cursor, Packet, Scene, Show, Swap, Tag, Widget, Wire, type Step } from "./kit";

/**
 * Beats: 1 the export files are chosen · 2 columns matched · 3 a sample is checked (nothing saved) · 4 two rows need a
 * look · 5 fixed and confirmed, the import runs · 6 the counts are in and Nusrat's orders are matched to her by phone.
 * What the merchant app does (lib/productImport.js, lib/dataImport.js): CSV exports in, a dry run with row problems,
 * nothing written until confirmed, past orders as history, customers matched by phone.
 */
const CUES = [900, 2100, 3400, 4700, 6000, 7400];
const STEPS: Step[] = S.steps.map((text, i) => ({ at: i, text }));

/** The sample rows of products.csv as the dry run lists them: file row number, title, and the problem it finds. */
const SAMPLE: { n: number; name: string; problem?: "noTitle" | "dupSku"; fixed?: string }[] = [
  { n: 2, name: "Earbuds Pro" },
  { n: 3, name: "Smart Watch S2" },
  { n: 4, name: "Magnetic Phone Cooler" },
  { n: 7, name: "", problem: "noTitle", fixed: "SKE Mini DC UPS" },
  { n: 12, name: "Redmi 17", problem: "dupSku" },
];

/** Export files from the old store, a checked sample, then the import — with the counts to compare. */
export function MigrateScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} steps={STEPS} label={L(S.label)} h={530}>
      {(b) => {
        const flagged = b === 4;
        const fixed = b >= 5;
        const done = b >= 6;
        return (
          <>
            <Wire from={[254, 300]} to={[274, 150]} on={b >= 3} />
            <Packet from={[254, 300]} to={[274, 150]} on={b === 3} />
            <Packet from={[408, 256]} to={[408, 292]} on={b === 5} color="var(--color-gc-success)" />

            {/* The old store and its export files */}
            <At x={18} y={24} w={236} z={10} order={1}>
              <Widget title={L(S.source)} icon={Store} focus={b <= 1}>
                <div className="flex gap-1.5">
                  <span className="grid h-8 flex-1 place-items-center rounded-lg bg-gc-canvas">
                    <Image src="/integrations/shopify.webp" alt="" width={120} height={34} className="h-3.5 w-auto" />
                  </span>
                  <span className="grid h-8 flex-1 place-items-center rounded-lg bg-gc-canvas">
                    <Image src="/integrations/wordpress.webp" alt="" width={60} height={38} className="h-5 w-auto" />
                  </span>
                </div>
                <p className="mt-2.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-gc-ink-60">{L(S.exportFiles)}</p>
                <ul className="mt-1.5 space-y-1.5">
                  {S.files.map((f) => (
                    <li key={f.name} className={cn("flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] transition-colors duration-500", b >= 1 ? "bg-gc-royal-10/60" : "bg-gc-canvas")}>
                      <span className={cn("grid size-4 shrink-0 place-items-center rounded-[5px] border transition-colors duration-500", b >= 1 ? "border-gc-royal bg-gc-royal text-white" : "border-gc-ink/25 bg-white")}>
                        {b >= 1 && <BadgeCheck className="size-3" />}
                      </span>
                      <FileSpreadsheet className="size-3.5 shrink-0 text-gc-success" />
                      <span className="min-w-0 flex-1 truncate font-medium tabular-nums">{f.name}</span>
                      <span className="text-gc-ink-60 tabular-nums">
                        {n(f.rows)} {L(S.rowsWord)}
                      </span>
                    </li>
                  ))}
                </ul>
              </Widget>
            </At>

            {/* Columns matched to GridCommerce's fields */}
            <At x={18} y={226} w={236} z={10} order={2}>
              <Show on={b >= 2} from="up">
                <Widget title={L(S.mapping)} icon={Columns3} focus={b === 2}>
                  <ul className="space-y-1.5">
                    {S.mapRows.map((r, i) => (
                      <Show key={r.from} on={b >= 2} from="right" delay={i * 0.12}>
                        <li className="flex items-center gap-1.5 rounded-lg bg-gc-canvas px-2 py-1.5 text-[11px]">
                          <span className="min-w-0 flex-1 truncate text-gc-ink-60">{r.from}</span>
                          <span className="text-gc-ink-30">→</span>
                          <span className="min-w-0 flex-1 truncate font-semibold">{L(r.to)}</span>
                          <BadgeCheck className="size-3.5 shrink-0 text-gc-success" />
                        </li>
                      </Show>
                    ))}
                  </ul>
                </Widget>
              </Show>
            </At>

            {/* The sample check: every row read, nothing saved */}
            <At x={274} y={24} w={268} z={20} order={3}>
              <Show on={b >= 3} from="left">
                <Widget
                  title={L(S.sample)}
                  icon={ShieldCheck}
                  focus={b >= 3 && b <= 5}
                  right={
                    <Tag tone={fixed ? "success" : flagged ? "danger" : "neutral"}>
                      <Swap value={L(fixed ? S.allReady : flagged ? S.needLook : S.readOnly)} />
                    </Tag>
                  }
                >
                  <ul className="space-y-1">
                    {SAMPLE.map((r, i) => {
                      const bad = !!r.problem && flagged;
                      const wasBad = !!r.problem && fixed;
                      const name = r.problem === "noTitle" ? (fixed ? r.fixed : "") : r.name;
                      return (
                        <Show key={r.n} on={b >= 3} from="up" delay={i * 0.1}>
                          <li className={cn("flex items-center gap-2 rounded-lg px-2 py-1 text-[11px] transition-colors duration-500", bad ? "bg-[#FEF2F2]" : wasBad ? "bg-gc-success-10" : "bg-gc-canvas")}>
                            <span className="w-5 shrink-0 text-right text-[10px] tabular-nums text-gc-ink-50">{n(r.n)}</span>
                            <span className={cn("min-w-0 flex-1 truncate font-medium", !name && "italic text-gc-ink-50")}>
                              <Swap value={name || "—"} />
                            </span>
                            <span className="shrink-0">
                              {bad && r.problem ? (
                                <Tag tone="danger">
                                  <CircleAlert className="size-3" /> {L(S.problems[r.problem])}
                                </Tag>
                              ) : (
                                <Tag tone="success">
                                  <BadgeCheck className="size-3" /> {L(wasBad ? S.fixed : S.ready)}
                                </Tag>
                              )}
                            </span>
                          </li>
                        </Show>
                      );
                    })}
                  </ul>
                  <p className="mt-2 text-[10px] text-gc-ink-60">{L(S.readOnly)}</p>
                  <Show on={b >= 4} from="up" className="mt-2">
                    <span className={cn("flex items-center justify-center gap-1.5 rounded-full py-1.5 text-[11px] font-semibold text-white transition-colors duration-500", fixed ? "bg-gc-success" : "bg-gc-ink")}>
                      {fixed && <BadgeCheck className="size-3.5" />}
                      {L(S.confirm)}
                    </span>
                  </Show>
                </Widget>
              </Show>
            </At>

            {/* What is now in GridCommerce */}
            <At x={274} y={292} w={268} z={10} order={4}>
              <Show on={b >= 5} from="up">
                <Widget title={L(S.inGc)} icon={CloudDownload} focus={b >= 5} right={<Tag tone={done ? "success" : "royal"}><Swap value={L(done ? S.done : S.importing)} /></Tag>}>
                  <ul className="space-y-1.5">
                    {S.files.map((f) => (
                      <li key={f.name}>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="flex items-center gap-1.5 font-medium">
                            {done ? <BadgeCheck className="size-3.5 text-gc-success" /> : <span className="size-3.5 rounded-full border-2 border-gc-line" />}
                            {L(f.label)}
                          </span>
                          <span className="font-semibold tabular-nums">
                            <Counter value={done ? f.rows : 0} /> <span className="font-normal text-gc-ink-50">/ {n(f.rows)}</span>
                          </span>
                        </div>
                        <Bar value={done ? 1 : 0.15} tone={done ? "success" : "royal"} className="mt-1" />
                      </li>
                    ))}
                  </ul>
                  <Show on={b >= 6} from="up" className="mt-2.5">
                    <div className="flex items-center gap-2 rounded-xl bg-gc-canvas p-2">
                      <Avatar name="Nusrat Jahan" size={26} tone={1} />
                      <div className="min-w-0 text-[11px] leading-tight">
                        <p className="font-semibold">Nusrat Jahan</p>
                        <p className="text-gc-ink-60">{L(S.matchedByPhone)}</p>
                      </div>
                    </div>
                  </Show>
                </Widget>
              </Show>
            </At>

            <Cursor x={b >= 5 ? 408 : 330} y={b >= 5 ? 250 : 160} click={b === 5} show={b >= 4 && b <= 5} />
          </>
        );
      }}
    </Scene>
  );
}
