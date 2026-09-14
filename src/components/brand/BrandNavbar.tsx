"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ChevronDown, Menu } from "lucide-react";
import { MegaMenuPanel } from "@/components/layout/MegaMenu";
import { MobileNav } from "@/components/layout/MobileNav";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { MEGA_MENUS, PRIMARY_NAV } from "@/data/navigation";
import { SITE } from "@/data/site";
import { useI18n } from "@/i18n/provider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { BrandLogo, GcButton } from "./primitives";

type MenuId = (typeof MEGA_MENUS)[number]["id"];

/**
 * H01 — Modules · Business Types · Resources · Pricing, then Log in and one
 * dominant "Book a Demo" action. Set as a floating rounded bar over the canvas.
 * Behaviour — hover intent, Escape, close on route change — mirrors
 * `layout/Navbar`.
 */
export function BrandNavbar() {
  const { t, L } = useI18n();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = useCallback((id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu((current) => {
      if (current !== id) trackEvent("mega_menu_opened", { menu: id });
      return id;
    });
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only-focusable focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-gc-royal focus:px-4 focus:py-2.5 focus:text-white"
      >
        {t.common.skipToContent}
      </a>

      {/* Solid canvas at rest so it joins the page; transparent once scrolled so
          the rounded bar floats over the panels beneath it. */}
      <header
        className={cn(
          "gc-scope sticky top-0 z-50 w-full px-3 pt-3 transition-colors duration-[260ms] sm:px-4 md:px-6",
          scrolled ? "bg-transparent" : "bg-gc-canvas",
        )}
        onMouseLeave={scheduleClose}
      >
        <div
          className={cn(
            "mx-auto flex h-[64px] max-w-[1440px] items-center justify-between gap-4 rounded-full xl:gap-6 pl-5 pr-2.5 transition-[background-color,box-shadow] duration-[260ms] md:h-[72px] md:pl-7 md:pr-3",
            scrolled || openMenu
              ? "bg-white/90 shadow-gc-card ring-1 ring-gc-line/70 backdrop-blur-xl"
              : "bg-white ring-1 ring-gc-line/60",
          )}
        >
          <Link href="/" aria-label={`${SITE.name} home`} className="inline-flex shrink-0 items-center rounded-md">
            <BrandLogo variant="mark" href={null} className="h-10 w-auto sm:hidden lg:block xl:hidden" />
            <BrandLogo href={null} priority className="hidden h-[26px] w-auto sm:block lg:hidden xl:block xl:h-[28px]" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {MEGA_MENUS.map((menu) => {
                const isOpen = openMenu === menu.id;
                return (
                  <li key={menu.id}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onMouseEnter={() => open(menu.id)}
                      onFocus={() => open(menu.id)}
                      onClick={() => (isOpen ? setOpenMenu(null) : open(menu.id))}
                      className={cn(
                        "inline-flex h-10 items-center gap-1 rounded-full px-3 text-[0.9375rem] xl:px-4 font-medium transition-colors duration-[160ms]",
                        isOpen ? "bg-gc-royal-10 text-gc-royal" : "text-gc-ink-70 hover:bg-gc-canvas hover:text-gc-ink",
                      )}
                    >
                      {L(menu.label)}
                      <ChevronDown
                        aria-hidden
                        className={cn(
                          "size-4 transition-transform duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onMouseEnter={scheduleClose}
                    className="inline-flex h-10 items-center rounded-full px-3 text-[0.9375rem] xl:px-4 font-medium text-gc-ink-70 transition-colors duration-[160ms] hover:bg-gc-canvas hover:text-gc-ink"
                  >
                    {L(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-1.5 lg:flex">
            {/* Label only where there is room for it. */}
            <span className="hidden xl:inline-flex">
              <LanguageToggle />
            </span>
            <span className="inline-flex xl:hidden">
              <LanguageToggle compact />
            </span>
            <Link
              href="/login"
              className="inline-flex h-10 items-center rounded-full px-3 text-[0.9375rem] xl:px-4 font-medium text-gc-ink-70 transition-colors duration-[160ms] hover:bg-gc-canvas hover:text-gc-ink"
            >
              {t.common.login}
            </Link>
            <GcButton
              href="/contact?topic=demo"
              size="sm"
              onClick={() => trackEvent("demo_requested", { source: "navbar" })}
            >
              {t.common.bookDemo}
            </GcButton>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <LanguageToggle compact />
            <GcButton
              href="/contact?topic=demo"
              size="sm"
              onClick={() => trackEvent("demo_requested", { source: "navbar_mobile" })}
            >
              {t.common.bookDemo}
            </GcButton>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label={t.nav.openMenu}
              className="grid size-10 place-items-center rounded-full text-gc-ink transition-colors hover:bg-gc-canvas"
            >
              <Menu aria-hidden className="size-6" strokeWidth={1.9} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {openMenu && (
            <div
              className="absolute inset-x-0 top-full hidden px-3 sm:px-4 md:px-6 lg:block"
              onMouseEnter={() => open(openMenu)}
              onMouseLeave={scheduleClose}
            >
              <div className="mx-auto max-w-[1440px] pt-2">
                <MegaMenuPanel
                  menu={MEGA_MENUS.find((m) => m.id === openMenu)!}
                  onNavigate={() => setOpenMenu(null)}
                />
              </div>
            </div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 hidden bg-gc-dark/15 backdrop-blur-[1px] lg:block"
            onMouseEnter={() => setOpenMenu(null)}
          />
        )}
      </AnimatePresence>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        logo={<BrandLogo className="h-[24px]" />}
      />
    </>
  );
}
