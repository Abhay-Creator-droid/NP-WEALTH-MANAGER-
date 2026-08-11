"use client";

import { useState } from "react";

type Consultation = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  service: string | null;
  status: string;
  createdAt: string;
};

export function ConsultationsManager({ initial }: { initial: Consultation[] }) {
  const [items, setItems] = useState(initial);

  const updateStatus = async (id: string, status: string) => {
    const res = await fetch(`/api/admin/consultations/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      const updated = await res.json();
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, ...updated } : i)));
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 overflow-x-auto">
      <table className="w-full text-sm min-w-[700px]">
        <thead className="bg-[#11141D] text-slate-400 text-left">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Service</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Update</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t border-white/5">
              <td className="px-4 py-3">{item.name}</td>
              <td className="px-4 py-3 text-slate-400">{item.phone}</td>
              <td className="px-4 py-3 text-slate-400">{item.service ?? "-"}</td>
              <td className="px-4 py-3">{item.status}</td>
              <td className="px-4 py-3">
                <select
                  value={item.status}
                  onChange={(e) => updateStatus(item.id, e.target.value)}
                  className="rounded-lg bg-[#11141D] border border-white/10 px-2 py-1 text-xs"
                >
                  {["REQUESTED", "CONFIRMED", "RESCHEDULED", "COMPLETED", "CANCELLED"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {items.length === 0 && <p className="p-6 text-slate-500">No consultations yet.</p>}
    </div>
  );
}
