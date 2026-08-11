import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError } from "@/lib/apiHelpers";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, "consultations:read");
  if (!isAuthContext(auth)) return auth;

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");

  const items = await prisma.consultation.findMany({
    where: { deletedAt: null, ...(status ? { status } : {}) },
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  return jsonSuccess(items);
}

export async function PATCH() {
  return jsonError("Use PATCH /api/admin/consultations/[id]", 405);
}
