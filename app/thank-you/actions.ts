"use server";

import { headers } from "next/headers";
import { env } from "@/lib/env";
import type { Plan } from "@/lib/plans";
import { rateLimit } from "@/lib/rateLimit";
import { sendSchema } from "@/lib/schema";

type Result = { ok: true } | { ok: false; error: string };

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

export async function sendThankYouEmail(input: {
  nume: string;
  email: string;
  plan: Plan | null;
}): Promise<Result> {
  const parsed = sendSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Date invalide." };
  }

  const ip = await clientIp();
  const limit = rateLimit(`register-lead:${ip}`, 5, 10 * 60 * 1000);
  if (!limit.ok) {
    return {
      ok: false,
      error:
        "Prea multe încercări. Mai așteaptă câteva minute și încearcă din nou.",
    };
  }

  const { nume, email, plan } = parsed.data;

  try {
    const res = await fetch(env().LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: nume,
        email,
        dietary_plan: dietaryPlan(plan),
      }),
      cache: "no-store",
    });

    if (res.status === 201) {
      console.log("[register-lead] ok", { dietary_plan: dietaryPlan(plan) });
      return { ok: true };
    }

    if (res.status === 422) {
      return { ok: false, error: "Acest email pare deja înregistrat." };
    }
    if (res.status === 429) {
      return {
        ok: false,
        error:
          "Prea multe încercări. Mai așteaptă câteva minute și încearcă din nou.",
      };
    }

    console.error("[register-lead] unexpected status", res.status);
    return {
      ok: false,
      error: "A apărut o problemă. Încearcă din nou, te rog.",
    };
  } catch (err) {
    console.error("[register-lead] network error", err);
    return {
      ok: false,
      error: "A apărut o problemă. Încearcă din nou, te rog.",
    };
  }
}
