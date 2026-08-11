import React from "react";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/adminAuth";
import { AdminShell } from "@/components/admin/AdminShell";
import { SettingsForm } from "./SettingsForm";

export default async function AdminSettingsPage() {
  const session = await requireAdminSession();
  const settings = await prisma.siteSettings.findFirst({ orderBy: { updatedAt: "desc" } });

  return (
    <AdminShell role={session.role}>
      <div className="px-6 py-10 max-w-3xl">
        <h1 className="text-3xl font-black mb-2">Site Settings</h1>
        <p className="text-slate-400 text-sm mb-8">Manage company info, hero, about, SEO and footer content.</p>
        {settings ? (
          <SettingsForm initial={settings as unknown as Record<string, unknown>} />
        ) : (
          <p className="text-slate-400">No settings found. Run POST /api/admin/seed first.</p>
        )}
      </div>
    </AdminShell>
  );
}
