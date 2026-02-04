import Image from "next/image";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Agendamento", href: "#agendamento" },
  { label: "Sobre", href: "#sobre" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#060b16]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#d3b76c] bg-[#0f1a2b]">
            <Image src="/logo.png" alt="Royale Cell" fill className="object-cover" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide">Royale Cell</p>
            <p className="text-xs text-[#9aa3b2]">Assistência técnica premium</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-[#c9d3e0] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/royalecell_/"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white md:inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5583991221731"
            className="rounded-full border border-[#d3b76c] px-4 py-2 text-sm font-semibold text-[#d3b76c] transition hover:bg-[#d3b76c] hover:text-[#060b16]"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
