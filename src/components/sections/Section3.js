import Image from "next/image";
import Link from "next/link";

export default function Section3() {
  return (
    <section className="bg-background-dark text-gray-100 py-10 lg:py-32 w-screen relative left-1/2 -translate-x-1/2">
      <div className="mx-auto px-6 lg:w-3/6 sm:flex sm:justify-center gap-3">
        <div className="hidden sm:block sm:w-56 h-56 relative">
          <Image
            src="/icons/flecha-rulo-blanca.svg"
            alt="Fondo de la sección Hero"
            layout="fill"
            objectFit="contain"
            quality={75}
            priority
          />
        </div>
        <div className="flex flex-col items-start py-10 sm:py-0 gap-8 min-h-[300px] lg:w-2/4">
          <h5 className="text-lg">CONFERENCIAS PROFESIONALES</h5>
          <h2 className="text-3xl sm:text-4xl">
            Contrata a Jerónimo como Speaker
          </h2>
          <p className="text-xl font-light">
            La transición hacia una performance ágil es posible. Potencia tu
            equipo.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-6 py-3 border border-gray-100 text-gray-100 bg-transparent text-sm rounded-full shadow-md transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
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
  );
}
