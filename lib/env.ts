// Server-only env validation. Imported transitively from any server module
// that reads `process.env`. Throws at first import if a required key is
// missing or malformed — the app refuses to boot rather than failing
// silently per-request later. Never prefix any of these with NEXT_PUBLIC_;
// the only public var stays addressed via `process.env.NEXT_PUBLIC_SITE_URL`.

import { z } from "zod";

const schema = z.object({
  RESEND_API_KEY: z
    .string()
    .min(1, "RESEND_API_KEY is required (see https://resend.com/api-keys)."),
  RESEND_FROM_EMAIL: z.string().email().default("onboarding@resend.dev"),
  RESEND_FROM_NAME: z.string().default("Manuela Vlasin"),
  RESEND_NOTIFY_BCC: z.string().default(""),
  PLAN_14_ID: z.string().min(8, "PLAN_14_ID must be a non-trivial opaque ID."),
  PLAN_7_ID: z.string().min(8, "PLAN_7_ID must be a non-trivial opaque ID."),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  const issues = parsed.error.issues
    .map((i) => `  · ${i.path.join(".")}: ${i.message}`)
    .join("\n");
  throw new Error(
    `Invalid server env. Add the missing/invalid keys to .env.local:\n${issues}`,
  );
}

export const env = parsed.data;
