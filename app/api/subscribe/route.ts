import { NextRequest, NextResponse } from "next/server";
import { subscribeSchema } from "@/lib/schema";
import { bccList, fromAddress, getResend } from "@/lib/resend";
import { rateLimit } from "@/lib/rateLimit";
import { WelcomeEmail } from "@/lib/emailTemplate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "anonymous";
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  const limit = rateLimit(`subscribe:${ip}`, 5, 10 * 60 * 1000);
  if (!limit.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Prea multe încercări. Mai așteaptă câteva minute și încearcă din nou.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) },
      },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Cerere invalidă." },
      { status: 400 },
    );
  }

  const parsed = subscribeSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return NextResponse.json(
      { ok: false, error: first?.message ?? "Date invalide." },
      { status: 400 },
    );
  }

  const { nume, email } = parsed.data;

  try {
    const resend = getResend();
    const bcc = bccList();

    const result = await resend.emails.send({
      from: fromAddress(),
      to: email,
      bcc: bcc.length ? bcc : undefined,
      subject: `${nume}, uite antrenamentele tale gratuite 💪`,
      replyTo: process.env.RESEND_NOTIFY_BCC || undefined,
      react: WelcomeEmail({ nume }),
      headers: { "X-Entity-Ref-ID": `mv-${Date.now()}` },
    });

    if (result.error) {
      console.error("[subscribe] resend error", result.error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Emailul nu a putut fi trimis. Te rog încearcă din nou în câteva minute.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] unhandled", err);
    return NextResponse.json(
      { ok: false, error: "A apărut o problemă. Încearcă din nou, te rog." },
      { status: 500 },
    );
  }
}
