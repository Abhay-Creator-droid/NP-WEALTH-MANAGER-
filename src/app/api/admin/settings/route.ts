import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody, isNextResponse } from "@/lib/apiHelpers";
import { logActivity } from "@/lib/audit";
import { saveRevision } from "@/lib/revisions";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, "settings:read");
  if (!isAuthContext(auth)) return auth;

  const settings = await prisma.siteSettings.findFirst({ orderBy: { updatedAt: "desc" } });
  return jsonSuccess(settings);
}

export async function PATCH(req: NextRequest) {
  const auth = await requireAuth(req, "settings:write");
  if (!isAuthContext(auth)) return auth;

  const body = await parseBody<Record<string, unknown>>(req);
  if (isNextResponse(body)) return body;

  const existing = await prisma.siteSettings.findFirst({ orderBy: { updatedAt: "desc" } });
  if (!existing) {
    return jsonError("Settings not found. Run seed first.", 404);
  }

  const updated = await prisma.siteSettings.update({
    where: { id: existing.id },
    data: body as Parameters<typeof prisma.siteSettings.update>[0]["data"],
  });

  await logActivity({ userId: auth.userId, action: "SETTINGS_UPDATED", entity: "SiteSettings", entityId: updated.id });
  await saveRevision({ entity: "SiteSettings", entityId: updated.id, changes: body, createdById: auth.userId, summary: "Settings updated" });

  return jsonSuccess(updated);
}
