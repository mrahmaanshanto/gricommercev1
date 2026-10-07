"use client";

import Image from "next/image";
import { BadgeCheck, Lock, PackageCheck, Server, ShoppingBag } from "lucide-react";
import { TRACKING_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { useNum } from "../sections/kit";
import { At, Packet, Scene, Show, Tag, Toast, Widget, Wire } from "./kit";

/** Beats: 1 order placed · 2–4 server log lines · 5 sent out · 6 all received · 7 delivery event later. */
const CUES = [500, 1500, 2400, 3300, 4300, 5400, 6700];

const PLATFORMS = [
  { name: "Meta CAPI", src: "/integrations/meta-ads.png", y: 34 },
  { name: "TikTok Events", src: "/integrations/tiktok-ads.png", y: 166 },
  { name: "Google Ads", src: "/integrations/google-ads.png", y: 298 },
];

/** An order on the site becomes a hashed server event that reaches each ad platform. */
export function TrackingScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} duration={10400} label={L(S.label)}>
      {(b) => (
        <>
          <Wire from={[160, 150]} to={[196, 196]} on={b >= 2} />
          <Packet from={[160, 150]} to={[196, 196]} on={b >= 1 && b <= 2} />
          {PLATFORMS.map((p, i) => (
            <div key={p.name}>
              <Wire from={[368, 220]} to={[396, p.y + 44]} on={b >= 5} curve={i === 1 ? 0 : i === 0 ? -14 : 14} />
              <Packet from={[368, 220]} to={[396, p.y + 44]} on={b === 5 || b === 6} delay={i * 0.2} />
            </div>
          ))}

          {/* Checkout */}
          <At x={18} y={40} w={150} z={10}>
            <Show on={b >= 1} from="pop">
              <Widget title={L(S.placed)} icon={ShoppingBag} focus={b === 1}>
                <p className="text-[19px] font-bold tabular-nums">{n(2450, { money: true })}</p>
                <p className="mt-0.5 text-[10.5px] text-gc-ink-60">#GC-1042 · COD</p>
                <p className="mt-1.5">
                  <Tag tone="success">
                    <BadgeCheck className="size-3" /> Purchase
                  </Tag>
                </p>
              </Widget>
            </Show>
          </At>

          {/* Server */}
          <At x={190} y={150} w={180} z={10}>
            <Widget tone="ink" title={L(S.server)} icon={Server} focus={b >= 2 && b <= 4}>
              <ul className="space-y-1.5 font-mono text-[10px]">
                {S.log.map((line, i) => (
                  <Show key={i} on={b >= i + 2} from="right">
                    <li className="flex items-center gap-1.5 rounded-lg bg-white/10 px-2 py-1.5">
                      {i === 1 ? <Lock className="size-3 text-gc-sky" /> : <span className={cn("size-1.5 rounded-full", i === 2 ? "bg-gc-success" : "bg-gc-sky")} />}
                      <span className="truncate">{L(line)}</span>
                    </li>
                  </Show>
                ))}
                <Show on={b >= 3} from="up">
                  <li className="px-2 text-[9.5px] text-white/50">ph: a9f3…e1c7 · em: 4b0d…92aa</li>
                </Show>
              </ul>
            </Widget>
          </At>

          {/* Platforms */}
          {PLATFORMS.map((p) => (
            <At key={p.name} x={396} y={p.y} w={146} z={10}>
              <Widget focus={b === 6}>
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-lg bg-gc-canvas">
                    <Image src={p.src} alt="" width={40} height={40} className="size-5 object-contain" />
                  </span>
                  <span className="text-[11.5px] font-semibold leading-tight">{p.name}</span>
                </div>
                <p className="mt-2">
                  <Tag tone={b >= 6 ? "success" : "neutral"} className="transition-colors">
                    {b >= 6 ? <BadgeCheck className="size-3" /> : null}
                    {b >= 6 ? L(S.received) : "…"}
                  </Tag>
                </p>
              </Widget>
            </At>
          ))}

          <At x={18} y={330} z={30}>
            <Toast on={b >= 7} icon={PackageCheck} tone="success">
              {L(S.delivery)}
            </Toast>
          </At>
        </>
      )}
    </Scene>
  );
}
