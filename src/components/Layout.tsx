// src/components/Layout.tsx
import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatWidget from "./Chat/ChatWidget";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | By Império Dog` : "By Império Dog – Spitz Alemão Anão & Lulu da Pomerânia"}</title>
        <meta
          name="description"
          content={
            description ||
            "Criador especializado em Spitz Alemão Anão (Lulu da Pomerânia) com excelência, genética premium e entrega para todo o Brasil."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </>
  );
}
