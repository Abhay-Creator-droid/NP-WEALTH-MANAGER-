import React from "react";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/adminAuth";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager, STATUS_OPTIONS } from "@/components/admin/ResourceManager";

export default async function AdminTestimonialsPage() {
  const session = await requireAdminSession();
  const items = await prisma.testimonial.findMany({ where: { deletedAt: null }, orderBy: { displayOrder: "asc" } });

  return (
    <AdminShell role={session.role}>
      <div className="px-6 py-10">
        <ResourceManager
          title="Testimonials"
          apiPath="/api/admin/testimonials"
          items={items as unknown as Record<string, unknown>[]}
          fields={[
            { name: "clientName", label: "Client Name" },
            { name: "designation", label: "Designation" },
            { name: "location", label: "Location" },
            { name: "service", label: "Service" },
            { name: "text", label: "Testimonial", type: "textarea", rows: 5 },
            { name: "photoUrl", label: "Photo URL", type: "url" },
            { name: "displayOrder", label: "Display Order", type: "number" },
            { name: "status", label: "Status", type: "select", options: STATUS_OPTIONS },
          ]}
        />
      </div>
    </AdminShell>
  );
}
