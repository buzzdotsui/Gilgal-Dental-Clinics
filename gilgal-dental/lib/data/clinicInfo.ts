// ─── Clinic Info — Single Source of Truth ──────────────────
export const clinicInfo = {
  name: "Gilgal Dental Clinics",
  address: {
    street: "2 Olawale Daodu Road, off Kingsway Road",
    area: "Ikoyi",
    city: "Lagos",
    country: "Nigeria",
    full: "2 Olawale Daodu Road, off Kingsway Road, Ikoyi, Lagos, Nigeria",
  },
  phones: [
    { number: "+234 809 990 6233", href: "tel:+2348099906233", primary: true },
    { number: "+234 1 293 0857", href: "tel:+23412930857", primary: false },
    { number: "+234 802 303 7638", href: "tel:+2348023037638", primary: false },
    { number: "+234 802 668 3131", href: "tel:+2348026683131", primary: false },
  ],
  emails: [
    { address: "gilgaldentalclinics@gmail.com", href: "mailto:gilgaldentalclinics@gmail.com", primary: true },
    { address: "osazeugbo@gmail.com", href: "mailto:osazeugbo@gmail.com", primary: false },
  ],
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM", closed: false },
    { day: "Saturday & Public Holidays", time: "9:00 AM – 3:00 PM", closed: false },
    { day: "Sunday", time: "Closed", closed: true },
  ],
  social: {
    instagram: "https://www.instagram.com/gilgaldental.clinic/",
    facebook: "https://web.facebook.com/gilgaldental.clinics/",
  },
  whatsapp: {
    number: "+2348099906233",
    defaultMessage:
      "Hello Gilgal Dental Clinics, I would like to book an appointment. Please let me know the available dates and times.",
  },
} as const;

export function buildWhatsAppUrl(message?: string): string {
  const text = message ?? clinicInfo.whatsapp.defaultMessage;
  return `https://wa.me/${clinicInfo.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function buildAppointmentWhatsAppUrl(data: {
  name?: string;
  service?: string;
  date?: string;
  time?: string;
}): string {
  const lines = [
    "Hello Gilgal Dental Clinics, I would like to request an appointment.",
    "",
    data.name ? `Name: ${data.name}` : null,
    data.service ? `Service: ${data.service}` : null,
    data.date ? `Preferred date: ${data.date}` : null,
    data.time ? `Preferred time: ${data.time}` : null,
  ].filter(Boolean);
  return buildWhatsAppUrl(lines.join("\n"));
}
