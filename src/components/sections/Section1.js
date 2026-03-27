import Image from "next/image";
import Brands from "../Brands";
import VideoCurso from "../VideoCurso";
import Link from "next/link";

export default function Section1() {
  return (
    <>
      <section id="jeronimo" className="mx-auto px-4 pb-28">
        <Brands />
        <div className="flex flex-col-reverse lg:flex-row min-h-[600px] items-center">
          <div className="w-full mt-10 lg:w-1/2 h-[300px] lg:h-[600px] relative">
            <Image
              src="/images/jero-naranja.jpg"
              alt="Fondo de la sección Hero"
              layout="fill"
              objectFit="contain"
              quality={75}
              priority
            />
          </div>
          <div className="flex flex-col items-start gap-4 w-full lg:w-1/2 p-3 lg:p-8">
            <h2 className="text-4xl mb-3 font-semibold leading-relaxed max-w-prose antialiased">
              Soy Jerónimo Ciapparelli
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-prose text-xl antialiased">
              Hace más de 10 años dejé el mundo corporativo en roles de
              liderazgo para acompañar y potenciar a personas, líderes y equipos
              a ganar claridad, reinventarse y avanzar decididos en sus etapas
              de transición, convirtiendo la incertidumbre en una oportunidad
              para ganar confianza, dirección y logros reales.
            </p>

            <p className="text-gray-800 leading-relaxed max-w-prose text-xl antialiased">
              Si sentiste alguna vez:
            </p>

            <div className="flex flex-col gap-2 w-full my-1">
              <div className="flex items-start gap-3">
                {" "}
                <span className="w-1.5 h-6 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                <p className="text-gray-800 leading-relaxed max-w-prose text-xl antialiased">
                  Que no sabés quién sos fuera de la oficina.
                </p>
              </div>
              <div className="flex items-start gap-3">
                {" "}
                <span className="w-1.5 h-6 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                <p className="text-gray-800 leading-relaxed max-w-prose text-xl antialiased">
                  Que querés dar el salto pero no tenés las herramientas sin la
                  estructura de una gran empresa.
                </p>
              </div>
              <div className="flex items-start gap-3">
                {" "}
                <span className="w-1.5 h-6 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                <p className="text-gray-800 leading-relaxed max-w-prose text-xl antialiased">
                  Que el costo de lograr los objetivos corporativos fué tu
                  tiempo, tu energía y muchos momentos importantes con tu
                  familia.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 mt-6 border border-black text-black bg-transparent leading-relaxed max-w-prose text-lg antialiased rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:border-primary hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 group"
            >
              <span>Contactame</span>
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
      </section>
      <VideoCurso />
    </>
  );
}
