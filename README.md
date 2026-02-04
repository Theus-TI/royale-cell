# Royale Cell

Landing page e painel administrativo para a assistência técnica Royale Cell.

## Stack

- Next.js (App Router)
- Tailwind CSS
- Supabase (Auth + Postgres)

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Supabase (tabelas)

### agendamentos

- id uuid primary key
- nome text
- modelo text
- defeito text
- data_preferida date
- created_at timestamptz

### estoque

- id uuid primary key
- nome text
- categoria text
- quantidade int
- preco_custo numeric
- preco_venda numeric
- created_at timestamptz

## Rotas

- `/` Landing Page
- `/login` Login Admin
- `/dashboard` Painel de Estoque

## Auth (Supabase)

1. Ative Email/Password em Authentication.
2. Crie o usuário admin manualmente.
3. Ative RLS nas tabelas e aplique políticas:
   - `agendamentos`: allow insert public, select apenas autenticado.
   - `estoque`: somente autenticado.
