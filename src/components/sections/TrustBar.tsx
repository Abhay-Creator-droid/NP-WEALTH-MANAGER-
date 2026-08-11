"use client";

import React from "react";
import { Briefcase, TrendingUp, Building, Landmark } from "lucide-react";

export const TrustBar: React.FC = () => {
  const pillars = [
    {
      title: "WEALTH MANAGEMENT",
      description: "Structured capital allocation aligned with long-term financial priorities.",
      icon: Briefcase,
    },
    {
      title: "INVESTMENT PLANNING",
      description: "Disciplined SIP & Mutual Fund exploration tailored to risk profiles.",
      icon: TrendingUp,
    },
    {
      title: "REAL ESTATE",
      description: "Curated residential & commercial property exploration opportunities.",
      icon: Building,
    },
    {
      title: "LOAN SOLUTIONS",
      description: "Home, business, personal & mortgage loan guidance across partner lenders.",
      icon: Landmark,
    },
  ];

  return (
    <section className="bg-brand-dark text-white py-10 border-y border-gold-glow shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-glow/40 transition-all duration-300 group"
              >
                  <div className="w-12 h-12 rounded-xl bg-gold-subtle border border-gold-glow flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-gold-light" />
                </div>
                <div>
                    <h4 className="text-xs font-black text-gold-primary tracking-wider uppercase mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
