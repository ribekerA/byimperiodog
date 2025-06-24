// src/components/Footer.tsx
import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, QrCode } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-50 to-white text-yellow-700 border-t border-yellow-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold mb-2 font-serif">By Império Dog</h2>
          <p className="text-sm text-yellow-800">
            Spitz Alemão Anão & Lulu da Pomerânia de linhagem selecionada. Excelência, carinho e entrega segura em todo o Brasil.
          </p>
          <div className="mt-3 inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
            🌟 Criador Verificado Premium
          </div>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="font-semibold text-yellow-900 mb-2">Menu</h3>
          <ul className="space-y-1">
            <li><Link href="/filhotes" className="hover:text-pink-500">Filhotes</Link></li>
            <li className="relative">
              <Link href="/blog" className="hover:text-pink-500">Blog</Link>
              <span className="absolute -top-2 left-12 text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5 animate-pulse">Novo</span>
            </li>
            <li><Link href="/sobre" className="hover:text-pink-500">Sobre</Link></li>
            <li><Link href="/contato" className="hover:text-pink-500">Contato</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-semibold text-yellow-900 mb-2">Contato</h3>
          <ul className="text-sm space-y-1">
            <li><a href="tel:+5511968633239" className="hover:text-pink-500">(11) 96863-3239</a></li>
            <li><a href="https://wa.me/5511968633239" target="_blank" className="hover:text-pink-500">WhatsApp direto</a></li>
            <li><a href="mailto:contato@byimperiodog.com.br" className="hover:text-pink-500">contato@byimperiodog.com.br</a></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="font-semibold text-yellow-900 mb-2">Redes Sociais</h3>
          <div className="flex gap-4 text-yellow-700">
            <a href="https://instagram.com/byimperiodog" target="_blank" className="hover:text-pink-500">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/byimperiodog" target="_blank" className="hover:text-pink-500">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/@byimperiodog" target="_blank" className="hover:text-pink-500">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="mailto:contato@byimperiodog.com.br" target="_blank" className="hover:text-pink-500">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* QR Code ou Newsletter */}
        <div>
          <h3 className="font-semibold text-yellow-900 mb-2">Acesso Rápido</h3>
          <div className="flex flex-col items-start gap-2">
            <a
              href="https://wa.me/5511968633239"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm text-yellow-700 hover:text-pink-500"
            >
              <QrCode className="w-4 h-4" /> QR Code do WhatsApp
            </a>
            <form className="w-full mt-2">
              <input
                type="email"
                placeholder="Receba novidades por e-mail"
                className="px-3 py-1.5 border rounded-full text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-yellow-500 text-white font-medium py-1.5 rounded-full hover:bg-pink-500 transition"
              >
                Assinar novidades
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-yellow-800 py-4 border-t border-yellow-100">
        &copy; {new Date().getFullYear()} By Império Dog. Todos os direitos reservados.
      </div>
    </footer>
  );
}
