"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, Tag } from "lucide-react";
import { RESOURCE_ARTICLES, ResourceArticle } from "@/lib/data";

const CATEGORIES = ["All", "Loans", "Real Estate", "Investment", "Finance"];

export default function ResourcesPage() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredArticles = selectedCat === "All"
    ? RESOURCE_ARTICLES
    : RESOURCE_ARTICLES.filter((a) => a.category === selectedCat);

  const featured = RESOURCE_ARTICLES.find((a) => a.featured) || RESOURCE_ARTICLES[0];

  return (
    <main className="min-h-screen pt-24">
      {/* Page Hero */}
      <section className="bg-[#0B0F19] text-white py-16 border-b border-[#D4AF37]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F2D675] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F2D675]" />
            <span>KNOWLEDGE & INSIGHTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Financial & Property <span className="text-gold-gradient">Insights</span>
          </h1>

          <div className="gold-divider mx-auto"></div>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Practical guides on home loan balance transfers, LAP underwriting, property due-diligence, and systematic investment planning.
          </p>
        </div>
      </section>

      {/* Featured Article Banner Section */}
      <section className="bg-[#FDF8F0] py-16 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-[#D4AF37] text-[#0B0F19] rounded-full">
                  Featured Insight
                </span>
                <span className="text-xs text-gray-500 font-bold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#B89028]" />
                  {featured.date}
                </span>
                <span className="text-xs text-gray-500 font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#B89028]" />
                  {featured.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#111827]">
                {featured.title}
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                {featured.shortDescription}
              </p>

              <div className="pt-2">
                <Link
                  href={`/resources#${featured.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B0F19] text-[#F2D675] rounded-xl font-bold text-xs sm:text-sm hover:bg-[#D4AF37] hover:text-[#0B0F19] transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0B0F19] text-white rounded-2xl p-6 border border-[#D4AF37]/40 space-y-3">
              <BookOpen className="w-8 h-8 text-[#F2D675]" />
              <h3 className="text-lg font-black">Stay Ahead of Market Trends</h3>
              <p className="text-xs text-gray-400 font-normal leading-relaxed">
                Our advisors break down complex interest rate cycles, RBI policy updates, and property market corridors into actionable insights.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Category Filter & Articles Grid */}
      <section className="bg-[#FFF9F0] py-20 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  selectedCat === cat
                    ? "bg-[#0B0F19] text-[#F2D675] shadow-md border border-[#D4AF37]"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article: ResourceArticle) => (
              <article
                key={article.id}
                id={article.slug}
                className="bg-white rounded-3xl p-7 border border-[#D4AF37]/25 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#B89028] border border-[#D4AF37]/30">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-gray-400 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#B89028]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#111827] mb-3 group-hover:text-[#B89028] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                    {article.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#111827] group-hover:text-[#B89028] transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <FinalCtaSection />
    </main>
  );
}
