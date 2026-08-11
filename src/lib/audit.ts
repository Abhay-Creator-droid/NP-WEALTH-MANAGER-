import { prisma } from "@/lib/prisma";

export type AuditAction =
  | "LOGIN"
  | "LOGOUT"
  | "CONTENT_UPDATED"
  | "SERVICE_CREATED"
  | "SERVICE_UPDATED"
  | "PROPERTY_CREATED"
  | "PROPERTY_UPDATED"
  | "LEAD_CREATED"
  | "LEAD_UPDATED"
  | "LEAD_STATUS_CHANGED"
  | "BLOG_CREATED"
  | "BLOG_PUBLISHED"
  | "SETTINGS_UPDATED";

export async function logActivity(params: {
  userId: string;
  action: AuditAction | string;
  entity: string;
  entityId?: string;
  ipAddress?: string;
  userAgent?: string;
}) {
  try {
    await prisma.activityLog.create({
      data: {
        userId: params.userId,
        action: params.action,
        entity: params.entity,
        entityId: params.entityId,
        ipAddress: params.ipAddress,
        userAgent: params.userAgent,
      },
    });
  } catch {
    // Non-blocking audit logging
  }
}
