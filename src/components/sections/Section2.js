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
    <section className="mx-auto px-6 py-20 max-w-6xl">

      {/* Bloque: Videos */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6 flex-shrink-0">
              <Image src="/icons/yb.png" alt="YouTube" layout="fill" objectFit="contain" quality={90} />
            </div>
            <span className="text-primary font-semibold uppercase tracking-widest text-xs">
              Videos
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-primary-dark antialiased">
            Reflexiones para progresar
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl antialiased">
            Pensadas para quienes se animan a cuestionar el presente y cambiar su futuro.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col flex-1 gap-3">
              <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-base font-medium text-gray-700 antialiased">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Divisor */}
      <div className="w-full border-t border-gray-200 my-20" />

      {/* Bloque: Podcasts */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6 flex-shrink-0">
              <Image src="/icons/podcast.png" alt="Podcast" layout="fill" objectFit="contain" quality={90} />
            </div>
            <span className="text-primary font-semibold uppercase tracking-widest text-xs">
              Podcast
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-primary-dark antialiased">
            Conversaciones que transforman
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>
        <PodcastSection />
      </div>

    </section>
  );
}

