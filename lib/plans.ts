// Server-only: reads non-public env vars. Do not import from client components.

import { env } from "@/lib/env";

export type Plan = "14-day" | "7-day";

export function resolvePlan(value: string | string[] | undefined): Plan | null {
  if (!value) return null;
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return null;
  if (raw === env.PLAN_14_ID) return "14-day";
  if (raw === env.PLAN_7_ID) return "7-day";
  return null;
}

export function plan14Url(): string {
  return `/thank-you?p=${env.PLAN_14_ID}`;
}

export function plan7Url(): string {
  return `/thank-you?p=${env.PLAN_7_ID}`;
}
