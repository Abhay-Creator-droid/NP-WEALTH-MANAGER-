"use client";

import React, { createContext, useContext, useState } from "react";

interface ConsultationContextType {
  isOpen: boolean;
  preselectedInterest: string;
  openConsultationModal: (interest?: string) => void;
  closeConsultationModal: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const ConsultationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedInterest, setPreselectedInterest] = useState("Wealth Management");

  const openConsultationModal = (interest?: string) => {
    if (interest) {
      setPreselectedInterest(interest);
    }
    setIsOpen(true);
  };

  const closeConsultationModal = () => {
    setIsOpen(false);
  };

  return (
    <ConsultationContext.Provider
      value={{
        isOpen,
        preselectedInterest,
        openConsultationModal,
        closeConsultationModal,
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error("useConsultation must be used within a ConsultationProvider");
  }
  return context;
};
