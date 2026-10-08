import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { LanguageProvider } from "@/i18n/provider";
import { BrandNavbar } from "@/components/brand/BrandNavbar";
import { BrandFooter } from "@/components/brand/BrandFooter";
import { SampleBadge } from "@/components/marketing/SampleBadge";
import { HeroPreview } from "@/components/dev/HeroPreview";
import { SITE } from "@/data/site";
import { JsonLd, organizationSchema, softwareApplicationSchema } from "@/lib/seo";

/**
 * Outfit carries headings and body; DM Serif Display italic is the one-word
 * accent in display headlines (pair 4 from the design preview, chosen Oct
 * 2026). next/font downloads both at build time and serves them from our own
 * origin, so there is no third-party CDN round trip on mobile networks. Roles
 * are mapped in globals.css (`--gc-font-*`).
 */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-dm-serif",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

const notoBengali = localFont({
  src: "./fonts/noto-sans-bengali.woff2",
  variable: "--font-noto-bengali",
  weight: "100 900",
  display: "swap",
  preload: false, // fetched only when the visitor switches to Bangla
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Sales, stock, dues and profit. Connected.`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  icons: { icon: "/brand/v2/icon.png", apple: "/brand/v2/apple-icon.png" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#F2F4F8",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSerif.variable} ${notoBengali.variable}`}>
      <body className="gc-scope bg-gc-canvas antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={softwareApplicationSchema()} />
        <LanguageProvider>
          <BrandNavbar />
          <main id="main">{children}</main>
          <BrandFooter />
          <SampleBadge />
          <HeroPreview />
        </LanguageProvider>
      </body>
    </html>
  );
}
