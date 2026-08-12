"use client";

import React from "react";
import Link from "next/link";
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
  type LucideIcon,
} from "lucide-react";
import { SERVICES_CATALOG } from "@/lib/data";
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

export const ServicesSection: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  return (
    <section id="services" className="relative bg-white py-20 text-[#1A0505] sm:py-24" aria-labelledby="home-services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-gold-primary">
            Our Core Offerings
          </span>
          <h2 id="home-services-heading" className="text-3xl font-black text-brand-red sm:text-4xl lg:text-5xl">
            Solutions For Every Financial Milestone
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            From wealth planning to specialized advisory — structured, transparent solutions matched to your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_CATALOG.map((service) => {
            const Icon = iconMap[service.iconName] ?? Briefcase;

            return (
              <article
                key={service.id}
                className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071A3D] text-gold-light transition-colors group-hover:bg-gold-gradient group-hover:text-[#071A3D]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mb-2 text-base font-extrabold leading-snug text-[#071A3D] group-hover:text-brand-red sm:text-lg">
                  {service.title}
                </h3>

                <p className="mb-4 line-clamp-3 flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={() => openConsultationModal(service.title)}
                  className="self-start text-[11px] font-extrabold text-gold-primary hover:underline"
                  aria-label={`Consult about ${service.title}`}
                >
                  Consult
                </button>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-2xl border border-gold-glow bg-[#071A3D] px-7 py-3.5 text-sm font-black text-white shadow-lg transition-all hover:bg-brand-dark active:scale-95"
          >
            <span>View All Services</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
