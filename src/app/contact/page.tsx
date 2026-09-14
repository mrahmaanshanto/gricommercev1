import { Contact } from "@/components/marketing/pages/Contact";
import type { ContactTopic } from "@/services/contact.service";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Talk to sales, support or the partnerships team.",
  path: "/contact",
});

const TOPICS = ["sales", "support", "partnership", "general", "demo"] as const;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  // `?topic=demo` is how every "Book a demo" button on the site arrives here.
  const initial = TOPICS.includes(topic as ContactTopic) ? (topic as ContactTopic) : "sales";
  return <Contact initialTopic={initial} />;
}
