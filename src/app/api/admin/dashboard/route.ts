import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess } from "@/lib/apiHelpers";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, "leads:read");
  if (!isAuthContext(auth)) return auth;

  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  const [
    totalLeads,
    newLeads,
    followUpLeads,
    qualifiedLeads,
    convertedLeads,
    consultations,
    properties,
    publishedBlogs,
    recentLeads,
    leadsByStatus,
    monthlyLeads,
  ] = await Promise.all([
    prisma.lead.count({ where: { deletedAt: null } }),
    prisma.lead.count({ where: { deletedAt: null, status: "NEW" } }),
    prisma.lead.count({ where: { deletedAt: null, status: "FOLLOW_UP" } }),
    prisma.lead.count({ where: { deletedAt: null, status: "QUALIFIED" } }),
    prisma.lead.count({ where: { deletedAt: null, status: "CONVERTED" } }),
    prisma.consultation.count({ where: { deletedAt: null } }),
    prisma.property.count({ where: { deletedAt: null, status: "PUBLISHED" } }),
    prisma.blogPost.count({ where: { deletedAt: null, status: "PUBLISHED" } }),
    prisma.lead.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
    prisma.lead.groupBy({ by: ["status"], where: { deletedAt: null }, _count: { id: true } }),
    prisma.lead.count({ where: { deletedAt: null, createdAt: { gte: monthStart } } }),
  ]);

  const leadsByService = await prisma.lead.groupBy({
    by: ["requirement"],
    where: { deletedAt: null, requirement: { not: null } },
    _count: { id: true },
  });

  return jsonSuccess({
    cards: {
      totalLeads,
      newLeads,
      followUpLeads,
      qualifiedLeads,
      convertedLeads,
      consultations,
      properties,
      publishedBlogs,
      monthlyLeads,
    },
    charts: {
      leadsByStatus: leadsByStatus.map((s) => ({ status: s.status, count: s._count.id })),
      leadsByService: leadsByService.map((s) => ({ service: s.requirement ?? "Unknown", count: s._count.id })),
    },
    recentLeads,
  });
}
