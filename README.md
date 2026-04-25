# Manuela Vlașin — Landing "Antrenamente Gratuite"

Lead-capture funnel for two free 15-minute bodyweight workouts (abdomen + fesieri), with two paid upsell paths (`/offer-14-day`, `/offer-7-day`) and a three-state thank-you page. Built for a Romanian audience.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
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

See `.env.example`. Validated at boot by `lib/env.ts` — the app refuses to start if anything required is missing or malformed.

| Key | Purpose |
| --- | --- |
| `RESEND_API_KEY` | **Required.** Resend API key. |
| `RESEND_FROM_EMAIL` | Sender address. Defaults to `onboarding@resend.dev` (Resend's built-in dev sender, which only delivers to the registered Resend account owner). Swap for `antrenamente@manuelavlasin.ro` once the domain is verified in Resend (see below). |
| `RESEND_FROM_NAME` | Sender display name. Defaults to `Manuela Vlasin`. |
| `RESEND_NOTIFY_BCC` | Optional. BCC address — receives a copy of every welcome email. Leave empty to disable. |
| `PLAN_14_ID` | **Required.** Opaque 32-char hex used as the `?p=` value when redirecting to `/thank-you` after the 14-day plan checkout. Generate with `node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"`. Must match the success URL configured in the Stripe Payment Link. |
| `PLAN_7_ID` | **Required.** Same shape as `PLAN_14_ID`, used for the 7-day plan. |
| `NEXT_PUBLIC_SITE_URL` | Public origin used in metadata + the PDF download links inside the welcome email. Set to the real production URL on deploy. |

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

## Funnel

```
/                    Hero + lead form (name + email → sessionStorage; navigates)
/offer-14-day        14-day nutrition plan upsell (89 lei)
/offer-7-day         7-day nutrition plan downsell (39 lei)
/thank-you?p=…       Renders one of three completion states based on the
                     opaque plan ID; the resolved plan is also passed to the
                     server action that fires the Resend welcome email.
```

The Stripe Payment Link's success URL must be `…/thank-you?p=$PLAN_*_ID` so the right thank-you copy renders and the right email goes out.

## Demo video on the hero

The hero embeds `public/videos/intro.mp4` with `public/images/video-poster.jpg` as the poster (see `components/ui/VideoPlayer.tsx`). Swap either file in place to replace.

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
  layout.tsx                 Fonts + metadata + Romanian locale
  page.tsx                   Hero + funnel sections
  offer-14-day/page.tsx      14-day upsell
  offer-7-day/page.tsx       7-day downsell
  thank-you/page.tsx         Three-case completion page
  thank-you/actions.ts       sendThankYouEmail server action (Resend)
  globals.css                Brand tokens + utility classes
  icon.tsx                   Dynamic favicon (VM monogram)
  opengraph-image.tsx        Dynamic OG share card
components/
  sections/                  Landing-page sections
  ui/                        LeadForm, CtaButton, CountdownTimer, Logo,
                             VideoPlayer, Greeting (sessionStorage-backed),
                             TriggerEmail (fires the action on /thank-you)
  motion/Reveal.tsx          prefers-reduced-motion-aware scroll reveal
lib/
  env.ts                     zod-validated server env (throws at import)
  schema.ts                  Shared zod schema (client + server)
  plans.ts                   Plan ID resolver + Stripe-success URL builders
  storage.ts                 sessionStorage / localStorage key constants
  resend.ts                  Resend client + from/bcc helpers
  emailTemplate.tsx          React Email welcome message (3 variants)
  rateLimit.ts               In-memory per-IP limiter (5 req / 10 min) —
                             swap for Upstash before scaling
  utils.ts                   cn()
public/
  images/                    logo-vm.png, video-poster.jpg, meal-plan-*.jpg
  videos/intro.mp4           Hero presentation video
  docs/                      Plan PDFs (linked from the welcome email)
```

## Production build

```bash
npm run build
npm run start
```
