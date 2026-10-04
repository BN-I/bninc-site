"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Submission } from "@/lib/db";
import { budgetOptions, serviceOptions } from "@/lib/contact-schema";
import { logout } from "@/app/[adminSlug]/actions";

function optionLabel(options: { value: string; label: string }[], value: string) {
  return options.find((o) => o.value === value)?.label ?? value;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function SubmissionsTable({ rows }: { rows: Submission[] }) {
  const [selected, setSelected] = useState<Submission | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section className="bg-surface-light min-h-screen pt-[calc(72px+3rem)] pb-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs text-teal-700/50 uppercase tracking-wide block mb-2">
              {"// admin"}
            </span>
            <h1 className="font-display font-extrabold text-3xl text-teal-950 tracking-tight">
              Form submissions{" "}
              <span className="text-teal-400">({rows.length})</span>
            </h1>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-display font-bold text-sm px-4 py-2 rounded transition-all duration-200 cursor-pointer"
            >
              Sign out
            </button>
          </form>
        </div>

        {rows.length === 0 ? (
          <p className="font-body text-teal-700">No submissions yet.</p>
        ) : (
          <div className="overflow-x-auto bg-surface-card border border-teal-700/10 rounded-lg">
            <table className="w-full text-left font-body text-sm text-teal-950">
              <thead className="bg-teal-50/20 font-mono text-xs uppercase tracking-wide text-teal-700">
                <tr>
                  {["Date", "Name", "Email", "Phone", "Company", "Service", "Budget", "SMS"].map(
                    (h) => (
                      <th key={h} className="px-4 py-3 font-medium whitespace-nowrap">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.id}
                    onClick={() => setSelected(row)}
                    className="border-t border-teal-700/10 hover:bg-teal-50/15 cursor-pointer"
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-teal-700">
                      {formatDate(row.created_at)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium">
                      {row.first_name} {row.last_name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{row.email}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{row.phone}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{row.company || "—"}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {optionLabel(serviceOptions, row.service)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {optionLabel(budgetOptions, row.budget)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {row.sms_consent ? "Yes" : "No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-teal-950/70 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="submission-title"
            onClick={(e) => e.stopPropagation()}
            className="bg-surface-card rounded-xl shadow-2xl w-full max-w-[640px] max-h-[85vh] overflow-y-auto p-8"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2
                  id="submission-title"
                  className="font-display font-extrabold text-2xl text-teal-950 tracking-tight"
                >
                  {selected.first_name} {selected.last_name}
                </h2>
                <p className="font-mono text-xs text-teal-700/60 mt-1">
                  {formatDate(selected.created_at)}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="p-1 text-teal-700 hover:text-teal-950 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 font-body text-sm">
              <Field label="Email">
                <a href={`mailto:${selected.email}`} className="text-teal-400 underline">
                  {selected.email}
                </a>
              </Field>
              <Field label="Phone">
                <a href={`tel:${selected.phone}`} className="text-teal-400 underline">
                  {selected.phone}
                </a>
              </Field>
              <Field label="Company">{selected.company || "—"}</Field>
              <Field label="SMS consent">
                {selected.sms_consent ? "Yes, opted in to texts" : "No"}
              </Field>
              <Field label="Service">{optionLabel(serviceOptions, selected.service)}</Field>
              <Field label="Budget">{optionLabel(budgetOptions, selected.budget)}</Field>
              <div className="sm:col-span-2">
                <Field label="Message">
                  <span className="whitespace-pre-wrap">{selected.message}</span>
                </Field>
              </div>
              <Field label="IP address">{selected.ip || "—"}</Field>
              <Field label="Browser">
                <span className="break-words text-xs">{selected.user_agent || "—"}</span>
              </Field>
            </dl>
          </div>
        </div>
      )}
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-xs text-teal-700/60 uppercase tracking-wide mb-1">
        {label}
      </dt>
      <dd className="text-teal-950">{children}</dd>
    </div>
  );
}
