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
        <h1 className="text-[2.70rem] sm:text-[5.25rem] md:w-9/12 xl:w-full font-semibold text-left leading-tight text-white">
          Redefiní el rumbo de tu carrera
        </h1>
        <h3 className="text-3xl hidden sm:block sm:text-4xl font-semibold text-left text-white">
          Creá tu nueva identidad
        </h3>
        <p className="text-2xl sm:text-2xl text-left text-white">
          <span className="bg-black/30 leading-relaxed box-decoration-clone rounded-lg">
            Empezá a diseñar la transición profesional que te permita vivir la
            vida que realmente deseas
          </span>
        </p>
        <button
          onClick={scrollToSection} // Ejecutamos la función al hacer clic
          className="inline-flex items-center justify-center p-3 border-2 bg-transparent border-primary rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-black border-primary text-primary"
        >
          <svg
            className="w-6 h-6 text-[#df801b]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
