export type StockItem = {
  id: string;
  nome: string;
  categoria: string;
  quantidade: number;
  preco_custo: number;
  preco_venda: number;
  created_at?: string;
};
