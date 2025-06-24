import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  PawPrint,
  Menu,
  X,
  Sun,
  Moon,
  Dog,
  Phone,
  Mail,
  Search,
  Sparkles
} from "lucide-react";
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
    { label: "Sobre", icon: <Sparkles className="w-4 h-4 inline-block mr-1" /> }
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
      <div className="w-full bg-yellow-100 text-yellow-900 text-sm text-center py-1 font-medium tracking-tight">
        🐾 Novidade: Nova ninhada de Spitz Anão disponível — confira os filhotes!
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

        <div className="hidden md:flex items-center relative ml-6">
          <Search className="absolute left-3 w-4 h-4 text-yellow-500" />
          <input
            type="text"
            placeholder="Buscar filhotes, artigos..."
            ref={searchRef}
            className="pl-8 pr-3 py-1.5 border border-yellow-300 rounded-full text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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

        <motion.div whileHover={{ scale: 1.05 }} className="hidden md:inline-flex">
          <Link
            href="/filhotes"
            className="ml-4 inline-flex items-center gap-2 px-5 py-2 border-2 border-yellow-500 text-yellow-700 font-bold rounded-full shadow-md hover:bg-yellow-500 hover:text-white transition"
          >
            <Dog className="w-5 h-5 text-pink-500" />
            Ver Filhotes
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
            className="md:hidden bg-white border-t border-yellow-200 px-4 pt-4 pb-2 space-y-3 text-yellow-700 font-medium text-lg shadow"
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
              className="inline-block mt-2 px-5 py-2 border-2 border-yellow-500 text-yellow-700 font-bold rounded-full shadow hover:bg-yellow-500 hover:text-white transition"
            >
              Ver Filhotes
            </Link>
            <div className="flex space-x-4 pt-2 border-t mt-2 text-sm">
              <Link href="tel:+5511968633239" className="flex items-center gap-1">
                <Phone className="w-4 h-4" /> (11) 96863-3239
              </Link>
              <Link href="mailto:contato@byimperiodog.com.br" className="flex items-center gap-1">
                <Mail className="w-4 h-4" /> contato@byimperiodog.com.br
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}