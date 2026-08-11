import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError } from "@/lib/apiHelpers";
import { deleteFile } from "@/lib/storage";

type Params = { params: Promise<{ id: string }> };

export async function DELETE(_req: NextRequest, { params }: Params) {
  const auth = await requireAuth(_req, "media:write");
  if (!isAuthContext(auth)) return auth;

  const { id } = await params;
  const item = await prisma.mediaItem.findUnique({ where: { id } });
  if (!item) return jsonError("Not found", 404);

  await deleteFile(item.storagePath, item.storageProvider, item.category ?? "general");
  await prisma.mediaItem.delete({ where: { id } });
  return jsonSuccess({ success: true });
}
