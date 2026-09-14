/**
 * Mock transport layer.
 *
 * FRONTEND ONLY. Every service in this folder resolves through `mockRequest`.
 * When the backend exists, replace the body of `mockRequest` with a real
 * fetch (or swap individual services) — the UI contracts stay identical.
 */

export type ServiceResult<T = void> =
  | { ok: true; data: T }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

const LATENCY_MS = 900;

export async function mockRequest<T>(
  label: string,
  data: T,
  { latency = LATENCY_MS, failureRate = 0 }: { latency?: number; failureRate?: number } = {},
): Promise<ServiceResult<T>> {
  await new Promise((r) => setTimeout(r, latency));

  if (process.env.NODE_ENV === "development") {
    console.info(`[service:mock] ${label}`, data);
  }

  if (failureRate > 0 && Math.random() < failureRate) {
    return { ok: false, error: "network" };
  }
  return { ok: true, data };
}
