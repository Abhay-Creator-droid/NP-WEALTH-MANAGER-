"use client";

import React, { useState } from "react";
import { PhoneCall, CheckCircle2, Shield, Sparkles } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";

export const LeadFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    city: "",
    interestedIn: "Wealth Management",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          mobileNumber: formData.mobileNumber,
          email: formData.email,
          city: formData.city,
          interestedIn: formData.interestedIn,
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
    } catch (error) {
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
      interestedIn: "Wealth Management",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="consultation-form" className="py-24 bg-white text-[#1A0505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-brand-gradient text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gold-glow relative overflow-hidden">
          
          {/* Subtle Glow Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-subtle rounded-full blur-3xl pointer-events-none"></div>

          {isSuccess ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 bg-gold-gradient text-brand-red rounded-full flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-12 h-12 text-brand-red" />
              </div>
              <h3 className="text-3xl font-black text-white">Consultation Request Received</h3>
              <p className="text-slate-300 text-base max-w-lg mx-auto leading-relaxed">
                Thank you. Our team will get in touch with you shortly to explore options tailored to your profile.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                    className="px-8 py-3.5 bg-gold-gradient text-brand-red font-extrabold rounded-xl shadow-lg hover:brightness-110 transition-all text-sm"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-subtle border border-gold-glow text-gold-light text-xs font-extrabold uppercase tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>DIRECT ADVISORY CONNECT</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  Let’s Discuss Your Financial Goals
                </h3>
                <p className="mt-3 text-slate-300 text-sm sm:text-base">
                  Share your parameters below. Our financial team will contact you for a confidential discussion.
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {errors.form && (
                  <div className="rounded-2xl bg-rose-50 border border-rose-200 p-4 text-sm text-rose-700">
                    {errors.form}
                  </div>
                )}
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    Full Name <span className="text-gold-light">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full bg-brand-dark/90 border border-slate-700 focus:border-gold-primary rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Mobile Number */}
                  <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Mobile Number <span className="text-gold-light">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-xs text-slate-400 font-bold">+91</span>
                      <input
                        type="tel"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        placeholder="98765 43210"
                        className="w-full bg-brand-dark/90 border border-slate-700 focus:border-gold-primary rounded-xl pl-12 pr-4 py-3.5 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                    {errors.mobileNumber && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.mobileNumber}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Email Address <span className="text-gold-light">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full bg-brand-dark/90 border border-slate-700 focus:border-gold-primary rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* City */}
                  <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      City <span className="text-gold-light">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Mumbai / Pune / Bengaluru"
                      className="w-full bg-brand-dark/90 border border-slate-700 focus:border-gold-primary rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                    />
                    {errors.city && <p className="text-red-400 text-xs mt-1 font-semibold">{errors.city}</p>}
                  </div>

                  {/* Interested In Dropdown */}
                  <div>
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Interested In <span className="text-gold-light">*</span>
                    </label>
                    <select
                      value={formData.interestedIn}
                      onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                      className="w-full bg-brand-dark/90 border border-slate-700 focus:border-gold-primary rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors"
                    >
                      <option value="Wealth Management">Wealth Management</option>
                      <option value="SIP / Mutual Funds">SIP / Mutual Funds</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Loan Against Property">Loan Against Property</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    Message / Goal Context (Optional)
                  </label>
                    <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly state your preferred goal, amount range, or timeline..."
                    className="w-full bg-brand-dark/90 border border-slate-700 focus:border-gold-primary rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Privacy Safeguard */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Shield className="w-4 h-4 text-gold-primary shrink-0" />
                  <span>Your information is strictly protected and never sold or exposed publicly.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gold-gradient text-brand-red font-black text-base rounded-2xl shadow-xl shadow-gold-glow hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-brand-red border-t-transparent"></span>
                  ) : (
                    <>
                      <PhoneCall className="w-5 h-5" />
                      Request A Consultation
                    </>
                  )}
                </button>

              </form>
            </>
          )}

        </div>

      </div>
    </section>
  );
};
