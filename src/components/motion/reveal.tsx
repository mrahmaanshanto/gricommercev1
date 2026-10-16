import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/*
 * Scroll reveals without JavaScript. The element is in the server HTML at full opacity; where the browser supports
 * scroll-driven animations (`animation-timeline: view()`), it fades and slides in as it enters the viewport (rules
 * `.gc-reveal` in globals.css). Elsewhere, and with reduced motion, it simply shows. These used to be Motion
 * components rendered at opacity 0 until hydration, which kept every section blank until the JavaScript had run.
 */

type Direction = "up" | "down" | "left" | "right" | "none";

/** Single element that reveals as it is scrolled into view. `delay` (seconds) starts it a little later in the scroll. */
export function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  direction?: Direction;
  delay?: number;
  /** Kept for callers; the reveal follows the scroll, not a clock. */
  duration?: number;
  className?: string;
}) {
  const style = delay ? ({ "--gc-rd": `${Math.min(30, Math.round(delay * 60))}%` } as CSSProperties) : undefined;
  return (
    <Tag className={cn("gc-reveal", direction !== "up" && `gc-reveal-${direction}`, className)} style={style}>
      {children}
    </Tag>
  );
}

/** Parent whose Stagger.Item children reveal one after another as they enter the viewport. */
export function Stagger({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** Kept for callers; the step between items is set in CSS. */
  stagger?: number;
  delay?: number;
  as?: ElementType;
}) {
  return <Tag className={cn("gc-stagger", className)}>{children}</Tag>;
}

Stagger.Item = function StaggerItem({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return <Tag className={cn("gc-reveal", className)}>{children}</Tag>;
};
