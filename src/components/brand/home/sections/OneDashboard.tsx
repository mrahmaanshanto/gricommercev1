"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Banknote, Globe, Package, Smartphone, Store, Truck, UserRound, Wallet } from "lucide-react";
import { ONE_DASHBOARD } from "@/data/copy/showcase";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Panel } from "../../primitives";
import { Avatar, ChannelLogo, Counter, formatBdt, type Channel } from "../hero/shared";
import { Bento, DemoStamp, IconChip, SectionIntro, useTimeline } from "./kit";

type Sale = { side: "counter" | "online"; ref: string; items: string; amount: number; channel?: Channel; redmi?: boolean };

const SALES: Sale[] = [
  { side: "counter", ref: "Receipt R-2291", items: "Anker 20W Charger", amount: 2450 },
  { side: "online", ref: "#GC-10512", items: "Redmi Note 13", amount: 23999, channel: "facebook", redmi: true },
  { side: "counter", ref: "Receipt R-2292", items: "Redmi Note 13", amount: 23999, redmi: true },
  { side: "online", ref: "#GC-10513", items: "Galaxy Buds FE case", amount: 1290, channel: "site" },
  { side: "online", ref: "#GC-10514", items: "Redmi Note 13", amount: 23999, channel: "whatsapp", redmi: true },
  { side: "counter", ref: "Receipt R-2293", items: "Tempered Glass × 2", amount: 1000 },
];
const CUES = [700, 1800, 2900, 4000, 5100, 6200];
const DURATION = 10000;

const BASE = { counter: 61200, online: 47040, prepaid: 18400, stock: 12 };
const STOCK_CAP = 20;

const SOURCE_LABEL: Record<Channel, string> = {
  facebook: "Facebook",
  whatsapp: "WhatsApp",
  web: "Website chat",
  site: "Website",
  messenger: "Messenger",
  instagram: "Instagram",
  tiktok: "TikTok",
};

/**
 * Counter and online in one place: sales arrive from both sides into one
 * running total, take from one stock count, land on one customer and close
 * into one cash figure. Every number is demo data.
 */
export function OneDashboard() {
  const { L, t } = useI18n();
  const reduced = useReducedMotion();
  const { ref, beat } = useTimeline(CUES, { duration: DURATION });

  const arrived = SALES.slice(0, beat);
  const counter = BASE.counter + arrived.filter((s) => s.side === "counter").reduce((a, s) => a + s.amount, 0);
  const online = BASE.online + arrived.filter((s) => s.side === "online").reduce((a, s) => a + s.amount, 0);
  const total = counter + online;
  const redmiSales = arrived.filter((s) => s.redmi);
  const stock = BASE.stock - redmiSales.length;
  const counterShare = (counter / total) * 100;

  const feed = (side: Sale["side"]) => arrived.filter((s) => s.side === side).reverse().slice(0, 3);

  return (
    <Panel tone="white" pattern={null}>
      <SectionIntro
        lead={L(ONE_DASHBOARD.lead)}
        chip={<IconChip icon={Store} tone="accent" tilt={-6} />}
        tail={L(ONE_DASHBOARD.tail)}
        body={L(ONE_DASHBOARD.body)}
      />

      <div ref={ref} className="mt-12 grid gap-4 lg:grid-cols-3">
        {/* Live sales */}
        <Bento tone="tint" icon={Wallet} label={L(ONE_DASHBOARD.cards.live)} className="lg:col-span-2 lg:row-span-2">
          <DemoStamp label={t.common.demoData} className="absolute right-5 top-5" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.8125rem] text-gc-ink-50">Today’s sales</p>
              <p className="font-gc-display text-[2.5rem] font-extrabold leading-none tracking-[-0.03em] text-gc-ink md:text-[3rem]">
                <Counter value={total} prefix="৳" duration={0.8} />
              </p>
            </div>
            <div className="flex gap-4 text-[0.8125rem]">
              <Legend swatch="bg-gc-ink" label="Counter" value={counter} />
              <Legend swatch="bg-gc-royal" label="Online" value={online} />
            </div>
          </div>

          <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-white ring-1 ring-gc-line">
            <motion.span
              className="h-full bg-gc-ink"
              initial={false}
              animate={{ width: `${counterShare}%` }}
              transition={reduced ? { duration: 0 } : { duration: 0.7, ease: EASE.outQuart }}
            />
            <span className="h-full flex-1 bg-gc-royal" />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <FeedColumn icon={Store} title="Counter · Mirpur shop" sales={feed("counter")} reduced={!!reduced} />
            <FeedColumn icon={Globe} title="Online · Website, Facebook, WhatsApp" sales={feed("online")} reduced={!!reduced} />
          </div>

          <HourlyChart beat={beat} reduced={!!reduced} />
        </Bento>

        {/* One stock */}
        <Bento tone="plain" icon={Package} label={L(ONE_DASHBOARD.cards.stock)} title={L(ONE_DASHBOARD.cards.stockBody)}>
          <div className="mt-5 rounded-2xl bg-white p-4 ring-1 ring-gc-line">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-gc-canvas text-gc-ink-60">
                <Smartphone className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.875rem] font-semibold text-gc-ink">Redmi Note 13 · 8/256</p>
                <p className="text-[0.75rem] text-gc-ink-50">Mirpur shop + online store</p>
              </div>
              <div className="text-right">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.p
                    key={stock}
                    initial={reduced ? false : { y: -14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={reduced ? undefined : { y: 14, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE.outQuart }}
                    className="font-gc-display text-[1.75rem] font-extrabold leading-none text-gc-ink"
                  >
                    {stock}
                  </motion.p>
                </AnimatePresence>
                <p className="text-[0.6875rem] text-gc-ink-50">in stock</p>
              </div>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gc-canvas">
              <motion.div
                className={cn("h-full rounded-full", stock <= 9 ? "bg-gc-accent" : "bg-gc-royal")}
                initial={false}
                animate={{ width: `${(stock / STOCK_CAP) * 100}%` }}
                transition={reduced ? { duration: 0 } : { duration: 0.6, ease: EASE.outQuart }}
              />
            </div>
            <ul className="mt-3 space-y-1.5 text-[0.75rem]">
              {redmiSales
                .slice()
                .reverse()
                .slice(0, 2)
                .map((s) => (
                  <motion.li
                    key={s.ref}
                    initial={reduced ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between text-gc-ink-60"
                  >
                    <span className="flex items-center gap-1.5">
                      {s.channel ? <ChannelLogo channel={s.channel} size={12} /> : <Store className="size-3" />}
                      {s.channel ? `${SOURCE_LABEL[s.channel]} order` : "Counter sale"}
                    </span>
                    <span className="font-semibold text-gc-ink">−1</span>
                  </motion.li>
                ))}
              {redmiSales.length === 0 && <li className="text-gc-ink-50">Waiting for the next sale…</li>}
            </ul>
            {stock <= 9 && (
              <p className="mt-3 rounded-lg bg-gc-accent-10 px-2.5 py-1.5 text-[0.75rem] font-semibold text-gc-ink">
                Reorder soon · supplier draft ready
              </p>
            )}
          </div>
        </Bento>

        {/* One customer */}
        <Bento tone="sky" icon={UserRound} label={L(ONE_DASHBOARD.cards.customer)} title={L(ONE_DASHBOARD.cards.customerBody)}>
          <div className="mt-5 rounded-2xl bg-white p-4 ring-1 ring-gc-line">
            <div className="flex items-center gap-3">
              <Avatar name="Nusrat Jahan" size={40} tone={1} />
              <div className="min-w-0 flex-1">
                <p className="text-[0.875rem] font-semibold text-gc-ink">Nusrat Jahan</p>
                <p className="text-[0.75rem] text-gc-ink-50">14 orders · ৳58,200 lifetime</p>
              </div>
            </div>
            <ul className="mt-3 space-y-2 text-[0.75rem]">
              <li className="flex items-center gap-2 text-gc-ink-60">
                <span className="grid size-6 place-items-center rounded-full bg-gc-canvas">
                  <Store className="size-3" />
                </span>
                Bought at the Mirpur counter
                <span className="ml-auto text-gc-ink-50">Sat</span>
              </li>
              <li className="flex items-center gap-2 text-gc-ink-60">
                <span className="grid size-6 place-items-center rounded-full bg-gc-canvas">
                  <ChannelLogo channel="facebook" size={12} />
                </span>
                Ordered on Facebook
                <span className="ml-auto text-gc-ink-50">Today</span>
              </li>
            </ul>
            <p className="mt-3 inline-flex rounded-full bg-gc-royal-10 px-2.5 py-1 text-[0.6875rem] font-semibold text-gc-royal">
              Counter + online customer
            </p>
          </div>
        </Bento>

        {/* One cash close */}
        <Bento tone="ink" icon={Banknote} label={L(ONE_DASHBOARD.cards.cash)} className="lg:col-span-3">
          <div className="mt-5 grid gap-3 sm:grid-cols-[repeat(3,minmax(0,1fr))_auto] sm:items-center">
            <CashCell icon={Store} label="Counter cash" value={counter} />
            <CashCell icon={Wallet} label="Paid online · bKash, cards" value={BASE.prepaid} />
            <CashCell icon={Truck} label="COD with couriers" value={online - BASE.prepaid} />
            <div className="rounded-2xl bg-white px-5 py-3 text-gc-ink sm:text-right">
              <p className="text-[0.75rem] text-gc-ink-50">Closes today</p>
              <p className="font-gc-display text-[1.5rem] font-extrabold leading-tight">
                <Counter value={total} prefix="৳" duration={0.8} />
              </p>
            </div>
          </div>
        </Bento>
      </div>
    </Panel>
  );
}

/* Sales by hour (৳ thousands): counter, online. The last bar fills as today's sales arrive. */
const HOURS = [
  ["10a", 6, 4], ["11a", 9, 6], ["12p", 12, 7], ["1p", 8, 9], ["2p", 7, 11],
  ["3p", 10, 8], ["4p", 13, 10], ["5p", 9, 14], ["6p", 0, 0],
] as const;

function HourlyChart({ beat, reduced }: { beat: number; reduced: boolean }) {
  const max = 30;
  return (
    <div className="mt-auto pt-6">
      <div className="flex items-center justify-between text-[0.75rem]">
        <p className="font-semibold text-gc-ink-60">Sales by hour</p>
        <p className="text-gc-ink-50">Counter and online, stacked</p>
      </div>
      <div className="mt-3 flex h-28 items-end gap-2">
        {HOURS.map(([label, c, o], i) => {
          const last = i === HOURS.length - 1;
          const counter = last ? Math.min(beat, 6) * 1.6 : c;
          const online = last ? Math.min(beat, 6) * 2.1 : o;
          return (
            <div key={label} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex h-24 w-full flex-col justify-end overflow-hidden rounded-lg bg-white ring-1 ring-gc-line">
                <motion.span
                  className="w-full bg-gc-royal"
                  initial={false}
                  animate={{ height: `${(online / max) * 100}%` }}
                  transition={reduced ? { duration: 0 } : { duration: 0.6, ease: EASE.outQuart }}
                />
                <motion.span
                  className="w-full bg-gc-ink"
                  initial={false}
                  animate={{ height: `${(counter / max) * 100}%` }}
                  transition={reduced ? { duration: 0 } : { duration: 0.6, ease: EASE.outQuart }}
                />
              </div>
              <span className={cn("text-[0.625rem]", last ? "font-semibold text-gc-ink" : "text-gc-ink-50")}>{last ? "Now" : label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Legend({ swatch, label, value }: { swatch: string; label: string; value: number }) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-gc-ink-50">
        <span className={cn("size-2 rounded-full", swatch)} /> {label}
      </p>
      <p className="font-semibold tabular-nums text-gc-ink">৳{formatBdt(value)}</p>
    </div>
  );
}

function FeedColumn({
  icon: Icon,
  title,
  sales,
  reduced,
}: {
  icon: typeof Store;
  title: string;
  sales: Sale[];
  reduced: boolean;
}) {
  return (
    <div className="flex min-h-[13.5rem] flex-col rounded-2xl bg-white p-3 ring-1 ring-gc-line">
      <p className="flex items-center gap-1.5 px-1 text-[0.75rem] font-semibold text-gc-ink-60">
        <Icon className="size-3.5" /> {title}
      </p>
      <ul className="mt-2 space-y-2">
        <AnimatePresence initial={false}>
          {sales.map((s) => (
            <motion.li
              key={s.ref}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE.outQuart }}
              className="flex items-center gap-3 rounded-xl bg-gc-canvas px-3 py-2.5"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white ring-1 ring-gc-line">
                {s.channel ? <ChannelLogo channel={s.channel} size={16} /> : <Store className="size-4 text-gc-ink-60" />}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.8125rem] font-semibold text-gc-ink">{s.items}</p>
                <p className="text-[0.6875rem] text-gc-ink-50">{s.ref}</p>
              </div>
              <span className="text-[0.8125rem] font-semibold tabular-nums text-gc-ink">৳{formatBdt(s.amount)}</span>
            </motion.li>
          ))}
        </AnimatePresence>
        {sales.length === 0 && <li className="px-1 pt-2 text-[0.75rem] text-gc-ink-50">Opening the day…</li>}
      </ul>
    </div>
  );
}

function CashCell({ icon: Icon, label, value }: { icon: typeof Store; label: string; value: number }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/[0.06] px-4 py-3 ring-1 ring-inset ring-white/10">
      <span className="grid size-9 place-items-center rounded-xl bg-white/10 text-gc-sky">
        <Icon className="size-4" />
      </span>
      <div>
        <p className="text-[0.75rem] text-white/60">{label}</p>
        <p className="text-[1.0625rem] font-semibold tabular-nums text-white">
          <Counter value={value} prefix="৳" duration={0.8} />
        </p>
      </div>
    </div>
  );
}
