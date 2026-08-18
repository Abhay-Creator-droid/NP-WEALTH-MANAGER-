"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Target, Award } from "lucide-react";
import { LEADERSHIP_TEAM, LeadershipMember } from "@/lib/data";
import { FadeIn, ClipReveal, StaggerContainer, StaggerItem, EASING } from "@/components/motion/MotionHelpers";

export const TeamSection: React.FC = () => {
  return (
    <section id="leadership" className="bg-[#FFF9F0] py-20 border-b border-[#D4AF37]/20 relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#B89028] text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>EXECUTIVE LEADERSHIP</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
              Our <span className="text-gold-gradient">Leadership</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="gold-divider mx-auto"></div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Guided by seasoned financial leaders with proven backgrounds in wealth management, credit syndication, and real estate advisory.
            </p>
          </FadeIn>
        </div>

        {/* Leadership Team Cards (Desktop: 2 cards side-by-side, Mobile: stacked) */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {LEADERSHIP_TEAM.map((member: LeadershipMember) => (
            <StaggerItem key={member.id}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.6)" }}
                transition={{ duration: 0.35, ease: EASING }}
                className="bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-lg hover:shadow-2xl transition-all group flex flex-col justify-between h-full"
              >
                <div>
                  {/* Member Photo with ClipReveal */}
                  <ClipReveal direction="top" duration={0.8}>
                    <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-50">
                      <Image
                        src={member.photoUrl}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
                    </div>
                  </ClipReveal>

                  {/* Member Details */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-black text-[#111827] mb-1 group-hover:text-[#B89028] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-[#B89028] uppercase tracking-wider">
                        {member.designation}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed font-normal">
                      {member.bio}
                    </p>

                    {/* Mission Highlight */}
                    {member.mission && (
                      <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#D4AF37]/30 flex items-start gap-3">
                        <Target className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-extrabold uppercase text-[#B89028] tracking-widest block">
                            Mission
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-[#111827] mt-0.5 leading-relaxed">
                            &ldquo;{member.mission}&rdquo;
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-3.5 bg-[#FDF8F0] border-t border-[#D4AF37]/15 flex items-center gap-2 text-xs text-[#B89028] font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Executive Leadership</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

