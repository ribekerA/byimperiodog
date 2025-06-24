// src/pages/sobre.tsx
import React from "react";

export default function Sobre() {
  return (
    <section className="mt-8 mb-8 px-4 sm:px-0 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl sm:text-3xl font-playfair text-pet-dark text-center">
        Sobre a By Império Dog
      </h1>
      <p className="text-gray-700 text-sm sm:text-base text-justify">
        A By Império Dog é um canil registrado (CNPJ: 22.587.478/0001-00),
        especializado em criação de Spitz Alemão Anão (Lulu da Pomerânia). Oferecemos
        filhotes de excelente qualidade genética, com acompanhamento veterinário
        completo e entrega monitorada para todo o Brasil.
      </p>
      <p className="text-gray-700 text-sm sm:text-base text-justify">
        Fundada em 2025, nossa paixão pela raça nos leva a manter padrões altos
        de bem-estar e saúde. Se você sonha em ter um Spitz Anão, conte conosco!
      </p>
      <p className="text-gray-700 text-sm sm:text-base">
        Telefone: <strong>(11) 9 6863-3239</strong> • CNPJ: 22.587.478/0001-00
      </p>
    </section>
  );
}
