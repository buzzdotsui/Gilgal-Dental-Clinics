# Gilgal Dental Clinics — Website

Production-quality website for **Gilgal Dental Clinics**, a private dental practice located at 2 Olawale Daodu Road, off Kingsway Road, Ikoyi, Lagos, Nigeria.

Built with Next.js 16 App Router, TypeScript, Tailwind CSS v4, and Framer Motion.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Appointment Form](#appointment-form)
- [Email Notifications](#email-notifications)
- [SEO & Structured Data](#seo--structured-data)
- [Security](#security)
- [Performance](#performance)
- [Deployment](#deployment)
- [Content Rules](#content-rules)
- [Clinic Information](#clinic-information)

---

## Overview

This is a three-phase production build:

| Phase | Scope |
|---|---|
| **Phase 1** | Design system, homepage, navigation, hero, services grid, testimonials, WhatsApp integration |
| **Phase 2** | 14 internal pages — About, Services (×7), Our Dentist, Testimonials, FAQs, Book an Appointment, Contact |
| **Phase 3** | Production hardening — SEO, structured data, sitemap, robots.txt, OG image, API route, server-side validation, spam protection, security headers, 404/error pages, image compression, accessibility |

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.3.5 | Framework (App Router) |
| [React](https://react.dev) | 19 | UI library |
| [TypeScript](https://typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility CSS |
| [Framer Motion](https://framer.com/motion) | 13 | Animations |
| [Lucide React](https://lucide.dev) | 1 | Icons |
| [clsx](https://github.com/lukeed/clsx) | 2 | Conditional class names |

---

## Project Structure

```
gilgal-dental/
├── app/
│   ├── api/
│   │   └── appointment/
│   │       └── route.ts          # POST endpoint — validates, rate-limits, honeypot
│   ├── about/page.tsx
│   ├── book-an-appointment/page.tsx
│   ├── contact/page.tsx
│   ├── faqs/page.tsx
│   ├── our-dentist/page.tsx
│   ├── services/
│   │   ├── page.tsx              # Services overview
│   │   └── [slug]/page.tsx       # Dynamic service pages (×7)
│   ├── testimonials/page.tsx
│   ├── error.tsx                 # Global error boundary
│   ├── globals.css               # Design tokens, base styles
│   ├── layout.tsx                # Root layout — fonts, metadata, structured data
│   ├── not-found.tsx             # Branded 404 page
│   ├── opengraph-image.tsx       # Dynamic 1200×630 OG image
│   ├── page.tsx                  # Homepage
│   ├── robots.ts                 # robots.txt
│   └── sitemap.ts                # sitemap.xml
│
├── components/
│   ├── appointment/
│   │   ├── AppointmentForm.tsx   # 4-step form with honeypot + validation
│   │   ├── AppointmentSuccess.tsx
│   │   └── AppointmentError.tsx
│   ├── home/                     # Homepage sections
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── seo/
│   │   └── StructuredData.tsx    # JSON-LD Dentist schema
│   ├── services/
│   │   ├── ServicePageLayout.tsx # Server component template
│   │   └── ServiceHeroClient.tsx # Client hero with animations
│   ├── shared/
│   │   ├── Breadcrumb.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── InternalCTA.tsx
│   │   └── PageHero.tsx
│   └── ui/
│       ├── Button.tsx
│       └── WhatsAppButton.tsx
│
├── lib/
│   ├── appointment/
│   │   └── submitAppointment.ts  # Fetch layer → /api/appointment
│   └── data/
│       ├── clinicInfo.ts         # Single source of truth for all clinic data
│       ├── dentistData.ts
│       ├── faqsData.ts
│       ├── servicesData.ts
│       └── testimonialsData.ts
│
├── public/
│   └── images/
│       ├── logo.jpg
│       ├── dr-ugbo.png
│       └── hero/
│           ├── group-picture.png
│           ├── slideshow-1.jpg
│           ├── slideshow-2.png
│           └── slideshow-3.png
│
├── scripts/
│   └── compress-images.mjs       # One-off sharp compression script
│
├── .env.example                  # Variable names — never real values
├── next.config.ts
├── tailwind.config (via globals.css @theme)
└── tsconfig.json
```

---

## Pages & Routes

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage |
| `/about` | Static | About Gilgal |
| `/services` | Static | All services overview |
| `/services/general-dentistry` | SSG | General Dentistry |
| `/services/implant-dentistry` | SSG | Implant Dentistry |
| `/services/cosmetic-dentistry` | SSG | Cosmetic Dentistry |
| `/services/orthodontics` | SSG | Orthodontics |
| `/services/restorative-dentistry` | SSG | Restorative Dentistry |
| `/services/childrens-dentistry` | SSG | Children's Dentistry |
| `/services/laser-teeth-whitening` | SSG | Laser Teeth Whitening |
| `/our-dentist` | Static | Dr. Osaze Ugbo profile |
| `/testimonials` | Static | Patient reviews |
| `/faqs` | Static | Frequently asked questions |
| `/book-an-appointment` | Static | 4-step appointment form |
| `/contact` | Static | Contact info, hours, map link |
| `/api/appointment` | Dynamic | POST — form submission API |
| `/sitemap.xml` | Static | XML sitemap |
| `/robots.txt` | Static | Crawl rules |
| `/opengraph-image` | Dynamic | 1200×630 branded OG image |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
cd gilgal-dental
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

### Type check

```bash
npx tsc --noEmit
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values.

```bash
cp .env.example .env.local
```

| Variable | Purpose | Required for |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production domain for canonical URLs | Production SEO |
| `RESEND_API_KEY` | Email notification via Resend | Email notifications |
| `APPOINTMENT_NOTIFICATION_TO` | Clinic email to receive appointment requests | Email notifications |
| `SMTP_HOST` / `SMTP_USER` / `SMTP_PASS` | Alternative SMTP email | Email notifications |
| `UPSTASH_REDIS_REST_URL` / `TOKEN` | Redis-backed rate limiting for multi-instance deploys | Scalable rate limiting |
| `SENTRY_DSN` | Error tracking | Production monitoring |

> **Never commit `.env.local` to version control.** It is already listed in `.gitignore`.

---

## Appointment Form

The form is a 4-step wizard collecting:

1. **Your Details** — Full name, phone, email
2. **Preferences** — Service, preferred date, preferred time
3. **Message** — Optional additional information (max 600 chars)
4. **Review** — Summary + disclaimer + submit

### Flow

```
Client validates → POST /api/appointment → Server validates → Rate limit check → Honeypot check → Process
```

### Client-side validation

Runs on each step transition. Validates format, required fields, future date constraint.

### Server-side validation (`app/api/appointment/route.ts`)

Independently validates all fields server-side. Client validation is **never trusted** alone.

### Spam protection

| Method | Implementation |
|---|---|
| **Honeypot** | Hidden `<input name="website">` — bots fill it, real users don't. Filled = silent 200, no processing. |
| **Rate limiting** | Max 3 submissions per IP per 15 minutes. Returns `429` with `Retry-After` header. |
| **Input limits** | Name ≤120 chars, email ≤254, message ≤600. Service and time slot must match allowlist. |

### Submission states

| State | UI |
|---|---|
| Idle | Form |
| Submitting | Submit button disabled + "Submitting…" text |
| Success | `AppointmentSuccess` — summary + WhatsApp follow-up |
| Error | `AppointmentError` — Try Again, WhatsApp Us, Call the Clinic |

> **Submissions are requests, not confirmed appointments.** The clinic contacts the patient to confirm. This is clearly communicated in the form disclaimer and success state.

---

## Email Notifications

The API route at `app/api/appointment/route.ts` has a clearly marked integration point:

```ts
// ── 5. Process the submission ─────────────────────────────────────────────
// Integration point: connect to email (Resend/Nodemailer), CRM, or database here.
// Example: await sendNotificationEmail({ ...body }) — see lib/email/sendNotification.ts
```

To connect email:

1. Create `lib/email/sendNotification.ts`
2. Add your provider credentials to `.env.local`
3. Call `sendNotificationEmail(body)` at the integration point

### Recommended: Resend

```bash
npm install resend
```

```ts
// lib/email/sendNotification.ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendNotificationEmail(data: AppointmentPayload) {
  await resend.emails.send({
    from: "appointments@gilgaldentalclinics.com",
    to: process.env.APPOINTMENT_NOTIFICATION_TO!,
    subject: `New Appointment Request — ${data.service}`,
    text: `Name: ${data.fullName}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\nDate: ${data.preferredDate}\nTime: ${data.preferredTime}\nMessage: ${data.message}`,
  });
}
```

---

## SEO & Structured Data

### Per-page metadata

Every page has a unique `title` and `description` defined via Next.js `export const metadata`. Service pages use `metaTitle` and `metaDescription` from `lib/data/servicesData.ts`.

### Structured data

`components/seo/StructuredData.tsx` injects `@type: "Dentist"` JSON-LD on every page containing:

- Clinic name, address, telephone, URL
- Opening hours (Mon–Fri 9–6, Sat 9–3, Sun closed)
- Social profiles (Instagram, Facebook)
- Dr. Osaze Ugbo as `employee`

Only verified information is included. No fabricated ratings or awards.

### Sitemap

Auto-generated at `/sitemap.xml`. All 15 public routes included.

### OG image

Server-generated at `/opengraph-image`. 1200×630, navy brand background, clinic name and tagline. Auto-applied to all pages as the default `og:image`.

### Update the production domain

Before going live, update the domain in:

- `app/layout.tsx` → `metadataBase`
- `app/sitemap.ts` → `BASE_URL`
- `components/seo/StructuredData.tsx` → `url` and `"@id"`

---

## Security

| Measure | Implementation |
|---|---|
| Security headers | `next.config.ts` — X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, XSS-Protection |
| Server validation | `app/api/appointment/route.ts` — full independent re-validation |
| Honeypot | Silent drop of bot submissions |
| Rate limiting | Per-IP sliding window, in-memory (upgrade to Redis for multi-instance) |
| No secrets in client | All sensitive values in `.env.local`, never `NEXT_PUBLIC_` prefixed |
| No PII in logs | API logs `service`, `date`, `time` only — not name, phone, or email |
| Error boundary | `app/error.tsx` — no stack traces exposed to users |

---

## Performance

### Images

All images served via `next/image` with automatic AVIF/WebP conversion. Hero images pre-compressed with sharp (see `scripts/compress-images.mjs`):

| Image | Size after compression |
|---|---|
| `hero/slideshow-2.png` | ~1.0 MB (was 2.5 MB) |
| `hero/slideshow-3.png` | ~1.0 MB (was 2.7 MB) |
| `hero/group-picture.png` | ~0.8 MB (was 2.3 MB) |
| `dr-ugbo.png` | ~0.4 MB (was 1.9 MB) |

### Fonts

Loaded via `next/font/google` — no external Google Fonts `@import`. Weights: 400, 500, 600, 700 only.

### Server vs client components

Service page layouts, structured data, breadcrumbs, FAQ accordions, and all static sections are **Server Components**. Only interactive elements (header, mobile menu, appointment form, animations) are Client Components.

### Animations

All Framer Motion animations are `opacity`/`transform` only. CSS override ensures `prefers-reduced-motion: reduce` users get zero animation duration without any JavaScript.

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Set environment variables in the Vercel dashboard under **Project Settings → Environment Variables**.

### Self-hosted (Node.js)

```bash
npm run build
npm run start        # runs on port 3000 by default
```

Use a reverse proxy (nginx, Caddy) in front for HTTPS, compression, and caching.

### Important before going live

1. Update the production domain in `layout.tsx`, `sitemap.ts`, and `StructuredData.tsx`
2. Add real email credentials to `.env.local`
3. Verify all phone numbers and contact details are live
4. Submit sitemap to Google Search Console
5. Verify structured data at [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

---

## Content Rules

The following rules apply to all content on this website:

> **Do not fabricate any information.**

This means no invented:
- Doctors, staff, or specialists
- Qualifications or awards beyond what is supplied
- Branches or locations
- HMO or insurance partnerships
- Prices or payment plans
- Patient statistics or success rates
- Medical claims or treatment guarantees
- Testimonials or review ratings

All clinic information is centralised in `lib/data/clinicInfo.ts`. **This is the single source of truth.** Do not hardcode clinic contact information anywhere else.

---

## Clinic Information

All data centralised in [`lib/data/clinicInfo.ts`](lib/data/clinicInfo.ts).

| Field | Value |
|---|---|
| **Name** | Gilgal Dental Clinics |
| **Address** | 2 Olawale Daodu Road, off Kingsway Road, Ikoyi, Lagos, Nigeria |
| **Primary phone** | +234 809 990 6233 |
| **Other phones** | +234 1 293 0857, +234 802 303 7638, +234 802 668 3131 |
| **General email** | gilgaldentalclinics@gmail.com |
| **Doctor email** | osazeugbo@gmail.com |
| **Hours** | Mon–Fri 9:00 AM – 6:00 PM · Sat & Public Holidays 9:00 AM – 3:00 PM · Sun Closed |
| **WhatsApp** | +234 809 990 6233 |
| **Instagram** | [@gilgaldental.clinic](https://www.instagram.com/gilgaldental.clinic/) |
| **Facebook** | [gilgaldental.clinics](https://web.facebook.com/gilgaldental.clinics/) |

### Principal Dentist

| Field | Value |
|---|---|
| **Name** | Dr. Osaze Ugbo |
| **Title** | Principal Dentist |
| **Experience** | 17+ years |
| **Implants placed** | 200+ |
| **Training** | Eastman Dental Institute (UK), BICON Institute (USA) |
| **Affiliation** | Affiliate Member, American Dental Association |

---

## License

Private — for Gilgal Dental Clinics only. Not for redistribution.
