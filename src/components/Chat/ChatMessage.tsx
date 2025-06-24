import { Message } from "@/types/chat-types";
import { motion } from "framer-motion";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: isUser ? 20 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}
    >
      <div
        className={`max-w-[80%] px-4 py-2 rounded-lg ${
          isUser ? "bg-pet-blue text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  );
}
