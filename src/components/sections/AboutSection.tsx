"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import { FadeIn, ClipReveal, StaggerContainer, StaggerItem, EASING } from "@/components/motion/MotionHelpers";

export const AboutSection: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  return (
    <section id="about" className="py-24 bg-[#FDF8F0] text-[#111827] relative border-b border-[#D4AF37]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Editorial Card with ClipReveal */}
          <div className="lg:col-span-5 relative">
            <ClipReveal direction="left" duration={0.9}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: EASING }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 bg-white p-8 space-y-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center shadow-md border border-[#D4AF37]/40 group-hover:scale-105 transition-transform">
                  <Compass className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-black text-[#111827]">
                  Personalized Financial Architecture
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                  We believe financial advice should be tailored, responsible, and transparent. Instead of generic products, we focus on matching options to your unique risk comfort and milestone timelines.
                </p>

                <StaggerContainer staggerDelay={0.12} className="space-y-3 pt-4 border-t border-gray-100">
                  {[
                    "Transparent Lender & Product Disclosures",
                    "Unbiased Multi-Bank Syndication",
                    "Long-Term Relationship Orientation",
                  ].map((item, idx) => (
                    <StaggerItem key={idx}>
                      <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#B89028]" />
                        <span>{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="pt-2 p-4 rounded-xl bg-[#FFF9F0] border border-[#D4AF37]/25 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#111827]">Core Commitment</span>
                  <span className="text-[#B89028] font-bold">Integrity & Confidentiality</span>
                </div>
              </motion.div>
            </ClipReveal>
          </div>

          {/* Right Side Editorial Text Reveal */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#B89028] text-xs font-extrabold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>ABOUT NP WEALTH MANAGERS</span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-tight tracking-tight">
                Financial Guidance That Starts With <span className="text-gold-gradient">Understanding You</span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
                Every financial journey is different. Our approach begins by understanding your goals, priorities, and requirements before exploring suitable solutions across wealth, lending, and real assets.
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.15} className="space-y-4 pt-2">
              {[
                { number: "01", title: "Understand", desc: "Share your financial objectives, capital preferences, or credit requirements." },
                { number: "02", title: "Plan", desc: "We evaluate eligibility, compare lender products, and structure a custom solution." },
                { number: "03", title: "Execute & Support", desc: "Seamless execution through guided documentation, legal checks, and ongoing reviews." },
              ].map((item) => (
                <StaggerItem key={item.number}>
                  <motion.div
                    whileHover={{ x: 4, borderColor: "#D4AF37" }}
                    transition={{ duration: 0.3, ease: EASING }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#D4AF37]/20 shadow-sm transition-all"
                  >
                    <div className="text-xl font-black text-[#B89028] shrink-0 pt-0.5">
                      {item.number}
                    </div>
                    <div>
                      <h4 className="text-base font-black text-[#111827] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn direction="up" delay={0.5}>
              <div className="pt-4">
                <motion.button
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openConsultationModal("General Consultation")}
                  className="px-7 py-3.5 bg-[#0B0F19] text-[#F2D675] font-black text-xs sm:text-sm rounded-xl shadow-lg hover:bg-[#D4AF37] hover:text-[#0B0F19] transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Book Advisory Session</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </FadeIn>

          </div>

        </div>

      </div>
    </section>
  );
};
