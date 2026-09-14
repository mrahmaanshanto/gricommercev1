"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { useRef, type ElementType, type ReactNode } from "react";
import { DURATION, EASE, staggerParent, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

/** Single element that reveals once when scrolled into view. */
export function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = DURATION.section,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as "div"] ?? motion.div;
  const o = reduced ? offset.none : offset[direction];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x: o.x, y: o.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: reduced ? 0.001 : duration, delay, ease: EASE.outQuart }}
    >
      {children}
    </MotionTag>
  );
}

/** Parent that staggers its Stagger.Item children. */
export function Stagger({
  children,
  className,
  stagger = 0.07,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: ElementType;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as "div"] ?? motion.div;
  return (
    <MotionTag
      className={className}
      variants={staggerParent(reduced ? 0 : stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.section, ease: EASE.outQuart } },
};

Stagger.Item = function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const MotionTag = motion[as as "div"] ?? motion.div;
  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
};

/** Slow ambient float for hero UI cards. Disabled under reduced motion. */
export function Floating({
  children,
  className,
  amplitude = 10,
  duration = 7,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Vertical parallax tied to the element's own scroll progress. */
export function Parallax({
  children,
  className,
  distance = 60,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduced ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

/** Thin brand progress bar pinned to the top of the viewport. */
export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.4 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className={cn(
        "fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gc-royal to-gc-sky",
        className,
      )}
    />
  );
}
