import { mockRequest, type ServiceResult } from "./http";

export type LoginRequest = { email: string; password: string; remember?: boolean };

/**
 * FRONTEND ONLY — no authentication is performed and no session is created.
 * TODO(backend): POST /api/auth/login, then redirect to the merchant admin.
 */
export function login(data: LoginRequest): Promise<ServiceResult<LoginRequest>> {
  return mockRequest("login", data, { latency: 1100 });
}

export const ADMIN_REDIRECT = "/login?state=backend-pending";
