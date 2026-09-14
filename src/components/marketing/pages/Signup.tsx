"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";
import { BrandLogo, PatternCorner } from "@/components/brand/primitives";
import { Button } from "@/components/ui/Button";
import { FormStatus, Input, Select } from "@/components/ui/Field";
import { checkSubdomain, createWorkspace, type BusinessType, type SignupDraft } from "@/services/signup.service";
import { SITE } from "@/data/site";
import { useI18n } from "@/i18n/provider";
import { loc, type Localized } from "@/i18n/types";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const COPY = {
  title: loc("Start free", "ফ্রি শুরু করুন"),
  body: loc("Three steps, then your workspace is ready.", "তিনটি ধাপ, তারপর আপনার ওয়ার্কস্পেস তৈরি।"),
  step: loc("Step", "ধাপ"),
  of: loc("of", "এর মধ্যে"),
  back: loc("Back", "পেছনে"),
  next: loc("Continue", "এগিয়ে যান"),
  create: loc("Create workspace", "ওয়ার্কস্পেস তৈরি করুন"),
  creating: loc("Preparing your workspace", "ওয়ার্কস্পেস তৈরি হচ্ছে"),
  // Step 1
  s1: loc("About your business", "আপনার ব্যবসা সম্পর্কে"),
  businessName: loc("Business name", "ব্যবসার নাম"),
  ownerName: loc("Your name", "আপনার নাম"),
  businessType: loc("How do you sell today?", "এখন কীভাবে বিক্রি করেন?"),
  // Step 2
  s2: loc("How we reach you", "আপনার সাথে যোগাযোগ"),
  phone: loc("Phone", "ফোন"),
  email: loc("Email", "ইমেইল"),
  language: loc("Preferred language", "পছন্দের ভাষা"),
  // Step 3
  s3: loc("Your store address", "আপনার স্টোরের ঠিকানা"),
  storeName: loc("Store name", "স্টোরের নাম"),
  subdomain: loc("Store address", "স্টোর অ্যাড্রেস"),
  subdomainHint: loc("Letters and numbers only.", "শুধু অক্ষর আর সংখ্যা।"),
  checking: loc("Checking availability", "পাওয়া যাবে কি না দেখা হচ্ছে"),
  available: loc("Available", "পাওয়া যাবে"),
  taken: loc("Already taken", "এটি নেওয়া হয়ে গেছে"),
  category: loc("What do you sell?", "কী বিক্রি করেন?"),
  // Result
  doneTitle: loc("Frontend build — nothing was created", "শুধু ফ্রন্টএন্ড — কিছুই তৈরি হয়নি"),
  doneBody: loc(
    "No merchant, workspace or store exists. This flow demonstrates the steps and is wired to the service layer.",
    "কোনো মার্চেন্ট, ওয়ার্কস্পেস বা স্টোর তৈরি হয়নি। এই ধাপগুলো শুধু দেখানোর জন্য, সার্ভিস লেয়ারের সাথে যুক্ত।",
  ),
  required: loc("This field is required", "এই ঘরটি পূরণ করতে হবে"),
};

const TYPES: { value: BusinessType; label: Localized }[] = [
  { value: "online", label: loc("Online only", "শুধু অনলাইন") },
  { value: "retail", label: loc("A shop or counter", "দোকান বা কাউন্টার") },
  { value: "wholesale", label: loc("Wholesale", "পাইকারি") },
  { value: "mixed", label: loc("A mix of these", "এগুলোর মিশ্রণ") },
];

const CATEGORIES: Localized[] = [
  loc("Clothing and fashion", "পোশাক ও ফ্যাশন"),
  loc("Electronics", "ইলেকট্রনিকস"),
  loc("Beauty and cosmetics", "বিউটি ও কসমেটিকস"),
  loc("Home and living", "হোম ও লিভিং"),
  loc("Food and grocery", "খাবার ও মুদি"),
  loc("Something else", "অন্য কিছু"),
];

const TOTAL = 3;

export function Signup() {
  const { L } = useI18n();
  const [step, setStep] = useState(1);
  const [draft, setDraft] = useState<Partial<SignupDraft>>({ businessType: "online", preferredLanguage: "en" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sub, setSub] = useState<{ state: "idle" | "checking" | "ok" | "taken"; value: string }>({ state: "idle", value: "" });
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  const set = (k: keyof SignupDraft, v: string) => setDraft((d) => ({ ...d, [k]: v }));

  function requireFields(keys: (keyof SignupDraft)[]) {
    const next: Record<string, string> = {};
    for (const k of keys) if (!String(draft[k] ?? "").trim()) next[k] = L(COPY.required);
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubdomainChange(value: string) {
    const clean = value.toLowerCase().replace(/[^a-z0-9-]/g, "");
    set("subdomain", clean);
    setSub({ state: clean.length >= 3 ? "checking" : "idle", value: clean });
    if (clean.length < 3) return;

    const res = await checkSubdomain(clean);
    // A slower earlier request must not overwrite a newer value's result.
    setSub((cur) => (cur.value !== clean ? cur : { state: res.ok && res.data.available ? "ok" : "taken", value: clean }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (step === 1 && !requireFields(["businessName", "ownerName"])) return;
    if (step === 2 && !requireFields(["phone", "email"])) return;
    if (step < TOTAL) { setStep(step + 1); return; }
    if (!requireFields(["storeName", "subdomain", "category"])) return;

    setState("sending");
    await createWorkspace(draft as SignupDraft);
    trackEvent("signup_completed", { businessType: draft.businessType });
    setState("done");
  }

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[28px] bg-white md:rounded-[40px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-20rem] size-[46rem] -translate-x-1/2 rounded-full bg-gc-sky-20 blur-[130px]" />
        </div>
        <PatternCorner position="tl" />
        <PatternCorner position="br" />

        <div className="container-page relative py-12 md:py-20">
          <div className="mx-auto max-w-lg">
            <div className="flex flex-col items-center text-center">
              <BrandLogo variant="mark" className="h-12 w-auto" />
              <h1 className="mt-7 text-gc-h1 text-gc-ink">{L(COPY.title)}</h1>
              <p className="mt-4 text-gc-body text-gc-ink-60">{L(COPY.body)}</p>
            </div>

            {/* Progress */}
            <div className="mt-10 flex items-center gap-2" aria-hidden>
              {Array.from({ length: TOTAL }, (_, i) => (
                <span
                  key={i}
                  className={cn("h-1.5 flex-1 rounded-full transition-colors duration-[300ms]", i < step ? "bg-gc-royal" : "bg-gc-line")}
                />
              ))}
            </div>
            <p className="mt-3 text-gc-small text-gc-ink-50">
              {L(COPY.step)} {step} {L(COPY.of)} {TOTAL}
            </p>

            <form
              onSubmit={onSubmit}
              noValidate
              className="mt-6 rounded-[28px] bg-white p-6 shadow-gc-float ring-1 ring-inset ring-gc-line/70 md:p-8"
            >
              {state === "done" ? (
                <FormStatus state="success" title={L(COPY.doneTitle)} body={L(COPY.doneBody)} />
              ) : (
                <div className="space-y-5">
                  {step === 1 && (
                    <>
                      <p className="font-gc-display text-[1.125rem] font-bold text-gc-ink">{L(COPY.s1)}</p>
                      <Input
                        label={L(COPY.businessName)} value={draft.businessName ?? ""} error={errors.businessName}
                        onChange={(e) => set("businessName", e.target.value)} autoComplete="organization"
                      />
                      <Input
                        label={L(COPY.ownerName)} value={draft.ownerName ?? ""} error={errors.ownerName}
                        onChange={(e) => set("ownerName", e.target.value)} autoComplete="name"
                      />
                      <Select label={L(COPY.businessType)} value={draft.businessType} onChange={(e) => set("businessType", e.target.value)}>
                        {TYPES.map((tp) => (
                          <option key={tp.value} value={tp.value}>{L(tp.label)}</option>
                        ))}
                      </Select>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <p className="font-gc-display text-[1.125rem] font-bold text-gc-ink">{L(COPY.s2)}</p>
                      <Input
                        label={L(COPY.phone)} type="tel" value={draft.phone ?? ""} error={errors.phone}
                        onChange={(e) => set("phone", e.target.value)} autoComplete="tel"
                      />
                      <Input
                        label={L(COPY.email)} type="email" value={draft.email ?? ""} error={errors.email}
                        onChange={(e) => set("email", e.target.value)} autoComplete="email"
                      />
                      <Select label={L(COPY.language)} value={draft.preferredLanguage} onChange={(e) => set("preferredLanguage", e.target.value)}>
                        <option value="en">English</option>
                        <option value="bn">বাংলা</option>
                      </Select>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <p className="font-gc-display text-[1.125rem] font-bold text-gc-ink">{L(COPY.s3)}</p>
                      <Input
                        label={L(COPY.storeName)} value={draft.storeName ?? ""} error={errors.storeName}
                        onChange={(e) => set("storeName", e.target.value)}
                      />
                      <div>
                        <Input
                          label={L(COPY.subdomain)}
                          value={draft.subdomain ?? ""}
                          error={errors.subdomain}
                          hint={L(COPY.subdomainHint)}
                          onChange={(e) => onSubdomainChange(e.target.value)}
                        />
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-gc-small">
                          <span className="rounded-full bg-gc-canvas px-3 py-1 font-medium text-gc-ink-60">
                            {draft.subdomain || "yourstore"}.{SITE.domain}
                          </span>
                          {sub.state === "checking" && (
                            <span className="inline-flex items-center gap-1 text-gc-ink-50">
                              <Loader2 aria-hidden className="size-3.5 animate-spin" />
                              {L(COPY.checking)}
                            </span>
                          )}
                          {sub.state === "ok" && (
                            <span className="inline-flex items-center gap-1 font-semibold text-gc-success">
                              <Check aria-hidden className="size-3.5" strokeWidth={3} />
                              {L(COPY.available)}
                            </span>
                          )}
                          {sub.state === "taken" && <span className="font-semibold text-gc-danger">{L(COPY.taken)}</span>}
                        </div>
                      </div>
                      <Select label={L(COPY.category)} value={draft.category ?? ""} error={errors.category} onChange={(e) => set("category", e.target.value)}>
                        <option value="">—</option>
                        {CATEGORIES.map((c) => (
                          <option key={c.en} value={c.en}>{L(c)}</option>
                        ))}
                      </Select>
                    </>
                  )}

                  <div className="flex gap-3 pt-2">
                    {step > 1 && (
                      <Button type="button" variant="secondary" size="lg" onClick={() => setStep(step - 1)}>
                        {L(COPY.back)}
                      </Button>
                    )}
                    <Button type="submit" size="lg" fullWidth loading={state === "sending"}>
                      {state === "sending" ? L(COPY.creating) : step < TOTAL ? L(COPY.next) : L(COPY.create)}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
