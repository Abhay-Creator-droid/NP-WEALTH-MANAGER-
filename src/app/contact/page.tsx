"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Home Loan",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-24">
      {/* Page Hero */}
      <section className="bg-[#0B0F19] text-white py-16 border-b border-[#D4AF37]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F2D675] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F2D675]" />
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Contact <span className="text-gold-gradient">NP Wealth Managers</span>
          </h1>

          <div className="gold-divider mx-auto"></div>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Reach out to our advisory desk for home loan syndication, loan against property, or real-asset investment consultation.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Details Section */}
      <section className="bg-[#FDF8F0] py-20 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Information (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#B89028]">
                  Advisory Desk & Office
                </span>
                <h2 className="text-3xl font-black text-[#111827]">
                  Let's Discuss Your <span className="text-gold-gradient">Financial Goals</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                  Our team provides confidential, unbiased guidance. Call, WhatsApp, or visit our advisory office in Sector 63 Noida.
                </p>
              </div>

              {/* Cards */}
              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                  className="bg-white rounded-2xl p-5 border border-[#D4AF37]/30 shadow-md flex items-start gap-4 hover:border-[#D4AF37] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone & Call Support</h4>
                    <p className="text-base font-black text-[#111827] group-hover:text-[#B89028] transition-colors">
                      {COMPANY_CONFIG.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(COMPANY_CONFIG.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-[#D4AF37]/30 shadow-md flex items-start gap-4 hover:border-[#D4AF37] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Direct WhatsApp Desk</h4>
                    <p className="text-base font-black text-[#111827] group-hover:text-[#B89028] transition-colors">
                      +{COMPANY_CONFIG.whatsappNumber}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="bg-white rounded-2xl p-5 border border-[#D4AF37]/30 shadow-md flex items-start gap-4 hover:border-[#D4AF37] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Inquiry</h4>
                    <p className="text-base font-black text-[#111827] group-hover:text-[#B89028] transition-colors">
                      {COMPANY_CONFIG.email}
                    </p>
                  </div>
                </a>

                <div className="bg-white rounded-2xl p-5 border border-[#D4AF37]/30 shadow-md flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Office Address</h4>
                    <p className="text-xs font-bold text-[#111827] leading-relaxed">
                      {COMPANY_CONFIG.address.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-[#D4AF37]/30 shadow-md flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B0F19] text-[#F2D675] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Business Hours</h4>
                    <p className="text-xs text-gray-700 font-medium">{COMPANY_CONFIG.businessHours.weekdays}</p>
                    <p className="text-xs text-gray-500 font-normal">{COMPANY_CONFIG.businessHours.saturday} · {COMPANY_CONFIG.businessHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/30 shadow-2xl space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-2xl font-black text-[#111827]">Request a Consultation</h3>
                <p className="text-xs text-gray-500 font-medium">Fill out the form below and an advisor will contact you within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="bg-[#FFF9F0] border border-[#D4AF37]/40 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37] text-[#0B0F19] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-[#111827]">Thank You!</h4>
                  <p className="text-xs text-gray-600 font-medium max-w-md mx-auto">
                    Your request has been received. Our senior advisor will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#0B0F19] text-[#F2D675] rounded-xl text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-gray-700 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs text-[#111827] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-gray-700 block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs text-[#111827] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-gray-700 block mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs text-[#111827] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-gray-700 block mb-1">Service Required</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs text-[#111827] focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Home Loan">Home Loan</option>
                        <option value="Loan Against Property">Loan Against Property</option>
                        <option value="Home Loan Balance Transfer">Home Loan Balance Transfer</option>
                        <option value="Real Estate Advisory">Real Estate & Asset Advisory</option>
                        <option value="Wealth Management">Wealth & SIP Management</option>
                        <option value="Other Financial Service">Other Financial Service</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-gray-700 block mb-1">Message / Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Share any specific requirements, property details, or target loan amount..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-xs text-[#111827] focus:outline-none focus:border-[#D4AF37]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F2D675] to-[#D4AF37] text-[#0B0F19] font-black text-sm rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B89028]" />
                    <span>Your information is strictly private and protected.</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCtaSection />
    </main>
  );
}
