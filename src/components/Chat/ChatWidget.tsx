// src/components/Chat/ChatWidget.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { Message } from "@/types/chat-types";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content:
        "Você é um assistente virtual especializado em Spitz Alemão Anão. Responda de forma educada e forneça informações claras."
    },
    {
      role: "assistant",
      content:
        "Olá! Eu sou o assistente da By Império Dog. Como posso ajudar você hoje?"
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) {
      const input = document.querySelector<HTMLInputElement>(
        "input[aria-label='Digite sua mensagem']"
      );
      input?.focus();
    }
  }, [open]);

  async function handleSend(userText: string) {
    const newUserMessage: Message = { role: "user", content: userText };
    setMessages((prev) => [...prev, newUserMessage]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, newUserMessage]
        })
      });
      const data = await response.json();
      if (data.message) {
        const newBotMessage: Message = {
          role: data.message.role,
          content: data.message.content
        };
        setMessages((prev) => [...prev, newBotMessage]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Desculpe, ocorreu um erro ao processar sua solicitação."
          }
        ]);
      }
    } catch (error) {
      console.error("Erro ao chamar /api/chat:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Falha de conexão. Por favor, tente novamente."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Botão Flutuante para Abrir/Fechar Chat */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-pet-blue text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-pet-gold"
        aria-label={open ? "Fechar chat" : "Abrir chat"}
      >
        {open ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </button>

      {/* Painel de Chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 sm:right-6 z-40 w-full max-w-xs sm:w-80 max-h-[60vh] bg-white shadow-xl rounded-lg flex flex-col"
          >
            {/* Cabeçalho */}
            <div className="flex items-center justify-between bg-pet-blue text-white px-4 py-2 rounded-t-lg">
              <h2 className="font-semibold">Atendimento IA</h2>
              <button
                onClick={() => setOpen(false)}
                className="focus:outline-none"
                aria-label="Fechar"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Mensagens */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {messages
                .filter((msg) => msg.role !== "system")
                .map((msg, idx) => (
                  <ChatMessage key={idx} message={msg} />
                ))}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-start mb-2"
                >
                  <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg animate-pulse">
                    Digitando...
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t px-4 py-2">
              <ChatInput onSend={handleSend} disabled={loading} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
