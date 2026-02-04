const services = [
  {
    title: "Troca de tela",
    desc: "Substituicao completa com teste de sensibilidade e cor.",
  },
  {
    title: "Bateria",
    desc: "Recuperamos autonomia com baterias certificadas.",
  },
  {
    title: "Software",
    desc: "Atualizacao, backup e remocao de travamentos.",
  },
  {
    title: "Placa",
    desc: "Microsoldagem e diagnósticos com laudo tecnico.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="px-6 py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d3b76c]">
            Servicos
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Solucoes completas para seu smartphone
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-[#0f1a2b] p-6"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-[#c9d3e0]">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
