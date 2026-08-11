"use client";

import React from "react";
import { TEAM_PLACEHOLDERS, TeamPlaceholder } from "@/lib/data";
import type { TeamMember } from "@prisma/client";
import { UserCheck, Award } from "lucide-react";

type DisplayMember = TeamMember | TeamPlaceholder;

const getMemberName = (m: DisplayMember) => ("name" in m ? m.name : m.title);
const getMemberDept = (m: DisplayMember) =>
  "designation" in m && m.designation ? m.designation : "department" in m ? m.department : "";
const getMemberRole = (m: DisplayMember) =>
  "designation" in m && m.designation ? m.designation : "role" in m ? m.role : "";
const getMemberBio = (m: DisplayMember) =>
  "bio" in m ? m.bio ?? "" : "bioPlaceholder" in m ? m.bioPlaceholder : "";
const getMemberExperience = (m: DisplayMember) =>
  "experienceLevel" in m ? m.experienceLevel : "designation" in m && m.designation ? m.designation : "";

interface TeamSectionProps {
  teamMembers?: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  const members: DisplayMember[] = teamMembers && teamMembers.length > 0 ? teamMembers : TEAM_PLACEHOLDERS;

  return (
    <section className="py-24 bg-white text-[#1A0505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-gold-primary uppercase tracking-widest block mb-2">
            CORPORATE LEADERSHIP & ADVISORY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-red">
            Meet Our Team
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Our advisory team brings structured capital market experience, loan syndication expertise, and real estate insights.
          </p>
        </div>

        {/* Team Placeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-gold-glow hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-20 h-20 rounded-2xl bg-brand-gradient text-gold-light flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  <UserCheck className="w-10 h-10 text-gold-primary" />
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-dark/10 text-brand-red">
                    {getMemberDept(member)}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-brand-red mb-1">
                  {getMemberName(member)}
                </h3>

                <p className="text-xs font-bold text-gold-primary mb-4">
                  {getMemberRole(member)}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {getMemberBio(member)}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-semibold text-brand-red">
                  <Award className="w-4 h-4 text-gold-primary" />
                  <span>{getMemberExperience(member)}</span>
                </div>
                <span className="text-[11px] text-slate-400">Editable Profile</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
