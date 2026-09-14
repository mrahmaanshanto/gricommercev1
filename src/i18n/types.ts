export type Locale = "en" | "bn";

/**
 * Marketing copy lives beside its structure in `src/data/*` as Localized
 * values. UI chrome (nav labels, button text, form errors) lives in the
 * dictionaries in `src/i18n/dictionaries`. Both resolve through the same
 * LanguageProvider.
 */
export type Localized<T = string> = { en: T; bn: T };

export function loc<T>(en: T, bn: T): Localized<T> {
  return { en, bn };
}
