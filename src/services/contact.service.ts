import { mockRequest, type ServiceResult } from "./http";

export type ContactTopic = "sales" | "support" | "partnership" | "general" | "demo";

export type ContactRequest = {
  topic: ContactTopic;
  name: string;
  businessName?: string;
  email: string;
  phone: string;
  message: string;
};

/** TODO(backend): POST /api/contact */
export function submitContact(data: ContactRequest): Promise<ServiceResult<ContactRequest>> {
  return mockRequest("submitContact", data);
}
