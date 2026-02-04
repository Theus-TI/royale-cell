"use client";

import { useState } from "react";

const initialForm = {
  nome: "",
  modelo: "",
  defeito: "",
  data_preferida: "",
};

export default function AppointmentForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (field: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    const message = `Agendamento Royale Cell:\n\nNome: ${form.nome}\nAparelho: ${form.modelo}\nDefeito: ${form.defeito}\nData preferida: ${form.data_preferida}`;
    const whatsappUrl = `https://wa.me/5583991221731?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setStatus("success");
    setForm(initialForm);
  };

  return (
    <section id="agendamento" className="px-6 py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-5 animate-fade-up">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d3b76c]">
            Agendamento
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Reserve seu atendimento em minutos
          </h2>
          <p className="text-sm text-[#c9d3e0] sm:text-base">
            Preencha o formulario e nossa equipe confirma tudo por WhatsApp.
          </p>
          <div className="glass-card rounded-2xl p-6">
            <p className="text-sm text-[#c9d3e0]">
              Tempo medio de resposta: menos de 10 minutos em horario comercial.
            </p>
          </div>
        </div>
        <form
          className="animate-fade-up delay-150 space-y-4 rounded-3xl border border-white/10 bg-[#0b1220] p-6 text-white shadow-[0_25px_60px_rgba(5,10,20,0.55)]"
          onSubmit={handleSubmit}
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.35em] text-[#c9d3e0]">
            Informacoes do atendimento
          </div>
          <input
            className="w-full rounded-2xl border border-white/10 bg-[#0f1a2b] p-3 text-sm text-white placeholder:text-[#9aa3b2] focus:border-[#d3b76c] focus:outline-none"
            placeholder="Nome"
            name="nome"
            value={form.nome}
            onChange={handleChange("nome")}
            required
          />
          <input
            className="w-full rounded-2xl border border-white/10 bg-[#0f1a2b] p-3 text-sm text-white placeholder:text-[#9aa3b2] focus:border-[#d3b76c] focus:outline-none"
            placeholder="Modelo do celular"
            name="modelo"
            value={form.modelo}
            onChange={handleChange("modelo")}
            required
          />
          <input
            className="w-full rounded-2xl border border-white/10 bg-[#0f1a2b] p-3 text-sm text-white placeholder:text-[#9aa3b2] focus:border-[#d3b76c] focus:outline-none"
            placeholder="Defeito"
            name="defeito"
            value={form.defeito}
            onChange={handleChange("defeito")}
            required
          />
          <input
            type="date"
            className="w-full rounded-2xl border border-white/10 bg-[#0f1a2b] p-3 text-sm text-white placeholder:text-[#9aa3b2] focus:border-[#d3b76c] focus:outline-none"
            name="data_preferida"
            value={form.data_preferida}
            onChange={handleChange("data_preferida")}
            required
          />
          <button
            type="submit"
            className="cta-glow w-full rounded-full bg-[#d3b76c] py-3 text-sm font-semibold text-[#060b16] transition hover:brightness-110"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Enviando..." : "Enviar agendamento"}
          </button>
          <p className="text-xs text-[#9aa3b2]">
            Clique em enviar para abrir o WhatsApp com a mensagem pronta.
          </p>
          {status === "success" && (
            <p className="text-xs text-emerald-300">
              Agendamento enviado. Vamos falar com voce em instantes.
            </p>
          )}
          {status === "error" && (
            <p className="text-xs text-red-300">
              Nao foi possivel enviar. Tente novamente.
            </p>
          )}
          <p className="text-xs text-gray-500">
            Ao enviar, voce concorda em receber contato via WhatsApp.
          </p>
        </form>
      </div>
      <span className="section-divider" />
    </section>
  );
}
