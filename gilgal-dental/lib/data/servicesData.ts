import {
  Stethoscope, Bone, Sparkles, AlignCenter, RefreshCw, Baby, Zap,
  type LucideIcon,
} from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheading: string;
  introduction: string[];
  whatWeOffer: { title: string; description: string }[];
  patientExperience: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: "general-dentistry",
    icon: Stethoscope,
    number: "01",
    title: "General Dentistry",
    tagline: "Routine care that keeps your smile healthy.",
    shortDescription: "Routine examinations, cleanings, fillings, and preventive care to maintain your oral health.",
    heroHeadline: "Your oral health, in experienced hands.",
    heroSubheading: "General dental care forms the foundation of a healthy smile. At Gilgal, we offer thorough examinations and a range of preventive and restorative treatments.",
    introduction: [
      "General dentistry covers the day-to-day dental care that keeps your teeth, gums and mouth in good health. Regular dental visits allow your dentist to identify problems early — often before they become more serious or more costly to treat.",
      "At Gilgal Dental Clinics, general dentistry is delivered by an experienced team that takes the time to understand your dental history, assess your oral health thoroughly, and explain findings clearly before discussing any treatment options.",
    ],
    whatWeOffer: [
      {
        title: "Dental Examination & Diagnosis",
        description: "A thorough assessment of your teeth, gums, bite and overall oral health. We take time to explain what we find and discuss your options.",
      },
      {
        title: "Scaling & Cleaning",
        description: "Professional removal of plaque and tartar build-up that daily brushing cannot fully address. Regular cleaning helps maintain healthy gums.",
      },
      {
        title: "Fillings",
        description: "Treatment of dental decay to restore the affected tooth and prevent further damage. We discuss filling options before proceeding.",
      },
      {
        title: "Root Canal Treatment",
        description: "When infection reaches the inner pulp of a tooth, root canal treatment can relieve pain and save the tooth rather than requiring extraction.",
      },
      {
        title: "Endodontic Treatments",
        description: "Care focused on the interior of the tooth, including the pulp and root structures, to address infection and preserve natural teeth.",
      },
      {
        title: "Periodontal Treatments",
        description: "Assessment and management of gum health, including treatment for gum disease at different stages.",
      },
      {
        title: "Wisdom Tooth Removal",
        description: "Surgical removal of problematic wisdom teeth that are causing pain, crowding or other issues. The procedure is discussed fully beforehand.",
      },
    ],
    patientExperience: "Before any treatment begins, we explain what we found during your examination and discuss the available options. You will not be rushed. Our aim is for you to leave each visit feeling informed and well cared for.",
    faqs: [
      {
        question: "How often should I have a dental check-up?",
        answer: "Most adults benefit from a check-up every six months, though the appropriate frequency depends on your individual oral health. Your dentist will advise you based on your assessment.",
      },
      {
        question: "Does a root canal treatment hurt?",
        answer: "Root canal treatment is performed under local anaesthetic. Most patients find that the discomfort from the infection before treatment is far greater than the procedure itself. Your comfort is our priority throughout.",
      },
      {
        question: "How long does a dental cleaning take?",
        answer: "A routine scaling and polishing appointment typically takes between 30 and 60 minutes, depending on the amount of build-up and your individual needs.",
      },
    ],
    relatedSlugs: ["restorative-dentistry", "implant-dentistry", "cosmetic-dentistry"],
    metaTitle: "General Dentistry in Ikoyi, Lagos | Gilgal Dental Clinics",
    metaDescription: "Comprehensive general dental care at Gilgal Dental Clinics in Ikoyi, Lagos. Examinations, cleanings, fillings, root canal treatment and more.",
  },
  {
    slug: "implant-dentistry",
    icon: Bone,
    number: "02",
    title: "Implant Dentistry",
    tagline: "A stable, long-term solution for missing teeth.",
    shortDescription: "Natural-looking dental implants to replace missing teeth with lasting, stable results.",
    heroHeadline: "Replacing missing teeth with confidence.",
    heroSubheading: "Dental implants are a well-established approach to replacing missing teeth. Dr. Osaze Ugbo brings significant implant experience to every consultation.",
    introduction: [
      "Dental implants are artificial tooth roots — typically made from titanium — that are placed into the jawbone to support a replacement tooth or bridge. When successful, implants look and function similarly to natural teeth and can be a long-term solution for tooth loss.",
      "If you have one or more missing teeth, a consultation with Dr. Ugbo will help assess whether implants may be a suitable option for your situation. Every case is assessed individually.",
    ],
    whatWeOffer: [
      {
        title: "Implant Consultation",
        description: "A thorough assessment of your oral health, bone structure and suitability for dental implants. Dr. Ugbo will walk you through your options and what the process involves.",
      },
      {
        title: "Implant Placement",
        description: "Surgical placement of the implant into the jawbone under local anaesthetic. Dr. Ugbo has placed more than 200 implants throughout his career.",
      },
      {
        title: "Restoration",
        description: "Once the implant has integrated with the bone, a crown or other restoration is fitted to complete the replacement tooth.",
      },
      {
        title: "Follow-up Care",
        description: "Ongoing monitoring and advice to support the long-term health of your implant and surrounding teeth.",
      },
    ],
    patientExperience: "Implant treatment is a significant decision. We take the time to explain each stage of the process clearly, discuss realistic expectations, and ensure you are fully informed before any treatment begins.",
    faqs: [
      {
        question: "Am I a suitable candidate for dental implants?",
        answer: "Suitability depends on a number of factors including bone density, overall oral health and general health. A consultation with Dr. Ugbo will determine whether implants are appropriate for your situation.",
      },
      {
        question: "How long does implant treatment take?",
        answer: "The timeline varies depending on individual healing and the complexity of treatment. The process typically involves multiple appointments over several months. Dr. Ugbo will give you a clearer picture at your consultation.",
      },
      {
        question: "How do I care for a dental implant?",
        answer: "Implants require the same daily care as natural teeth — thorough brushing, flossing and regular dental check-ups. Your dentist will advise you on long-term maintenance.",
      },
    ],
    relatedSlugs: ["general-dentistry", "restorative-dentistry", "cosmetic-dentistry"],
    metaTitle: "Dental Implants in Ikoyi, Lagos | Gilgal Dental Clinics",
    metaDescription: "Dental implant consultations and placement at Gilgal Dental Clinics, Ikoyi, Lagos. Dr. Osaze Ugbo has placed over 200 implants. Book a consultation.",
  },
  {
    slug: "cosmetic-dentistry",
    icon: Sparkles,
    number: "03",
    title: "Cosmetic Dentistry",
    tagline: "Smile improvements that feel natural.",
    shortDescription: "Smile-enhancing treatments including veneers, bonding, and aesthetic improvements.",
    heroHeadline: "A smile you feel comfortable with.",
    heroSubheading: "Cosmetic dentistry focuses on the appearance of your teeth and smile. At Gilgal, we approach aesthetic treatment with care, precision and honest discussion.",
    introduction: [
      "Cosmetic dentistry refers to dental treatments that are primarily focused on improving the appearance of your teeth, gums and smile. While many cosmetic treatments also have functional benefits, the primary goal is aesthetic.",
      "If you have concerns about the colour, shape, spacing or overall appearance of your teeth, a consultation with our team is the first step. We will assess your teeth, listen to your goals, and discuss what is realistically achievable.",
    ],
    whatWeOffer: [
      {
        title: "Smile Consultation",
        description: "An honest, unhurried discussion about your smile goals and what cosmetic dental treatment may be able to address.",
      },
      {
        title: "Cosmetic Assessment",
        description: "A thorough review of your teeth and gums to identify what treatments may be suitable and appropriate for your situation.",
      },
      {
        title: "Aesthetic Improvements",
        description: "A range of cosmetic dental treatments to address colour, shape, spacing and appearance of the teeth, discussed with you before any work begins.",
      },
    ],
    patientExperience: "Cosmetic dental decisions are personal. We take time to understand what you hope to achieve and give you an honest assessment of what is possible. There is no pressure to proceed with any treatment.",
    faqs: [
      {
        question: "What cosmetic treatments does Gilgal offer?",
        answer: "We offer a range of cosmetic dental treatments. The most appropriate options depend on your individual teeth and goals. A consultation will help us recommend what may suit you.",
      },
      {
        question: "Will cosmetic treatment affect the health of my teeth?",
        answer: "We only recommend treatments that are appropriate and responsible for your oral health. Your overall dental health is always assessed before any cosmetic work.",
      },
      {
        question: "How do I get started?",
        answer: "Book a consultation with our team. We will assess your teeth and discuss your goals so we can give you an honest picture of your options.",
      },
    ],
    relatedSlugs: ["laser-teeth-whitening", "restorative-dentistry", "general-dentistry"],
    metaTitle: "Cosmetic Dentistry in Ikoyi, Lagos | Gilgal Dental Clinics",
    metaDescription: "Cosmetic dental treatments at Gilgal Dental Clinics in Ikoyi, Lagos. Smile improvements with an experienced team. Book a consultation.",
  },
  {
    slug: "orthodontics",
    icon: AlignCenter,
    number: "04",
    title: "Orthodontics",
    tagline: "Straighter teeth, better alignment.",
    shortDescription: "Teeth straightening solutions and orthodontic assessment for patients of all ages.",
    heroHeadline: "Teeth alignment, assessed and planned carefully.",
    heroSubheading: "Orthodontic treatment focuses on correcting the alignment of teeth and bite. A thorough consultation and assessment are the starting point for any orthodontic journey.",
    introduction: [
      "Orthodontics is the area of dentistry concerned with the diagnosis, prevention and treatment of misaligned teeth and jaws. Crooked, crowded or widely-spaced teeth can affect not only the appearance of your smile but also how your bite functions.",
      "A proper orthodontic assessment allows your dentist to evaluate your teeth, jaw and bite in detail. From there, a treatment plan is developed that is appropriate to your age, dental health and goals.",
    ],
    whatWeOffer: [
      {
        title: "Orthodontic Consultation",
        description: "A full assessment of your teeth alignment, bite and jaw position to understand your orthodontic needs.",
      },
      {
        title: "Treatment Planning",
        description: "A personalised plan developed based on your assessment, discussed clearly before treatment begins.",
      },
      {
        title: "Alignment Treatment",
        description: "Orthodontic treatment to progressively move teeth into better alignment. The approach is discussed during your consultation.",
      },
      {
        title: "Long-term Care & Retention",
        description: "Guidance on maintaining your results after active treatment is complete, including retention options.",
      },
    ],
    patientExperience: "Orthodontic treatment is a commitment. We take the time to explain the process, realistic timelines and what you can expect before, during and after treatment.",
    faqs: [
      {
        question: "Is orthodontic treatment only for teenagers?",
        answer: "No. Adult orthodontic treatment is increasingly common and can be very effective. Your suitability depends on your dental health, which we assess at consultation.",
      },
      {
        question: "How long does orthodontic treatment take?",
        answer: "Treatment duration varies significantly depending on the complexity of your case. This will be discussed specifically during your consultation.",
      },
      {
        question: "Will orthodontic treatment be uncomfortable?",
        answer: "Some initial discomfort after adjustments is normal. Your dentist will advise you on what to expect at each stage.",
      },
    ],
    relatedSlugs: ["general-dentistry", "cosmetic-dentistry", "restorative-dentistry"],
    metaTitle: "Orthodontics in Ikoyi, Lagos | Gilgal Dental Clinics",
    metaDescription: "Orthodontic assessment and treatment at Gilgal Dental Clinics, Ikoyi, Lagos. Teeth alignment for patients of all ages. Book a consultation.",
  },
  {
    slug: "restorative-dentistry",
    icon: RefreshCw,
    number: "05",
    title: "Restorative Dentistry",
    tagline: "Restoring function, health and confidence.",
    shortDescription: "Crowns, bridges, dentures, and restorations to rebuild and strengthen damaged or missing teeth.",
    heroHeadline: "Rebuilding dental health, one tooth at a time.",
    heroSubheading: "Restorative dentistry focuses on repairing and replacing damaged or missing teeth to restore function and maintain oral health.",
    introduction: [
      "Restorative dentistry covers a broad range of treatments aimed at repairing teeth that have been damaged, decayed or lost — and restoring the mouth to a healthy, functional state.",
      "Dr. Osaze Ugbo has a particular interest in restorative dentistry and brings more than 17 years of clinical experience to this area. Whether you need a single crown, a bridge or more complex restorative work, the starting point is always a thorough assessment and honest discussion.",
    ],
    whatWeOffer: [
      {
        title: "Assessment & Diagnosis",
        description: "A thorough examination of the teeth that need attention, with clear explanation of the condition and the treatment options available.",
      },
      {
        title: "Crowns",
        description: "Tooth-shaped caps that restore the shape, size and function of a damaged or weakened tooth.",
      },
      {
        title: "Bridges",
        description: "Fixed restorations that replace one or more missing teeth by bridging the gap between adjacent teeth.",
      },
      {
        title: "Dentures",
        description: "Removable replacements for missing teeth, discussed and fitted to meet your individual needs.",
      },
      {
        title: "Personalised Treatment Planning",
        description: "A treatment plan built around your specific situation, oral health goals and priorities.",
      },
    ],
    patientExperience: "Restorative treatment often addresses problems that have been present for some time. We approach each case without judgement, focused on restoring your oral health in a way that suits your circumstances.",
    faqs: [
      {
        question: "How do I know if I need restorative treatment?",
        answer: "Common signs include tooth pain, sensitivity, visible damage, or missing teeth. A dental examination is the best way to assess what treatment, if any, is needed.",
      },
      {
        question: "How long do crowns and bridges last?",
        answer: "With proper oral hygiene and regular dental visits, crowns and bridges can last many years. Your dentist will advise on care and maintenance.",
      },
      {
        question: "What is the difference between a crown and a veneer?",
        answer: "A crown covers the entire tooth and is primarily restorative. A veneer covers only the front surface and is primarily cosmetic. Your dentist will advise which is appropriate for your situation.",
      },
    ],
    relatedSlugs: ["general-dentistry", "implant-dentistry", "cosmetic-dentistry"],
    metaTitle: "Restorative Dentistry in Ikoyi, Lagos | Gilgal Dental Clinics",
    metaDescription: "Restorative dental care at Gilgal Dental Clinics, Ikoyi, Lagos. Crowns, bridges, dentures and more from an experienced team.",
  },
  {
    slug: "childrens-dentistry",
    icon: Baby,
    number: "06",
    title: "Children's Dentistry",
    tagline: "Gentle dental care for your little ones.",
    shortDescription: "Patient, gentle dental care designed to help children feel comfortable and build healthy habits.",
    heroHeadline: "Caring for young smiles, gently.",
    heroSubheading: "Children's dentistry at Gilgal is built around patience, understanding and creating a positive experience from the very first visit.",
    introduction: [
      "Introducing children to dental care early helps establish healthy habits and reduces dental anxiety in later life. At Gilgal Dental Clinics, we understand that a child's first dental experiences matter — and we approach every young patient with patience and care.",
      "We communicate with both children and their parents or guardians throughout the visit, ensuring everyone feels informed and comfortable.",
    ],
    whatWeOffer: [
      {
        title: "Child-Friendly Examination",
        description: "A thorough but gentle assessment of your child's teeth and gums, delivered in a calm, unhurried manner.",
      },
      {
        title: "Preventive Dental Care",
        description: "Cleaning, fluoride advice and guidance on diet and oral hygiene habits to protect your child's developing teeth.",
      },
      {
        title: "Treatment When Needed",
        description: "Where treatment is required, we explain clearly to both child and parent before proceeding, at a pace that feels comfortable.",
      },
      {
        title: "Parent Guidance",
        description: "Practical, honest advice for parents on how to support their child's oral health at home.",
      },
    ],
    patientExperience: "Children have different needs at the dentist. Our team is experienced in working with young patients and adjusts our approach based on the child's age, comfort level and previous dental experience.",
    faqs: [
      {
        question: "At what age should I bring my child to the dentist?",
        answer: "It is generally recommended to introduce children to dental visits early — ideally when their first teeth begin to appear. Early visits help normalise the experience and allow preventive care to begin.",
      },
      {
        question: "What if my child is nervous about visiting the dentist?",
        answer: "Our team is experienced in working with anxious young patients. We take time to make the environment feel familiar and non-threatening. Please let us know in advance if your child has dental anxiety.",
      },
      {
        question: "Are baby teeth important?",
        answer: "Yes. Baby teeth hold space for permanent teeth and play an important role in speech and eating. Keeping them healthy matters, and decay in baby teeth should be treated.",
      },
    ],
    relatedSlugs: ["general-dentistry", "orthodontics", "restorative-dentistry"],
    metaTitle: "Children's Dentistry in Ikoyi, Lagos | Gilgal Dental Clinics",
    metaDescription: "Gentle, patient-centred children's dental care at Gilgal Dental Clinics, Ikoyi, Lagos. Family-friendly care for all ages.",
  },
  {
    slug: "laser-teeth-whitening",
    icon: Zap,
    number: "07",
    title: "Laser Teeth Whitening",
    tagline: "Professional whitening, in the clinic.",
    shortDescription: "Professional in-clinic laser teeth whitening for a noticeably brighter smile.",
    heroHeadline: "A brighter smile, professionally delivered.",
    heroSubheading: "Professional teeth whitening at Gilgal is performed in the clinic under the supervision of an experienced dentist.",
    introduction: [
      "Teeth can become discoloured over time due to food, drinks, lifestyle factors and natural ageing. Professional teeth whitening is a cosmetic dental treatment aimed at reducing this discolouration and brightening the appearance of the teeth.",
      "At Gilgal Dental Clinics, laser teeth whitening is performed in-clinic under professional supervision. Before treatment begins, your teeth and gums are assessed to ensure whitening is appropriate for your situation.",
    ],
    whatWeOffer: [
      {
        title: "Whitening Consultation",
        description: "An assessment of your teeth and gums to determine whether professional whitening is suitable for you.",
      },
      {
        title: "In-Clinic Laser Whitening",
        description: "Professional teeth whitening treatment performed in the clinic by our experienced dental team.",
      },
      {
        title: "Aftercare Guidance",
        description: "Advice on how to care for your teeth after whitening to maintain your results.",
      },
    ],
    patientExperience: "Professional whitening is supervised throughout by our dental team. We will be honest about what results are realistic for your teeth before treatment begins.",
    faqs: [
      {
        question: "Is teeth whitening suitable for everyone?",
        answer: "Not everyone is a suitable candidate for teeth whitening. Suitability depends on the type of discolouration, the condition of your teeth and gums, and other factors. A consultation will determine whether it is appropriate for you.",
      },
      {
        question: "How long do whitening results last?",
        answer: "Results vary between individuals and are influenced by diet, lifestyle and oral hygiene. Your dentist will advise on how to maintain your results.",
      },
      {
        question: "Is professional whitening safe?",
        answer: "When performed under professional supervision, teeth whitening is considered safe for appropriate candidates. Our team assesses suitability before any treatment proceeds.",
      },
    ],
    relatedSlugs: ["cosmetic-dentistry", "general-dentistry", "restorative-dentistry"],
    metaTitle: "Laser Teeth Whitening in Ikoyi, Lagos | Gilgal Dental Clinics",
    metaDescription: "Professional laser teeth whitening at Gilgal Dental Clinics, Ikoyi, Lagos. In-clinic treatment under experienced supervision. Book a consultation.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string): ServiceData[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is ServiceData => s !== undefined);
}
