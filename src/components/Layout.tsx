// src/components/Layout.tsx
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ChatWidget from "./Chat/ChatWidget";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Como o header é fixed, adicionamos um padding-top igual à altura do header (h-16) + margem */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 mt-16 sm:mt-16">
        {children}
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
