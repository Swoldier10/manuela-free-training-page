// Server-only env validation. Imported transitively from any server module
// that reads `process.env`. Validation runs lazily on first call to `env()`
// — *not* at module-load — so `next build` can collect page data without
// having every required key set in the build environment. The first
// request that actually needs an env var (`getResend()`, `plan14Url()`,
// `resolvePlan()`, etc.) will throw with the offending keys named.
//
// Never prefix any of these with NEXT_PUBLIC_; the only public var stays
// addressed via `process.env.NEXT_PUBLIC_SITE_URL`.

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

type Env = z.infer<typeof schema>;

let cached: Env | undefined;

export function env(): Env {
  if (cached) return cached;
  const parsed = schema.safeParse(process.env);
  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((i) => `  · ${i.path.join(".")}: ${i.message}`)
      .join("\n");
    throw new Error(
      `Invalid server env. Add the missing/invalid keys to .env.local (or to your hosting provider):\n${issues}`,
    );
  }
  cached = parsed.data;
  return cached;
}
