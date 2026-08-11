import React from "react";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/adminAuth";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager, STATUS_OPTIONS } from "@/components/admin/ResourceManager";

export default async function AdminTeamPage() {
  const session = await requireAdminSession();
  const members = await prisma.teamMember.findMany({ where: { deletedAt: null }, orderBy: { displayOrder: "asc" } });

  return (
    <AdminShell role={session.role}>
      <div className="px-6 py-10">
        <ResourceManager
          title="Team Members"
          apiPath="/api/admin/team"
          items={members as unknown as Record<string, unknown>[]}
          fields={[
            { name: "name", label: "Name" },
            { name: "designation", label: "Designation" },
            { name: "bio", label: "Bio", type: "textarea", rows: 4 },
            { name: "profileImageUrl", label: "Photo URL", type: "url" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Phone" },
            { name: "linkedIn", label: "LinkedIn URL", type: "url" },
            { name: "displayOrder", label: "Display Order", type: "number" },
            { name: "status", label: "Status", type: "select", options: STATUS_OPTIONS },
          ]}
        />
      </div>
    </AdminShell>
  );
}
