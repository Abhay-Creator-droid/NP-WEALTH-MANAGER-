import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody } from "@/lib/apiHelpers";
import { serviceSchema, formatZodError } from "@/lib/validation";
import { logActivity } from "@/lib/audit";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, "content:read");
  if (!isAuthContext(auth)) return auth;

  const services = await prisma.service.findMany({
    where: { deletedAt: null },
    orderBy: { displayOrder: "asc" },
  });
  return jsonSuccess(services);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req, "content:write");
  if (!isAuthContext(auth)) return auth;

  const body = await parseBody<unknown>(req);
  if ("error" in (body as object)) return body as ReturnType<typeof jsonError>;

  const parsed = serviceSchema.safeParse(body);
  if (!parsed.success) return jsonError(formatZodError(parsed.error) ?? "Validation failed");

  const service = await prisma.service.create({ data: parsed.data });
  await logActivity({ userId: auth.userId, action: "SERVICE_CREATED", entity: "Service", entityId: service.id });
  return jsonSuccess(service, 201);
}
