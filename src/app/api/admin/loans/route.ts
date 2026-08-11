import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody } from "@/lib/apiHelpers";
import { loanServiceSchema, formatZodError } from "@/lib/validation";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, "content:read");
  if (!isAuthContext(auth)) return auth;
  const loans = await prisma.loanService.findMany({ where: { deletedAt: null }, orderBy: { displayOrder: "asc" } });
  return jsonSuccess(loans);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req, "content:write");
  if (!isAuthContext(auth)) return auth;
  const body = await parseBody<unknown>(req);
  if ("error" in (body as object)) return body as ReturnType<typeof jsonError>;
  const parsed = loanServiceSchema.safeParse(body);
  if (!parsed.success) return jsonError(formatZodError(parsed.error) ?? "Validation failed");
  const loan = await prisma.loanService.create({ data: parsed.data });
  return jsonSuccess(loan, 201);
}
