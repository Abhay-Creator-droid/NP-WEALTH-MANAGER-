import React from "react";
import Image from "next/image";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Building, Building2, Home, MapPin, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { REAL_ESTATE_LISTINGS, PropertyListing } from "@/lib/data";

export const metadata = {
  title: "Real Assets & Property Advisory | NP Wealth Managers",
  description: "Curated residential, commercial, industrial, and mixed-use real estate advisory across top growth corridors in India.",
};

const CATEGORIES = [
  { title: "Residential Assets", desc: "Luxury apartments, villas, and gated township homes.", icon: Home },
  { title: "Commercial Spaces", desc: "Grade-A office floors, retail hubs, and tech park units.", icon: Building2 },
  { title: "Industrial & Plots", desc: "Warehousing land parcels, logistics parks, and villa plots.", icon: Building },
];

export default function RealAssetsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Page Hero */}
      <section className="bg-[#0B0F19] text-white py-16 border-b border-[#D4AF37]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F2D675] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F2D675]" />
            <span>REAL ESTATE & ASSET DESK</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Real Assets & <span className="text-gold-gradient">Property Advisory</span>
          </h1>

          <div className="gold-divider mx-auto"></div>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Strategic residential, commercial, and land acquisition advisory backed by legal title verification and location due diligence.
          </p>
        </div>
      </section>

      {/* Asset Categories Section */}
      <section className="bg-[#FDF8F0] py-20 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-lg space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center border border-[#D4AF37]/40">
                    <Icon className="w-6 h-6 text-[#F2D675]" />
                  </div>
                  <h3 className="text-xl font-black text-[#111827]">{cat.title}</h3>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">{cat.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Curated Listings Grid */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827]">
              Curated <span className="text-gold-gradient">Property Opportunities</span>
            </h2>
            <div className="gold-divider mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REAL_ESTATE_LISTINGS.map((item: PropertyListing) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#0B0F19] text-[#F2D675] border border-[#D4AF37]/40">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#B89028] font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="text-lg font-black text-[#111827] group-hover:text-[#B89028] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                      {item.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#FDF8F0] border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#111827]">
                  <span>{item.type}</span>
                  <ArrowRight className="w-4 h-4 text-[#B89028] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Due Diligence Checklist */}
      <section className="bg-[#FFF9F0] py-20 border-b border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 text-[#B89028] text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>PROPERTY SAFETY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827]">
              Our Due Diligence <span className="text-gold-gradient">Standards</span>
            </h2>
            <div className="gold-divider mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-lg space-y-4">
            {[
              "30-Year Title Search & Unencumbered Ownership Verification",
              "State RERA Project Registration & Sanction Approval Verification",
              "Location Infrastructure & Connectivity Assessment",
              "Integrated Home Loan & Mortgage Sanction Support",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
                <CheckCircle2 className="w-5 h-5 text-[#B89028] shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-[#111827]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCtaSection />
    </main>
  );
}
