"use client";

import { useState, useEffect, type FormEvent } from "react";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<"loading" | "locked" | "unlocked">(
    "loading"
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    fetch("/api/auth")
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "locked") {
          setStatus("locked");
        } else {
          setStatus("unlocked");
        }
      })
      .catch(() => setStatus("unlocked"));
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setStatus("unlocked");
    } else {
      setError("Contraseña incorrecta");
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  }

  if (status === "loading") {
    return (
      <div className="fixed inset-0 z-9999 flex items-center justify-center bg-gray-900">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-purple-400 border-t-transparent" />
      </div>
    );
  }

  if (status === "unlocked") {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-48 -right-48 h-120 w-120 rounded-full bg-purple-500/15 blur-3xl animate-pulse-soft delay-200" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-700/10 blur-2xl animate-float" />
      </div>

      <div
        className={`relative w-full max-w-sm mx-4 ${shaking ? "animate-shake" : ""}`}
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-purple-900/20 backdrop-blur-xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-600/20 ring-1 ring-purple-400/30">
              <svg
                className="h-7 w-7 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-semibold tracking-tight text-white">
              Acceso restringido
            </h1>
            <p className="mt-1.5 text-sm text-gray-400">
              Ingresá la contraseña para continuar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                autoFocus
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-purple-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-purple-500/20"
              />
              {error && (
                <p className="mt-2 text-center text-xs font-medium text-red-400 animate-fade-in">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-purple-600 px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-600/25 active:scale-[0.98]"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
