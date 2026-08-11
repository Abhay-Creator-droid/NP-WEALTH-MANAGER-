"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink, ShieldCheck } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";
import type { SiteSettings } from "@prisma/client";

interface ContactSectionProps {
  settings: SiteSettings | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ settings }) => {
  const whatsappNumber = settings?.whatsappNumber ?? COMPANY_CONFIG.whatsappNumber;
  const whatsappMessage = settings?.whatsappDefaultMessage ?? COMPANY_CONFIG.whatsappDefaultMessage;
  const phoneRaw = settings?.phoneRaw ?? COMPANY_CONFIG.phoneRaw;
  const phoneDisplay = settings?.phoneDisplay ?? COMPANY_CONFIG.phoneDisplay;
  const email = settings?.email ?? COMPANY_CONFIG.email;
  const address = settings?.address ?? COMPANY_CONFIG.address;
  const businessHours = settings?.businessHours ?? COMPANY_CONFIG.businessHours;

  const addressData = typeof address === "string" ? { fullAddress: address } : address ?? COMPANY_CONFIG.address;
  const addressFull = addressData?.fullAddress ?? COMPANY_CONFIG.address.fullAddress;
  const companyName = settings?.companyName ?? COMPANY_CONFIG.name;
  const phoneHref = `tel:${phoneRaw}`;
  const emailHref = `mailto:${email}`;
  const businessWeekdays = typeof businessHours === "object" && businessHours?.weekdays ? businessHours.weekdays : COMPANY_CONFIG.businessHours.weekdays;
  const businessSaturday = typeof businessHours === "object" && businessHours?.saturday ? businessHours.saturday : COMPANY_CONFIG.businessHours.saturday;
  const businessSunday = typeof businessHours === "object" && businessHours?.sunday ? businessHours.sunday : COMPANY_CONFIG.businessHours.sunday;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-24 bg-white text-[#1A0505] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-brand-red uppercase tracking-widest block mb-2">
            REACH OUR DESK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-red">
            Contact NP Wealth <span className="text-gold-light">Managers</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Connect with our advisory desk via phone, email, WhatsApp, or schedule an in-person meeting.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark text-gold-light flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider block mb-1">
                  Advisory Phone Desk
                </span>
                <a
                  href={phoneHref}
                  className="text-lg font-black text-brand-red hover:text-gold-primary transition-colors"
                >
                  {phoneDisplay}
                </a>
                <p className="text-xs text-slate-500 mt-1">Available during official business hours</p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-red text-white flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider block mb-1">
                  Instant WhatsApp Connect
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-extrabold text-brand-red hover:underline flex items-center gap-1.5"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-xs text-slate-500 mt-1">Central WHATSAPP_NUMBER configuration active</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark text-gold-light flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider block mb-1">
                  Official Email Inbox
                </span>
                <a
                  href={emailHref}
                  className="text-base font-extrabold text-brand-red hover:text-gold-primary transition-colors"
                >
                  {email}
                </a>
                <p className="text-xs text-slate-500 mt-1">Response within 24 business hours</p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-dark text-gold-light flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-xs text-slate-600">
                <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider block mb-1">
                  Official Business Hours
                </span>
                <p className="font-bold text-brand-red">{businessWeekdays}</p>
                <p className="font-semibold text-slate-700">{businessSaturday}</p>
                <p className="text-slate-400">{businessSunday}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Office Location & Google Maps Placeholder */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gold-gradient text-brand-red flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-gold-primary uppercase tracking-wider block">
                  Corporate Office Placeholder
                </span>
                <h3 className="text-xl font-black text-brand-red">
                  {companyName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {addressFull}
                </p>
              </div>
            </div>

            {/* Google Maps Visual Embed Placeholder */}
              <div className="w-full h-80 bg-slate-800 rounded-2xl overflow-hidden relative border border-slate-200 flex flex-col items-center justify-center p-6 text-center text-white">
              
              <MapPin className="w-12 h-12 text-gold-light mb-3 animate-bounce" />
              
              <h4 className="text-lg font-bold text-white mb-1">
                Google Maps Embed Placeholder
              </h4>
              <p className="text-xs text-slate-300 max-w-sm mb-4">
                Interactive map location centered on Bandra Kurla Complex (BKC), Mumbai office hub.
              </p>

              <span className="px-4 py-2 rounded-xl bg-white/10 text-xs font-semibold border border-white/20">
                Map View Configured for Corporate Domain
              </span>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-gold-primary" />
              <span>Prior appointment required for in-person wealth strategy meetings.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
