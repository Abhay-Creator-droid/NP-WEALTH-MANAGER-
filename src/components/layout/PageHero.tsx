"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { EASING } from "@/components/motion/MotionHelpers";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  bgImage: string;
  breadcrumbs?: BreadcrumbItem[];
  badgeText?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  bgImage,
  breadcrumbs,
  badgeText,
}) => {
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: title },
  ];
  const crumbs = breadcrumbs ?? defaultBreadcrumbs;

  return (
    <section className="relative w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] bg-black text-white overflow-hidden flex items-center pt-16">

      {/* 1. Cinematic Background Image with Scale Settle */}
      <motion.div
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: EASING }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* 2. Dark Gradient Overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/85 to-[#0B0F19]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-[#0B0F19]/30" />

      {/* 3. Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl space-y-5">

          {/* Eyebrow */}
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASING }}
        className="flex items-center gap-3"
      >
              <div className="h-0.5 w-8 bg-[#D4AF37]" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#F2D675]">
                {eyebrow}
              </span>
              {badgeText && (
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#F2D675]">
                  {badgeText}
                </span>
              )}
            </motion.div>

          {/* Title */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASING }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-black text-white tracking-tight leading-[1.1]"
            >
              {title}
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASING }}
            className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed font-medium max-w-xl"
          >
            {description}
          </motion.p>

          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: EASING }}
            aria-label="Breadcrumb"
            className="pt-1"
          >
            <ol className="flex items-center gap-2 text-xs font-semibold text-gray-300">
              {crumbs.map((item, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  <li>
                    {item.href ? (
                      <Link href={item.href} className="hover:text-[#F2D675] transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-[#F2D675] font-bold">{item.label}</span>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </motion.nav>
        </div>
      </div>
    </section>
  );
};
