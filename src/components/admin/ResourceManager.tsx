"use client";

import { useState } from "react";
import { CrudForm } from "@/components/admin/CrudForm";

const STATUS_OPTIONS = [
  { value: "DRAFT", label: "Draft" },
  { value: "PUBLISHED", label: "Published" },
  { value: "ARCHIVED", label: "Archived" },
];

export function ResourceManager({
  title,
  apiPath,
  fields,
  items,
  idKey = "id",
}: {
  title: string;
  apiPath: string;
  fields: Parameters<typeof CrudForm>[0]["fields"];
  items: Record<string, unknown>[];
  idKey?: string;
}) {
  const [list, setList] = useState(items);
  const [editing, setEditing] = useState<Record<string, unknown> | null>(null);
  const [showCreate, setShowCreate] = useState(false);

  const refresh = async () => {
    const res = await fetch(apiPath);
    const data = await res.json();
    if (res.ok) setList(data);
  };

  const handleSave = async (data: Record<string, unknown>) => {
    const isEdit = editing && editing[idKey];
    const res = await fetch(isEdit ? `${apiPath}/${editing[idKey]}` : apiPath, {
      method: isEdit ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error ?? "Save failed");
    setEditing(null);
    setShowCreate(false);
    await refresh();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Archive this item?")) return;
    await fetch(`${apiPath}/${id}`, { method: "DELETE" });
    await refresh();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-black">{title}</h1>
        <button
          onClick={() => { setShowCreate(true); setEditing(null); }}
          className="rounded-xl bg-gold-gradient px-4 py-2 text-sm font-bold text-brand-red"
        >
          Add New
        </button>
      </div>

      {(showCreate || editing) && (
        <div className="mb-8 rounded-2xl border border-white/10 bg-[#11141D] p-6">
          <h2 className="text-lg font-bold mb-4">{editing ? "Edit" : "Create"}</h2>
          <CrudForm
            initial={editing ?? {}}
            fields={fields}
            onSubmit={handleSave}
            submitLabel={editing ? "Update" : "Create"}
          />
          <button
            onClick={() => { setEditing(null); setShowCreate(false); }}
            className="mt-4 text-sm text-slate-400 hover:text-white"
          >
            Cancel
          </button>
        </div>
      )}

      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#11141D] text-slate-400 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={String(item[idKey])} className="border-t border-white/5">
                <td className="px-4 py-3 font-medium">{String(item.name ?? item.title ?? item.clientName ?? item.question ?? item.id)}</td>
                <td className="px-4 py-3 text-slate-400">{String(item.status ?? "-")}</td>
                <td className="px-4 py-3 text-slate-400">{String(item.displayOrder ?? "-")}</td>
                <td className="px-4 py-3 space-x-2">
                  <button onClick={() => { setEditing(item); setShowCreate(false); }} className="text-gold-light text-xs hover:underline">Edit</button>
                  <button onClick={() => handleDelete(String(item[idKey]))} className="text-rose-400 text-xs hover:underline">Archive</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {list.length === 0 && <p className="p-6 text-slate-500 text-sm">No items yet.</p>}
      </div>
    </div>
  );
}

export { STATUS_OPTIONS };
