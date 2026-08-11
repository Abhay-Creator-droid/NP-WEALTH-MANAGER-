import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { jsonError, jsonSuccess, parseBody, isNextResponse } from "@/lib/apiHelpers";
import { leadSchema, normalizePhone, validatePhone, formatZodError } from "@/lib/validation";

export async function POST(req: NextRequest) {
  const body = await parseBody<Record<string, string>>(req);
  if (isNextResponse(body)) return body;

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(formatZodError(parsed.error) ?? "Validation failed", 400);
  }

  const data = parsed.data;
  if (!validatePhone(data.mobileNumber)) {
    return jsonError("Please enter a valid 10-digit mobile number", 400);
  }

  const lead = await prisma.lead.create({
    data: {
      name: data.fullName.trim(),
      phone: normalizePhone(data.mobileNumber),
      email: data.email.trim(),
      city: data.city.trim(),
      requirement: data.interestedIn ?? data.requirement,
      loanType: data.loanType,
      amount: data.amount,
      message: data.message,
      source: data.source ?? "website-form",
      status: "NEW",
      priority: "MEDIUM",
    },
  });

  return jsonSuccess({ success: true, id: lead.id }, 201);
}
