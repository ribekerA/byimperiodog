import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href="https://wa.me/5511968633239"
        target="_blank"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg"
      >
        <MessageCircle className="w-4 h-4" /> Fale Conosco
      </Link>
    </div>
  );
}