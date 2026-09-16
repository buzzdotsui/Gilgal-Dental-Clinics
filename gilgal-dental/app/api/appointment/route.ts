import { NextRequest, NextResponse } from "next/server";

// ─── Types ───────────────────────────────────────────────────────────────────

interface AppointmentPayload {
  fullName?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  preferredDate?: unknown;
  preferredTime?: unknown;
  message?: unknown;
  // Honeypot — should always be empty from real users
  website?: unknown;
}

interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof Omit<AppointmentPayload, "website">, string>>;
}

// ─── In-Memory Rate Limiter ───────────────────────────────────────────────────
// Limits to 3 submissions per IP per 15 minutes.
// For multi-instance deployments, replace with Redis/Upstash.

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfterSecs: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfterSecs: 0 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    const retryAfterSecs = Math.ceil((entry.resetAt - now) / 1000);
    return { allowed: false, retryAfterSecs };
  }

  entry.count += 1;
  return { allowed: true, retryAfterSecs: 0 };
}

// Cleanup stale entries occasionally (every ~100 requests)
let cleanupCounter = 0;
function maybeCleanup() {
  if (++cleanupCounter % 100 !== 0) return;
  const now = Date.now();
  for (const [key, val] of rateLimitMap.entries()) {
    if (now > val.resetAt) rateLimitMap.delete(key);
  }
}

// ─── Validation ───────────────────────────────────────────────────────────────

const SERVICE_OPTIONS = [
  "General Dentistry",
  "Implant Dentistry",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Restorative Dentistry",
  "Children's Dentistry",
  "Laser Teeth Whitening",
  "Other / Not Sure",
] as const;

const TIME_OPTIONS = [
  "Morning (9:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 3:00 PM)",
  "Late Afternoon (3:00 PM – 6:00 PM)",
] as const;

function validatePayload(body: AppointmentPayload): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  // fullName
  if (!body.fullName || typeof body.fullName !== "string" || !body.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (body.fullName.trim().length > 120) {
    errors.fullName = "Full name is too long.";
  }

  // phone
  if (!body.phone || typeof body.phone !== "string" || !body.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[\d\s+\-()]{7,25}$/.test(body.phone.trim())) {
    errors.phone = "Please provide a valid phone number.";
  }

  // email
  if (!body.email || typeof body.email !== "string" || !body.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
    errors.email = "Please provide a valid email address.";
  } else if (body.email.length > 254) {
    errors.email = "Email address is too long.";
  }

  // service
  if (!body.service || typeof body.service !== "string") {
    errors.service = "Please select a service.";
  } else if (!(SERVICE_OPTIONS as readonly string[]).includes(body.service)) {
    errors.service = "Please select a valid service.";
  }

  // preferredDate
  if (!body.preferredDate || typeof body.preferredDate !== "string") {
    errors.preferredDate = "Please select a preferred date.";
  } else {
    const selected = new Date(body.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(selected.getTime())) {
      errors.preferredDate = "Please provide a valid date.";
    } else if (selected < today) {
      errors.preferredDate = "Please select a date in the future.";
    }
  }

  // preferredTime
  if (!body.preferredTime || typeof body.preferredTime !== "string") {
    errors.preferredTime = "Please select a preferred time.";
  } else if (!(TIME_OPTIONS as readonly string[]).includes(body.preferredTime)) {
    errors.preferredTime = "Please select a valid time slot.";
  }

  // message (optional, max 600 chars)
  if (body.message !== undefined && body.message !== null && body.message !== "") {
    if (typeof body.message !== "string") {
      errors.message = "Invalid message format.";
    } else if (body.message.length > 600) {
      errors.message = "Message must be under 600 characters.";
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  maybeCleanup();

  // ── 1. Rate limit check ──────────────────────────────────────────────────
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  const rateCheck = checkRateLimit(ip);

  if (!rateCheck.allowed) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rateCheck.retryAfterSecs) },
      }
    );
  }

  // ── 2. Parse JSON body ────────────────────────────────────────────────────
  let body: AppointmentPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request format." },
      { status: 400 }
    );
  }

  // ── 3. Honeypot check ────────────────────────────────────────────────────
  // Real users never fill the hidden `website` field; bots do.
  if (body.website && String(body.website).trim() !== "") {
    // Return 200 to the bot so it doesn't retry — silently drop.
    return NextResponse.json({ success: true }, { status: 200 });
  }

  // ── 4. Server-side validation ─────────────────────────────────────────────
  const { valid, errors } = validatePayload(body);
  if (!valid) {
    return NextResponse.json(
      { success: false, error: "Validation failed.", fieldErrors: errors },
      { status: 422 }
    );
  }

  // ── 5. Process the submission ─────────────────────────────────────────────
  // Integration point: connect to email (Resend/Nodemailer), CRM, or database here.
  // Example: await sendNotificationEmail({ ...body }) — see lib/email/sendNotification.ts
  //
  // For now: log server-side only (no patient PII in response body).
  console.log("[Appointment Request] New submission received:", {
    service: body.service,
    preferredDate: body.preferredDate,
    preferredTime: body.preferredTime,
    // Do NOT log name, phone, email in production — remove this comment when connecting email
  });

  return NextResponse.json({ success: true }, { status: 200 });
}

// Reject all other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
