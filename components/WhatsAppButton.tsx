"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  // Replace this with your WhatsApp number (country code + number, no + or spaces)
  const phoneNumber = "919876543210";

  const message =
    "Hi StudyVertex! I need help with my assignment.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Ping Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

      {/* Main Button */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600">
        <FaWhatsapp className="text-white text-4xl" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        💬 Chat with us
      </div>
    </a>
  );
}
