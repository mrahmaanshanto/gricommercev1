"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, Copy, LayoutTemplate, Link2, Radar, ShoppingBag, Sparkles, Star } from "lucide-react";
import { STORE_SCENE as S } from "@/data/copy/scenes";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { useNum } from "../sections/kit";
import { At, Cursor, Scene, Show, Swap, Tag, Toast, Widget } from "./kit";

/** Beats: 1 click Write with AI · 2 writing, page builds · 3 copy lands · 4 tracking connected · 5 link copied · 6 order from the page. */
const CUES = [500, 1500, 2800, 4100, 5400, 6700];

const PIXELS = [
  { name: "Meta", src: "/integrations/meta-ads.png" },
  { name: "TikTok", src: "/integrations/tiktok-ads.png" },
  { name: "Google", src: "/integrations/google-ads.png" },
];

/** Pick a product, AI writes the page, tracking connects, the link goes out, an order comes in. */
export function StoreScene() {
  const { L } = useI18n();
  const n = useNum();

  return (
    <Scene cues={CUES} duration={10200} label={L(S.label)}>
      {(b) => (
        <>
          {/* Builder */}
          <At x={18} y={34} w={240} z={10}>
            <Widget title={L(S.builder)} icon={LayoutTemplate} focus={b === 1 || b === 2}>
              <div className="flex items-center gap-2 rounded-xl bg-gc-canvas p-2">
                <Image src="/merchants/merchant-electronics.webp" alt="" width={72} height={72} className="size-9 rounded-lg object-cover" />
                <span className="text-[11.5px] font-semibold">{L(S.product)}</span>
              </div>
              <span
                className={cn(
                  "mt-2.5 flex items-center justify-center gap-1.5 rounded-full py-2 text-[11px] font-semibold text-white transition-colors duration-300",
                  b >= 3 ? "bg-gc-success" : "bg-gradient-to-r from-[#6D3FD9] to-gc-royal",
                )}
              >
                {b >= 3 ? <BadgeCheck className="size-3.5" /> : <Sparkles className={cn("size-3.5", b === 2 && "animate-pulse")} />}
                <Swap value={L(b >= 3 ? S.written : b === 2 ? S.writing : S.write)} />
              </span>
            </Widget>
          </At>

          {/* Pixel & CAPI */}
          <At x={18} y={196} w={240} z={10}>
            <Show on={b >= 4} from="right">
              <Widget title={L(S.tracking)} icon={Radar} focus={b === 4}>
                <div className="grid grid-cols-3 gap-1.5">
                  {PIXELS.map((p, i) => (
                    <Show key={p.name} on={b >= 4} from="pop" delay={0.15 * i}>
                      <div className="flex flex-col items-center gap-1 rounded-xl bg-gc-canvas py-2">
                        <Image src={p.src} alt="" width={40} height={40} className="size-6 object-contain" />
                        <span className="text-[10px] font-semibold">{p.name}</span>
                        <BadgeCheck className="size-3.5 text-gc-success" />
                      </div>
                    </Show>
                  ))}
                </div>
              </Widget>
            </Show>
          </At>

          {/* Link */}
          <At x={18} y={338} w={240} z={10}>
            <Show on={b >= 5} from="up">
              <div className="flex items-center gap-2 rounded-full bg-white py-1.5 pl-3 pr-1.5 text-[11.5px] font-semibold shadow-[0_14px_30px_-18px_rgba(10,60,150,0.5)] ring-1 ring-black/[0.05]">
                <Link2 className="size-3.5 text-gc-royal" />
                <span className="flex-1">shop.bd/eid</span>
                <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10.5px] transition-colors", b >= 5 ? "bg-gc-success text-white" : "bg-gc-canvas")}>
                  {b >= 5 ? <BadgeCheck className="size-3" /> : <Copy className="size-3" />} {L(S.copied)}
                </span>
              </div>
            </Show>
          </At>

          {/* The page, on a phone */}
          <At x={300} y={18} w={196} z={10}>
            <div className="h-[404px] rounded-[34px] bg-gc-ink p-[7px] shadow-[0_30px_60px_-30px_rgba(10,40,100,0.7)]">
              <div className="relative h-full overflow-hidden rounded-[28px] bg-white">
                <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-gc-ink" />
                <Show on={b >= 2} from="pop">
                  <div className="relative h-[150px] bg-gradient-to-br from-gc-royal-20 to-gc-sky/40">
                    <Image src="/merchants/merchant-electronics.webp" alt="" fill sizes="200px" className="object-cover opacity-90" />
                  </div>
                </Show>
                <div className="space-y-2 p-3">
                  {b >= 3 ? (
                    <Show on from="up">
                      <p className="text-[14px] font-bold leading-tight">{L(S.headline)}</p>
                      <p className="mt-1 text-[10.5px] text-gc-ink-60">{L(S.sub)}</p>
                    </Show>
                  ) : (
                    <div className="space-y-1.5 pt-1">
                      {[85, 60, 70].map((w, i) => (
                        <motion.span
                          key={i}
                          className="block h-2 rounded-full bg-gc-canvas"
                          style={{ width: `${w}%` }}
                          animate={b === 2 ? { opacity: [0.4, 1, 0.4] } : { opacity: 1 }}
                          transition={{ duration: 1, repeat: b === 2 ? Infinity : 0, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  )}
                  <Show on={b >= 3} from="up" delay={0.2}>
                    <div className="flex items-center gap-0.5 text-[#F5A524]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3 fill-current" />
                      ))}
                      <span className="ml-1 text-[10px] text-gc-ink-60">(128)</span>
                    </div>
                    <p className="mt-1.5 text-[18px] font-bold tabular-nums">{n(2500, { money: true })}</p>
                    <motion.span
                      className="mt-2 block rounded-full bg-gc-accent py-2 text-center text-[12px] font-bold text-white"
                      initial={false}
                      animate={b === 6 ? { scale: [1, 0.92, 1] } : { scale: 1 }}
                      transition={{ duration: 0.4, ease: EASE.outQuart, delay: 0.4 }}
                    >
                      {L(S.orderNow)}
                    </motion.span>
                  </Show>
                </div>
              </div>
            </div>
          </At>

          <At x={226} y={396} z={40}>
            <Toast on={b >= 6} icon={ShoppingBag} tone="success">
              {L(S.newOrder)}
            </Toast>
          </At>

          <Tag tone="ai" className={cn("absolute left-[430px] top-[150px] z-20 transition-opacity duration-500", b === 2 ? "opacity-100" : "opacity-0")}>
            <Sparkles className="size-3" /> AI
          </Tag>

          <Cursor
            x={b >= 6 ? 400 : b >= 5 ? 225 : 140}
            y={b >= 6 ? 340 : b >= 5 ? 354 : 108}
            click={b === 1 || b === 5 || b === 6}
            show={b >= 1 && b !== 3 && b !== 4}
          />
        </>
      )}
    </Scene>
  );
}
