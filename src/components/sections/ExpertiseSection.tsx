"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  FileText,
  RefreshCw,
  CheckSquare,
  TrendingUp,
  UserCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { EXPERTISE_SERVICES, ExpertiseItem } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Home: Home,
  FileText: FileText,
  RefreshCw: RefreshCw,
  CheckSquare: CheckSquare,
  TrendingUp: TrendingUp,
  UserCheck: UserCheck,
};

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="bg-[#FDF8F0] py-20 border-b border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#B89028] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>SOLUTIONS & ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Our <span className="text-gold-gradient">Expertise</span>
          </h2>

          <div className="gold-divider mx-auto"></div>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            End-to-end mortgage syndication, real-asset guidance, and credit optimization structured for long-term financial security.
          </p>
        </div>

        {/* 6 Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERTISE_SERVICES.map((item: ExpertiseItem) => {
            const Icon = ICON_MAP[item.iconName] || Home;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 border border-[#D4AF37]/20 shadow-md shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#D4AF37]/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Top Border Highlight on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center shadow-lg border border-[#D4AF37]/40 group-hover:bg-[#D4AF37] group-hover:text-[#0B0F19] transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    {item.badge && (
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#B89028] border border-[#D4AF37]/30">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-[#111827] mb-3 group-hover:text-[#B89028] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-extrabold text-[#111827] group-hover:text-[#D4AF37] transition-colors">
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
