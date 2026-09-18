import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { StructuredData } from "@/components/seo/StructuredData";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { MotionProvider } from "@/components/ui/MotionProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gilgal Dental Clinics | Specialist Dental Care in Ikoyi, Lagos",
    template: "%s | Gilgal Dental Clinics",
  },
  description:
    "Gilgal Dental Clinics offers specialist restorative and family dental care in Ikoyi, Lagos. Dr. Osaze Ugbo — 17+ years experience, 200+ dental implants, trained at Eastman Dental Institute UK. Book a consultation today.",
  keywords: [
    "dental clinic Ikoyi Lagos",
    "dentist Ikoyi",
    "dental care Lagos Nigeria",
    "cosmetic dentistry Lagos",
    "dental implants Lagos",
    "restorative dentistry Ikoyi",
    "general dentistry Ikoyi",
    "orthodontics Lagos",
    "Gilgal Dental Clinics",
    "Dr Osaze Ugbo",
    "dentist Lagos",
  ],
  authors: [{ name: "Gilgal Dental Clinics" }],
  creator: "Gilgal Dental Clinics",
  publisher: "Gilgal Dental Clinics",
  metadataBase: new URL("https://gilgaldentalclinics.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://gilgaldentalclinics.com",
    siteName: "Gilgal Dental Clinics",
    title: "Gilgal Dental Clinics | Specialist Dental Care in Ikoyi, Lagos",
    description:
      "Specialist restorative and family dental care in Ikoyi, Lagos. 17+ years experience. Book a consultation with Dr. Osaze Ugbo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilgal Dental Clinics | Specialist Dental Care in Ikoyi, Lagos",
    description:
      "Specialist restorative and family dental care in Ikoyi, Lagos. 17+ years experience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${cormorant.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-jakarta)] antialiased bg-[#F9F8F6] text-slate-900">
        <StructuredData />
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </MotionProvider>
      </body>
    </html>
  );
}
