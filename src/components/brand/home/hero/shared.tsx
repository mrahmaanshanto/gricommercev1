"use client";

import Image from "next/image";
import { motion, useReducedMotion, animate, useMotionValue, useTransform } from "motion/react";
import { useEffect, type ReactNode } from "react";
import {
  ChartColumn,
  Globe,
  House,
  Inbox,
  Settings,
  ShoppingCart,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";

/**
 * Building blocks for the hero's product mockups.
 *
 * The mockups are drawn at a fixed design size and scaled to fit (see
 * HeroShowcase), so sizes here are design pixels that follow the merchant
 * app's own scale: 13px body, 12px helper text, 20px page titles.
 */

/* ------------------------------------------------------------------ */
/* Reveal on a beat                                                    */
/* ------------------------------------------------------------------ */

/** Fades and lifts its children in once `show` turns true. Space is reserved. */
export function Appear({
  show,
  children,
  className,
  from = "below",
  delay = 0,
}: {
  show: boolean;
  children: ReactNode;
  className?: string;
  from?: "below" | "left" | "right" | "scale";
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const hidden =
    from === "left"
      ? { opacity: 0, x: -14 }
      : from === "right"
        ? { opacity: 0, x: 14 }
        : from === "scale"
          ? { opacity: 0, scale: 0.92, y: 6 }
          : { opacity: 0, y: 10 };
  const visible = { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={reduced ? false : hidden}
      animate={show ? visible : hidden}
      transition={reduced ? { duration: 0 } : { duration: 0.5, ease: EASE.outQuart, delay: show ? delay : 0 }}
    >
      {children}
    </motion.div>
  );
}

/** A number that counts from its previous value to `value`. */
export function Counter({
  value,
  prefix = "",
  className,
  duration = 1.1,
}: {
  value: number;
  prefix?: string;
  className?: string;
  duration?: number;
}) {
  const reduced = useReducedMotion();
  const mv = useMotionValue(value);
  const text = useTransform(mv, (v) => prefix + formatBdt(Math.round(v)));

  useEffect(() => {
    if (reduced) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration, ease: EASE.outQuart });
    return () => controls.stop();
  }, [value, duration, reduced, mv]);

  return <motion.span className={cn("tabular-nums", className)}>{text}</motion.span>;
}

/** Bangladeshi digit grouping: 2,46,040. */
export function formatBdt(n: number) {
  return n.toLocaleString("en-IN");
}

/* ------------------------------------------------------------------ */
/* Window chrome                                                       */
/* ------------------------------------------------------------------ */

type RailItem = "home" | "inbox" | "orders" | "customers" | "payments" | "analytics";

const RAIL: { id: RailItem; icon: LucideIcon; label: string }[] = [
  { id: "home", icon: House, label: "Home" },
  { id: "inbox", icon: Inbox, label: "Inbox" },
  { id: "orders", icon: ShoppingCart, label: "Orders" },
  { id: "customers", icon: Users, label: "Customers" },
  { id: "payments", icon: Wallet, label: "Payments" },
  { id: "analytics", icon: ChartColumn, label: "Analytics" },
];

/**
 * A browser window holding a merchant-app screen: traffic lights, the URL, and
 * the app's icon rail. `compact` drops the rail for the phone-width stage.
 */
export function AppFrame({
  path,
  active,
  compact,
  className,
  children,
}: {
  path: string;
  active: RailItem;
  compact?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_40px_80px_-36px_rgba(10,91,207,0.45),0_12px_28px_-16px_rgba(17,24,39,0.18)] ring-1 ring-[#DDE3EC]",
        className,
      )}
    >
      <div className="flex h-10 shrink-0 items-center gap-3 border-b border-gc-line bg-[#F8FAFC] px-4">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-[11px] rounded-full bg-[#FF5F57]" />
          <span className="size-[11px] rounded-full bg-[#FEBC2E]" />
          <span className="size-[11px] rounded-full bg-[#28C840]" />
        </div>
        <div className="mx-auto flex h-6 items-center rounded-md bg-white px-3 text-[11px] font-medium text-gc-ink-50 ring-1 ring-gc-line">
          app.gridcommerce.com.bd/{path}
        </div>
        <div className="w-[45px]" />
      </div>
      <div className="flex min-h-0 flex-1">
        {!compact && (
          <div className="flex w-[64px] shrink-0 flex-col items-center gap-1 border-r border-gc-line bg-[#FBFCFE] pt-3">
            <Image src="/brand/v2/gridcommerce-mark.png" alt="" width={28} height={28} className="mb-3 size-7 object-contain" />
            {RAIL.map(({ id, icon: Icon, label }) => (
              <div key={id} className="flex flex-col items-center gap-0.5 py-1">
                <span
                  className={cn(
                    "grid size-8 place-items-center rounded-lg",
                    id === active ? "bg-gc-royal text-white" : "text-gc-ink-50",
                  )}
                >
                  <Icon className="size-4" strokeWidth={1.9} />
                </span>
                <span className={cn("text-[9.5px]", id === active ? "font-semibold text-gc-ink" : "text-gc-ink-50")}>
                  {label}
                </span>
              </div>
            ))}
            <span className="mt-auto mb-3 grid size-8 place-items-center text-gc-ink-30">
              <Settings className="size-4" />
            </span>
          </div>
        )}
        <div className="relative min-w-0 flex-1 bg-[#F6F7FB]">{children}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Small UI                                                            */
/* ------------------------------------------------------------------ */

const TONES = {
  success: "bg-[#ECFDF5] text-[#047857]",
  warning: "bg-[#FFFBEB] text-[#B45309]",
  danger: "bg-[#FEF2F2] text-[#B91C1C]",
  royal: "bg-gc-royal-10 text-gc-royal",
  gold: "bg-[#FEF6E4] text-[#A16207]",
  neutral: "bg-[#F1F3F7] text-gc-ink-60",
  ai: "bg-[#F1ECFE] text-[#6D3FD9]",
} as const;

export type Tone = keyof typeof TONES;

export function Chip({ tone = "neutral", children, className }: { tone?: Tone; children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-[3px] text-[11px] font-semibold leading-none",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-[12px] bg-white shadow-[0_1px_2px_rgba(17,24,39,0.05)] ring-1 ring-[#E8EBF0]", className)}>
      {children}
    </div>
  );
}

const AVATAR_TONES = ["bg-[#E7EFFA] text-[#0A5BCF]", "bg-[#FDECEF] text-[#BE185D]", "bg-[#E8F7F0] text-[#047857]", "bg-[#FEF3E2] text-[#B45309]", "bg-[#EEF0FF] text-[#4F46E5]"];

export function Avatar({ name, size = 32, tone = 0 }: { name: string; size?: number; tone?: number }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      className={cn("grid shrink-0 place-items-center rounded-full font-semibold", AVATAR_TONES[tone % AVATAR_TONES.length])}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </span>
  );
}

const CHANNEL_LOGO = {
  messenger: "/integrations/messenger.png",
  whatsapp: "/integrations/whatsapp-business.png",
  instagram: "/integrations/instagram.png",
  facebook: "/integrations/facebook-page.png",
  tiktok: "/integrations/tiktok-shop.png",
  web: "/integrations/website-chat.png",
} as const;

/** `site` is the merchant's own website, drawn as a globe rather than a chat bubble. */
export type Channel = keyof typeof CHANNEL_LOGO | "site";

export function ChannelLogo({ channel, size = 14, className }: { channel: Channel; size?: number; className?: string }) {
  if (channel === "site") {
    return (
      <span
        className={cn("grid shrink-0 place-items-center rounded-full bg-[#10B981] text-white", className)}
        style={{ width: size, height: size }}
      >
        <Globe style={{ width: size * 0.66, height: size * 0.66 }} strokeWidth={2.4} />
      </span>
    );
  }
  return (
    <Image
      src={CHANNEL_LOGO[channel]}
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0 object-contain", className)}
      style={{ width: size, height: size }}
    />
  );
}

/** Three dots that pulse while someone (or GridAI) is typing. */
export function TypingDots({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  return (
    <span className={cn("inline-flex items-center gap-1", className)} aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="size-1.5 rounded-full bg-current"
          animate={reduced ? undefined : { opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </span>
  );
}

/** A soft ring that pulses outward — "this is live". */
export function Ping({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex size-2", className)} aria-hidden>
      <span className="absolute inset-0 animate-ping rounded-full bg-current opacity-60 motion-reduce:hidden" />
      <span className="relative inline-flex size-2 rounded-full bg-current" />
    </span>
  );
}

/** A floating card that sits over the window's edge. */
export function FloatPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[14px] bg-white p-3.5 shadow-[0_22px_44px_-18px_rgba(10,91,207,0.4),0_2px_6px_rgba(17,24,39,0.06)] ring-1 ring-[#E3E8F0]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** What every slide receives from HeroShowcase. */
export type SlideProps = {
  /** How many of the slide's cues have passed; the slide draws itself from it. */
  beat: number;
  /** Phone-width stage: drop side panels and stack. */
  compact: boolean;
  /** The stage sits in the hero's right column: slimmer margins and side panels. */
  narrow: boolean;
};
