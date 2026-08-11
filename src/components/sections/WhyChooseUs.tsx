"use client";

import React from "react";
import { UserCheck, ShieldCheck, Layers, Handshake, Sparkles } from "lucide-react";
import { WHY_CHOOSE_US_PILLARS } from "@/lib/data";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  UserCheck: UserCheck,
  ShieldCheck: ShieldCheck,
  Layers: Layers,
  Handshake: Handshake,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden border-t border-gold-glow">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-subtle rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-subtle border border-gold-glow text-gold-light text-xs font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR FOUNDATIONAL VALUES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Why Choose <span className="text-gold-gradient">NP Wealth Managers?</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Built on core principles of fiduciary integrity, customized financial options, and durable relationship trust.
          </p>
        </div>

        {/* 4 Pillars Grid with Subtle Gold Connecting Line Accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {WHY_CHOOSE_US_PILLARS.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div
                key={pillar.id}
                className="bg-brand-gradient border border-gold-glow rounded-3xl p-8 hover:border-gold-glow hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-gold-subtle/10 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge */}
                  <div className="text-xs font-black text-gold-light uppercase tracking-widest mb-4">
                    Pillar 0{idx + 1}
                  </div>

                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-gold-subtle border border-gold-glow text-gold-light flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-primary group-hover:text-brand-red transition-all duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-gold-light transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 text-[11px] text-slate-400 font-medium">
                  NP Wealth Pillar Standard
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
