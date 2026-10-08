"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { FormStatus, Input, Select, Textarea } from "@/components/ui/Field";
import { IconTile } from "@/components/brand/primitives";
import { PageHero } from "./PageHero";
import { submitContact, type ContactTopic } from "@/services/contact.service";
import { CONTACT, isPending } from "@/data/site";
import { useI18n } from "@/i18n/provider";
import { loc, type Localized } from "@/i18n/types";
import { trackEvent } from "@/lib/analytics";

const COPY = {
  home: loc("Home", "হোম"),
  title: loc("Contact", "যোগাযোগ"),
  body: loc(
    "Tell us which part of the business you are asking about and the right person answers.",
    "ব্যবসার কোন অংশ নিয়ে জানতে চান বলুন, ঠিক মানুষটাই উত্তর দেবে।",
  ),
  topic: loc("What is this about?", "কী বিষয়ে?"),
  name: loc("Your name", "আপনার নাম"),
  business: loc("Business name", "ব্যবসার নাম"),
  email: loc("Email", "ইমেইল"),
  phone: loc("Phone", "ফোন"),
  message: loc("Message", "বার্তা"),
  optional: loc("optional", "ঐচ্ছিক"),
  send: loc("Send message", "বার্তা পাঠান"),
  sending: loc("Sending", "পাঠানো হচ্ছে"),
  successTitle: loc("Message received", "বার্তা পৌঁছেছে"),
  successBody: loc(
    "This is a frontend build, so nothing was actually sent. The form contract is wired to the service layer.",
    "এটি শুধু ফ্রন্টএন্ড, তাই আসলে কিছু পাঠানো হয়নি। ফর্মটি সার্ভিস লেয়ারের সাথে যুক্ত।",
  ),
  errorTitle: loc("Could not send", "পাঠানো যায়নি"),
  errorBody: loc("Something went wrong. Try again.", "কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।"),
  reach: loc("Or reach us directly", "অথবা সরাসরি যোগাযোগ করুন"),
  required: loc("This field is required", "এই ঘরটি পূরণ করতে হবে"),
  badEmail: loc("Enter a valid email address", "সঠিক ইমেইল দিন"),
};

const TOPICS: { value: ContactTopic; label: Localized }[] = [
  { value: "sales", label: loc("Sales — I want to start selling", "সেলস — বিক্রি শুরু করতে চাই") },
  { value: "demo", label: loc("Book a demo", "ডেমো দেখতে চাই") },
  { value: "support", label: loc("Support — I already use GridCommerce", "সাপোর্ট — আমি ব্যবহার করছি") },
  { value: "partnership", label: loc("Partnership", "পার্টনারশিপ") },
  { value: "general", label: loc("Something else", "অন্য কিছু") },
];

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

export function Contact({ initialTopic = "sales" }: { initialTopic?: ContactTopic }) {
  const { L } = useI18n();
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();

    // Validated here rather than relying on the browser so the messages are
    // localised and the invalid states match the rest of the site.
    const next: Errors = {};
    if (!get("name")) next.name = L(COPY.required);
    if (!get("email")) next.email = L(COPY.required);
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) next.email = L(COPY.badEmail);
    if (!get("phone")) next.phone = L(COPY.required);
    if (!get("message")) next.message = L(COPY.required);

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setState("sending");
    const res = await submitContact({
      topic: get("topic") as ContactTopic,
      name: get("name"),
      businessName: get("businessName") || undefined,
      email: get("email"),
      phone: get("phone"),
      message: get("message"),
    });
    setState(res.ok ? "success" : "error");
    if (res.ok) trackEvent("contact_submitted", { topic: get("topic") });
  }

  const channels = [
    { icon: "Mail", label: loc("Sales", "সেলস"), value: CONTACT.salesEmail, href: `mailto:${CONTACT.salesEmail}` },
    { icon: "LifeBuoy", label: loc("Support", "সাপোর্ট"), value: CONTACT.supportEmail, href: `mailto:${CONTACT.supportEmail}` },
    { icon: "Phone", label: loc("Phone", "ফোন"), value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  ].filter((c) => !isPending(c.value));

  return (
    <PageHero
      crumbs={[{ label: COPY.title }]}
      title={COPY.title}
      body={COPY.body}
      pattern="bl"
      aside={
        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-[20px] bg-white p-6 shadow-gc-float ring-1 ring-inset ring-gc-line/70 md:p-9"
        >
          <div className="space-y-5">
            <Select label={L(COPY.topic)} name="topic" defaultValue={initialTopic}>
              {TOPICS.map((t) => (
                <option key={t.value} value={t.value}>{L(t.label)}</option>
              ))}
            </Select>

            <div className="grid gap-5 sm:grid-cols-2">
              <Input label={L(COPY.name)} name="name" autoComplete="name" error={errors.name} />
              <Input label={L(COPY.business)} name="businessName" optional={L(COPY.optional)} autoComplete="organization" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Input label={L(COPY.email)} name="email" type="email" autoComplete="email" error={errors.email} />
              <Input label={L(COPY.phone)} name="phone" type="tel" autoComplete="tel" error={errors.phone} />
            </div>

            <Textarea label={L(COPY.message)} name="message" rows={5} error={errors.message} />

            {state === "success" && <FormStatus state="success" title={L(COPY.successTitle)} body={L(COPY.successBody)} />}
            {state === "error" && <FormStatus state="error" title={L(COPY.errorTitle)} body={L(COPY.errorBody)} />}

            <Button type="submit" size="lg" fullWidth loading={state === "sending"}>
              {state === "sending" ? L(COPY.sending) : L(COPY.send)}
            </Button>
          </div>
        </form>
      }
    >
      {channels.length > 0 && (
        <div className="hero-rise mt-10">
          <p className="gc-eyebrow text-gc-eyebrow font-semibold uppercase text-gc-royal">{L(COPY.reach)}</p>
          <ul className="mt-5 space-y-3">
            {channels.map((c) => (
              <li key={c.label.en}>
                <a href={c.href} className="group/c flex min-w-0 items-center gap-4 rounded-[20px] bg-gc-canvas p-3 pr-5 transition-colors hover:bg-gc-royal-10">
                  <IconTile name={c.icon} size="sm" tone="white" />
                  <span className="min-w-0">
                    <span className="block text-[0.75rem] font-medium text-gc-ink-50">{L(c.label)}</span>
                    <span className="block text-gc-small font-semibold text-gc-ink transition-colors [overflow-wrap:anywhere] sm:text-gc-body group-hover/c:text-gc-royal">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {!isPending(CONTACT.addressLines[0]) && (
            <address className="mt-6 not-italic text-gc-small text-gc-ink-60">
              {CONTACT.addressLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
              <span className="block">
                {CONTACT.city}, {CONTACT.country}
              </span>
            </address>
          )}
        </div>
      )}
    </PageHero>
  );
}
