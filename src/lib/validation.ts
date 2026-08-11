import { z } from "zod";

const phoneRegex = /^(\+91)?[6-9]\d{9}$/;

export const leadSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  mobileNumber: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Valid email is required"),
  city: z.string().min(2, "City is required"),
  interestedIn: z.string().optional(),
  requirement: z.string().optional(),
  loanType: z.string().optional(),
  amount: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
});

export const consultationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  mobileNumber: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Valid email is required"),
  city: z.string().optional(),
  interestedIn: z.string().optional(),
  service: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
});

export const serviceSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  shortDesc: z.string().min(5),
  fullDesc: z.string().optional(),
  icon: z.string().optional(),
  imageUrl: z.string().optional(),
  ctaText: z.string().optional(),
  ctaLink: z.string().optional(),
  displayOrder: z.number().int().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),
});

export const loanServiceSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().optional(),
  features: z.string().optional(),
  eligibility: z.string().optional(),
  documents: z.string().optional(),
  ctaText: z.string().optional(),
  ctaLink: z.string().optional(),
  imageUrl: z.string().optional(),
  displayOrder: z.number().int().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),
});

export const propertySchema = z.object({
  title: z.string().min(2),
  slug: z.string().optional(),
  type: z.string().min(2),
  location: z.string().optional(),
  description: z.string().optional(),
  features: z.string().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),
  featured: z.boolean().optional(),
  displayOrder: z.number().int().optional(),
});

export const teamMemberSchema = z.object({
  name: z.string().min(2),
  designation: z.string().optional(),
  bio: z.string().optional(),
  profileImageUrl: z.string().optional(),
  linkedIn: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional(),
  displayOrder: z.number().int().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),
});

export const testimonialSchema = z.object({
  clientName: z.string().min(2),
  designation: z.string().optional(),
  location: z.string().optional(),
  service: z.string().optional(),
  text: z.string().min(10),
  photoUrl: z.string().optional(),
  displayOrder: z.number().int().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),
});

export const blogPostSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  category: z.string().min(2),
  shortDesc: z.string().optional(),
  content: z.string().optional(),
  coverImageUrl: z.string().optional(),
  author: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),
  publishedAt: z.string().optional(),
  displayOrder: z.number().int().optional(),
});

export const faqSchema = z.object({
  question: z.string().min(5),
  answer: z.string().min(5),
  category: z.string().optional(),
  displayOrder: z.number().int().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).optional(),
});

export const leadUpdateSchema = z.object({
  status: z.enum(["NEW", "CONTACTED", "FOLLOW_UP", "QUALIFIED", "CONVERTED", "LOST", "CLOSED"]).optional(),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]).optional(),
  assignedTo: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  followUpAt: z.string().optional().nullable(),
});

export const consultationUpdateSchema = z.object({
  status: z.enum(["REQUESTED", "CONFIRMED", "RESCHEDULED", "COMPLETED", "CANCELLED"]).optional(),
  preferredDate: z.string().optional().nullable(),
  preferredTime: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
});

export const followUpSchema = z.object({
  leadId: z.string().min(1),
  scheduledAt: z.string().min(1),
  notes: z.string().optional(),
  status: z.enum(["PENDING", "COMPLETED", "CANCELLED"]).optional(),
});

export function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  return phone;
}

export function validatePhone(phone: string): boolean {
  const clean = phone.replace(/\s/g, "");
  return phoneRegex.test(clean) || /^[6-9]\d{9}$/.test(clean.replace(/\D/g, "").slice(-10));
}

export function formatZodError(error: { issues: { message: string }[] }): string {
  return error.issues[0]?.message ?? "Validation failed";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
