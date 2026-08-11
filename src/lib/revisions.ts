import { prisma } from "@/lib/prisma";

export async function saveRevision(params: {
  entity: string;
  entityId: string;
  changes: Record<string, unknown>;
  summary?: string;
  createdById: string;
}) {
  try {
    await prisma.revision.create({
      data: {
        entity: params.entity,
        entityId: params.entityId,
        changes: JSON.stringify(params.changes),
        summary: params.summary,
        createdById: params.createdById,
      },
    });
  } catch {
    // Non-blocking revision logging
  }
}

export async function getRevisions(entity: string, entityId: string) {
  return prisma.revision.findMany({
    where: { entity, entityId },
    orderBy: { createdAt: "desc" },
    take: 20,
    include: { createdBy: { select: { name: true, email: true } } },
  });
}
