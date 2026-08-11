"use client";

import React, { useState } from "react";
import { ShieldCheck, Target, Activity, PieChart, Clock, Sparkles, ArrowRight } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

export const WealthManagementSection: React.FC = () => {
  const { openConsultationModal } = useConsultation();
  const [activeTab, setActiveTab] = useState<number>(0);

  const dashboardPillars = [
    {
      title: "Goal Planning",
      icon: Target,
      tag: "Step 01",
      detail: "Define horizon timelines for child education, property purchase, retirement, or capital growth.",
      metricLabel: "Planning Horizon",
      metricValue: "5 - 25 Years",
    },
    {
      title: "Risk Understanding",
      icon: Activity,
      tag: "Step 02",
      detail: "Evaluate personal market risk tolerance, cash-flow stability, and liquidity requirements.",
      metricLabel: "Profile Comfort",
      metricValue: "Conservative to Dynamic",
    },
    {
      title: "Investment Options",
      icon: PieChart,
      tag: "Step 03",
      detail: "Explore equity funds, debt instruments, hybrid allocations, and tax-saving ELSS options.",
      metricLabel: "Allocation Model",
      metricValue: "Multi-Asset Strategy",
    },
    {
      title: "Portfolio Perspective",
      icon: ShieldCheck,
      tag: "Step 04",
      detail: "Maintain broad asset diversification to mitigate concentration risk across sectors.",
      metricLabel: "Diversification Focus",
      metricValue: "Risk-Adjusted Stability",
    },
    {
      title: "Long-Term Planning",
      icon: Clock,
      tag: "Step 05",
      detail: "Periodic rebalancing aligned with market conditions and evolving family milestones.",
      metricLabel: "Review Horizon",
      metricValue: "Disciplined Periodic Audit",
    },
  ];

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden border-t border-gold-glow">
      
      {/* Background Decorative Particle Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-subtle rounded-full blur-3xl pointer-events-none transform -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-mid/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-subtle border border-gold-glow text-gold-light text-xs font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WEALTH ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Your Goals. Your Strategy. <span className="text-gold-gradient">Your Future.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Structured wealth guidance built on understanding your individual risk profile, investment horizons, and capital priorities.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Pillar Selector List (Left Side) */}
          <div className="lg:col-span-5 space-y-3">
            {dashboardPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activeTab === idx;
              return (
                <div
                  key={pillar.title}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? "bg-brand-gradient border border-gold-glow shadow-lg shadow-gold-subtle translate-x-1" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? "bg-gold-gradient text-brand-red" : "bg-white/10 text-slate-300"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gold-light uppercase tracking-wider block">
                        {pillar.tag}
                      </span>
                      <h4 className="text-base font-extrabold text-white">{pillar.title}</h4>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-gold-light translate-x-1" : "text-slate-500"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Interactive Preview Dashboard Card (Right Side) */}
          <div className="lg:col-span-7">
            <div className="bg-brand-gradient border border-gold-glow rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Header Ribbon */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-700/80 mb-6">
                <div>
                  <span className="text-xs font-semibold text-slate-400">Selected Strategy View</span>
                    <h3 className="text-2xl font-black text-gold-light">{dashboardPillars[activeTab].title}</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-gold-subtle border border-gold-glow text-xs font-bold text-gold-light">
                  {dashboardPillars[activeTab].tag}
                </div>
              </div>

              {/* Strategy Details Body */}
              <p className="text-slate-200 text-base leading-relaxed mb-8">
                {dashboardPillars[activeTab].detail}
              </p>

              {/* Dynamic Interactive Metrics Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Focus Parameter</span>
                  <span className="text-base font-extrabold text-white">
                    {dashboardPillars[activeTab].metricLabel}
                  </span>
                </div>
                  <div className="p-4 rounded-xl bg-gold-subtle border border-gold-glow">
                  <span className="text-xs text-gold-light block mb-1">Approach Orientation</span>
                  <span className="text-base font-extrabold text-gold-light">
                    {dashboardPillars[activeTab].metricValue}
                  </span>
                </div>
              </div>

              {/* Financial Responsibility Disclaimer Note */}
              <div className="p-4 rounded-xl bg-black/40 border border-slate-800 text-xs text-slate-400 leading-relaxed mb-8">
                <strong className="text-slate-300">Responsible Guidance Note:</strong> Investment options and portfolio allocation strategies are customized based on client discussions, risk tolerance assessment, and regulatory guidelines. Past performance does not guarantee future results.
              </div>

              {/* Section CTA Button */}
              <button
                onClick={() => openConsultationModal("Wealth Management")}
                className="w-full py-4 bg-gold-gradient text-brand-red font-black text-sm sm:text-base rounded-xl shadow-xl shadow-gold-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Start Your Financial Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
