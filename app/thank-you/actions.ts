"use server";

import { headers } from "next/headers";
import { env } from "@/lib/env";
import { rateLimit } from "@/lib/rateLimit";
import { subscribeSchema } from "@/lib/schema";

type Result = { ok: true } | { ok: false; error: string };

async function clientIp(): Promise<string> {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return h.get("x-real-ip") ?? "anonymous";
}

export async function sendThankYouEmail(input: {
  nume: string;
  email: string;
}): Promise<Result> {
  const parsed = subscribeSchema.safeParse(input);
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

  const { nume, email } = parsed.data;

  try {
    const res = await fetch(env().LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: nume, email }),
      cache: "no-store",
    });

    if (res.status === 201) return { ok: true };

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
