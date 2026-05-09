// Client-only: fires a Meta tracking event from the browser AND mirrors it
// to our /api/meta-capi route so the server can dispatch the same event to
// Meta's Conversions API. Both calls share the same `eventId`/`eventID` so
// Meta deduplicates browser + server signals.
//
// Designed to be fire-and-forget and never throw: the route POST uses
// `keepalive: true` so it survives navigation away (critical for the
// InitiateCheckout → Stripe redirect path).

import { META_CURRENCY, type MetaEventName } from "@/lib/meta";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type TrackArgs = {
  event: MetaEventName;
  eventId?: string;
  value?: number;
  contentName?: string;
  lead?: { nume: string; email: string };
};

export function trackEvent(args: TrackArgs): void {
  if (typeof window === "undefined") return;

  const eventId = args.eventId ?? cryptoRandomId();
  const customData: Record<string, unknown> = {};
  if (typeof args.value === "number") {
    customData.currency = META_CURRENCY;
    customData.value = args.value;
  }
  if (args.contentName) customData.content_name = args.contentName;

  try {
    window.fbq?.("track", args.event, customData, { eventID: eventId });
  } catch (err) {
    console.warn("[track] fbq failed", err);
  }

  try {
    void fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: args.event,
        eventId,
        eventSourceUrl: window.location.href,
        ...(typeof args.value === "number" ? { value: args.value } : {}),
        ...(args.contentName ? { contentName: args.contentName } : {}),
        ...(args.lead ? { lead: args.lead } : {}),
      }),
      keepalive: true,
      cache: "no-store",
    }).catch(() => {
      /* tracking must never disrupt user flow */
    });
  } catch {
    /* tracking must never disrupt user flow */
  }
}

function cryptoRandomId(): string {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}
