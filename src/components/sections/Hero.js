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
    <section className="relative h-[calc(100vh-12rem)] flex items-center justify-center text-center">
      <div className="absolute -top-[12rem] w-screen h-screen">
        <Image
          src="/images/panoramica-1.jpeg"
          alt="Fondo de la sección Hero"
          fill
          className="object-cover"
          quality={75}
          priority
        />
      </div>
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
      <div
        className={`
                    absolute md:hidden bottom-0 w-full min-h-[42vh] inset-x-auto
                    transition-all duration-1000 ease-out z-10
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
      <div className="absolute w-screen h-[75vh] bg-black opacity-40"></div>
      <div className="max-w-4xl flex flex-col items-start self-start gap-4 lg:gap-8 z-10 lg:p-2 py-3 mx-auto -mt-3 lg:-mt-0 lg:ml-20">
        <h1 className="text-[2.45rem] sm:text-[4.25rem] md:w-9/12 xl:w-full font-semibold text-left leading-tight text-white">
          El cambio empieza cuando seguir igual deja de ser una opción
        </h1>
        <h4 className="text-2xl sm:text-2xl text-left text-white">
          <span className="bg-black/30 leading-relaxed box-decoration-clone rounded-lg">
            Transformo la manera en que las personas piensan, deciden y actúan para lograr cambios reales en sus vidas y organizaciones.
          </span>
        </h4>
        <button
          onClick={scrollToSection} // Ejecutamos la función al hacer clic
          className="inline-flex items-center justify-center px-6 py-3 border-2 bg-transparent rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-black border-primary text-primary"
        >
          Descubrí mas
        </button>
      </div>
    </section>
  );
}
