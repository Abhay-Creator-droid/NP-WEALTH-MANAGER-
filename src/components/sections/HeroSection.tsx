"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import { EASING } from "@/components/motion/MotionHelpers";

export const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const { openConsultationModal } = useConsultation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-black text-white overflow-hidden flex items-center pt-24 pb-12"
    >
      {/* 1. Background Image with 2.5s Cinematic Zoom Settle */}
      <motion.div
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: EASING }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero-bg.jpg')` }}
      />

      {/* 2. Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: EASING }}
        className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/55 to-black/85"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* 3. Hero Content Container (Right-Aligned Column) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[75vh]">
          
          {/* Empty Left Column (55% visual space preserved) */}
          <div className="hidden lg:block lg:col-span-5" />

          {/* Right Column Content Container */}
          <div className="lg:col-span-7 space-y-6 text-left lg:pl-6">

            {/* Line-by-Line Headline Reveal */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.45, ease: EASING }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black text-white tracking-tight leading-[1.04]"
              >
                Build Your <br />
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: 0.58, ease: EASING }}
                  className="inline-block"
                >
                  Wealth.
                </motion.span>
              </motion.h1>
            </div>

            {/* Description Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASING }}
              className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-normal drop-shadow-sm"
            >
              Explore personalized financial, investment, real estate and loan solutions designed around your goals.
            </motion.p>

            {/* CTA Buttons Row */}
            <div className="flex flex-row items-center gap-4 pt-2">
              {/* Primary Gold CTA */}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.85, ease: EASING }}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openConsultationModal("Wealth Management")}
                className="px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#E5C158] via-[#F2D675] to-[#D4AF37] text-[#4A1515] font-black text-sm sm:text-base rounded-[20px] shadow-2xl hover:brightness-110 transition-all flex items-center justify-between gap-3 group cursor-pointer border border-[#F2D675]/50 min-w-[200px] sm:min-w-[220px]"
              >
                <span className="text-left font-black leading-tight tracking-tight">
                  Book a <br /> Consultation
                </span>
                <motion.div
                  className="w-8 h-8 rounded-full bg-[#4A1515]/10 flex items-center justify-center group-hover:translate-x-1.5 transition-transform"
                >
                  <ArrowRight className="w-4 h-4 text-[#4A1515]" />
                </motion.div>
              </motion.button>

              {/* Secondary Translucent CTA */}
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.0, ease: EASING }}
                whileHover={{ y: -3, backgroundColor: "rgba(0,0,0,0.6)", borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="px-6 sm:px-8 py-4 sm:py-5 bg-black/40 text-white font-bold text-sm sm:text-base rounded-[20px] border border-white/25 backdrop-blur-md transition-all text-left flex items-center justify-center leading-tight min-w-[180px] sm:min-w-[200px]"
              >
                <span className="text-left font-bold leading-tight">
                  Explore Our <br /> Services
                </span>
              </motion.a>
            </div>

            {/* Bottom Trust Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.15, ease: EASING }}
              className="pt-8 border-t border-white/15 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-gray-200"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F2D675]" />
                <span className="font-bold text-white">Trusted Financial Guidance</span>
              </div>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span>Investment</span>
              </div>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span>Finance</span>
              </div>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span>Real Estate</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
