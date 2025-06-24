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
        <title>
          {title
            ? `${title} | By Imp\u00e9rio Dog`
            : "By Imp\u00e9rio Dog \u2013 Spitz Alem\u00e3o An\u00e3o & Lulu da Pomer\u00e2nia"}
        </title>
        <meta
          name="description"
          content={
            description ||
            "Criador especializado em Spitz Alem\u00e3o An\u00e3o (Lulu da Pomer\u00e2nia) com excel\u00eancia, gen\u00e9tica premium e entrega para todo o Brasil."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ChatWidget />
      </div>
    </>
  );
}