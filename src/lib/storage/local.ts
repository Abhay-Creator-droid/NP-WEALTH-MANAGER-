import { writeFile, mkdir, unlink } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import type { UploadResult } from "./types";
import { validateFile } from "./types";

export async function uploadLocal(file: File, category = "general"): Promise<UploadResult> {
  const error = validateFile(file);
  if (error) throw new Error(error);

  const ext = path.extname(file.name) || ".jpg";
  const storedName = `${randomUUID()}${ext}`;
  const storagePath = `${category}/${storedName}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads", category);
  await mkdir(uploadDir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(uploadDir, storedName), buffer);

  return {
    url: `/uploads/${storagePath}`,
    fileName: file.name,
    fileType: file.type,
    size: file.size,
    storageProvider: "local",
    storagePath,
  };
}

export async function deleteLocal(storagePath: string): Promise<void> {
  const filePath = path.join(process.cwd(), "public", "uploads", storagePath);
  try {
    await unlink(filePath);
  } catch {
    // File may already be removed locally.
  }
}

export function getLocalPublicUrl(storagePath: string): string {
  return `/uploads/${storagePath}`;
}
