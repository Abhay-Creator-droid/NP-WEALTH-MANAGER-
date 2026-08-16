"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Sliders, Zap, Grid, Eye, Clock, Sparkles } from "lucide-react";
import { WHY_CHOOSE_US_PILLARS, WhyChoosePillar } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem, EASING } from "@/components/motion/MotionHelpers";

const ICON_MAP: Record<string, React.ElementType> = {
  Shield,
  Sliders,
  Zap,
  Grid,
  Eye,
  Clock,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="bg-[#FFF9F0] py-20 border-b border-[#D4AF37]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#B89028] text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>CLIENT-FIRST COMMITMENT</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
              Why Choose <span className="text-gold-gradient">NP Wealth Managers</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="gold-divider mx-auto"></div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Building long-term relationship trust through transparent communication, multi-lender access, and unbiased advisory.
            </p>
          </FadeIn>
        </div>

        {/* 6 Pillars Staggered Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_PILLARS.map((pillar: WhyChoosePillar) => {
            const Icon = ICON_MAP[pillar.iconName] || Shield;
            return (
              <StaggerItem key={pillar.id}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.6)" }}
                  transition={{ duration: 0.3, ease: EASING }}
                  className="bg-white rounded-2xl p-7 border border-[#D4AF37]/20 shadow-md hover:shadow-xl transition-all group h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: EASING }}
                    className="w-12 h-12 rounded-xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center mb-5 shadow border border-[#D4AF37]/30"
                  >
                    <Icon className="w-6 h-6 text-[#F2D675]" />
                  </motion.div>

                  <h3 className="text-lg font-black text-[#111827] mb-2.5 group-hover:text-[#B89028] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
