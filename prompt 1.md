# GILGAL DENTAL CLINICS

## PHASE 1 — FOUNDATION, DESIGN SYSTEM & HOMEPAGE

You are working as a **senior product designer and senior frontend engineer**.

You are building a genuinely production-ready website for **Gilgal Dental Clinics**, a dental practice in Ikoyi, Lagos, Nigeria.

This is not a generic AI-generated dental landing page.

The eventual website should be good enough to become the clinic's real website and should feel like a **high-value premium healthcare product**.

Your responsibility in this phase is to establish the **visual language, technical foundation, reusable component system and complete homepage**.

Do not move into the full internal-page implementation yet.

---

# 1. TECHNOLOGY

Use:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React or an equivalent lightweight icon library

Use the Next.js App Router.

Use strict TypeScript.

Prefer Server Components by default.

Only use Client Components where interactivity actually requires them.

Do not introduce unnecessary dependencies.

Do not use:

* Bootstrap
* jQuery
* generic website builders
* bloated component libraries
* template-style page generators

The code must be clean, modular and production-oriented.

---

# 2. PROJECT OBJECTIVE

Build the first complete version of the Gilgal Dental Clinics website foundation.

This phase must establish:

* brand system
* typography
* color system
* spacing
* buttons
* cards
* navigation
* responsive behavior
* animation language
* reusable sections
* homepage
* footer
* mobile navigation
* CTA system

Everything created here should be reusable in Phase 2.

---

# 3. BRAND

## Clinic

**Gilgal Dental Clinics**

## Location

**2 Olawale Daodu Road, off Kingsway Road, Ikoyi, Lagos, Nigeria**

## Primary phone

**+234 809 990 6233**

## General email

**[gilgaldentalclinics@gmail.com](mailto:gilgaldentalclinics@gmail.com)**

## Primary CTA

**Book an Appointment**

## Secondary CTA

**Book via WhatsApp**

WhatsApp number:

**+234 809 990 6233**

---

# 4. BRAND COLORS

Primary:

`#013565`

Secondary:

`#FDFEFF`

You may introduce a restrained complementary color.

Use it only when it improves hierarchy.

A suitable supporting palette may include:

* deep navy/blue
* soft blue-gray
* cool neutral gray
* subtle warm neutral

Do NOT introduce bright green, medical teal, neon blue or random accent colors.

The overall palette should feel:

**clean + clinical + premium + warm**

Do not make every element blue.

Use white space heavily.

---

# 5. DESIGN DIRECTION

The visual target is:

**Established private dental practice + modern healthcare + premium editorial design**

NOT:

* SaaS website
* startup landing page
* generic dentist template
* hospital government website
* overly luxurious hotel-style design
* flashy AI website

The design should feel like a real clinic that has existed for years but has finally received a modern digital presence.

The site should communicate:

* trust
* experience
* warmth
* professionalism
* modern dentistry
* patient care
* confidence

Use restraint.

---

# 6. TYPOGRAPHY

Choose one high-quality modern sans-serif.

Good options:

* Inter
* Manrope
* DM Sans
* Plus Jakarta Sans

Use one primary family consistently.

Establish a clear hierarchy:

* display heading
* section heading
* card heading
* body
* small label
* metadata

Do not use enormous typography simply because the current web-design trend does.

The site must remain readable on mobile.

---

# 7. GLOBAL DESIGN TOKENS

Create a consistent system for:

* colors
* typography
* border radius
* shadows
* spacing
* container widths
* transitions

Avoid arbitrary values scattered throughout components.

Create reusable classes/utilities where appropriate.

Recommended design language:

* subtle borders
* soft shadows
* rounded but not cartoonishly rounded cards
* generous spacing
* strong alignment
* clear hierarchy

---

# 8. LOGO / REAL ASSETS

The project has real Gilgal assets available locally.

Do NOT replace the logo with text.

Do NOT create a fake logo.

Do NOT use AI-generated people.

Do NOT use random stock dental photography.

Use the supplied Gilgal assets when available.

The asset directory contains:

```text
Gilgal Dental Clinic/
├── DR PIC/
│   ├── LOGO.jpg
│   └── unnamed.webp
│
└── Hero section Slideshow pics/
    ├── group PICTURE.jpeg
    ├── slideshow 1.jpg
    ├── slideshow 2.webp
    └── slideshow 3.webp
```

Treat these as the authentic visual assets for the clinic.

Do not alter Dr. Osaze Ugbo's appearance.

Do not fabricate additional staff.

---

# 9. NAVIGATION

Build a premium responsive navbar.

Desktop structure:

**Logo**

Home
About
Services
Our Dentist
FAQs
Contact

Then:

**Book an Appointment**

The CTA should be visually prominent but not obnoxious.

The navbar should become sticky after scrolling.

On scroll:

* slightly reduce height
* maintain clear logo visibility
* use subtle background/border transition

Do not create an oversized glassmorphism navbar.

---

# 10. MOBILE NAVIGATION

Build a proper mobile menu.

It should include:

* Home
* About
* Services
* Our Dentist
* FAQs
* Contact
* Book an Appointment

Use Framer Motion for a subtle entrance/exit.

The menu must:

* trap focus appropriately
* be keyboard accessible
* close when a navigation item is selected
* not create horizontal overflow

---

# 11. HERO SECTION

The hero is the most important visual section.

Do NOT use:

> “Your Smile, Our Passion.”

Do not use generic dental marketing clichés.

Use a clinic-specific positioning direction.

Recommended headline:

# Experienced dental care, centered around you.

Supporting copy:

**Comprehensive dental care in a relaxed, friendly environment in Ikoyi, Lagos.**

Primary CTA:

**Book an Appointment**

Secondary CTA:

**Book via WhatsApp**

Include a subtle location/trust indicator.

For example:

**Ikoyi, Lagos · Monday–Friday 9AM–6PM**

Do not overcrowd the hero.

---

# 12. HERO VISUAL

Use the supplied clinic imagery.

You may create a refined image composition or slideshow using the provided assets.

If implementing a slideshow:

* use 3–4 supplied images
* subtle crossfade
* slow transition
* no aggressive carousel movement
* accessible controls if interactive
* pause/reduce animation when reduced-motion is enabled

Do not put text over visually busy areas if it harms readability.

Use a tasteful overlay only where necessary.

Do not darken the entire image excessively.

---

# 13. HERO LAYOUT

Desktop should feel editorial and premium.

Potential composition:

Left:

Eyebrow / location

Headline

Supporting copy

CTAs

Right:

Large clinic image / image composition

Optional small floating trust card.

Do not create unnecessary floating cards just for decoration.

The layout should breathe.

On mobile:

Stack content naturally.

Headline first.

Copy second.

CTA third.

Image after.

Ensure the primary CTA is visible without excessive scrolling.

---

# 14. TRUST STRIP

Immediately after the hero, introduce a compact trust section.

Use only verified clinic information:

### 17+

Years of experience

### 200+

Implants successfully completed

### 7

Core dental service areas

### Ikoyi

Lagos location

Important:

These numbers are based on supplied clinic information.

Do not invent additional statistics.

Do not present them as independently verified research.

Use subtle animation if appropriate.

The numbers should not look like a SaaS analytics dashboard.

---

# 15. INTRODUCTION SECTION

Create a section introducing Gilgal.

Headline direction:

**A dental practice built around better patient experiences.**

Content should communicate the clinic's existing positioning:

* family-friendly care
* experienced professionals
* modern dental techniques
* relaxed environment
* comprehensive dental services

Do not exaggerate.

Do not say:

“best dental clinic”

“leading dental clinic”

“number one”

or similar unsupported claims.

Use natural professional language.

---

# 16. SERVICES PREVIEW

Create a homepage services section.

Headline:

**Dental care for every stage of your smile.**

Supporting copy should be concise.

Display these services:

1. General Dentistry
2. Implant Dentistry
3. Cosmetic Dentistry
4. Orthodontics
5. Restorative Dentistry
6. Children's Dentistry
7. Laser Teeth Whitening

Each should be a reusable `ServiceCard`.

Each card should include:

* icon
* title
* short description
* subtle hover interaction
* arrow/link indicator

The cards should eventually link to their respective service pages.

For this phase, create the links even if the internal pages are implemented in Phase 2.

---

# 17. SERVICE CARD DESIGN

Do not make seven identical giant boxes.

Create hierarchy.

Use:

* number or subtle category marker
* icon
* title
* short copy
* arrow

Possible interaction:

Resting state:
minimal border and white background.

Hover:
slight elevation
subtle background shift
arrow movement
small image/icon transition

Keep it sophisticated.

---

# 18. DOCTOR INTRODUCTION

Create a homepage section for:

# Dr. Osaze Ugbo

Label:

**Principal Dentist**

Use the supplied doctor photograph.

Content:

Dr Osaze Ugbo has more than 17 years experience and is passionate about dentistry.

He practices General Dentistry with a special interest in Restorative Dentistry.

Existing clinic information states that he has successfully completed more than 200 implants.

It also states that he attended courses at the Eastman Dental Institute in the United Kingdom and BICON Institute in the USA, and is an affiliate member of the American Dental Association.

Do not add qualifications that are not supplied.

Do not embellish.

CTA:

**Meet Dr. Ugbo**

This will eventually link to `/doctor`.

---

# 19. PATIENT EXPERIENCE SECTION

Create a section communicating the clinic's patient-centered philosophy.

Use themes from the supplied real reviews:

* caring treatment
* detailed explanations
* friendly service
* comfortable environment
* modern equipment
* family-friendly care

Do not invent testimonials.

Do not fabricate statistics about patient satisfaction.

This section should visually reinforce:

**“You are dealing with people who care about the patient experience.”**

---

# 20. TESTIMONIAL PREVIEW

Use real review material supplied for this project.

Examples of themes from actual reviews include:

* detailed explanations during treatment
* caring and patient dentist
* comfortable environment
* modern equipment
* positive experiences with scaling, polishing, fillings and dentures

Use authentic wording or carefully preserve the meaning of the supplied review excerpts.

Do not fabricate.

Do not create five-star reviews that were not provided.

Do not invent reviewer names.

If the full review metadata is not available, do not fabricate it.

Create a reusable `TestimonialCard`.

Phase 2 can expand the testimonial experience.

---

# 21. APPOINTMENT CTA SECTION

Create a strong conversion section near the bottom of the homepage.

Headline direction:

**Ready to take care of your smile?**

Supporting copy:

**Request an appointment with Gilgal Dental Clinics in Ikoyi, Lagos.**

Primary:

**Book an Appointment**

Secondary:

**Book via WhatsApp**

Keep this section visually distinct using the Gilgal blue.

Do not make it look like a giant advertisement.

---

# 22. CONTACT PREVIEW

Create a homepage contact section.

Include:

**Gilgal Dental Clinics**

**2 Olawale Daodu Road, off Kingsway Road, Ikoyi, Lagos, Nigeria**

Phone:

**+234 809 990 6233**

Email:

**[gilgaldentalclinics@gmail.com](mailto:gilgaldentalclinics@gmail.com)**

Hours:

Monday–Friday
9:00 AM–6:00 PM

Saturday & Public Holidays
9:00 AM–3:00 PM

Sunday
Closed

Include a map placeholder/component architecture that can later use Google Maps.

Do not invent map coordinates.

---

# 23. WHATSAPP BUTTON

Create a reusable WhatsApp CTA component.

Number:

**+234 809 990 6233**

Use a prefilled message:

> Hello Gilgal Dental Clinics, I would like to book an appointment. Please let me know the available dates and times.

The component should be reusable throughout the website.

On desktop it can appear as a normal CTA.

On mobile, consider a subtle sticky contact action.

Do not make it cover content.

---

# 24. FOOTER

Build a complete premium footer.

Include:

### Gilgal Dental Clinics

Short description.

### Navigation

Home
About
Services
Our Dentist
FAQs
Contact

### Services

General Dentistry
Implant Dentistry
Cosmetic Dentistry
Orthodontics
Restorative Dentistry
Children's Dentistry
Laser Teeth Whitening

### Contact

Address
Phone
Email
Opening hours

### Social

Instagram:
https://www.instagram.com/gilgaldental.clinic/

Facebook:
https://web.facebook.com/gilgaldental.clinics/

### CTA

Book an Appointment

Include copyright.

Include Privacy Policy placeholder route.

Do not fabricate legal text yet.

---

# 25. RESPONSIVE DESIGN

The homepage must be designed intentionally for:

* 320px
* 375px
* 390px
* 414px
* 768px
* 1024px
* 1280px
* 1440px+
* large desktop screens

Do not simply shrink desktop.

Recompose sections for mobile.

Pay particular attention to:

* hero
* navbar
* services grid
* doctor section
* testimonial cards
* appointment CTA
* footer

No horizontal scrolling.

---

# 26. ANIMATION SYSTEM

Use Framer Motion.

Animation philosophy:

**subtle + purposeful + premium**

Use:

* fade/slide entrance
* staggered service cards
* image reveal
* subtle button hover
* navbar transition
* testimonial transitions
* hero transitions

Do NOT:

* bounce everything
* use excessive parallax
* animate every word
* use huge zoom effects
* make the website feel like a tech demo

Respect:

`prefers-reduced-motion`

---

# 27. ACCESSIBILITY

Implement:

* semantic HTML
* correct heading hierarchy
* alt text
* keyboard navigation
* focus states
* accessible buttons
* accessible mobile menu
* sufficient contrast
* reduced-motion support

The logo should have useful alt text.

Decorative images should not create unnecessary screen-reader noise.

---

# 28. PERFORMANCE

Use Next.js image optimization.

Avoid huge unoptimized images.

Lazy-load below-the-fold imagery where appropriate.

Avoid unnecessary JavaScript.

Keep server components where possible.

Do not introduce unnecessary third-party scripts.

Avoid layout shifts.

---

# 29. SEO FOUNDATION

For the homepage, implement metadata around:

**Gilgal Dental Clinics | Dental Care in Ikoyi, Lagos**

Description should naturally mention:

* dental care
* Ikoyi
* Lagos
* appointments
* major service categories

Do not keyword stuff.

Implement:

* title
* description
* canonical architecture
* Open Graph foundation
* Twitter/X metadata foundation
* semantic headings

Full structured data and complete SEO hardening will be handled in Phase 3.

---

# 30. COMPONENT ARCHITECTURE

Create reusable components.

Suggested structure:

```text
components/
├── layout/
│   ├── Header
│   ├── MobileMenu
│   ├── Footer
│   └── AnnouncementBar
│
├── ui/
│   ├── Button
│   ├── SectionHeading
│   ├── ServiceCard
│   ├── TestimonialCard
│   └── WhatsAppButton
│
├── home/
│   ├── Hero
│   ├── TrustStats
│   ├── Introduction
│   ├── ServicesPreview
│   ├── DoctorPreview
│   ├── PatientExperience
│   ├── TestimonialsPreview
│   ├── AppointmentCTA
│   └── ContactPreview
```

Adapt the architecture if a better structure emerges.

Do not over-engineer.

---

# 31. CONTENT RULE

Do not use:

* Lorem ipsum
* fake testimonials
* fake statistics
* placeholder doctors
* fake awards
* fake certifications
* fake HMO logos
* fake partner logos
* fake patient images
* invented services

If something is not known, omit it.

Accuracy is more important than filling every possible section.

---

# 32. IMPORTANT MEDICAL CONTENT RULE

This is a real healthcare website.

Do not provide diagnosis.

Do not guarantee outcomes.

Do not claim:

“pain-free”

“100% success”

“guaranteed results”

or other unsupported claims.

Keep content educational and patient-friendly.

---

# 33. QUALITY BAR

Before finishing Phase 1, inspect the website as if you were:

### A prospective patient

Can I immediately understand:

* what this clinic is?
* where it is?
* what it offers?
* who the dentist is?
* how to book?

### Dr. Ugbo

Does this actually feel like my clinic?

### A professional web designer

Does this look intentionally designed?

### A frontend engineer

Is the code clean and reusable?

### A mobile user

Can I book/contact the clinic without fighting the interface?

---

# 34. DO NOT STOP AT A BASIC LANDING PAGE

The homepage should have enough depth to feel like the beginning of a real production website.

Do not produce:

Hero → three cards → footer.

The homepage needs a coherent narrative:

**Discover → Trust → Understand → Explore Services → Meet the Dentist → Hear from Patients → Book**

---

# 35. FINAL PHASE-1 DELIVERABLE

At the end of this phase, the project should have:

* complete responsive homepage
* responsive navbar
* mobile menu
* footer
* design system
* typography system
* color system
* reusable buttons
* reusable service cards
* reusable testimonial cards
* reusable CTA components
* reusable WhatsApp CTA
* doctor preview
* services preview
* appointment CTA
* contact preview
* Framer Motion animation system
* responsive behavior
* basic homepage SEO
* clean TypeScript
* no console errors
* no broken navigation
* no obvious placeholder content

Do NOT proceed into full service-page implementation, appointment backend, detailed FAQ, doctor page or production hardening yet.

Those belong to later phases.

The result of this phase should already look like a **serious, premium dental clinic website**, not a prototype.

Build with restraint.

Build with accuracy.

Build with real content.

Build for patients.

Build for production.
