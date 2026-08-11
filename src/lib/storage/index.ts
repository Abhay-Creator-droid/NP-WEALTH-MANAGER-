import type { UploadResult } from "./types";
import { isPrivateCategory } from "./types";
import * as local from "./local";
import * as supabase from "./supabase";
import { isSupabaseConfigured } from "@/lib/supabase/server";

export type StorageProvider = "local" | "supabase";

export function getStorageProvider(): StorageProvider {
  if (process.env.STORAGE_PROVIDER === "supabase") return "supabase";
  if (process.env.STORAGE_PROVIDER === "local") return "local";
  if (process.env.NODE_ENV === "production" && isSupabaseConfigured()) return "supabase";
  return "local";
}

export async function uploadFile(file: File, category = "general"): Promise<UploadResult> {
  const provider = getStorageProvider();
  if (provider === "supabase") {
    return supabase.uploadSupabase(file, category);
  }
  return local.uploadLocal(file, category);
}

export async function deleteFile(
  storagePath: string | null | undefined,
  storageProvider: string | null | undefined,
  category = "general"
): Promise<void> {
  if (!storagePath) return;

  const provider = (storageProvider as StorageProvider) ?? getStorageProvider();
  if (provider === "supabase") {
    await supabase.deleteSupabase(storagePath, category);
    return;
  }
  await local.deleteLocal(storagePath);
}

export function resolveMediaUrl(
  url: string,
  storagePath?: string | null,
  category?: string | null
): string {
  if (!storagePath || getStorageProvider() === "local") return url;
  if (isPrivateCategory(category ?? "")) return url;
  return supabase.getPublicUrl(storagePath, category ?? "general");
}

export { validateFile, isPrivateCategory } from "./types";
