// src/pages/contato.tsx
import React, { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });
  const [enviado, setEnviado] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Aqui você pode integrar com backend ou serviço de e-mail
    console.log("Formulário enviado:", formData);
    setEnviado(true);
  }

  return (
    <section className="mt-8 mb-8 px-4 sm:px-0 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl sm:text-3xl font-playfair text-pet-dark text-center">
        Contato
      </h1>

      {enviado ? (
        <p className="text-green-600 text-center text-lg">
          Mensagem enviada com sucesso!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block font-medium mb-1">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pet-blue"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pet-blue"
            />
          </div>
          <div>
            <label htmlFor="mensagem" className="block font-medium mb-1">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              value={formData.mensagem}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pet-blue"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pet-gold text-white px-6 py-2 rounded hover:bg-opacity-90 text-center"
          >
            Enviar
          </button>
        </form>
      )}
    </section>
  );
}
