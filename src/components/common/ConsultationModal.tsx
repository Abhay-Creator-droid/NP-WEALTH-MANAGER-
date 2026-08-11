"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, Shield, PhoneCall } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";
import { COMPANY_CONFIG } from "@/lib/config";

export const ConsultationModal: React.FC = () => {
  const { isOpen, preselectedInterest, closeConsultationModal } = useConsultation();

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    city: "",
    message: "",
  });
  const [interestOverride, setInterestOverride] = useState<string | null>(null);

  const interestedIn = interestOverride ?? preselectedInterest;

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeConsultationModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeConsultationModal]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, "");
    if (!cleanPhone) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (cleanPhone.length < 10) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          mobileNumber: formData.mobileNumber,
          email: formData.email,
          city: formData.city,
          interestedIn,
          message: formData.message,
        }),
      });

      const data = await response.json();
      setIsSubmitting(false);

      if (!response.ok) {
        setErrors({ form: data.error || "Unable to submit request. Please try again." });
        return;
      }

      setIsSuccess(true);
    } catch {
      setIsSubmitting(false);
      setErrors({ form: "Unable to submit request. Please try again." });
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      mobileNumber: "",
      email: "",
      city: "",
      message: "",
    });
    setInterestOverride(null);
    setErrors({});
    setIsSuccess(false);
    closeConsultationModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#040E26]/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#071A3D] text-white rounded-3xl border border-[#D4AF37]/30 shadow-2xl shadow-black/50 overflow-hidden my-8">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#071A3D] via-[#0B5ED7]/40 to-[#071A3D] px-6 py-5 border-b border-[#D4AF37]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-white p-0.5 shadow-md border border-[#D4AF37]/50 shrink-0">
              <Image
                src={COMPANY_CONFIG.logoUrl}
                alt={COMPANY_CONFIG.name}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white tracking-wide">
                {COMPANY_CONFIG.name}
              </h3>
              <p className="text-xs text-[#F2D675] font-medium">Personalized Financial Guidance</p>
            </div>
          </div>
          <button
            onClick={closeConsultationModal}
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto border border-[#D4AF37]/40">
                <CheckCircle2 className="w-10 h-10 text-[#F2D675]" />
              </div>
              <h4 className="text-2xl font-bold text-white">Consultation Requested</h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you. Our team will get in touch with you shortly to discuss suitable options tailored to your profile.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-[#071A3D] font-bold rounded-xl shadow-lg hover:brightness-110 transition-all text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h4 className="text-2xl font-extrabold text-white mb-2">
                  Let’s Discuss Your Financial Goals
                </h4>
                <p className="text-slate-300 text-sm">
                  Fill in your details below. Our advisory desk will reach out for a confidential conversation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {errors.form && (
                  <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4 text-sm text-rose-700">
                    {errors.form}
                  </div>
                )}
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-[#F2D675]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full bg-[#040E26]/80 border border-slate-700 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                      Mobile Number <span className="text-[#F2D675]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-xs text-slate-400 font-semibold">+91</span>
                      <input
                        type="tel"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        placeholder="98765 43210"
                        className="w-full bg-[#040E26]/80 border border-slate-700 focus:border-[#D4AF37] rounded-xl pl-12 pr-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                    {errors.mobileNumber && <p className="text-red-400 text-xs mt-1">{errors.mobileNumber}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-[#F2D675]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rajesh@example.com"
                      className="w-full bg-[#040E26]/80 border border-slate-700 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* City */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                      City <span className="text-[#F2D675]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Mumbai / Delhi"
                      className="w-full bg-[#040E26]/80 border border-slate-700 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                    />
                    {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
                  </div>

                  {/* Interested In */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                      Interested In <span className="text-[#F2D675]">*</span>
                    </label>
                    <select
                      value={interestedIn}
                      onChange={(e) => setInterestOverride(e.target.value)}
                      className="w-full bg-[#040E26]/80 border border-slate-700 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                    >
                      <option value="Wealth Management">Wealth Management</option>
                      <option value="SIP / Mutual Funds">SIP / Mutual Funds</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Loan Against Property">Loan Against Property</option>
                      <option value="Other">Other Requirement</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
                    Message / Goal Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what you would like to explore..."
                    className="w-full bg-[#040E26]/80 border border-slate-700 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Privacy Note */}
                <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                  <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Your information is strictly confidential and never shared publicly.</span>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-[#D4AF37] text-[#071A3D] font-extrabold text-base rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-[#071A3D] border-t-transparent"></span>
                    ) : (
                      <>
                        <PhoneCall className="w-5 h-5" />
                        Request A Consultation
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
