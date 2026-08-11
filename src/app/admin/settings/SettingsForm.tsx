"use client";

import { CrudForm } from "@/components/admin/CrudForm";

export function SettingsForm({ initial }: { initial: Record<string, unknown> }) {
  return (
    <CrudForm
      initial={initial}
      fields={[
        { name: "companyName", label: "Company Name" },
        { name: "shortName", label: "Short Name" },
        { name: "tagline", label: "Tagline" },
        { name: "logoUrl", label: "Logo URL", type: "url" },
        { name: "faviconUrl", label: "Favicon URL", type: "url" },
        { name: "phoneDisplay", label: "Phone (Display)" },
        { name: "phoneRaw", label: "Phone (Raw)" },
        { name: "whatsappNumber", label: "WhatsApp Number" },
        { name: "email", label: "Email", type: "email" },
        { name: "address", label: "Address", type: "textarea" },
        { name: "businessHours", label: "Business Hours (JSON)", type: "textarea" },
        { name: "socialLinks", label: "Social Links (JSON)", type: "textarea" },
        { name: "heroHeading", label: "Hero Title" },
        { name: "heroSubtitle", label: "Hero Subtitle", type: "textarea" },
        { name: "heroCtaPrimaryText", label: "Hero CTA Text" },
        { name: "heroCtaPrimaryLink", label: "Hero CTA Link" },
        { name: "heroImageUrl", label: "Hero Image URL", type: "url" },
        { name: "aboutTitle", label: "About Title" },
        { name: "aboutDescription", label: "About Description", type: "textarea", rows: 5 },
        { name: "whyChooseUsContent", label: "Why Choose Us (JSON)", type: "textarea", rows: 6 },
        { name: "howItWorksContent", label: "How It Works (JSON)", type: "textarea", rows: 6 },
        { name: "footerText", label: "Footer Text", type: "textarea" },
        { name: "disclaimer", label: "Disclaimer", type: "textarea" },
        { name: "seoTitle", label: "SEO Title" },
        { name: "seoDescription", label: "SEO Description", type: "textarea" },
      ]}
      onSubmit={async (data) => {
        const res = await fetch("/api/admin/settings", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? "Failed to save");
      }}
    />
  );
}
