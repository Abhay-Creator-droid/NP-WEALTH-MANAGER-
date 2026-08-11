import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";

export type AdminSession = {
  userId: string;
  role: string;
};

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return null;
  }

  const payload = verifyToken(token);
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const { userId, role } = payload as { userId?: string; role?: string };
  if (!userId || !role) {
    return null;
  }

  return { userId, role };
}

export async function requireAdminSession(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }
  return session;
}
