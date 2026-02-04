"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StockForm from "@/components/admin/StockForm";
import StockTable from "@/components/admin/StockTable";
import { supabase } from "@/lib/supabaseClient";
import type { StockItem } from "@/lib/types";

export default function DashboardPage() {
  const router = useRouter();
  const [items, setItems] = useState<StockItem[]>([]);
  const [selected, setSelected] = useState<StockItem | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const loadItems = async () => {
    setStatus("loading");
    const { data, error } = await supabase
      .from("estoque")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      setStatus("error");
      return;
    }
    setItems(data ?? []);
    setStatus("idle");
  };

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push("/login");
        return;
      }
      loadItems();
    };
    init();
  }, [router]);

  const handleSave = async (payload: Omit<StockItem, "id">, id?: string) => {
    if (id) {
      const { error } = await supabase
        .from("estoque")
        .update(payload)
        .eq("id", id);
      if (error) {
        setStatus("error");
        return;
      }
      setSelected(null);
      loadItems();
      return;
    }
    const { error } = await supabase.from("estoque").insert([payload]);
    if (error) {
      setStatus("error");
      return;
    }
    loadItems();
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("estoque").delete().eq("id", id);
    if (error) {
      setStatus("error");
      return;
    }
    loadItems();
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#d3b76c]">
            Dashboard
          </p>
          <h1 className="text-3xl font-semibold">Gestao de Estoque</h1>
          <p className="text-sm text-[#c9d3e0]">
            Itens em estoque, preco e alertas de baixa.
          </p>
        </div>
        <button
          type="button"
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#c9d3e0] hover:border-white/40"
          onClick={async () => {
            await supabase.auth.signOut();
            router.push("/login");
          }}
        >
          Sair
        </button>
      </div>

      <StockForm initial={selected} onSave={handleSave} />

      {status === "loading" ? (
        <div className="rounded-2xl border border-white/10 bg-[#0f1a2b] p-6">
          <p className="text-sm text-[#c9d3e0]">Carregando estoque...</p>
        </div>
      ) : (
        <StockTable
          items={items}
          onDelete={handleDelete}
          onUpdate={(item) => setSelected(item)}
        />
      )}

      {status === "error" && (
        <p className="text-xs text-red-300">
          Ocorreu um erro ao atualizar o estoque.
        </p>
      )}
    </div>
  );
}
