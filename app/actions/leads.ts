"use server";

import { headers } from "next/headers";
import { env } from "@/lib/env";
import type { Plan } from "@/lib/plans";
import { rateLimit } from "@/lib/rateLimit";
import { registerLeadSchema, updateLeadSchema } from "@/lib/schema";

type Result = { ok: true } | { ok: false; error: string };

const GENERIC_ERROR = "A apărut o problemă. Încearcă din nou, te rog.";
const RATE_LIMIT_ERROR =
  "Prea multe încercări. Mai așteaptă câteva minute și încearcă din nou.";

async function clientIp(): Promise<string> {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return h.get("x-real-ip") ?? "anonymous";
}

function dietaryPlan(plan: Plan | null): "14-days" | "7-days" | "none" {
  if (plan === "14-day") return "14-days";
  if (plan === "7-day") return "7-days";
  return "none";
}

async function postLead(
  path: "/api/register-lead" | "/api/update-lead",
  body: unknown,
): Promise<Response> {
  const e = env();
  return fetch(`${e.LEAD_API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-API-Key": e.LEAD_API_KEY,
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });
}

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

  try {
    const res = await postLead("/api/register-lead", { name: nume, email });

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

export async function updateLeadPlan(input: {
  nume: string;
  email: string;
  plan: Plan | null;
}): Promise<Result> {
  const parsed = updateLeadSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "Date invalide." };

  const ip = await clientIp();
  if (!rateLimit(`update-lead:${ip}`, 5, 10 * 60 * 1000).ok) {
    return { ok: false, error: RATE_LIMIT_ERROR };
  }

  const { nume, email, plan } = parsed.data;
  const dp = dietaryPlan(plan);

  try {
    const res = await postLead("/api/update-lead", {
      email,
      dietary_plan: dp,
    });

    if (res.status === 200) {
      console.log("[update-lead] ok", { dietary_plan: dp });
      return { ok: true };
    }

    // 404 = lead never registered (direct hit, sessionStorage lost
    // mid-flow, etc.). Fall back to register-lead with the chosen plan
    // so the user still ends up in the system.
    if (res.status === 404) {
      console.warn("[update-lead] missing lead, falling back to register");
      const reg = await postLead("/api/register-lead", {
        name: nume,
        email,
        dietary_plan: dp,
      });
      if (reg.status === 201 || reg.status === 422) return { ok: true };
      console.error("[update-lead] fallback register failed", reg.status);
      return { ok: false, error: GENERIC_ERROR };
    }

    if (res.status === 422) {
      return { ok: false, error: "Acest email nu pare valid." };
    }
    if (res.status === 429) {
      return { ok: false, error: RATE_LIMIT_ERROR };
    }

    console.error("[update-lead] unexpected status", res.status);
    return { ok: false, error: GENERIC_ERROR };
  } catch (err) {
    console.error("[update-lead] network error", err);
    return { ok: false, error: GENERIC_ERROR };
  }
}
