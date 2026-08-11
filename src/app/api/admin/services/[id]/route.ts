import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody, isNextResponse } from "@/lib/apiHelpers";
import { serviceSchema, formatZodError } from "@/lib/validation";
import { logActivity } from "@/lib/audit";
import { saveRevision } from "@/lib/revisions";

type Params = { params: Promise<{ id: string }> };

export async function GET(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req, "content:read");
  if (!isAuthContext(auth)) return auth;

  const { id } = await params;
  const service = await prisma.service.findFirst({ where: { id, deletedAt: null } });
  if (!service) return jsonError("Not found", 404);
  return jsonSuccess(service);
}

export async function PATCH(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req, "content:write");
  if (!isAuthContext(auth)) return auth;

  const { id } = await params;
  const body = await parseBody<unknown>(req);
  if (isNextResponse(body)) return body;

  const parsed = serviceSchema.partial().safeParse(body);
  if (!parsed.success) return jsonError(formatZodError(parsed.error));

  const service = await prisma.service.update({ where: { id }, data: parsed.data });
  await logActivity({ userId: auth.userId, action: "SERVICE_UPDATED", entity: "Service", entityId: service.id });
  await saveRevision({ entity: "Service", entityId: service.id, changes: parsed.data as Record<string, unknown>, createdById: auth.userId });
  return jsonSuccess(service);
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req, "content:write");
  if (!isAuthContext(auth)) return auth;

  const { id } = await params;
  await prisma.service.update({ where: { id }, data: { deletedAt: new Date(), status: "ARCHIVED" } });
  return jsonSuccess({ success: true });
}
