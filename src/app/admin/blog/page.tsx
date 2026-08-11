import React from "react";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/adminAuth";
import { AdminShell } from "@/components/admin/AdminShell";
import { ResourceManager, STATUS_OPTIONS } from "@/components/admin/ResourceManager";

export default async function AdminBlogPage() {
  const session = await requireAdminSession();
  const posts = await prisma.blogPost.findMany({ where: { deletedAt: null }, orderBy: { updatedAt: "desc" } });

  return (
    <AdminShell role={session.role}>
      <div className="px-6 py-10">
        <ResourceManager
          title="Blog Posts"
          apiPath="/api/admin/blog"
          items={posts as unknown as Record<string, unknown>[]}
          fields={[
            { name: "title", label: "Title" },
            { name: "slug", label: "Slug" },
            { name: "category", label: "Category" },
            { name: "shortDesc", label: "Excerpt", type: "textarea" },
            { name: "content", label: "Content", type: "textarea", rows: 10 },
            { name: "coverImageUrl", label: "Cover Image URL", type: "url" },
            { name: "author", label: "Author" },
            { name: "seoTitle", label: "SEO Title" },
            { name: "seoDescription", label: "SEO Description", type: "textarea" },
            { name: "displayOrder", label: "Display Order", type: "number" },
            { name: "status", label: "Status", type: "select", options: STATUS_OPTIONS },
          ]}
        />
      </div>
    </AdminShell>
  );
}
