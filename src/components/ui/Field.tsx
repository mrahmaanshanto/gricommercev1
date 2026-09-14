"use client";

import { useId, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { AlertCircle, CircleCheck } from "lucide-react";
import { cn } from "@/lib/cn";

/* Pill-shaped controls, as in the brand's own app mockup (Brand Guidelines p.45). */
const controlBase =
  "w-full border bg-white px-5 text-[0.9375rem] text-gc-ink placeholder:text-gc-ink-30 " +
  "transition-[border-color,box-shadow,background-color] duration-[160ms] " +
  "focus:outline-none focus:border-gc-royal focus:ring-4 focus:ring-gc-royal/12 " +
  "disabled:bg-gc-canvas disabled:text-gc-ink-50";

const darkControl =
  "border-white/15 bg-white/[0.06] text-white placeholder:text-white/35 focus:border-gc-sky focus:ring-gc-sky/20";

function Wrapper({
  id,
  label,
  hint,
  error,
  optional,
  tone = "light",
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: string;
  tone?: "light" | "dark";
  children: ReactNode;
}) {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className={cn(
          "mb-2 flex items-baseline gap-2 text-gc-small font-semibold",
          tone === "dark" ? "text-white/85" : "text-gc-ink",
        )}
      >
        {label}
        {optional && (
          <span className={cn("text-[0.75rem] font-medium", tone === "dark" ? "text-white/45" : "text-gc-ink-50")}>
            {optional}
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className={cn(
            "mt-2 flex items-center gap-1.5 text-gc-small font-medium",
            tone === "dark" ? "text-gc-danger-light" : "text-gc-danger",
          )}
        >
          <AlertCircle aria-hidden className="size-4 shrink-0" />
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className={cn("mt-2 text-gc-small", tone === "dark" ? "text-white/50" : "text-gc-ink-50")}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}

type BaseProps = { label: string; hint?: string; error?: string; optional?: string; tone?: "light" | "dark" };

const errorControl = "border-gc-danger focus:border-gc-danger focus:ring-gc-danger/12";

export function Input({
  label, hint, error, optional, tone = "light", className, ...rest
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <Wrapper id={id} label={label} hint={hint} error={error} optional={optional} tone={tone}>
      <input
        id={id}
        aria-invalid={!!error || undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(
          controlBase,
          "h-12 rounded-full",
          error ? errorControl : "border-gc-line",
          tone === "dark" && darkControl,
          className,
        )}
        {...rest}
      />
    </Wrapper>
  );
}

export function Textarea({
  label, hint, error, optional, tone = "light", className, rows = 5, ...rest
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = useId();
  return (
    <Wrapper id={id} label={label} hint={hint} error={error} optional={optional} tone={tone}>
      <textarea
        id={id}
        rows={rows}
        aria-invalid={!!error || undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(
          controlBase,
          "resize-y rounded-[20px] py-3.5 leading-relaxed",
          error ? errorControl : "border-gc-line",
          tone === "dark" && darkControl,
          className,
        )}
        {...rest}
      />
    </Wrapper>
  );
}

export function Select({
  label, hint, error, optional, tone = "light", className, children, ...rest
}: BaseProps & SelectHTMLAttributes<HTMLSelectElement>) {
  const id = useId();
  return (
    <Wrapper id={id} label={label} hint={hint} error={error} optional={optional} tone={tone}>
      <select
        id={id}
        aria-invalid={!!error || undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(
          controlBase,
          "h-12 appearance-none rounded-full bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236B7280%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_1.25rem_center] bg-no-repeat pr-12",
          error ? errorControl : "border-gc-line",
          className,
        )}
        {...rest}
      >
        {children}
      </select>
    </Wrapper>
  );
}

export function FormStatus({
  state,
  title,
  body,
  tone = "light",
}: {
  state: "success" | "error";
  title: string;
  body: string;
  tone?: "light" | "dark";
}) {
  const isSuccess = state === "success";
  const dark = tone === "dark";
  return (
    <div
      role="status"
      className={cn(
        "flex gap-3 rounded-[20px] p-4 ring-1 ring-inset",
        isSuccess
          ? dark ? "bg-gc-success/15 ring-gc-success-light/25" : "bg-gc-success-10 ring-gc-success/15"
          : dark ? "bg-gc-danger/15 ring-gc-danger-light/25" : "bg-gc-danger-10 ring-gc-danger/15",
      )}
    >
      {isSuccess ? (
        <CircleCheck aria-hidden className={cn("mt-0.5 size-5 shrink-0", dark ? "text-gc-success-light" : "text-gc-success")} />
      ) : (
        <AlertCircle aria-hidden className={cn("mt-0.5 size-5 shrink-0", dark ? "text-gc-danger-light" : "text-gc-danger")} />
      )}
      <div>
        <p className={cn("text-gc-small font-semibold", dark ? "text-white" : "text-gc-ink")}>{title}</p>
        <p className={cn("mt-0.5 text-gc-small", dark ? "text-white/65" : "text-gc-ink-60")}>{body}</p>
      </div>
    </div>
  );
}
