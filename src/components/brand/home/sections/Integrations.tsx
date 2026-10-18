"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight, CreditCard, Mail, MessagesSquare, Plug, Radar, Store, Truck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion";
import { CONNECT } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { IconChip, TwoTone, useOnScreen } from "./kit";

/*
 * "See what connects, and what moves": a selectable diagram instead of a logo marquee. GridCommerce sits in the
 * middle; the six groups of the merchant app's Connections page sit around it. Tap, click or focus an app and one
 * plain sentence says what that connection does for the owner, while the group's line to GridCommerce shows what goes
 * out and what comes back. The highlight cycles slowly on its own until the first interaction (never under reduced
 * motion). On phones the groups are chips, the apps a wrapped grid, the sentence under them.
 */

type GroupId = keyof typeof CONNECT.integrations.groups;
type AppId = keyof typeof CONNECT.integrations.apps;
type App = { id: AppId; name: string; group: GroupId; src: string; wide?: boolean; tall?: boolean };

/* Groups as in the app's Connections page (lib/connections.js › GROUPS); meetings and devices are not shown. */
const GROUPS: { id: GroupId; icon: LucideIcon; side: "left" | "right" }[] = [
  { id: "sell", icon: Store, side: "left" },
  { id: "social", icon: MessagesSquare, side: "left" },
  { id: "ads", icon: Radar, side: "left" },
  { id: "payments", icon: CreditCard, side: "right" },
  { id: "delivery", icon: Truck, side: "right" },
  { id: "messages", icon: Mail, side: "right" },
];

/* Only apps the merchant app's Connections page lists (lib/connections.js › APPS) and that have a logo here. */
const APPS: App[] = [
  { id: "woocommerce", name: "WooCommerce", group: "sell", src: "/integrations/wordpress.webp", wide: true },
  { id: "shopify", name: "Shopify", group: "sell", src: "/integrations/shopify.webp", wide: true },
  { id: "meta-catalog", name: "Meta catalog", group: "sell", src: "/integrations/meta-ads.png", wide: true },
  { id: "facebook", name: "Facebook Page", group: "social", src: "/integrations/facebook-page.png" },
  { id: "instagram", name: "Instagram", group: "social", src: "/integrations/instagram.png" },
  { id: "whatsapp", name: "WhatsApp Business", group: "social", src: "/integrations/whatsapp-business.png" },
  { id: "tiktok", name: "TikTok", group: "social", src: "/integrations/tiktok-shop.png" },
  { id: "youtube", name: "YouTube", group: "social", src: "/integrations/youtube.png" },
  { id: "gbp", name: "Google Business Profile", group: "social", src: "/integrations/google-business.png" },
  { id: "meta-ads", name: "Meta ads & Pixel", group: "ads", src: "/integrations/meta-ads.png", wide: true },
  { id: "google-ads", name: "Google Ads", group: "ads", src: "/integrations/google-ads.png" },
  { id: "tiktok-ads", name: "TikTok ads & Pixel", group: "ads", src: "/integrations/tiktok-ads.png" },
  { id: "ga4", name: "Google Analytics 4", group: "ads", src: "/integrations/google-analytics.png" },
  { id: "bkash", name: "bKash", group: "payments", src: "/integrations/bkash.png", wide: true, tall: true },
  { id: "nagad", name: "Nagad", group: "payments", src: "/integrations/nagad.png", wide: true },
  { id: "rocket", name: "Rocket", group: "payments", src: "/integrations/rocket.png" },
  { id: "sslcommerz", name: "SSLCOMMERZ", group: "payments", src: "/integrations/sslcommerz.png", wide: true },
  { id: "eps", name: "EPS", group: "payments", src: "/integrations/eps.png", wide: true },
  { id: "pathao", name: "Pathao", group: "delivery", src: "/integrations/pathao.png", wide: true },
  { id: "steadfast", name: "Steadfast", group: "delivery", src: "/integrations/steadfast.png", wide: true },
  { id: "redx", name: "RedX", group: "delivery", src: "/integrations/redx.png", wide: true },
  { id: "carrybee", name: "Carrybee", group: "delivery", src: "/integrations/carrybee.png", wide: true },
  { id: "sms", name: "SMS gateway", group: "messages", src: "/integrations/sms-gateway.png" },
  { id: "email", name: "Email sending", group: "messages", src: "/integrations/email.png" },
];

const FIRST: AppId = "pathao";
const CYCLE_MS = 3200;

export function Integrations() {
  const { L } = useI18n();
  const C = CONNECT.integrations;
  const reduced = !!useReducedMotion();
  const { ref, onScreen } = useOnScreen<HTMLDivElement>();
  const [sel, setSel] = useState<AppId>(FIRST);
  const [touched, setTouched] = useState(false);

  // the highlight walks through the apps while the diagram is on screen and nobody has touched it
  useEffect(() => {
    if (!onScreen || reduced || touched) return;
    const id = window.setInterval(() => {
      setSel((cur) => {
        const i = APPS.findIndex((a) => a.id === cur);
        return APPS[(i + 1) % APPS.length].id;
      });
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [onScreen, reduced, touched]);

  const app = APPS.find((a) => a.id === sel) ?? APPS[0];
  const group = app.group;
  const pick = (id: AppId) => {
    setTouched(true);
    setSel(id);
  };
  const pickGroup = (g: GroupId) => {
    const first = APPS.find((a) => a.group === g);
    if (first) pick(first.id);
  };

  return (
    <section id="integrations" className="gc-cv scroll-mt-28 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[20px] bg-white py-12 md:py-16 lg:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-2/3 bg-gradient-to-b from-gc-royal-10/70 to-transparent" />
        <Reveal className="mx-auto max-w-3xl px-5 text-center">
          <TwoTone title={L(C.title)} chip={<IconChip icon={Plug} tone="royal" tilt={-6} />} />
          <p className="mx-auto mt-5 max-w-2xl text-gc-lead text-gc-ink-60">{L(C.body)}</p>
        </Reveal>

        <div ref={ref} className="container-page mt-10 md:mt-14">
          {/* Wide screens: six groups around GridCommerce */}
          <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_64px_220px_64px_minmax(0,1fr)] lg:grid-rows-3 lg:gap-y-3">
            {GROUPS.map((g, i) => {
              const row = (i % 3) + 1;
              const col = g.side === "left" ? 1 : 5;
              const active = g.id === group;
              return (
                <GroupCard key={g.id} g={g} active={active} sel={sel} onPick={pick} style={{ gridRow: row, gridColumn: col }} />
              );
            })}
            {GROUPS.map((g, i) => (
              <Connector key={`c-${g.id}`} side={g.side} active={g.id === group} reduced={reduced} style={{ gridRow: (i % 3) + 1, gridColumn: g.side === "left" ? 2 : 4 }} />
            ))}
            <Hub group={group} side={GROUPS.find((g) => g.id === group)?.side ?? "left"} style={{ gridRow: "1 / span 3", gridColumn: 3 }} />
          </div>

          {/* Phones and tablets: group chips, then the group's apps */}
          <div className="lg:hidden">
            <p className="text-center text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-gc-ink-50">{L(C.hint)}</p>
            <div className="-mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="group" aria-label={L(C.label)}>
              {GROUPS.map((g) => {
                const I = g.icon;
                const active = g.id === group;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => pickGroup(g.id)}
                    aria-pressed={active}
                    className={cn(
                      "inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full px-3.5 text-[0.8125rem] font-semibold transition-colors",
                      active ? "bg-gc-ink text-white" : "bg-gc-canvas text-gc-ink-70 hover:bg-gc-royal-10",
                    )}
                  >
                    <I aria-hidden className="size-4" />
                    {L(C.groups[g.id].label)}
                  </button>
                );
              })}
            </div>
            <ul className="mt-4 flex flex-wrap justify-center gap-2" aria-label={L(C.groups[group].label)}>
              {APPS.filter((a) => a.group === group).map((a) => (
                <li key={a.id}>
                  <AppButton app={a} active={a.id === sel} onPick={pick} withName />
                </li>
              ))}
            </ul>
            <Exchange group={group} className="mt-4 justify-center" />
          </div>

          {/* The sentence for the selected app */}
          <div className="mx-auto mt-6 max-w-2xl md:mt-8" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={app.id}
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: EASE.outQuart }}
                className="flex items-start gap-3 rounded-2xl bg-gc-canvas p-4 ring-1 ring-gc-line sm:items-center sm:p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white ring-1 ring-gc-line">
                  <Image src={app.src} alt="" width={64} height={64} className={cn("object-contain", app.wide ? "h-5 w-9" : "size-7")} />
                </span>
                <p className="min-w-0 text-[0.9375rem] leading-snug text-gc-ink">
                  <span className="font-semibold">{app.name}: </span>
                  {L(C.apps[app.id])}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function GroupCard({ g, active, sel, onPick, style }: { g: (typeof GROUPS)[number]; active: boolean; sel: AppId; onPick: (id: AppId) => void; style: CSSProperties }) {
  const { L } = useI18n();
  const C = CONNECT.integrations;
  const I = g.icon;
  return (
    <div
      style={style}
      className={cn(
        "rounded-2xl p-3.5 ring-1 transition-[background-color,box-shadow] duration-500",
        active ? "bg-white shadow-[0_18px_40px_-22px_rgba(10,60,150,0.45)] ring-gc-royal/40" : "bg-gc-canvas ring-transparent",
      )}
    >
      <p className={cn("flex items-center gap-1.5 text-[0.8125rem] font-semibold", active ? "text-gc-royal" : "text-gc-ink-70", g.side === "right" && "lg:flex-row-reverse lg:text-right")}>
        <I aria-hidden className="size-4" />
        {L(C.groups[g.id].label)}
      </p>
      <ul className={cn("mt-2.5 flex flex-wrap gap-1.5", g.side === "right" && "lg:justify-end")} aria-label={L(C.groups[g.id].label)}>
        {APPS.filter((a) => a.group === g.id).map((a) => (
          <li key={a.id}>
            <AppButton app={a} active={a.id === sel} onPick={onPick} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A logo chip that is a real button: tap, click or focus selects the app. */
function AppButton({ app, active, onPick, withName }: { app: App; active: boolean; onPick: (id: AppId) => void; withName?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => onPick(app.id)}
      onFocus={() => onPick(app.id)}
      aria-pressed={active}
      aria-label={withName ? undefined : app.name}
      title={app.name}
      className={cn(
        "inline-flex h-11 items-center gap-2 rounded-xl bg-white px-2.5 ring-1 transition-[box-shadow,transform] duration-300 hover:-translate-y-px",
        active ? "ring-2 ring-gc-royal shadow-[0_10px_24px_-14px_rgba(10,60,150,0.6)]" : "ring-gc-line",
        withName && "pr-3",
      )}
    >
      <Image
        src={app.src}
        alt=""
        width={app.wide ? 200 : 80}
        height={app.wide ? 70 : 80}
        sizes="80px"
        className={cn("w-auto object-contain", app.tall ? "max-h-7" : app.wide ? "h-4 max-w-[64px]" : "size-6")}
      />
      {withName && <span className="text-[0.8125rem] font-semibold text-gc-ink">{app.name}</span>}
    </button>
  );
}

/** The dashed line between a group and GridCommerce; while active, one dot goes out and one comes back. */
function Connector({ side, active, reduced, style }: { side: "left" | "right"; active: boolean; reduced: boolean; style: CSSProperties }) {
  const toHub = side === "left" ? [0, 44] : [44, 0];
  const fromHub = side === "left" ? [44, 0] : [0, 44];
  return (
    <div style={style} aria-hidden className="relative flex items-center px-2">
      <span className={cn("h-0 w-full border-t-2 border-dashed transition-colors duration-500", active ? "border-gc-royal" : "border-gc-ink/15")} />
      {active && !reduced && (
        <>
          <motion.span
            className="absolute left-2 top-1/2 -mt-[5px] size-2.5 rounded-full bg-gc-royal shadow-[0_0_0_4px_rgba(10,91,207,0.2)]"
            initial={{ x: fromHub[0], opacity: 0 }}
            animate={{ x: fromHub, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute left-2 top-1/2 -mt-[5px] size-2.5 rounded-full bg-gc-success shadow-[0_0_0_4px_rgba(4,120,87,0.2)]"
            initial={{ x: toHub[0], opacity: 0 }}
            animate={{ x: toHub, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut", delay: 0.8 }}
          />
        </>
      )}
    </div>
  );
}

/** GridCommerce in the middle, saying what goes out and what comes back for the active group. */
function Hub({ group, side, style }: { group: GroupId; side: "left" | "right"; style: CSSProperties }) {
  const { L } = useI18n();
  const C = CONNECT.integrations;
  return (
    <div style={style} className="flex flex-col items-center justify-center gap-3 rounded-[20px] bg-gc-ink px-4 py-5 text-center text-white shadow-[0_24px_50px_-24px_rgba(10,60,150,0.7)]">
      <Image src="/brand/v2/gridcommerce-mark.png" alt="" width={48} height={61} className="h-12 w-auto object-contain" />
      <p className="text-[0.9375rem] font-semibold">{L(C.hub)}</p>
      <Exchange group={group} side={side} dark />
    </div>
  );
}

/** Two lines: what GridCommerce sends to the group and what comes back. */
function Exchange({ group, side = "left", dark, className }: { group: GroupId; side?: "left" | "right"; dark?: boolean; className?: string }) {
  const { L } = useI18n();
  const C = CONNECT.integrations;
  const g = C.groups[group];
  const Out = side === "left" ? ArrowLeft : ArrowRight;
  const In = side === "left" ? ArrowRight : ArrowLeft;
  return (
    <div className={cn("flex flex-col gap-1.5 text-left text-[0.75rem] leading-snug", className)} aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={group} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="flex flex-col gap-1.5">
          <p className={cn("flex items-start gap-1.5 rounded-lg px-2 py-1.5", dark ? "bg-white/10" : "bg-gc-royal-10/70")}>
            <Out aria-hidden className={cn("mt-px size-3.5 shrink-0", dark ? "text-gc-sky" : "text-gc-royal")} />
            <span>
              <span className={cn("font-semibold", dark ? "text-white/70" : "text-gc-ink-60")}>{L(C.sends)}: </span>
              <span className={dark ? "text-white" : "text-gc-ink"}>{L(g.out)}</span>
            </span>
          </p>
          <p className={cn("flex items-start gap-1.5 rounded-lg px-2 py-1.5", dark ? "bg-white/10" : "bg-gc-success-10")}>
            <In aria-hidden className={cn("mt-px size-3.5 shrink-0", dark ? "text-gc-success-light" : "text-gc-success")} />
            <span>
              <span className={cn("font-semibold", dark ? "text-white/70" : "text-gc-ink-60")}>{L(C.gets)}: </span>
              <span className={dark ? "text-white" : "text-gc-ink"}>{L(g.in)}</span>
            </span>
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
