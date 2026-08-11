import { NextRequest, NextResponse } from "next/server";

function getAllowedOrigins(): string[] {
  const origins = new Set<string>();
  if (process.env.FRONTEND_URL) origins.add(process.env.FRONTEND_URL.replace(/\/$/, ""));
  if (process.env.NEXT_PUBLIC_API_URL) origins.add(process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, ""));
  return Array.from(origins);
}

export function applyCorsHeaders(response: NextResponse, origin: string | null): NextResponse {
  const allowed = getAllowedOrigins();
  if (!origin || allowed.length === 0) return response;

  const normalizedOrigin = origin.replace(/\/$/, "");
  if (allowed.includes(normalizedOrigin)) {
    response.headers.set("Access-Control-Allow-Origin", normalizedOrigin);
    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set("Vary", "Origin");
  }
  return response;
}

export function handleCorsPreflight(request: NextRequest): NextResponse | null {
  if (request.method !== "OPTIONS") return null;

  const origin = request.headers.get("origin");
  const response = new NextResponse(null, { status: 204 });
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.headers.set("Access-Control-Max-Age", "86400");
  return applyCorsHeaders(response, origin);
}

export function withCors(response: NextResponse, request: NextRequest): NextResponse {
  return applyCorsHeaders(response, request.headers.get("origin"));
}
