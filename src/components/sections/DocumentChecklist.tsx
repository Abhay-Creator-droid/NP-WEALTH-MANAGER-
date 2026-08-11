"use client";

import React, { useState } from "react";
import { DOCUMENT_CHECKLIST_DATA } from "@/lib/data";
import { FileText, CheckCircle2, Circle, AlertCircle, Download } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";

export const DocumentChecklist: React.FC = () => {
  const [applicantType, setApplicantType] = useState<"salaried" | "selfEmployed">("salaried");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const documents = DOCUMENT_CHECKLIST_DATA[applicantType];

  const toggleCheck = (docName: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [docName]: !prev[docName],
    }));
  };

  const checkedCount = documents.filter((d) => checkedItems[d.name]).length;
  const totalCount = documents.length;

  return (
    <section id="document-checklist" className="py-24 bg-white text-[#1A0505] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-dark/10 text-brand-red text-xs font-extrabold uppercase tracking-widest mb-3">
            <FileText className="w-3.5 h-3.5 text-gold-primary" />
            <span>INTERACTIVE TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-red">
            Loan Document Checklist
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Prepare required KYC, income, and bank statement records before submitting your loan file to accelerate processing timelines.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl shadow-navy-900/5">
          
          {/* Tab Selection */}
          <div className="flex items-center justify-center gap-4 mb-8 pb-6 border-b border-slate-200">
            <button
              onClick={() => setApplicantType("salaried")}
              className={`px-6 py-3 rounded-xl text-sm font-extrabold transition-all ${
                  applicantType === "salaried"
                    ? "bg-brand-dark text-gold-light shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
            >
              Salaried Employee Profile
            </button>
            <button
              onClick={() => setApplicantType("selfEmployed")}
              className={`px-6 py-3 rounded-xl text-sm font-extrabold transition-all ${
                applicantType === "selfEmployed"
                  ? "bg-brand-dark text-gold-light shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Self-Employed / Business Profile
            </button>
          </div>

          {/* Progress Tracker */}
          <div className="flex items-center justify-between mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                Readiness Progress
              </span>
              <span className="text-lg font-black text-brand-red">
                {checkedCount} of {totalCount} Documents Checked
              </span>
            </div>
            <div className="w-32 sm:w-48 h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                style={{ width: `${(checkedCount / totalCount) * 100}%` }}
                className="h-full bg-gold-gradient transition-all duration-300"
              ></div>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3 mb-8">
            {documents.map((doc) => {
              const isChecked = !!checkedItems[doc.name];
              return (
                <div
                  key={doc.name}
                  onClick={() => toggleCheck(doc.name)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start justify-between gap-4 ${
                    isChecked
                      ? "bg-emerald-50/50 border-emerald-300 shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h4 className={`text-sm font-bold ${isChecked ? "text-emerald-900 line-through" : "text-brand-red"}`}>
                        {doc.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">{doc.desc}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 shrink-0">
                    Mandatory
                  </span>
                </div>
              );
            })}
          </div>

          {/* Requirement Variation Note */}
          <div className="p-4 rounded-2xl bg-gold-subtle border border-gold-glow text-xs text-slate-700 leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-gold-primary shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> {COMPANY_CONFIG.disclaimers.loan}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
