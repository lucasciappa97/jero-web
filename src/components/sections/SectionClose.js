import Link from "next/link";

export default function SectionClose() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-gray-light py-32 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">

        {/* Texto */}
        <div className="flex flex-col items-center gap-5">
          <span className="text-primary font-semibold uppercase tracking-widest text-xs">
            El próximo paso
          </span>
          <h2 className="text-4xl lg:text-6xl font-semibold leading-tight text-primary-dark antialiased">
            ¿Qué necesitas cambiar?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl antialiased">
            Los cambios importantes comienzan con una decisión.
            <br />
            Conversemos sobre cómo puedo acompañarte a dar ese paso.
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-7 py-3.5 bg-primary-dark text-white text-base font-medium antialiased rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-opacity-50"
          >
            <span>Conocer mis programas</span>
            <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-7 py-3.5 border border-primary-dark text-primary-dark bg-transparent text-base font-medium antialiased rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-opacity-50"
          >
            <span>Contactar a Jerónimo</span>
            <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
