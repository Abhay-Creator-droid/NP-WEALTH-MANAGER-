import { NextRequest, NextResponse } from "next/server";
import { getAuthToken, verifyToken } from "@/lib/auth";
import { hasPermission, Permission } from "@/lib/permissions";

export type AuthContext = { userId: string; role: string };

export function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export function jsonSuccess<T>(data: T, status = 200) {
  return NextResponse.json(data, { status });
}

export async function getAuthContext(req: NextRequest): Promise<AuthContext | null> {
  const token = getAuthToken(req);
  if (!token) return null;
  const payload = verifyToken(token);
  if (!payload || typeof payload !== "object") return null;
  const { userId, role } = payload as { userId?: string; role?: string };
  if (!userId || !role) return null;
  return { userId, role };
}

export async function requireAuth(req: NextRequest, permission?: Permission): Promise<AuthContext | NextResponse> {
  const ctx = await getAuthContext(req);
  if (!ctx) return jsonError("Unauthorized", 401);
  if (permission && !hasPermission(ctx.role, permission)) {
    return jsonError("Forbidden", 403);
  }
  return ctx;
}

export function isAuthContext(result: AuthContext | NextResponse): result is AuthContext {
  return "userId" in result;
}

export function isNextResponse(value: unknown): value is NextResponse {
  return value instanceof NextResponse;
}

export async function parseBody<T>(req: NextRequest): Promise<T | NextResponse> {
  try {
    return (await req.json()) as T;
  } catch {
    return jsonError("Invalid JSON body", 400);
  }
}
