"use client";

import React from "react";
import { TESTIMONIAL_PLACEHOLDERS } from "@/lib/data";
import type { Testimonial } from "@prisma/client";
import { Quote, ShieldCheck } from "lucide-react";

type TestimonialPlaceholder = (typeof TESTIMONIAL_PLACEHOLDERS)[number];
type DisplayTestimonial = Testimonial | TestimonialPlaceholder;

const getTestimonialTag = (t: DisplayTestimonial) =>
  "service" in t && t.service ? t.service : "tag" in t ? t.tag : "";
const getTestimonialText = (t: DisplayTestimonial) => ("text" in t ? t.text : "");
const getTestimonialName = (t: DisplayTestimonial) =>
  "clientName" in t ? t.clientName : "clientRole" in t ? t.clientRole : "";
const getTestimonialLocation = (t: DisplayTestimonial) => t.location ?? "";

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const entries: DisplayTestimonial[] = testimonials && testimonials.length > 0 ? testimonials : TESTIMONIAL_PLACEHOLDERS;

  return (
    <section className="py-24 bg-white text-[#1A0505] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-gold-primary uppercase tracking-widest block mb-2">
            CLIENT FEEDBACK PLATFORM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-red">
            Verified Client Reviews & Insights
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            We prioritize authentic compliance and privacy. Verified client feedback is published following explicit client consent.
          </p>
        </div>

        {/* Testimonials Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {entries.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-brand-dark/10 text-brand-red">
                    {getTestimonialTag(t)}
                  </span>
                  <Quote className="w-8 h-8 text-gold-primary/40" />
                </div>

                <p className="text-sm text-slate-600 italic leading-relaxed mb-6">
                  &ldquo;{getTestimonialText(t)}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-brand-red">{getTestimonialName(t)}</h4>
                  <span className="text-slate-400 font-medium">{getTestimonialLocation(t)}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 font-semibold text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-gold-primary" />
                  <span>Authorized Card</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Note */}
        <div className="mt-10 p-4 rounded-2xl bg-white border border-slate-200 text-center max-w-2xl mx-auto text-xs text-slate-500">
          <strong className="text-brand-red">Privacy Policy Note:</strong> In accordance with financial privacy standards, NP Wealth Managers only publishes testimonials after obtaining written authorization.
        </div>

      </div>
    </section>
  );
};
