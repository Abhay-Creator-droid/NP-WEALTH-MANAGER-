import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED", deletedAt: null },
    orderBy: [{ publishedAt: "desc" }, { displayOrder: "asc" }],
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
      shortDesc: true,
      coverImageUrl: true,
      author: true,
      publishedAt: true,
      seoTitle: true,
      seoDescription: true,
    },
  });
  return NextResponse.json(posts);
}
