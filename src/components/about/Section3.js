import React from 'react';

const GallerySection = () => {
  const photos = [
    { src: '/images/foto-grupal-06.jpg', alt: 'Conferencia Principal' },
    { src: '/images/foto-grupal-02.jpeg', alt: 'Networking' },
    { src: '/images/foto-grupal-03.jpeg', alt: 'Talleres' },
    { src: '/images/foto-grupal-04.JPG', alt: 'Ponentes destacados' },
    { src: '/images/foto-grupal-05.jpg', alt: 'Panel de expertos' },
    { src: '/images/foto-grupal-01.jpeg', alt: 'Cierre del evento' },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-8 tracking-tight">
          Conferencias
        </h2>
        <p className="text-gray-200 leading-relaxed max-w-4xl mx-auto text-xl antialiased">
          Revive los mejores momentos de nuestras conferencias. Un espacio donde la innovación, 
          el aprendizaje y el networking se unieron para inspirar a la comunidad.
        </p>
      </div>

      {/* Grid de Imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
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