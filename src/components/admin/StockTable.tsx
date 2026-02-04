import type { StockItem } from "@/lib/types";

type StockTableProps = {
  items: StockItem[];
  onDelete: (id: string) => void;
  onUpdate: (item: StockItem) => void;
};

export default function StockTable({ items, onDelete, onUpdate }: StockTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0f1a2b]">
      <table className="w-full text-sm text-white">
        <thead className="bg-white/5 text-xs uppercase tracking-widest text-[#c9d3e0]">
          <tr>
            <th className="p-4 text-left">Peça</th>
            <th className="p-4">Categoria</th>
            <th className="p-4">Qtd</th>
            <th className="p-4">Custo</th>
            <th className="p-4">Venda</th>
            <th className="p-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className={`border-t border-white/5 ${
                item.quantidade <= 3 ? "bg-red-500/10" : ""
              }`}
            >
              <td className="p-4 text-left font-medium">{item.nome}</td>
              <td className="p-4 text-center text-[#c9d3e0]">
                {item.categoria}
              </td>
              <td className="p-4 text-center">{item.quantidade}</td>
              <td className="p-4 text-center">R$ {item.preco_custo}</td>
              <td className="p-4 text-center">R$ {item.preco_venda}</td>
              <td className="p-4">
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    type="button"
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#c9d3e0] transition hover:border-white/40"
                    onClick={() => onUpdate(item)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-red-400/60 px-3 py-1 text-xs text-red-300 transition hover:border-red-300"
                    onClick={() => onDelete(item.id)}
                  >
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
