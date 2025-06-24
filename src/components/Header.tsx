// src/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Título */}
        <Link href="/" className="text-2xl font-playfair text-pet-blue">
          By Império Dog
        </Link>

        {/* Botão Hamburger (visível apenas em sm e abaixo) */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="sm:hidden p-2 rounded-md text-pet-blue hover:text-pet-gold focus:outline-none focus:ring-2 focus:ring-pet-blue"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Links de Navegação (visíveis em sm+: ocultos em xs) */}
        <nav className="hidden sm:flex space-x-6">
          <Link href="/filhotes" className="text-gray-700 hover:text-pet-gold">
            Filhotes
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-pet-gold">
            Blog
          </Link>
          <Link href="/sobre" className="text-gray-700 hover:text-pet-gold">
            Sobre
          </Link>
          <Link href="/contato" className="text-gray-700 hover:text-pet-gold">
            Contato
          </Link>
        </nav>

        {/* Telefone/Contato (sempre visível, mas em mobile fica ao lado do hamburger) */}
        <a
          href="tel:11968633239"
          className="hidden sm:inline-block bg-pet-gold text-white px-4 py-2 rounded hover:bg-opacity-90"
        >
          (11) 9 6863-3239
        </a>
      </div>

      {/* Menu Mobile (aparece apenas quando menuOpen = true) */}
      {menuOpen && (
        <nav className="sm:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            <li>
              <Link
                href="/filhotes"
                className="block text-gray-700 hover:text-pet-gold"
                onClick={() => setMenuOpen(false)}
              >
                Filhotes
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block text-gray-700 hover:text-pet-gold"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="block text-gray-700 hover:text-pet-gold"
                onClick={() => setMenuOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="block text-gray-700 hover:text-pet-gold"
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </Link>
            </li>
            <li className="mt-2">
              <a
                href="tel:11968633239"
                className="block bg-pet-gold text-white px-4 py-2 rounded text-center hover:bg-opacity-90"
              >
                (11) 9 6863-3239
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
