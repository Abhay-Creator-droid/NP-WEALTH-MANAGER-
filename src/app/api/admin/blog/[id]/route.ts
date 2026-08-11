import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody, isNextResponse } from "@/lib/apiHelpers";
import { blogPostSchema, formatZodError } from "@/lib/validation";
import { logActivity } from "@/lib/audit";
import { saveRevision } from "@/lib/revisions";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req, "content:write");
  if (!isAuthContext(auth)) return auth;
  const { id } = await params;
  const body = await parseBody<Record<string, unknown>>(req);
  if (isNextResponse(body)) return body;
  const parsed = blogPostSchema.partial().safeParse(body);
  if (!parsed.success) return jsonError(formatZodError(parsed.error));

  const data = parsed.data;
  const updateData: Record<string, unknown> = { ...data };
  if (data.status === "PUBLISHED" && data.publishedAt) {
    updateData.publishedAt = new Date(data.publishedAt);
  } else if (data.status === "PUBLISHED" && !data.publishedAt) {
    const existing = await prisma.blogPost.findUnique({ where: { id } });
    if (!existing?.publishedAt) updateData.publishedAt = new Date();
  }

  const post = await prisma.blogPost.update({ where: { id }, data: updateData });
  if (data.status === "PUBLISHED") {
    await logActivity({ userId: auth.userId, action: "BLOG_PUBLISHED", entity: "BlogPost", entityId: post.id });
  }
  await saveRevision({ entity: "BlogPost", entityId: post.id, changes: data as Record<string, unknown>, createdById: auth.userId });
  return jsonSuccess(post);
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req, "content:write");
  if (!isAuthContext(auth)) return auth;
  const { id } = await params;
  await prisma.blogPost.update({ where: { id }, data: { deletedAt: new Date(), status: "ARCHIVED" } });
  return jsonSuccess({ success: true });
}
