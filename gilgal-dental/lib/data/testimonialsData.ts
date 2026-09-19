// Authentic testimonial content based on real review material
// supplied for the Gilgal Dental Clinics project.
// Reviewer names and review themes are preserved as supplied.
// The negative review from Comfort Moses is excluded per brief instructions.

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  context: string;
  url: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "ife-dixon",
    author: "Ife Dixon",
    quote:
      "I was referred to the clinic by a colleague and the experience was amazing. It’s a typical small but mighty adage.\nThe Dr. did an extensive examination on my child and gave detailed explanation as to the cause of his mouth sore. My son had visited an acclaimed A rated clinic but no improvement. I will recommend Gilgal to anyone for free.\nYou guys are simply the best.",
    context: "Google Review",
    url: "https://share.google/twP2UDMMNk05bqUWs",
    rating: 5,
  },
  {
    id: "ephraim-bright",
    author: "Ephraim 'Funso Bright",
    quote:
      "I had dental examinations & treatments at Gilgal Dental Clinic; scaling & polishing, composite fillings, teeth dentures design & fixing.\nI deeply appreciate the caring, warm & friendliness. Neat, modern & high quality tools are quite impressive. I highly recommend Gilgal Dental Clinic.",
    context: "Google Review",
    url: "https://share.google/3r0bJM19im9zXQJOr",
    rating: 5,
  },
  {
    id: "agatha-obi",
    author: "Agatha Obi",
    quote:
      "The principal dentist was really helpful and patient, encouraging every step of the way and he ensured to keep me in the know as the extraction was going on. For a visit to a dentist’s chair I had a swell time, would absolutely recommend",
    context: "Google Review",
    url: "https://share.google/ksR5hbAsJpk2WpwZ2",
    rating: 5,
  },
  {
    id: "debola-adebanjo",
    author: "Debola Adebanjo",
    quote:
      "Totally recommend this place. My service and the dentist who runs this place is pretty efficient.",
    context: "Google Review",
    url: "https://share.google/VcF8BL55ovjXUpQKP",
    rating: 5,
  },
  {
    id: "clarissa-juliana",
    author: "Clarissa Juliana",
    quote:
      "Very comfortable and safe, in the new normal era, so you don't have to be afraid of control.",
    context: "Google Review",
    url: "https://share.google/ZtmgY2xbPzovv6FtT",
    rating: 5,
  },
  {
    id: "adebambo-boluwatife",
    author: "Adebambo Boluwatife",
    quote: "",
    context: "Google Review",
    url: "https://www.google.com/maps/contrib/110961424828941852604/reviews?hl=en",
    rating: 5,
  },
];
