"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, Landmark, PhoneCall, Receipt, ShoppingBag, Truck, Wallet } from "lucide-react";
import { ORDER_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Avatar, ChannelLogo, Counter } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Bar, Packet, Scene, Show, Swap, Tag, Toast, Widget, Wire } from "./kit";

/** Beats: 1 order · 2 AI call · 3 confirmed · 4 shipped · 5 delivered · 6 payout matched · 7 in the bank. */
const CUES = [500, 1700, 3000, 4300, 5600, 6900, 8200];
const STATUS_TONE = ["warning", "ai", "royal", "royal", "success", "success", "success"] as const;

/** One order from Facebook to the bank: AI call, courier, COD payout, balance. */
export function OrderScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} duration={11800} label={L(S.label)}>
      {(b) => {
        const st = Math.max(0, b - 1);
        return (
          <>
            <Wire from={[378, 118]} to={[398, 84]} on={b >= 4} curve={10} />
            <Wire from={[470, 196]} to={[470, 234]} on={b >= 6} />
            <Wire from={[368, 330]} to={[346, 352]} on={b >= 7} />
            <Packet from={[378, 118]} to={[398, 84]} on={b === 4} />
            <Packet from={[470, 196]} to={[470, 234]} on={b === 6} color="var(--color-gc-success)" />
            <Packet from={[368, 330]} to={[346, 352]} on={b === 7} color="var(--color-gc-success)" />

            <At x={22} y={22} z={30}>
              <Toast on={b >= 1 && b < 3} icon={ShoppingBag}>
                {L(S.newOrder)}
              </Toast>
            </At>
            <At x={22} y={22} z={30}>
              <Toast on={b >= 7} icon={BadgeCheck} tone="success">
                {L(S.added)}
              </Toast>
            </At>

            {/* The order */}
            <At x={128} y={78} w={250} z={10}>
              <Show on={b >= 1} from="pop">
                <Widget title={L(S.order)} icon={Receipt} focus={b >= 1 && b <= 3} right={<Tag tone={STATUS_TONE[st]}><Swap value={L(S.status[st])} /></Tag>}>
                  <div className="flex items-center gap-2">
                    <Avatar name="Nusrat Jahan" size={30} tone={1} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[12.5px] font-semibold leading-tight">Nusrat Jahan</p>
                      <p className="flex items-center gap-1 text-[10.5px] text-gc-ink-60">
                        <ChannelLogo channel="facebook" size={11} /> Mirpur 10, Dhaka
                      </p>
                    </div>
                  </div>
                  <div className="mt-2.5 flex items-center gap-2 rounded-xl bg-gc-canvas p-2">
                    <Image src="/merchants/merchant-electronics.webp" alt="" width={64} height={64} className="size-9 rounded-lg object-cover" />
                    <div className="min-w-0 flex-1 text-[11px]">
                      <p className="font-semibold">{L(S.item)}</p>
                      <p className="text-gc-ink-60">{L(S.cod)}</p>
                    </div>
                    <p className="text-[15px] font-bold tabular-nums">{n(2450, { money: true })}</p>
                  </div>
                  <div className="mt-3 grid grid-cols-7 gap-1">
                    {S.status.map((_, i) => (
                      <span key={i} className={cn("h-1.5 rounded-full transition-colors duration-500", i <= st && b > 0 ? (i >= 4 ? "bg-gc-success" : "bg-gc-royal") : "bg-gc-canvas")} />
                    ))}
                  </div>
                </Widget>
              </Show>
            </At>

            {/* AI confirmation call */}
            <At x={18} y={250} w={172} z={20}>
              <Show on={b >= 2} from="right">
                <Widget tone="ink" title={L(S.aiCall)} icon={PhoneCall} focus={b === 2}>
                  <div className="flex items-center gap-2">
                    <span className="relative grid size-8 shrink-0 place-items-center rounded-full bg-gc-royal">
                      {b === 2 && <span className="absolute inset-0 animate-ping rounded-full bg-gc-royal/50" />}
                      <PhoneCall className="relative size-3.5" />
                    </span>
                    <span className="flex h-6 flex-1 items-center gap-[3px]">
                      {[8, 16, 11, 20, 13, 17, 9, 14].map((h, i) => (
                        <motion.span
                          key={i}
                          className="w-[3px] rounded-full bg-gc-sky"
                          initial={false}
                          animate={b === 2 ? { height: [h * 0.4, h, h * 0.4] } : { height: 3 }}
                          transition={b === 2 ? { duration: 0.7, repeat: Infinity, delay: i * 0.07 } : { duration: 0.3 }}
                        />
                      ))}
                    </span>
                  </div>
                  <Show on={b >= 3} from="up">
                    <p className="mt-2 text-[11px] text-white/80">{L(S.said)}</p>
                    <p className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-gc-sky">
                      <BadgeCheck className="size-3.5" /> {L(S.confirmed)}
                    </p>
                  </Show>
                </Widget>
              </Show>
            </At>

            {/* Courier */}
            <At x={396} y={30} w={146} z={10}>
              <Show on={b >= 4} from="left">
                <Widget title={L(S.courier)} icon={Truck} focus={b === 4 || b === 5}>
                  <Image src="/integrations/pathao.png" alt="" width={120} height={34} className="h-4 w-auto" />
                  <p className="mt-1.5 text-[10.5px] tabular-nums text-gc-ink-60">PT-88213</p>
                  <div className="relative mt-3">
                    <Bar value={b >= 5 ? 1 : 0.35} tone={b >= 5 ? "success" : "royal"} />
                    <motion.span
                      className={cn("absolute -top-[9px] grid size-5 place-items-center rounded-full text-white", b >= 5 ? "bg-gc-success" : "bg-gc-royal")}
                      initial={false}
                      animate={{ left: b >= 5 ? "calc(100% - 20px)" : "calc(35% - 10px)" }}
                      transition={{ duration: 0.8 }}
                    >
                      <Truck className="size-3" />
                    </motion.span>
                  </div>
                  <p className="mt-2">
                    <Tag tone={b >= 5 ? "success" : "royal"}>
                      <Swap value={L(b >= 5 ? S.delivered : S.pickedUp)} />
                    </Tag>
                  </p>
                </Widget>
              </Show>
            </At>

            {/* Payout */}
            <At x={366} y={232} w={176} z={10}>
              <Show on={b >= 6} from="up">
                <Widget title={L(S.payout)} icon={Wallet} focus={b === 6}>
                  <dl className="space-y-1 text-[11px]">
                    <div className="flex justify-between">
                      <dt className="text-gc-ink-60">{L(S.codCollected)}</dt>
                      <dd className="font-semibold tabular-nums">{n(2450, { money: true })}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gc-ink-60">{L(S.charge)}</dt>
                      <dd className="font-semibold tabular-nums text-[#D93636]">−{n(120, { money: true })}</dd>
                    </div>
                    <div className="flex justify-between border-t border-gc-line pt-1">
                      <dt className="font-semibold">{L(S.paid)}</dt>
                      <dd className="font-bold tabular-nums text-gc-success">{n(2330, { money: true })}</dd>
                    </div>
                  </dl>
                  <p className="mt-2">
                    <Tag tone="success">
                      <BadgeCheck className="size-3" /> {L(S.matched)}
                    </Tag>
                  </p>
                </Widget>
              </Show>
            </At>

            {/* Bank */}
            <At x={196} y={300} w={152} z={25}>
              <Show on={b >= 6} from="up">
                <Widget tone="royal" title={L(S.bank)} icon={Landmark} focus={b === 7}>
                  <p className="text-[10.5px] text-white/75">{L(S.balance)}</p>
                  <p className="text-[19px] font-bold leading-tight">
                    <Counter value={b >= 7 ? 243630 : 241300} prefix="৳" />
                  </p>
                  <Show on={b >= 7} from="up">
                    <p className="mt-0.5 text-[11px] font-semibold text-white">+{n(2330, { money: true })}</p>
                  </Show>
                </Widget>
              </Show>
            </At>

          </>
        );
      }}
    </Scene>
  );
}
