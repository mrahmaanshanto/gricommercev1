"use client";

import { motion, useReducedMotion } from "motion/react";
import { ChartLine, ChartPie, Coins, TrendingUp } from "lucide-react";
import { CHANNEL_ANALYTICS } from "@/data/copy/showcase";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Panel } from "../../primitives";
import { ChannelLogo, Counter, type Channel } from "../hero/shared";
import { Bento, DemoStamp, LogoChip, SectionIntro, useTimeline } from "./kit";

/** Beats: 1 figures and lines draw · 2 channel bars grow · 3 today's marker. */
const CUES = [300, 1500, 2700];
const DURATION = 9000;

type Series = { channel: Channel; name: string; color: string; points: number[] };

/* Daily revenue (৳ thousands) over 14 days. */
const SERIES: Series[] = [
  { channel: "facebook", name: "Facebook", color: "#1877F2", points: [38, 42, 40, 47, 45, 52, 49, 55, 58, 54, 61, 59, 66, 62] },
  { channel: "site", name: "Website", color: "#10B981", points: [22, 24, 23, 27, 26, 25, 30, 31, 29, 33, 35, 34, 37, 39] },
  { channel: "tiktok", name: "TikTok", color: "#111827", points: [8, 10, 9, 14, 13, 18, 17, 21, 20, 26, 24, 29, 31, 34] },
];

const SHARE: { channel: Channel; name: string; pct: number; amount: string; color: string }[] = [
  { channel: "facebook", name: "Facebook", pct: 38, amount: "৳7,00,190", color: "#1877F2" },
  { channel: "site", name: "Website", pct: 24, amount: "৳4,42,220", color: "#10B981" },
  { channel: "instagram", name: "Instagram", pct: 16, amount: "৳2,94,820", color: "#E1306C" },
  { channel: "tiktok", name: "TikTok", pct: 14, amount: "৳2,57,960", color: "#111827" },
  { channel: "messenger", name: "Google Ads", pct: 8, amount: "৳1,47,410", color: "#F4B400" },
];

const COST_PER_ORDER: { channel: Channel; name: string; cost: number }[] = [
  { channel: "tiktok", name: "TikTok", cost: 121 },
  { channel: "facebook", name: "Facebook", cost: 142 },
  { channel: "instagram", name: "Instagram", cost: 168 },
];

const W = 640;
const H = 220;
const MAX = 70;

function toXY(points: number[]) {
  return points.map((v, i) => [(i / (points.length - 1)) * W, H - (v / MAX) * H] as const);
}

/** A smooth path through the points (Catmull-Rom as cubic Béziers). */
function smooth(points: number[]) {
  const p = toXY(points);
  let d = `M ${p[0][0]} ${p[0][1]}`;
  for (let i = 0; i < p.length - 1; i++) {
    const [x0, y0] = p[Math.max(0, i - 1)];
    const [x1, y1] = p[i];
    const [x2, y2] = p[i + 1];
    const [x3, y3] = p[Math.min(p.length - 1, i + 2)];
    d += ` C ${x1 + (x2 - x0) / 6} ${y1 + (y2 - y0) / 6}, ${x2 - (x3 - x1) / 6} ${y2 - (y3 - y1) / 6}, ${x2} ${y2}`;
  }
  return d;
}

/**
 * Revenue by channel over two weeks, the channel split and cost per order.
 * Lines draw in when the section arrives and redraw on a loop. Demo data.
 */
export function ChannelAnalytics() {
  const { L, t } = useI18n();
  const reduced = useReducedMotion();
  const { ref, beat } = useTimeline(CUES, { duration: DURATION });
  const drawn = beat >= 1;

  const lead = SERIES[0];
  const [lastX, lastY] = toXY(lead.points).at(-1)!;

  return (
    <Panel tone="tint" pattern={null}>
      <SectionIntro
        lead={L(CHANNEL_ANALYTICS.lead)}
        chip={<LogoChip channels={["facebook", "instagram", "tiktok", "site"]} />}
        tail={L(CHANNEL_ANALYTICS.tail)}
        body={L(CHANNEL_ANALYTICS.body)}
      />

      <div ref={ref} className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
        <Bento tone="white" icon={ChartLine} label="Revenue by channel" title="Last 14 days · updated as orders arrive" className="shadow-gc-card">
          <DemoStamp label={t.common.demoData} className="absolute right-5 top-5" />

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            <Kpi label="Revenue" value={drawn ? 1842600 : 0} prefix="৳" delta="+18%" />
            <Kpi label="Orders" value={drawn ? 1284 : 0} delta="+11%" />
            <Kpi label="Ad spend" value={drawn ? 214000 : 0} prefix="৳" delta="−4%" />
            <Kpi label="Returns" value={drawn ? 62 : 0} suffix=" · 4.8%" delta="−1.2 pts" />
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-[0.75rem] font-medium text-gc-ink-60">
            {SERIES.map((s) => (
              <span key={s.name} className="inline-flex items-center gap-1.5 rounded-full bg-gc-canvas px-2.5 py-1">
                <span className="size-2 rounded-full" style={{ background: s.color }} />
                {s.name}
              </span>
            ))}
          </div>

          <div className="relative mt-4">
            <svg viewBox={`0 0 ${W} ${H + 8}`} className="h-auto w-full overflow-visible" role="img" aria-label="Line chart: Facebook, website and TikTok revenue rising over 14 days">
              <defs>
                <linearGradient id="ca-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1877F2" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#1877F2" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 0.25, 0.5, 0.75, 1].map((f) => (
                <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="#E5E7EB" strokeDasharray="3 5" />
              ))}
              <motion.path
                d={`${smooth(lead.points)} L ${W} ${H} L 0 ${H} Z`}
                fill="url(#ca-fill)"
                initial={false}
                animate={{ opacity: drawn ? 1 : 0 }}
                transition={{ duration: reduced ? 0 : 0.9, delay: reduced ? 0 : 0.6 }}
              />
              {SERIES.map((s, i) => (
                <motion.path
                  key={s.name}
                  d={smooth(s.points)}
                  fill="none"
                  stroke={s.color}
                  strokeWidth={i === 0 ? 3 : 2.25}
                  strokeLinecap="round"
                  initial={false}
                  animate={{ pathLength: drawn ? 1 : 0 }}
                  transition={reduced ? { duration: 0 } : { duration: 1.4, ease: EASE.inOutSoft, delay: i * 0.15 }}
                />
              ))}
              <motion.g initial={false} animate={{ opacity: beat >= 3 ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.3 }}>
                <line x1={lastX} x2={lastX} y1={0} y2={H} stroke="#1877F2" strokeOpacity="0.3" />
                <circle cx={lastX} cy={lastY} r="6" fill="white" stroke="#1877F2" strokeWidth="3" />
              </motion.g>
            </svg>
            <motion.div
              initial={false}
              animate={{ opacity: beat >= 3 ? 1 : 0, y: beat >= 3 ? 0 : 6 }}
              transition={{ duration: reduced ? 0 : 0.35 }}
              className="pointer-events-none absolute right-0 top-0 rounded-xl bg-gc-ink px-3 py-2 text-[0.75rem] text-white shadow-gc-float"
            >
              <p className="flex items-center gap-1.5 font-semibold">
                <ChannelLogo channel="facebook" size={12} /> Facebook today
              </p>
              <p className="tabular-nums text-white/70">৳62,400 · 41 orders</p>
            </motion.div>
            <div className="mt-2 flex justify-between text-[0.6875rem] text-gc-ink-50">
              <span>24 Sep</span>
              <span>1 Oct</span>
              <span>Today</span>
            </div>
          </div>
        </Bento>

        <div className="grid gap-4">
          <Bento tone="white" icon={ChartPie} label="Share of revenue" className="shadow-gc-card">
            <ul className="mt-5 space-y-3">
              {SHARE.map((s, i) => (
                <li key={s.name}>
                  <div className="flex items-center justify-between text-[0.8125rem]">
                    <span className="flex items-center gap-2 font-medium text-gc-ink">
                      {s.name === "Google Ads" ? (
                        <span className="grid size-4 place-items-center rounded-full text-[0.625rem] font-bold text-white" style={{ background: s.color }}>
                          G
                        </span>
                      ) : (
                        <ChannelLogo channel={s.channel} size={16} />
                      )}
                      {s.name}
                    </span>
                    <span className="tabular-nums text-gc-ink-50">
                      {s.amount} <span className="font-semibold text-gc-ink">{s.pct}%</span>
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-gc-canvas">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: s.color }}
                      initial={false}
                      animate={{ width: beat >= 2 ? `${(s.pct / 38) * 100}%` : "0%" }}
                      transition={reduced ? { duration: 0 } : { duration: 0.8, ease: EASE.outQuart, delay: i * 0.08 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Bento>

          <Bento tone="warm" icon={Coins} label="Cost per order" title="Ad spend ÷ delivered orders">
            <ul className="mt-4 grid grid-cols-3 gap-2">
              {COST_PER_ORDER.map((c, i) => (
                <li key={c.name} className={cn("rounded-2xl bg-white p-3 ring-1 ring-gc-line", i === 0 && "ring-2 ring-gc-accent/50")}>
                  <ChannelLogo channel={c.channel} size={16} />
                  <p className="mt-2 text-[1.125rem] font-bold tabular-nums text-gc-ink">৳{c.cost}</p>
                  <p className="text-[0.6875rem] text-gc-ink-50">{c.name}</p>
                </li>
              ))}
            </ul>
            <p className="mt-3 flex items-center gap-1.5 text-[0.75rem] font-medium text-gc-ink-60">
              <TrendingUp className="size-3.5 text-[#047857]" /> TikTok is your cheapest channel this week
            </p>
          </Bento>
        </div>
      </div>
    </Panel>
  );
}

function Kpi({
  label,
  value,
  prefix,
  suffix,
  delta,
}: {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delta: string;
}) {
  const good = !delta.startsWith("+") || label !== "Returns";
  return (
    <div className="rounded-2xl bg-gc-canvas px-3.5 py-3">
      <p className="text-[0.75rem] text-gc-ink-50">{label}</p>
      <p className="mt-0.5 text-[1.125rem] font-bold leading-tight text-gc-ink">
        <Counter value={value} prefix={prefix} />
        {suffix && <span className="text-[0.8125rem] font-semibold text-gc-ink-50">{suffix}</span>}
      </p>
      <p className={cn("text-[0.6875rem] font-semibold", good ? "text-[#047857]" : "text-[#B91C1C]")}>{delta}</p>
    </div>
  );
}
