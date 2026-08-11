"use client";

import { useState } from "react";
import Image from "next/image";

export function MediaUploader({ initial }: { initial: { id: string; url: string; fileName: string; category: string | null }[] }) {
  const [items, setItems] = useState(initial);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    const res = await fetch("/api/admin/media");
    const data = await res.json();
    if (res.ok) setItems(data);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", "general");
    const res = await fetch("/api/admin/media", { method: "POST", body: formData });
    const json = await res.json();
    setUploading(false);
    if (!res.ok) {
      setError(json.error ?? "Upload failed");
      return;
    }
    await refresh();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this media item?")) return;
    await fetch(`/api/admin/media/${id}`, { method: "DELETE" });
    await refresh();
  };

  return (
    <div>
      <div className="mb-6">
        <label className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-4 py-2 text-sm font-bold text-brand-red cursor-pointer">
          {uploading ? "Uploading..." : "Upload Image"}
          <input type="file" accept="image/*" className="hidden" onChange={handleUpload} disabled={uploading} />
        </label>
        {error && <p className="mt-2 text-sm text-rose-400">{error}</p>}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="rounded-xl border border-white/10 bg-[#11141D] overflow-hidden">
            <div className="relative aspect-video bg-black/20">
              <Image src={item.url} alt={item.fileName} fill className="object-cover" unoptimized />
            </div>
            <div className="p-3">
              <p className="text-xs truncate text-slate-300">{item.fileName}</p>
              <p className="text-[10px] text-slate-500 truncate">{item.url}</p>
              <button onClick={() => handleDelete(item.id)} className="mt-2 text-xs text-rose-400 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && <p className="text-slate-500 text-sm">No media uploaded yet.</p>}
    </div>
  );
}
