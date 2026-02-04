export default function About() {
  return (
    <section id="sobre" className="px-6 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1a2b] via-[#0b1d3a] to-[#060b16] p-8 sm:p-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d3b76c]">
            Sobre a Royale Cell
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Tecnologia, precisao e cuidado com cada detalhe
          </h2>
          <p className="text-[#c9d3e0]">
            Somos uma assistencia tecnica especializada em smartphones de ultima
            geracao. Unimos laboratorio moderno, tecnicos certificados e uma
            jornada transparente para que voce se sinta seguro do inicio ao fim.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Mais de 10 anos no mercado",
            "Garantia escrita em todos os servicos",
            "Sala limpa e equipamentos de precisao",
          ].map((item) => (
            <div key={item} className="glass-card rounded-2xl p-5">
              <p className="text-sm text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <span className="section-divider" />
    </section>
  );
}
