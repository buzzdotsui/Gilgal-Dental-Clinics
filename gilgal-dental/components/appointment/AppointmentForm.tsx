"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import {
  AppointmentFormData,
  submitAppointment,
  serviceOptions,
  timeSlotOptions,
} from "@/lib/appointment/submitAppointment";
import { buildAppointmentWhatsAppUrl } from "@/lib/data/clinicInfo";
import AppointmentSuccess from "./AppointmentSuccess";
import AppointmentError from "./AppointmentError";

// ─── Validation ─────────────────────────────────────────────────

interface FieldErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}

function validateStep(step: number, data: AppointmentFormData): FieldErrors {
  const errors: FieldErrors = {};
  if (step === 1) {
    if (!data.fullName.trim()) errors.fullName = "Please enter your full name.";
    if (!data.phone.trim()) errors.phone = "Please enter your phone number.";
    else if (!/^[\d\s+\-()]{7,20}$/.test(data.phone.trim()))
      errors.phone = "Please enter a valid phone number.";
    if (!data.email.trim()) errors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
      errors.email = "Please enter a valid email address.";
  }
  if (step === 2) {
    if (!data.service) errors.service = "Please select a service.";
    if (!data.preferredDate) errors.preferredDate = "Please select a preferred date.";
    else {
      const selected = new Date(data.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) errors.preferredDate = "Please select a date in the future.";
    }
    if (!data.preferredTime) errors.preferredTime = "Please select a preferred time.";
  }
  if (step === 3) {
    if (data.message && data.message.length > 600)
      errors.message = "Please keep your message under 600 characters.";
  }
  return errors;
}

// ─── Progress indicator ─────────────────────────────────────────

const STEPS = [
  { number: 1, label: "Your Details" },
  { number: 2, label: "Preferences" },
  { number: 3, label: "Message" },
  { number: 4, label: "Review" },
];

function StepProgress({ current }: { current: number }) {
  return (
    <nav aria-label="Appointment form steps" className="mb-10">
      <ol className="flex items-center gap-0" role="list">
        {STEPS.map((step, i) => {
          const done = current > step.number;
          const active = current === step.number;
          return (
            <li key={step.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    done
                      ? "bg-[#013565] text-white"
                      : active
                      ? "bg-[#013565] text-white ring-4 ring-[#013565]/15"
                      : "bg-slate-100 text-slate-400"
                  }`}
                  aria-current={active ? "step" : undefined}
                >
                  {done ? <Check className="w-4 h-4" aria-hidden="true" /> : step.number}
                </div>
                <span
                  className={`mt-2 text-[10px] font-medium whitespace-nowrap hidden sm:block ${
                    active ? "text-[#013565]" : done ? "text-slate-500" : "text-slate-300"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-px mx-2 transition-colors duration-300 ${
                    current > step.number ? "bg-[#013565]" : "bg-slate-200"
                  }`}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// ─── Field components ────────────────────────────────────────────

function Field({
  label,
  id,
  error,
  required,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
        {required && <span className="text-[#013565] ml-0.5" aria-label="required">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 text-sm border border-slate-200 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013565] focus:border-transparent transition-shadow";
const inputErrorClass = "border-red-300 focus:ring-red-500";

// ─── Step 1: Your Details ────────────────────────────────────────

function Step1({
  data,
  errors,
  onChange,
}: {
  data: AppointmentFormData;
  errors: FieldErrors;
  onChange: (k: keyof AppointmentFormData, v: string) => void;
}) {
  return (
    <div className="space-y-5">
      <Field label="Full Name" id="fullName" error={errors.fullName} required>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          value={data.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          className={`${inputClass} ${errors.fullName ? inputErrorClass : ""}`}
          placeholder="Your full name"
          aria-required="true"
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
        />
      </Field>
      <Field label="Phone Number" id="phone" error={errors.phone} required>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className={`${inputClass} ${errors.phone ? inputErrorClass : ""}`}
          placeholder="+234 800 000 0000"
          aria-required="true"
        />
      </Field>
      <Field label="Email Address" id="email" error={errors.email} required>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          className={`${inputClass} ${errors.email ? inputErrorClass : ""}`}
          placeholder="you@example.com"
          aria-required="true"
        />
      </Field>
    </div>
  );
}

// ─── Step 2: Preferences ─────────────────────────────────────────

function Step2({
  data,
  errors,
  onChange,
}: {
  data: AppointmentFormData;
  errors: FieldErrors;
  onChange: (k: keyof AppointmentFormData, v: string) => void;
}) {
  // Compute today's date in YYYY-MM-DD for min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="space-y-5">
      <Field label="Treatment / Service" id="service" error={errors.service} required>
        <select
          id="service"
          value={data.service}
          onChange={(e) => onChange("service", e.target.value)}
          className={`${inputClass} ${errors.service ? inputErrorClass : ""} cursor-pointer`}
          aria-required="true"
        >
          <option value="">Select a service…</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Preferred Date" id="preferredDate" error={errors.preferredDate} required>
          <input
            id="preferredDate"
            type="date"
            min={today}
            value={data.preferredDate}
            onChange={(e) => onChange("preferredDate", e.target.value)}
            className={`${inputClass} ${errors.preferredDate ? inputErrorClass : ""}`}
            aria-required="true"
          />
        </Field>
        <Field label="Preferred Time" id="preferredTime" error={errors.preferredTime} required>
          <select
            id="preferredTime"
            value={data.preferredTime}
            onChange={(e) => onChange("preferredTime", e.target.value)}
            className={`${inputClass} ${errors.preferredTime ? inputErrorClass : ""} cursor-pointer`}
            aria-required="true"
          >
            <option value="">Select a time…</option>
            {timeSlotOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </Field>
      </div>
      <p className="text-xs text-slate-400 mt-1">
        Your preferred date and time are subject to availability. The clinic will confirm with you.
      </p>
    </div>
  );
}

// ─── Step 3: Message ─────────────────────────────────────────────

function Step3({
  data,
  errors,
  onChange,
}: {
  data: AppointmentFormData;
  errors: FieldErrors;
  onChange: (k: keyof AppointmentFormData, v: string) => void;
}) {
  const remaining = 600 - (data.message?.length ?? 0);
  return (
    <div className="space-y-5">
      <Field label="Additional Information" id="message" error={errors.message}>
        <textarea
          id="message"
          value={data.message}
          onChange={(e) => onChange("message", e.target.value)}
          rows={5}
          className={`${inputClass} ${errors.message ? inputErrorClass : ""} resize-none`}
          placeholder="Any additional context — e.g. a specific concern, previous dental history, or questions for the team. (Optional)"
          maxLength={600}
        />
        <p className={`text-xs mt-1 text-right ${remaining < 50 ? "text-amber-500" : "text-slate-400"}`}>
          {remaining} characters remaining
        </p>
      </Field>
    </div>
  );
}

// ─── Step 4: Review ──────────────────────────────────────────────

function Step4({ data }: { data: AppointmentFormData }) {
  const rows: { label: string; value: string }[] = [
    { label: "Full Name", value: data.fullName },
    { label: "Phone", value: data.phone },
    { label: "Email", value: data.email },
    { label: "Service", value: data.service },
    { label: "Preferred Date", value: data.preferredDate },
    { label: "Preferred Time", value: data.preferredTime },
    ...(data.message ? [{ label: "Message", value: data.message }] : []),
  ];

  return (
    <div>
      <div className="space-y-3 mb-6">
        {rows.map((row) => (
          <div key={row.label} className="flex gap-4 text-sm border-b border-slate-100 pb-3 last:border-0">
            <span className="font-medium text-slate-500 w-32 flex-shrink-0">{row.label}</span>
            <span className="text-slate-900">{row.value}</span>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4">
        <p className="text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-700 font-semibold">Please note:</strong> Appointment
          requests are subject to confirmation by the clinic. After submitting, we will contact you
          to confirm your appointment.
        </p>
      </div>
    </div>
  );
}

// ─── Navigation Buttons ─────────────────────────────────────────

function NavButtons({
  step,
  totalSteps,
  onBack,
  onNext,
  submitting,
}: {
  step: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
  submitting: boolean;
}) {
  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
      <button
        type="button"
        onClick={onBack}
        disabled={step === 1}
        className="px-5 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-700 disabled:opacity-0 disabled:pointer-events-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] rounded-lg"
      >
        ← Back
      </button>
      {step < totalSteps ? (
        <button
          type="button"
          onClick={onNext}
          className="px-7 py-2.5 bg-[#013565] text-white text-sm font-semibold rounded-lg hover:bg-[#012550] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 shadow-sm"
        >
          Continue →
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          disabled={submitting}
          className="px-7 py-2.5 bg-[#013565] text-white text-sm font-semibold rounded-lg hover:bg-[#012550] disabled:opacity-70 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013565] focus-visible:ring-offset-2 shadow-sm"
          aria-busy={submitting}
        >
          {submitting ? "Submitting…" : "Submit Request"}
        </button>
      )}
    </div>
  );
}

// ─── Main Form ──────────────────────────────────────────────────

const EMPTY: AppointmentFormData = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
  website: "", // honeypot — must stay empty
};

export default function AppointmentForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<AppointmentFormData>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(key: keyof AppointmentFormData, value: string) {
    setData((prev) => ({ ...prev, [key]: value }));
    if (key !== "website" && errors[key as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function handleNext() {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    if (step < 4) {
      setStep((s) => s + 1);
    } else {
      handleSubmit();
    }
  }

  function handleBack() {
    setStep((s) => Math.max(1, s - 1));
    setErrors({});
  }

  async function handleSubmit() {
    setStatus("submitting");
    const result = await submitAppointment(data);
    setStatus(result.success ? "success" : "error");
  }

  function handleReset() {
    setData(EMPTY);
    setErrors({});
    setStep(1);
    setStatus("idle");
  }

  if (status === "success") {
    return <AppointmentSuccess data={data} />;
  }
  if (status === "error") {
    return <AppointmentError onRetry={handleReset} />;
  }

  const stepTitles = [
    "Your details",
    "Appointment preferences",
    "Additional information",
    "Review and submit",
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_-4px_rgb(1_53_101/0.1)] p-6 sm:p-8 lg:p-10">
      {/* Honeypot — hidden from real users, bots fill it */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="website">Website (leave blank)</label>
        <input
          type="text"
          id="website"
          name="website"
          value={data.website ?? ""}
          onChange={(e) => handleChange("website", e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <StepProgress current={step} />

      <div className="mb-6">
        <p className="text-xs font-semibold text-[#013565] uppercase tracking-wider mb-1">
          Step {step} of {STEPS.length}
        </p>
        <h2 className="text-xl font-bold text-slate-900">{stepTitles[step - 1]}</h2>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.2 }}
        >
          {step === 1 && <Step1 data={data} errors={errors} onChange={handleChange} />}
          {step === 2 && <Step2 data={data} errors={errors} onChange={handleChange} />}
          {step === 3 && <Step3 data={data} errors={errors} onChange={handleChange} />}
          {step === 4 && <Step4 data={data} />}
        </motion.div>
      </AnimatePresence>

      <NavButtons
        step={step}
        totalSteps={STEPS.length}
        onBack={handleBack}
        onNext={handleNext}
        submitting={status === "submitting"}
      />
    </div>
  );
}
