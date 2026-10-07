"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { House, Inbox, Package, ScanBarcode, ShoppingCart, Smartphone } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { Icon } from "@/components/ui/Icon";
import { APP_LINKS, MOBILE_APPS } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { Panel } from "../../primitives";
import { Avatar, ChannelLogo, formatBdt, type Channel } from "../hero/shared";
import { HOME_INNER, IconChip, useTimeline } from "./kit";

/** Beats: 1 notification drops in · 2 the order joins the list · 3 notification leaves. */
const CUES = [700, 1900, 4200];
const DURATION = 7000;

type Order = { id: string; name: string; amount: number; channel: Channel; status: string; tone: string };

const ORDERS: Order[] = [
  { id: "#GC-10539", name: "Arafat Hossain", amount: 23999, channel: "messenger", status: "Confirmed", tone: "bg-gc-royal-10 text-gc-royal" },
  { id: "#GC-10538", name: "Sadia Afrin", amount: 1290, channel: "site", status: "Shipped", tone: "bg-[#ECFDF5] text-[#047857]" },
  { id: "#GC-10537", name: "Rakib Uddin", amount: 3520, channel: "whatsapp", status: "Paid", tone: "bg-[#ECFDF5] text-[#047857]" },
];
const NEW_ORDER: Order = { id: "#GC-10540", name: "Farzana Karim", amount: 2450, channel: "facebook", status: "New", tone: "bg-gc-accent-10 text-gc-ink" };

/** The GridCommerce app on Android and iPhone: two phones and the store badges. */
export function MobileApps() {
  const { L } = useI18n();
  const reduced = useReducedMotion();
  const { ref, beat } = useTimeline(CUES, { duration: DURATION });
  const orders = beat >= 2 ? [NEW_ORDER, ...ORDERS] : ORDERS;
  const today = 84320 + (beat >= 2 ? NEW_ORDER.amount : 0);

  return (
    <Panel
      tone="white"
      pattern={null}
      inner={HOME_INNER}
      background={
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-gc-sky-10 via-white to-gc-royal-10" />
          <div className="absolute -right-24 top-1/2 size-[34rem] -translate-y-1/2 rounded-full bg-gc-royal-20/60 blur-[100px]" />
        </>
      }
    >
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Reveal>
          <h2 className="text-gc-h1 tracking-[-0.03em] text-gc-ink">
            {L(MOBILE_APPS.lead)} <IconChip icon={Smartphone} tone="accent" tilt={8} />
            <span className="text-gc-ink-50">{L(MOBILE_APPS.tail)}</span>
          </h2>
          <p className="mt-6 max-w-[32rem] text-gc-lead text-gc-ink-60">{L(MOBILE_APPS.body)}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {MOBILE_APPS.features.map((f) => (
              <li key={f.icon} className="flex items-center gap-3 rounded-2xl bg-white/80 p-3 ring-1 ring-gc-line backdrop-blur-sm">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gc-royal-10 text-gc-royal">
                  <Icon name={f.icon} className="size-[18px]" strokeWidth={2} />
                </span>
                <span className="text-gc-small font-semibold text-gc-ink">{L(f.text)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={APP_LINKS.googlePlay} aria-label={L(MOBILE_APPS.googlePlay)} className="rounded-[10px] transition-transform duration-200 hover:-translate-y-0.5">
              <Image src="/apps/google-play.webp" alt="" width={405} height={120} className="h-12 w-auto" />
            </a>
            <a href={APP_LINKS.appStore} aria-label={L(MOBILE_APPS.appStore)} className="rounded-[10px] transition-transform duration-200 hover:-translate-y-0.5">
              <Image src="/apps/app-store.webp" alt="" width={358} height={120} className="h-12 w-auto" />
            </a>
          </div>
        </Reveal>

        <div ref={ref} className="relative mx-auto h-[34rem] w-full max-w-[30rem]" aria-hidden>
          {/* Back phone: inbox */}
          <Phone className="absolute right-0 top-6 hidden rotate-[7deg] scale-[0.92] opacity-95 sm:block">
            <AppHeader title="Inbox" sub="7 open chats" />
            <div className="space-y-2.5 px-3 pt-2">
              {[
                { who: "Farzana Karim", ch: "messenger" as Channel, text: "2 ta nibo, Mirpur 10" },
                { who: "@rumana.s", ch: "instagram" as Channel, text: "Blue color ache?" },
                { who: "Rakib Uddin", ch: "whatsapp" as Channel, text: "TrxID 8FJ2K4LP" },
                { who: "Karim Saheb", ch: "web" as Channel, text: "Delivery charge koto?" },
              ].map((c, i) => (
                <div key={c.who} className="flex items-center gap-2.5">
                  <span className="relative">
                    <Avatar name={c.who.replace("@", "")} size={30} tone={i} />
                    <span className="absolute -bottom-0.5 -right-0.5 rounded-full bg-white p-[1px]">
                      <ChannelLogo channel={c.ch} size={10} />
                    </span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[0.6875rem] font-semibold text-gc-ink">{c.who}</p>
                    <p className="truncate text-[0.625rem] text-gc-ink-50">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <TabBar active="inbox" />
          </Phone>

          {/* Front phone: orders */}
          <Phone className="absolute left-1/2 top-0 -translate-x-1/2 -rotate-[4deg] sm:left-0 sm:translate-x-0">
            <AppHeader title="Orders" sub={`Today ৳${formatBdt(today)}`} />
            <div className="px-3 pt-1">
              <div className="flex gap-1.5 text-[0.625rem] font-semibold">
                <span className="rounded-full bg-gc-ink px-2 py-0.5 text-white">All</span>
                <span className="rounded-full bg-gc-canvas px-2 py-0.5 text-gc-ink-60">To confirm 3</span>
                <span className="rounded-full bg-gc-canvas px-2 py-0.5 text-gc-ink-60">To ship 5</span>
              </div>
              <ul className="mt-2.5 space-y-2">
                <AnimatePresence initial={false}>
                  {orders.map((o) => (
                    <motion.li
                      key={o.id}
                      layout={!reduced}
                      initial={reduced ? false : { opacity: 0, y: -10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.45, ease: EASE.outQuart }}
                      className={cn("flex items-center gap-2.5 rounded-xl bg-gc-canvas p-2.5", o === NEW_ORDER && "ring-2 ring-gc-accent/60")}
                    >
                      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white">
                        <ChannelLogo channel={o.channel} size={15} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[0.6875rem] font-semibold text-gc-ink">{o.name}</p>
                        <p className="text-[0.625rem] text-gc-ink-50">{o.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[0.6875rem] font-bold tabular-nums text-gc-ink">৳{formatBdt(o.amount)}</p>
                        <span className={cn("rounded-full px-1.5 py-px text-[0.5625rem] font-semibold", o.tone)}>{o.status}</span>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
              <div className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-dashed border-gc-line py-2.5 text-[0.6875rem] font-semibold text-gc-ink-60">
                <ScanBarcode className="size-4" /> Scan to sell
              </div>
            </div>
            <TabBar active="orders" />

            {/* Push notification */}
            <AnimatePresence>
              {beat >= 1 && beat < 3 && (
                <motion.div
                  initial={reduced ? false : { y: -70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -70, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 360, damping: 30 }}
                  className="absolute inset-x-2 top-9 z-10 flex items-center gap-2.5 rounded-2xl bg-white/95 p-2.5 shadow-[0_14px_30px_-12px_rgba(17,24,39,0.45)] ring-1 ring-black/5 backdrop-blur"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white ring-1 ring-gc-line">
                    <Image src="/brand/v2/gridcommerce-mark.png" alt="" width={18} height={18} className="size-[18px] object-contain" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.625rem] font-semibold text-gc-ink-50">GridCommerce · now</p>
                    <p className="truncate text-[0.6875rem] font-semibold text-gc-ink">New order #GC-10540 · ৳2,450</p>
                    <p className="truncate text-[0.625rem] text-gc-ink-60">Farzana Karim · Facebook</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Phone>
        </div>
      </div>
    </Panel>
  );
}

function Phone({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "w-[15.5rem] rounded-[2.75rem] bg-gc-ink p-[0.5rem] shadow-[0_40px_70px_-30px_rgba(10,91,207,0.55),0_14px_30px_-14px_rgba(17,24,39,0.4)] ring-1 ring-black/40",
        className,
      )}
    >
      <div className="relative flex h-[30.5rem] flex-col overflow-hidden rounded-[2.3rem] bg-white">
        <div className="flex h-9 shrink-0 items-center justify-between px-6 text-[0.625rem] font-semibold text-gc-ink">
          <span>9:41</span>
          <span className="absolute left-1/2 top-2 h-[1.35rem] w-[5.25rem] -translate-x-1/2 rounded-full bg-black" />
          <span className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-[2px] border border-gc-ink" />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

function AppHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="px-3 pb-2 pt-1">
      <p className="font-gc-display text-[1.125rem] font-extrabold text-gc-ink">{title}</p>
      <p className="text-[0.6875rem] font-medium text-gc-ink-50 tabular-nums">{sub}</p>
    </div>
  );
}

function TabBar({ active }: { active: "home" | "orders" | "inbox" | "stock" }) {
  const items = [
    { id: "home", icon: House, label: "Home" },
    { id: "orders", icon: ShoppingCart, label: "Orders" },
    { id: "inbox", icon: Inbox, label: "Inbox" },
    { id: "stock", icon: Package, label: "Stock" },
  ] as const;
  return (
    <div className="mt-auto grid grid-cols-4 border-t border-gc-line bg-white px-2 pb-4 pt-2">
      {items.map(({ id, icon: Ico, label }) => (
        <span key={id} className={cn("flex flex-col items-center gap-0.5 text-[0.5625rem] font-semibold", id === active ? "text-gc-royal" : "text-gc-ink-50")}>
          <Ico className="size-4" />
          {label}
        </span>
      ))}
    </div>
  );
}
