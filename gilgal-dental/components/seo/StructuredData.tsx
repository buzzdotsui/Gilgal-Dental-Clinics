// Server Component — injects JSON-LD structured data for the clinic
import { clinicInfo } from "@/lib/data/clinicInfo";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://gilgaldentalclinics.com/#dentist",
    name: clinicInfo.name,
    url: "https://gilgaldentalclinics.com",
    telephone: clinicInfo.phones[0].number,
    email: clinicInfo.emails[0].address,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicInfo.address.street,
      addressLocality: clinicInfo.address.area,
      addressRegion: clinicInfo.address.city,
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.4498,
      longitude: 3.4358,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "PublicHolidays",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    sameAs: [
      clinicInfo.social.instagram,
      clinicInfo.social.facebook,
    ],
    hasMap: clinicInfo.mapUrl,
    medicalSpecialty: "Dentistry",
    employee: {
      "@type": "Person",
      name: "Dr. Osaze Ugbo",
      jobTitle: "Principal Dentist",
      affiliation: {
        "@type": "Organization",
        name: clinicInfo.name,
      },
    },
    currenciesAccepted: "NGN",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
