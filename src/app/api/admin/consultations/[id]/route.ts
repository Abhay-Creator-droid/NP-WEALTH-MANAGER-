import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody, isNextResponse } from "@/lib/apiHelpers";
import { consultationUpdateSchema, formatZodError } from "@/lib/validation";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req, "consultations:write");
  if (!isAuthContext(auth)) return auth;
  const { id } = await params;
  const body = await parseBody<Record<string, unknown>>(req);
  if (isNextResponse(body)) return body;

  const parsed = consultationUpdateSchema.safeParse(body);
  if (!parsed.success) return jsonError(formatZodError(parsed.error));

  const data = parsed.data;
  const updateData: Record<string, unknown> = { ...data };
  if (data.preferredDate) updateData.preferredDate = new Date(data.preferredDate);

  const item = await prisma.consultation.update({ where: { id }, data: updateData });
  return jsonSuccess(item);
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req, "consultations:write");
  if (!isAuthContext(auth)) return auth;
  const { id } = await params;
  await prisma.consultation.update({ where: { id }, data: { deletedAt: new Date() } });
  return jsonSuccess({ success: true });
}
