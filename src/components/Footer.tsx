// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-pet-dark text-white py-4 mt-auto">
      <div className="max-w-5xl mx-auto px-3 text-center space-y-2">
        <p>© {new Date().getFullYear()} By Império Dog. Todos os direitos reservados.</p>
        <p>CNPJ: 22.587.478/0001-00</p>
         <p>(11) 9 6863-3239</p>
        <p>• Desenvolvido por Arthur Ribeker •</p>
      </div>
    </footer>
  );
}
