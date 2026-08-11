import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { jsonError, jsonSuccess, parseBody, isNextResponse } from "@/lib/apiHelpers";
import { consultationSchema, normalizePhone, validatePhone, formatZodError } from "@/lib/validation";

export async function POST(req: NextRequest) {
  const body = await parseBody<Record<string, string>>(req);
  if (isNextResponse(body)) return body;

  const parsed = consultationSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(formatZodError(parsed.error) ?? "Validation failed", 400);
  }

  const data = parsed.data;
  if (!validatePhone(data.mobileNumber)) {
    return jsonError("Please enter a valid 10-digit mobile number", 400);
  }

  const consultation = await prisma.consultation.create({
    data: {
      name: data.fullName.trim(),
      phone: normalizePhone(data.mobileNumber),
      email: data.email.trim(),
      service: data.interestedIn ?? data.service,
      message: data.message ?? (data.city ? `City: ${data.city}` : undefined),
      status: "REQUESTED",
      preferredDate: data.preferredDate ? new Date(data.preferredDate) : undefined,
      preferredTime: data.preferredTime,
    },
  });

  return jsonSuccess({ success: true, id: consultation.id }, 201);
}
