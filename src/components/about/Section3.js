"use client";
import Image from "next/image";
import React, { useState } from 'react';
import ImageLightbox from '../ImageLightbox';

const GallerySection = () => {
  const photos = [
    { src: '/images/conferencias-5.jpeg', alt: 'Conferencia' },
    { src: '/images/conferencias-1.jpeg', alt: 'Conferencia' },
    { src: '/images/conferencias-2.jpeg', alt: 'Conferencia' },
    { src: '/images/conferencias-3.jpeg', alt: 'TEDxUNSAM' },
    { src: '/images/conferencias-4.jpeg', alt: 'UTN' },
    { src: '/images/conferencias-0.jpg',  alt: 'Cierre del evento' },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-background-dark py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Encabezado */}
        <div className="flex flex-col gap-4">
          <span className="text-primary font-semibold uppercase tracking-widest text-xs">
            Galería
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-white antialiased">
            Conferencias
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
          <p className="text-gray-400 leading-relaxed text-lg antialiased max-w-2xl">
            Reviví los mejores momentos de mis conferencias. Un espacio donde la innovación, el aprendizaje y el networking se unieron para inspirar a la comunidad.
          </p>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelected(photo)}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`Ver imagen: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between px-5 py-4">
                <p className="text-white text-sm font-medium drop-shadow">{photo.alt}</p>
                <svg className="w-6 h-6 text-white drop-shadow-lg flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </div>
            </button>
          ))}
        </div>

      </div>

      <ImageLightbox selected={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default GallerySection;

