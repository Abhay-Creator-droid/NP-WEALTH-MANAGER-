import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError } from "@/lib/apiHelpers";
import { uploadFile } from "@/lib/storage";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, "media:read");
  if (!isAuthContext(auth)) return auth;

  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");
  const category = searchParams.get("category");

  const items = await prisma.mediaItem.findMany({
    where: {
      ...(category ? { category } : {}),
      ...(q ? { fileName: { contains: q, mode: "insensitive" } } : {}),
    },
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  return jsonSuccess(items);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req, "media:write");
  if (!isAuthContext(auth)) return auth;

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const category = (formData.get("category") as string) || "general";

  if (!file) return jsonError("No file provided", 400);

  try {
    const saved = await uploadFile(file, category);
    const item = await prisma.mediaItem.create({
      data: {
        url: saved.url,
        fileName: saved.fileName,
        fileType: saved.fileType,
        size: saved.size,
        category,
        storageProvider: saved.storageProvider,
        storagePath: saved.storagePath,
      },
    });
    return jsonSuccess(item, 201);
  } catch (err) {
    return jsonError(err instanceof Error ? err.message : "Upload failed", 400);
  }
}
