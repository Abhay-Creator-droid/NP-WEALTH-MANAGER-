"use client";

import { useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "select" | "number" | "email" | "url";
  options?: { value: string; label: string }[];
  rows?: number;
};

export function CrudForm({
  fields,
  initial,
  onSubmit,
  submitLabel = "Save",
}: {
  fields: Field[];
  initial?: Record<string, unknown>;
  onSubmit: (data: Record<string, unknown>) => Promise<void>;
  submitLabel?: string;
}) {
  const [form, setForm] = useState<Record<string, unknown>>(initial ?? {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await onSubmit(form);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <label key={field.name} className="block text-sm">
          <span className="text-slate-300 font-medium">{field.label}</span>
          {field.type === "textarea" ? (
            <textarea
              rows={field.rows ?? 4}
              value={String(form[field.name] ?? "")}
              onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
              className="mt-1 w-full rounded-xl border border-white/10 bg-[#11141D] px-4 py-3 text-white text-sm outline-none focus:border-gold-light"
            />
          ) : field.type === "select" ? (
            <select
              value={String(form[field.name] ?? "")}
              onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
              className="mt-1 w-full rounded-xl border border-white/10 bg-[#11141D] px-4 py-3 text-white text-sm outline-none focus:border-gold-light"
            >
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type ?? "text"}
              value={String(form[field.name] ?? "")}
              onChange={(e) =>
                setForm({
                  ...form,
                  [field.name]: field.type === "number" ? Number(e.target.value) : e.target.value,
                })
              }
              className="mt-1 w-full rounded-xl border border-white/10 bg-[#11141D] px-4 py-3 text-white text-sm outline-none focus:border-gold-light"
            />
          )}
        </label>
      ))}
      {error && <p className="text-sm text-rose-400">{error}</p>}
      {success && <p className="text-sm text-emerald-400">Saved successfully.</p>}
      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-gold-gradient px-6 py-3 text-sm font-bold text-brand-red disabled:opacity-60"
      >
        {loading ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}
