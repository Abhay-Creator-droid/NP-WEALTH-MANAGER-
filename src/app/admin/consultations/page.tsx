import React from "react";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/adminAuth";
import { AdminShell } from "@/components/admin/AdminShell";
import { ConsultationsManager } from "./ConsultationsManager";

export default async function AdminConsultationsPage() {
  const session = await requireAdminSession();
  const items = await prisma.consultation.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <AdminShell role={session.role}>
      <div className="px-6 py-10">
        <h1 className="text-3xl font-black mb-2">Consultations</h1>
        <p className="text-slate-400 text-sm mb-8">Manage consultation requests from the website.</p>
        <ConsultationsManager initial={JSON.parse(JSON.stringify(items))} />
      </div>
    </AdminShell>
  );
}
