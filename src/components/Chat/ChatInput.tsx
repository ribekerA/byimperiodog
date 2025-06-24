import { ChangeEvent, FormEvent, useState } from "react";
import { FiSend } from "react-icons/fi";

interface ChatInputProps {
  onSend: (content: string) => void;
  disabled: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [text, setText] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Digite sua mensagem..."
        disabled={disabled}
        className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pet-blue disabled:bg-gray-100"
        aria-label="Digite sua mensagem"
      />
      <button
        type="submit"
        disabled={disabled}
        className="p-2 rounded-full bg-pet-gold text-white hover:bg-opacity-90 disabled:opacity-50"
        aria-label="Enviar mensagem"
      >
        <FiSend size={20} />
      </button>
    </form>
  );
}
