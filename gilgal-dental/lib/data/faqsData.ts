export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  faqs: FAQ[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "appointments",
    title: "Appointments",
    faqs: [
      {
        id: "how-to-book",
        question: "How do I book an appointment?",
        answer:
          "You can book an appointment by completing our online appointment request form, calling us on +234 809 990 6233, emailing gilgaldentalclinics@gmail.com, or messaging us directly on WhatsApp. We will confirm your appointment and get back to you to finalise the date and time.",
      },
      {
        id: "preferred-date",
        question: "Can I request a preferred date and time?",
        answer:
          "Yes. When you submit your appointment request, you are welcome to indicate your preferred date and time. We will do our best to accommodate your preference. Availability is confirmed by the clinic.",
      },
      {
        id: "confirmation",
        question: "How will my appointment be confirmed?",
        answer:
          "Once we receive your request, a member of the team will contact you — by phone or WhatsApp — to confirm your appointment details. Please note that submitting a request does not automatically guarantee a specific slot.",
      },
      {
        id: "new-patients",
        question: "Do you accept new patients?",
        answer:
          "Yes, Gilgal Dental Clinics welcomes new patients. Please use the appointment request form or contact us directly to arrange your first visit.",
      },
    ],
  },
  {
    id: "services",
    title: "Services",
    faqs: [
      {
        id: "what-services",
        question: "What dental services does Gilgal offer?",
        answer:
          "We offer General Dentistry, Implant Dentistry, Cosmetic Dentistry, Orthodontics, Restorative Dentistry, Children's Dentistry and Laser Teeth Whitening. Each service is delivered by our experienced dental team.",
      },
      {
        id: "implants",
        question: "Does Gilgal provide dental implants?",
        answer:
          "Yes. Dr. Osaze Ugbo has placed more than 200 dental implants throughout his career. A consultation is required to assess suitability for implant treatment, as individual cases vary.",
      },
      {
        id: "children",
        question: "Does Gilgal offer children's dental care?",
        answer:
          "Yes. We provide dental care for patients of all ages, including children. Our team is experienced in working with young patients and making dental visits a positive experience.",
      },
      {
        id: "orthodontics",
        question: "Does Gilgal offer orthodontic treatment?",
        answer:
          "Yes. We offer orthodontic assessment and treatment for patients at appropriate stages of dental development. The specific options available will be discussed during your consultation.",
      },
      {
        id: "whitening",
        question: "Does Gilgal offer teeth whitening?",
        answer:
          "Yes. We offer professional laser teeth whitening, carried out in the clinic under the supervision of our dental team. Suitability is assessed before treatment begins.",
      },
    ],
  },
  {
    id: "clinic",
    title: "The Clinic",
    faqs: [
      {
        id: "location",
        question: "Where is Gilgal Dental Clinics located?",
        answer:
          "We are located at 2 Olawale Daodu Road, off Kingsway Road, Ikoyi, Lagos, Nigeria.",
      },
      {
        id: "hours",
        question: "What are the clinic's opening hours?",
        answer:
          "We are open Monday to Friday from 9:00 AM to 6:00 PM, and on Saturdays and Public Holidays from 9:00 AM to 3:00 PM. We are closed on Sundays.",
      },
      {
        id: "contact",
        question: "How can I contact the clinic?",
        answer:
          "You can reach us by phone on +234 809 990 6233, by email at gilgaldentalclinics@gmail.com, or via WhatsApp on the same number. We will respond as promptly as possible during clinic hours.",
      },
      {
        id: "dentist",
        question: "Who is the dentist at Gilgal?",
        answer:
          "Our Principal Dentist is Dr. Osaze Ugbo, who has more than 17 years of clinical experience. He practises General Dentistry with a special interest in Restorative Dentistry and has trained at the Eastman Dental Institute in the UK and the BICON Institute in the USA.",
      },
    ],
  },
];

export const allFaqs: FAQ[] = faqCategories.flatMap((cat) => cat.faqs);
