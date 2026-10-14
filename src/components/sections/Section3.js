import Image from "next/image";
import Link from "next/link";

const conferencias = [
  "Mentalidad de Cambio",
  "De Espectador a Creador",
  "La Ventaja Humana en la Era de la Inteligencia Artificial",
  "Diseño de Conversaciones",
];

export default function Section3() {
  return (
    <section className="bg-background-dark text-gray-100 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
      <div className="flex flex-col lg:flex-row-reverse min-h-[700px]">
        {/* Imagen lateral — ocupa toda la altura */}
        <div className="relative w-full lg:w-7/12 h-72 lg:h-auto flex-shrink-0">
          <Image
            src="/images/conferencias-5.jpeg"
            alt="Jerónimo Ciapparelli en conferencia"
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            quality={85}
            priority
          />
          {/* Overlay degradado hacia la derecha en desktop, hacia abajo en mobile */}
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-l from-transparent to-background-dark" />
        </div>

        {/* Contenido */}
        <div className="flex flex-col justify-center gap-10 px-4 py-16 lg:pl-28 lg:w-5/12">
          {/* Encabezado */}
          <div className="flex flex-col gap-4">
            <span className="text-primary font-semibold uppercase tracking-widest text-xs">
              Jerónimo Ciapparelli · Keynote Speaker
            </span>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-white antialiased">
              Conferencias que
              <br />
              movilizan ideas
              <br />y generan cambios.
            </h2>
            <p className="text-gray-400 leading-relaxed text-base antialiased max-w-md mt-1">
              Charlas diseñadas para desafiar perspectivas, impulsar nuevas
              conversaciones y movilizar a las personas hacia la acción.
            </p>
          </div>

          {/* Lista de conferencias */}
          <ul className="flex flex-col">
            {conferencias.map((title, i) => (
              <li
                key={i}
                className="flex items-baseline gap-5 py-4 border-b border-white/10 group cursor-default"
              >
                <span className="text-white/80 text-lg font-light antialiased leading-snug group-hover:text-white transition-colors duration-200">
                  {title}
                </span>
              </li>
            ))}
          </ul>

          {/* Botón */}
          <div className="flex">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white text-base font-medium antialiased rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-primary-light hover:shadow-primary/30 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              <span>Contratar una conferencia</span>
              <svg
                className="ml-2 -mr-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
