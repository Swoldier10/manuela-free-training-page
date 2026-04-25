import { Resend } from "resend";
import { env } from "@/lib/env";

let client: Resend | null = null;

export function getResend(): Resend {
  if (!client) {
    client = new Resend(env.RESEND_API_KEY);
  }
  return client;
}

export function fromAddress(): string {
  return `${env.RESEND_FROM_NAME} <${env.RESEND_FROM_EMAIL}>`;
}

export function bccList(): string[] {
  return env.RESEND_NOTIFY_BCC.split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}
