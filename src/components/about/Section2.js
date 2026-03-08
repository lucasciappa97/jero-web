import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="p-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-24 items-start">
        {/* Bloque de Texto (4 columnas en escritorio) */}
        <div className="lg:col-span-4 space-y-6 text-stone-700 leading-relaxed text-lg sm:w-4/12">
          <p className="text-gray-200 leading-relaxed max-w-prose text-xl antialiased">
            Soy autor de CREADORES. De la dependencia laboral a la
            autorrealización. He trabajado con empresas y profesionales en
            procesos de cambio y cultura organizacional. Me apasiona ayudar a
            convertir la incertidumbre en confianza. Creo que toda transición es
            una invitación a construir una nueva versión de uno mismo.
          </p>
          <p className="text-gray-200 leading-relaxed max-w-prose text-xl antialiased">
            Mi trabajo no es decirte qué hacer, sino ayudarte a ver con claridad
            quién estás listo para ser. Acompaño procesos que requieren coraje,
            enfoque y coherencia. Si estás en un momento de redefinición, estás
            exactamente donde empieza el verdadero crecimiento.
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:w-8/12">
          <div className="relative h-fit w-full overflow-hidden rounded-2xl shadow-xl group">
            <Image
              src="/images/jero-05.jpg"
              alt="Portada de [Título del Libro]"
              width={700}
              height={700}
              layout="responsive"
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl group md:mt-12">
            <Image
              src="/images/jero-charla01.jpeg"
              alt="Portada de [Título del Libro]"
              width={700}
              height={700}
              layout="responsive"
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
          </div>

          <div className="relative h-fit w-full overflow-hidden rounded-2xl shadow-xl group">
            <Image
              src="/images/jero-16.JPG"
              alt="Portada de [Título del Libro]"
              width={700}
              height={700}
              layout="responsive"
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl group md:mt-12">
            <Image
              src="/images/jero-02.jpg"
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

export default Section2;
