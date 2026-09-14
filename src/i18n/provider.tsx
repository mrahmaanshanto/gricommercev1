"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { en, type Dictionary } from "./dictionaries/en";
import { bn } from "./dictionaries/bn";
import { localeStore } from "./localeStore";
import type { Locale, Localized } from "./types";
import { trackEvent } from "@/lib/analytics";

const DICTIONARIES: Record<Locale, Dictionary> = { en, bn };

type I18nValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
  /** Resolve a `Localized<T>` value from a data file. */
  L: <T>(value: Localized<T>) => T;
  isBangla: boolean;
};

const I18nContext = createContext<I18nValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    localeStore.subscribe,
    localeStore.getSnapshot,
    localeStore.getServerSnapshot,
  );

  // Writing to the document is exactly what an effect is for: pushing React
  // state out to an external system.
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    localeStore.set(next);
    trackEvent("language_switched", { locale: next });
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale(locale === "en" ? "bn" : "en"),
      t: DICTIONARIES[locale],
      L: <T,>(v: Localized<T>) => v[locale],
      isBangla: locale === "bn",
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider>");
  return ctx;
}

/** Shorthand when a component only needs to resolve Localized data. */
export function useL() {
  return useI18n().L;
}
