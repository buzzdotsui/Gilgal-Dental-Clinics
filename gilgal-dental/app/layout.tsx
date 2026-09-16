import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { StructuredData } from "@/components/seo/StructuredData";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gilgal Dental Clinics | Dental Care in Ikoyi, Lagos",
    template: "%s | Gilgal Dental Clinics",
  },
  description:
    "Gilgal Dental Clinics offers comprehensive general, cosmetic, implant, and restorative dental care in Ikoyi, Lagos. Experienced dental team, relaxed environment, and patient-centred care. Book your appointment today.",
  keywords: [
    "dental clinic Ikoyi Lagos",
    "dentist Ikoyi",
    "dental care Lagos Nigeria",
    "cosmetic dentistry Lagos",
    "dental implants Lagos",
    "general dentistry Ikoyi",
    "orthodontics Lagos",
    "Gilgal Dental",
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
    title: "Gilgal Dental Clinics | Dental Care in Ikoyi, Lagos",
    description:
      "Comprehensive dental care in a relaxed, friendly environment in Ikoyi, Lagos. Book an appointment with Gilgal Dental Clinics today.",
    // opengraph-image.tsx is auto-discovered by Next.js — no explicit image needed here
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilgal Dental Clinics | Dental Care in Ikoyi, Lagos",
    description:
      "Comprehensive dental care in a relaxed, friendly environment in Ikoyi, Lagos.",
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
    <html lang="en" className={`${plusJakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-jakarta)] antialiased bg-[#FDFEFF] text-slate-900">
        <StructuredData />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
