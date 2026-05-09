// Server-only: dispatches a single event to Meta's Conversions API.
// Mirrors the client-side Pixel call by sharing the same `eventId` so Meta
// deduplicates browser + server signals. If the access token is unset the
// helper logs once and returns a skipped result — Pixel keeps firing in
// the browser, attribution falls back to browser-only.

import "server-only";
import { createHash } from "node:crypto";
import { headers, cookies } from "next/headers";
import { env } from "@/lib/env";
import { META_PIXEL_ID, type MetaEventName } from "@/lib/meta";
import { clientIp } from "@/lib/clientIp";

const META_GRAPH_VERSION = "v21.0";
const META_GRAPH_URL = `https://graph.facebook.com/${META_GRAPH_VERSION}`;

type Lead = { nume: string; email: string };

type CustomData = {
  currency?: string;
  value?: number;
  content_name?: string;
};

type SendArgs = {
  eventName: MetaEventName;
  eventId: string;
  eventSourceUrl: string;
  customData?: CustomData;
  lead?: Lead;
};

type SendResult =
  | { ok: true }
  | { ok: false; reason: "skipped" | "graph-error" | "exception" };

let warnedMissingToken = false;

export async function sendCapiEvent(args: SendArgs): Promise<SendResult> {
  const { eventName, eventId, eventSourceUrl, customData, lead } = args;
  const e = env();

  if (!e.META_CAPI_ACCESS_TOKEN) {
    if (!warnedMissingToken) {
      console.warn(
        "[meta-capi] META_CAPI_ACCESS_TOKEN unset — CAPI dispatch skipped (Pixel still fires).",
      );
      warnedMissingToken = true;
    }
    return { ok: false, reason: "skipped" };
  }

  try {
    const [ip, h, c] = await Promise.all([clientIp(), headers(), cookies()]);
    const userAgent = h.get("user-agent") ?? "";
    const fbp = c.get("_fbp")?.value;
    const fbc = c.get("_fbc")?.value;

    const userData: Record<string, unknown> = {
      client_ip_address: ip,
      client_user_agent: userAgent,
    };
    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;
    if (lead?.email) userData.em = [hashSha256(lead.email)];
    if (lead?.nume) userData.fn = [hashSha256(lead.nume)];

    const body: Record<string, unknown> = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: eventSourceUrl,
          action_source: "website",
          user_data: userData,
          ...(customData ? { custom_data: customData } : {}),
        },
      ],
    };
    if (e.META_CAPI_TEST_EVENT_CODE) {
      body.test_event_code = e.META_CAPI_TEST_EVENT_CODE;
    }

    const url = `${META_GRAPH_URL}/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(
      e.META_CAPI_ACCESS_TOKEN,
    )}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(
        `[meta-capi] graph ${res.status} for ${eventName}/${eventId}: ${text.slice(0, 300)}`,
      );
      return { ok: false, reason: "graph-error" };
    }

    return { ok: true };
  } catch (err) {
    console.error("[meta-capi] dispatch failed", err);
    return { ok: false, reason: "exception" };
  }
}

function hashSha256(value: string): string {
  return createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");
}
