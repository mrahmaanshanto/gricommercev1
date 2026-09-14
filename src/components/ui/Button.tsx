"use client";

import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "white";
type Size = "sm" | "md" | "lg";

/**
 * The site's one button. Primary is RoyalBlue (Brand Guidelines p.22); every
 * variant is a full pill with a semibold label. The arrow sits in its own chip
 * so the label stays optically centred. Renders a Link when given `href`.
 */
const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold leading-none select-none " +
  "transition-[background-color,color,box-shadow] duration-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] " +
  "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gc-royal " +
  "disabled:pointer-events-none disabled:opacity-55";

const variants: Record<Variant, string> = {
  primary: "bg-gc-royal text-white shadow-[0_12px_28px_-12px_rgba(10,91,207,0.65)] hover:bg-gc-royal-700",
  secondary: "bg-white text-gc-ink ring-1 ring-inset ring-gc-line hover:text-gc-royal hover:ring-gc-royal/40",
  ghost: "bg-transparent text-gc-ink-70 hover:bg-gc-canvas hover:text-gc-ink",
  onDark: "bg-white/[0.06] text-white ring-1 ring-inset ring-white/30 hover:bg-white/[0.12] hover:ring-white/60",
  white: "bg-white text-gc-royal shadow-[0_12px_28px_-12px_rgba(17,24,39,0.45)] hover:bg-gc-royal-10",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-[0.875rem]",
  md: "h-12 px-6 text-[0.9375rem]",
  lg: "h-14 px-7 text-[1rem]",
};

const arrowChip: Record<Variant, string> = {
  primary: "bg-white/15 text-white",
  secondary: "bg-gc-royal-10 text-gc-royal",
  ghost: "bg-gc-royal-10 text-gc-royal",
  onDark: "bg-white/15 text-white",
  white: "bg-gc-royal text-white",
};

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  loading?: boolean;
  withArrow?: boolean;
  fullWidth?: boolean;
  /** Also fires on the link form — the analytics calls on CTAs depend on it. */
  onClick?: () => void;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className" | "onClick">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    href,
    external,
    loading = false,
    withArrow = false,
    fullWidth = false,
    onClick,
    children,
    className,
    disabled,
    ...rest
  },
  ref,
) {
  const showArrow = withArrow && !loading;
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    showArrow && (size === "sm" ? "pr-1.5" : "pr-2"),
    fullWidth && "w-full",
    className,
  );

  const inner = (
    <>
      {loading && <Loader2 aria-hidden className="size-4 animate-spin" />}
      <span>{children}</span>
      {showArrow && (
        <span
          aria-hidden
          className={cn(
            "grid shrink-0 place-items-center rounded-full transition-transform duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0.5",
            size === "sm" ? "size-7" : size === "md" ? "size-8" : "size-10",
            arrowChip[variant],
          )}
        >
          <ArrowRight className="size-4" strokeWidth={2.2} />
        </span>
      )}
    </>
  );

  if (href && !disabled && !loading) {
    if (external) {
      return (
        <a href={href} onClick={onClick} className={classes} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {inner}
    </button>
  );
});
