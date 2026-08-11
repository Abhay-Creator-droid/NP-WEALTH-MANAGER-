import React from "react";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/adminAuth";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager, STATUS_OPTIONS } from "@/components/admin/ResourceManager";

export default async function AdminServicesPage() {
  const session = await requireAdminSession();
  const services = await prisma.service.findMany({ where: { deletedAt: null }, orderBy: { displayOrder: "asc" } });

  return (
    <AdminShell role={session.role}>
      <div className="px-6 py-10">
        <ResourceManager
          title="Services"
          apiPath="/api/admin/services"
          items={services as unknown as Record<string, unknown>[]}
          fields={[
            { name: "name", label: "Name" },
            { name: "slug", label: "Slug" },
            { name: "shortDesc", label: "Short Description", type: "textarea" },
            { name: "fullDesc", label: "Full Description", type: "textarea", rows: 6 },
            { name: "icon", label: "Icon (Lucide name)" },
            { name: "imageUrl", label: "Image URL", type: "url" },
            { name: "ctaText", label: "CTA Text" },
            { name: "ctaLink", label: "CTA Link" },
            { name: "displayOrder", label: "Display Order", type: "number" },
            { name: "status", label: "Status", type: "select", options: STATUS_OPTIONS },
          ]}
        />
      </div>
    </AdminShell>
  );
}
