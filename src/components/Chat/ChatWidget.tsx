// src/components/Chat/ChatWidget.tsx
import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    // Simulação de widget de chat ou botão de WhatsApp
    console.log("ChatWidget carregado");
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5511968633239"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        Fale Conosco 💬
      </a>
    </div>
  );
}
