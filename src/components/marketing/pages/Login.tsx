"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { BrandLogo, PatternCorner } from "@/components/brand/primitives";
import { Button } from "@/components/ui/Button";
import { FormStatus, Input } from "@/components/ui/Field";
import { login } from "@/services/auth.service";
import { useI18n } from "@/i18n/provider";
import { loc } from "@/i18n/types";

const COPY = {
  title: loc("Sign in", "সাইন ইন"),
  body: loc("Sign in to your GridCommerce workspace.", "আপনার গ্রিডকমার্স ওয়ার্কস্পেসে ঢুকুন।"),
  email: loc("Email", "ইমেইল"),
  password: loc("Password", "পাসওয়ার্ড"),
  signIn: loc("Sign in", "সাইন ইন"),
  signingIn: loc("Signing in", "সাইন ইন হচ্ছে"),
  noAccount: loc("New to GridCommerce?", "নতুন?"),
  create: loc("Start free", "ফ্রি শুরু করুন"),
  pendingTitle: loc("Frontend build — no session was created", "শুধু ফ্রন্টএন্ড — কোনো সেশন তৈরি হয়নি"),
  pendingBody: loc(
    "Authentication is not implemented in this repository. The form is wired to the service layer and stops there.",
    "এই রিপোজিটরিতে অথেনটিকেশন নেই। ফর্মটি সার্ভিস লেয়ার পর্যন্তই যায়।",
  ),
  required: loc("This field is required", "এই ঘরটি পূরণ করতে হবে"),
};

export function Login() {
  const { L } = useI18n();
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");

    const next: Record<string, string> = {};
    if (!email) next.email = L(COPY.required);
    if (!password) next.password = L(COPY.required);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setState("sending");
    await login({ email, password });
    // No redirect: there is no admin to redirect to in a frontend-only build.
    setState("done");
  }

  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <div className="relative isolate mx-auto max-w-[1440px] overflow-clip rounded-[28px] bg-white md:rounded-[40px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-20rem] size-[44rem] -translate-x-1/2 rounded-full bg-gc-sky-20 blur-[130px]" />
        </div>
        <PatternCorner position="tr" />
        <PatternCorner position="bl" />

        <div className="container-page relative py-16 md:py-24">
          <div className="mx-auto max-w-md">
            <div className="flex flex-col items-center text-center">
              <BrandLogo variant="mark" className="h-12 w-auto" />
              <h1 className="mt-7 text-gc-h1 text-gc-ink">{L(COPY.title)}</h1>
              <p className="mt-4 text-gc-body text-gc-ink-60">{L(COPY.body)}</p>
            </div>

            <form
              onSubmit={onSubmit}
              noValidate
              className="mt-10 rounded-[28px] bg-white p-6 shadow-gc-float ring-1 ring-inset ring-gc-line/70 md:p-8"
            >
              <div className="space-y-5">
                <Input label={L(COPY.email)} name="email" type="email" autoComplete="email" error={errors.email} />
                <Input label={L(COPY.password)} name="password" type="password" autoComplete="current-password" error={errors.password} />

                {state === "done" && <FormStatus state="success" title={L(COPY.pendingTitle)} body={L(COPY.pendingBody)} />}

                <Button type="submit" size="lg" fullWidth loading={state === "sending"}>
                  {state === "sending" ? L(COPY.signingIn) : L(COPY.signIn)}
                </Button>
              </div>
            </form>

            <p className="mt-6 text-center text-gc-small text-gc-ink-60">
              {L(COPY.noAccount)}{" "}
              <Link href="/signup" className="font-semibold text-gc-royal hover:underline">
                {L(COPY.create)}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
