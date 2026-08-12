"use client";

import React from "react";
import {
  Briefcase,
  TrendingUp,
  Shield,
  Scale,
  Building,
  Landmark,
  Users,
  PieChart,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  KeyRound,
  Globe2,
  Star,
  type LucideIcon,
} from "lucide-react";
import {
  SERVICE_CATALOG_SECTIONS,
  getServicesBySection,
  type ServiceCatalogItem,
  type ServiceCatalogSection,
} from "@/lib/data";
import { useConsultation } from "@/context/ConsultationContext";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  TrendingUp,
  Shield,
  Scale,
  Building,
  Landmark,
  Users,
  PieChart,
  GraduationCap,
  HeartHandshake,
};

const sectionIcons: Record<ServiceCatalogSection, LucideIcon> = {
  core: KeyRound,
  specialized: Globe2,
  "value-added": Star,
};

interface ServiceCardProps {
  service: ServiceCatalogItem;
  onConsult: (title: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onConsult }) => {
  const Icon = iconMap[service.iconName] ?? Briefcase;

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-primary/50 hover:shadow-xl hover:shadow-[#071A3D]/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-gold-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071A3D] text-gold-light shadow-md transition-colors duration-300 group-hover:bg-gold-gradient group-hover:text-[#071A3D]">
        <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
      </div>

      <h3 className="mb-3 text-lg font-extrabold leading-snug text-[#071A3D] transition-colors group-hover:text-brand-red sm:text-xl">
        {service.title}
      </h3>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>

      <button
        type="button"
        onClick={() => onConsult(service.title)}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red transition-colors hover:text-gold-primary"
        aria-label={`Book a consultation for ${service.title}`}
      >
        <span>Discuss this service</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </button>
    </article>
  );
};

export const ServicesPageContent: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="services-hero-heading"
        className="relative overflow-hidden bg-[#071A3D] text-white"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/services-hero-bg.png)" }}
          aria-hidden="true"
        />
        {/* Light blue shield — kept subtle so the photo stays visible */}
        <div className="pointer-events-none absolute inset-0 bg-sky-300/20" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,61,0.32)_0%,rgba(12,45,92,0.18)_50%,rgba(7,26,61,0.35)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.28)_0%,transparent_68%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold-glow/60 bg-[#071A3D]/50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-light backdrop-blur-sm">
              <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Our Services</span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light drop-shadow-md sm:text-sm">
              NP Wealth Managers
            </p>

            <h1
              id="services-hero-heading"
              className="mt-2 text-2xl font-black leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-3xl lg:text-4xl"
            >
              Comprehensive Wealth Solutions
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] sm:text-base">
              At NP Wealth Managers, we provide end-to-end financial solutions designed to protect, grow, and
              manage wealth with precision and care.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Service Sections */}
      {SERVICE_CATALOG_SECTIONS.map((sectionConfig, sectionIndex) => {
        const SectionIcon = sectionIcons[sectionConfig.id];
        const services = getServicesBySection(sectionConfig.id);

        return (
          <section
            key={sectionConfig.id}
            aria-labelledby={`services-section-${sectionConfig.id}`}
            className={sectionIndex % 2 === 0 ? "bg-white py-16 sm:py-20" : "bg-[#F7F9FC] py-16 sm:py-20"}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold-primary">
                  {sectionConfig.eyebrow}
                </span>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071A3D] text-gold-light">
                    <SectionIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2
                    id={`services-section-${sectionConfig.id}`}
                    className="text-2xl font-black text-[#071A3D] sm:text-3xl"
                  >
                    {sectionConfig.heading}
                  </h2>
                </div>
                <div className="gold-divider mt-4" aria-hidden="true" />
              </div>

              <div className={`grid grid-cols-1 gap-6 ${sectionConfig.gridClass}`}>
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onConsult={openConsultationModal}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section
        aria-labelledby="services-cta-heading"
        className="relative overflow-hidden border-t border-gold-glow bg-[#071A3D] py-16 text-white sm:py-20"
      >
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-subtle blur-3xl" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-glow bg-gold-subtle px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-light">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Get Started</span>
          </div>

          <h2 id="services-cta-heading" className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
            Ready to Build and Protect Your Wealth?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            Speak with our advisors for a structured, confidential discussion tailored to your financial goals.
          </p>

          <button
            type="button"
            onClick={() => openConsultationModal("Wealth Management")}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-gold-gradient px-8 py-4 text-sm font-black text-brand-red shadow-xl shadow-gold-glow transition-all hover:brightness-110 active:scale-95 sm:text-base"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </>
  );
};
