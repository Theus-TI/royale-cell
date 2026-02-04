import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-12 sm:pb-16 sm:pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1e4ba3,transparent_55%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-[45%] bg-gradient-to-b from-[#0f1a2b] via-transparent to-transparent opacity-80" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="glass-card max-w-3xl rounded-3xl p-6 sm:p-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-[#c9d3e0]">
            <span className="relative h-7 w-7 overflow-hidden rounded-full border border-[#d3b76c]/70 shadow-[0_0_12px_rgba(211,183,108,0.35)]">
              <Image src="/logo.png" alt="Royale Cell" fill className="object-cover" />
            </span>
            Royale Cell
          </div>
          <h1 className="mt-6 text-[2rem] font-semibold leading-tight sm:text-4xl md:text-6xl">
            Sua assistencia tecnica
            <br />
            com ritmo rapido e
            <br />
            acabamento premium.
          </h1>
          <p className="mt-4 text-[0.95rem] text-[#c9d3e0] sm:text-lg md:text-xl">
            Diagnostico transparente, pecas originais e garantia real. O seu
            celular volta a funcionar hoje.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#agendamento"
              className="cta-glow inline-flex items-center justify-center rounded-full bg-[#d3b76c] px-6 py-3 text-sm font-semibold text-[#060b16] transition hover:brightness-110"
            >
              Agendar avaliacao
            </a>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[#c9d3e0]">
              Garantia escrita • 90 dias
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Reparo express",
              desc: "Trocas de tela e bateria em menos de 60 minutos.",
            },
            {
              title: "Garantia Royale",
              desc: "Peças certificadas com garantia por escrito.",
            },
            {
              title: "Atendimento humano",
              desc: "Acompanhamento em tempo real e suporte via WhatsApp.",
            },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[#c9d3e0]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <span className="section-divider" />
    </section>
  );
}
