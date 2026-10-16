import { notFound } from "next/navigation";
import { CareerJob } from "@/components/marketing/pages/Careers";
import { EMPLOYER, JOBS, JOBS_ARE_REAL, jobBySlug, type Job } from "@/data/sample";
import { SITE } from "@/data/site";
import { buildMetadata, breadcrumbSchema, JsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobBySlug(slug);
  return buildMetadata({
    title: job ? `${job.title.en} — Careers` : "Careers",
    description: job ? `${job.summary.en} ${job.place.en}. Apply by ${job.closesAt}.` : "Open jobs at GridCommerce.",
    path: `/careers/${slug}`,
  });
}

const EMPLOYMENT: Record<Job["type"], string> = { "full-time": "FULL_TIME", "part-time": "PART_TIME", contract: "CONTRACTOR", internship: "INTERN" };

/** Google Jobs data, only for real openings (data/sample/careers.ts › JOBS_ARE_REAL). */
function jobPosting(job: Job) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title.en,
    description: [...job.description.en, ...job.duties.en.map((d) => `• ${d}`), ...job.needs.en.map((n) => `• ${n}`)].join("\n"),
    datePosted: job.postedAt,
    validThrough: `${job.closesAt}T23:59:59+06:00`,
    employmentType: EMPLOYMENT[job.type],
    identifier: { "@type": "PropertyValue", name: EMPLOYER.name, value: job.id },
    hiringOrganization: { "@type": "Organization", name: EMPLOYER.name, sameAs: SITE.url },
    ...(job.remote
      ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "Bangladesh" } }
      : { jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" } } }),
    ...(job.showSalary && job.salaryFrom
      ? { baseSalary: { "@type": "MonetaryAmount", currency: "BDT", value: { "@type": "QuantitativeValue", minValue: job.salaryFrom, maxValue: job.salaryTo || job.salaryFrom, unitText: "MONTH" } } }
      : {}),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobBySlug(slug);
  if (!job) notFound();
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }, { name: job.title.en, path: `/careers/${slug}` }])} />
      {JOBS_ARE_REAL && <JsonLd data={jobPosting(job)} />}
      <CareerJob slug={slug} />
    </>
  );
}
