import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { LanguageProvider } from "@/i18n/provider";
import { BrandNavbar } from "@/components/brand/BrandNavbar";
import { BrandFooter } from "@/components/brand/BrandFooter";
import { SampleBadge } from "@/components/marketing/SampleBadge";
import { SITE } from "@/data/site";
import { JsonLd, organizationSchema, softwareApplicationSchema } from "@/lib/seo";

/**
 * Montserrat is the secondary typeface in the GridCommerce Brand Guidelines
 * and carries all body copy; headings ask for Century Gothic first and fall
 * back to it. next/font downloads it at build time and serves it from our own
 * origin, so there is no third-party CDN round trip on mobile networks.
 */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
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
    <html lang="en" className={`${montserrat.variable} ${notoBengali.variable}`}>
      <body className="gc-scope bg-gc-canvas antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={softwareApplicationSchema()} />
        <LanguageProvider>
          <BrandNavbar />
          <main id="main">{children}</main>
          <BrandFooter />
          <SampleBadge />
        </LanguageProvider>
      </body>
    </html>
  );
}
