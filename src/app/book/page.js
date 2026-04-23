import BookPresentationSection from "@/components/BookPresentation";

export const metadata = {
  title: 'Libro',
  description: 'Con este libro, aprenderás a transitar el camino de la dependencia laboral hacia la autorrealización',

  openGraph: {
    title: 'Libro | Jerónimo Ciapparelli',
    description: 'Con este libro, aprenderás a transitar el camino de la dependencia laboral hacia la autorrealización',
    url: 'https://www.jeronimociapparelli.com/book',
    siteName: 'Jerónimo Ciapparelli',
    images: [
      {
        url: 'og/book.png',
        width: 1200,
        height: 630,
        alt: 'Jerónimo Ciapparelli - Libro',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Libro | Jerónimo Ciapparelli',
    description: 'Con este libro, aprenderás a transitar el camino de la dependencia laboral hacia la autorrealización',
    images: ['og/book.png']
  },
};

export default function Page() {
  return <BookPresentationSection />;
}
