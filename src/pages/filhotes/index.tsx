// src/pages/filhotes/index.tsx
import Link from "next/link";
import Image from "next/image";
import { FILHOTES, Filhote } from "@/lib/filhotes";

export default function FilhotesPage() {
  return (
    <section className="mt-4 mb-8 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-playfair text-pet-dark text-center">
        Filhotes Disponíveis
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
        {FILHOTES.map((filhote: Filhote) => (
          <div
            key={filhote.slug}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <Image
              src={filhote.imagem}
              alt={`Filhote ${filhote.nome} ${filhote.idade}`}
              width={400}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{filhote.nome}</h2>
              <p className="text-gray-600 text-sm">
                {filhote.idade} – Cor: {filhote.cor}
              </p>
              <p className="mt-2 font-bold text-pet-gold">
                R$ {filhote.preco.toLocaleString("pt-BR")}
              </p>
              <Link
                href={`/filhotes/${filhote.slug}`}
                className="mt-4 inline-block bg-pet-blue text-white px-4 py-2 rounded hover:bg-opacity-90 text-sm sm:text-base"
              >
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
