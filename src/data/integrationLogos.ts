/**
 * Third-party marks from the GridCommerce logo pack.
 * Sources and terms: docs/INTEGRATION-LOGO-SOURCES.txt.
 *
 * Every mark remains the trademark of its owner. The pack's terms apply:
 * use them only to identify supported services, never recolour, distort or
 * crop them, and confirm partner approval before publishing. None of these
 * integrations is contracted yet, so they appear only in sample content.
 *
 * `icon` marks are symbols that need their name set beside them; `wordmark`
 * marks already spell the name. `ground: "dark"` marks only exist as
 * white-on-dark artwork.
 */

export type IntegrationLogo = {
  src: string;
  width: number;
  height: number;
  kind: "wordmark" | "icon";
  /** Tailwind height for wordmarks — compact marks need more height to read. */
  height_class?: string;
  ground?: "dark";
};

const icon = (file: string, width: number, height: number): IntegrationLogo => ({
  src: `/integrations/${file}.png`, width, height, kind: "icon",
});
const wordmark = (file: string, width: number, height: number, height_class = "h-7", ground?: "dark"): IntegrationLogo => ({
  src: `/integrations/${file}.png`, width, height, kind: "wordmark", height_class, ground,
});

export const INTEGRATION_LOGOS: Record<string, IntegrationLogo> = {
  /* Channels */
  "Facebook Page": icon("facebook-page", 256, 256),
  Messenger: icon("messenger", 256, 256),
  "WhatsApp Business": icon("whatsapp-business", 256, 256),
  Instagram: icon("instagram", 256, 256),
  "TikTok Shop": icon("tiktok-shop", 256, 256),
  "Website chat": icon("website-chat", 256, 239),

  /* Courier */
  Steadfast: wordmark("steadfast", 480, 99, "h-7"),
  "Pathao Courier": wordmark("pathao", 480, 136, "h-7"),
  RedX: wordmark("redx", 480, 120, "h-6"),
  eCourier: wordmark("ecourier", 480, 116, "h-8"),
  Paperfly: wordmark("paperfly", 480, 113, "h-7"),
  "SA Paribahan": icon("sa-paribahan", 256, 256),
  CarryBee: wordmark("carrybee-dark-background", 480, 162, "h-9", "dark"),

  /* Payments */
  bKash: wordmark("bkash", 256, 162, "h-10"),
  Nagad: wordmark("nagad", 480, 168, "h-9"),
  Rocket: wordmark("rocket", 256, 161, "h-10"),
  Upay: icon("upay", 185, 256),
  SSLCommerz: wordmark("sslcommerz", 448, 86, "h-6"),
  aamarPay: wordmark("aamarpay", 282, 57, "h-6"),
  Visa: wordmark("visa", 480, 156, "h-6"),
  Mastercard: icon("mastercard", 256, 158),
  "Dutch-Bangla Bank": icon("dbbl", 256, 156),
  "Bank transfer": icon("bank-transfer", 256, 242),

  /* Marketing */
  "Meta Ads": wordmark("meta-ads", 480, 96, "h-6"),
  "Google Ads": icon("google-ads", 256, 229),
  "TikTok Ads": icon("tiktok-ads", 256, 256),
  "SMS gateways": icon("sms-gateway", 256, 217),
  Email: icon("email", 256, 191),
  "Google Analytics": icon("google-analytics", 231, 256),
};
