"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, X } from "lucide-react";
import { BrandLogo } from "@/components/brand/primitives";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MEGA_MENUS, PRIMARY_NAV } from "@/data/navigation";
import { useI18n } from "@/i18n/provider";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function MobileNav({
  open,
  onClose,
  logo,
}: {
  open: boolean;
  onClose: () => void;
  /** Overrides the default lockup. */
  logo?: ReactNode;
}) {
  const { t, L } = useI18n();
  const [expanded, setExpanded] = useState<string | null>("products");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={t.common.menu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="gc-scope fixed inset-0 z-[70] flex flex-col bg-white lg:hidden"
        >
          <div className="flex h-[76px] shrink-0 items-center justify-between px-5">
            {logo ?? <BrandLogo className="h-[24px]" />}
            <button
              type="button"
              onClick={onClose}
              aria-label={t.nav.closeMenu}
              className="grid size-11 place-items-center rounded-[12px] bg-gc-canvas text-gc-ink transition-colors hover:bg-gc-royal-10 hover:text-gc-royal"
            >
              <X aria-hidden className="size-5" strokeWidth={2} />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-8">
            <nav aria-label="Mobile primary">
              <ul className="divide-y divide-gc-line">
                {MEGA_MENUS.map((menu) => {
                  const isOpen = expanded === menu.id;
                  return (
                    <li key={menu.id} className="py-1">
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : menu.id)}
                        aria-expanded={isOpen}
                        className="flex min-h-[54px] w-full items-center justify-between gap-3 text-left font-gc-display text-[1.125rem] font-bold text-gc-ink"
                      >
                        {L(menu.label)}
                        <ChevronDown
                          aria-hidden
                          className={cn(
                            "size-5 text-gc-ink-50 transition-transform duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                            isOpen && "rotate-180 text-gc-royal",
                          )}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: EASE.outQuart }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-5 pb-4 pt-1">
                              {menu.columns.map((col, ci) => (
                                <div key={ci}>
                                  <p className="gc-eyebrow mb-2 text-gc-eyebrow font-semibold uppercase text-gc-ink-50">
                                    {L(col.title)}
                                  </p>
                                  <ul>
                                    {col.links.map((link) => (
                                      <li key={link.href}>
                                        <Link
                                          href={link.href}
                                          onClick={onClose}
                                          className="flex min-h-[46px] items-center gap-3 rounded-xl px-1 py-2 text-[0.9375rem] font-semibold text-gc-ink-70 active:bg-gc-canvas"
                                        >
                                          {link.icon && (
                                            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gc-sky-10 text-gc-royal">
                                              <Icon name={link.icon} className="size-[17px]" />
                                            </span>
                                          )}
                                          {L(link.label)}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}

                {PRIMARY_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex min-h-[54px] items-center font-gc-display text-[1.125rem] font-bold text-gc-ink"
                    >
                      {L(item.label)}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    href="/login"
                    onClick={onClose}
                    className="flex min-h-[54px] items-center font-gc-display text-[1.125rem] font-bold text-gc-ink"
                  >
                    {t.common.login}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mt-7 grid gap-3">
              <Button href="/contact?topic=demo" size="lg" fullWidth withArrow onClick={onClose}>
                {t.common.bookDemo}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
