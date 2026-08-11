import React from "react";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/adminAuth";
import { AdminShell } from "@/components/admin/AdminShell";
import { LeadsManager } from "./LeadsManager";

export default async function AdminLeadsPage() {
  const session = await requireAdminSession();
  const leads = await prisma.lead.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <AdminShell role={session.role}>
      <div className="px-6 py-10">
        <h1 className="text-3xl font-black mb-2">Lead Management</h1>
        <p className="text-slate-400 text-sm mb-8">View, filter and update inbound enquiries.</p>
        <LeadsManager initial={JSON.parse(JSON.stringify(leads))} />
      </div>
    </AdminShell>
  );
}
