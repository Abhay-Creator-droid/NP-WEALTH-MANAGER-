"use client";

import React from "react";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import { COMPANY_CONFIG } from "@/lib/config";

export const FinalCtaSection: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  return (
    <section className="bg-[#0B0F19] text-white py-20 border-t border-[#D4AF37]/30 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F2D675] text-xs font-extrabold uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-[#F2D675]" />
          <span>START YOUR FINANCIAL JOURNEY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Ready to Plan Your <br className="hidden sm:inline" />
          <span className="text-gold-gradient">Financial Future?</span>
        </h2>

        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Book a complimentary consultation with our wealth advisors to evaluate your home loan eligibility, LAP leverage, or real-asset investment goals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => openConsultationModal("General Consultation")}
            className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-[#D4AF37] text-[#0B0F19] font-black text-base rounded-2xl shadow-xl shadow-[#D4AF37]/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2.5 group"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-base rounded-2xl border border-white/20 backdrop-blur-md transition-all text-center flex items-center justify-center gap-2.5"
          >
            <Phone className="w-4.5 h-4.5 text-[#F2D675]" />
            <span>Call / WhatsApp</span>
          </a>
        </div>

        <p className="text-xs text-gray-400 font-medium">
          Confidential · Zero Obligation · Unbiased Advisory
        </p>

      </div>
    </section>
  );
};
