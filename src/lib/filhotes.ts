export interface Filhote {
    slug: string;
    nome: string;
    idade: string;
    cor: string;
    preco: number;
    imagem: string; // caminho relativo a /public/images/filhotes
  }
  
  export const FILHOTES: Filhote[] = [
    {
      slug: "lulu-preto-3-meses",
      nome: "Lulu Preto",
      idade: "3 meses",
      cor: "Preto",
      preco: 2800,
      imagem: "/images/filhotes/lulu-preto-3m.png"
    },
    {
      slug: "lulu-creme-3-meses",
      nome: "Lulu Creme",
      idade: "3 meses",
      cor: "Creme",
      preco: 3000,
      imagem: "/images/filhotes/lulu-creme-3m.png"
    },
    {
      slug: "lulu-branco-3-meses",
      nome: "Lulu Branco",
      idade: "3 meses",
      cor: "Branco",
      preco: 2800,
      imagem: "/images/filhotes/lulu-branco-3m.png"
    },
    // Adicione quantos filhotes desejar
  ];
  