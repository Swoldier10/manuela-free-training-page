# Manuela Vlașin — Landing "Antrenamente Gratuite"

Single-page Next.js 15 landing page for capturing email leads in exchange for two free 15-minute bodyweight workouts (abdomen + fesieri). Built for Romanian-speaking audience.

## Stack

- **Next.js 15** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** with custom olive/cream/gold brand tokens
- **Resend** for transactional email + **React Email** templates
- **react-hook-form** + **zod** for form validation
- **framer-motion** for reveal animations
- **Lucide React** for icons
- **next/font** self-hosting **Playfair Display** + **Inter**

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY if not already set
npm run dev
```

Visit <http://localhost:3000>.

## Environment variables

See `.env.example`. The three that matter:

| Key | Purpose |
| --- | --- |
| `RESEND_API_KEY` | **Required.** Resend API key. |
| `RESEND_FROM_EMAIL` | Sender address. Defaults to `onboarding@resend.dev` (Resend's built-in dev sender). Swap for `antrenamente@manuelavlasin.ro` once the domain is verified in Resend (see below). |
| `RESEND_NOTIFY_BCC` | Optional. Manuela's personal email — receives a BCC of every welcome email so she can see each new lead in real time. Leave empty to disable. |

## Swapping to a branded sender domain (post-launch)

1. In the Resend dashboard → **Domains** → **Add Domain** → enter `manuelavlasin.ro` (or chosen domain).
2. Copy the DNS records (SPF, DKIM, return-path) into the registrar.
3. Wait for verification (usually < 15 min).
4. Update `.env.local`:
   ```
   RESEND_FROM_EMAIL=antrenamente@manuelavlasin.ro
   RESEND_FROM_NAME=Manuela Vlașin
   ```
5. Redeploy.

## Plugging in the demo video

The hero links to a video placeholder. To swap in the real video, edit `components/sections/VideoSection.tsx`:

```ts
const VIDEO_URL = "https://cdn.example.com/manuela-demo.mp4";
```

Accepts any `<video>`-compatible URL (MP4/WebM). For YouTube/Vimeo, replace the `<video>` element with an `<iframe>`.

## Brand tokens

Defined in `app/globals.css` under `@theme`:

- `--color-olive-{950..500}` — backgrounds, surfaces
- `--color-cream-{50..300}` — typography on dark
- `--color-gold-{600..300}` — accents, CTAs, focus rings
- `--font-display` — Playfair Display (headings)
- `--font-sans` — Inter (body, UI)

## File map

```
app/
  api/subscribe/route.ts     POST → Resend
  layout.tsx                 Fonts + metadata + Romanian locale
  page.tsx                   Section composition
  globals.css                Brand tokens + utility classes
  icon.tsx                   Dynamic favicon (VM monogram)
  opengraph-image.tsx        Dynamic OG share card
components/
  sections/                  All page sections
  ui/                        Reusable UI (LeadForm, CtaButton, CountdownTimer, Logo)
  motion/Reveal.tsx          prefers-reduced-motion-aware scroll reveal
lib/
  schema.ts                  Shared zod schema (client + server)
  resend.ts                  Resend client + from/bcc helpers
  emailTemplate.tsx          React Email welcome message
  rateLimit.ts               In-memory per-IP rate limiter (5 req / 10 min)
  utils.ts                   cn(), prefersReducedMotion()
public/
  logo-vm.png                Client's VM monogram
```

## Production build

```bash
npm run build
npm run start
```
