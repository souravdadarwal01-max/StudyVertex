"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hi%20StudyVertex,%20I%20need%20help%20with%20my%20assignment.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Ping Animation */}
      <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-30 animate-ping"></span>

      {/* Button */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-2xl transition duration-300 hover:scale-110 hover:bg-green-600">
        <FaWhatsapp className="text-white text-4xl" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Chat with us 👋
      </div>
    </a>
  );
}
