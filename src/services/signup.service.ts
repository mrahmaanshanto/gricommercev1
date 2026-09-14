import { mockRequest, type ServiceResult } from "./http";

export type BusinessType = "online" | "retail" | "wholesale" | "mixed";

export type SignupDraft = {
  businessName: string;
  ownerName: string;
  businessType: BusinessType;
  phone: string;
  email: string;
  storeName: string;
  subdomain: string;
  category: string;
  preferredLanguage: "en" | "bn";
};

/**
 * FRONTEND ONLY — no merchant, tenant or store is created.
 * The "Preparing your workspace" step is a visual demonstration.
 * TODO(backend): POST /api/signup → provisioning job.
 */
export function createWorkspace(draft: SignupDraft): Promise<ServiceResult<SignupDraft>> {
  return mockRequest("createWorkspace", draft, { latency: 2400 });
}

/** TODO(backend): GET /api/signup/subdomain-available?value= */
export async function checkSubdomain(value: string): Promise<ServiceResult<{ available: boolean }>> {
  await new Promise((r) => setTimeout(r, 550));
  const taken = ["demo", "test", "shop", "store", "admin", "www"];
  return { ok: true, data: { available: value.length >= 3 && !taken.includes(value) } };
}
