import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const settings = await prisma.siteSettings.findFirst({
    orderBy: { updatedAt: "desc" },
  });

  if (!settings) {
    return NextResponse.json({ error: "Site settings not found" }, { status: 404 });
  }

  return NextResponse.json(settings);
}
