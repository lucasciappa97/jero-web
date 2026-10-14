"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImageLightbox from "../ImageLightbox";

const images = [
  { src: "/images/jero-05.jpg", alt: "Jerónimo Ciapparelli", aspect: "3/4" },
  { src: "/images/jero-16.JPG", alt: "Jerónimo Ciapparelli", aspect: "1/1" },
  { src: "/images/jero-charla01.jpeg", alt: "Jerónimo en charla", aspect: "1/1" },
  { src: "/images/jero-02.jpg", alt: "Jerónimo Ciapparelli", aspect: "3/4" },
];

const Section2 = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-background-dark">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-16 items-start">

        {/* Texto */}
        <div className="flex flex-col gap-8 lg:w-2/5 lg:sticky lg:top-24">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-semibold uppercase tracking-widest text-xs">
              Mi historia
            </span>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-gray-400 leading-relaxed text-lg antialiased">
            Soy autor de <span className="font-semibold text-white">CREADORES</span>. De la dependencia laboral a la autorrealización. He trabajado con empresas y profesionales en procesos de cambio y cultura organizacional. Me apasiona ayudar a convertir la incertidumbre en confianza. Creo que toda transición es una invitación a construir una nueva versión de uno mismo.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg antialiased">
            Mi trabajo no es decirte qué hacer, sino ayudarte a ver con claridad quién estás listo para ser. Acompaño procesos que requieren coraje, enfoque y coherencia. Si estás en un momento de redefinición, estás exactamente donde empieza el verdadero crecimiento.
          </p>
        </div>

        {/* Galería escalonada */}
        <div className="w-full lg:w-3/5 grid grid-cols-2 gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            {[images[0], images[1]].map((img, i) => (
              <button key={i} onClick={() => setSelected(img)} className="relative overflow-hidden rounded-2xl shadow-lg group w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary" style={{ aspectRatio: img.aspect }} aria-label={`Ver imagen: ${img.alt}`}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 30vw" style={{ objectFit: "cover" }} priority className="transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" /></svg>
                </div>
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 mt-8 sm:mt-12">
            {[images[2], images[3]].map((img, i) => (
              <button key={i} onClick={() => setSelected(img)} className="relative overflow-hidden rounded-2xl shadow-lg group w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary" style={{ aspectRatio: img.aspect }} aria-label={`Ver imagen: ${img.alt}`}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 30vw" style={{ objectFit: "cover" }} priority className="transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" /></svg>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      <ImageLightbox selected={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Section2;
