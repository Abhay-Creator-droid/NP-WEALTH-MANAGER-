import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody } from "@/lib/apiHelpers";
import { followUpSchema, formatZodError } from "@/lib/validation";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, "leads:read");
  if (!isAuthContext(auth)) return auth;

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const q = searchParams.get("q");

  const leads = await prisma.lead.findMany({
    where: {
      deletedAt: null,
      ...(status ? { status } : {}),
      ...(q
        ? {
            OR: [
              { name: { contains: q } },
              { phone: { contains: q } },
              { email: { contains: q } },
              { city: { contains: q } },
            ],
          }
        : {}),
    },
    orderBy: { createdAt: "desc" },
    include: { followUps: { orderBy: { scheduledAt: "asc" }, take: 5 } },
    take: 100,
  });
  return jsonSuccess(leads);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req, "leads:write");
  if (!isAuthContext(auth)) return auth;

  const body = await parseBody<unknown>(req);
  if ("error" in (body as object)) return body as ReturnType<typeof jsonError>;

  const parsed = followUpSchema.safeParse(body);
  if (!parsed.success) return jsonError(formatZodError(parsed.error) ?? "Validation failed");

  const followUp = await prisma.followUp.create({
    data: {
      leadId: parsed.data.leadId,
      scheduledAt: new Date(parsed.data.scheduledAt),
      notes: parsed.data.notes,
      status: parsed.data.status ?? "PENDING",
      createdBy: auth.userId,
    },
  });

  await prisma.lead.update({
    where: { id: parsed.data.leadId },
    data: { followUpAt: new Date(parsed.data.scheduledAt), status: "FOLLOW_UP" },
  });

  return jsonSuccess(followUp, 201);
}
