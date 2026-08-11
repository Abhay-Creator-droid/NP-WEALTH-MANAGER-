import React from "react";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/adminAuth";
import { AdminShell } from "@/components/admin/AdminShell";
import { MediaUploader } from "./MediaUploader";

export default async function AdminMediaPage() {
  const session = await requireAdminSession();
  const items = await prisma.mediaItem.findMany({ orderBy: { createdAt: "desc" }, take: 50 });

  return (
    <AdminShell role={session.role}>
      <div className="px-6 py-10">
        <h1 className="text-3xl font-black mb-2">Media Library</h1>
        <p className="text-slate-400 text-sm mb-8">Upload logos, hero images, property photos, and blog covers.</p>
        <MediaUploader initial={items.map((i) => ({ ...i, category: i.category }))} />
      </div>
    </AdminShell>
  );
}
