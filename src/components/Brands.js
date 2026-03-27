import Image from "next/image";

const Brands = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-900">
          PARTICIPO COMO SPEAKER Y MENTOR EN
        </h2>

        {/* Contenedor de Logotipos */}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {/* LOGOTIPO 1: Transistor */}
          <Image
            width={158}
            height={48}
            src="/icons/brands/ted.png"
            alt="Transistor"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 object-right"
            unoptimized // Necesario para imágenes SVG externas
          />

          {/* LOGOTIPO 2: Reform */}
          <Image
            width={158}
            height={48}
            src="/icons/brands/singularity.png"
            alt="Reform"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            unoptimized
          />

          {/* LOGOTIPO 3: Tuple */}
          <Image
            width={158}
            height={48}
            src="/icons/brands/vistage.webp"
            alt="Tuple"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            unoptimized
          />

          {/* LOGOTIPO 4: SavvyCal */}
          <Image
            width={158}
            height={48}
            src="/icons/brands/digital-house.jpeg"
            alt="SavvyCal"
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            unoptimized
          />

          {/* LOGOTIPO 5: Statamic */}
          <Image
            width={158}
            height={48}
            src="/icons/brands/ref.png"
            alt="Statamic"
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
