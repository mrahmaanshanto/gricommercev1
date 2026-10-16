"use client";

/**
 * Careers at GridCommerce: /careers (open jobs, what you get, how hiring works) and /careers/[slug] (one job and its
 * application form). The jobs mirror Grid Career in the platform's super admin (data/sample/careers.ts); an application
 * goes through services/career.service.ts, which will post it to Grid Career once the backend exists.
 */

import { useMemo, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CircleCheck, Paperclip, X } from "lucide-react";
import { Reveal, Stagger } from "@/components/motion";
import { Eyebrow, GcButton, IconTile, Panel, SectionHead } from "@/components/brand/primitives";
import { Icon } from "@/components/ui/Icon";
import { FormStatus, Input, Select, Textarea } from "@/components/ui/Field";
import { PageHero } from "./PageHero";
import { CAREERS_COPY as C, EMPLOYER, JOBS, JOB_TYPES, jobBySlug, SAMPLE_DATA, type Job, type JobQuestion } from "@/data/sample";
import { submitApplication, type FileRef } from "@/services/career.service";
import { useI18n } from "@/i18n/provider";
import { loc, type Locale } from "@/i18n/types";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const T = {
  jobs: loc("open jobs", "টি খোলা পদ"),
  seeJobs: loc("See open jobs", "খোলা পদ দেখুন"),
  view: loc("View and apply", "দেখুন ও আবেদন করুন"),
  applyBy: loc("Apply by", "আবেদনের শেষ দিন"),
  aMonth: loc("a month", "মাসিক"),
  remote: loc("Remote", "রিমোট"),
  applyNow: loc("Apply now", "এখনই আবেদন করুন"),
  allJobs: loc("All jobs", "সব পদ"),
  aboutJob: loc("About the job", "পদ সম্পর্কে"),
  duties: loc("What you will do", "আপনি যা করবেন"),
  needs: loc("What we look for", "আমরা যা খুঁজছি"),
  aboutUs: loc("About GridCommerce", "গ্রিডকমার্স সম্পর্কে"),
  formTitle: loc("Apply for this job", "এই পদে আবেদন করুন"),
  formBody: loc("Takes a few minutes. No account needed.", "কয়েক মিনিট লাগবে। কোনো অ্যাকাউন্ট লাগবে না।"),
  name: loc("Full name", "পুরো নাম"),
  phone: loc("Mobile number", "মোবাইল নম্বর"),
  phoneHint: loc("We send updates about your application here.", "আবেদনের আপডেট এই নম্বরে পাঠানো হবে।"),
  email: loc("Email", "ইমেইল"),
  city: loc("City or district", "শহর বা জেলা"),
  cv: loc("Your CV", "আপনার সিভি"),
  cvHint: loc("PDF, Word or a photo · up to 5 MB", "পিডিএফ, ওয়ার্ড বা ছবি · সর্বোচ্চ ৫ এমবি"),
  attach: loc("Attach a file", "ফাইল যুক্ত করুন"),
  remove: loc("Remove", "সরান"),
  questions: loc("About you and the job", "আপনার ও পদের বিষয়ে"),
  optional: loc("optional", "ঐচ্ছিক"),
  choose: loc("Choose one", "একটি বেছে নিন"),
  yes: loc("Yes", "হ্যাঁ"),
  no: loc("No", "না"),
  send: loc("Send application", "আবেদন পাঠান"),
  sending: loc("Sending", "পাঠানো হচ্ছে"),
  consent: loc("By applying you agree that GridCommerce keeps your details to hire for this job.", "আবেদন করে আপনি সম্মত হচ্ছেন যে এই পদে নিয়োগের জন্য গ্রিডকমার্স আপনার তথ্য রাখবে।"),
  required: loc("This field is required", "এই ঘরটি পূরণ করতে হবে"),
  badPhone: loc("Enter a mobile number like 01712 345678", "০১৭১২ ৩৪৫৬৭৮-এর মতো মোবাইল নম্বর দিন"),
  badEmail: loc("Enter a valid email address", "সঠিক ইমেইল দিন"),
  badNumber: loc("Enter a number", "একটি সংখ্যা দিন"),
  badFile: loc("Use a PDF, Word file or photo up to 5 MB", "৫ এমবি পর্যন্ত পিডিএফ, ওয়ার্ড ফাইল বা ছবি দিন"),
  fixAbove: loc("Check the fields marked above.", "উপরে চিহ্নিত ঘরগুলো দেখুন।"),
  doneTitle: loc("Application sent", "আবেদন পাঠানো হয়েছে"),
  doneBody: loc(
    "Thank you. The team reads every application. We will send an SMS to {phone} with a link to follow yours.",
    "ধন্যবাদ। টিম প্রতিটি আবেদন পড়ে। আপনার আবেদনের অবস্থা দেখার লিংকসহ {phone} নম্বরে এসএমএস পাঠানো হবে।",
  ),
  ref: loc("Your reference", "আপনার রেফারেন্স"),
  mockNote: loc(
    "This is a frontend build, so nothing was actually sent. The form is wired to the service layer.",
    "এটি শুধু ফ্রন্টএন্ড, তাই আসলে কিছু পাঠানো হয়নি। ফর্মটি সার্ভিস লেয়ারের সাথে যুক্ত।",
  ),
  other: loc("See other jobs", "অন্য পদ দেখুন"),
  errorTitle: loc("Could not send", "পাঠানো যায়নি"),
  errorBody: loc("Something went wrong. Try again.", "কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।"),
  closedTitle: loc("This job has closed", "এই পদের আবেদন বন্ধ হয়েছে"),
  closedBody: loc("Applications ended on {date}. See the jobs that are open now.", "{date} তারিখে আবেদন শেষ হয়েছে। এখন খোলা পদগুলো দেখুন।"),
};

const FILE_MAX = 5 * 1024 * 1024;
const FILE_TYPES = /\.(pdf|docx?|jpe?g|png)$/i;
const SOURCES = ["facebook", "whatsapp", "linkedin", "referral", "other"];

const noop = () => () => {};

/** End of the closing day in Dhaka. */
const closesAtMs = (j: Job) => new Date(j.closesAt + "T23:59:59+06:00").getTime();

function useFormat() {
  const { L, locale } = useI18n();
  const tag = (l: Locale) => (l === "bn" ? "bn-BD" : "en-GB");
  const date = (iso: string) => new Intl.DateTimeFormat(tag(locale), { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Dhaka" }).format(new Date(iso + "T12:00:00+06:00"));
  const num = (n: number) => new Intl.NumberFormat(locale === "bn" ? "bn-BD" : "en-IN").format(n);
  const salary = (j: Job) => (!j.showSalary || !j.salaryFrom ? "" : `৳${num(j.salaryFrom)}${j.salaryTo > j.salaryFrom ? "–" + num(j.salaryTo) : ""} ${L(T.aMonth)}`);
  return { L, locale, date, num, salary };
}

/** Job facts as small pills: place, type, pay, closing date. */
function Facts({ job, className }: { job: Job; className?: string }) {
  const { L, date, salary } = useFormat();
  const facts = [
    { icon: "MapPin", text: job.remote ? L(T.remote) : L(job.place) },
    { icon: "Briefcase", text: L(JOB_TYPES[job.type]) },
    { icon: "Coins", text: salary(job) },
    { icon: "CalendarDays", text: `${L(T.applyBy)} ${date(job.closesAt)}` },
  ].filter((f) => f.text);
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {facts.map((f) => (
        <li key={f.icon} className="inline-flex items-center gap-1.5 rounded-full bg-gc-canvas px-3 py-1.5 text-gc-small font-medium text-gc-ink-70">
          <Icon name={f.icon} className="size-4 text-gc-royal" />
          {f.text}
        </li>
      ))}
    </ul>
  );
}

/* ── /careers ────────────────────────────────────────────────────────── */

export function Careers() {
  const { L, num } = useFormat();
  const teams = useMemo(() => [...new Map(JOBS.map((j) => [j.team.en, j.team])).values()], []);
  const [team, setTeam] = useState("");
  const list = JOBS.filter((j) => !team || j.team.en === team);

  return (
    <>
      <PageHero
        crumbs={[{ label: C.crumb }]}
        eyebrow={C.eyebrow}
        eyebrowIcon="Briefcase"
        title={EMPLOYER.headline}
        body={EMPLOYER.about}
        pattern="bl"
        aside={
          <div className="rounded-[20px] bg-white p-6 shadow-gc-float ring-1 ring-inset ring-gc-line/70 md:p-8">
            <p className="font-gc-display text-gc-h4 font-bold text-gc-ink">{L(C.benefitsTitle)}</p>
            <ul className="mt-6 space-y-3">
              {EMPLOYER.benefits.map((b) => (
                <li key={b.icon} className="flex items-center gap-4 rounded-[16px] bg-gc-canvas p-3 pr-5">
                  <IconTile name={b.icon} size="sm" tone="white" />
                  <span className="text-gc-body font-medium text-gc-ink">{L(b.label)}</span>
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <div className="hero-rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <GcButton href="#jobs" size="lg" withArrow>{L(T.seeJobs)}</GcButton>
          <p className="text-gc-body text-gc-ink-60">
            <b className="font-semibold text-gc-ink">{num(JOBS.length)}</b> {L(T.jobs)} · {L(EMPLOYER.city)}
          </p>
        </div>
      </PageHero>

      <Panel id="jobs" tone="white" pattern="tr" inner="py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead title={L(C.openTitle)} body={L(C.openBody)} />
          {teams.length > 1 && (
            <div role="group" aria-label={L(C.allTeams)} className="flex flex-wrap gap-2">
              {[{ key: "", label: C.allTeams }, ...teams.map((t) => ({ key: t.en, label: t }))].map((t) => (
                <button
                  key={t.key || "all"}
                  type="button"
                  aria-pressed={team === t.key}
                  onClick={() => setTeam(t.key)}
                  className={cn(
                    "h-10 rounded-full px-4 text-gc-small font-semibold transition-colors",
                    team === t.key ? "bg-gc-royal text-white" : "bg-gc-canvas text-gc-ink-70 hover:bg-gc-royal-10 hover:text-gc-royal",
                  )}
                >
                  {L(t.label)}
                </button>
              ))}
            </div>
          )}
        </div>

        {JOBS.length === 0 ? (
          <div className="mt-10 rounded-[20px] bg-gc-canvas p-8 text-center">
            <p className="font-gc-display text-gc-h4 font-bold text-gc-ink">{L(C.none)}</p>
            <p className="mt-2 text-gc-body text-gc-ink-60">{L(C.noneBody)}</p>
          </div>
        ) : (
          <Stagger className="mt-10 space-y-3" stagger={0.06}>
            {list.map((j) => (
              <Stagger.Item key={j.id}>
                <Link
                  href={`/careers/${j.slug}`}
                  className="group/job flex flex-col gap-5 rounded-[20px] bg-gc-canvas p-6 ring-1 ring-inset ring-transparent transition-[background-color,box-shadow] hover:bg-white hover:shadow-gc-float hover:ring-gc-line md:flex-row md:items-center md:p-7"
                >
                  <div className="min-w-0 flex-1">
                    <Eyebrow className="w-fit">{L(j.team)}</Eyebrow>
                    <h3 className="mt-4 font-gc-display text-gc-h3 font-bold text-gc-ink transition-colors group-hover/job:text-gc-royal">{L(j.title)}</h3>
                    <p className="mt-2 max-w-2xl text-gc-body text-gc-ink-60">{L(j.summary)}</p>
                    <Facts job={j} className="mt-5" />
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-[12px] bg-white px-5 py-3 text-[0.9375rem] font-semibold text-gc-royal ring-1 ring-inset ring-gc-line transition-colors group-hover/job:bg-gc-royal group-hover/job:text-white group-hover/job:ring-gc-royal md:self-center">
                    {L(T.view)}
                    <ArrowRight aria-hidden className="size-4" />
                  </span>
                </Link>
              </Stagger.Item>
            ))}
          </Stagger>
        )}
        {SAMPLE_DATA && <p className="mt-6 text-gc-small text-gc-ink-50">{L(C.sampleNote)}</p>}
      </Panel>

      <Panel tone="tint" pattern="bl" inner="py-14 md:py-20">
        <SectionHead title={L(C.howTitle)} />
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
          {C.steps.map((s, i) => (
            <Stagger.Item key={s.icon} className="h-full">
              <div className="flex h-full flex-col rounded-[20px] bg-white p-7 ring-1 ring-inset ring-gc-line/80">
                <div className="flex items-center justify-between">
                  <IconTile name={s.icon} />
                  <span className="font-gc-display text-[2rem] font-bold leading-none text-gc-royal-20">{num(i + 1)}</span>
                </div>
                <p className="mt-6 font-gc-display text-[1.125rem] font-bold text-gc-ink">{L(s.label)}</p>
                <p className="mt-2 text-gc-body text-gc-ink-60">{L(s.detail)}</p>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </Panel>

      <Panel tone="dark" pattern="tr" inner="py-12 md:py-16">
        <Reveal className="flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-gc-display text-gc-h3 font-bold text-white">{L(C.noFit)}</p>
            <p className="mt-3 text-gc-lead text-white/65">{L(C.noFitBody)}</p>
          </div>
          <GcButton href="/contact?topic=general" variant="white" size="lg" withArrow>{L(C.noFitCta)}</GcButton>
        </Reveal>
      </Panel>
    </>
  );
}

/* ── /careers/[slug] ─────────────────────────────────────────────────── */

function List({ items, title }: { items: string[]; title: string }) {
  if (!items.length) return null;
  return (
    <section>
      <h2 className="font-gc-display text-gc-h4 font-bold text-gc-ink">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((x) => (
          <li key={x} className="flex gap-3 text-gc-body text-gc-ink-70">
            <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gc-royal-10 text-gc-royal">
              <Check aria-hidden className="size-3.5" strokeWidth={2.5} />
            </span>
            {x}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CareerJob({ slug }: { slug: string }) {
  const job = jobBySlug(slug)!;
  const { L } = useFormat();

  return (
    <>
      <PageHero
        crumbs={[{ label: C.crumb, href: "/careers" }, { label: job.title }]}
        eyebrow={job.team}
        eyebrowIcon="Briefcase"
        title={job.title}
        body={job.summary}
        pattern="tr"
      >
        <Facts job={job} className="hero-rise mt-8" />
        <div className="hero-rise mt-8 flex flex-wrap gap-3">
          <GcButton href="#apply" size="lg" withArrow>{L(T.applyNow)}</GcButton>
          <GcButton href="/careers#jobs" size="lg" variant="secondary">{L(T.allJobs)}</GcButton>
        </div>
      </PageHero>

      <Panel tone="white" pattern={null} inner="py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:gap-16">
          <article className="min-w-0 space-y-10">
            <section>
              <h2 className="font-gc-display text-gc-h4 font-bold text-gc-ink">{L(T.aboutJob)}</h2>
              <div className="mt-4 space-y-4">
                {L(job.description).map((p) => <p key={p} className="text-gc-body text-gc-ink-70">{p}</p>)}
              </div>
            </section>
            <List title={L(T.duties)} items={L(job.duties)} />
            <List title={L(T.needs)} items={L(job.needs)} />
            <section className="rounded-[20px] bg-gc-canvas p-6 md:p-7">
              <h2 className="font-gc-display text-gc-h4 font-bold text-gc-ink">{L(T.aboutUs)}</h2>
              <p className="mt-3 text-gc-body text-gc-ink-70">{L(EMPLOYER.about)}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {EMPLOYER.benefits.map((b) => (
                  <li key={b.icon} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-gc-small font-medium text-gc-ink-70 ring-1 ring-inset ring-gc-line">
                    <Icon name={b.icon} className="size-4 text-gc-royal" />
                    {L(b.label)}
                  </li>
                ))}
              </ul>
            </section>
            <Link href="/careers#jobs" className="inline-flex items-center gap-2 text-gc-small font-semibold text-gc-royal hover:underline">
              <ArrowLeft aria-hidden className="size-4" />
              {L(T.allJobs)}
            </Link>
          </article>

          <aside id="apply" className="scroll-mt-28 lg:sticky lg:top-28 lg:self-start">
            <ApplyForm job={job} />
          </aside>
        </div>
      </Panel>
    </>
  );
}

/* ── the application form ────────────────────────────────────────────── */

type Errors = Record<string, string>;

function FilePick({ id, label, hint, optional, error, value, onChange }: { id: string; label: string; hint: string; optional?: string; error?: string; value: File | null; onChange: (f: File | null) => void }) {
  const { L } = useI18n();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="w-full">
      <p id={`${id}-l`} className="mb-2 flex items-baseline gap-2 text-gc-small font-semibold text-gc-ink">
        {label}
        {optional && <span className="text-[0.75rem] font-medium text-gc-ink-50">{optional}</span>}
      </p>
      <input ref={ref} id={id} type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="sr-only" aria-labelledby={`${id}-l`} onChange={(e) => onChange(e.target.files?.[0] || null)} />
      {value ? (
        <div className={cn("flex items-center gap-3 rounded-full border bg-white py-2 pl-5 pr-2", error ? "border-gc-danger" : "border-gc-line")}>
          <Paperclip aria-hidden className="size-4 shrink-0 text-gc-royal" />
          <span className="min-w-0 flex-1 truncate text-[0.9375rem] text-gc-ink">{value.name}</span>
          <span className="shrink-0 text-gc-small text-gc-ink-50">{(value.size / 1024 / 1024).toFixed(1)} MB</span>
          <button type="button" aria-label={`${L(T.remove)} ${value.name}`} onClick={() => { onChange(null); if (ref.current) ref.current.value = ""; }} className="grid size-9 shrink-0 place-items-center rounded-full text-gc-ink-50 hover:bg-gc-canvas hover:text-gc-ink">
            <X aria-hidden className="size-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => ref.current?.click()}
          aria-describedby={error ? `${id}-error` : `${id}-hint`}
          className={cn(
            "flex h-12 w-full items-center justify-center gap-2 rounded-full border border-dashed bg-gc-canvas text-[0.9375rem] font-semibold text-gc-royal transition-colors hover:bg-gc-royal-10",
            error ? "border-gc-danger" : "border-gc-royal/40",
          )}
        >
          <Icon name="Upload" className="size-4" />
          {L(T.attach)}
        </button>
      )}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-gc-small font-medium text-gc-danger">{error}</p>
      ) : (
        <p id={`${id}-hint`} className="mt-2 text-gc-small text-gc-ink-50">{hint}</p>
      )}
    </div>
  );
}

function YesNo({ q, value, error, onChange }: { q: JobQuestion; value: string; error?: string; onChange: (v: string) => void }) {
  const { L } = useI18n();
  return (
    <fieldset className="w-full">
      <legend className="mb-2 flex items-baseline gap-2 text-gc-small font-semibold text-gc-ink">
        {L(q.label)}
        {!q.required && <span className="text-[0.75rem] font-medium text-gc-ink-50">{L(T.optional)}</span>}
      </legend>
      <div className="flex gap-2">
        {(["Yes", "No"] as const).map((v) => (
          <label key={v} className={cn(
            "flex h-12 flex-1 cursor-pointer items-center justify-center rounded-full border text-[0.9375rem] font-semibold transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-gc-royal/12",
            value === v ? "border-gc-royal bg-gc-royal-10 text-gc-royal" : error ? "border-gc-danger text-gc-ink-70" : "border-gc-line text-gc-ink-70 hover:border-gc-royal/40",
          )}>
            <input type="radio" name={q.id} value={v} checked={value === v} onChange={() => onChange(v)} className="sr-only" />
            {L(v === "Yes" ? T.yes : T.no)}
          </label>
        ))}
      </div>
      {error && <p role="alert" className="mt-2 text-gc-small font-medium text-gc-danger">{error}</p>}
    </fieldset>
  );
}

function ApplyForm({ job }: { job: Job }) {
  const { L, date } = useFormat();
  // the page is built ahead of time: whether the job has closed is read in the browser (open in the prebuilt HTML)
  const closed = useSyncExternalStore(noop, () => Date.now() > closesAtMs(job), () => false);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [cv, setCv] = useState<File | null>(null);
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [receipt, setReceipt] = useState<{ code: string; phone: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const fileProblem = (f: File | null) => (f && (!FILE_TYPES.test(f.name) || f.size > FILE_MAX) ? L(T.badFile) : "");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();
    const phone = get("phone").replace(/[\s-]/g, "");
    const next: Errors = {};
    if (get("name").length < 3) next.name = L(T.required);
    if (!phone) next.phone = L(T.required);
    else if (!/^(?:\+?88)?01[3-9]\d{8}$/.test(phone)) next.phone = L(T.badPhone);
    if (get("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) next.email = L(T.badEmail);
    if (!get("city")) next.city = L(T.required);
    if (!cv) next.cv = L(T.required);
    else if (fileProblem(cv)) next.cv = fileProblem(cv);
    job.questions.forEach((q) => {
      if (q.type === "file") {
        const f = files[q.id] || null;
        if (q.required && !f) next[q.id] = L(T.required);
        else if (fileProblem(f)) next[q.id] = fileProblem(f);
        return;
      }
      const v = (q.type === "yesno" || q.type === "select" ? answers[q.id] : get(q.id)) || "";
      if (q.required && !v.trim()) next[q.id] = L(T.required);
      else if (q.type === "number" && v && !/^\d+(\.\d+)?$/.test(v)) next[q.id] = L(T.badNumber);
    });
    setErrors(next);
    if (Object.keys(next).length) {
      const first = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true'], [role='alert']");
      first?.closest("div, fieldset")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const ref = (f: File): FileRef => ({ name: f.name, size: f.size });
    const all: Record<string, string | FileRef> = {};
    job.questions.forEach((q) => {
      if (q.type === "file") { const f = files[q.id]; if (f) all[q.id] = ref(f); return; }
      const v = q.type === "yesno" || q.type === "select" ? answers[q.id] : get(q.id);
      if (v) all[q.id] = v;
    });
    // the job link's ?src= (shared on Facebook, WhatsApp …) travels with the application
    const src = new URLSearchParams(window.location.search).get("src") || "";
    const source = SOURCES.includes(src) ? src : "careers page";
    setState("sending");
    const res = await submitApplication({ jobId: job.id, name: get("name"), phone, email: get("email") || undefined, city: get("city"), cv: ref(cv!), answers: all, source });
    if (res.ok) {
      setReceipt({ code: res.data.code, phone: get("phone") });
      setState("done");
      trackEvent("job_application_submitted", { job: job.id, source });
      formRef.current?.closest("aside")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else setState("error");
  }

  const card = "rounded-[20px] bg-white p-6 shadow-gc-float ring-1 ring-inset ring-gc-line/70 md:p-8";

  if (closed) {
    return (
      <div className={card}>
        <p className="font-gc-display text-gc-h4 font-bold text-gc-ink">{L(T.closedTitle)}</p>
        <p className="mt-3 text-gc-body text-gc-ink-60">{L(T.closedBody).replace("{date}", date(job.closesAt))}</p>
        <GcButton href="/careers#jobs" className="mt-6" fullWidth withArrow>{L(T.allJobs)}</GcButton>
      </div>
    );
  }

  if (state === "done" && receipt) {
    return (
      <div className={card} role="status">
        <span className="grid size-12 place-items-center rounded-full bg-gc-success-10 text-gc-success">
          <CircleCheck aria-hidden className="size-6" />
        </span>
        <p className="mt-5 font-gc-display text-gc-h4 font-bold text-gc-ink">{L(T.doneTitle)}</p>
        <p className="mt-3 text-gc-body text-gc-ink-60">{L(T.doneBody).replace("{phone}", receipt.phone)}</p>
        <div className="mt-5 flex items-center justify-between gap-3 rounded-[16px] bg-gc-canvas px-5 py-4">
          <span className="text-gc-small font-medium text-gc-ink-60">{L(T.ref)}</span>
          <span className="font-mono text-[1.125rem] font-semibold tracking-[0.2em] text-gc-ink">{receipt.code}</span>
        </div>
        <p className="mt-4 text-gc-small text-gc-ink-50">{L(T.mockNote)}</p>
        <GcButton href="/careers#jobs" variant="secondary" className="mt-6" fullWidth>{L(T.other)}</GcButton>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className={card} aria-labelledby="apply-title">
      <p id="apply-title" className="font-gc-display text-gc-h4 font-bold text-gc-ink">{L(T.formTitle)}</p>
      <p className="mt-1 text-gc-small text-gc-ink-60">{L(T.formBody)}</p>

      <div className="mt-6 space-y-5">
        <Input label={L(T.name)} name="name" autoComplete="name" error={errors.name} />
        <Input label={L(T.phone)} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="01XXX XXXXXX" hint={L(T.phoneHint)} error={errors.phone} />
        <Input label={L(T.email)} name="email" type="email" autoComplete="email" optional={L(T.optional)} error={errors.email} />
        <Input label={L(T.city)} name="city" autoComplete="address-level2" error={errors.city} />
        <FilePick id="cv" label={L(T.cv)} hint={L(T.cvHint)} error={errors.cv} value={cv} onChange={(f) => { setCv(f); setErrors((x) => ({ ...x, cv: "" })); }} />

        {job.questions.length > 0 && (
          <div className="space-y-5 border-t border-gc-line pt-5">
            <p className="text-gc-small font-semibold uppercase tracking-wide text-gc-ink-50">{L(T.questions)}</p>
            {job.questions.map((q) => {
              const opt = q.required ? undefined : L(T.optional);
              if (q.type === "yesno") return <YesNo key={q.id} q={q} value={answers[q.id] || ""} error={errors[q.id]} onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))} />;
              if (q.type === "select") return (
                <Select key={q.id} label={L(q.label)} name={q.id} optional={opt} error={errors[q.id]} value={answers[q.id] || ""} onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}>
                  <option value="">{L(T.choose)}</option>
                  {(q.options || []).map((o) => <option key={o.en} value={o.en}>{L(o)}</option>)}
                </Select>
              );
              if (q.type === "textarea") return <Textarea key={q.id} label={L(q.label)} name={q.id} rows={4} optional={opt} error={errors[q.id]} />;
              if (q.type === "file") return <FilePick key={q.id} id={q.id} label={L(q.label)} hint={L(T.cvHint)} optional={opt} error={errors[q.id]} value={files[q.id] || null} onChange={(f) => setFiles((x) => ({ ...x, [q.id]: f }))} />;
              return <Input key={q.id} label={L(q.label)} name={q.id} type="text" inputMode={q.type === "number" ? "numeric" : undefined} optional={opt} error={errors[q.id]} />;
            })}
          </div>
        )}

        {Object.values(errors).some(Boolean) && <FormStatus state="error" title={L(T.errorTitle)} body={L(T.fixAbove)} />}
        {state === "error" && <FormStatus state="error" title={L(T.errorTitle)} body={L(T.errorBody)} />}

        <GcButton type="submit" size="lg" fullWidth loading={state === "sending"}>
          {state === "sending" ? L(T.sending) : L(T.send)}
        </GcButton>
        <p className="text-gc-small text-gc-ink-50">{L(T.consent)}</p>
      </div>
    </form>
  );
}
