"use client";

import { HERO, HERO_VARIANTS as V } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { HERO_STAGGER, heroDelay } from "@/lib/motion";
import { GcButton } from "../../../primitives";

/** Book a Demo, and optionally the free trial beside it. */
export function HeroActions({ trial = true, center, className, dark }: { trial?: boolean; center?: boolean; className?: string; dark?: boolean }) {
  const { t, L } = useI18n();
  return (
    <div className={cn("hero-rise flex flex-col gap-3 sm:flex-row sm:items-center", center && "justify-center", className)} style={heroDelay(HERO_STAGGER.actions)}>
      <GcButton
        href="/contact?topic=demo"
        size="lg"
        withArrow
        variant={dark ? "white" : "primary"}
        className="w-full sm:w-auto"
        onClick={() => trackEvent("demo_requested", { source: "hero" })}
      >
        {t.common.bookDemo}
      </GcButton>
      {trial && (
        <GcButton
          href="/signup"
          size="lg"
          variant={dark ? "onDark" : "secondary"}
          className="w-full sm:w-auto"
          onClick={() => trackEvent("start_free_clicked", { source: "hero" })}
        >
          {L(V.trial)}
        </GcButton>
      )}
    </div>
  );
}

/** The hero's body copy. */
export function HeroBody({ className }: { className?: string }) {
  const { L } = useI18n();
  return (
    <p className={cn("hero-settle text-gc-lead text-gc-ink-60", className)} style={heroDelay(HERO_STAGGER.lead)}>
      {L(HERO.body)}
    </p>
  );
}

/** A soft white sticker card. */
export function Sticker({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl bg-white p-3 shadow-[0_20px_44px_-22px_rgba(10,60,150,0.55)] ring-1 ring-black/[0.05]", className)}>{children}</div>;
}
