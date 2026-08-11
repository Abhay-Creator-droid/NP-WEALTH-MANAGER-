import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody, isNextResponse } from "@/lib/apiHelpers";
import { leadUpdateSchema, formatZodError } from "@/lib/validation";
import { logActivity } from "@/lib/audit";

type Params = { params: Promise<{ id: string }> };

export async function GET(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req, "leads:read");
  if (!isAuthContext(auth)) return auth;
  const { id } = await params;
  const lead = await prisma.lead.findFirst({
    where: { id, deletedAt: null },
    include: { followUps: { orderBy: { scheduledAt: "desc" } } },
  });
  if (!lead) return jsonError("Not found", 404);
  return jsonSuccess(lead);
}

export async function PATCH(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req, "leads:write");
  if (!isAuthContext(auth)) return auth;
  const { id } = await params;
  const body = await parseBody<Record<string, unknown>>(req);
  if (isNextResponse(body)) return body;

  const parsed = leadUpdateSchema.safeParse(body);
  if (!parsed.success) return jsonError(formatZodError(parsed.error));

  const data = parsed.data;
  const updateData: Record<string, unknown> = { ...data };
  if (data.followUpAt) updateData.followUpAt = new Date(data.followUpAt);

  const lead = await prisma.lead.update({ where: { id }, data: updateData });
  await logActivity({
    userId: auth.userId,
    action: data.status ? "LEAD_STATUS_CHANGED" : "LEAD_UPDATED",
    entity: "Lead",
    entityId: lead.id,
  });
  return jsonSuccess(lead);
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req, "leads:write");
  if (!isAuthContext(auth)) return auth;
  const { id } = await params;
  await prisma.lead.update({ where: { id }, data: { deletedAt: new Date() } });
  return jsonSuccess({ success: true });
}
