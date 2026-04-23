import AccordionCurso from "@/components/AccordionCurso";
import VideoCurso from "@/components/VideoCurso";

export const metadata = {
  title: 'Curso',
  description: 'Inspirate y ganá confianza. El paso fundamental para liderar y definir tu rumbo.',

  openGraph: {
    title: 'Curso | Jerónimo Ciapparelli',
    description: 'Inspirate y ganá confianza. El paso fundamental para liderar y definir tu rumbo.',
    url: 'https://www.jeronimociapparelli.com/course',
    siteName: 'Jerónimo Ciapparelli',
    images: [
      {
        url: 'og/curso.png',
        width: 1200,
        height: 630,
        alt: 'Curso',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curso | Jerónimo Ciapparelli',
    description: 'Inspirate y ganá confianza. El paso fundamental para liderar y definir tu rumbo.',
    images: ['og/curso.png']
  },
};

export default function Page() {
  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 p-4 bg-background-dark">
      <VideoCurso />
      <AccordionCurso />
    </section>
  );
}
