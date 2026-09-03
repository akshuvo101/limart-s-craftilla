"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801923184970"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
    >
      <MessageCircle className="text-white" size={24} />
    </a>
  );
}