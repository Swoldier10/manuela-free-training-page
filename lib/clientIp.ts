// Server-only: extracts the originating client IP from request headers.
// Shared by lead actions and CAPI dispatch so we have one definition of
// "what counts as the visitor's IP" behind a proxy.

import { headers } from "next/headers";

export async function clientIp(): Promise<string> {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return h.get("x-real-ip") ?? "anonymous";
}
