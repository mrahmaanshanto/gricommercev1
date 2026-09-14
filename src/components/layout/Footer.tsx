"use client";

import Link from "next/link";
import { useCallback, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { BrandLogo } from "@/components/brand/primitives";
import { Button } from "@/components/ui/Button";
import { FormStatus, Input } from "@/components/ui/Field";
import { FOOTER_COLUMNS } from "@/data/navigation";
import { CONTACT, SITE, isPending } from "@/data/site";
import { useFinePointer } from "@/hooks/useMediaQuery";
import { useI18n } from "@/i18n/provider";
import { subscribeNewsletter } from "@/services/lead.service";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ */
/* Ambient background: faint grid + slow brand-blue glows + cursor glow */
/* ------------------------------------------------------------------ */

function FooterAmbience() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const pointerFine = useFinePointer();

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 60, damping: 22, mass: 0.9 });
  const sy = useSpring(my, { stiffness: 60, damping: 22, mass: 0.9 });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set(((e.clientX - r.left) / r.width) * 100);
      my.set(((e.clientY - r.top) / r.height) * 100);
    },
    [mx, my],
  );

  const glow = useMotionTemplate`radial-gradient(440px circle at ${sx}% ${sy}%, rgba(24,167,245,0.16), transparent 62%)`;
  const glowEnabled = pointerFine && !reduced;

  return (
    <div
      ref={ref}
      aria-hidden
      onMouseMove={glowEnabled ? onMove : undefined}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.55] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)]" />

      <motion.div
        className="absolute -left-24 top-8 size-[26rem] rounded-full bg-gc-royal/30 blur-[110px]"
        animate={reduced ? undefined : { x: [0, 40, 0], y: [0, 26, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 bottom-0 size-[22rem] rounded-full bg-gc-sky/15 blur-[110px]"
        animate={reduced ? undefined : { x: [0, -34, 0], y: [0, -22, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ background: glow, opacity: glowEnabled ? 1 : 0 }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */

function NewsletterForm() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t.forms.invalidEmail);
      return;
    }
    setError(undefined);
    setState("loading");
    const res = await subscribeNewsletter({ email });
    if (res.ok) {
      trackEvent("newsletter_submitted", { source: "footer" });
      setState("success");
      setEmail("");
    } else {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <FormStatus
        tone="dark"
        state="success"
        title={t.forms.successTitle}
        body={t.footer.newsletterBody}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <Input
        tone="dark"
        type="email"
        label={t.forms.email}
        placeholder="you@business.com.bd"
        value={email}
        error={error}
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" variant="onDark" size="md" loading={state === "loading"} fullWidth>
        {t.footer.newsletterCta}
      </Button>
      {state === "error" && (
        <FormStatus tone="dark" state="error" title={t.forms.errorTitle} body={t.forms.errorBody} />
      )}
    </form>
  );
}

export function Footer({
  logo,
  className,
}: {
  /** Overrides the default reverse lockup. */
  logo?: ReactNode;
  className?: string;
} = {}) {
  const { t, L } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative isolate mx-auto max-w-[1440px] overflow-hidden rounded-t-[28px] bg-gc-dark text-white md:rounded-t-[40px]",
        className,
      )}
    >
      <FooterAmbience />

      <div className="container-page relative pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)]">
          {/* Brand + newsletter */}
          <div className="max-w-sm">
            {logo ?? <BrandLogo tone="dark" className="h-[30px]" />}
            <p className="mt-5 text-gc-small text-white/60">{SITE.description}</p>

            <div className="mt-8 rounded-[24px] bg-white/[0.04] p-5 ring-1 ring-inset ring-white/10">
              <p className="font-gc-display text-[1rem] font-bold text-white">{t.footer.newsletterTitle}</p>
              <p className="mb-4 mt-1 text-gc-small text-white/55">{t.footer.newsletterBody}</p>
              <NewsletterForm />
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {FOOTER_COLUMNS.map((col) => (
              <nav key={col.titleKey} aria-label={t.footer[col.titleKey]}>
                <p className="mb-4 font-gc-display text-[1rem] font-bold text-white">
                  {t.footer[col.titleKey]}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group/fl inline-flex text-gc-small text-white/60 transition-colors duration-[160ms] hover:text-white"
                      >
                        <span className="bg-gradient-to-r from-gc-sky to-gc-sky bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/fl:bg-[length:100%_1px]">
                          {L(link.label)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Contact */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-5">
              <p className="mb-3 font-gc-display text-[1rem] font-bold text-white">{t.footer.contact}</p>
              <ContactBlock />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-gc-display text-[1.375rem] font-bold tracking-tight text-white">{SITE.name}</p>
            <p className="gc-eyebrow mt-2 text-gc-eyebrow font-semibold uppercase text-gc-sky">{SITE.taglineDisplay}</p>
          </div>
          <div className="text-gc-small text-white/45 md:text-right">
            <p>
              &copy; {year} {SITE.legalEntity}. {t.footer.rights}
            </p>
            <p className="mt-1">
              {SITE.domain} &middot; {t.footer.builtFor}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactBlock() {
  const { t } = useI18n();
  const items = [
    { label: "Sales", value: CONTACT.salesEmail },
    { label: "Support", value: CONTACT.supportEmail },
    { label: "Phone", value: CONTACT.phone },
  ];

  return (
    <ul className="flex flex-wrap gap-x-10 gap-y-3">
      {items.map((item) => (
        <li key={item.label} className="text-gc-small">
          <span className="mr-2 text-white/40">{item.label}</span>
          {isPending(item.value) ? (
            <span className="rounded-full bg-white/[0.08] px-2.5 py-0.5 text-[0.75rem] font-semibold text-white/50 ring-1 ring-inset ring-white/12">
              {t.common.toBeConfirmed}
            </span>
          ) : (
            <span className="text-white/75">{item.value}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
