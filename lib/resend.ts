import { Resend } from "resend";

let client: Resend | null = null;

export function getResend(): Resend {
  if (!client) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error(
        "RESEND_API_KEY is not set. Add it to your .env.local file.",
      );
    }
    client = new Resend(key);
  }
  return client;
}

export function fromAddress(): string {
  const email = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const name = process.env.RESEND_FROM_NAME ?? "Manuela Vlasin";
  return `${name} <${email}>`;
}

export function bccList(): string[] {
  const raw = process.env.RESEND_NOTIFY_BCC ?? "";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}
