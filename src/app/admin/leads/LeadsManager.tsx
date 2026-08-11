"use client";

import { useState } from "react";

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  city: string | null;
  requirement: string | null;
  status: string;
  priority: string;
  createdAt: string;
};

export function LeadsManager({ initial }: { initial: Lead[] }) {
  const [leads, setLeads] = useState(initial);

  const updateStatus = async (id: string, status: string) => {
    const res = await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      const updated = await res.json();
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, ...updated } : l)));
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 overflow-x-auto">
      <table className="w-full text-sm min-w-[800px]">
        <thead className="bg-[#11141D] text-slate-400 text-left">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Requirement</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Priority</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-t border-white/5">
              <td className="px-4 py-3">{lead.name}</td>
              <td className="px-4 py-3 text-slate-400">{lead.phone}</td>
              <td className="px-4 py-3 text-slate-400">{lead.requirement ?? "-"}</td>
              <td className="px-4 py-3">{lead.status}</td>
              <td className="px-4 py-3">{lead.priority}</td>
              <td className="px-4 py-3">
                <select
                  value={lead.status}
                  onChange={(e) => updateStatus(lead.id, e.target.value)}
                  className="rounded-lg bg-[#11141D] border border-white/10 px-2 py-1 text-xs"
                >
                  {["NEW", "CONTACTED", "FOLLOW_UP", "QUALIFIED", "CONVERTED", "LOST", "CLOSED"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {leads.length === 0 && <p className="p-6 text-slate-500">No leads yet.</p>}
    </div>
  );
}
