"use client";

import { useActionState } from "react";
import { Loader } from "lucide-react";
import { login, type LoginState } from "@/app/[adminSlug]/actions";

const inputClass =
  "w-full bg-surface-card border border-teal-700/20 rounded px-4 py-3 font-body text-teal-950 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/15 transition-all duration-200 text-sm";

const initialState: LoginState = { error: null };

export function AdminLogin() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <section className="bg-surface-light min-h-screen pt-[calc(72px+5rem)] pb-20">
      <div className="max-w-[400px] mx-auto px-8">
        <span className="font-mono text-xs text-teal-700/50 uppercase tracking-wide block mb-3">
          {"// admin"}
        </span>
        <h1 className="font-display font-extrabold text-3xl text-teal-950 tracking-tight mb-8">
          Sign in
        </h1>

        <form action={formAction} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="admin-email"
              className="font-body font-medium text-sm text-teal-700 block mb-1"
            >
              Email
            </label>
            <input
              id="admin-email"
              name="email"
              type="email"
              autoComplete="username"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="admin-password"
              className="font-body font-medium text-sm text-teal-700 block mb-1"
            >
              Password
            </label>
            <input
              id="admin-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={inputClass}
            />
          </div>

          {state.error && (
            <p role="alert" className="font-body text-sm text-red-700">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-teal-400 hover:bg-teal-700 disabled:opacity-60 text-white font-display font-bold py-3 rounded transition-all duration-200 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed"
          >
            {pending ? <Loader className="w-4 h-4 animate-spin" /> : "Sign in"}
          </button>
        </form>
      </div>
    </section>
  );
}
