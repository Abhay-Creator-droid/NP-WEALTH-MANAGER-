"use client";

import React from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import { COMPANY_CONFIG } from "@/lib/config";

export const FinalCtaSection: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden border-t border-gold-glow">
      
      {/* Background Subtle Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-subtle rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-subtle border border-gold-glow text-gold-light text-xs font-extrabold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TAKE THE NEXT STEP</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
          Your Financial Goals Start With A Conversation.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Tell us what you are planning. We’ll help you explore the next step.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => openConsultationModal("Wealth Management")}
            className="w-full sm:w-auto px-8 py-4 bg-gold-gradient text-brand-red font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-gold-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Book A Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-dark/90 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg border border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 font-medium pt-4">
          Strictly Confidential • No Obligation Initial Discussion
        </p>

      </div>
    </section>
  );
};
