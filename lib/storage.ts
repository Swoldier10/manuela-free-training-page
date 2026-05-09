// Single source of truth for browser-storage keys + helpers used across the
// funnel. Bumping any value invalidates existing client state, so do it
// deliberately.

const LEAD_CACHE_TTL_MS = 4 * 60 * 60 * 1000; // 4 hours

export const STORAGE_KEYS = {
  /** localStorage — JSON blob: { nume, email, expiresAt }. */
  lead: "mv:lead",
  /** localStorage — JSON blob: { [emailLowercased]: true }. Tracks which
   *  emails have already received the recipes dispatch from /thank-you so
   *  the trigger fires at most once per email per browser. */
  recipesSent: "mv:recipes-sent",
  /** localStorage — JSON blob: { [emailLowercased]: true }. Tracks which
   *  emails already had a Meta Pixel/CAPI Purchase event fired from
   *  /thank-you so refreshes don't double-fire. */
  purchaseSent: "mv:purchase-sent",
  /** localStorage — JSON blob: { [emailLowercased]: true }. Tracks which
   *  emails already had a Meta Pixel/CAPI Lead event fired from the free
   *  /thank-you path so refreshes / re-visits don't double-fire. */
  leadSent: "mv:lead-sent",
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

function readRecipesSentMap(): Record<string, true> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.recipesSent);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }
    return parsed as Record<string, true>;
  } catch {
    return {};
  }
}

export function markRecipesSent(email: string): void {
  if (typeof window === "undefined") return;
  try {
    const map = readRecipesSentMap();
    map[email.toLowerCase()] = true;
    window.localStorage.setItem(STORAGE_KEYS.recipesSent, JSON.stringify(map));
  } catch {
    /* private mode / quota — silently skip */
  }
}

export function wasRecipesSent(email: string): boolean {
  return Boolean(readRecipesSentMap()[email.toLowerCase()]);
}

function readPurchaseSentMap(): Record<string, true> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.purchaseSent);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }
    return parsed as Record<string, true>;
  } catch {
    return {};
  }
}

export function markPurchaseSent(email: string): void {
  if (typeof window === "undefined") return;
  try {
    const map = readPurchaseSentMap();
    map[email.toLowerCase()] = true;
    window.localStorage.setItem(
      STORAGE_KEYS.purchaseSent,
      JSON.stringify(map),
    );
  } catch {
    /* private mode / quota — silently skip */
  }
}

export function wasPurchaseSent(email: string): boolean {
  return Boolean(readPurchaseSentMap()[email.toLowerCase()]);
}

function readLeadSentMap(): Record<string, true> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.leadSent);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }
    return parsed as Record<string, true>;
  } catch {
    return {};
  }
}

export function markLeadSent(email: string): void {
  if (typeof window === "undefined") return;
  try {
    const map = readLeadSentMap();
    map[email.toLowerCase()] = true;
    window.localStorage.setItem(STORAGE_KEYS.leadSent, JSON.stringify(map));
  } catch {
    /* private mode / quota — silently skip */
  }
}

export function wasLeadSent(email: string): boolean {
  return Boolean(readLeadSentMap()[email.toLowerCase()]);
}
