"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Award } from "lucide-react";
import { LEADERSHIP_TEAM, LeadershipMember } from "@/lib/data";
import { FadeIn, ClipReveal, StaggerContainer, StaggerItem, EASING } from "@/components/motion/MotionHelpers";

export const TeamSection: React.FC = () => {
  return (
    <section id="leadership" className="bg-[#FFF9F0] py-20 border-b border-[#D4AF37]/20 relative overflow-hidden">
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

        {/* Leadership Team Cards with ClipReveal */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <div className="relative h-72 w-full overflow-hidden bg-gray-900">
                      <Image
                        src={member.photoUrl}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#D4AF37] text-[#0B0F19]">
                          {member.experience}
                        </span>
                        {member.linkedinUrl && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#D4AF37] text-white hover:text-[#0B0F19] flex items-center justify-center backdrop-blur-md transition-colors"
                            aria-label={`${member.name} Profile`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </ClipReveal>

                  {/* Member Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-[#111827] mb-1 group-hover:text-[#B89028] transition-colors">
                      {member.name}
                    </h3>

                    <p className="text-xs font-bold text-[#B89028] uppercase tracking-wider mb-4">
                      {member.designation}
                    </p>

                    <p className="text-gray-600 text-xs leading-relaxed font-medium">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3 bg-[#FDF8F0] border-t border-gray-100 flex items-center gap-2 text-[11px] text-[#B89028] font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Executive Advisory Member</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
