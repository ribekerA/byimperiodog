// src/pages/index.tsx
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-16 mt-2">
      {/* Hero Section */}
      <div className="relative bg-pet-light rounded-lg overflow-hidden">
        <img
          src="/images/home-hero.png"
          alt="Filhotes de Spitz Alemão Anão em grama"
          className="object-cover w-full h-64 sm:h-96"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-playfair mb-2">
            By Império Dog
          </h1>
          <p className="text-sm sm:text-lg max-w-md">
            Especialistas em criação de Spitz Alemão Anão • Filhotes de qualidade,
            genética selecionada e entrega para todo o Brasil.
          </p>
          <Link
            href="/filhotes"
            className="mt-4 inline-block bg-pet-gold text-pet-dark font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-opacity-90"
          >
            Ver Filhotes Disponíveis
          </Link>
        </div>
      </div>

      {/* Diferenciais */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-playfair text-pet-dark mb-6 text-center">
          Por que escolher a By Império Dog?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center space-y-4 px-2">
            <img
              src="/images/icon-genetica.svg"
              alt="Genética Selecionada"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-semibold">Genética Selecionada</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Filhotes de linhagens certificadas, com pedigree e saúde garantida.
            </p>
          </div>
          <div className="text-center space-y-4 px-2">
            <img
              src="/images/icon-cuidados.svg"
              alt="Cuidados Premium"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-semibold">Cuidados Premium</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Instalações preparadas, vacinas em dia e acompanhamento veterinário.
            </p>
          </div>
          <div className="text-center space-y-4 px-2">
            <img
              src="/images/icon-entrega.svg"
              alt="Entrega Monitorada"
              className="mx-auto w-16 h-16"
            />
            <h3 className="text-xl font-semibold">Entrega Monitorada</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Transporte seguro e higienizado para todo o Brasil, com rastreamento.
            </p>
          </div>
        </div>
      </div>

      {/* Depoimentos (placeholder) */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-playfair text-pet-dark mb-6 text-center">
          Depoimentos de Clientes
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base px-4">
          “Meu filhote chegou saudável e com todo carinho, graças à By Império Dog!”
          – Maria, São Paulo
        </p>
      </div>
    </section>
  );
}
