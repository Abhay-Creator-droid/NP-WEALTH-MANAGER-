"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NP Wealth Managers on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg shadow-black/20 border border-white/20 transition-all duration-300 hover:scale-105 group"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 text-white fill-white/20 group-hover:scale-110 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
        </span>
      </div>
      <span className="font-semibold text-sm tracking-wide hidden sm:inline-block">
        Chat With Us
      </span>
    </a>
  );
};
