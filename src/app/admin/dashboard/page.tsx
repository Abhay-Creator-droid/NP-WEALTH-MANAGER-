import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/adminAuth";
import { AdminShell } from "@/components/admin/AdminShell";

export default async function AdminDashboardPage() {
  const session = await requireAdminSession();

  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  const [
    totalLeads,
    newLeads,
    followUpLeads,
    qualifiedLeads,
    convertedLeads,
    consultationsCount,
    propertiesCount,
    publishedBlogs,
    monthlyLeads,
    recentLeads,
    leadsByStatus,
  ] = await Promise.all([
    prisma.lead.count({ where: { deletedAt: null } }),
    prisma.lead.count({ where: { deletedAt: null, status: "NEW" } }),
    prisma.lead.count({ where: { deletedAt: null, status: "FOLLOW_UP" } }),
    prisma.lead.count({ where: { deletedAt: null, status: "QUALIFIED" } }),
    prisma.lead.count({ where: { deletedAt: null, status: "CONVERTED" } }),
    prisma.consultation.count({ where: { deletedAt: null } }),
    prisma.property.count({ where: { deletedAt: null, status: "PUBLISHED" } }),
    prisma.blogPost.count({ where: { deletedAt: null, status: "PUBLISHED" } }),
    prisma.lead.count({ where: { deletedAt: null, createdAt: { gte: monthStart } } }),
    prisma.lead.findMany({ where: { deletedAt: null }, orderBy: { createdAt: "desc" }, take: 8 }),
    prisma.lead.groupBy({ by: ["status"], where: { deletedAt: null }, _count: { id: true } }),
  ]);

  const cards = [
    { title: "Total Leads", value: totalLeads },
    { title: "New Leads", value: newLeads },
    { title: "Follow-ups", value: followUpLeads },
    { title: "Qualified", value: qualifiedLeads },
    { title: "Converted", value: convertedLeads },
    { title: "Consultations", value: consultationsCount },
    { title: "Properties", value: propertiesCount },
    { title: "Published Blogs", value: publishedBlogs },
  ];

  return (
    <AdminShell role={session.role}>
      <div className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-gold-light">CMS Dashboard</p>
            <h1 className="mt-3 text-4xl font-black">Welcome back</h1>
            <p className="mt-2 text-slate-400 text-sm">{monthlyLeads} leads this month</p>
          </header>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-[#11141D] p-5">
                <p className="text-xs uppercase tracking-wider text-slate-400">{card.title}</p>
                <p className="mt-2 text-3xl font-black">{card.value}</p>
              </div>
            ))}
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#11141D] p-6">
              <h2 className="text-lg font-bold mb-4">Lead Status</h2>
              <div className="space-y-2">
                {leadsByStatus.map((s) => (
                  <div key={s.status} className="flex justify-between text-sm">
                    <span className="text-slate-400">{s.status}</span>
                    <span className="font-semibold">{s._count.id}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#11141D] p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Recent Leads</h2>
                <Link href="/admin/leads" className="text-xs text-gold-light hover:underline">View all</Link>
              </div>
              <div className="space-y-3">
                {recentLeads.length === 0 ? (
                  <p className="text-sm text-slate-500">No leads yet.</p>
                ) : (
                  recentLeads.map((lead) => (
                    <div key={lead.id} className="flex justify-between items-start text-sm border-b border-white/5 pb-2">
                      <div>
                        <p className="font-medium">{lead.name}</p>
                        <p className="text-slate-500 text-xs">{lead.requirement ?? "General"}</p>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-300">{lead.status}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </AdminShell>
  );
}
