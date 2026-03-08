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
    <>
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute top-0 w-screen h-full">
          <Image
            src="/images/panoramica-1.jpeg"
            alt="Fondo de la sección Hero"
            layout="fill"
            objectFit="cover"
            quality={75}
            priority
          />
        </div>
        <div
          className={`
                    hidden md:block md:absolute md:w-1/2 md:min-h-[80vh] inset-x-auto bottom-0 right-0 z-10
                    transition-all duration-1000 ease-out 
                    ${animationClasses} 
                `}
        >
          <Image
            src="/images/heroo.png"
            alt="Imagen de Jero"
            layout="fill"
            objectFit="contain"
            quality={75}
            priority
          />
        </div>
        <div
          className={`
                    absolute md:hidden bottom-0 w-full min-h-[50vh] inset-x-auto
                    transition-all duration-1000 ease-out z-10
                    ${animationClasses} 
                `}
        >
          <Image
            src="/images/hero-mitad.png"
            alt="Imagen de Jero"
            layout="fill"
            objectFit="contain"
            quality={75}
            priority
          />
        </div>
        <div className="absolute w-screen h-full bg-black opacity-40"></div>
        <div className="max-w-4xl flex flex-col items-start space-y-3 lg:space-y-8 mb-52 z-10 p-2 mx-auto lg:ml-48 mt-44 h-1/2">
          <h1 className="text-6xl sm:text-8xl font-semibold text-left text-white mb-4">
            Crea tu nueva identidad
          </h1>
          <p className="text-2xl sm:text-2xl text-left text-white mb-8">
            <span className="bg-black/30 leading-relaxed box-decoration-clone rounded-lg">
              Comienza a diseñar la transición profesional que te permita vivir
              la vida que realmente deseas
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
    </>
  );
}
