"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import type { SiteSettings } from "@prisma/client";

interface HeroSectionProps {
  settings: SiteSettings | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ settings }) => {
  const { openConsultationModal } = useConsultation();
  const heading = settings?.heroHeading ?? "Build Your Wealth.";
  const subtitle = settings?.heroSubtitle ?? "Explore personalized financial, investment, real estate and loan solutions designed around your goals.";
  const ctaPrimaryText = settings?.heroCtaPrimaryText ?? "Book a Consultation";
  const ctaPrimaryLink = settings?.heroCtaPrimaryLink ?? "#";
  const ctaSecondaryText = settings?.heroCtaSecondaryText ?? "Explore Our Services";
  const ctaSecondaryLink = settings?.heroCtaSecondaryLink ?? "#services";
  const badgeText = settings?.heroBadgeText ?? "SMARTER FINANCIAL DECISIONS";
  const heroBackground = settings?.heroBackgroundUrl ?? settings?.heroImageUrl;

  return (
    <section className="relative min-h-screen bg-brand-gradient-diagonal text-white -mt-24 pt-24 pb-20 overflow-hidden flex items-center">
      {heroBackground && (
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url("${heroBackground}")`,
            backgroundPosition: "left center",
          }}
          aria-hidden="true"
        />
      )}

      {/* A softer blue tint preserves the photo logo while keeping the hero readable. */}
      {heroBackground && (
        <div
          className="absolute inset-0 bg-sky-300/25 mix-blend-multiply"
          aria-hidden="true"
        />
      )}
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,18,0.04)_0%,rgba(8,12,18,0.10)_38%,rgba(8,12,18,0.70)_72%,rgba(8,12,18,0.88)_100%)]"
        aria-hidden="true"
      />

      {/* Background Subtle Gold Particle & Skyline Glow Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-subtle rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-dark/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="hidden lg:block lg:col-span-7" aria-hidden="true" />

          {/* Right Side Copy */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow & Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-subtle border border-gold-glow text-gold-light text-xs font-extrabold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-light" />
              <span>{badgeText}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              {heading}
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  if (ctaPrimaryLink === "#") {
                    openConsultationModal("Wealth Management");
                  } else {
                    window.location.href = ctaPrimaryLink;
                  }
                }}
                className="w-full sm:w-auto px-8 py-4 bg-gold-gradient text-brand-red font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-gold-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>{ctaPrimaryText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={ctaSecondaryLink}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base rounded-2xl border border-white/20 backdrop-blur-md transition-all text-center"
              >
                {ctaSecondaryText}
              </a>
            </div>

            {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-700/50 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-light" />
                <span className="font-semibold">Trusted Financial Guidance</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-primary"></span>
                <span>Investment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-primary"></span>
                <span>Finance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-primary"></span>
                <span>Real Estate</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
