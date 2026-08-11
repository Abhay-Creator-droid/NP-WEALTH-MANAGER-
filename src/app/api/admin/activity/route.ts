import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess } from "@/lib/apiHelpers";
import { getRevisions } from "@/lib/revisions";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, "audit:read");
  if (!isAuthContext(auth)) return auth;

  const { searchParams } = new URL(req.url);
  const entity = searchParams.get("entity");
  const entityId = searchParams.get("entityId");

  if (entity && entityId) {
    const revisions = await getRevisions(entity, entityId);
    return jsonSuccess(revisions);
  }

  const logs = await prisma.activityLog.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    include: { user: { select: { name: true, email: true } } },
  });
  return jsonSuccess(logs);
}
