// Single source of truth for browser-storage keys used across the funnel.
// Bumping any value invalidates existing client state, so do it deliberately.

import type { Plan } from "@/lib/plans";

export const STORAGE_KEYS = {
  /** sessionStorage — first name captured at form submit. */
  nume: "mv:nume",
  /** sessionStorage — email captured at form submit. */
  email: "mv:email",
} as const;

/** localStorage key marking that a thank-you email was sent for this case. */
export function emailedKey(plan: Plan | null): string {
  return `mv:emailed:${plan ?? "none"}`;
}
