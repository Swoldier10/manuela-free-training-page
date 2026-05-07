// Server-only: reads non-public env vars. Do not import from client components.

import { env } from "@/lib/env";

export type Plan = "upsell" | "downsell";

export function resolvePlan(value: string | string[] | undefined): Plan | null {
  if (!value) return null;
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return null;
  const e = env();
  if (raw === e.PLAN_UPSELL_ID) return "upsell";
  if (raw === e.PLAN_DOWNSELL_ID) return "downsell";
  return null;
}

// Stripe Payment Links. Each link's success URL must be configured in the
// Stripe dashboard to point at `/thank-you?p=$PLAN_*_ID` so the paid copy
// renders.
export const UPSELL_CHECKOUT_URL =
  "https://buy.stripe.com/eVq00j4rO0RA0KQ52D5EY04";
export const DOWNSELL_CHECKOUT_URL =
  "https://buy.stripe.com/fZu4gz4rO1VEeBG2Uv5EY05";
