"use client";

import Image from "next/image";

const Section1 = () => {
  return (
    <section className="p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-10 sm:gap-24 items-start">
        
        <div className="space-y-12 text-stone-700 leading-relaxed text-lg sm:w-6/12">
          <h2 className="text-6xl font-semibold text-gray-200 mb-4">
            Conocé a Jerónimo Ciapparelli
          </h2>
          <h6 className="text-gray-200 leading-relaxed max-w-prose text-2xl antialiased">
            Speaker internacional, consultor de negocios y emprendedor de alto
            impacto.
          </h6>
          <p className="text-gray-200 leading-relaxed max-w-prose text-xl antialiased">
            Soy Jerónimo Ciapparelli, mentor y speaker en procesos de transición
            de carrera. Durante años trabajé en el mundo corporativo hasta que
            decidí rediseñar mi propio rumbo. Ese proceso no fue un salto
            impulsivo, fue una transición consciente que transformó mi identidad
            por completo.
          </p>
          <p className="text-gray-200 leading-relaxed max-w-prose text-xl antialiased">
            Desde entonces acompaño a personas que sienten que su
            carrera ya no las representa. Trabajo con líderes que saben que
            pueden dar más, pero no encuentran dirección. Guío equipos que
            necesitan redefinir su forma de operar para alcanzar resultados
            reales. Mi enfoque combina claridad estratégica, profundidad
            emocional y acción concreta.
          </p>
        </div>

        <div className="flex gap-6 sm:w-5/12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <Image
              src="/images/jero-01.JPEG"
              alt="Portada de [Título del Libro]"
              width={700}
              height={700}
              layout="responsive"
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
