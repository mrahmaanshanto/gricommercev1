"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { FOOTER } from "@/data/copy/footer";
import { APP_LINKS, MOBILE_APPS } from "@/data/copy/homepage";
import { FOOTER_COLUMNS } from "@/data/navigation";
import { CONTACT, SITE } from "@/data/site";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";

/*
 * The footer: one dark (#1a1a1a) panel. The app block (title, store badges
 * around a QR code, a fan of phone-app screens), then one row of Modules,
 * Explore, contact and help; "GridCommerce" set large in a tone just above
 * the background; a thin strip of payment methods; copyright and legal.
 */

type Logo = { name: string; src: string };
const L_ = (name: string, file: string): Logo => ({ name, src: `/integrations/${file}` });

const PAY: Logo[] = [
  L_("bKash", "bkash.png"),
  L_("Nagad", "nagad.png"),
  L_("Rocket", "rocket.png"),
  L_("SSLCommerz", "sslcommerz.png"),
  L_("EPS", "eps.png"),
  L_("Paystation", "paystation.png"),
  L_("Visa", "visa.png"),
  L_("Mastercard", "mastercard.png"),
  L_("Bank transfer", "bank-transfer.png"),
];


/* Phone-app screens for the fan, centre one first. */
const PHONES = [
  { src: "/modules/analytics/phone.webp" },
  { src: "/modules/orders/phone.webp" },
  { src: "/modules/omnichannel/phone.webp" },
  { src: "/modules/inventory/phone.webp" },
  { src: "/modules/courier/phone.webp" },
];

export function Footer({ className }: { className?: string } = {}) {
  const { L } = useI18n();
  const year = new Date().getFullYear();
  const modules = FOOTER_COLUMNS.find((c) => c.titleKey === "product")?.links ?? [];

  return (
    <footer className={cn("relative mx-auto max-w-[1440px] overflow-hidden rounded-t-[20px] bg-[#1a1a1a] text-white", className)}>
      <AppBlock />

      <div className="container-page relative pt-14">
        {/* One row: modules, explore, contact, help */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-8">
          <FooterLinks title={L(FOOTER.modules)} links={modules.map((l) => ({ label: L(l.label), href: l.href }))} />
          <FooterLinks title={L(FOOTER.explore)} links={FOOTER.exploreLinks.map((l) => ({ label: L(l.label), href: l.href }))} />

          <div className="col-span-2 md:col-span-1">
            <p className="mb-4 font-gc-display text-[1rem] font-bold">{L(FOOTER.contact)}</p>
            <ul className="space-y-2 text-gc-small">
              {(
                [
                  [FOOTER.sales, CONTACT.salesEmail],
                  [FOOTER.support, CONTACT.supportEmail],
                  [FOOTER.partners, CONTACT.partnershipEmail],
                ] as const
              ).map(([label, email]) => (
                <li key={email}>
                  <span className="block text-[0.75rem] text-white/45">{L(label)}</span>
                  <a href={`mailto:${email}`} className="text-white/85 transition-colors hover:text-gc-sky">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterLinks title={L(FOOTER.help)} links={FOOTER.helpLinks.map((l) => ({ label: L(l.label), href: l.href }))} />
        </div>

        {/* GridCommerce, as wide as the first two columns, in a tone just above the background */}
        <p aria-hidden className="mt-12 select-none md:mt-14">
          <svg viewBox="0 0 1000 150" className="block h-auto w-full font-gc-display md:w-[calc(50%-1rem)]">
            <text x="500" y="122" textAnchor="middle" textLength="1000" lengthAdjust="spacingAndGlyphs" fill="#2c2c2c" fontSize="150" fontWeight="800" letterSpacing="-4">
              GridCommerce
            </text>
          </svg>
        </p>

        {/* Payment methods, one thin strip */}
        <div className="mt-8 border-y border-white/10 py-6">
          <LogoStrip title={L(FOOTER.payWith)} logos={PAY} />
        </div>

        {/* Copyright and legal */}
        <div className="flex flex-col items-center gap-3 pb-8 pt-6 text-gc-small text-white/45 md:flex-row md:justify-between">
          <p className="text-center md:text-left">
            Copyright &copy; {year} {SITE.legalEntity}. {L(FOOTER.rights)}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {FOOTER.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {L(l.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <p className="mb-4 font-gc-display text-[1rem] font-bold">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-gc-small text-white/60 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function LogoStrip({ title, logos }: { title: string; logos: Logo[] }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <p className="shrink-0 text-[0.75rem] font-semibold text-white/55">{title}</p>
      <ul className="flex flex-wrap gap-1.5 xl:flex-nowrap">
        {logos.map((l) => (
          <li key={l.name} title={l.name} className="grid h-8 min-w-12 place-items-center rounded-[6px] bg-white px-1.5">
            <Image src={l.src} alt={l.name} width={80} height={32} className="max-h-5 w-auto max-w-[64px] object-contain" />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** "Your shop, in your pocket." — store badges around a QR code, then a fan of phone-app screens. */
function AppBlock() {
  const { L } = useI18n();
  const reduced = useReducedMotion();
  // Fan order left → right: outer, inner, centre, inner, outer.
  const fan = [PHONES[3], PHONES[1], PHONES[0], PHONES[2], PHONES[4]];
  const pose = [
    "w-[58px] translate-y-8 sm:w-[130px] sm:translate-y-14",
    "w-[70px] translate-y-4 sm:w-[150px] sm:translate-y-7",
    "w-[92px] z-10 sm:w-[180px]",
    "w-[70px] translate-y-4 sm:w-[150px] sm:translate-y-7",
    "w-[58px] translate-y-8 sm:w-[130px] sm:translate-y-14",
  ];

  return (
    <section aria-labelledby="footer-app" className="relative overflow-hidden pt-14 text-center md:pt-16">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gc-royal/25 blur-[120px]" />
      <div className="container-page relative">
        <h2 id="footer-app" className="text-gc-h2 text-white">
          {L(FOOTER.app.title)}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gc-body text-white/60">{L(FOOTER.app.body)}</p>

        <div className="mt-8 flex items-center justify-center gap-3 sm:gap-5">
          <a href={APP_LINKS.appStore} aria-label={L(MOBILE_APPS.appStore)} className="rounded-[10px] ring-1 ring-white/25 transition-transform hover:-translate-y-0.5">
            <Image src="/apps/app-store.webp" alt={L(MOBILE_APPS.appStore)} width={360} height={108} className="h-11 w-auto sm:h-12" />
          </a>
          <span className="grid size-[84px] shrink-0 place-items-center rounded-[14px] bg-white p-2 ring-2 ring-gc-accent/50 sm:size-24" title={L(FOOTER.app.scan)}>
            <Image src="/apps/qr-site.svg" alt={L(FOOTER.app.scan)} width={80} height={80} className="size-full" unoptimized />
          </span>
          <a href={APP_LINKS.googlePlay} aria-label={L(MOBILE_APPS.googlePlay)} className="rounded-[10px] ring-1 ring-white/25 transition-transform hover:-translate-y-0.5">
            <Image src="/apps/google-play.webp" alt={L(MOBILE_APPS.googlePlay)} width={360} height={108} className="h-11 w-auto sm:h-12" />
          </a>
        </div>
      </div>

      {/* The fan, fading into the footer */}
      <div
        aria-hidden
        className="relative mt-10 flex h-[140px] items-start justify-center gap-1.5 sm:h-[230px] sm:gap-4"
        style={{
          maskImage: "linear-gradient(to bottom, black 40%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent)",
        }}
      >
        {fan.map((ph, i) => (
          <motion.div
            key={ph.src}
            className={cn("shrink-0", pose[i])}
            initial={reduced ? false : { opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: EASE.outQuart, delay: Math.abs(i - 2) * 0.12 }}
          >
            <div className={cn("rounded-[14px] bg-black p-[3px] ring-1 ring-white/15 sm:rounded-[28px] sm:p-[5px]", i !== 2 && "opacity-80")}>
              <div className="overflow-hidden rounded-[11px] bg-white sm:rounded-[23px]">
                <Image src={ph.src} alt="" width={1170} height={2532} sizes="180px" className="h-auto w-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
