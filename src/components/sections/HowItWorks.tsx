"use client";

import React from "react";
import { HOW_IT_WORKS_STEPS } from "@/lib/data";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

export const HowItWorks: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  return (
    <section className="py-24 bg-white text-[#1A0505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-gold-primary uppercase tracking-widest block mb-2">
            SIMPLE & STRUCTURED
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-red">
            How It Works
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A transparent 4-step advisory process built around your personal goals and requirements.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-slate-200 rounded-3xl p-6 hover:border-gold-glow hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                  <div className="text-4xl font-black text-gold-primary mb-4 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                  <h3 className="text-xl font-extrabold text-brand-red mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-gold-primary">
                <CheckCircle className="w-4 h-4 text-gold-primary" />
                <span>Goal Centric</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={() => openConsultationModal("Wealth Management")}
            className="px-8 py-4 bg-brand-dark hover:bg-brand-dark/90 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-navy-900/20 transition-all inline-flex items-center gap-3 group"
          >
            <span>Start A Conversation</span>
            <ArrowRight className="w-4 h-4 text-gold-light group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
