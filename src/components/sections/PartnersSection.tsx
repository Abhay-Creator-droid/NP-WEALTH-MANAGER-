"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";
import { PARTNERS_LIST, PartnerLogo } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem, EASING } from "@/components/motion/MotionHelpers";

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="bg-[#FFF9F0] py-20 border-b border-[#D4AF37]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#B89028] text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>INSTITUTIONAL SYNDICATION</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
              Our <span className="text-gold-gradient">Partners</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="gold-divider mx-auto"></div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Strategic relationships across 25+ leading public & private banks and prime housing finance institutions.
            </p>
          </FadeIn>
        </div>

        {/* Staggered Partners Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          {PARTNERS_LIST.map((partner: PartnerLogo) => (
            <StaggerItem key={partner.id}>
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "rgba(212, 175, 55, 0.7)" }}
                transition={{ duration: 0.25, ease: EASING }}
                className="bg-white rounded-2xl p-6 border border-[#D4AF37]/20 shadow-sm transition-all text-center flex flex-col items-center justify-center space-y-2 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center font-bold text-xs group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5 text-[#F2D675]" />
                </div>
                <span className="font-black text-sm text-[#111827] group-hover:text-[#B89028] transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2 py-0.5 rounded bg-gray-100">
                  {partner.category} Partner
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Note */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-8 text-center">
            <span className="text-xs text-gray-500 font-medium">
              * Bank logos and names are trademarks of their respective financial institutions. All partner relationships managed under applicable broker/syndication guidelines.
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
