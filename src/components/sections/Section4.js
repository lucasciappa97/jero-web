import Image from "next/image";
import InfiniteScroll from "../InfiniteScroll";

export default function Section4() {
  return (
    <section className="mx-auto px-3 py-10 flex flex-col items-center gap-10">
      <h3 className="text-3xl sm:text-4xl text-center font-light sm:w-2/4 sm:py-8">
        Aprende y pasa a la acción con estos recursos
      </h3>
      <InfiniteScroll />
      <div className="flex flex-col justify-between sm:flex-row gap-6 w-full xl:w-3/4 py-6">
        <div className="flex flex-col gap-5 p-6 bg-background-dark text-white w-full h-auto rounded-xl">
          <span className="font-light text-sm">NEWSLETTER</span>
          <div className="w-20 h-20 sm:w-32 relative">
            <Image
              src="/icons/flecha-carta-blanco.png"
              alt="Fondo de la sección Hero"
              layout="fill"
              objectFit="contain"
              quality={75}
              priority
              />
          </div>
          <h5 className="text-2xl">
            Cortito y al pie, un correo que te suma a la vida
          </h5>
          <p>
            Todos los domingos envío un correo electrónico exclusivo con las
            cinco cosas más interesantes que estuve explorando y analizando
            durante la semana.
          </p>
          <div>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-white text-white bg-transparent text-sm rounded-full shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              <span>Suscribite</span>
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
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 p-6 bg-gray-100 text-gray-800 w-full h-auto border border-gray-400 rounded-xl">
          <span className="font-light text-sm">PODCAST</span>
          <div className="w-20 h-20 sm:w-32 relative">
            <Image
              src="/icons/podcast.png"
              alt="Fondo de la sección Hero"
              layout="fill"
              objectFit="contain"
              quality={75}
              priority
              />
          </div>
          <h5 className="text-2xl">Pasá a la acción - Episodios semanales</h5>
          <p>
            Podcast semanal, donde cada lunes vas a poder escuchar una píldora
            de conocimiento práctico sobre productividad, mentalidad y negocios
            🔥
          </p>
          <div>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-black text-black bg-gray-100 text-sm rounded-full shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              <span>Escuchar</span>
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
