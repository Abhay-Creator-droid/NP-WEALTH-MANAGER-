"use client";

import React, { useState } from "react";
import Image from "next/image";
import { REAL_ESTATE_LISTINGS, PropertyListing } from "@/lib/data";
import type { Property } from "@prisma/client";
import { Building, MapPin, Layers, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

type DisplayProperty = Property & { images?: { url: string }[] };

interface RealEstateSectionProps {
  properties?: DisplayProperty[];
}

const mapPropertyToListing = (property: DisplayProperty): PropertyListing => {
  const category = property.type?.toLowerCase().includes("commercial")
    ? "commercial"
    : property.type?.toLowerCase().includes("plot")
    ? "plots"
    : property.type?.toLowerCase().includes("residential")
    ? "residential"
    : "residential";

  const highlights = property.features
    ? property.features.split(/\r?\n|\.|;/).map((item) => item.trim()).filter(Boolean).slice(0, 4)
    : ["Contact us for details", "Verified property sourcing", "Expert due diligence", "End-to-end assistance"];

  return {
    id: property.id,
    title: property.title,
    category,
    location: property.location ?? "India",
    type: property.type ?? "Real Estate",
    tag: property.featured ? "Featured" : "Property",
    description: property.description ?? "Explore this opportunity with our advisory support.",
    highlights,
    imageUrl: property.images?.[0]?.url ?? "/hero-image.jpg",
  };
};

export const RealEstateSection: React.FC<RealEstateSectionProps> = ({ properties }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { openConsultationModal } = useConsultation();

  const dataProperties = properties && properties.length > 0 ? properties.map(mapPropertyToListing) : REAL_ESTATE_LISTINGS;

  const filteredProperties = dataProperties.filter((prop) => {
    if (activeCategory === "all") return true;
    return prop.category === activeCategory;
  });

  return (
    <section id="real-estate" className="py-24 bg-white text-[#1A0505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-gold-primary uppercase tracking-widest block mb-2">
            PROPERTY EXPLORATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-red">
            Curated Real Estate Opportunities
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Explore residential developments, commercial space assets, and strategic plots across key metropolitan hubs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Properties" },
            { id: "residential", label: "Residential" },
            { id: "commercial", label: "Commercial Assets" },
            { id: "plots", label: "Plots & Land" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-brand-dark text-gold-light shadow-md shadow-navy-900/10"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden hover:border-gold-glow hover:bg-white shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-800">
                  <Image
                    src={prop.imageUrl}
                    alt={prop.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-dark/90 text-gold-light text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md border border-gold-glow">
                    {prop.tag}
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gold-primary mb-2">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-gold-primary" />
                    <span>{prop.location}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-brand-red mb-2 group-hover:text-gold-primary transition-colors">
                    {prop.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-3">
                    {prop.type}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {prop.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                    {prop.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-gold-primary shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => openConsultationModal(`Real Estate - ${prop.title}`)}
                  className="w-full py-3.5 bg-brand-dark hover:bg-brand-dark/90 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Property</span>
                  <ArrowRight className="w-4 h-4 text-gold-primary" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
