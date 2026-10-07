"use client";

import Link from "next/link";
import { ArrowRight, CalendarClock, Check, LayoutTemplate, MessagesSquare, Radar, ShoppingCart, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { FEATURES } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { Panel } from "../../primitives";
import { InboxScene } from "../scenes/InboxScene";
import { RecoveryScene } from "../scenes/RecoveryScene";
import { SocialScene } from "../scenes/SocialScene";
import { StoreScene } from "../scenes/StoreScene";
import { TrackingScene } from "../scenes/TrackingScene";
import { HOME_INNER, IconChip, TwoTone } from "./kit";

type FeatureId = keyof typeof FEATURES;

const PARTS: Record<FeatureId, { icon: LucideIcon; scene: ReactNode }> = {
  inbox: { icon: MessagesSquare, scene: <InboxScene /> },
  store: { icon: LayoutTemplate, scene: <StoreScene /> },
  tracking: { icon: Radar, scene: <TrackingScene /> },
  social: { icon: CalendarClock, scene: <SocialScene /> },
  recovery: { icon: ShoppingCart, scene: <RecoveryScene /> },
};

/**
 * A dedicated feature section: the pitch (eyebrow, title, short body, three
 * points, link) beside the feature's animated product scene. `flip` puts the
 * scene on the left so neighbouring sections alternate.
 */
export function FeatureSection({
  id,
  flip,
  tone = "white",
  chipTone = "royal",
}: {
  id: FeatureId;
  flip?: boolean;
  tone?: "white" | "tint";
  chipTone?: "royal" | "accent";
}) {
  const { L } = useI18n();
  const F = FEATURES[id];
  const { icon, scene } = PARTS[id];

  return (
    <Panel id={id} tone={tone} pattern={null} inner={HOME_INNER}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className={cn("min-w-0", flip && "lg:order-last")}>
          <p className="gc-eyebrow inline-flex items-center gap-2 rounded-full bg-gc-royal-10 px-3 py-1.5 text-gc-eyebrow font-semibold uppercase text-gc-royal">
            <span aria-hidden className="size-1.5 rounded-full bg-gc-royal" />
            {L(F.eyebrow)}
          </p>
          <TwoTone className="mt-5" title={L(F.title)} chip={<IconChip icon={icon} tone={chipTone} tilt={flip ? 6 : -6} />} />
          <p className="mt-5 text-gc-lead text-gc-ink-60">{L(F.body)}</p>
          <ul className="mt-6 space-y-2.5">
            {F.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-gc-body font-medium text-gc-ink">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gc-royal text-white">
                  <Check aria-hidden className="size-3" strokeWidth={3} />
                </span>
                {L(p)}
              </li>
            ))}
          </ul>
          <Link href={F.href} className="mt-7 inline-flex items-center gap-1.5 text-gc-small font-semibold text-gc-royal underline-offset-4 hover:underline">
            {L(F.link)}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
          <p className="mt-3 text-[0.75rem] text-gc-ink-50">{L(F.small)}</p>
        </Reveal>

        <Reveal direction={flip ? "right" : "left"} className="min-w-0">
          {scene}
        </Reveal>
      </div>
    </Panel>
  );
}
