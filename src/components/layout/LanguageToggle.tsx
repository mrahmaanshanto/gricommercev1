"use client";

import { Languages } from "lucide-react";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { locale, toggleLocale, t } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={
        locale === "en" ? "Switch to Bangla" : "Switch to English"
      }
      className={cn(
        "inline-flex h-10 items-center gap-1.5 rounded-[12px] font-medium text-gc-ink-70",
        "transition-colors duration-[160ms] hover:bg-gc-canvas hover:text-gc-ink",
        compact ? "w-11 justify-center" : "px-3 text-[0.875rem]",
      )}
    >
      <Languages aria-hidden className="size-[18px]" strokeWidth={1.8} />
      {!compact && <span>{t.common.switchTo}</span>}
    </button>
  );
}
