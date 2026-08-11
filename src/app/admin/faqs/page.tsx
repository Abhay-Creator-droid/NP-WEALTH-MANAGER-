import React from "react";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/adminAuth";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager, STATUS_OPTIONS } from "@/components/admin/ResourceManager";

export default async function AdminFaqsPage() {
  const session = await requireAdminSession();
  const faqs = await prisma.faq.findMany({ where: { deletedAt: null }, orderBy: { displayOrder: "asc" } });

  return (
    <AdminShell role={session.role}>
      <div className="px-6 py-10">
        <ResourceManager
          title="FAQs"
          apiPath="/api/admin/faqs"
          items={faqs as unknown as Record<string, unknown>[]}
          fields={[
            { name: "question", label: "Question", type: "textarea" },
            { name: "answer", label: "Answer", type: "textarea", rows: 5 },
            { name: "category", label: "Category" },
            { name: "displayOrder", label: "Display Order", type: "number" },
            { name: "status", label: "Status", type: "select", options: STATUS_OPTIONS },
          ]}
        />
      </div>
    </AdminShell>
  );
}
