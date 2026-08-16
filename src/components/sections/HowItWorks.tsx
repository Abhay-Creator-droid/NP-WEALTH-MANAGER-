"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HOW_WE_WORK_STEPS } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem, EASING } from "@/components/motion/MotionHelpers";

export const HowItWorks: React.FC = () => {
  return (
    <section id="approach" className="bg-[#FDF8F0] py-20 border-b border-[#D4AF37]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#B89028] text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>OUR METHODOLOGY</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
              Our <span className="text-gold-gradient">Approach</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="gold-divider mx-auto"></div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              A structured, 4-step advisory process designed to move seamlessly from initial discovery to successful execution.
            </p>
          </FadeIn>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {/* Animated Connecting Line background on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 z-0 -translate-y-6 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.6, delay: 0.3, ease: EASING }}
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-[#B89028] origin-left"
            />
          </div>

          {HOW_WE_WORK_STEPS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.2, ease: EASING }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-7 border border-[#D4AF37]/20 shadow-md hover:shadow-xl transition-all relative z-10 flex flex-col justify-between group h-full"
            >
              <div>
                {/* Large Step Badge */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="w-14 h-14 rounded-2xl bg-[#0B0F19] text-[#F2D675] font-black text-xl flex items-center justify-center mb-6 shadow-md border border-[#D4AF37]/40 group-hover:bg-[#D4AF37] group-hover:text-[#0B0F19] transition-colors duration-300"
                >
                  {item.step}
                </motion.div>

                <h3 className="text-xl font-black text-[#111827] mb-2.5 group-hover:text-[#B89028] transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] font-bold text-[#B89028] uppercase tracking-wider">
                <span>Step {idx + 1} of 4</span>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
