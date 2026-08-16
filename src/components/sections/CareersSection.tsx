"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import { FadeIn, EASING } from "@/components/motion/MotionHelpers";

export const CareersSection: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  return (
    <section id="careers" className="bg-[#FFF9F0] py-20 border-b border-[#D4AF37]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Reveal Box */}
        <motion.div
          whileHover={{ borderColor: "rgba(212, 175, 55, 0.6)" }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          {/* Left Column Slide From Left */}
          <div className="lg:col-span-8 space-y-4">
            <FadeIn direction="right" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#B89028] text-xs font-extrabold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>CAREERS & OPPORTUNITIES</span>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
                Build Your Future <span className="text-gold-gradient">With Us</span>
              </h2>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                Join a team of driven financial professionals, mortgage specialists, and real asset advisors committed to integrity and excellence.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <div className="space-y-2 pt-2 text-xs font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89028]" />
                  <span>Merit-based advancement & mentorship from industry leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89028]" />
                  <span>Work across retail loans, mortgage syndication, and real estate</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column Slide From Right */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end">
            <FadeIn direction="left" delay={0.3}>
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openConsultationModal("Career Inquiry")}
                className="px-8 py-4 bg-[#0B0F19] text-[#F2D675] font-black text-sm rounded-xl shadow-lg hover:bg-[#D4AF37] hover:text-[#0B0F19] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </FadeIn>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
