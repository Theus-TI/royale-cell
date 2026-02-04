import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-16 sm:pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1e4ba3,transparent_55%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-[40%] bg-gradient-to-b from-[#0f1a2b] via-transparent to-transparent opacity-80" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#c9d3e0]">
            <span className="relative h-7 w-7 overflow-hidden rounded-full border border-[#d3b76c]/70">
              <Image src="/logo.png" alt="Royale Cell" fill className="object-cover" />
            </span>
            Royale Cell
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Sua assistencia tecnica com ritmo rapido e acabamento premium.
          </h1>
          <p className="text-base text-[#c9d3e0] sm:text-lg md:text-xl">
            Diagnostico transparente, pecas originais e garantia real. O seu
            celular volta a funcionar hoje.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5583991221731"
              className="inline-flex items-center justify-center rounded-full bg-[#d3b76c] px-6 py-3 text-sm font-semibold text-[#060b16] transition hover:brightness-110"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#agendamento"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Agendar avaliacao
            </a>
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
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[#c9d3e0]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
