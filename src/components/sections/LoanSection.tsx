"use client";

import React from "react";
import { Home, Wallet, Building2, FileCheck2, ArrowRight, ShieldCheck } from "lucide-react";
import { LOAN_PROCESS_STEPS } from "@/lib/data";
import { useConsultation } from "@/context/ConsultationContext";

export const LoanSection: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  const loanCards = [
    {
      title: "Home Loan",
      icon: Home,
      tag: "Property Purchase",
      description: "Assistance with housing purchase, plot construction, or balance transfers at competitive terms.",
    },
    {
      title: "Personal Loan",
      icon: Wallet,
      tag: "Unsecured Liquidity",
      description: "Financing options for personal liquidity needs, medical emergencies, or debt consolidation.",
    },
    {
      title: "Business Loan",
      icon: Building2,
      tag: "Commercial Expansion",
      description: "Working capital, machinery capital, and growth financing for eligible enterprises.",
    },
    {
      title: "Loan Against Property",
      icon: FileCheck2,
      tag: "Asset Mortgage",
      description: "Unlock high-ticket liquidity against residential or commercial property collateral.",
    },
  ];

  return (
    <section id="loans" className="py-24 bg-white text-[#1A0505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-gold-primary uppercase tracking-widest block mb-2">
            RESPONSIBLE FINANCING ADVISORY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-red">
            Finance Your Next Step
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Explore lender options, clear documentation guidelines, and structured evaluation without unrealistic promises.
          </p>
        </div>

        {/* 4 Loan Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {loanCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-gold-glow hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-dark text-gold-light flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 uppercase">
                      {card.tag}
                    </span>
                  </div>

                    <h3 className="text-xl font-extrabold text-brand-red mb-3 group-hover:text-gold-primary transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <button
                  onClick={() => openConsultationModal(card.title)}
                  className="w-full py-3 bg-brand-dark hover:bg-brand-dark/90 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-primary" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Loan Application Process Flow */}
        <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gold-glow">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-gold-light uppercase tracking-widest block mb-2">
              TRANSPARENT WORKFLOW
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              The 4-Step Loan Evaluation Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {LOAN_PROCESS_STEPS.map((stepItem) => (
              <div
                key={stepItem.step}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 relative hover:border-gold-glow/50 transition-colors"
              >
                <div className="text-3xl font-black text-gold-primary mb-3">
                  {stepItem.step}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{stepItem.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-primary" />
              <span>Lender terms & conditions, interest rates, and approval depend strictly on applicant eligibility.</span>
            </div>
            <button
              onClick={() => openConsultationModal("Home Loan")}
              className="px-6 py-2.5 bg-gold-gradient text-brand-red font-extrabold rounded-xl shadow shrink-0"
            >
              Start Eligibility Check
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
