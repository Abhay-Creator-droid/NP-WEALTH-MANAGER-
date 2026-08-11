import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const settings = await prisma.siteSettings.findFirst({ orderBy: { updatedAt: "desc" } });
  const services = await prisma.service.findMany({ where: { status: "PUBLISHED" }, orderBy: { displayOrder: "asc" } });
  const loans = await prisma.loanService.findMany({ where: { status: "PUBLISHED" }, orderBy: { displayOrder: "asc" } });
  const documents = await prisma.documentItem.findMany({ where: { status: "PUBLISHED" }, orderBy: { displayOrder: "asc" } });
  const properties = await prisma.property.findMany({ where: { status: "PUBLISHED" }, orderBy: { displayOrder: "asc" }, include: { images: true } });
  const team = await prisma.teamMember.findMany({ where: { status: "PUBLISHED" }, orderBy: { displayOrder: "asc" } });
  const testimonials = await prisma.testimonial.findMany({ where: { status: "PUBLISHED" }, orderBy: { displayOrder: "asc" } });
  const faqs = await prisma.faq.findMany({ where: { status: "PUBLISHED" }, orderBy: { displayOrder: "asc" } });

  return NextResponse.json({
    settings,
    services,
    loans,
    documents,
    properties,
    team,
    testimonials,
    faqs,
  });
}
