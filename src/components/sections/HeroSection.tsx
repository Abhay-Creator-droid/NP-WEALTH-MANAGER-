"use client";

import React from "react";
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles, PieChart, Layers } from "lucide-react";
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
  const heroImage = settings?.heroImageUrl;
  const heroBackground = settings?.heroBackgroundUrl;

  return (
    <section className="relative min-h-[90vh] bg-brand-gradient-diagonal text-white pt-32 pb-20 overflow-hidden flex items-center">
      
      {/* Background Subtle Gold Particle & Skyline Glow Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-subtle rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-dark/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
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

          {/* Right Side Financial Visualization */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Container Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none bg-brand-primary border border-gold-glow rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/60 backdrop-blur-xl overflow-hidden">
              
              {/* Top Bar Visual */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-700/60">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Wealth Strategy Desk
                  </span>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-gold-subtle text-gold-light border border-gold-glow">
                  Goal Aligned
                </span>
              </div>

              {/* Upward Growth Graph Simulation */}
              <div className="my-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Long-Term Wealth Trajectory</span>
                  <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Disciplined Growth</span>
                  </div>
                </div>

                {/* Animated SVG Upward Graph */}
                <div className="h-32 w-full bg-brand-dark/60 rounded-xl p-3 border border-slate-800 relative flex items-end">
                  <svg className="w-full h-full overflow-visible text-gold-primary" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Fill */}
                    <path
                      d="M0,90 Q 60,70 120,60 T 240,30 T 300,10 L 300,100 L 0,100 Z"
                      fill="url(#chartGradient)"
                    />
                    {/* Line */}
                    <path
                      d="M0,90 Q 60,70 120,60 T 240,30 T 300,10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Pulsing Target Dot */}
                    <circle cx="300" cy="10" r="5" fill="currentColor" className="animate-ping" />
                    <circle cx="300" cy="10" r="4" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>

              {/* Portfolio Allocation Cards Preview */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <PieChart className="w-4 h-4 text-gold-primary" />
                    <span className="text-[11px] text-slate-400">Investments</span>
                  </div>
                  <p className="text-sm font-bold text-white">Mutual Funds & SIP</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Layers className="w-4 h-4 text-gold-light" />
                    <span className="text-[11px] text-slate-400">Financing</span>
                  </div>
                  <p className="text-sm font-bold text-white">Home & Business</p>
                </div>
              </div>

              {/* Indian Skyline Silhouette Graphic */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Personalized Guidance</span>
                <span className="text-gold-light">Metros & Regional Support</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
