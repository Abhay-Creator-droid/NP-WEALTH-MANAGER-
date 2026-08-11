import React from "react";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/adminAuth";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager, STATUS_OPTIONS } from "@/components/admin/ResourceManager";

export default async function AdminLoansPage() {
  const session = await requireAdminSession();
  const loans = await prisma.loanService.findMany({ where: { deletedAt: null }, orderBy: { displayOrder: "asc" } });

  return (
    <AdminShell role={session.role}>
      <div className="px-6 py-10">
        <ResourceManager
          title="Loan Services"
          apiPath="/api/admin/loans"
          items={loans as unknown as Record<string, unknown>[]}
          fields={[
            { name: "name", label: "Name" },
            { name: "slug", label: "Slug" },
            { name: "description", label: "Description", type: "textarea", rows: 4 },
            { name: "eligibility", label: "Eligibility", type: "textarea", rows: 4 },
            { name: "documents", label: "Documents", type: "textarea", rows: 4 },
            { name: "features", label: "Features", type: "textarea", rows: 4 },
            { name: "imageUrl", label: "Image URL", type: "url" },
            { name: "displayOrder", label: "Display Order", type: "number" },
            { name: "status", label: "Status", type: "select", options: STATUS_OPTIONS },
          ]}
        />
      </div>
    </AdminShell>
  );
}
