import { NextRequest, NextResponse } from "next/server";
import { clearAuthCookie, getAuthToken, verifyToken } from "@/lib/auth";
import { logActivity } from "@/lib/audit";

export async function POST(request: NextRequest) {
  const token = getAuthToken(request);
  if (token) {
    const payload = verifyToken(token);
    if (payload && typeof payload === "object" && "userId" in payload) {
      await logActivity({ userId: (payload as { userId: string }).userId, action: "LOGOUT", entity: "AdminUser" });
    }
  }
  const res = NextResponse.json({ success: true });
  clearAuthCookie(res);
  return res;
}
