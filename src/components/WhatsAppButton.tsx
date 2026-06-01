import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5531999999999";

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsappLink("Olá! Vim pelo site da Garagem Retrovisores e quero um orçamento.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow pulse-glow transition-smooth hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
