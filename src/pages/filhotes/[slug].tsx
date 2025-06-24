// src/pages/filhotes/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { FILHOTES, Filhote } from "@/lib/filhotes";

interface FilhoteDetalheProps {
  filhote: Filhote | null;
}

export default function FilhoteDetalhe({ filhote }: FilhoteDetalheProps) {
  if (!filhote) {
    return <p>Filhote não encontrado.</p>;
  }

  return (
    <article className="mt-8 mb-8 px-4 sm:px-0 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-playfair text-pet-dark text-center mb-6">
        {filhote.nome}
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src={filhote.imagem}
          alt={`Filhote ${filhote.nome} ${filhote.idade}`}
          width={400}
          height={400}
          className="rounded-lg object-cover w-full md:w-1/2 h-auto"
        />
        <div className="space-y-4 w-full md:w-1/2">
          <p className="text-gray-700">
            <strong>Idade:</strong> {filhote.idade}
          </p>
          <p className="text-gray-700">
            <strong>Cor:</strong> {filhote.cor}
          </p>
          <p className="text-gray-700">
            <strong>Preço:</strong>{" "}
            <span className="text-pet-gold font-bold">
              R$ {filhote.preco.toLocaleString("pt-BR")}
            </span>
          </p>
          <p className="text-gray-700">
            <strong>Contato para compra:</strong>
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <a
              href="tel:11968633239"
              className="bg-pet-gold text-white px-4 py-2 rounded text-center hover:bg-opacity-90"
            >
              Ligar Agora
            </a>
            <a
              href={`https://wa.me/5511968633239?text=Olá,%20quero%20saber%20mais%20sobre%20o%20filhote%20${filhote.slug}`}
              className="bg-green-500 text-white px-4 py-2 rounded text-center hover:bg-opacity-90"
            >
              WhatsApp
            </a>
          </div>
          <Link href="/filhotes" className="block text-blue-600 hover:underline mt-4 text-center">
            ← Voltar aos Filhotes
          </Link>
        </div>
      </div>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = FILHOTES.map((f) => ({
    params: { slug: f.slug }
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const filhote = FILHOTES.find((f) => f.slug === slug) || null;
  return {
    props: { filhote }
  };
};
