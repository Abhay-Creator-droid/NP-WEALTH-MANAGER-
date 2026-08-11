"use client";

import React from "react";
import Link from "next/link";
import { THREE_PRINCIPLES } from "@/lib/data";
import { ArrowRight, Compass, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

export const AboutSection: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  return (
    <section className="py-24 bg-white text-[#1A0505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10 border border-slate-200/80 bg-white p-8">
              
              {/* Gold Graphic Badge */}
              <div className="w-14 h-14 rounded-2xl bg-brand-dark text-gold-light flex items-center justify-center mb-6 shadow-md">
                <Compass className="w-8 h-8 text-gold-primary" />
              </div>

              <h3 className="text-2xl font-black text-brand-red mb-4">
                Personalized Financial Architecture
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We believe financial advice should be tailored, responsible, and transparent. Instead of generic products, we focus on matching options to your unique risk comfort and milestone timelines.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-gold-primary" />
                  <span>No Guaranteed Return Claims</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-gold-primary" />
                  <span>Transparent Lender & Product Disclosures</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-gold-primary" />
                  <span>Long-Term Relationship Orientation</span>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between text-xs">
                <span className="font-bold text-brand-red">Core Commitment</span>
                <span className="text-gold-primary font-semibold">Integrity & Confidentiality</span>
              </div>

            </div>
          </div>

          {/* Right Side Copy & Principles */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest block mb-2">
                ABOUT <span className="text-gold-primary">NP WEALTH</span> <span className="text-gold-light">MANAGERS</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-red leading-tight">
                Financial Guidance That Starts With Understanding You.
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Every financial journey is different. Our approach begins by understanding your goals, priorities and requirements before exploring suitable solutions.
            </p>

            {/* Three Principles Stack */}
            <div className="space-y-4 pt-2">
              {THREE_PRINCIPLES.map((principle) => (
                <div
                  key={principle.number}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:shadow-md hover:border-gold-glow transition-all duration-300 group"
                >
                  <div className="text-2xl font-black text-gold-primary group-hover:scale-105 transition-transform shrink-0 pt-0.5">
                    {principle.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-red mb-1">
                      {principle.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => openConsultationModal("Wealth Management")}
                className="px-6 py-3.5 bg-brand-mid hover:bg-brand-dark text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Discover Our Approach</span>
                <ArrowRight className="w-4 h-4 text-gold-light group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/about"
                className="text-xs sm:text-sm font-extrabold text-gold-primary hover:text-brand-red transition-colors"
              >
                Read Full Corporate Overview →
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
