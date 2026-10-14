"use client";
import React, { useState } from "react";

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

const VISIBLE_BY_DEFAULT = 3;

const PodcastCard = ({ podcast, index, isNew }) => (
  <div
    className="flex flex-col p-6 rounded-2xl shadow-xl bg-background-dark transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-3xl border border-transparent hover:border-indigo-500"
    style={isNew ? { animation: `fadeInUp 0.4s ease both`, animationDelay: `${index * 0.1}s` } : {}}
  >
    <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3">
      Episodio {podcast.id}
    </span>
    <h3 className="text-base font-semibold text-primary-white leading-snug line-clamp-2 mb-4 antialiased">
      {podcast.title.replace(/^Episodio \d+: /, "")}
    </h3>
    <div className="w-16 h-px bg-white/20 rounded-full mb-5"></div>
    <iframe
      className="w-full rounded-xl"
      src={`https://open.spotify.com/embed/episode/${podcast.spotifyUri.split(":").pop()}?utm_source=generator`}
      height="152"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title={podcast.title}
    ></iframe>
  </div>
);

const PodcastSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visiblePodcasts = showAll ? podcastList : podcastList.slice(0, VISIBLE_BY_DEFAULT);

  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-1">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {visiblePodcasts.map((podcast, i) => (
            <PodcastCard
              key={podcast.id}
              podcast={podcast}
              index={i}
              isNew={showAll && i >= VISIBLE_BY_DEFAULT}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center justify-center px-5 py-2.5 border border-primary text-primary bg-transparent text-sm rounded-full transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 group/btn"
          >
            <span>{showAll ? "Ver menos episodios" : "Ver más episodios"}</span>
            <svg
              className={`ml-2 w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : "group-hover/btn:translate-x-1"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;

