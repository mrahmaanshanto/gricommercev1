"use client";

import Image from "next/image";
import { BadgeCheck, PackageCheck, Receipt, Server, Wallet } from "lucide-react";
import { DEMO, TRACKING_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Avatar, ChannelLogo } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Cursor, Packet, Scene, Show, Swap, Tag, Widget, Wire, type Step } from "./kit";

/**
 * Beats: 1 the order is placed from the ad · 2 recorded once (pixel + server, one ID) · 3 sent to the connected
 * platforms · 4 days later, delivered as a separate event · 5 what the merchant sees for this order.
 */
const CUES = [1000, 2300, 3600, 5000, 6400];
const STEPS: Step[] = S.steps.map((text, i) => ({ at: i, text }));

/* The platforms on the panel's Pixels & events page; TikTok is left unconnected in this shop. */
const PLATFORMS = [
  { name: "Meta", src: "/integrations/meta-ads.png", connected: true, y: 24 },
  { name: "Google", src: "/integrations/google-ads.png", connected: true, y: 108 },
  { name: "TikTok", src: "/integrations/tiktok-ads.png", connected: false, y: 192 },
];

/** An ad click becomes an order; the order becomes one event per step, sent to the merchant's own ad accounts. */
export function TrackingScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} steps={STEPS} label={L(S.label)} h={470}>
      {(b) => (
        <>
          <Wire from={[116, 222]} to={[116, 232]} on={b >= 1} />
          <Wire from={[214, 282]} to={[232, 110]} on={b >= 2} curve={-30} />
          <Packet from={[214, 282]} to={[232, 110]} on={b === 2} />
          {PLATFORMS.map((p, i) => (
            <div key={p.name}>
              <Wire from={[394, 74]} to={[412, p.y + 34]} on={b >= 3 && p.connected} curve={i === 0 ? -8 : i === 1 ? 0 : 10} />
              <Packet from={[394, 74]} to={[412, p.y + 34]} on={(b === 3 || b === 4) && p.connected} delay={i * 0.2} color={b >= 4 ? "var(--color-gc-success)" : undefined} />
            </div>
          ))}
          <Wire from={[313, 194]} to={[313, 306]} on={b >= 5} />
          <Packet from={[313, 194]} to={[313, 306]} on={b === 5} color="var(--color-gc-success)" />

          {/* The ad */}
          <At x={18} y={24} w={196} z={10} order={1}>
            <Widget
              title={
                <span className="inline-flex items-center gap-1.5">
                  <ChannelLogo channel="facebook" size={12} /> {L(S.ad)}
                </span>
              }
              focus={b === 0}
            >
              <div className="relative h-[72px] overflow-hidden rounded-xl">
                <Image src="/merchants/merchant-electronics.webp" alt="" fill sizes="200px" className="object-cover" />
              </div>
              <p className="mt-2 text-[11px] font-semibold">{S.shop}</p>
              <p className="text-[10.5px] text-gc-ink-60">{L(S.adText)}</p>
              <span className={cn("mt-2 block rounded-full py-1.5 text-center text-[11px] font-semibold transition-colors duration-300", b >= 1 ? "bg-gc-royal text-white" : "bg-gc-canvas text-gc-ink")}>
                {L(S.shopNow)}
              </span>
            </Widget>
          </At>

          {/* The order, with its source */}
          <At x={18} y={232} w={196} z={10} order={2}>
            <Show on={b >= 1} from="up">
              <Widget title={L(S.placed)} icon={Receipt} focus={b === 1} right={<Tag tone="success">order_placed</Tag>}>
                <div className="flex items-center gap-2">
                  <Avatar name={DEMO.customer} size={24} tone={1} />
                  <div className="min-w-0 flex-1 text-[11px]">
                    <p className="truncate font-semibold leading-tight">
                      {DEMO.order} · {DEMO.product}
                    </p>
                    <p className="truncate text-[10px] text-gc-ink-60">
                      {DEMO.customer} · {L(S.cod)}
                    </p>
                  </div>
                  <p className="text-[14px] font-bold tabular-nums">{n(DEMO.price, { money: true })}</p>
                </div>
                <p className="mt-2 flex flex-wrap items-center gap-1.5 text-[10.5px]">
                  <span className="text-gc-ink-60">{L(S.source)}:</span>
                  <Tag tone="royal">{L(S.sourceMeta)}</Tag>
                </p>
              </Widget>
            </Show>
          </At>

          {/* The events GridCommerce records */}
          <At x={232} y={24} w={162} z={10} order={3}>
            <Widget tone="ink" title={L(S.events)} icon={Server} focus={b === 2 || b === 4}>
              {b < 1 && <p className="text-[10px] text-white/50">{L(S.waiting)}</p>}
              <div className="space-y-1.5 text-[10px]">
                <Show on={b >= 1} from="right">
                  <p className="rounded-lg bg-white/10 px-2 py-1.5 font-mono">{L(S.evPlaced)}</p>
                </Show>
                <Show on={b >= 2} from="right">
                  <p className="flex items-start gap-1.5 rounded-lg bg-gc-success/20 px-2 py-1.5 leading-snug">
                    <BadgeCheck className="mt-px size-3 shrink-0 text-gc-success" />
                    <span>{L(S.evDup)}</span>
                  </p>
                </Show>
                <Show on={b >= 4} from="right">
                  <div className="rounded-lg bg-white/10 px-2 py-1.5">
                    <p className="font-mono">{L(S.evDelivered)}</p>
                    <p className="mt-0.5 text-[9.5px] text-white/60">{L(S.later)}</p>
                  </div>
                </Show>
              </div>
            </Widget>
          </At>

          {/* The merchant's connected platforms */}
          {PLATFORMS.map((p, i) => {
            const got = p.connected && b >= 3;
            return (
              <At key={p.name} x={412} y={p.y} w={130} z={10} order={4 + i}>
                <Widget focus={b === 3 && p.connected}>
                  <div className="flex items-center gap-2">
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-gc-canvas">
                      <Image src={p.src} alt="" width={40} height={40} className="size-4 object-contain" />
                    </span>
                    <span className="text-[11px] font-semibold">{p.name}</span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    <Tag tone={got ? "success" : "neutral"} className="transition-colors">
                      {got && <BadgeCheck className="size-3" />}
                      <Swap value={b < 3 ? "…" : L(p.connected ? S.received : S.notConnected)} />
                    </Tag>
                    <Show on={got && b >= 4} from="pop">
                      <Tag tone="success">
                        <PackageCheck className="size-3" /> {L(S.deliveredToo)}
                      </Tag>
                    </Show>
                  </div>
                </Widget>
              </At>
            );
          })}

          {/* What the merchant sees for this order */}
          <At x={232} y={306} w={310} z={10} order={8}>
            <Show on={b >= 5} from="up">
              <Widget title={L(S.figures)} icon={Wallet} focus={b >= 5} right={<Tag tone="neutral">{DEMO.order}</Tag>}>
                <dl className="space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <dt className="text-gc-ink-60">{L(S.sale)}</dt>
                    <dd className="font-semibold tabular-nums">{n(DEMO.price, { money: true })}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gc-ink-60">{L(S.cost)}</dt>
                    <dd className="font-semibold tabular-nums text-[#D93636]">−{n(DEMO.cost, { money: true })}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gc-ink-60">{L(S.courier)}</dt>
                    <dd className="font-semibold tabular-nums text-[#D93636]">−{n(DEMO.courierFee, { money: true })}</dd>
                  </div>
                  <div className="flex justify-between rounded-lg bg-gc-royal-10 px-1.5 py-0.5 -mx-1.5">
                    <dt className="font-semibold text-gc-royal">{L(S.ads)}</dt>
                    <dd className="font-semibold tabular-nums text-[#D93636]">−{n(DEMO.ads, { money: true })}</dd>
                  </div>
                  <div className="flex justify-between border-t border-gc-line pt-1">
                    <dt className="font-semibold">{L(S.left)}</dt>
                    <dd className="font-bold tabular-nums text-gc-success">{n(DEMO.profit, { money: true })}</dd>
                  </div>
                </dl>
              </Widget>
            </Show>
          </At>

          <Cursor x={116} y={198} click={b === 1} show={b <= 1} />
        </>
      )}
    </Scene>
  );
}
