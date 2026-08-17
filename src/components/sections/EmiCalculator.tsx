"use client";

import React, { useState, useMemo } from "react";
import { Calculator, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

export const EmiCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(5000000); // Default 50 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.5); // Default 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // Default 20 Years

  const { openConsultationModal } = useConsultation();

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const principal = Math.max(100000, loanAmount);
    const monthlyRate = interestRate / 12 / 100;
    const months = Math.max(1, tenureYears * 12);

    if (monthlyRate === 0) {
      const calculatedEmi = principal / months;
      return {
        emi: Math.round(calculatedEmi),
        totalInterest: 0,
        totalPayment: Math.round(principal),
      };
    }

    const emiFactor = Math.pow(1 + monthlyRate, months);
    const calculatedEmi = (principal * monthlyRate * emiFactor) / (emiFactor - 1);
    const calculatedTotalPayment = calculatedEmi * months;
    const calculatedTotalInterest = calculatedTotalPayment - principal;

    return {
      emi: Math.round(calculatedEmi),
      totalInterest: Math.round(calculatedTotalInterest),
      totalPayment: Math.round(calculatedTotalPayment),
    };
  }, [loanAmount, interestRate, tenureYears]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculators" className="bg-[#FDF8F0] py-20 border-b border-[#D4AF37]/20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#B89028] text-xs font-extrabold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>FINANCIAL PLANNING TOOL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Interactive <span className="text-gold-gradient">EMI Calculator</span>
          </h2>

          <div className="gold-divider mx-auto"></div>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            Calculate your estimated monthly installment (EMI), total interest burden, and tenure amortization for home & LAP loans.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl border border-[#D4AF37]/30 shadow-2xl overflow-hidden p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Inputs (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Input 1: Loan Amount */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-gray-700">
                  Loan Amount (₹)
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-36 px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-bold text-[#111827] text-right focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <input
                type="range"
                min={500000}
                max={50000000}
                step={100000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                <span>₹5 Lakhs</span>
                <span>₹2.5 Cr</span>
                <span>₹5 Cr</span>
              </div>
            </div>

            {/* Input 2: Interest Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-gray-700">
                  Interest Rate (% p.a.)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-24 px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-bold text-[#111827] text-right focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <input
                type="range"
                min={6.5}
                max={15}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                <span>6.5%</span>
                <span>10.5%</span>
                <span>15.0%</span>
              </div>
            </div>

            {/* Input 3: Tenure Years */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-gray-700">
                  Loan Tenure (Years)
                </label>
                <input
                  type="number"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-24 px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-bold text-[#111827] text-right focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                <span>1 Year</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

          </div>

          {/* Right Results Box (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0B0F19] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#D4AF37]/40 shadow-xl">
            
            <div className="space-y-6">
              <div className="border-b border-gray-800 pb-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#F2D675] block mb-1">
                  Monthly Installment
                </span>
                <p className="text-3xl sm:text-4xl font-black text-white">
                  {formatCurrency(emi)}
                </p>
                <span className="text-[11px] text-gray-400">per month for {tenureYears * 12} months</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-gray-800 text-gray-300">
                  <span>Principal Amount:</span>
                  <span className="font-bold text-white">{formatCurrency(loanAmount)}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-gray-800 text-gray-300">
                  <span>Total Interest Payable:</span>
                  <span className="font-bold text-[#F2D675]">{formatCurrency(totalInterest)}</span>
                </div>

                <div className="flex justify-between py-2 text-gray-300">
                  <span>Total Amount Payable:</span>
                  <span className="font-bold text-white">{formatCurrency(totalPayment)}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800 space-y-3">
              <button
                onClick={() => openConsultationModal(`EMI Calculator Inquiry (${formatCurrency(loanAmount)} @ ${interestRate}%)`)}
                className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-[#0B0F19] font-black text-xs sm:text-sm rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply for Lowest Rate Option</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-gray-400 text-center font-normal">
                * Calculation is illustrative. Final rate and EMI depend on lender evaluation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
