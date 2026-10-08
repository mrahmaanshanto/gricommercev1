"use client";

import Image from "next/image";
import { Plug, ScanEye } from "lucide-react";
import { Reveal } from "@/components/motion";
import { CONNECT } from "@/data/copy/homepage";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { IconChip, TwoTone } from "./kit";

type Logo = { name: string; src?: string; wide?: boolean; tall?: boolean };

/* Two rows — where you sell, chat and track, then couriers and payments; every logo is something the app connects to. */
const ROWS: { logos: Logo[]; seconds: number; reverse?: boolean }[] = [
  {
    seconds: 48,
    logos: [
      { name: "WordPress", src: "/integrations/wordpress.webp", wide: true },
      { name: "Shopify", src: "/integrations/shopify.webp", wide: true },
      { name: "Facebook", src: "/integrations/facebook-page.png" },
      { name: "Messenger", src: "/integrations/messenger.png" },
      { name: "WhatsApp", src: "/integrations/whatsapp-business.png" },
      { name: "Instagram", src: "/integrations/instagram.png" },
      { name: "TikTok", src: "/integrations/tiktok-ads.png" },
      { name: "YouTube", src: "/integrations/youtube.png" },
      { name: "LinkedIn", src: "/integrations/linkedin.png" },
      { name: "X", src: "/integrations/x.png" },
      { name: "Google Business", src: "/integrations/google-business.png" },
      { name: "Meta", src: "/integrations/meta-ads.png", wide: true },
      { name: "Google Analytics", src: "/integrations/google-analytics.png" },
      { name: "Google Ads", src: "/integrations/google-ads.png" },
      { name: "TikTok Events", src: "/integrations/tiktok-ads.png" },
      { name: "Microsoft Clarity", wide: true },
    ],
  },
  {
    seconds: 40,
    reverse: true,
    logos: [
      { name: "Pathao", src: "/integrations/pathao.png", wide: true },
      { name: "Steadfast", src: "/integrations/steadfast.png", wide: true },
      { name: "RedX", src: "/integrations/redx.png", wide: true },
      { name: "Carrybee", src: "/integrations/carrybee.png", wide: true },
      { name: "bKash", src: "/integrations/bkash.png", wide: true, tall: true },
      { name: "Nagad", src: "/integrations/nagad.png", wide: true },
      { name: "SSLCommerz", src: "/integrations/sslcommerz.png", wide: true },
      { name: "Paystation", src: "/integrations/paystation.png", wide: true, tall: true },
      { name: "EPS", src: "/integrations/eps.png", wide: true },
    ],
  },
];

/**
 * "Works with the apps you already use" — a full-width band after the order
 * section: the title and a line of copy, then two rows of logos (sell, chat
 * and track; couriers and payments) running edge to edge in opposite
 * directions. Rows stand still under reduced motion.
 */
export function Integrations() {
  const { L } = useI18n();
  const C = CONNECT.integrations;
  const names = [...new Set(ROWS.flatMap((r) => r.logos.map((l) => l.name)))];

  return (
    <section id="integrations" className="scroll-mt-28 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[20px] bg-white py-12 md:py-16 lg:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-2/3 bg-gradient-to-b from-gc-royal-10/70 to-transparent" />
        <Reveal className="mx-auto max-w-3xl px-5 text-center">
          <TwoTone title={L(C.title)} chip={<IconChip icon={Plug} tone="royal" tilt={-6} />} />
          <p className="mx-auto mt-5 max-w-2xl text-gc-lead text-gc-ink-60">{L(C.body)}</p>
        </Reveal>

        <p className="sr-only">
          {L(C.label)}: {names.join(", ")}
        </p>
        <div
          aria-hidden
          className="mt-10 space-y-1.5 md:mt-14 md:space-y-2.5"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {ROWS.map((row, i) => (
            <div key={i}>
              <div className="flex overflow-hidden py-1.5">
                <div
                  className={cn("gc-marquee flex w-max shrink-0 gap-3 pr-3 md:gap-4 md:pr-4", row.reverse && "gc-marquee-reverse")}
                  style={{ ["--gc-marquee-duration" as string]: `${row.seconds}s` }}
                >
                  {Array.from({ length: row.logos.length < 6 ? 6 : 3 }, () => row.logos).flat().map((l, k) => (
                    <LogoTile key={k} logo={l} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoTile({ logo }: { logo: Logo }) {
  return (
    <span
      title={logo.name}
      className={cn(
        "grid h-14 shrink-0 place-items-center rounded-2xl border border-gc-line bg-white px-4 shadow-[0_6px_16px_-12px_rgba(10,40,100,0.35)] md:h-[72px] md:rounded-[20px]",
        logo.wide ? "w-[128px] md:w-[164px]" : "w-14 md:w-[72px]",
      )}
    >
      {logo.src ? (
        <Image
          src={logo.src}
          alt=""
          width={logo.wide ? 200 : 80}
          height={logo.wide ? 70 : 80}
          className={cn("w-auto object-contain", logo.tall ? "max-h-10 md:max-h-12" : logo.wide ? "max-h-7 md:max-h-8" : "h-8 md:h-9")}
        />
      ) : (
        <span className="flex items-center gap-1.5 text-[0.8125rem] font-semibold leading-tight text-[#0078D4]">
          <ScanEye className="size-5" /> Clarity
        </span>
      )}
    </span>
  );
}
