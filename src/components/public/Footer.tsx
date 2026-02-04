export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">Royale Cell</p>
          <p className="text-sm text-[#9aa3b2]">
            Rua Jose de Arimateia da Silva, 56
          </p>
          <a
            href="https://wa.me/5583991221731"
            className="mt-2 inline-flex text-sm text-[#d3b76c]"
          >
            WhatsApp: (83) 991221-731
          </a>
        </div>
        <div className="flex gap-6 text-sm text-[#c9d3e0]">
          <a href="https://www.instagram.com/royalecell_/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>
        <p className="text-xs text-[#9aa3b2]">
          2026 Royale Cell. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
