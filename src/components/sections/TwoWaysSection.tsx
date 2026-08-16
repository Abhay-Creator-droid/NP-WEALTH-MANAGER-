"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Landmark, Building2, Sparkles } from "lucide-react";
import { TWO_CORE_AREAS } from "@/lib/data";

export const TwoWaysSection: React.FC = () => {
  return (
    <section className="bg-[#0B0F19] text-white py-24 border-b border-[#D4AF37]/30 relative overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1F2937]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F2D675] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F2D675]" />
            <span>CORE ADVISORY DIVISIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Two Ways <span className="text-gold-gradient">We Work</span>
          </h2>

          <div className="gold-divider mx-auto"></div>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            Whether you require credit syndication or real-asset acquisition, our twin desks deliver end-to-end guidance.
          </p>
        </div>

        {/* Two Large Core Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Column 1: LOANS */}
          <div className="bg-[#111827] border-2 border-[#D4AF37]/40 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/80 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-full pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center border border-[#D4AF37]/40 shadow-inner">
                  <Landmark className="w-8 h-8 text-[#F2D675]" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#F2D675] px-3 py-1 bg-[#D4AF37]/15 rounded-full border border-[#D4AF37]/30">
                  DIVISION 01
                </span>
              </div>

              <span className="text-xs font-black uppercase tracking-widest text-gray-400 block mb-1">
                {TWO_CORE_AREAS[0].category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 group-hover:text-[#F2D675] transition-colors">
                {TWO_CORE_AREAS[0].title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed font-medium mb-8">
                {TWO_CORE_AREAS[0].subtitle}
              </p>

              <div className="space-y-3.5 mb-8">
                {TWO_CORE_AREAS[0].items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-[#F2D675] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={TWO_CORE_AREAS[0].ctaLink}
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-[#D4AF37] text-[#0B0F19] font-black text-sm rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 group-hover:gap-3"
            >
              <span>{TWO_CORE_AREAS[0].ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Column 2: REAL ASSETS */}
          <div className="bg-[#111827] border-2 border-[#D4AF37]/40 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/80 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-full pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center border border-[#D4AF37]/40 shadow-inner">
                  <Building2 className="w-8 h-8 text-[#F2D675]" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#F2D675] px-3 py-1 bg-[#D4AF37]/15 rounded-full border border-[#D4AF37]/30">
                  DIVISION 02
                </span>
              </div>

              <span className="text-xs font-black uppercase tracking-widest text-gray-400 block mb-1">
                {TWO_CORE_AREAS[1].category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 group-hover:text-[#F2D675] transition-colors">
                {TWO_CORE_AREAS[1].title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed font-medium mb-8">
                {TWO_CORE_AREAS[1].subtitle}
              </p>

              <div className="space-y-3.5 mb-8">
                {TWO_CORE_AREAS[1].items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-[#F2D675] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={TWO_CORE_AREAS[1].ctaLink}
              className="w-full py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-black text-sm rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 group-hover:gap-3 group-hover:border-[#D4AF37]"
            >
              <span>{TWO_CORE_AREAS[1].ctaText}</span>
              <ArrowRight className="w-4 h-4 text-[#F2D675]" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
