"use client";
import React, { useState } from "react";

const AccordionCurso = () => {
  const [openSection, setOpenSection] = useState(0); // La primera sección abre por defecto

  const seccionesCurso = [
    {
      titulo: "Bienvenida",
      clases: ["Empezamos"],
    },
    {
      titulo: "El observador en vos",
      clases: [
        "Mirada vs Multimirada",
        "El impacto de los modelos mentales en nuestra vida",
        "La Proyección",
        "¿Qué podemos hacer para superar obstáculos?",
        "Guía Práctica ",
      ],
    },
    {
      titulo: "La Mentalidad que NO necesitas",
      clases: [
        "La mentalidad reactiva",
        "Modelo Mental Reactivo",
        "¿Querés salir de este paradigma?",
        "Te muestro cómo funciona",
        "Guía Práctica",
      ],
    },
    {
      titulo: "La Mentalidad que Sí Necesitas",
      clases: [
        "La mentalidad proactiva",
        "Modelo Mental Proactivo",
        "Automatizando esta mentalidad",
        "Te muestro cómo funciona",
        "Guía Práctica",
      ],
    },
    {
      titulo: "Dinámica de las emociones",
      clases: [
        "Lógica emocional reactiva",
        "Lógica emocional proactiva",
        "Respuesta emocional",
        "Estrategias de la mentalidad reactiva",
        "Estrategias de la mentalidad proactiva",
        "Guía Práctica",
      ],
    },
    {
      titulo: "La clave de todo",
      clases: [
        "Nuestras necesidades y la forma en que las alimentamos",
        "Nuestros Valores",
        "Nuestras reglas mentales",
        "Las habilidades Clave",
        "Guía Práctica ",
      ],
    },
    {
      titulo: "Lección Final",
      clases: ["Lección Final"],
    },
  ];

  const secciones = Array.from({ length: seccionesCurso.length }, (_, i) => ({
    id: i,
    titulo: `Sección ${i + 1}: ${seccionesCurso[i].titulo}`,
    clases: seccionesCurso[i].clases,
  }));

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 pb-20">
      <div className="relative pb-12 flex items-center justify-center animate-in fade-in duration-700">
        <button
          onClick={() => window.open("https://hotmart.com/es/marketplace/productos/configura-tu-mente-para-superar-obstaculos/M97139132F", "_blank")}
          className="pointer-events-auto bg-orange-500 hover:bg-orange-600 text-white text-xl md:text-2xl font-bold py-4 px-10 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase"
        >
          ¡Comprar ahora!
        </button>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-8 border-l-4 border-orange-500 pl-4">
        Contenido del Curso
      </h3>

      <div className="space-y-4">
        {secciones.map((seccion) => (
          <div
            key={seccion.id}
            className="border border-gray-700 rounded-xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm transition-all duration-300"
          >
            {/* Encabezado del Acordeón */}
            <button
              onClick={() => toggleSection(seccion.id)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-800 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-bold text-md">
                  {seccion.id + 1}
                </span>
                <span className="text-gray-100 font-medium md:text-xl">
                  {seccion.titulo}
                </span>
              </div>

              {/* Icono de Flecha */}
              <svg
                className={`w-6 h-6 text-gray-200 transition-transform duration-300 ${
                  openSection === seccion.id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Contenido (Clases) */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                openSection === seccion.id
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="px-5 py-3 border-t border-gray-800 space-y-3 bg-black/20">
                {seccion.clases.map((clase, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300 py-2 group cursor-default"
                  >
                    <svg
                      className="w-5 h-5 text-orange-500/60 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">{clase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionCurso;
