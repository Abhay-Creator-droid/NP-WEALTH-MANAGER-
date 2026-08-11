"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  Briefcase,
  Landmark,
  Building2,
  Users,
  MessageSquare,
  FileText,
  HelpCircle,
  Image,
  UserPlus,
  Calendar,
  LogOut,
} from "lucide-react";

const NAV = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/settings", label: "Site Settings", icon: Settings },
  { href: "/admin/services", label: "Services", icon: Briefcase },
  { href: "/admin/loans", label: "Loans", icon: Landmark },
  { href: "/admin/properties", label: "Properties", icon: Building2 },
  { href: "/admin/team", label: "Team", icon: Users },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "/admin/blog", label: "Blog", icon: FileText },
  { href: "/admin/faqs", label: "FAQs", icon: HelpCircle },
  { href: "/admin/media", label: "Media", icon: Image },
  { href: "/admin/leads", label: "Leads", icon: UserPlus },
  { href: "/admin/consultations", label: "Consultations", icon: Calendar },
];

export function AdminShell({ children, role }: { children: React.ReactNode; role?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#070A11] text-white flex">
      <aside className="w-64 shrink-0 border-r border-white/10 bg-[#0A0E16] hidden lg:flex flex-col">
        <div className="p-6 border-b border-white/10">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-light">NP Wealth CMS</p>
          <p className="mt-1 text-sm text-slate-400">{role ?? "Admin"}</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                pathname === href || pathname.startsWith(href + "/")
                  ? "bg-gold-gradient text-brand-red"
                  : "text-slate-300 hover:bg-white/5"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-300 hover:bg-white/5 transition"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
