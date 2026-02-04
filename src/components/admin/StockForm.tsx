"use client";

import { useState } from "react";
import type { StockItem } from "@/lib/types";

type StockFormProps = {
  initial?: StockItem | null;
  onSave: (item: Omit<StockItem, "id">, id?: string) => void;
};

const emptyState = {
  nome: "",
  categoria: "",
  quantidade: 0,
  preco_custo: 0,
  preco_venda: 0,
};

export default function StockForm({ initial, onSave }: StockFormProps) {
  const [form, setForm] = useState<Omit<StockItem, "id">>(
    initial
      ? {
          nome: initial.nome,
          categoria: initial.categoria,
          quantidade: initial.quantidade,
          preco_custo: initial.preco_custo,
          preco_venda: initial.preco_venda,
        }
      : emptyState
  );

  const handleChange = (field: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "quantidade" || field.includes("preco")
          ? Number(event.target.value)
          : event.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  return (
    <form
      className="rounded-2xl border border-white/10 bg-[#0f1a2b] p-6 text-white"
      onSubmit={(event) => {
        event.preventDefault();
        onSave(form, initial?.id);
        setForm(emptyState);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="w-full rounded border border-white/10 bg-transparent p-3 text-sm"
          placeholder="Nome da peça"
          value={form.nome}
          onChange={handleChange("nome")}
          required
        />
        <input
          className="w-full rounded border border-white/10 bg-transparent p-3 text-sm"
          placeholder="Categoria"
          value={form.categoria}
          onChange={handleChange("categoria")}
          required
        />
        <input
          type="number"
          className="w-full rounded border border-white/10 bg-transparent p-3 text-sm"
          placeholder="Quantidade"
          value={form.quantidade}
          onChange={handleChange("quantidade")}
          required
        />
        <input
          type="number"
          className="w-full rounded border border-white/10 bg-transparent p-3 text-sm"
          placeholder="Preço de custo"
          value={form.preco_custo}
          onChange={handleChange("preco_custo")}
          required
        />
        <input
          type="number"
          className="w-full rounded border border-white/10 bg-transparent p-3 text-sm"
          placeholder="Preço de venda"
          value={form.preco_venda}
          onChange={handleChange("preco_venda")}
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-full bg-[#d3b76c] py-3 text-sm font-semibold text-[#060b16] transition hover:brightness-110"
      >
        {initial ? "Atualizar peça" : "Adicionar peça"}
      </button>
    </form>
  );
}
