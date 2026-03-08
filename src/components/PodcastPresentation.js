import React from "react";

const podcastList = [
  {
    id: 1,
    title: "Episodio 1: Reinventarnos en el rol",
    spotifyUri: "spotify:episode:2ZSsw4X5Y6YGM6DyvURAK6",
  },
  {
    id: 2,
    title: "Episodio 2: Que motiva a las personas a trabajar",
    spotifyUri: "spotify:episode:1MFn1vBurt6UnbZGLGRp2p",
  },
  {
    id: 3,
    title: "Episodio 3: Una organización, dos estructuras",
    spotifyUri: "spotify:episode:6xL0SZp93Jgicd8U0lOkoG",
  },
  {
    id: 4,
    title: "Episodio 4: No necesitas controlar todo",
    spotifyUri: "spotify:episode:41V9BE9hVksaWwk09UkXnA",
  },
  {
    id: 5,
    title: "Episodio 5: Adios al rechazo",
    spotifyUri: "spotify:episode:1YnWC0sQDcgQyVrd13Jk6u",
  },
  {
    id: 6,
    title: "Episodio 6: Activa tu fuerza interna",
    spotifyUri: "spotify:episode:5V4OPoYui1hM792w8kNVNZ",
  },
];

const PodcastSection = () => {
  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-1">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {podcastList.map((podcast) => (
            <div
              key={podcast.id}
              className="flex flex-col items-center place-content-between p-4 rounded-2xl shadow-xl bg-background-dark transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-3xl border border-transparent hover:border-indigo-500"
            >
              <h3 className="text-lg font-semibold text-primary-white mb-4 text-center line-clamp-2">
                {podcast.title}
              </h3>
              <div className="w-24 h-1 bg-indigo-500 rounded-full mb-6"></div>
              
              <iframe
                className="w-full rounded-lg"
                src={`https://open.spotify.com/embed/episode/${podcast.spotifyUri.split(":").pop()}?utm_source=generator`}
                height="152" 
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={podcast.title}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
