"use server";

import { headers } from "next/headers";
import { WelcomeEmail } from "@/lib/emailTemplate";
import type { Plan } from "@/lib/plans";
import { rateLimit } from "@/lib/rateLimit";
import { bccList, fromAddress, getResend } from "@/lib/resend";
import { sendSchema } from "@/lib/schema";

type Result = { ok: true } | { ok: false; error: string };

async function clientIp(): Promise<string> {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return h.get("x-real-ip") ?? "anonymous";
}

function siteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://manuelavlasin.ro"
  );
}

function subjectFor(nume: string, plan: Plan | null): string {
  if (plan === "14-day")
    return `${nume}, antrenamentele + planul de 14 zile sunt aici 💪`;
  if (plan === "7-day")
    return `${nume}, antrenamentele + planul de 7 zile sunt aici 💪`;
  return `${nume}, uite antrenamentele tale gratuite 💪`;
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
  const limit = rateLimit(`thank-you-email:${ip}`, 5, 10 * 60 * 1000);
  if (!limit.ok) {
    return {
      ok: false,
      error:
        "Prea multe încercări. Mai așteaptă câteva minute și încearcă din nou.",
    };
  }

  const { nume, email, plan } = parsed.data;

  try {
    const resend = getResend();
    const bcc = bccList();

    const result = await resend.emails.send({
      from: fromAddress(),
      to: email,
      bcc: bcc.length ? bcc : undefined,
      subject: subjectFor(nume, plan),
      replyTo: process.env.RESEND_NOTIFY_BCC || undefined,
      react: WelcomeEmail({ nume, plan, siteUrl: siteUrl() }),
      headers: { "X-Entity-Ref-ID": `mv-${Date.now()}` },
    });

    if (result.error) {
      console.error("[thank-you-email] resend error", result.error);
      return {
        ok: false,
        error:
          "Emailul nu a putut fi trimis. Te rog încearcă din nou în câteva minute.",
      };
    }

    return { ok: true };
  } catch (err) {
    console.error("[thank-you-email] unhandled", err);
    return {
      ok: false,
      error: "A apărut o problemă. Încearcă din nou, te rog.",
    };
  }
}
