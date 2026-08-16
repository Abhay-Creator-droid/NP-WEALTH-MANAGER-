import React from "react";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Client Stories & Testimonials | NP Wealth Managers",
  description: "Read verified client testimonials and feedback from home buyers, business owners, and investors advised by NP Wealth Managers.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Page Hero */}
      <section className="bg-[#0B0F19] text-white py-16 border-b border-[#D4AF37]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F2D675] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F2D675]" />
            <span>CLIENT EXPERIENCES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Client <span className="text-gold-gradient">Stories</span>
          </h1>

          <div className="gold-divider mx-auto"></div>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Real feedback and experience stories from home loan applicants, property buyers, and wealth planning clients.
          </p>
        </div>
      </section>

      {/* Testimonials Main Component */}
      <TestimonialsSection />

      {/* Track Record Stats */}
      <TrustBar />

      {/* Final CTA */}
      <FinalCtaSection />
    </main>
  );
}
