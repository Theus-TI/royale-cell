"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setStatus("error");
      return;
    }
    router.push("/dashboard");
  };

  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-md flex-col justify-center gap-6">
      <div className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#d3b76c]">
          Admin
        </p>
        <h1 className="text-3xl font-semibold">Acesso do Proprietario</h1>
        <p className="text-sm text-[#c9d3e0]">
          Entre para gerenciar o estoque Royale Cell.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-white/10 bg-[#0f1a2b] p-6"
      >
        <input
          type="email"
          className="w-full rounded border border-white/10 bg-transparent p-3 text-sm"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          className="w-full rounded border border-white/10 bg-transparent p-3 text-sm"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full rounded-full bg-[#d3b76c] py-3 text-sm font-semibold text-[#060b16] transition hover:brightness-110"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Entrando..." : "Entrar"}
        </button>
        {status === "error" && (
          <p className="text-xs text-red-300">
            Credenciais invalidas. Tente novamente.
          </p>
        )}
      </form>
    </div>
  );
}
