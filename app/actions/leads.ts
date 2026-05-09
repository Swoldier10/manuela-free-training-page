"use server";

import { env } from "@/lib/env";
import { clientIp } from "@/lib/clientIp";
import { rateLimit } from "@/lib/rateLimit";
import { registerLeadSchema, sendRecipesSchema } from "@/lib/schema";

type Result = { ok: true } | { ok: false; error: string };

const GENERIC_ERROR = "A apărut o problemă. Încearcă din nou, te rog.";
const RATE_LIMIT_ERROR =
  "Prea multe încercări. Mai așteaptă câteva minute și încearcă din nou.";

export async function registerLead(input: {
  nume: string;
  email: string;
}): Promise<Result> {
  const parsed = registerLeadSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "Date invalide." };

  const ip = await clientIp();
  if (!rateLimit(`register-lead:${ip}`, 5, 10 * 60 * 1000).ok) {
    return { ok: false, error: RATE_LIMIT_ERROR };
  }

  const { nume, email } = parsed.data;
  const e = env();

  try {
    const res = await fetch(`${e.LEAD_API_BASE_URL}/api/register-lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": e.LEAD_API_KEY,
      },
      body: JSON.stringify({ name: nume, email }),
      cache: "no-store",
    });

    if (res.status === 201) {
      console.log("[register-lead] ok");
      return { ok: true };
    }
    // 422 = already registered. Treat as success so a returning user
    // (refresh, second submit) still proceeds to the offer page.
    if (res.status === 422) {
      console.log("[register-lead] already registered");
      return { ok: true };
    }
    if (res.status === 429) {
      return { ok: false, error: RATE_LIMIT_ERROR };
    }

    console.error("[register-lead] unexpected status", res.status);
    return { ok: false, error: GENERIC_ERROR };
  } catch (err) {
    console.error("[register-lead] network error", err);
    return { ok: false, error: GENERIC_ERROR };
  }
}

// Dispatches the 95-recipes email to the buyer. Called once per email from
// `/thank-you` on the paid branch (deduped client-side via localStorage).
// `ok: true` is the cache-it-and-stop-retrying signal — covers both 202
// (delivered) and 422 (upstream-invalid email; retrying won't help).
export async function sendRecipesEmail(input: {
  nume: string;
  email: string;
}): Promise<Result> {
  const parsed = sendRecipesSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "Date invalide." };

  const ip = await clientIp();
  if (!rateLimit(`send-recipes:${ip}`, 5, 10 * 60 * 1000).ok) {
    return { ok: false, error: RATE_LIMIT_ERROR };
  }

  const { nume, email } = parsed.data;
  const e = env();

  try {
    const res = await fetch(`${e.LEAD_API_BASE_URL}/api/send-recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": e.LEAD_API_KEY,
      },
      body: JSON.stringify({ name: nume, email }),
      cache: "no-store",
    });

    if (res.status === 202) {
      console.log("[send-recipes] ok");
      return { ok: true };
    }
    // Upstream rejected the email itself — won't ever succeed for this
    // address, so let the client mark it as sent and stop retrying.
    if (res.status === 422) {
      console.warn("[send-recipes] upstream 422 — marking sent anyway");
      return { ok: true };
    }
    if (res.status === 429) {
      return { ok: false, error: RATE_LIMIT_ERROR };
    }
    if (res.status === 401 || res.status === 403) {
      console.error("[send-recipes] auth failure", res.status);
      return { ok: false, error: GENERIC_ERROR };
    }

    console.error("[send-recipes] unexpected status", res.status);
    return { ok: false, error: GENERIC_ERROR };
  } catch (err) {
    console.error("[send-recipes] network error", err);
    return { ok: false, error: GENERIC_ERROR };
  }
}
