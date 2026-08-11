import React from "react";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/adminAuth";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager, STATUS_OPTIONS } from "@/components/admin/ResourceManager";

export default async function AdminPropertiesPage() {
  const session = await requireAdminSession();
  const properties = await prisma.property.findMany({ where: { deletedAt: null }, orderBy: { displayOrder: "asc" } });

  return (
    <AdminShell role={session.role}>
      <div className="px-6 py-10">
        <ResourceManager
          title="Properties"
          apiPath="/api/admin/properties"
          items={properties as unknown as Record<string, unknown>[]}
          fields={[
            { name: "title", label: "Title" },
            { name: "slug", label: "Slug" },
            { name: "type", label: "Type (Residential/Commercial/Plots/Industrial)" },
            { name: "location", label: "Location" },
            { name: "description", label: "Description", type: "textarea", rows: 4 },
            { name: "features", label: "Features", type: "textarea", rows: 4 },
            { name: "displayOrder", label: "Display Order", type: "number" },
            { name: "status", label: "Status", type: "select", options: STATUS_OPTIONS },
          ]}
        />
      </div>
    </AdminShell>
  );
}
