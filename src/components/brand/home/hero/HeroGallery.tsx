"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Boxes,
  CalendarDays,
  ChartLine,
  CircleCheck,
  Globe,
  MessageCircle,
  MessagesSquare,
  Radar,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Undo2,
  Wallet,
} from "lucide-react";
import { HERO_WIDGETS } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Avatar, ChannelLogo } from "./shared";
import { useNum } from "../sections/kit";

/**
 * The hero's curved gallery: one small widget per online tool, on a turning
 * band. Each card's tilt and size come from its distance to the centre, so the
 * band reads as the inside of a cylinder. It drifts while on screen, stops
 * under the pointer and in a hidden tab, and stands still under reduced
 * motion. Positions are written straight to the cards' style each frame, so
 * React does not re-render while it moves. Decorative: every module is also
 * listed, as links, further down the page.
 */

const SPEED = 60; // px per second

export function HeroGallery() {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [ready, setReady] = useState(false);
  const cards = useCards();

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let width = wrap.clientWidth;
    let offset = 0;
    let last = performance.now();
    let raf = 0;
    let hover = false;
    let visible = true;
    const slot = () => (width < 640 ? 150 : width < 1024 ? 180 : 205);

    const place = () => {
      const s = slot();
      const total = s * cards.length;
      const half = width / 2;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        let x = i * s - offset;
        x = ((((x + total / 2) % total) + total) % total) - total / 2; // wrap around the band
        const t = Math.max(-1.25, Math.min(1.25, x / (half + s * 0.5)));
        const rotate = -t * 50;
        const scale = 1 - Math.abs(t) * 0.3;
        const lift = Math.abs(t) * Math.abs(t) * 38;
        el.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${-lift}px, 0) rotateY(${rotate}deg) scale(${scale})`;
        el.style.opacity = String(Math.max(0, 1 - Math.max(0, Math.abs(t) - 0.95) * 3.5));
        el.style.zIndex = String(100 - Math.round(Math.abs(t) * 50));
      });
    };

    const ro = new ResizeObserver(() => {
      width = wrap.clientWidth;
      place();
    });
    ro.observe(wrap);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(wrap);
    const enter = () => (hover = true);
    const leave = () => (hover = false);
    wrap.addEventListener("pointerenter", enter);
    wrap.addEventListener("pointerleave", leave);

    place();
     
    setReady(true);

    if (!reduced) {
      const tick = (now: number) => {
        const dt = Math.min(now - last, 100);
        last = now;
        if (!hover && visible && document.visibilityState === "visible") {
          offset += (SPEED * dt) / 1000;
          place();
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      wrap.removeEventListener("pointerenter", enter);
      wrap.removeEventListener("pointerleave", leave);
    };
  }, [reduced, cards.length]);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className={cn("relative h-[200px] w-full transition-opacity duration-500 sm:h-[220px] lg:h-[240px]", ready ? "opacity-100" : "opacity-0")}
      style={{ perspective: "1100px" }}
    >
      {cards.map((card, i) => (
        <div
          key={card.key}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className="absolute left-1/2 top-1/2 will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          {card.node}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The widgets                                                         */
/* ------------------------------------------------------------------ */

function Widget({
  title,
  icon: Icon,
  tone = "white",
  className,
  children,
}: {
  title: string;
  icon: typeof Boxes;
  tone?: "white" | "ink" | "glass";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex w-[132px] flex-col rounded-[18px] p-3 shadow-[0_18px_34px_-18px_rgba(10,60,150,0.45)] ring-1 ring-black/[0.04] sm:w-[156px] lg:w-[170px] lg:p-3.5",
        tone === "white" && "bg-white text-gc-ink",
        tone === "ink" && "bg-gc-ink text-white ring-1 ring-white/10",
        tone === "glass" && "bg-gradient-to-br from-gc-royal to-gc-sky text-white",
        className,
      )}
    >
      <p className={cn("flex items-center gap-1.5 text-[10px] font-semibold leading-tight sm:text-[11px]", tone === "white" ? "text-gc-ink-60" : "text-white/80")}>
        <Icon className="size-3.5 shrink-0" />
        <span className="line-clamp-1">{title}</span>
      </p>
      <div className="mt-2 flex-1">{children}</div>
    </div>
  );
}

function useCards() {
  const { L } = useI18n();
  const n = useNum();
  const W = HERO_WIDGETS;
  const ok = (label: string) => (
    <span className="inline-flex items-center gap-1 text-[9.5px] font-semibold text-gc-success">
      <CircleCheck className="size-3" /> {label}
    </span>
  );

  return [
    {
      key: "inventory",
      node: (
        <Widget title={L(W.inventory)} icon={Boxes}>
          <p className="text-[11px] font-semibold leading-tight">Anker 20W Charger</p>
          <p className="mt-1 text-[22px] font-bold leading-tight tabular-nums">
            {n(10)} <span className="text-[10px] font-medium text-gc-ink-60">{L(W.available)}</span>
          </p>
          <div className="mt-1.5 h-1.5 rounded-full bg-gc-canvas">
            <div className="h-full w-[42%] rounded-full bg-gc-accent" />
          </div>
          <p className="mt-1.5 text-[10px] font-semibold text-gc-warning">{L(W.lowStock)}</p>
        </Widget>
      ),
    },
    {
      key: "courier",
      node: (
        <Widget title={L(W.courier)} icon={Truck} tone="ink">
          <p className="text-[10px] text-white/70">{L(W.readyOrders)}</p>
          <p className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-gc-royal px-2 py-1.5 text-[10.5px] font-semibold">
            <Send className="size-3" /> {L(W.bookCourier)}
          </p>
          <p className="mt-2 flex items-center gap-1 text-[9.5px] font-semibold text-gc-sky">
            <CircleCheck className="size-3" /> {L(W.booked)}
          </p>
        </Widget>
      ),
    },
    {
      key: "inbox",
      node: (
        <Widget title={L(W.inbox)} icon={MessagesSquare}>
          <div className="flex -space-x-1">
            {(["messenger", "whatsapp", "instagram", "tiktok"] as const).map((c) => (
              <span key={c} className="grid size-5 place-items-center rounded-full bg-white ring-2 ring-white">
                <ChannelLogo channel={c} size={14} />
              </span>
            ))}
          </div>
          <p className="mt-2 rounded-xl rounded-tl-sm bg-gc-canvas px-2 py-1.5 text-[10px] leading-snug">{L(W.inboxMsg)}</p>
          <p className="ml-auto mt-1.5 w-fit rounded-xl rounded-tr-sm bg-gc-royal px-2 py-1.5 text-[10px] leading-snug text-white">{L(W.inboxReply)}</p>
        </Widget>
      ),
    },
    {
      key: "analytics",
      node: (
        <Widget title={L(W.analytics)} icon={ChartLine}>
          <p className="text-[10px] text-gc-ink-60">
            {L(W.deliveredRevenue)} · {L(W.thisWeek)}
          </p>
          <p className="text-[18px] font-bold leading-tight tabular-nums">{n(184240, { money: true })}</p>
          <svg viewBox="0 0 120 40" className="mt-1.5 h-10 w-full">
            <defs>
              <linearGradient id="hg-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#18A7F5" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#18A7F5" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 32 C 15 28, 22 30, 34 24 S 55 18, 66 20 S 88 10, 100 12 S 114 6, 120 4 L 120 40 L 0 40 Z" fill="url(#hg-area)" />
            <path d="M0 32 C 15 28, 22 30, 34 24 S 55 18, 66 20 S 88 10, 100 12 S 114 6, 120 4" fill="none" stroke="#0A5BCF" strokeWidth="2" />
          </svg>
        </Widget>
      ),
    },
    {
      key: "tracking",
      node: (
        <Widget title={L(W.tracking)} icon={Radar}>
          <p className="text-[10px] font-semibold">
            {L(W.purchaseEvent)} · {n(2450, { money: true })}
          </p>
          <ul className="mt-1.5 space-y-1 text-[10px]">
            {["Meta CAPI", "TikTok Events", "Google Ads"].map((p) => (
              <li key={p} className="flex items-center justify-between gap-1">
                <span className="whitespace-nowrap text-gc-ink-70">{p}</span>
                {ok(L(W.sent))}
              </li>
            ))}
          </ul>
          <p className="mt-1.5 text-[9px] leading-snug text-gc-ink-50">{L(W.hashed)}</p>
        </Widget>
      ),
    },
    {
      key: "social",
      node: (
        <Widget title={L(W.social)} icon={Send} tone="glass">
          <div className="flex gap-1">
            {(["facebook", "instagram"] as const).map((c) => (
              <span key={c} className="grid size-5 place-items-center rounded-full bg-white">
                <ChannelLogo channel={c} size={13} />
              </span>
            ))}
          </div>
          <p className="mt-1.5 line-clamp-3 text-[10px] leading-snug text-white/95">{L(W.postText)}</p>
          <p className="mt-1.5 w-fit rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-semibold">{L(W.scheduledFor)}</p>
        </Widget>
      ),
    },
    {
      key: "calendar",
      node: (
        <Widget title={L(W.calendar)} icon={CalendarDays}>
          <p className="text-[10px] text-gc-ink-60">{L(W.week)}</p>
          <div className="mt-1.5 grid grid-cols-7 gap-0.5 text-center text-[8.5px] font-semibold text-gc-ink-50">
            {W.days.map((d, i) => (
              <span key={i}>{L(d)}</span>
            ))}
            {[2, 1, 0, 2, 1, 3, 0].map((c, i) => (
              <span key={i} className={cn("flex h-7 flex-col items-center justify-center gap-0.5 rounded-md", i === 5 ? "bg-gc-royal-10" : "bg-gc-canvas")}>
                {Array.from({ length: c }).map((_, j) => (
                  <span key={j} className={cn("h-1 w-3 rounded-full", ["bg-gc-royal", "bg-gc-sky", "bg-gc-accent"][j])} />
                ))}
              </span>
            ))}
          </div>
          <p className="mt-1.5 text-[10px] font-semibold text-gc-royal">{L(W.postsPlanned)}</p>
        </Widget>
      ),
    },
    {
      key: "comments",
      node: (
        <Widget title={L(W.comments)} icon={MessageCircle}>
          <div className="flex items-start gap-1.5">
            <Avatar name="Rafi Ahmed" size={20} tone={2} />
            <p className="rounded-xl rounded-tl-sm bg-gc-canvas px-2 py-1 text-[10px] leading-snug">{L(W.commentText)}</p>
          </div>
          <p className="ml-auto mt-1.5 w-fit rounded-xl rounded-tr-sm bg-gc-royal-10 px-2 py-1 text-[10px] leading-snug text-gc-royal">{L(W.commentReply)}</p>
          <p className="mt-1.5">{ok(L(W.replied))}</p>
        </Widget>
      ),
    },
    {
      key: "reviews",
      node: (
        <Widget title={L(W.reviews)} icon={Star}>
          <div className="flex gap-0.5 text-[#F5A524]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3 fill-current" />
            ))}
          </div>
          <p className="mt-1 text-[10px] leading-snug">“{L(W.reviewText)}”</p>
          <p className="mt-1.5 flex items-center gap-1 rounded-lg bg-gc-royal-10 px-2 py-1 text-[9.5px] font-semibold text-gc-royal">
            <Sparkles className="size-3" /> {L(W.aiReply)}
          </p>
        </Widget>
      ),
    },
    {
      key: "landing",
      node: (
        <Widget title={L(W.landing)} icon={Globe}>
          <div className="overflow-hidden rounded-lg ring-1 ring-gc-line">
            <div className="h-9 bg-gradient-to-br from-gc-royal-20 to-gc-sky/30" />
            <div className="space-y-1 p-1.5">
              <span className="block h-1.5 w-4/5 rounded-full bg-gc-ink/80" />
              <span className="block h-1 w-3/5 rounded-full bg-gc-line" />
              <span className="mt-1 block w-fit rounded bg-gc-accent px-1.5 py-0.5 text-[8.5px] font-bold text-white">{L(W.orderNow)}</span>
            </div>
          </div>
          <p className="mt-1.5">{ok(L(W.liveLink))}</p>
        </Widget>
      ),
    },
    {
      key: "returns",
      node: (
        <Widget title={L(W.returns)} icon={Undo2}>
          <p className="text-[11px] font-semibold leading-tight">{L(W.returnItem)}</p>
          <p className="mt-1.5 flex items-center gap-1 text-[10px] text-gc-ink-70">
            <CircleCheck className="size-3 text-gc-success" /> {L(W.sellAgain)}
          </p>
          <p className="mt-2 w-fit rounded-full bg-gc-success-10 px-2 py-0.5 text-[10px] font-semibold text-gc-success">{L(W.backToStock)}</p>
        </Widget>
      ),
    },
    {
      key: "gridai",
      node: (
        <Widget title={L(W.gridAi)} icon={Sparkles} tone="ink">
          <p className="ml-auto w-fit rounded-xl rounded-tr-sm bg-white/10 px-2 py-1.5 text-[10px] leading-snug">{L(W.askAi)}</p>
          <p className="mt-2 flex items-center gap-1.5 rounded-lg bg-gc-royal px-2 py-1.5 text-[10px] font-semibold">
            <Truck className="size-3" /> {L(W.needsOk)}
          </p>
        </Widget>
      ),
    },
    {
      key: "warranty",
      node: (
        <Widget title={L(W.warranty)} icon={ShieldCheck}>
          <p className="text-[10.5px] font-semibold leading-snug">{L(W.warrantyItem)}</p>
          <div className="mt-1.5 h-1.5 rounded-full bg-gc-canvas">
            <div className="h-full w-[66%] rounded-full bg-gc-royal" />
          </div>
          <p className="mt-1 text-[10px] text-gc-ink-60">{L(W.warrantyLeft)}</p>
          <p className="mt-1.5 text-[10px] font-semibold text-gc-sky">{L(W.claimOpen)}</p>
        </Widget>
      ),
    },
    {
      key: "finance",
      node: (
        <Widget title={L(W.finance)} icon={Wallet}>
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 36 36" className="size-12 -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#E7EFFA" strokeWidth="6" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="var(--color-gc-royal)" strokeWidth="6" strokeDasharray={`${0.735 * 88} 88`} />
            </svg>
            <div className="text-[10px] leading-tight">
              <p className="text-gc-ink-60">{L(W.received)}</p>
              <p className="text-[13px] font-bold tabular-nums">{n(79600, { money: true })}</p>
              <p className="mt-1 text-gc-ink-60">{L(W.codAwaiting)}</p>
              <p className="text-[12px] font-bold tabular-nums text-gc-warning">{n(28640, { money: true })}</p>
            </div>
          </div>
        </Widget>
      ),
    },
  ];
}
