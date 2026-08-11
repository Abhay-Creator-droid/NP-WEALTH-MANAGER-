import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody } from "@/lib/apiHelpers";
import { testimonialSchema, formatZodError } from "@/lib/validation";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, "content:read");
  if (!isAuthContext(auth)) return auth;
  const items = await prisma.testimonial.findMany({ where: { deletedAt: null }, orderBy: { displayOrder: "asc" } });
  return jsonSuccess(items);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req, "content:write");
  if (!isAuthContext(auth)) return auth;
  const body = await parseBody<unknown>(req);
  if ("error" in (body as object)) return body as ReturnType<typeof jsonError>;
  const parsed = testimonialSchema.safeParse(body);
  if (!parsed.success) return jsonError(formatZodError(parsed.error) ?? "Validation failed");
  const item = await prisma.testimonial.create({ data: parsed.data });
  return jsonSuccess(item, 201);
}
