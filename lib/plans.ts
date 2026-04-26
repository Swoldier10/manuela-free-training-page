// Server-only: reads non-public env vars. Do not import from client components.

import { env } from "@/lib/env";

export type Plan = "14-day" | "7-day";

export function resolvePlan(value: string | string[] | undefined): Plan | null {
  if (!value) return null;
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return null;
  const e = env();
  if (raw === e.PLAN_14_ID) return "14-day";
  if (raw === e.PLAN_7_ID) return "7-day";
  return null;
}

export function plan14Url(): string {
  return `/thank-you?p=${env().PLAN_14_ID}`;
}

export function plan7Url(): string {
  return `/thank-you?p=${env().PLAN_7_ID}`;
}

// Stripe Payment Links. Each link's success URL must be configured in the
// Stripe dashboard to point at the matching `/thank-you?p=$PLAN_*_ID`.
export const PLAN_14_CHECKOUT_URL =
  "https://buy.stripe.com/8x28wP8I47fYeBGdz95EY02";
export const PLAN_7_CHECKOUT_URL =
  "https://buy.stripe.com/9B614n7E057Qalq2Uv5EY03";
