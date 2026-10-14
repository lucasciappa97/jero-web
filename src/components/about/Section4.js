"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ImageLightbox from "../ImageLightbox";

const galleryImages = [
  { id: 1, src: "/images/presentacion-libro-02.JPG", alt: "Jerónimo Ciapparelli con el libro Creadores" },
  { id: 2, src: "/images/jero-con-libro.jpeg", alt: "Jerónimo Ciapparelli y su presentación del libro Creadores" },
  { id: 3, src: "/images/presentacion-libro-01.JPG", alt: "Jerónimo Ciapparelli y su presentación del libro Creadores" },
];

const heroImg = { src: "/images/foto-libro-gente1.jpeg", alt: "Presentación del libro Creadores en la Feria del Libro" };

const Section4 = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-background-dark">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-24">
        {/* Presentación del libro */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex flex-col gap-8 lg:w-3/5">
            <div className="flex flex-col gap-4">
              <span className="text-primary font-semibold uppercase tracking-widest text-xs">
                Mi libro
              </span>
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-white antialiased">
                Creadores
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full" />
              <p className="text-gray-300 leading-relaxed text-xl antialiased">
                Si estabas buscando una ayuda para redefinir tu rumbo y no sabés
                qué hacer, este libro pasará a ser tu mentor. Jerónimo no
                escatima y te comparte paso a paso su trayecto, para hacer más
                fácil el tuyo. Una lectura totalmente inspiradora y estimulante
                que nos incita a seguir nuestro propio camino.
              </p>
            </div>
            <ul className="flex flex-col gap-3 text-gray-400 leading-relaxed text-lg antialiased">
              {[
                "Aprenderás a transitar el camino de la dependencia laboral hacia la autorrealización",
                "Descubrirás herramientas concretas para reinventarte profesionalmente con propósito",
                "Ideal para profesionales que se sienten estancados y buscan independencia o un cambio de carrera trascendental",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-primary mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link
                href="https://www.libellaediciones.com.ar/productos/creadores/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-lg rounded-lg shadow-md transition-all duration-300 hover:bg-primary-light hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                <span>Comprar ahora</span>
                <svg
                  className="w-5 h-5"
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

          <div className="w-full lg:w-2/5 flex-shrink-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <Image
                src="/images/libro-sin-fondo.png"
                alt="Portada del libro Creadores"
                width={700}
                height={700}
                layout="responsive"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Galería de la presentación */}
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-semibold uppercase tracking-widest text-xs">
              Galería
            </span>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-white antialiased">
              Presentación del libro
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
            <p className="text-gray-400 leading-relaxed text-lg antialiased max-w-2xl">
              Presentación oficial de Creadores en la 48° Feria del Libro. El 7
              de mayo de 2024, lo celebramos rodeados de familia, amigos y una
              comunidad decidida a rediseñar su camino profesional.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button onClick={() => setSelected(heroImg)} className="group relative overflow-hidden rounded-2xl shadow-lg sm:col-span-2 lg:col-span-3 aspect-[16/7] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary" aria-label={`Ver imagen: ${heroImg.alt}`}>
              <Image src={heroImg.src} alt={heroImg.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="100vw" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" /></svg>
              </div>
            </button>
            {galleryImages.map((img) => (
              <button key={img.id} onClick={() => setSelected(img)} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary" aria-label={`Ver imagen: ${img.alt}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
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

export default Section4;
