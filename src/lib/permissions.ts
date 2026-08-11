export type AdminRole = "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "STAFF";

export type Permission =
  | "settings:read"
  | "settings:write"
  | "content:read"
  | "content:write"
  | "media:read"
  | "media:write"
  | "leads:read"
  | "leads:write"
  | "consultations:read"
  | "consultations:write"
  | "users:manage"
  | "audit:read";

const ROLE_PERMISSIONS: Record<AdminRole, Permission[]> = {
  SUPER_ADMIN: [
    "settings:read", "settings:write", "content:read", "content:write",
    "media:read", "media:write", "leads:read", "leads:write",
    "consultations:read", "consultations:write", "users:manage", "audit:read",
  ],
  ADMIN: [
    "settings:read", "settings:write", "content:read", "content:write",
    "media:read", "media:write", "leads:read", "leads:write",
    "consultations:read", "consultations:write", "audit:read",
  ],
  EDITOR: [
    "content:read", "content:write", "media:read", "media:write",
  ],
  STAFF: [
    "leads:read", "leads:write", "consultations:read", "consultations:write",
  ],
};

export function hasPermission(role: string, permission: Permission): boolean {
  const perms = ROLE_PERMISSIONS[role as AdminRole];
  return perms?.includes(permission) ?? false;
}

export function requirePermission(role: string, permission: Permission): boolean {
  return hasPermission(role, permission);
}
