import React from "react";

export const metadata = {
  title: "Admin Dashboard | NP Wealth Managers",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#070A11] text-white">{children}</div>;
}
