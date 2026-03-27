import React from "react";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    id: 1,
    src: "/images/presentacion-libro-02.JPG",
    alt: "Jerónimo Ciapparelli con el libro creadores",
  },
  {
    id: 2,
    src: "/images/jero-con-libro.jpeg",
    alt: "Jerónimo Ciapparelli y su presentación del libro creadores",
  },
  {
    id: 3,
    src: "/images/presentacion-libro-01.JPG",
    alt: "Jerónimo Ciapparelli y su presentación del libro creadores",
  },
];

const BookPresentationSection = () => {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 bg-background-dark p-4">
      <div className="mx-auto px-4 sm:px-6 max-w-screen-2xl">
        <div className="min-h-[90vh] flex flex-col-reverse lg:flex-row items-start lg:space-x-12 pt-52 lg:pt-36 pb-20">
          <div className="lg:w-2/4 self-center mb-10 lg:mb-0">
            <div className="w-80 h-42 sm:w-full relative rounded-lg overflow-hidden transform hover:scale-[1.02] transition duration-300">
              <Image
                src="/images/libro-sin-fondo.png"
                alt="Portada de [Título del Libro]"
                width={700}
                height={700}
                layout="responsive"
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8 lg:w-2/3 lg:min-h-[80vh]">
            <span className="text-xl font-semibold text-primary-light uppercase tracking-wider">
              ¡Ya disponible!
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white uppercase leading-tight">
              Creadores
            </h1>

            <p className="text-primary-white leading-relaxed max-w-prose text-xl antialiased">
              Si estabas buscando una ayuda para redefinir tu rumbo y no sabés
              que hacer, este libro pasará a ser tu mentor. Jerónimo no escatima
              y te comparte paso a paso su trayecto, para hacer más fácil el
              tuyo. Una lectura totalmente inspiradora y estimulante que nos
              incita a seguir nuestro propio camino.
            </p>

            <ul className="mt-8 space-y-3 text-primary-white leading-relaxed max-w-prose text-lg antialiased">
              <li className="flex items-start">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-primary-light mr-2 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Aprenderás a transitar el camino de la dependencia laboral
                  hacia la autorrealización
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-primary-light mr-2 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Descubrirás que el fracaso no es un hecho inamobible, sino una
                  interpretación capitalizable para tu evolución
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-primary-light mr-2 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Ideal para profesionales que se sienten estancados y buscan
                  independencia o un cambio de carrera trascendental
                </span>
              </li>
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="https://www.libellaediciones.com.ar/productos/creadores/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary-white bg-primary text-lg rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-primary-light hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                <span>Comprar ahora</span>
                <svg
                  className="ml-2 -mr-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-screen relative left-1/2 -translate-x-1/2 bg-gray-100">
          <section className="max-w-7xl mx-auto px-6 py-28 font-sans">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-bold leading-relaxed max-w-prose antialiased mb-8">
                Algunas imágenes de la presentación
              </h2>
              <p className="leading-relaxed max-w-prose text-lg antialiased">
                Presentación oficial de Creadores en la 48° Feria del Libro. El
                7 de mayo de 2024, lo celebramos rodeados de familia, amigos y
                una comunidad decidida a rediseñar su camino profesional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-[500px]">
              <div className="relative overflow-hidden rounded-2xl shadow-sm md:col-span-3">
                <Image
                  src="/images/foto-libro-gente1.jpeg"
                  alt="Descripción de la imagen ancha"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="100vw"
                />
              </div>
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="relative overflow-hidden rounded-2xl shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BookPresentationSection;
