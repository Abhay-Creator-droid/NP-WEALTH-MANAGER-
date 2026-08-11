/**
 * Shared file validation for all storage providers.
 */
export const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
] as const;

export const MAX_UPLOAD_SIZE = 5 * 1024 * 1024; // 5MB

/** Categories stored in a private bucket (signed URLs only). */
export const PRIVATE_MEDIA_CATEGORIES = new Set(["customer-documents"]);

export type UploadResult = {
  url: string;
  fileName: string;
  fileType: string;
  size: number;
  storageProvider: "local" | "supabase";
  storagePath: string;
};

export function validateFile(file: File): string | null {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type as (typeof ALLOWED_IMAGE_TYPES)[number])) {
    return "Invalid file type. Allowed: JPEG, PNG, WebP, GIF, SVG";
  }
  if (file.size > MAX_UPLOAD_SIZE) {
    return "File too large. Maximum size is 5MB";
  }
  return null;
}

export function isPrivateCategory(category: string): boolean {
  return PRIVATE_MEDIA_CATEGORIES.has(category);
}
