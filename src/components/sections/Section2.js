import Image from "next/image";
import PodcastSection from "../PodcastPresentation";

const videos = [
  {
    id: 1,
    title: "TEDxUNSAM Experiment 2017",
    youtubeId: "EoV5I24W5r0",
  },
  {
    id: 2,
    title: "La parte humana",
    youtubeId: "SXpyob4RelY",
  },
  {
    id: 3,
    title: "Impacto & Influencia",
    youtubeId: "sif-sQvLX8s",
  },
];

export default function Section2() {
  return (
    <section className="mx-auto px-4 pb-8">

      <div className="flex flex-col gap-8 py-16">
        <div className="flex py-8">
          <div className="flex flex-col gap-8">
            <div className="hidden sm:block sm:w-56 h-20 relative">
              <Image
                src="/icons/youtube.png"
                alt="Fondo de la sección Hero"
                layout="fill"
                objectFit="contain"
                quality={75}
                priority
              />
            </div>
            <h5 className="text-4xl sm:text-5xl">Reflexiones para progresar</h5>
            <p className="text-xl sm:text-2xl text-thin">
              Pensadas para quienes se animan a cuestionar el presente y cambiar su futuro.
            </p>
          </div>
          <div className="hidden sm:block sm:w-56 h-32 relative self-end">
            <Image
              src="/icons/flecha-abajo.svg"
              alt="Fondo de la sección Hero"
              layout="fill"
              objectFit="contain"
              quality={75}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col items-center flex-1">
              <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-primary-black text-center">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="relative py-6">
        <div className="absolute inset-0 flex items-center justify-self-center w-2/4" aria-hidden="true">
          <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
        </div>
        <div className="relative flex justify-center text-sm font-medium">
        </div>
      </div>

      <div className="flex flex-col py-8">
          <div className="flex flex-col gap-6 items-center self-center">
            <h5 className="text-4xl sm:text-5xl">¡Escucha mis podcasts!</h5>
            <p className="text-xl sm:text-2xl text-thin">
              Inspirate con contenido gratuito y de valor.
            </p>
            <div className="hidden sm:block sm:w-64 sm:h-36 -mt-5 relative">
              <Image
                src="/icons/podcast.jpg"
                alt="Fondo de la sección Hero"
                layout="fill"
                objectFit="contain"
                quality={75}
                priority
              />
            </div>
          </div>
        <PodcastSection/>
      </div>
      
    </section>
  );
}
