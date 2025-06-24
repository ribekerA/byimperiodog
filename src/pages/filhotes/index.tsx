import Head from "next/head";

export default function FilhotesPage() {
  const filhotes = [
    { nome: "Aurora", cor: "creme", preco: "R$ 8.500", imagem: "/images/aurora.jpg" },
    { nome: "Apollo", cor: "laranja", preco: "R$ 7.800", imagem: "/images/apollo.jpg" },
  ];

  return (
    <>
      <Head>
        <title>Filhotes disponíveis – By Império Dog</title>
      </Head>
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-serif text-brand-dark mb-6">Filhotes Disponíveis</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filhotes.map((pet, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={pet.imagem} alt={pet.nome} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="font-serif text-xl">{pet.nome}</h2>
                <p className="text-sm text-gray-500 capitalize">Cor: {pet.cor}</p>
                <p className="text-lg font-bold text-brand-gold">{pet.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
