import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/data/servicesData";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://gilgaldentalclinics.com/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const relatedServices = getRelatedServices(slug);

  return <ServicePageLayout service={service} relatedServices={relatedServices} />;
}
