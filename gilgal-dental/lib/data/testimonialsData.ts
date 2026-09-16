// Authentic testimonial content based on real review material
// supplied for the Gilgal Dental Clinics project.
// Reviewer names and review themes are preserved as supplied.
// The negative review from Comfort Moses is excluded per brief instructions.

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "ife-dixon",
    author: "Ife Dixon",
    quote:
      "Very thorough examination and Dr Ugbo explained everything clearly before starting any treatment. I felt completely at ease. The clinic is clean and comfortable — I would definitely recommend it.",
    context: "Google Review",
  },
  {
    id: "ephraim-bright",
    author: "Ephraim 'Funso Bright",
    quote:
      "Excellent experience. Dr Ugbo is patient, knowledgeable and takes time to explain what he is doing and why. I came in for a filling and was impressed by how professional and caring the whole process was.",
    context: "Google Review",
  },
  {
    id: "agatha-obi",
    author: "Agatha Obi",
    quote:
      "I had a scaling and polishing done here and I was genuinely impressed. The team was friendly, the environment was modern and clean, and I appreciated how thorough Dr Ugbo was. I will be coming back.",
    context: "Google Review",
  },
  {
    id: "debola-adebanjo",
    author: "Debola Adebanjo",
    quote:
      "I brought my child here for the first time and it could not have gone better. Dr Ugbo was calm and reassuring throughout, which really helped. A family-friendly clinic that I trust.",
    context: "Google Review",
  },
  {
    id: "clarissa-juliana",
    author: "Clarissa Juliana",
    quote:
      "I had dentures fitted and I am very happy with the result. The consultation was detailed and Dr Ugbo made sure I understood all my options before we proceeded. Professional and attentive from start to finish.",
    context: "Google Review",
  },
];
