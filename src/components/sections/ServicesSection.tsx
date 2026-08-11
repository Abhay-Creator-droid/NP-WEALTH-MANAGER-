"use client";

import React, { useState } from "react";
import { SERVICES_DATA, ServiceItem } from "@/lib/data";
import type { Service } from "@prisma/client";
import {
  Briefcase,
  TrendingUp,
  Target,
  Home,
  Building2,
  Building,
  Wallet,
  FileCheck2,
  ArrowRight,
  ChevronRight,
  X,
} from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
  Target: Target,
  Home: Home,
  Building2: Building2,
  Building: Building,
  Wallet: Wallet,
  FileCheck2: FileCheck2,
};

type DisplayService = Service | ServiceItem;

interface ServicesSectionProps {
  services?: DisplayService[];
}

const getServiceCategory = (service: DisplayService) => {
  if ("category" in service) return service.category;

  const slug = "slug" in service ? service.slug.toLowerCase() : "";
  if (slug.includes("loan")) return "loans";
  if (slug.includes("real") || slug.includes("estate")) return "realestate";
  if (slug.includes("sip") || slug.includes("wealth") || slug.includes("investment")) return "investments";
  return "wealth";
};

const getServiceTitle = (service: DisplayService) => {
  if ("title" in service) return service.title;
  return service.name;
};

const getServiceShortDesc = (service: DisplayService) => {
  if ("shortDescription" in service) return service.shortDescription;
  return service.shortDesc ?? "";
};

const getServiceFullDesc = (service: DisplayService) => {
  if ("fullDescription" in service) return service.fullDescription;
  return service.fullDesc ?? "";
};

const getServiceIconName = (service: DisplayService) => {
  if ("icon" in service && service.icon) return service.icon;
  return "Briefcase";
};

const getServiceKeyFeatures = (service: DisplayService) => {
  const fullDesc = getServiceFullDesc(service);
  const lines = fullDesc
    .split(/\.|\n/)
    .map((item) => item.trim())
    .filter(Boolean);
  return lines.length > 0 ? lines.slice(0, 4) : ["Trusted advisory support", "Personalized financial planning", "Detailed service guidance", "Goal-aligned solutions"];
};

const getServiceTargetAudience = (service: DisplayService) => {
  const category = getServiceCategory(service);
  if (category === "loans") return "Borrowers looking for financing solutions";
  if (category === "realestate") return "Property investors and home buyers";
  if (category === "investments") return "Salaried professionals and long-term investors";
  return "High-net-worth and growth-oriented individuals";
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedServiceModal, setSelectedServiceModal] = useState<DisplayService | null>(null);
  const { openConsultationModal } = useConsultation();

  const dataServices = services && services.length > 0 ? services : SERVICES_DATA;

  const filteredServices = dataServices.filter((service) => {
    const category = getServiceCategory(service);
    if (activeTab === "all") return true;
    if (activeTab === "investments") return category === "investments" || category === "wealth";
    if (activeTab === "loans") return category === "loans";
    if (activeTab === "realestate") return category === "realestate";
    return true;
  });

  return (
    <section id="services" className="py-24 bg-white text-[#1A0505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-gold-primary uppercase tracking-widest block mb-2">
            OUR CORE OFFERINGS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-red">
            Solutions For Every Financial Milestone
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Explore structured, transparent solutions matched to your capital growth, borrowing, and property aspirations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Offerings" },
            { id: "investments", label: "Wealth & Investments" },
            { id: "loans", label: "Loan Solutions" },
            { id: "realestate", label: "Real Estate" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-brand-mid text-gold-light shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[getServiceIconName(service)] || Briefcase;
            return (
              <div
                key={service.id}
                className="group relative bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-gold-glow hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-dark text-gold-light flex items-center justify-center mb-6 shadow-md group-hover:bg-gold-gradient group-hover:text-brand-red transition-colors duration-300">
                    <IconComponent className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-brand-red mb-3 group-hover:text-gold-primary transition-colors">
                    {getServiceTitle(service)}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {getServiceShortDesc(service)}
                  </p>
                </div>

                {/* Learn More Link & Action */}
                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="text-xs font-bold text-brand-red group-hover:text-gold-primary flex items-center gap-1 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => openConsultationModal(getServiceTitle(service))}
                    className="text-[11px] font-extrabold text-gold-primary hover:underline"
                  >
                    Consult
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white text-primary rounded-3xl p-6 sm:p-8 shadow-2xl border border-gold-glow max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-dark text-gold-light flex items-center justify-center">
                {React.createElement(iconMap[getServiceIconName(selectedServiceModal)] || Briefcase, {
                  className: "w-7 h-7",
                })}
              </div>
              <div>
                <span className="text-xs font-bold text-gold-primary uppercase tracking-wider">
                  Service Details
                </span>
                <h3 className="text-2xl font-black text-brand-red">
                  {getServiceTitle(selectedServiceModal)}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {getServiceFullDesc(selectedServiceModal)}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-extrabold text-brand-red uppercase tracking-wider mb-3">
                Key Offerings & Scope:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {getServiceKeyFeatures(selectedServiceModal).map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-gold-primary shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs text-slate-600">
              <strong className="text-brand-red">Typical Profile Focus:</strong> {getServiceTargetAudience(selectedServiceModal)}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = getServiceTitle(selectedServiceModal);
                  setSelectedServiceModal(null);
                  openConsultationModal(title);
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-brand-dark hover:bg-brand-dark/90 text-white font-bold text-sm rounded-xl shadow-md transition-all text-center"
              >
                Discuss {getServiceTitle(selectedServiceModal)}
              </button>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-colors text-center"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
