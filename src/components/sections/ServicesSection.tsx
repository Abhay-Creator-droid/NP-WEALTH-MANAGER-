"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  FileCheck2,
  RefreshCw,
  Building,
  Landmark,
  Briefcase,
  ArrowRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SERVICES_CATALOG } from "@/lib/data";
import { useConsultation } from "@/context/ConsultationContext";
import { FadeIn, StaggerContainer, StaggerItem, EASING } from "@/components/motion/MotionHelpers";

const iconMap: Record<string, LucideIcon> = {
  Home,
  FileCheck2,
  RefreshCw,
  Building,
  Landmark,
  Briefcase,
};

export const ServicesSection: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  return (
    <section id="services" className="relative bg-[#0B0F19] text-white py-24 border-b border-[#D4AF37]/30 overflow-hidden scroll-mt-16">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F2D675] text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#F2D675]" />
              <span>SOLUTIONS & ADVISORY</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our <span className="text-gold-gradient">Services</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="gold-divider mx-auto"></div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              Comprehensive home financing, loan against property leverage, real estate advisory, and wealth management solutions.
            </p>
          </FadeIn>
        </div>

        {/* Staggered Service Cards Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_CATALOG.map((service) => {
            const Icon = iconMap[service.iconName] ?? Briefcase;

            return (
              <StaggerItem key={service.id}>
                <motion.article
                  whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.8)" }}
                  transition={{ duration: 0.35, ease: EASING }}
                  className="bg-[#111827] rounded-3xl p-8 border border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between group relative overflow-hidden h-full"
                >
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      className="w-14 h-14 rounded-2xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center mb-6 shadow-md border border-[#D4AF37]/40 group-hover:bg-[#D4AF37] group-hover:text-[#0B0F19] transition-colors duration-300"
                    >
                      <Icon className="w-7 h-7" />
                    </motion.div>

                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#F2D675] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openConsultationModal(service.title)}
                      className="text-xs font-black text-[#F2D675] hover:underline flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer"
                    >
                      <span>Consult Advisor</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
