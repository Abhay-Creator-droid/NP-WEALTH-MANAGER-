"use client";

import React, { useState } from "react";
import { RESOURCE_ARTICLES, ResourceArticle } from "@/lib/data";
import { BookOpen, Clock, ArrowRight, X } from "lucide-react";

export const ResourcesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalArticle, setActiveModalArticle] = useState<ResourceArticle | null>(null);

  const categories = ["All", "Investment", "Loans", "Real Estate", "Financial Planning"];

  const filteredArticles = RESOURCE_ARTICLES.filter((art) => {
    if (selectedCategory === "All") return true;
    return art.category === selectedCategory;
  });

  return (
    <section id="resources" className="py-24 bg-white text-[#1A0505] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-gold-primary uppercase tracking-widest block mb-2">
            FINANCIAL KNOWLEDGE & GUIDES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-red">
            Resources & Insights
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Practical guides to help you understand mutual funds, credit parameters, real estate due diligence, and wealth preservation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-brand-dark text-gold-light shadow-md shadow-navy-900/10"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 hover:border-gold-glow shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span className="font-extrabold px-3 py-1 rounded-full bg-brand-dark/10 text-brand-red">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                  <h3 className="text-lg font-extrabold text-brand-red mb-3 group-hover:text-gold-primary transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {article.shortDescription}
                </p>
              </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-semibold">{article.date}</span>
                <button
                  onClick={() => setActiveModalArticle(article)}
                  className="text-xs font-bold text-brand-red group-hover:text-gold-primary flex items-center gap-1 transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Reader Modal */}
      {activeModalArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white text-[#1A0505] rounded-3xl p-6 sm:p-8 shadow-2xl border border-gold-glow max-h-[90vh] overflow-y-auto">
            
                <button
                  onClick={() => setActiveModalArticle(null)}
                  className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Close article modal"
                >
                  <X className="w-6 h-6" />
                </button>

            <div className="mb-6">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span className="font-extrabold px-3 py-1 rounded-full bg-brand-dark text-gold-light">
                  {activeModalArticle.category}
                </span>
                <span>•</span>
                <span>{activeModalArticle.readTime}</span>
                <span>•</span>
                <span>{activeModalArticle.date}</span>
              </div>
              <h3 className="text-2xl font-black text-brand-red leading-tight">
                {activeModalArticle.title}
              </h3>
            </div>

            <div className="space-y-4 text-slate-700 text-sm leading-relaxed mb-8 border-t border-b border-slate-100 py-6">
              {activeModalArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

              <div className="flex justify-end">
              <button
                onClick={() => setActiveModalArticle(null)}
                className="px-6 py-2.5 bg-brand-dark text-white font-bold text-xs rounded-xl hover:bg-brand-dark/90 transition-colors"
              >
                Close Reader
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
