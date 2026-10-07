"use client";

import Image from "next/image";
import { BadgeCheck, Boxes, CloudDownload, Globe, Receipt, ShieldCheck, UsersRound } from "lucide-react";
import { MIGRATE_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Avatar, Counter } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Bar, Packet, Scene, Show, Tag, Toast, Widget, Wire } from "./kit";

/** Beats: 1 connected · 2 customers · 3 orders · 4 products · 5 test import · 6 live · 7 a returning customer. */
const CUES = [500, 1500, 2600, 3700, 4900, 6100, 7200];
const TOTALS = [1240, 3860, 312];
const ICONS = [UsersRound, Receipt, Boxes];

/** The old store's customers, orders and products copied across, checked and live. */
export function MigrateScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} duration={10400} label={L(S.label)}>
      {(b) => (
        <>
          <Wire from={[206, 140]} to={[330, 140]} on={b >= 1 && b <= 4} />
          {[0, 1, 2].map((i) => (
            <Packet key={i} from={[206, 110 + i * 34]} to={[330, 110 + i * 34]} on={b === i + 2} duration={0.8} />
          ))}

          {/* Old store */}
          <At x={18} y={44} w={188} z={10}>
            <Widget title={L(S.oldStore)} icon={Globe} right={<Tag tone={b >= 1 ? "success" : "neutral"}>{b >= 1 ? <BadgeCheck className="size-3" /> : null}{L(S.connected)}</Tag>}>
              <div className="flex gap-1.5">
                <span className="grid h-8 flex-1 place-items-center rounded-lg bg-gc-canvas">
                  <Image src="/integrations/shopify.webp" alt="" width={120} height={34} className="h-3.5 w-auto" />
                </span>
                <span className="grid h-8 flex-1 place-items-center rounded-lg bg-gc-canvas">
                  <Image src="/integrations/wordpress.webp" alt="" width={60} height={38} className="h-5 w-auto" />
                </span>
              </div>
              <ul className="mt-2 space-y-1.5">
                {S.rows.map((r, i) => {
                  const I = ICONS[i];
                  return (
                    <li key={i} className="flex items-center justify-between rounded-lg bg-gc-canvas px-2 py-1.5 text-[11px]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <I className="size-3.5 text-gc-ink-50" /> {L(r)}
                      </span>
                      <span className="font-semibold tabular-nums">{n(TOTALS[i])}</span>
                    </li>
                  );
                })}
              </ul>
            </Widget>
          </At>

          {/* GridCommerce */}
          <At x={330} y={44} w={212} z={10}>
            <Widget title="GridCommerce" icon={CloudDownload} focus={b >= 2 && b <= 4} right={<Tag tone={b >= 5 ? "success" : "royal"}>{b >= 5 ? "100%" : L(S.importing)}</Tag>}>
              <ul className="space-y-2">
                {S.rows.map((r, i) => {
                  const done = b >= i + 2;
                  return (
                    <li key={i}>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1.5 font-medium">
                          {done ? <BadgeCheck className="size-3.5 text-gc-success" /> : <span className="size-3.5 rounded-full border-2 border-gc-line" />}
                          {L(r)}
                        </span>
                        <Counter value={done ? TOTALS[i] : 0} className="font-semibold" />
                      </div>
                      <Bar value={done ? 1 : 0} tone={done ? "success" : "royal"} className="mt-1" />
                    </li>
                  );
                })}
              </ul>
            </Widget>
          </At>

          {/* Test import */}
          <At x={140} y={236} w={250} z={20}>
            <Show on={b >= 5} from="up">
              <Widget title={L(S.test)} icon={ShieldCheck} focus={b === 5}>
                <ul className="space-y-1.5">
                  {S.checks.map((c, i) => (
                    <Show key={i} on={b >= 5} from="right" delay={i * 0.18}>
                      <li className="flex items-center gap-1.5 text-[11px] font-medium">
                        <BadgeCheck className="size-3.5 text-gc-success" /> {L(c)}
                      </li>
                    </Show>
                  ))}
                </ul>
              </Widget>
            </Show>
          </At>

          <At x={24} y={392} z={30}>
            <Toast on={b >= 6} icon={Globe} tone="success">
              {L(S.live)}
            </Toast>
          </At>

          <At x={330} y={370} w={212} z={30}>
            <Show on={b >= 7} from="left">
              <div className={cn("flex items-center gap-2 rounded-2xl bg-white p-2 shadow-[0_18px_40px_-22px_rgba(10,60,150,0.45)] ring-1 ring-black/[0.05]")}>
                <Avatar name="Nusrat Jahan" size={28} tone={1} />
                <span className="text-[11px] font-semibold">{L(S.welcome)}</span>
              </div>
            </Show>
          </At>
        </>
      )}
    </Scene>
  );
}
