"use client";
import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "../ImageLightbox";

const img = { src: "/images/jero-01.JPEG", alt: "Jerónimo Ciapparelli" };

const Section1 = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-background-dark">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col lg:flex-row-reverse gap-16 items-center">

        {/* Imagen */}
        <div className="w-full lg:w-2/5 flex-shrink-0">
          <button
            onClick={() => setSelected(img)}
            className="relative overflow-hidden rounded-2xl shadow-2xl group aspect-[3/4] w-full block cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Ver imagen: Jerónimo Ciapparelli"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
              className="transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </div>
          </button>
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-8 lg:w-3/5">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-semibold uppercase tracking-widest text-xs">
              Jerónimo Ciapparelli
            </span>
            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight text-white antialiased">
              Conóceme
            </h1>
            <div className="w-12 h-1 bg-primary rounded-full" />
            <p className="text-gray-300 leading-relaxed text-xl antialiased">
              Speaker internacional, consultor de negocios y experto en estrategias de cambio personal y organizacional.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-gray-400 leading-relaxed text-lg antialiased">
              Durante años trabajé en el mundo corporativo hasta que decidí rediseñar mi propio rumbo. Ese proceso no fue un salto impulsivo, fue una transición consciente que transformó mi identidad por completo.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg antialiased">
              Desde entonces acompaño a personas que sienten que su carrera ya no las representa. Trabajo con líderes que saben que pueden dar más, pero no encuentran dirección. Guío equipos que necesitan redefinir su forma de operar para alcanzar resultados reales. Mi enfoque combina claridad estratégica, profundidad emocional y acción concreta.
            </p>
          </div>
        </div>

      </div>

      <ImageLightbox selected={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Section1;


