import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint, Menu, X, Moon, Sun, Dog, Phone, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

/**
 * Navbar personalizada para o site de venda de Spitz Alemão.
 * Inclui animações, modo escuro, busca e link para contato.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navItems = [
    { label: "Filhotes", icon: <Dog className="w-4 h-4 inline-block mr-1" /> },
    { label: "Blog", icon: <PawPrint className="w-4 h-4 inline-block mr-1" /> },
    { label: "Sobre", icon: <Moon className="w-4 h-4 inline-block mr-1" /> },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md bg-white/90 backdrop-blur-md border-b border-yellow-200" : "bg-gradient-to-r from-white via-yellow-50 to-white"
      } ${darkMode ? "dark" : ""}`}
    >
      <div className="w-full bg-pink-100 text-pink-800 text-sm text-center py-1 animate-pulse">
        ✨ Nova ninhada de Lulu da Pomerânia disponível – clique em "Ver Filhotes"!
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="currentColor"
            className="w-7 h-7 text-yellow-600"
          >
            <path d="M32 2c3 4 6 6 10 7 5 1 10 3 12 7 4 6 4 15-3 20-3 2-4 3-5 5 4 5 4 9-1 13-3 3-8 6-13 4-5 2-10 0-13-4-5-4-5-8-1-13-1-2-2-3-5-5-7-5-7-14-3-20 2-4 7-6 12-7 4-1 7-3 10-7z" />
          </svg>
          <span className="text-2xl font-extrabold text-yellow-600 tracking-tight font-serif">
            By Império Dog
          </span>
        </Link>

        <div className="hidden md:flex items-center ml-4 relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-3 py-1.5 border rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ref={searchRef}
          />
        </div>

        <nav className="hidden md:flex space-x-6 text-yellow-600 font-medium text-lg">
          {navItems.map(({ label, icon }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
              className="transition hover:text-pink-500 relative"
            >
              <Link href={`/${label.toLowerCase()}`} onClick={closeMenu}>
                {icon} {label}
                {label === "Blog" && (
                  <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5 animate-pulse">
                    Novo
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div whileHover={{ scale: 1.05 }} className="relative hidden md:inline-flex">
          <Link
            href="/filhotes"
            className="ml-4 inline-flex items-center gap-2 px-5 py-2 border-2 border-yellow-500 text-yellow-700 font-bold rounded-full shadow-sm hover:bg-yellow-500 hover:text-white transition"
          >
            <Dog className="w-5 h-5 text-pink-500" />
            Ver Filhotes
            <span className="ml-2 text-xs bg-pink-500 text-white rounded-full px-2 py-0.5 animate-bounce">
              1 nova ninhada!
            </span>
          </Link>
        </motion.div>

        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded-full border text-yellow-600 border-yellow-300 hover:bg-yellow-100 transition"
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-yellow-600">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-yellow-200 px-4 pt-4 pb-2 space-y-3 text-yellow-600 font-medium text-lg shadow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map(({ label, icon }) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                onClick={closeMenu}
                className="block hover:text-pink-500 transition"
              >
                {icon} {label}
              </Link>
            ))}
            <Link
              href="/filhotes"
              onClick={closeMenu}
              className="inline-block mt-2 px-5 py-2 border-2 border-yellow-500 text-yellow-700 font-bold rounded-full shadow-sm hover:bg-yellow-500 hover:text-white transition"
            >
              Ver Filhotes
            </Link>
            <div className="flex space-x-4 pt-2 border-t mt-2">
              <Link href="tel:+5511999999999" className="flex items-center gap-1 text-sm">
                <Phone className="w-4 h-4" /> (11) 99999-9999
              </Link>
              <Link href="mailto:contato@byimperiodog.com" className="flex items-center gap-1 text-sm">
                <Mail className="w-4 h-4" /> contato@byimperiodog.com
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}