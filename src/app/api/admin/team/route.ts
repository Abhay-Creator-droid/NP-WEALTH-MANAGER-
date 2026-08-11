import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody } from "@/lib/apiHelpers";
import { teamMemberSchema, formatZodError } from "@/lib/validation";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, "content:read");
  if (!isAuthContext(auth)) return auth;
  const members = await prisma.teamMember.findMany({ where: { deletedAt: null }, orderBy: { displayOrder: "asc" } });
  return jsonSuccess(members);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req, "content:write");
  if (!isAuthContext(auth)) return auth;
  const body = await parseBody<unknown>(req);
  if ("error" in (body as object)) return body as ReturnType<typeof jsonError>;
  const parsed = teamMemberSchema.safeParse(body);
  if (!parsed.success) return jsonError(formatZodError(parsed.error) ?? "Validation failed");
  const member = await prisma.teamMember.create({ data: parsed.data });
  return jsonSuccess(member, 201);
}
