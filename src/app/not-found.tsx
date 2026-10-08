import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BrandLogo, PatternCorner } from "@/components/brand/primitives";

export default function NotFound() {
  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[20px] bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-18rem] size-[44rem] -translate-x-1/2 rounded-full bg-gc-sky-20 blur-[130px]" />
        </div>
        <PatternCorner position="tr" />
        <PatternCorner position="bl" />

        <div className="container-page relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
          <BrandLogo variant="mark" href={null} className="h-14 w-auto" />
          <p className="gc-eyebrow mt-8 text-gc-eyebrow font-semibold uppercase text-gc-royal">404</p>
          <h1 className="mt-4 max-w-xl text-gc-h1 text-gc-ink">This page isn&rsquo;t here.</h1>
          <p className="mt-5 max-w-md text-gc-lead text-gc-ink-60">
            The link may be old, or the address may have a typo. Everything else is
            still where you left it.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg" withArrow>
              Back to home
            </Button>
            <Button href="/help" size="lg" variant="secondary">
              Visit the help centre
            </Button>
          </div>
          <nav aria-label="Popular pages" className="mt-12">
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {[
                ["Pricing", "/pricing"],
                ["Features", "/features"],
                ["Migration", "/migration"],
                ["Contact", "/contact"],
                ["Platform status", "/status"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex rounded-full bg-gc-canvas px-4 py-2 text-gc-small font-semibold text-gc-ink-70 transition-colors hover:bg-gc-royal-10 hover:text-gc-royal"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
