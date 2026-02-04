"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Agendamento", href: "#agendamento" },
  { label: "Sobre", href: "#sobre" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060b16]/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:py-5">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d3b76c]/70 bg-[#0f1a2b] shadow-[0_0_18px_rgba(211,183,108,0.25)]">
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
          <a
            href="https://www.instagram.com/royalecell_/"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white shadow-[0_0_12px_rgba(211,183,108,0.2)] md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-lg">☰</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-[#0f1a2b] md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6 text-sm text-[#c9d3e0]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg border border-white/5 bg-white/5 px-4 py-3"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/royalecell_/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/5 bg-white/5 px-4 py-3"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5583991221731"
              className="inline-flex items-center justify-center rounded-full border border-[#d3b76c] px-4 py-2 text-sm font-semibold text-[#d3b76c]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
