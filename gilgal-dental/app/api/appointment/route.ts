import { NextRequest, NextResponse } from "next/server";

interface AppointmentPayload {
  fullName?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  preferredDate?: unknown;
  preferredTime?: unknown;
  message?: unknown;
  website?: unknown;
}

interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof Omit<AppointmentPayload, "website">, string>>;
}

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUEST_BYTES = 16 * 1024;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

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
  "Morning (9:00 AM \u2013 12:00 PM)",
  "Afternoon (12:00 PM \u2013 3:00 PM)",
  "Late Afternoon (3:00 PM \u2013 6:00 PM)",
] as const;

function apiResponse(
  body: Record<string, unknown>,
  status: number,
  headers: Record<string, string> = {}
) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfterSecs: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfterSecs: 0 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfterSecs: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { allowed: true, retryAfterSecs: 0 };
}

let cleanupCounter = 0;
function maybeCleanup() {
  if (++cleanupCounter % 100 !== 0) return;
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetAt) rateLimitMap.delete(key);
  }
}

function isValidFutureDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

  const parsed = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) {
    return false;
  }

  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const dateParts = Object.fromEntries(parts.map(({ type, value: part }) => [type, part]));
  const lagosDate = `${dateParts.year}-${dateParts.month}-${dateParts.day}`;

  return value >= lagosDate;
}

function validatePayload(body: AppointmentPayload): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  if (!body.fullName || typeof body.fullName !== "string" || !body.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (body.fullName.trim().length > 120) {
    errors.fullName = "Full name is too long.";
  }

  if (!body.phone || typeof body.phone !== "string" || !body.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[\d\s+\-()]{7,25}$/.test(body.phone.trim())) {
    errors.phone = "Please provide a valid phone number.";
  }

  if (!body.email || typeof body.email !== "string" || !body.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
    errors.email = "Please provide a valid email address.";
  } else if (body.email.length > 254) {
    errors.email = "Email address is too long.";
  }

  if (!body.service || typeof body.service !== "string") {
    errors.service = "Please select a service.";
  } else if (!(SERVICE_OPTIONS as readonly string[]).includes(body.service)) {
    errors.service = "Please select a valid service.";
  }

  if (!body.preferredDate || typeof body.preferredDate !== "string") {
    errors.preferredDate = "Please select a preferred date.";
  } else if (!isValidFutureDate(body.preferredDate)) {
    errors.preferredDate = "Please select a valid future date.";
  }

  if (!body.preferredTime || typeof body.preferredTime !== "string") {
    errors.preferredTime = "Please select a preferred time.";
  } else if (!(TIME_OPTIONS as readonly string[]).includes(body.preferredTime)) {
    errors.preferredTime = "Please select a valid time slot.";
  }

  if (body.message !== undefined && body.message !== null && body.message !== "") {
    if (typeof body.message !== "string") {
      errors.message = "Invalid message format.";
    } else if (body.message.length > 600) {
      errors.message = "Message must be under 600 characters.";
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

export async function POST(request: NextRequest) {
  maybeCleanup();

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  const rateCheck = checkRateLimit(ip);

  if (!rateCheck.allowed) {
    return apiResponse(
      { success: false, error: "Too many requests. Please try again later." },
      429,
      { "Retry-After": String(rateCheck.retryAfterSecs) }
    );
  }

  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return apiResponse(
      { success: false, error: "Content-Type must be application/json." },
      415
    );
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return apiResponse(
      { success: false, error: "Request payload is too large." },
      413
    );
  }

  let body: AppointmentPayload;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
      return apiResponse(
        { success: false, error: "Request payload is too large." },
        413
      );
    }

    const parsed: unknown = JSON.parse(rawBody);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return apiResponse(
        { success: false, error: "Invalid request format." },
        400
      );
    }
    body = parsed as AppointmentPayload;
  } catch {
    return apiResponse(
      { success: false, error: "Invalid request format." },
      400
    );
  }

  if (body.website && String(body.website).trim() !== "") {
    return apiResponse({ success: true }, 200);
  }

  const { valid, errors } = validatePayload(body);
  if (!valid) {
    return apiResponse(
      { success: false, error: "Validation failed.", fieldErrors: errors },
      422
    );
  }

  // The deployment integration is responsible for handling accepted requests.
  // Do not log appointment or patient data from this route.
  return apiResponse({ success: true }, 200);
}

export async function GET() {
  return apiResponse({ error: "Method not allowed." }, 405);
}
