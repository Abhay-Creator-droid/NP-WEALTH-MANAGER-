"use client";

import React from "react";
import { motion } from "framer-motion";
import { STATS_METRICS, STATS_DISCLAIMER } from "@/lib/data";
import { CountUpNumber, FadeIn, StaggerContainer, StaggerItem, EASING } from "@/components/motion/MotionHelpers";

export const TrustBar: React.FC = () => {
  return (
    <section id="stats" className="bg-[#0B0F19] text-white py-20 border-t border-[#D4AF37]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 4 Stats Cards Grid with CountUp Animation */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STATS_METRICS.map((stat, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.7)" }}
                transition={{ duration: 0.3, ease: EASING }}
                className="bg-[#111827] border border-[#D4AF37]/30 rounded-2xl p-8 text-center flex flex-col items-center justify-center shadow-2xl transition-all group h-full"
              >
                {/* CountUp Stat Value */}
                <div className="text-4xl sm:text-5xl font-black text-[#F2D675] tracking-tight mb-3 group-hover:scale-105 transition-transform duration-300">
                  <CountUpNumber value={stat.value} />
                </div>

                {/* Stat Label */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight group-hover:text-[#F2D675] transition-colors">
                  {stat.label}
                </h3>

                {/* Stat Subtext */}
                <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-[220px]">
                  {stat.subtext}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Divider Line & Disclaimer */}
        <FadeIn direction="up" delay={0.4}>
          <div className="pt-8 border-t border-gray-800/80 text-center">
            <p className="text-[11px] sm:text-xs text-gray-400 font-normal leading-relaxed max-w-4xl mx-auto">
              {STATS_DISCLAIMER}
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
