"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("jeronimo");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const animationClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-24";
  return (
    <section className="relative h-[calc(100vh-12rem)] flex items-center justify-center">

      {/* Fondo panorámico */}
      <div className="absolute -top-[12rem] w-screen h-screen">
        <Image
          src="/images/panoramica-1.jpeg"
          alt="Fondo de la sección Hero"
          fill
          className="object-cover object-top"
          quality={75}
          priority
        />
      </div>

      {/* Imagen de Jero cuerpo entero — solo desktop */}
      <div
        className={`
          hidden md:block md:absolute md:w-2/5 md:min-h-[70vh] inset-x-auto bottom-0 right-0 z-10
          transition-all duration-1000 ease-out 
          ${animationClasses} 
        `}
      >
        <Image
          src="/images/jero-sin-fondo-izq.png"
          alt="Imagen de Jero"
          layout="fill"
          objectFit="contain"
          quality={75}
          priority
        />
      </div>

      {/* Overlay — cubre hasta el header */}
      <div className="absolute -top-[12rem] -left-4 sm:-left-6 lg:-left-8 w-screen h-screen bg-black/50 md:hidden" />
      <div className="absolute w-screen h-[75vh] bg-black opacity-40 hidden md:block" />

      {/* Contenido */}
      <div
        className={`
          relative z-10 w-full max-w-4xl px-8
          flex flex-col items-start text-left gap-4
          mb-28 md:mb-0 md:max-w-5xl md:gap-6 md:px-4 md:py-3
        `}
      >

        {/* Eyebrow — solo mobile */}
        {/* <span className="md:hidden text-xs font-semibold tracking-[0.25em] uppercase text-primary">
          Jerónimo Ciapparelli
        </span> */}

        <h1 className="text-[2.2rem] md:text-[4.25rem] md:w-9/12 font-semibold leading-[1.15] text-white">
          El cambio empieza cuando seguir igual deja de ser una opción
        </h1>

        {/* Línea decorativa */}
        <div className="w-12 h-[2px] bg-primary md:hidden" />

        <p className="text-lg md:text-2xl text-white/75 max-w-[280px] sm:max-w-2xl leading-relaxed">
          Transformo la manera en que las personas piensan, deciden y actúan para lograr cambios reales.
        </p>

        <button
          onClick={scrollToSection}
          className="mt-2 inline-flex items-center justify-center px-6 py-3 border-2 bg-transparent rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-black border-primary text-primary"
        >
          Descubrí más
        </button>
      </div>
    </section>
  );
}
