import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody } from "@/lib/apiHelpers";
import { faqSchema, formatZodError } from "@/lib/validation";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req, "content:write");
  if (!isAuthContext(auth)) return auth;
  const { id } = await params;
  const body = await parseBody<unknown>(req);
  if ("error" in (body as object)) return body as ReturnType<typeof jsonError>;
  const parsed = faqSchema.partial().safeParse(body);
  if (!parsed.success) return jsonError(formatZodError(parsed.error));
  const faq = await prisma.faq.update({ where: { id }, data: parsed.data });
  return jsonSuccess(faq);
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req, "content:write");
  if (!isAuthContext(auth)) return auth;
  const { id } = await params;
  await prisma.faq.update({ where: { id }, data: { deletedAt: new Date(), status: "ARCHIVED" } });
  return jsonSuccess({ success: true });
}
