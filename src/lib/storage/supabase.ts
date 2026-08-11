import { randomUUID } from "crypto";
import path from "path";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import type { UploadResult } from "./types";
import { isPrivateCategory, validateFile } from "./types";

export const PUBLIC_BUCKET = "website-media";
export const PRIVATE_BUCKET = "customer-documents";

function resolveBucket(category: string): string {
  return isPrivateCategory(category) ? PRIVATE_BUCKET : PUBLIC_BUCKET;
}

export async function uploadSupabase(file: File, category = "general"): Promise<UploadResult> {
  const error = validateFile(file);
  if (error) throw new Error(error);

  const supabase = getSupabaseAdmin();
  const bucket = resolveBucket(category);
  const ext = path.extname(file.name) || ".jpg";
  const storedName = `${randomUUID()}${ext}`;
  const storagePath = `${category}/${storedName}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error: uploadError } = await supabase.storage.from(bucket).upload(storagePath, buffer, {
    contentType: file.type,
    upsert: false,
  });

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const url = isPrivateCategory(category)
    ? await getSignedUrl(storagePath, category)
    : getPublicUrl(storagePath, category);

  return {
    url,
    fileName: file.name,
    fileType: file.type,
    size: file.size,
    storageProvider: "supabase",
    storagePath,
  };
}

export async function deleteSupabase(storagePath: string, category = "general"): Promise<void> {
  const supabase = getSupabaseAdmin();
  const bucket = resolveBucket(category);
  await supabase.storage.from(bucket).remove([storagePath]);
}

export function getPublicUrl(storagePath: string, category = "general"): string {
  const supabase = getSupabaseAdmin();
  const bucket = resolveBucket(category);
  const { data } = supabase.storage.from(bucket).getPublicUrl(storagePath);
  return data.publicUrl;
}

export async function getSignedUrl(
  storagePath: string,
  category = "general",
  expiresInSeconds = 3600
): Promise<string> {
  const supabase = getSupabaseAdmin();
  const bucket = resolveBucket(category);
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(storagePath, expiresInSeconds);
  if (error || !data?.signedUrl) {
    throw new Error(error?.message ?? "Unable to create signed URL");
  }
  return data.signedUrl;
}
