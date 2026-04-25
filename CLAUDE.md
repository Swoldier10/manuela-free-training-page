# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server (Next 16, Turbopack) on http://localhost:3000
- `npm run build` / `npm run start` — production build and serve
- `npm run lint` — ESLint (flat config, `eslint-config-next`)

There is no test runner configured in this repo. Don't fabricate one.

`.env.local` must define `RESEND_API_KEY` for the subscribe endpoint to work; without it `getResend()` throws. `RESEND_FROM_EMAIL`, `RESEND_FROM_NAME`, `RESEND_NOTIFY_BCC`, and `NEXT_PUBLIC_SITE_URL` are all optional with sensible defaults.

## Versions worth knowing

`package.json` is the source of truth, not `README.md`:

- Next.js **16.2.4** (App Router). README says "Next.js 15" — it's stale. AGENTS.md applies: read `node_modules/next/dist/docs/` before assuming an API exists.
- React **19.2.4**, TypeScript 5, Tailwind CSS **v4** (PostCSS plugin).
- Path alias: `@/*` → repo root (see `tsconfig.json`).

## Architecture

Single-page Romanian-language lead-capture funnel. One route, one POST endpoint, one transactional email.

**Page composition** — `app/page.tsx` stitches together fixed-order sections from `components/sections/`. The page is server-rendered; only pieces that need state (`LeadForm`, `Reveal`, `CountdownTimer`) are `"use client"`. Reordering the funnel = editing `page.tsx`.

**Submission flow** — `LeadForm` (RHF + zod, client) → `POST /api/subscribe` → Resend. Both sides import the same `subscribeSchema` from `lib/schema.ts`, so validation rules and Romanian error messages stay in lockstep. Don't duplicate the schema.

**Subscribe route** (`app/api/subscribe/route.ts`, `runtime = "nodejs"`, `dynamic = "force-dynamic"`) does, in order: per-IP rate limit (5 req / 10 min via `lib/rateLimit.ts`) → JSON parse → zod parse → `resend.emails.send({ react: WelcomeEmail(...) })`. All user-facing error strings are Romanian — keep them that way.

**Rate limiter caveat** — `lib/rateLimit.ts` is an in-memory `Map`. It resets on every cold start and does not span instances. Fine for a single long-lived Node server; a serverless deployment that scales horizontally needs a shared store (Redis/Upstash) before this is meaningful protection.

**Email template** — `lib/emailTemplate.tsx` is a `@react-email/components` tree rendered server-side and passed to Resend via the `react` field. Email clients ignore Tailwind/external CSS, so all styling is inline `style={...}` with hard-coded hex constants — these intentionally duplicate the brand palette and should be edited together with `globals.css` if colors shift. The two workout links currently point at `https://example.com/...` placeholders.

**Styling** — Tailwind v4 with **no `tailwind.config.*` file**. Design tokens (olive/cream/gold scales, font families) live in `app/globals.css` under `@theme { ... }`; that's where new color/font tokens go. Token names retain `olive`/`cream` for compatibility but the actual palette is dark-gym (near-black surfaces, off-white text, gold accent). Custom utilities (`.shadow-gold`, `.glow-gold`, `.texture-grain`, `.shimmer`, etc.) are also defined there.

**Fonts** — self-hosted via `next/font/google` in `app/layout.tsx` (Inter, Playfair Display, Caveat, Fraunces-italic). They expose CSS vars (`--font-inter`, `--font-playfair`, …) consumed by the `--font-*` tokens in `globals.css`. Add a font in both places or it won't resolve.

**Motion** — `components/motion/Reveal.tsx` wraps content in a framer-motion fade/translate that honors `prefers-reduced-motion` (skips the animation entirely when set). Prefer `Reveal` over hand-rolling scroll animations so reduced-motion stays consistent.

**Locale** — `<html lang="ro">` and all copy/error messages are Romanian. New strings should be Romanian unless explicitly told otherwise.
