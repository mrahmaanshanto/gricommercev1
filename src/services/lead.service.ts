import { mockRequest, type ServiceResult } from "./http";

export type DemoRequest = {
  name: string;
  businessName: string;
  phone: string;
  email?: string;
  monthlyOrders?: string;
  message?: string;
};

export type MigrationRequest = {
  name: string;
  businessName: string;
  phone: string;
  currentPlatform: string;
  storeUrl?: string;
  message?: string;
};

export type NewsletterRequest = { email: string };

/** TODO(backend): POST /api/leads/demo */
export function submitDemoRequest(data: DemoRequest): Promise<ServiceResult<DemoRequest>> {
  return mockRequest("submitDemoRequest", data);
}

/** TODO(backend): POST /api/leads/migration */
export function submitMigrationRequest(
  data: MigrationRequest,
): Promise<ServiceResult<MigrationRequest>> {
  return mockRequest("submitMigrationRequest", data);
}

/** TODO(backend): POST /api/leads/newsletter */
export function subscribeNewsletter(
  data: NewsletterRequest,
): Promise<ServiceResult<NewsletterRequest>> {
  return mockRequest("subscribeNewsletter", data, { latency: 700 });
}
