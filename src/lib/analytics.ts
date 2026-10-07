/**
 * Frontend analytics abstraction.
 *
 * FRONTEND ONLY. No provider is wired up and no tracking IDs exist.
 * When GA4 / Meta / TikTok / GridCommerce tracking are added, implement
 * them inside `dispatch()`. No call site should need to change.
 */

export type AnalyticsEvent =
  | "start_free_clicked"
  | "demo_requested"
  | "pricing_viewed"
  | "pricing_plan_selected"
  | "whatsapp_clicked"
  | "theme_previewed"
  | "migration_requested"
  | "signup_step_completed"
  | "signup_completed"
  | "login_submitted"
  | "contact_submitted"
  | "newsletter_submitted"
  | "language_switched"
  | "mega_menu_opened"
  | "feature_tab_changed"
  | "hero_tour_tab"
  | "help_search_performed"
  | "blog_article_opened";

type Payload = Record<string, string | number | boolean | undefined>;

const isDebug =
  typeof window !== "undefined" && process.env.NODE_ENV === "development";

function dispatch(event: AnalyticsEvent, payload?: Payload) {
  // TODO(backend): forward to GA4 / Meta CAPI bridge / GridCommerce collector.
  if (isDebug) console.info(`[analytics] ${event}`, payload ?? {});
}

export function trackEvent(event: AnalyticsEvent, payload?: Payload) {
  try {
    dispatch(event, payload);
  } catch {
    /* analytics must never break the UI */
  }
}
