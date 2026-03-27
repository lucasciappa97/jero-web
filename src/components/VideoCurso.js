"use client";
import React, { useEffect, useState, useRef } from "react";
import Player from "@vimeo/player";
import Image from "next/image";

function VideoCurso() {
  const [showBuyButton, setShowBuyButton] = useState(false);
  const containerRef = useRef(null); // Usamos Ref en lugar de ID fijo
  const playerRef = useRef(null);

  useEffect(() => {
    // Verificamos que el div exista en el DOM
    if (!containerRef.current) return;

    // Inicializamos el player sobre la referencia actual
    const player = new Player(containerRef.current, {
      id: 785021948,
      responsive: true,
      autopause: false,
    });

    playerRef.current = player;

    player.on("timeupdate", (data) => {
      // Ajuste: 20 segundos (recuerda que data.seconds son segundos)
      // Si quieres 20 minutos, sería 1200
      if (data.duration - data.seconds < 20) {
        setShowBuyButton(true);
      } else {
        setShowBuyButton(false);
      }
    });

    // LIMPIEZA: Fundamental para que funcione al cambiar de página
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy().catch(() => {});
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <section className="pt-36 pb-10 px-4 bg-background-dark w-screen relative left-1/2 -translate-x-1/2">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full min-h-[150px] flex items-center justify-center pb-5">
          <div className="relative w-full flex flex-col items-center justify-center py-10">
            <div className="text-center z-10">
              <h2 className="text-4xl md:text-6xl text-gray-100 font-semibold">
                Inspirate y ganá confianza
              </h2>
              <p className="text-gray-100 mt-6 text-2xl">
                El paso fundamental para liderar y definir tu rumbo.
                
              </p>
            </div>

            <div className="hidden sm:block absolute -right-16 bottom-0 sm:w-56 h-32 transform translate-x-4">
              <div className="relative w-full h-full">
                <Image
                  src="/icons/flecha-abajo-blanca.svg"
                  alt="Flecha decorativa"
                  layout="fill"
                  objectFit="contain"
                  quality={75}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative shadow-2xl rounded-2xl overflow-hidden border border-gray-700 bg-black">
          <div ref={containerRef} className="aspect-video w-full"></div>

          {showBuyButton && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-50 animate-in fade-in duration-700 pointer-events-none">
              <button
                onClick={() => window.open("https://hotmart.com/es/marketplace/productos/configura-tu-mente-para-superar-obstaculos/M97139132F", "_blank")}
                className="pointer-events-auto bg-orange-500 hover:bg-orange-600 text-white text-xl md:text-2xl font-bold py-4 px-10 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase"
              >
                ¡Comprar ahora!
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default VideoCurso;
