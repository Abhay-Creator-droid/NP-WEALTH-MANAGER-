import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, isAuthContext, jsonSuccess, jsonError, parseBody, isNextResponse } from "@/lib/apiHelpers";
import { blogPostSchema, formatZodError } from "@/lib/validation";
import { logActivity } from "@/lib/audit";
import { saveRevision } from "@/lib/revisions";

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req, "content:read");
  if (!isAuthContext(auth)) return auth;
  const posts = await prisma.blogPost.findMany({ where: { deletedAt: null }, orderBy: { updatedAt: "desc" } });
  return jsonSuccess(posts);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req, "content:write");
  if (!isAuthContext(auth)) return auth;
  const body = await parseBody<Record<string, unknown>>(req);
  if (isNextResponse(body)) return body;
  const parsed = blogPostSchema.safeParse(body);
  if (!parsed.success) return jsonError(formatZodError(parsed.error));

  const data = parsed.data;
  const post = await prisma.blogPost.create({
    data: {
      ...data,
      publishedAt: data.status === "PUBLISHED" ? (data.publishedAt ? new Date(data.publishedAt) : new Date()) : null,
    },
  });

  await logActivity({ userId: auth.userId, action: data.status === "PUBLISHED" ? "BLOG_PUBLISHED" : "BLOG_CREATED", entity: "BlogPost", entityId: post.id });
  await saveRevision({ entity: "BlogPost", entityId: post.id, changes: data as Record<string, unknown>, createdById: auth.userId });
  return jsonSuccess(post, 201);
}
