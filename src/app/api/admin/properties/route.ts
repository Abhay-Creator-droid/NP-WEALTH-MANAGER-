import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody, isNextResponse } from "@/lib/apiHelpers";
import { propertySchema, slugify, formatZodError } from "@/lib/validation";
import { logActivity } from "@/lib/audit";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, "content:read");
  if (!isAuthContext(auth)) return auth;
  const properties = await prisma.property.findMany({
    where: { deletedAt: null },
    orderBy: { displayOrder: "asc" },
    include: { images: { orderBy: { order: "asc" } } },
  });
  return jsonSuccess(properties);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req, "content:write");
  if (!isAuthContext(auth)) return auth;
  const body = await parseBody<Record<string, unknown>>(req);
  if (isNextResponse(body)) return body;
  const parsed = propertySchema.safeParse(body);
  if (!parsed.success) return jsonError(formatZodError(parsed.error) ?? "Validation failed");
  const slug = parsed.data.slug ?? slugify(parsed.data.title);
  const property = await prisma.property.create({ data: { ...parsed.data, slug } });
  await logActivity({ userId: auth.userId, action: "PROPERTY_CREATED", entity: "Property", entityId: property.id });
  return jsonSuccess(property, 201);
}
