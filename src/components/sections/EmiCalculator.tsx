"use client";

import React, { useState, useId } from "react";
import { Landmark, ArrowRight, ShieldAlert } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import { COMPANY_CONFIG } from "@/lib/config";

export const EmiCalculator: React.FC = () => {
  const { openConsultationModal } = useConsultation();

  const loanId = useId();
  const rateId = useId();
  const tenureId = useId();

  const [loanAmount, setLoanAmount] = useState<number>(5000000); // 50 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 Years

  // EMI Math Calculation
  const totalMonths = tenureYears * 12;
  const r = interestRate / 12 / 100;

  const monthlyEmi =
    r > 0
      ? Math.round((loanAmount * r * Math.pow(1 + r, totalMonths)) / (Math.pow(1 + r, totalMonths) - 1))
      : Math.round(loanAmount / totalMonths);

  const totalPayable = monthlyEmi * totalMonths;
  const totalInterest = Math.max(0, totalPayable - loanAmount);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const principalRatio = totalPayable > 0 ? Math.round((loanAmount / totalPayable) * 100) : 50;
  const interestRatio = 100 - principalRatio;

  return (
    <section id="emi-calculator" className="py-24 bg-white text-[#1A0505] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-dark/10 text-gold-primary text-xs font-extrabold uppercase tracking-widest mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>LOAN ESTIMATION TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-red">
            Loan EMI Calculator
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Estimate monthly repayments, total interest obligations, and repayment schedules for home, business, or personal loans.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl shadow-navy-900/5">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Input 1: Loan Amount */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={loanId} className="text-sm font-bold text-brand-red">
                  Required Loan Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-bold">₹</span>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Math.max(50000, Number(e.target.value)))}
                    className="w-36 bg-slate-50 border border-slate-300 rounded-xl pl-7 pr-3 py-1.5 text-sm font-extrabold text-brand-red text-right focus:border-gold-primary focus:outline-none"
                  />
                </div>
              </div>
              <input
                id={loanId}
                type="range"
                min={100000}
                max={50000000}
                step={100000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>₹1 Lakh</span>
                <span>₹50 Lakhs</span>
                <span>₹5 Crores</span>
              </div>
            </div>

            {/* Input 2: Interest Rate % */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={rateId} className="text-sm font-bold text-brand-red">
                  Interest Rate (% p.a.)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Math.min(24, Math.max(1, Number(e.target.value))))}
                        className="w-24 bg-slate-50 border border-slate-300 rounded-xl pr-6 pl-3 py-1.5 text-sm font-extrabold text-brand-red text-right focus:border-gold-primary focus:outline-none"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-bold">%</span>
                </div>
              </div>
              <input
                id={rateId}
                type="range"
                min={5}
                max={20}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>5%</span>
                <span>12%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Input 3: Tenure Years */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={tenureId} className="text-sm font-bold text-brand-red">
                  Loan Tenure (Years)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Math.min(30, Math.max(1, Number(e.target.value))))}
                    className="w-24 bg-slate-50 border border-slate-300 rounded-xl pr-8 pl-3 py-1.5 text-sm font-extrabold text-brand-red text-right focus:border-gold-primary focus:outline-none"
                  />
                  <span className="absolute right-2.5 top-2.5 text-xs text-slate-400 font-bold">Yr</span>
                </div>
              </div>
              <input
                id={tenureId}
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>1 Yr</span>
                <span>15 Yrs</span>
                <span>30 Yrs</span>
              </div>
            </div>

            {/* Legal Lender Disclaimer */}
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
              <span>
                <strong>Lender Note:</strong> {COMPANY_CONFIG.disclaimers.emi}
              </span>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-brand-dark text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gold-glow flex flex-col justify-between h-full">
            
            <div>
              <h3 className="text-xs font-black text-gold-light uppercase tracking-wider mb-6">
                Monthly Repayment Projection
              </h3>

              {/* Monthly EMI Highlight */}
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10">
                <span className="text-xs text-slate-300 font-semibold block mb-1">
                  Estimated Monthly EMI
                </span>
                <span className="text-3xl sm:text-4xl font-black text-gold-light">
                  {formatCurrency(monthlyEmi)}
                </span>
              </div>

              {/* Breakdown Grid */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-2 border-b border-slate-700 text-xs sm:text-sm">
                  <span className="text-slate-300 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand-mid"></span>
                    Principal Amount
                  </span>
                  <span className="font-extrabold text-white">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-700 text-xs sm:text-sm">
                  <span className="text-slate-300 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gold-primary"></span>
                    Total Interest Payable
                  </span>
                  <span className="font-extrabold text-gold-light">
                    {formatCurrency(totalInterest)}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-700 text-xs sm:text-sm">
                  <span className="text-slate-300 font-semibold">Total Amount Payable</span>
                  <span className="font-black text-white">{formatCurrency(totalPayable)}</span>
                </div>
              </div>

              {/* Visual Proportion Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-[11px] font-bold mb-1.5 text-slate-300">
                  <span>Principal ({principalRatio}%)</span>
                  <span>Interest ({interestRatio}%)</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${principalRatio}%` }}
                    className="h-full bg-brand-mid transition-all duration-500"
                  ></div>
                  <div
                    style={{ width: `${interestRatio}%` }}
                    className="h-full bg-gold-gradient transition-all duration-500"
                  ></div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => openConsultationModal("Home Loan")}
              className="w-full py-4 bg-gold-gradient text-brand-red font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-gold-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Check Your Options</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
