"use client";

import React, { useState, useId } from "react";
import { Calculator, ArrowRight, HelpCircle } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import { COMPANY_CONFIG } from "@/lib/config";

export const SipCalculator: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  const monthlyId = useId();
  const returnRateId = useId();
  const durationId = useId();

  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000);
  const [expectedRate, setExpectedRate] = useState<number>(12);
  const [years, setYears] = useState<number>(10);

  // SIP Math Calculation
  const totalMonths = years * 12;
  const i = expectedRate / 12 / 100;
  
  // FV = P * [ (1+i)^n - 1 ] / i * (1+i)
  const futureValue =
    i > 0
      ? Math.round(monthlyInvestment * (((Math.pow(1 + i, totalMonths) - 1) / i) * (1 + i)))
      : monthlyInvestment * totalMonths;

  const totalInvestment = monthlyInvestment * totalMonths;
  const estimatedGrowth = Math.max(0, futureValue - totalInvestment);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Percentages for visual breakdown
  const investmentRatio = futureValue > 0 ? Math.round((totalInvestment / futureValue) * 100) : 50;
  const growthRatio = 100 - investmentRatio;

  return (
    <section id="sip-calculator" className="py-24 bg-white text-[#1A0505] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-dark/10 text-brand-red text-xs font-extrabold uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5 text-gold-primary" />
            <span>FINANCIAL TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-red">
            SIP Investment Calculator
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Estimate potential wealth accumulation over time using regular systematic monthly investments.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl shadow-navy-900/5">
          
          {/* Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Input 1: Monthly Investment */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={monthlyId} className="text-sm font-bold text-brand-red">
                  Monthly Investment Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                  <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Math.max(500, Number(e.target.value)))}
                    className="w-32 bg-white border border-slate-300 rounded-xl pl-7 pr-3 py-1.5 text-sm font-extrabold text-brand-red text-right focus:border-gold-primary focus:outline-none"
                  />
                </div>
              </div>
              <input
                id={monthlyId}
                type="range"
                min={500}
                max={200000}
                step={500}
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>₹500</span>
                <span>₹1 Lakh</span>
                <span>₹2 Lakhs</span>
              </div>
            </div>

            {/* Input 2: Expected Return Rate % */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={returnRateId} className="text-sm font-bold text-brand-red">
                  Expected Annual Return Rate (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.5"
                    value={expectedRate}
                    onChange={(e) => setExpectedRate(Math.min(30, Math.max(1, Number(e.target.value))))}
                    className="w-24 bg-white border border-slate-300 rounded-xl pr-6 pl-3 py-1.5 text-sm font-extrabold text-brand-red text-right focus:border-gold-primary focus:outline-none"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-bold">%</span>
                </div>
              </div>
              <input
                id={returnRateId}
                type="range"
                min={1}
                max={25}
                step={0.5}
                value={expectedRate}
                onChange={(e) => setExpectedRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>1%</span>
                <span>12%</span>
                <span>25%</span>
              </div>
            </div>

            {/* Input 3: Duration Years */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={durationId} className="text-sm font-bold text-brand-red">
                  Investment Tenure (Years)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Math.min(30, Math.max(1, Number(e.target.value))))}
                    className="w-24 bg-white border border-slate-300 rounded-xl pr-8 pl-3 py-1.5 text-sm font-extrabold text-brand-red text-right focus:border-gold-primary focus:outline-none"
                  />
                  <span className="absolute right-2.5 top-2.5 text-xs text-slate-400 font-bold">Yr</span>
                </div>
              </div>
              <input
                id={durationId}
                type="range"
                min={1}
                max={30}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>1 Yr</span>
                <span>15 Yrs</span>
                <span>30 Yrs</span>
              </div>
            </div>

            {/* Regulatory Disclaimer Box */}
            <div className="p-4 rounded-2xl bg-gold-subtle border border-gold-glow text-xs text-slate-700 leading-relaxed flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
              <span>
                <strong>Disclaimer:</strong> {COMPANY_CONFIG.disclaimers.sip}
              </span>
            </div>

          </div>

          {/* Output Card & Donut Breakdown (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-brand-dark text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gold-glow flex flex-col justify-between h-full">
            
            <div>
              <h3 className="text-xs font-black text-gold-light uppercase tracking-wider mb-6">
                Calculation Summary
              </h3>

              {/* Total Future Value Highlight */}
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10">
                <span className="text-xs text-slate-300 font-semibold block mb-1">
                  Estimated Total Value
                </span>
                <span className="text-3xl sm:text-4xl font-black text-gold-light">
                  {formatCurrency(futureValue)}
                </span>
              </div>

              {/* Breakdown Grid */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-2 border-b border-slate-700 text-xs sm:text-sm">
                  <span className="text-slate-300 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand-mid"></span>
                    Total Investment
                  </span>
                  <span className="font-extrabold text-white">
                    {formatCurrency(totalInvestment)}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-700 text-xs sm:text-sm">
                  <span className="text-slate-300 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gold-primary"></span>
                    Estimated Growth Amount
                  </span>
                  <span className="font-extrabold text-gold-light">
                    {formatCurrency(estimatedGrowth)}
                  </span>
                </div>
              </div>

              {/* Visual Proportion Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-[11px] font-bold mb-1.5 text-slate-300">
                  <span>Investment ({investmentRatio}%)</span>
                  <span>Growth ({growthRatio}%)</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${investmentRatio}%` }}
                    className="h-full bg-brand-mid transition-all duration-500"
                  ></div>
                  <div
                    style={{ width: `${growthRatio}%` }}
                    className="h-full bg-gold-gradient transition-all duration-500"
                  ></div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => openConsultationModal("SIP / Mutual Funds")}
              className="w-full py-4 bg-gold-gradient text-brand-red font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-gold-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Discuss Your Investment Options</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
