"use client";
import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ImageLightbox({ selected, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    if (selected) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selected, onClose]);

  if (!selected) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={selected.alt}
    >
      <div
        className="relative w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-150"
          aria-label="Cerrar imagen"
          title="Cerrar (Esc)"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <Image
          src={selected.src}
          alt={selected.alt}
          width={900}
          height={1200}
          style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "88vh", borderRadius: "1rem" }}
        />
      </div>
    </div>,
    document.body
  );
}
