"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion";
import { ArrowRight, Check, Minus, Scale, X } from "lucide-react";
import { COMPARE, type Cell, type Row } from "@/data/copy/compare";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Panel } from "../../primitives";
import { HOME_INNER, IconChip, TwoTone } from "./kit";

type Col = "gc" | "shopify" | "woo";
const COLS: Col[] = ["gc", "shopify", "woo"];
const LOGO: Record<Col, { src: string; w: number; h: number; className: string }> = {
  gc: { src: "/brand/gridcommerce-mark.png", w: 159, h: 210, className: "size-5 object-contain" },
  shopify: { src: "/integrations/shopify.webp", w: 300, h: 86, className: "h-4 w-auto" },
  woo: { src: "/integrations/wordpress.webp", w: 300, h: 190, className: "h-6 w-auto" },
};

/**
 * GridCommerce against Shopify and WordPress + WooCommerce: what each really
 * costs, then a feature table with GridCommerce's column lifted. On the
 * homepage it shows the rows that matter most and links to /compare; the
 * page shows every row. Phones get one card per row instead of a table.
 */
export function CompareSection({ full = false, id = "compare" }: { full?: boolean; id?: string }) {
  const { L } = useI18n();
  const C = COMPARE;
  const rows = full ? C.rows : C.rows.slice(0, 8);

  return (
    <Panel id={id} tone="tint" pattern={null} inner={HOME_INNER}>
      {!full && (
        <div className="mx-auto max-w-3xl text-center">
          <p className="gc-eyebrow inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-gc-eyebrow font-semibold uppercase text-gc-royal ring-1 ring-gc-royal-20">
            <span aria-hidden className="size-1.5 rounded-full bg-gc-royal" />
            {L(C.eyebrow)}
          </p>
          <TwoTone className="mt-5" title={L(C.title)} chip={<IconChip icon={Scale} tone="accent" tilt={-6} />} />
          <p className="mx-auto mt-5 max-w-2xl text-gc-lead text-gc-ink-60">{L(C.body)}</p>
        </div>
      )}

      {/* What you really pay */}
      <h3 className={cn("text-center font-gc-display text-[1.25rem] font-bold text-gc-ink", full ? "" : "mt-10")}>{L(C.cost.title)}</h3>
      <div className="mt-5 grid gap-3 md:grid-cols-3 md:gap-4">
        {COLS.map((c, i) => {
          const card = C.cost[c];
          const gc = c === "gc";
          return (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: EASE.outQuart, delay: i * 0.1 }}
              className={cn(
                "relative rounded-[24px] p-5 md:p-6",
                gc ? "bg-gc-royal text-white shadow-[0_24px_48px_-24px_rgba(10,91,207,0.8)]" : "bg-white ring-1 ring-gc-line",
              )}
            >
              <ColHead col={c} light={gc} />
              <p className={cn("mt-4 font-gc-display text-[1.375rem] font-bold leading-tight", gc ? "text-white" : "text-gc-ink")}>{L(card.price)}</p>
              <ul className="mt-4 space-y-2">
                {card.lines.map((line, k) => (
                  <li key={k} className={cn("flex items-start gap-2 text-gc-small", gc ? "text-white/90" : "text-gc-ink-70")}>
                    {gc ? <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-gc-sky" /> : <Minus aria-hidden className="mt-0.5 size-4 shrink-0 text-gc-ink-30" />}
                    {L(line)}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Feature table — desktop */}
      <Reveal className="mt-10 hidden overflow-hidden rounded-[24px] bg-white ring-1 ring-gc-line md:block">
        <table className="w-full table-fixed text-left">
          <caption className="sr-only">{L(C.title)}</caption>
          <colgroup>
            <col className="w-[28%]" />
            <col className="w-[24%]" />
            <col className="w-[24%]" />
            <col className="w-[24%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-gc-line">
              <th scope="col" className="px-5 py-4 text-[0.8125rem] font-semibold text-gc-ink-60">{L(C.feature)}</th>
              {COLS.map((c) => (
                <th key={c} scope="col" className={cn("px-4 py-4", c === "gc" && "bg-gc-royal-10")}>
                  <ColHead col={c} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <TableRow key={i} row={r} last={i === rows.length - 1} />
            ))}
          </tbody>
        </table>
      </Reveal>

      {/* Feature list — phones */}
      <ul className="mt-8 space-y-3 md:hidden">
        {rows.map((r, i) => (
          <li key={i} className="rounded-[20px] bg-white p-4 ring-1 ring-gc-line">
            <p className="font-gc-display text-[1rem] font-bold text-gc-ink">{L(r.label)}</p>
            <dl className="mt-3 space-y-2">
              {COLS.map((c) => (
                <div key={c} className={cn("flex items-start gap-2.5 rounded-xl p-2", c === "gc" && "bg-gc-royal-10")}>
                  <Mark cell={r[c]} />
                  <div className="min-w-0">
                    <dt className="text-[0.75rem] font-semibold text-gc-ink">{L(C.columns[c])}</dt>
                    <dd className="text-[0.8125rem] leading-snug text-gc-ink-60">{L(r[c].note)}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col items-center gap-4 text-center">
        <Legend />
        {!full && (
          <Link href="/compare" className="inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline">
            {L(C.more)}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        )}
        <p className="max-w-3xl text-[0.75rem] text-gc-ink-50">{L(C.checked)}</p>
      </div>
    </Panel>
  );
}

function TableRow({ row, last }: { row: Row; last: boolean }) {
  const { L } = useI18n();
  return (
    <tr className={cn(!last && "border-b border-gc-line/70")}>
      <th scope="row" className="px-5 py-4 align-top text-[0.9375rem] font-semibold leading-snug text-gc-ink">
        {L(row.label)}
      </th>
      {COLS.map((c) => (
        <td key={c} className={cn("px-4 py-4 align-top", c === "gc" && "bg-gc-royal-10/60")}>
          <div className="flex items-start gap-2.5">
            <Mark cell={row[c]} />
            <span className={cn("text-[0.8125rem] leading-snug", c === "gc" ? "font-medium text-gc-ink" : "text-gc-ink-60")}>{L(row[c].note)}</span>
          </div>
        </td>
      ))}
    </tr>
  );
}

function Mark({ cell }: { cell: Cell }) {
  const { L } = useI18n();
  const label = L(COMPARE.legend[cell.mark]);
  if (cell.mark === "yes")
    return (
      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-gc-success text-white" title={label}>
        <Check aria-hidden className="size-3" strokeWidth={3} />
        <span className="sr-only">{label}</span>
      </span>
    );
  if (cell.mark === "part")
    return (
      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-gc-warning-10 text-gc-warning" title={label}>
        <Minus aria-hidden className="size-3" strokeWidth={3} />
        <span className="sr-only">{label}</span>
      </span>
    );
  return (
    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#FEF2F2] text-[#D93636]" title={label}>
      <X aria-hidden className="size-3" strokeWidth={3} />
      <span className="sr-only">{label}</span>
    </span>
  );
}

function Legend() {
  const { L } = useI18n();
  return (
    <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[0.8125rem] text-gc-ink-60">
      {(["yes", "part", "no"] as const).map((m) => (
        <li key={m} className="flex items-center gap-1.5">
          <Mark cell={{ mark: m, note: COMPARE.legend[m] }} />
          {L(COMPARE.legend[m])}
        </li>
      ))}
    </ul>
  );
}

function ColHead({ col, light }: { col: Col; light?: boolean }) {
  const { L } = useI18n();
  const logo = LOGO[col];
  return (
    <span className="flex items-center gap-2">
      <span className={cn("grid h-8 min-w-8 place-items-center rounded-lg px-1.5", light ? "bg-white" : "bg-gc-canvas")}>
        <Image src={logo.src} alt="" width={logo.w} height={logo.h} className={logo.className} />
      </span>
      <span className={cn("text-[0.875rem] font-bold leading-tight", light ? "text-white" : "text-gc-ink")}>{L(COMPARE.columns[col])}</span>
    </span>
  );
}
