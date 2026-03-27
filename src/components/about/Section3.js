import React from 'react';

const GallerySection = () => {
  const photos = [
    { src: '/images/conferencias-5.jpeg', alt: 'Conferencia' },
    { src: '/images/conferencias-1.jpeg', alt: 'Conferencia' },
    { src: '/images/conferencias-2.jpeg', alt: 'Conferencia' },
    { src: '/images/conferencias-3.jpeg', alt: 'TEDxUNSAM' },
    { src: '/images/conferencias-4.jpeg', alt: 'UTN' },
    { src: '/images/conferencias-0.jpg', alt: 'Cierre del evento' },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-8 tracking-tight">
          Conferencias
        </h2>
        <p className="text-gray-200 leading-relaxed max-w-4xl mx-auto text-xl antialiased">
          Reviví los mejores momentos de mis conferencias. Un espacio donde la innovación, 
          el aprendizaje y el networking se unieron para inspirar a la comunidad.
        </p>
      </div>

      {/* Grid de Imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay sutil al hacer hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-4 font-medium text-sm drop-shadow-md">
                {photo.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;