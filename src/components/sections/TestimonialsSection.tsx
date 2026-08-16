"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles, MapPin } from "lucide-react";
import { TESTIMONIALS_LIST, TestimonialItem } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem, EASING } from "@/components/motion/MotionHelpers";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#FDF8F0] py-20 border-b border-[#D4AF37]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#B89028] text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>VERIFIED FEEDBACK</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
              Client <span className="text-gold-gradient">Stories</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="gold-divider mx-auto"></div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Read how we have helped families and business owners achieve financial goals and secure competitive home financing.
            </p>
          </FadeIn>
        </div>

        {/* Staggered Testimonials Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_LIST.map((item: TestimonialItem) => (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.6)" }}
                transition={{ duration: 0.3, ease: EASING }}
                className="bg-white rounded-3xl p-8 border border-[#D4AF37]/25 shadow-lg flex flex-col justify-between group relative h-full"
              >
                <div>
                  {/* Rating & Animated Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Quote className="w-8 h-8 text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors" />
                    </motion.div>
                  </div>

                  {/* Quote Text */}
                  <p className="text-gray-700 text-sm leading-relaxed font-medium mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-base font-black text-[#111827]">
                    {item.name}
                  </h4>

                  <p className="text-xs font-bold text-[#B89028] uppercase tracking-wider mb-1">
                    {item.service}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium">
                    <span>{item.role}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
