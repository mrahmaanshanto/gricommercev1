import { mockRequest, type ServiceResult } from "./http";

export type FileRef = { name: string; size: number };

export type JobApplication = {
  jobId: string;
  name: string;
  phone: string;
  email?: string;
  city: string;
  cv: FileRef;
  /** Answers to the job's own questions, by question id (a file question carries its file). */
  answers: Record<string, string | FileRef>;
  /** Where the candidate came from: the job link's ?src= (facebook, whatsapp, linkedin, referral …), else the careers page. */
  source: string;
};

export type ApplicationReceipt = { code: string };

const LETTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ";

/**
 * TODO(backend): POST /api/careers/applications (multipart, with the CV) → Grid Career's applyToJob
 * (lib/platform/career.js in the platform): it checks the job is still open, the answers, one application per mobile
 * and job, applies knockout answers, saves the application for the super admin's Applicants board and sends the
 * "Application received" SMS / email with the candidate's status link (/application?code=). It returns the code.
 */
export async function submitApplication(data: JobApplication): Promise<ServiceResult<ApplicationReceipt>> {
  const code = Array.from({ length: 6 }, () => LETTERS[Math.floor(Math.random() * LETTERS.length)]).join("");
  return mockRequest("submitApplication", { code }, { latency: 1100 }).then((r) => {
    if (process.env.NODE_ENV === "development") console.info("[service:mock] application", data);
    return r;
  });
}
