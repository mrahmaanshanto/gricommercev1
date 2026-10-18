"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, LayoutTemplate, Link2, Receipt, Sparkles } from "lucide-react";
import { DEMO, STORE_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Avatar } from "../hero/shared";
import { useNum } from "../sections/kit";
import { At, Cursor, Packet, Scene, Show, Swap, Tag, Widget, Wire, type Step } from "./kit";

/**
 * Beats: 1 GridAI drafts the page (credits) · 2 the draft shows on the phone preview · 3 checked and published, the
 * page has its link · 4 Sumaiya orders on the page · 5 GC-1063 is in Orders with the page as its source.
 * The product is already picked on the first frame.
 */
const CUES = [900, 2400, 3900, 5400, 6900];
/* A second shopper, from the page link: Nusrat is the chat customer of the inbox scene. */
const CUSTOMER = "Sumaiya Akter";
const STEPS: Step[] = S.steps.map((text, i) => ({ at: i, text }));

/** A landing page for one product: GridAI drafts, the merchant publishes, an order comes in and lands in Orders. */
export function StoreScene() {
  const { L, locale } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} steps={STEPS} label={L(S.label)} h={480}>
      {(b) => {
        const drafted = b >= 2;
        const live = b >= 3;
        const ordered = b >= 4;
        return (
          <>
            <Wire from={[254, 150]} to={[300, 150]} on={b >= 1} />
            <Packet from={[254, 150]} to={[300, 150]} on={b === 1} color="#6D3FD9" />
            <Wire from={[385, 348]} to={[385, 358]} on={b >= 5} />

            {/* The builder */}
            <At x={18} y={24} w={236} z={10} order={1}>
              <Widget
                title={L(S.builder)}
                icon={LayoutTemplate}
                focus={b <= 1 || b === 3}
                right={
                  <Tag tone={live ? "success" : "neutral"}>
                    <Swap value={L(live ? S.published : S.draft)} />
                  </Tag>
                }
              >
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.06em] text-gc-ink-60">{L(S.pickProduct)}</p>
                <ul className="mt-1 space-y-1">
                  {S.products.map((p, i) => (
                    <li
                      key={p}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-2 py-1 text-[11px]",
                        i === 0 ? "bg-gc-royal-10 font-semibold text-gc-royal ring-1 ring-gc-royal/40" : "text-gc-ink-60",
                      )}
                    >
                      {i === 0 ? (
                        <Image src="/merchants/merchant-electronics.webp" alt="" width={40} height={40} className="size-5 rounded object-cover" />
                      ) : (
                        <span className="size-5 rounded bg-gc-canvas" />
                      )}
                      <span className="flex-1">{p}</span>
                      {i === 0 && <span className="tabular-nums">{n(DEMO.price, { money: true })}</span>}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-[10.5px] text-gc-ink-60">{L(S.template)}</p>

                {/* GridAI writes the draft */}
                <div
                  className={cn(
                    "mt-2 flex items-center justify-center gap-1.5 rounded-full py-2 text-[11px] font-semibold text-white transition-colors duration-300",
                    drafted ? "bg-[#6D3FD9]" : "bg-gradient-to-r from-[#6D3FD9] to-gc-royal",
                  )}
                >
                  {drafted ? <BadgeCheck className="size-3.5" /> : <Sparkles className={cn("size-3.5", b === 1 && "animate-pulse")} />}
                  <Swap value={L(drafted ? S.drafted : b === 1 ? S.building : S.build)} />
                </div>
                <Show on={b >= 1} from="up">
                  <p className="mt-1.5 text-center">
                    <Tag tone="ai">
                      <Sparkles className="size-3" /> GridAI · {L(S.credits)}
                    </Tag>
                  </p>
                </Show>

                {/* The merchant publishes */}
                <Show on={drafted} from="up">
                  <div
                    className={cn(
                      "mt-2 flex items-center justify-center gap-1.5 rounded-full py-2 text-[11px] font-semibold text-white transition-colors duration-300",
                      live ? "bg-gc-success" : "bg-gc-ink",
                    )}
                  >
                    {live && <BadgeCheck className="size-3.5" />}
                    <Swap value={L(live ? S.published : S.publish)} />
                  </div>
                </Show>
                <Show on={live} from="up">
                  <p className="mt-2 flex items-center gap-1.5 rounded-lg bg-gc-canvas px-2 py-1.5 text-[10.5px] font-medium text-gc-royal">
                    <Link2 className="size-3.5 shrink-0" />
                    <span className="truncate">{S.link}</span>
                  </p>
                </Show>
              </Widget>
            </At>

            {/* The page, on a phone */}
            <At x={300} y={18} w={170} z={10} order={2}>
              <div className="rounded-[30px] bg-gc-ink p-[6px] shadow-[0_30px_60px_-30px_rgba(10,40,100,0.7)]">
                <div className="relative h-[318px] overflow-hidden rounded-[24px] bg-white">
                  <div className="absolute left-1/2 top-1.5 z-10 h-3.5 w-14 -translate-x-1/2 rounded-full bg-gc-ink" />
                  <div className="relative h-[104px] bg-gradient-to-br from-gc-royal-20 to-gc-sky/40">
                    <Show on={drafted} from="pop" className="absolute inset-0">
                      <Image src="/merchants/merchant-electronics.webp" alt="" fill sizes="170px" className="object-cover opacity-90" />
                    </Show>
                  </div>
                  <div className="p-3">
                    {drafted ? (
                      <Show on from="up">
                        <p className="text-[13px] font-bold leading-tight">{L(S.headline)}</p>
                        <p className="mt-1 text-[10px] leading-snug text-gc-ink-60">{L(S.sub)}</p>
                        <p className="mt-1.5 text-[17px] font-bold tabular-nums">{n(DEMO.price, { money: true })}</p>
                      </Show>
                    ) : (
                      <div className="space-y-1.5 pt-1">
                        {[85, 60, 45].map((w, i) => (
                          <motion.span
                            key={i}
                            className="block h-2 rounded-full bg-gc-canvas"
                            style={{ width: `${w}%` }}
                            animate={b === 1 ? { opacity: [0.4, 1, 0.4] } : { opacity: 1 }}
                            transition={{ duration: 1, repeat: b === 1 ? Infinity : 0, delay: i * 0.15 }}
                          />
                        ))}
                      </div>
                    )}
                    <Show on={drafted} from="up" delay={0.15}>
                      {/* The order form on the page */}
                      <div className="mt-2 rounded-xl bg-gc-canvas p-2 text-[10px]">
                        {ordered ? (
                          <>
                            <p className="flex items-center gap-1.5 font-semibold">
                              <Avatar name={CUSTOMER} size={16} tone={2} /> {CUSTOMER}
                            </p>
                            <p className="mt-0.5 text-gc-ink-60">
                              {locale === "bn" ? "উত্তরা, ঢাকা" : "Uttara, Dhaka"} · {L(S.cod)}
                            </p>
                          </>
                        ) : (
                          <div className="space-y-1.5 py-0.5">
                            {[90, 70, 80].map((w, i) => (
                              <span key={i} className="block h-1.5 rounded-full bg-white" style={{ width: `${w}%` }} />
                            ))}
                          </div>
                        )}
                      </div>
                      <motion.span
                        className={cn("mt-1.5 flex items-center justify-center gap-1 rounded-full py-1.5 text-[10.5px] font-bold text-white transition-colors duration-300", ordered ? "bg-gc-success" : "bg-gc-accent")}
                        initial={false}
                        animate={b === 4 ? { scale: [1, 0.92, 1] } : { scale: 1 }}
                        transition={{ duration: 0.4, ease: EASE.outQuart, delay: 0.3 }}
                      >
                        {ordered && <BadgeCheck className="size-3" />}
                        <Swap value={L(ordered ? S.ordered : S.orderNow)} />
                      </motion.span>
                    </Show>
                  </div>
                </div>
              </div>
            </At>

            {/* Orders, with the page as the order's source */}
            <At x={300} y={358} w={242} z={10} order={3}>
              <Show on={b >= 5} from="up">
                <Widget title={L(S.orders)} icon={Receipt} focus={b >= 5} right={<Tag tone="royal">{L(S.newTag)}</Tag>}>
                  <div className="flex items-center gap-2">
                    <Avatar name={CUSTOMER} size={26} tone={2} />
                    <div className="min-w-0 flex-1 text-[11px]">
                      <p className="truncate font-semibold leading-tight">{L(S.item)}</p>
                      <p className="truncate text-[10px] text-gc-ink-60">
                        {CUSTOMER} · {L(S.cod)}
                      </p>
                    </div>
                    <p className="text-[14px] font-bold tabular-nums">{n(DEMO.price, { money: true })}</p>
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-[10.5px]">
                    <span className="text-gc-ink-60">{L(S.source)}:</span>
                    <Tag tone="royal">
                      <LayoutTemplate className="size-3" /> {L(S.sourcePage)}
                    </Tag>
                  </p>
                </Widget>
              </Show>
            </At>

            <Cursor x={136} y={b >= 2 ? 266 : 214} click={b === 1 || b === 3} show={b <= 3} />
          </>
        );
      }}
    </Scene>
  );
}
