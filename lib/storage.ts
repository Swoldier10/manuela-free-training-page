// Single source of truth for browser-storage keys + helpers used across the
// funnel. Bumping any value invalidates existing client state, so do it
// deliberately.

const LEAD_CACHE_TTL_MS = 4 * 60 * 60 * 1000; // 4 hours

export const STORAGE_KEYS = {
  /** localStorage — JSON blob: { nume, email, expiresAt }. */
  lead: "mv:lead",
} as const;

type LeadCache = { nume: string; email: string; expiresAt: number };

export function setLeadCache(input: { nume: string; email: string }): void {
  if (typeof window === "undefined") return;
  try {
    const payload: LeadCache = {
      nume: input.nume,
      email: input.email,
      expiresAt: Date.now() + LEAD_CACHE_TTL_MS,
    };
    window.localStorage.setItem(STORAGE_KEYS.lead, JSON.stringify(payload));
  } catch {
    /* private mode / quota — silently skip */
  }
}

export function getLeadCache(): { nume: string; email: string } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.lead);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      window.localStorage.removeItem(STORAGE_KEYS.lead);
      return null;
    }

    const { nume, email, expiresAt } = parsed as Record<string, unknown>;
    if (
      typeof nume !== "string" ||
      typeof email !== "string" ||
      typeof expiresAt !== "number" ||
      Number.isNaN(expiresAt)
    ) {
      window.localStorage.removeItem(STORAGE_KEYS.lead);
      return null;
    }

    if (expiresAt < Date.now()) {
      window.localStorage.removeItem(STORAGE_KEYS.lead);
      return null;
    }

    return { nume, email };
  } catch {
    return null;
  }
}
