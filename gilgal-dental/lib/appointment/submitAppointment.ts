// ─── Appointment Submission Layer ────────────────────────────────────────────
// Calls /api/appointment — a POST route with server-side validation,
// honeypot check, and rate limiting.
// To add email notifications: implement lib/email/sendNotification.ts
// and call it inside app/api/appointment/route.ts.

export interface AppointmentFormData {
  // Step 1: Your Details
  fullName: string;
  phone: string;
  email: string;
  // Step 2: Preferences
  service: string;
  preferredDate: string;
  preferredTime: string;
  // Step 3: Message
  message: string;
  // Anti-spam honeypot (always empty for real users)
  website?: string;
}

export interface SubmissionResult {
  success: boolean;
  error?: string;
}

/**
 * Submit an appointment request to the server-side API route.
 * The API validates input, checks the honeypot, and applies rate limiting.
 */
export async function submitAppointment(
  data: AppointmentFormData
): Promise<SubmissionResult> {
  try {
    const response = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === 429) {
      return {
        success: false,
        error: "Too many requests. Please wait a few minutes before trying again.",
      };
    }

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result?.error ?? "Something went wrong. Please try again.",
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Unable to connect. Please check your connection and try again.",
    };
  }
}

export const serviceOptions = [
  "General Dentistry",
  "Implant Dentistry",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Restorative Dentistry",
  "Children's Dentistry",
  "Laser Teeth Whitening",
  "Other / Not Sure",
] as const;

export const timeSlotOptions = [
  "Morning (9:00 AM \u2013 12:00 PM)",
  "Afternoon (12:00 PM \u2013 3:00 PM)",
  "Late Afternoon (3:00 PM \u2013 6:00 PM)",
] as const;
