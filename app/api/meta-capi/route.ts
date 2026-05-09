// Receives a single Meta tracking event from the browser and mirrors it
// to the Conversions API server-to-server so Meta can deduplicate against
// the matching Pixel call (shared event_id). Tracking failures must never
// surface to the user, so this handler always returns 200 with `{ok:true}`.

import { NextResponse } from "next/server";
import { clientIp } from "@/lib/clientIp";
import { rateLimit } from "@/lib/rateLimit";
import { metaCapiSchema } from "@/lib/schema";
import { sendCapiEvent } from "@/lib/meta-capi";
import { META_CURRENCY } from "@/lib/meta";

const OK = NextResponse.json({ ok: true });

export async function POST(request: Request): Promise<NextResponse> {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return OK;
  }

  const parsed = metaCapiSchema.safeParse(raw);
  if (!parsed.success) return OK;

  const ip = await clientIp();
  // 60 events / minute / IP is generous for tracking but blocks runaway
  // loops or trivial abuse from a single client.
  if (!rateLimit(`meta-capi:${ip}`, 60, 60 * 1000).ok) {
    return OK;
  }

  const { event, eventId, eventSourceUrl, value, contentName, lead } =
    parsed.data;

  const customData: { currency?: string; value?: number; content_name?: string } =
    {};
  if (typeof value === "number") {
    customData.currency = META_CURRENCY;
    customData.value = value;
  }
  if (contentName) customData.content_name = contentName;

  await sendCapiEvent({
    eventName: event,
    eventId,
    eventSourceUrl,
    customData: Object.keys(customData).length ? customData : undefined,
    lead,
  });

  return OK;
}
